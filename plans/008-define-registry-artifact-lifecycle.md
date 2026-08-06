# Plan 008: Enforce a deterministic lifecycle for generated registry artifacts

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- package.json .github/workflows/ci.yml README.md CONTRIBUTING.md public/r scripts`

## Status

- **Priority**: P2
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/006-harden-registry-build.md`
- **Category**: dx
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

`public/r` is both a tracked release artifact and regenerated unconditionally
by every application build. CI runs the generator but never checks whether it
changed tracked files, so authored registry changes can be merged with stale
JSON. This plan keeps the existing checked-in release model and adds an
explicit deterministic drift gate.

## Current state

- `public/r` contains 339 tracked JSON artifacts, including
  `public/r/registry.json`.
- `package.json:8` runs `registry:build` before every Next build.
- `.github/workflows/ci.yml:38-44` builds and typechecks but never runs
  `git diff --exit-code`.
- `scripts/build-registry.mts` is the source-to-artifact generator.
- `.gitignore:44-47` ignores other generated directories, not `public/r`.

Decision for this plan: retain `public/r` as a checked-in release artifact
because external consumers and static hosting may need it before a deployment
build. Do not switch to ignored build-only output here.

## Commands you will need

| Purpose     | Command               | Expected on success        |
| ----------- | --------------------- | -------------------------- |
| Generate    | `pnpm registry:build` | exit 0                     |
| Drift check | `pnpm registry:check` | exit 0 and no tracked diff |
| Test        | `pnpm test`           | exit 0                     |
| Typecheck   | `pnpm typecheck`      | exit 0                     |
| Lint/format | `pnpm check`          | exit 0                     |

## Scope

**In scope**:

- `package.json`
- `.github/workflows/ci.yml`
- `README.md` or an existing `CONTRIBUTING.md`
- `public/r/**` only if regeneration reveals legitimate existing drift

**Out of scope**:

- Ignoring or deleting `public/r`
- Changing generated JSON contents for unrelated reasons
- Reworking generator security/atomicity (plan 006)
- Release automation or GitHub publishing

## Git workflow

- Branch: `codex/008-registry-artifact-lifecycle`
- Commit: `ci: reject stale registry artifacts`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Confirm deterministic generation

Run `pnpm registry:build` twice. After each run, inspect
`git status --short -- public/r`. If either run changes artifacts differently,
stop; nondeterminism belongs in the generator and must be fixed first.

**Verify**:
`pnpm registry:build && git diff --exit-code -- public/r`
→ exit 0.

### Step 2: Add a portable registry drift command

Add `"registry:check": "pnpm registry:build && git diff --exit-code -- public/r"`
to `package.json`. Keep it non-destructive beyond the generator's normal,
validated output behavior established in plan 006.

**Verify**: `pnpm registry:check` → exit 0.

### Step 3: Gate CI on drift

Add a clearly named CI step after the build/generation that runs
`git diff --exit-code -- public/r`, or invoke `pnpm registry:check` in a
dedicated job if avoiding duplicate generation is practical. On failure, the
log should tell contributors to run `pnpm registry:build` and commit the result.

**Verify**: inspect workflow syntax with the existing repository checker, then
run `pnpm check`.

### Step 4: Document source of truth

Document that `registry.json` and `registry/**` are authored sources,
`public/r/**` is committed generated output, and contributors must run
`pnpm registry:build` after source changes. Add the exact local CI-equivalent
command.

**Verify**:
`rg -n 'public/r|registry:build|registry:check' README.md CONTRIBUTING.md`
→ all concepts are documented in whichever file exists.

### Step 5: Run full gates

**Verify**:
`pnpm test && pnpm typecheck && pnpm check && pnpm registry:check`
→ all exit 0 and `git status --short -- public/r` is empty.

## Test plan

- The drift command itself is the machine-checkable test.
- Manually validate it once by making an uncommitted harmless source fixture
  change, observing non-zero drift, and reverting only that fixture edit with
  an explicit patch. Do not use destructive reset commands.

## Done criteria

- [ ] `pnpm registry:check` exists and passes on synchronized artifacts.
- [ ] CI fails on stale `public/r`.
- [ ] Contributor documentation identifies source and generated paths.
- [ ] Two consecutive generations are deterministic.
- [ ] No unintended generated changes remain.
- [ ] Plan index status updated.

## STOP conditions

- Two consecutive builds produce different bytes.
- Deployment requires `public/r` to be untracked.
- Plan 006 has not landed and generation can still destroy the previous output
  on failure.

## Maintenance notes

Reviewers should expect source and generated artifact diffs together. If the
project later moves to a publish-only model, replace this plan deliberately
rather than silently ignoring `public/r`.
