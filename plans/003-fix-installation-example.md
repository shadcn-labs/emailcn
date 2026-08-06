# Plan 003: Make the installation examples compile against installed exports

> **Executor instructions**: Follow each step and verification. Stop and report
> on a STOP condition. Update `plans/README.md` when complete unless a reviewer
> maintains the index.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- content/docs/'(root)'/installation.mdx registry/bases/react-email/components/ui-elements/buttons/button.tsx tests/docs`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: docs
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The primary installation guide tells users to import a private symbol from a
file path that the registry does not install. Copying the documented example
therefore fails immediately. The correction must use the actual public
`Button` export and add a lightweight regression check so documentation cannot
drift from registry targets again.

## Current state

- `content/docs/(root)/installation.mdx:34-53` imports
  `ButtonsSection` from `@/components/email/buttons`.
- `registry.json` installs the React Email button at
  `components/email/button.tsx` (singular).
- `registry/bases/react-email/components/ui-elements/buttons/button.tsx:264`
  declares `ButtonsSection` without exporting it.
- The same file publicly exports `Button` at line 392.
- Documentation uses fenced TypeScript examples and shadcn install commands.

Broken excerpt:

```tsx
import { ButtonsSection } from "@/components/email/buttons";

<ButtonsSection label="Get Started" href="https://example.com" />;
```

Supported shape:

```tsx
import { Button } from "@/components/email/button";

<Button label="Get Started" href="https://example.com" />;
```

## Commands you will need

| Purpose     | Command                   | Expected on success |
| ----------- | ------------------------- | ------------------- |
| Test        | `pnpm test -- tests/docs` | exit 0              |
| Typecheck   | `pnpm typecheck`          | exit 0              |
| Lint/format | `pnpm check`              | exit 0              |
| Build       | `pnpm build`              | exit 0              |

## Scope

**In scope**:

- `content/docs/(root)/installation.mdx`
- `tests/docs/installation-contract.test.ts` (create)

**Out of scope**:

- Exporting the internal `ButtonsSection`
- Renaming the public `Button` component
- Changing registry target paths
- Rewriting other documentation examples

## Git workflow

- Branch: `codex/003-fix-installation-example`
- Commit: `docs: fix composable button installation example`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Replace the unsupported import and usage

Update the composable example to import `Button` from the singular installed
path and render `<Button ... />`. Replace the broad statement that all
components install with a `*Section` export; say components expose their
documented public component export.

**Verify**:
`rg -n 'ButtonsSection|components/email/buttons' content/docs/'(root)'/installation.mdx`
→ no matches.

### Step 2: Add a documentation-to-registry contract test

Create `tests/docs/installation-contract.test.ts`. Read `registry.json` and the
installation markdown. Assert that the documented React Email button item
targets `components/email/button.tsx`, the source file contains an exported
`Button`, and the example imports that exact target without its extension.
Keep this focused; do not build a general Markdown TypeScript compiler in this
plan.

**Verify**: `pnpm test -- tests/docs/installation-contract.test.ts` → pass.

### Step 3: Run full validation

**Verify**: `pnpm test && pnpm typecheck && pnpm check && pnpm build` → all exit 0.

## Test plan

- One contract test covering item name, installed target, public export, and
  documented import.
- The test must fail if the path becomes plural or the private symbol returns.

## Done criteria

- [ ] Installation example uses `Button` from `components/email/button`.
- [ ] The guide no longer promises a universal `*Section` export.
- [ ] Documentation contract test passes.
- [ ] Full gates pass.
- [ ] Registry source exports were not changed.
- [ ] Plan index status updated.

## STOP conditions

- `registry.json` no longer installs the button to
  `components/email/button.tsx`.
- The intended public composable API is deliberately meant to become
  `ButtonsSection`; that is an API-design change and needs a separate plan.

## Maintenance notes

When registry targets or exports change, update the documentation and its
contract test in the same commit. Do not expose internal demo-section helpers
merely to make examples pass.
