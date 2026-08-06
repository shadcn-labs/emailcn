# Plan 005: Publish the MIT license claimed by the repository

> **Executor instructions**: Follow the steps and verifications exactly. Stop
> on any STOP condition. Update `plans/README.md` when complete unless a
> reviewer maintains it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- README.md LICENSE package.json`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: none
- **Category**: docs
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The README calls the project MIT-licensed and links to `LICENSE`, but that file
does not exist. Without an actual grant, users cannot reliably determine their
rights to copy, modify, and redistribute the registry. This plan makes the
existing public claim concrete without changing the license choice.

## Current state

`README.md:43-45`:

```markdown
## License

[MIT](LICENSE)
```

There is no root `LICENSE` file, and `package.json` has no `license` field.
The project is private as an npm package but publicly distributed as source and
registry content.

## Commands you will need

| Purpose         | Command                                       | Expected on success |
| --------------- | --------------------------------------------- | ------------------- |
| Check file      | `test -f LICENSE`                             | exit 0              |
| Verify metadata | `node -p "require('./package.json').license"` | prints `MIT`        |
| Test            | `pnpm test`                                   | exit 0              |
| Typecheck       | `pnpm typecheck`                              | exit 0              |
| Lint/format     | `pnpm check`                                  | exit 0              |

## Scope

**In scope**:

- `LICENSE` (create)
- `package.json`

**Out of scope**:

- Changing the license family
- Adding contributor-license agreements
- Rewriting copyright history
- Legal interpretation of third-party assets or dependencies

## Git workflow

- Branch: `codex/005-add-mit-license`
- Commit: `docs: add MIT license`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Add the standard MIT license text

Create root `LICENSE` using the unmodified standard MIT license text. Use:

```text
Copyright (c) 2026 emailcn contributors
```

Do not name an individual or legal entity without explicit operator direction.

**Verify**:
`rg -n '^MIT License$|Copyright \\(c\\) 2026 emailcn contributors|THE SOFTWARE IS PROVIDED "AS IS"' LICENSE`
→ all three patterns are present.

### Step 2: Declare the same license in package metadata

Add `"license": "MIT"` to `package.json`, allowing the repository formatter to
place it according to its package-key ordering.

**Verify**:
`node -p "require('./package.json').license"` → `MIT`.

### Step 3: Run repository gates

**Verify**: `pnpm test && pnpm typecheck && pnpm check` → all exit 0.

## Test plan

No application test is required. Machine-check the file existence, license
identifier, copyright line, warranty disclaimer, and package metadata.

## Done criteria

- [ ] Root `LICENSE` exists with standard MIT text.
- [ ] Copyright is attributed to `emailcn contributors`.
- [ ] `package.json` declares MIT.
- [ ] README's existing link resolves without changing README.
- [ ] Test/typecheck/check pass.
- [ ] Plan index status updated.

## STOP conditions

- The maintainer specifies a different license or copyright holder.
- An existing license file appears under a non-root path.
- Repository history shows a conflicting explicit license decision.

## Maintenance notes

Changing the license later requires maintainer/legal review. Keep the README,
package metadata, and root license identifier aligned.
