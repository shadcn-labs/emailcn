# Plan 011: Use one registry import resolver for build and display paths

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- scripts/build-registry.mts lib/format-code.ts lib tests registry`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MEDIUM
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`,
  `plans/006-harden-registry-build.md`
- **Category**: tech-debt
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

Registry import rewriting is implemented twice: once while producing installable
registry JSON and again while formatting source for the documentation UI. The
two implementations have different candidate and failure behavior. A new alias
or edge case can therefore look correct in docs but be broken in the artifact
users install.

One pure resolver, used with an explicit policy at both call sites, makes
displayed and published imports agree and gives path-hardening work one place
to test.

## Current state

- `scripts/build-registry.mts:52-124` creates source-target mappings and
  resolves imports during generation.
- `lib/format-code.ts:19-69` independently recognizes and rewrites similar
  imports for displayed source.
- Both paths depend on registry item files and aliases from
  `registry/bases.ts`, but they do not share validation.
- The generator is stricter because unresolved installable aliases can create
  invalid output; display formatting has historically tolerated more relative
  imports.
- Plan 006 establishes safe path containment and generator failure behavior.

Required design:

```ts
resolveRegistryImport({
  importer,
  specifier,
  sourceTargets,
  policy: "artifact" | "display",
});
```

The candidate-expansion and canonical-target logic is shared. Policy may
control only a documented final fallback; it must not create two algorithms.

## Commands you will need

| Purpose              | Command               | Expected on success |
| -------------------- | --------------------- | ------------------- | --------- | ----------------------------------------------------- | ----------------------- |
| Find implementations | `rg -n 'resolve       | sourceTarget        | specifier | alias' scripts/build-registry.mts lib/format-code.ts` | both call sites visible |
| Test                 | `pnpm test`           | exit 0              |
| Generate             | `pnpm registry:build` | exit 0              |
| Typecheck            | `pnpm typecheck`      | exit 0              |
| Lint/format          | `pnpm check`          | exit 0              |

## Scope

**In scope**:

- A pure shared module such as `lib/registry-import-resolver.ts`
- The resolver's focused tests
- `scripts/build-registry.mts`
- `lib/format-code.ts`
- Exact compatibility checks for generated registry artifacts and displayed
  source

**Out of scope**:

- Output-directory containment and atomic writes (plan 006)
- General TypeScript path alias resolution
- Replacing Shiki or changing source presentation
- Changing the shadcn registry schema
- Adding new registry components or aliases

## Git workflow

- Branch: `codex/011-shared-registry-resolver`
- Commit: `refactor: share registry import resolution`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Capture both existing behaviors

Extract a table-driven fixture set before refactoring. Include:

- exact registry source paths;
- extensionless and explicit-extension imports;
- directory `index` candidates;
- supported aliases;
- same-directory and parent-directory relative imports;
- imports that resemble a registry path but do not exist;
- conflicting candidates and paths outside allowed roots.

Run each fixture through both current implementations and record intended
differences. Treat broken artifact references, not current behavior alone, as
the final authority.

**Verify**: the fixture table makes every current difference explicit.

### Step 2: Extract canonical map construction

Create a shared typed representation for source targets and one function that
builds it from validated registry entries. Reject duplicate canonical source
paths and conflicting aliases with an error naming both entries. Normalize
only repository-style POSIX separators internally; convert Windows input
fixtures before comparison.

**Verify**: tests cover duplicates, conflicts, supported extensions, `index`
files, and Windows separators.

### Step 3: Extract candidate expansion and resolution

Move extension, directory-index, relative, and alias candidate expansion into
the shared module. The resolver must return a discriminated result such as
`resolved`, `external`, `unmapped-relative`, or `invalid`, not an ambiguous
string/undefined pair.

For `policy: "artifact"`, fail on registry-like imports that cannot be mapped
to a published target. For `policy: "display"`, preserve a genuinely local
unmapped relative import only when that matches the captured UI behavior.
External package imports remain unchanged in both modes.

**Verify**: the shared fixture suite passes for both policies and documents the
single allowed policy difference.

### Step 4: Migrate the registry builder

Replace local mapping/resolution helpers in `scripts/build-registry.mts` with
the shared resolver. Keep the plan 006 containment validation before reading
source files and before writing artifacts. Convert `invalid` and unexpected
`unmapped-relative` results into actionable build errors with registry item,
importer, and specifier.

**Verify**: `pnpm registry:build` succeeds and generated output is byte-for-byte
unchanged unless a fixture proves the old output was invalid.

### Step 5: Migrate formatted source

Replace the duplicate logic in `lib/format-code.ts`. Preserve formatting and
highlighting behavior; only the resolved import target may change. Add a
cross-path assertion that every import rewritten in an installable artifact is
rendered to the same target in the corresponding displayed source.

**Verify**: existing source snapshots remain stable, plus the cross-path
fixture passes.

### Step 6: Remove duplication and run gates

Delete local helpers only after repository search proves both callers use the
shared module.

**Verify**:
`pnpm test && pnpm registry:build && pnpm typecheck && pnpm check`
→ all exit 0; `git diff -- public/r` is empty or contains only reviewed
corrections backed by a regression test.

## Test plan

- Table-test canonicalization, extensions, indexes, aliases, relative imports,
  packages, conflicts, traversal, and Windows separators.
- Test artifact and display policies against the same fixture table.
- Add an integration fixture proving generated JSON and displayed source use
  the same rewritten import.
- Regenerate every artifact and inspect any byte changes before accepting them.

## Done criteria

- [ ] Candidate expansion and target mapping exist in one shared module.
- [ ] Artifact and display callers use explicit, documented policies.
- [ ] Duplicate/conflicting registry paths fail deterministically.
- [ ] Generated and displayed import targets agree.
- [ ] No unreviewed `public/r` drift remains.
- [ ] All repository gates pass.
- [ ] Plan index status updated.

## STOP conditions

- Plan 006 has not landed and shared resolution would bypass its containment
  validation.
- The two current behaviors differ in a product-significant case with no
  documented desired contract.
- Regeneration changes many artifacts for reasons not explained by fixtures.
- The shared module would need browser-only or Node-only state that prevents
  one of the existing call sites from using it.

## Maintenance notes

New aliases, supported extensions, or registry roots must be added to the
shared fixture table first. A reviewer should reject resolver logic added
directly to either caller.
