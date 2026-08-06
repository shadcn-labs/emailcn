# Plan 004: Make production builds fail on TypeScript errors

> **Executor instructions**: Follow the plan exactly, run every verification,
> and stop on listed conditions. Update the plan index status when complete
> unless a reviewer maintains it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- next.config.mjs package.json .github/workflows/ci.yml`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: dx
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

`next build` is configured to ignore TypeScript errors. GitHub CI compensates
after the build, but Vercel and direct production builds run `pnpm build` and
can succeed before any typecheck. Type safety should be intrinsic to the
production build command, with CI arranged to avoid redundant work.

## Current state

`next.config.mjs:34-36`:

```js
typescript: {
  ignoreBuildErrors: true,
},
```

`package.json:8`:

```json
"build": "pnpm registry:build && next build"
```

`.github/workflows/ci.yml:38-44` runs build and then typecheck. The current
standalone `pnpm typecheck` passes.

## Commands you will need

| Purpose     | Command          | Expected on success             |
| ----------- | ---------------- | ------------------------------- |
| Typecheck   | `pnpm typecheck` | exit 0                          |
| Build       | `pnpm build`     | exit 0 and includes a type gate |
| Test        | `pnpm test`      | exit 0                          |
| Lint/format | `pnpm check`     | exit 0                          |

## Scope

**In scope**:

- `next.config.mjs`
- `package.json`
- `.github/workflows/ci.yml`

**Out of scope**:

- Relaxing TypeScript strictness or `skipLibCheck`
- Suppressing new type errors
- Changing registry generation behavior
- Framework upgrades

## Git workflow

- Branch: `codex/004-production-typecheck`
- Commit: `build: enforce typecheck before production build`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Remove the Next.js escape hatch

Delete the `typescript.ignoreBuildErrors` block. Do not replace it with another
suppression.

**Verify**:
`rg -n 'ignoreBuildErrors' next.config.mjs`
→ no matches.

### Step 2: Put typecheck before mutating registry generation

Change the production script to run `pnpm typecheck` before
`pnpm registry:build && next build`. Running it first avoids modifying
`public/r` when type safety already fails.

**Verify**: `pnpm typecheck` → exit 0.

### Step 3: Remove redundant CI sequencing

Because `pnpm build` now includes typecheck, either rename the CI job to
`build-and-typecheck` and remove the later standalone step, or keep a separate
parallel typecheck job and make the build script reuse a non-typechecking
internal command. Prefer the simpler first option. Do not leave two sequential
typechecks.

**Verify**:
`pnpm test && pnpm check && pnpm build`
→ all exit 0.

## Test plan

- Existing `pnpm typecheck` is the behavior gate.
- Temporarily introduce a local uncommitted type error only if needed to verify
  failure, then remove it without using destructive git commands. Do not commit
  the probe.
- Final verification must run on a clean source tree.

## Done criteria

- [ ] `ignoreBuildErrors` is absent.
- [ ] `pnpm build` invokes typecheck before registry generation.
- [ ] CI does not run duplicate sequential typechecks.
- [ ] Test/check/build all pass.
- [ ] No type suppressions were added.
- [ ] Plan index status updated.

## STOP conditions

- Removing the flag reveals existing type errors.
- Vercel is configured outside the repository to run a different command.
- Avoiding duplicate work would require a complex CI matrix; keep the redundant
  step and report it rather than broadening scope.

## Maintenance notes

Future deployment commands must call `pnpm build`, not `next build` directly.
Reviewers should reject reintroduction of `ignoreBuildErrors` without a
documented, time-bounded migration plan.
