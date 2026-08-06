# Plan 006: Contain registry paths and publish output transactionally

> **Executor instructions**: Follow every step and verification. Run no
> destructive command against an unresolved path. Stop on a STOP condition and
> report rather than improvising. Update the index status when complete unless
> a reviewer maintains it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- scripts/build-registry.mts scripts/registry-build-core.ts tests/scripts/build-registry.test.ts`

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: security
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

`registry.json` paths are normalized but not contained before they reach
filesystem reads and writes. Absolute, parent-relative, and Windows-style
paths can escape the project or temporary roots. Separately, the build deletes
the last known-good `public/r` before validation and writes new output directly,
so any failure can leave the checkout missing or partially populated.

## Current state

- `scripts/build-registry.mts:55-71` accepts `file.path` and `file.target`
  without absolute/traversal validation.
- `scripts/build-registry.mts:168-182` resolves those values into source and
  temporary paths without verifying containment.
- `scripts/build-registry.mts:192-204` deletes `public/r` before the full build.
- `scripts/build-registry.mts:209-224` directs shadcn straight into final output.
- `scripts/build-registry.mts:248-252` cleans only `.registry-build`.
- Error convention: invalid input throws `TypeError` or `Error` with a
  path-specific message. Preserve that style and avoid logging source contents.

Risky excerpt:

```ts
const sourcePath = posix.normalize(file.path);
sourceTargets.set(sourcePath, targetPath);

const source = await readFile(resolve(PROJECT_DIRECTORY, sourcePath), "utf-8");
const temporaryPath = resolve(TEMP_DIRECTORY, sourcePath);
```

## Commands you will need

| Purpose        | Command                                             | Expected on success              |
| -------------- | --------------------------------------------------- | -------------------------------- |
| Targeted test  | `pnpm test -- tests/scripts/build-registry.test.ts` | exit 0                           |
| Registry build | `pnpm registry:build`                               | exit 0                           |
| Artifact check | `git diff --exit-code -- public/r`                  | exit 0 after deterministic build |
| Typecheck      | `pnpm typecheck`                                    | exit 0                           |
| Lint/format    | `pnpm check`                                        | exit 0                           |

## Scope

**In scope**:

- `scripts/build-registry.mts`
- `scripts/registry-build-core.ts` (create if needed to isolate testable logic)
- `tests/scripts/build-registry.test.ts` (create)

**Out of scope**:

- Changing registry item names, targets, or generated JSON schema
- Refactoring the duplicate display resolver in `lib/format-code.ts` (plan 011)
- Deciding whether generated output remains committed (plan 008)
- Shelling out through a command string

## Git workflow

- Branch: `codex/006-harden-registry-build`
- Commit: `fix: harden registry build filesystem boundaries`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Separate pure validation from orchestration

Move only the manifest/path validation and containment helpers into
`scripts/registry-build-core.ts`, or export them from a side-effect-free module.
The test module must not execute a registry build on import.

Create helpers that:

- reject empty paths;
- reject `path.posix.isAbsolute` and `path.win32.isAbsolute`;
- reject any `..` path segment after normalizing both slash styles;
- resolve a candidate and prove `relative(root, candidate)` is neither
  absolute, `..`, nor prefixed by `..${sep}`;
- validate every item name, `file.path`, and `file.target` before any mutation.

Return normalized safe values rather than repeatedly normalizing unchecked
input.

**Verify**: `pnpm typecheck` → exit 0.

### Step 2: Add cross-platform path regression tests

Test safe nested paths and rejections for:

- POSIX absolute and parent traversal;
- Windows drive, UNC, and backslash parent traversal;
- normalized mid-path traversal such as `a/../../outside`;
- source and target paths resolving outside their allowed roots;
- duplicate source entries with conflicting targets.

Assert error type and a sanitized message naming the field, not secret file
contents.

**Verify**: `pnpm test -- tests/scripts/build-registry.test.ts` → all path cases
pass.

### Step 3: Build into unique staging directories

Create unique temporary source and output directories under known parents,
preferably with `mkdtemp`. Pass the staged output path to `shadcn build`. Do not
delete or write `public/r` until parsing, validation, source transformation,
and the child build all succeed.

Keep `spawnSync` argument-array invocation; do not introduce a shell.

**Verify**: `pnpm registry:build` → exit 0.

### Step 4: Replace final output with rollback

After staged output is verified to contain `registry.json` and the expected
item JSON files:

1. rename existing `public/r` to a unique sibling backup;
2. rename the staged output to `public/r`;
3. delete the backup only after success;
4. if step 2 fails, restore the backup and rethrow;
5. always clean source, staged, and backup paths that are safe to remove.

Use explicit resolved paths and containment assertions before every recursive
remove. Handle absence of a previous output directory.

**Verify**: add an injected/fake runner failure test proving a sentinel file in
the old output survives unchanged.

### Step 5: Validate deterministic successful output

Run `pnpm registry:build`, then confirm committed artifacts did not change.

**Verify**:
`pnpm test && pnpm typecheck && pnpm check && git diff --exit-code -- public/r`
→ all exit 0.

## Test plan

- Pure unit cases for safe and unsafe POSIX/Windows paths.
- Conflict detection.
- Failure-before-mutation test.
- Child-build failure retains previous output.
- Successful replacement removes staging/backup directories.
- No real external command in failure-path unit tests; inject the runner or use
  a temporary fixture.

## Done criteria

- [ ] All manifest paths are validated before filesystem mutation.
- [ ] Resolved paths are proven contained.
- [ ] A failed build preserves the last known-good output.
- [ ] A successful build leaves no staging/backup directories.
- [ ] Generated artifacts remain byte-for-byte deterministic.
- [ ] Test/typecheck/check pass.
- [ ] No out-of-scope files changed.
- [ ] Plan index status updated.

## STOP conditions

- Safe current registry entries fail the new validator.
- The filesystem cannot support the planned rename/rollback behavior on CI.
- Achieving rollback requires deleting an unvalidated or broad directory.
- Shadcn writes outside the staged output path.

## Maintenance notes

Review every recursive remove and rename closely. Future manifest fields that
represent paths must go through the same validator. Plan 011 may later move
import-resolution logic, but must preserve these security invariants.
