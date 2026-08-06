# Plan 012: Align preview MJML compilation with the renderer dependency

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- package.json pnpm-lock.yaml lib/render-email-preview.tsx tests registry/bases.ts`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: HIGH
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`,
  `plans/007-complete-mjml-output-contract.md`
- **Category**: migration
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The MJML preview path renders JSX with `@faire/mjml-react` and then compiles it
with an independently versioned `mjml-browser` major. At the planned commit,
the lockfile resolves `@faire/mjml-react@3.5.3` with `mjml@4.18.0`, while the
application directly uses `mjml-browser@5.0.1`. Parser, validation, or output
differences across those compiler generations can make local previews differ
from the package ecosystem that produces the MJML.

Align the server preview compiler to the MJML major used by the React renderer,
but only after characterizing output. Email markup regressions are difficult
to spot and justify the HIGH risk rating.

## Current state

- `lib/render-email-preview.tsx:1` imports `renderToMjml` from
  `@faire/mjml-react`.
- `lib/render-email-preview.tsx:7,78` sends that markup to `mjml-browser`.
- `pnpm-lock.yaml` resolves the renderer with `mjml@4.18.0` and the direct
  browser compiler at `5.0.1`.
- `registry/bases.ts:23-25` tells MJML registry consumers to install
  `@faire/mjml-react` and `mjml`; it does not prescribe `mjml-browser`.
- This code executes on the server, so a browser-specific compiler is not
  required by the call site.
- Plan 007 adds MJML validation and plain-text contract tests that must land
  before changing the compiler.

Decision for this plan: add a direct `mjml` dependency aligned to the exact
4.18 line currently used by `@faire/mjml-react`, compile on the server with it,
and remove the unused direct `mjml-browser` dependency. Do not upgrade both
libraries to a new major in the same change.

## Commands you will need

| Purpose          | Command                                        | Expected on success    |
| ---------------- | ---------------------------------------------- | ---------------------- |
| Inspect versions | `pnpm why @faire/mjml-react mjml mjml-browser` | dependency paths shown |
| Test             | `pnpm test`                                    | exit 0                 |
| Typecheck        | `pnpm typecheck`                               | exit 0                 |
| Lint/format      | `pnpm check`                                   | exit 0                 |
| Production build | `pnpm build`                                   | exit 0                 |

## Scope

**In scope**:

- `package.json` and `pnpm-lock.yaml`
- `lib/render-email-preview.tsx`
- MJML compiler types only if the dependency does not provide usable types
- Characterization, semantic regression, and failure-path tests

**Out of scope**:

- Upgrading `@faire/mjml-react` or MJML to a new major
- Editing registry MJML component behavior
- Changing React Email or JSX Email rendering
- Pixel-perfect snapshots of volatile compiler formatting
- Browser-side MJML compilation

## Git workflow

- Branch: `codex/012-align-mjml-compiler`
- Commit: `fix: align mjml preview compiler`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Characterize both compilers before changing dependencies

Select representative demos that cover text, links, images, sections/columns,
raw/style content, and responsive attributes. Feed the exact
`renderToMjml(preview)` string to the current direct compiler and to
`mjml@4.18.0` in a temporary comparison test. Capture:

- returned errors with line/tag context;
- document structure and body text;
- links and image attributes;
- media queries and responsive classes;
- head styles and preview text.

Normalize only known nondeterministic whitespace or generated class suffixes.
Do not approve a broad golden snapshot without semantic assertions.

**Verify**: every difference is classified as formatting-only, intentional
compatibility alignment, or a STOP condition.

### Step 2: Add semantic MJML regression tests

Turn the characterization cases into durable tests around
`renderEmailPreview`. Assert successful output contains the expected body,
links, image URLs, responsive styles, and plain text. Add invalid MJML coverage
that proves the validation behavior from plan 007 survives the compiler swap.

**Verify**: tests pass before the dependency change where the assertion
describes an unchanged contract.

### Step 3: Replace the compiler dependency

Add direct `mjml` at the exact compatible 4.18 version selected from the
existing renderer dependency graph. Replace the `mjml-browser` import with the
server `mjml` compiler API. Preserve the current options unless the comparison
shows an option has a different name or default; document any change inline.
Remove `mjml-browser` only after repository search proves it has no other
consumer.

Use the dependency's own types. Add a narrow local declaration only if
necessary, scoped to the exact API used.

**Verify**:
`pnpm why mjml mjml-browser`
→ direct compatible `mjml` is present and `mjml-browser` is absent unless
another real caller remains.

### Step 4: Preserve strict error handling

Keep plan 007's rule that returned MJML errors fail preview rendering with
actionable server diagnostics. Do not expose raw filesystem paths or stack
traces in public error markup. Ensure compiler warnings are handled according
to the documented validation level instead of silently discarded.

**Verify**: invalid tag and invalid attribute fixtures produce the expected
typed failure; a public route returns only the generic failure surface.

### Step 5: Inspect representative output

Render the same representative demos through the application in development
and in a production build. Compare light and dark transformations after MJML
compilation, not just raw compiler output. Open at least one result at desktop
and mobile widths.

**Verify**: no structural, responsive, color-mode, or plain-text regression is
visible or present in semantic assertions.

### Step 6: Run full gates

Run:

`pnpm test && pnpm typecheck && pnpm check && pnpm build`

Inspect the production server bundle for accidental browser shims or duplicate
MJML compiler majors introduced as direct application dependencies. Record
the selected version and comparison result in the PR description.

## Test plan

- Compare current and target compiler output on representative MJML features.
- Assert semantic output rather than whole minified documents.
- Cover invalid tags, invalid attributes, warnings, and renderer exceptions.
- Verify plain text and light/dark transformations after compilation.
- Run the production build to catch Node/bundler interoperability issues.

## Done criteria

- [ ] The server preview compiler is version-aligned with
      `@faire/mjml-react`.
- [ ] `mjml-browser` has no direct dependency or unexplained caller.
- [ ] Representative semantic output is unchanged or intentionally documented.
- [ ] Validation and plain-text contracts from plan 007 remain intact.
- [ ] Production output contains no accidental browser compiler shim.
- [ ] All repository gates pass.
- [ ] Plan index status updated.

## STOP conditions

- The comparison finds material structural, responsive, or CSS differences
  without product approval.
- `mjml@4.18` cannot be bundled in the Next server runtime used by deployment.
- Plan 007 has not landed, leaving validation or plain text uncharacterized.
- Dependency alignment would require a major upgrade of
  `@faire/mjml-react`.

## Maintenance notes

Future MJML upgrades should move the renderer and compiler as one tested unit.
Repeat the semantic comparison whenever either side changes major or minor
version.
