# Plan 007: Complete and validate the MJML preview output contract

> **Executor instructions**: Follow the plan in order and run each verification.
> Stop on any STOP condition. Update the plan index status when complete unless
> a reviewer maintains it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- lib/render-email-preview.tsx lib/mjml-plain-text.ts components/component-preview-client.tsx tests/lib`

## Status

- **Priority**: P1
- **Effort**: M
- **Risk**: MED
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: bug
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

React Email and JSX Email previews expose HTML and plain text, while MJML React
always returns `plainText: null`. A dedicated MJML converter exists but removes
anchor attributes before attempting to read `href`, so wiring it in unchanged
would silently lose link destinations. The renderer also discards MJML
validation errors, allowing malformed output to look successful.

## Current state

`lib/render-email-preview.tsx:68-83`:

```ts
let plainText: string | null = null;

if (base === "react-email") {
  plainText = toPlainText(html);
} else if (base === "jsx-email") {
  plainText = await renderJsxEmailPlainText(preview);
} else {
  const result = await mjml2html(renderToMjml(preview), {
    validationLevel: "soft",
  });
  ({ html } = result);
}
```

`lib/mjml-plain-text.ts:27-37` strips all non-image attributes, including
`href`, before the link regex runs. `components/component-preview-client.tsx`
shows the text tab only when `plainText` is non-null.

Conventions:

- Pure helpers use named exports.
- Renderer errors are caught by `ComponentPreview` and converted to a
  user-visible fallback.
- Do not place raw generated HTML or secret values in error messages.

## Commands you will need

| Purpose         | Command                                                | Expected on success |
| --------------- | ------------------------------------------------------ | ------------------- |
| Converter tests | `pnpm test -- tests/lib/mjml-plain-text.test.ts`       | exit 0              |
| Renderer tests  | `pnpm test -- tests/lib/render-email-preview.test.tsx` | exit 0              |
| Typecheck       | `pnpm typecheck`                                       | exit 0              |
| Lint/format     | `pnpm check`                                           | exit 0              |
| Build           | `pnpm build`                                           | exit 0              |

## Scope

**In scope**:

- `lib/mjml-plain-text.ts`
- `lib/render-email-preview.tsx`
- `tests/lib/mjml-plain-text.test.ts` (create)
- `tests/lib/render-email-preview.test.tsx`

**Out of scope**:

- Changing preview UI layout
- Sending test emails
- Changing the MJML compiler package/version (plan 012)
- Rewriting the converter with a new parsing dependency unless regex repair is
  proven insufficient and reported first

## Git workflow

- Branch: `codex/007-mjml-output-contract`
- Commit: `fix: complete MJML plain text previews`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Add converter regression tests before changing it

Create focused cases for:

- normal HTTP link preserves label and destination;
- link whose label equals destination is not duplicated;
- mailto link;
- image alt text and missing alt;
- nested ordered/unordered lists;
- table rows;
- HTML entities;
- template tokens whose case must be preserved;
- style and Outlook conditional content removal.

The HTTP-link test should fail against the current ordering; record that as the
intended regression, then proceed.

**Verify**: all cases except the named link-order regression pass before the
fix; after Step 2, the complete file passes.

### Step 2: Preserve attributes until dependent conversions run

Reorder or narrow attribute stripping so anchor conversion reads `href` before
attributes are removed. Preserve image `alt` long enough for image conversion.
Keep sanitization deterministic and avoid executing or fetching content.

**Verify**: `pnpm test -- tests/lib/mjml-plain-text.test.ts` → all cases pass.

### Step 3: Populate MJML plain text

Import the converter with an unambiguous alias such as `toMjmlPlainText`. After
MJML compilation succeeds, set `plainText = toMjmlPlainText(html)`. Update the
existing three-renderer smoke test so MJML now expects non-empty plain text.

**Verify**:
`pnpm test -- tests/lib/render-email-preview.test.tsx`
→ all renderer cases pass and MJML plain text is non-empty.

### Step 4: Handle MJML validation errors deliberately

Inspect `result.errors`. Add tests with valid MJML, an invalid structure, and
any currently tolerated warning discovered in representative templates.
Throw a sanitized `Error` for actionable validation errors. If current
templates emit warnings, define a narrow documented classification; do not
ignore the whole array.

**Verify**: targeted renderer tests prove invalid MJML fails and valid
`button-demo` renders.

### Step 5: Run full gates

**Verify**: `pnpm test && pnpm typecheck && pnpm check && pnpm build` → all exit 0.

## Test plan

- Golden semantic assertions for links, lists, tables, images, entities, and
  tokens; avoid full-document snapshots.
- Representative MJML renderer success and validation-failure cases.
- Update plan 001's current-contract assertion from null to non-empty text.

## Done criteria

- [ ] MJML preview returns non-empty plain text.
- [ ] Link destinations survive conversion.
- [ ] Actionable MJML validation errors fail the render path.
- [ ] Converter and renderer regression tests pass.
- [ ] Full gates pass.
- [ ] No UI/compiler-package changes.
- [ ] Plan index status updated.

## STOP conditions

- Representative current MJML templates produce a large or ambiguous warning
  set that cannot be safely classified.
- Regex repair cannot handle the named cases without broad HTML corruption.
- Completing the contract requires upgrading or swapping the MJML compiler;
  defer to plan 012.

## Maintenance notes

Plain-text output is part of email delivery semantics, not merely display text.
Reviewers should inspect link preservation and token casing closely. Add a
regression whenever a new HTML construct is supported.
