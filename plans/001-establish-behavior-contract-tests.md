# Plan 001: Establish behavior-level contract tests

> **Executor instructions**: Follow this plan step by step. Run every
> verification command and confirm the expected result before moving to the
> next step. If anything in the "STOP conditions" section occurs, stop and
> report — do not improvise. When done, update this plan's status row in
> `plans/README.md`, unless a reviewer says they maintain the index.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- package.json pnpm-lock.yaml .github/workflows/ci.yml vitest.config.ts tests`
> Changes made by an earlier explicitly listed dependency are acceptable only
> when they match that dependency's plan. Any other mismatch is a STOP condition.

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: LOW
- **Depends on**: none
- **Category**: tests
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The repository's lint, typecheck, and production build pass, but there is no
test command or authored behavior test. Critical behavior is implemented by
three independent email renderers plus a custom registry transformation, so
semantic regressions can survive the current gates. This plan establishes the
shared test harness that plans 002, 006, 007, 009, 010, 011, 012, and 013 extend.

## Current state

- `package.json:6-14` defines `build`, `typecheck`, and `check`, but no `test`.
- `.github/workflows/ci.yml:18-44` runs check, build, and typecheck only.
- `lib/render-email-preview.tsx:56-89` branches across React Email, JSX Email,
  and MJML React.
- `lib/email-color-mode.ts:147-151` is a deterministic pure helper suitable for
  the first unit tests.
- `examples/__index__.tsx` contains the key `button-demo` for all three bases at
  lines 2990, 4572, and 6168.
- TypeScript uses strict ESM and `@/*` path aliases. Formatting/linting is
  enforced through Ultracite. Match the existing double-quote, semicolon, and
  named-export conventions.
- There is no existing test file to copy. Establish the test convention as
  `tests/<area>/<name>.test.ts[x]`, Node environment by default, with explicit
  imports from `vitest`.

Current script excerpt (`package.json:6-14`):

```json
"scripts": {
  "dev": "next dev",
  "build": "pnpm registry:build && next build",
  "start": "next start",
  "typecheck": "tsc --noEmit",
  "registry:build": "node --import tsx scripts/build-registry.mts",
  "check": "ultracite check"
}
```

## Commands you will need

| Purpose       | Command                          | Expected on success        |
| ------------- | -------------------------------- | -------------------------- |
| Install       | `pnpm install --frozen-lockfile` | exit 0                     |
| Test          | `pnpm test`                      | exit 0; all tests pass     |
| Targeted test | `pnpm test -- tests/lib`         | exit 0                     |
| Typecheck     | `pnpm typecheck`                 | exit 0, no errors          |
| Lint/format   | `pnpm check`                     | exit 0, no warnings/errors |

## Scope

**In scope**:

- `package.json`
- `pnpm-lock.yaml`
- `vitest.config.ts` (create only if path aliases do not work without it)
- `tests/lib/email-color-mode.test.ts` (create)
- `tests/lib/render-email-preview.test.tsx` (create)
- `.github/workflows/ci.yml`

**Out of scope**:

- `lib/render-email-preview.tsx` behavior changes
- `lib/mjml-plain-text.ts` behavior changes
- `scripts/build-registry.mts`
- Browser E2E infrastructure
- Snapshotting entire rendered email documents

## Git workflow

- Branch: `codex/001-behavior-contract-tests`
- Use conventional commits; example: `test: add renderer contract coverage`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Add Vitest and the repository test command

Add Vitest as a development dependency with `pnpm add -D vitest`. Add
`"test": "vitest run"` to `package.json`. Add `vitest.config.ts` only if a
minimal config is needed for `@/*` resolution; use Node environment and do not
add browser or DOM emulation unless a test proves it is required.

**Verify**: `pnpm test -- --passWithNoTests` → exit 0.

### Step 2: Characterize email color-mode transformation

Create `tests/lib/email-color-mode.test.ts`. Cover:

- light mode preserves body colors but adds light-only color-scheme metadata;
- dark mode maps representative background, text, border, short hex, and RGB
  colors;
- pre-existing color-scheme metadata is replaced rather than duplicated;
- input without a `<head>` receives one;
- unrelated brand colors remain unchanged.

Assert focused substrings and occurrence counts, not a whole-document snapshot.

**Verify**: `pnpm test -- tests/lib/email-color-mode.test.ts` → all named cases
pass.

### Step 3: Add one representative smoke render per engine

Create `tests/lib/render-email-preview.test.tsx`. Call
`renderEmailPreview({ base, name: "button-demo" })` for `react-email`,
`jsx-email`, and `mjml-react`. Assert each result is non-null, has non-empty HTML
with recognizable document markup, and has a positive height. Characterize the
current contract accurately: React Email and JSX Email have non-empty plain
text; MJML React currently returns `null` until plan 007.

Do not snapshot the complete HTML because renderer patch versions legitimately
change whitespace and generated markup.

**Verify**: `pnpm test -- tests/lib/render-email-preview.test.tsx` → three engine
cases pass.

### Step 4: Add tests to CI

Add a dedicated `test` job or clearly named test step to
`.github/workflows/ci.yml` using the existing local setup action. Keep
permissions read-only and preserve concurrency behavior.

**Verify**: `pnpm test && pnpm typecheck && pnpm check` → every command exits 0.

## Test plan

- `tests/lib/email-color-mode.test.ts`: at least five focused pure-function
  cases.
- `tests/lib/render-email-preview.test.tsx`: exactly one stable representative
  smoke case per renderer at first.
- Avoid network, timers, and full HTML snapshots.
- Verification: `pnpm test` → all new tests pass without watch mode.

## Done criteria

- [ ] `package.json` has a non-watch `test` script.
- [ ] `pnpm-lock.yaml` records Vitest.
- [ ] `pnpm test` exits 0 and covers all three renderers.
- [ ] `pnpm typecheck` exits 0.
- [ ] `pnpm check` exits 0.
- [ ] CI runs the test suite.
- [ ] No source behavior changed.
- [ ] No files outside the in-scope list changed.
- [ ] `plans/README.md` status row is updated.

## STOP conditions

- `button-demo` no longer exists for all three bases.
- Vitest cannot resolve `@/*` without changing production TypeScript settings.
- A representative render requires network access or external credentials.
- Tests expose an existing renderer crash rather than the characterized
  plain-text asymmetry; report the crash before changing production code.

## Maintenance notes

Keep tests contract-focused. Renderer output is intentionally implementation
dependent, so reviewers should reject large snapshots. Every later plan that
changes registry resolution, MJML rendering, discovery routes, or preview
loading must add focused regression cases to this harness.
