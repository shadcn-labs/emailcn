# Plan 009: Load rendered preview formats on demand

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- components/component-preview.tsx components/component-preview-client.tsx lib/render-email-preview.tsx app/api app/\(view\)/view tests`

## Status

- **Priority**: P2
- **Effort**: M
- **Risk**: MEDIUM
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`,
  `plans/007-complete-mjml-output-contract.md`
- **Category**: performance
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

Every `ComponentPreview` currently renders an email on the server and sends
light HTML, dark HTML, and plain text through the React Server Components
boundary before the user opens any code tab. The heaviest documentation page,
`content/docs/components/react-email/marketing/social-links.mdx`, contains 53
previews. Sampling the current renderers found roughly 1.3–2.2 MB of raw
preview strings on that page before protocol and JavaScript overhead.

The preview iframe and code tabs should fetch only the format the user is
actually viewing. This reduces initial server work and serialized payload
without removing HTML or plain-text access.

## Current state

- `components/component-preview.tsx:32-63` calls `renderEmailPreview`, derives
  both color modes, and passes `html`, `darkHtml`, and `plainText` to a client
  component.
- `components/component-preview-client.tsx:85-113` requires all three strings
  as props and chooses the theme in the browser.
- `components/component-preview-client.tsx:162-181` embeds the preview and both
  code-tab payloads immediately.
- `app/(view)/view/[base]/[name]/page.tsx:38` already has a public full-page
  renderer that must continue to work.
- `renderEmailPreview` is the shared renderer and returns `{ height, html,
plainText }`.
- Demo identity is a `BaseName` plus `DemoName`; invalid combinations must not
  reach the renderer.

Target contract:

```text
GET /api/preview/{base}/{name}?format=html&mode=light
GET /api/preview/{base}/{name}?format=html&mode=dark
GET /api/preview/{base}/{name}?format=text
```

The endpoint returns the rendered body, not JSON. HTML responses use
`text/html; charset=utf-8`; plain text uses `text/plain; charset=utf-8`.

## Commands you will need

| Purpose          | Command                                                                                   | Expected on success |
| ---------------- | ----------------------------------------------------------------------------------------- | ------------------- |
| Baseline count   | `rg -c 'ComponentPreview' content/docs/components/react-email/marketing/social-links.mdx` | reports 53          |
| Test             | `pnpm test`                                                                               | exit 0              |
| Typecheck        | `pnpm typecheck`                                                                          | exit 0              |
| Lint/format      | `pnpm check`                                                                              | exit 0              |
| Production build | `pnpm build`                                                                              | exit 0              |

## Scope

**In scope**:

- A validated server-only preview-output service
- `app/api/preview/[base]/[name]/route.ts` or the equivalent App Router route
- `components/component-preview.tsx`
- `components/component-preview-client.tsx`
- The existing full-screen view route if sharing the service removes
  duplication
- Route and component contract tests

**Out of scope**:

- Splitting the eager demo catalog (plan 010)
- Changing the underlying React Email, JSX Email, or MJML renderers
- Sending email or exposing arbitrary component rendering
- Removing the `/view/[base]/[name]` URL
- Prettifying or syntax-highlighting generated email HTML

## Git workflow

- Branch: `codex/009-lazy-preview-payload`
- Commit: `perf: load preview output on demand`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Extract a validated preview-output service

Create a server-only function that accepts `{ base, name, format, mode }`.
Validate `base` against `BASE_NAMES`, validate the demo name against the
catalog for that base, and allow only:

- `format=html` with `mode=light|dark`
- `format=text`, where `mode` is ignored or rejected consistently

Call `renderEmailPreview` only after validation. Apply
`getEmailHtmlForColorMode` for HTML responses. Return a typed not-found result
for an unknown demo and a typed bad-request result for invalid query values.
Do not accept file paths, module specifiers, JSX, or source text.

**Verify**: unit tests prove valid combinations render and invalid values never
invoke the renderer.

### Step 2: Expose the output through a cacheable route

Add the endpoint described above. Set the exact content type and a public cache
policy suitable for immutable source-at-deploy previews, for example
`public, max-age=0, s-maxage=31536000, stale-while-revalidate=86400`. Return 400
for an invalid format/mode, 404 for an unknown base/demo pair, and 500 with a
generic body for unexpected renderer failure. Do not reflect raw exception
messages into the response.

**Verify**: route tests assert status, content type, cache header, light/dark
selection, plain-text output, and all error cases.

### Step 3: Stop serializing rendered bodies as client props

Change `ComponentPreview` to pass only identifiers and presentation metadata:
`base`, `name`, height, title, navigation flags, and URLs. It may still resolve
the lightweight preview height, but it must not pass rendered email bodies
through the client boundary.

If resolving height currently requires a full render, move height into the
demo manifest introduced by plan 010 when available. Until then, preserve the
current height or use the explicit `height` prop/default without adding a
second eager render.

**Verify**:
`rg -n 'darkHtml=|plainText=|html=' components/component-preview.tsx`
→ no rendered-body props remain.

### Step 4: Load the active format in the client

Use the HTML endpoint URL as the iframe `src`, selected by resolved light/dark
theme. Preserve the existing iframe sandbox and title. Fetch HTML only when the
HTML tab becomes active and fetch plain text only when the text tab becomes
active. Cache each successful `{ format, mode }` response in component state so
tab switching does not refetch it. Show a small loading state and a retryable
error without losing tab navigation.

Do not use fetched HTML with `dangerouslySetInnerHTML`; display it as text in
the existing `<code>` block. Abort obsolete fetches when the component
unmounts or the requested mode changes.

**Verify**: component tests assert no code request on initial render, one
request on first tab activation, no duplicate request after switching away and
back, and a new HTML request when the theme changes.

### Step 5: Preserve full-screen behavior

Keep `/view/[base]/[name]` functional and color-mode aware. It may reuse the
new service or redirect internally only if the public route, document title,
and viewport behavior remain equivalent.

**Verify**: smoke-test one demo for every base through both the embedded iframe
and full-screen route in light and dark mode.

### Step 6: Measure and run gates

Build the production app and inspect the generated payload/network waterfall
for the 53-preview social-links page. The initial document/RSC response must no
longer contain all three rendered bodies per preview. Record before/after raw
or transferred bytes in the PR description.

**Verify**:
`pnpm test && pnpm typecheck && pnpm check && pnpm build`
→ all exit 0, and initial navigation does not issue code-tab fetches.

## Test plan

- Unit-test request validation independently of Next route plumbing.
- Route-test representative React Email, JSX Email, and MJML demos.
- Component-test lazy fetch, request deduplication, failure, retry, and theme
  switching.
- Manually inspect iframe rendering and downloads for HTML and plain text.
- Compare initial transferred bytes on the 53-preview page before and after.

## Done criteria

- [ ] Initial preview props contain no rendered email bodies.
- [ ] Preview iframe HTML is loaded from a validated, cacheable endpoint.
- [ ] HTML and plain text code are fetched only when their tabs are used.
- [ ] Invalid base/demo/format/mode values return safe errors.
- [ ] Full-screen previews retain light/dark parity.
- [ ] The 53-preview page shows a material initial payload reduction.
- [ ] All repository gates pass.
- [ ] Plan index status updated.

## STOP conditions

- The endpoint permits caller-controlled module or filesystem resolution.
- Dark-mode output differs from the current `getEmailHtmlForColorMode`
  behavior.
- CDN caching cannot be enabled and the design would render every preview on
  every tab request without another bounded cache.
- Plan 007 has not defined reliable plain-text behavior for every renderer.

## Maintenance notes

Keep the output endpoint deliberately narrow. Adding source, attachments, or
arbitrary props later requires a new authorization and cache-key review.
