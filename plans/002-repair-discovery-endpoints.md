# Plan 002: Make every advertised discovery endpoint resolvable

> **Executor instructions**: Follow this plan step by step and run every
> verification. Stop on any listed STOP condition instead of improvising.
> Update the status row in `plans/README.md` when complete unless a reviewer
> maintains it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- app/.well-known app/api/status lib/agent-discovery tests/agent-discovery`

## Status

- **Priority**: P1
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: bug
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The skill index, API catalog, and OpenAPI document are machine-consumed
contracts. They currently advertise three paths that do not resolve to their
declared resources, so clients encounter 404s and cannot retrieve the skill
whose digest was advertised. The fix should make emitted URLs canonical and
cover the contract with direct handler tests.

## Current state

- `app/.well-known/agent-skills/index.json/route.ts:18` advertises
  `/.well-known/agent-skills/emailcn-skill.md`.
- The actual route directory is
  `app/.well-known/agent-skills/termcn-skill.md/route.ts`.
- `lib/agent-discovery/openapi-document.ts:48-64` advertises `/api/status`.
- `app/.well-known/api-catalog/route.ts:39,49` advertises `/api/status`, but no
  route exists.
- `app/.well-known/api-catalog/route.ts:42` anchors
  `/r/react-email/registry.json`; the generated canonical manifest is
  `/r/registry.json`.
- Route convention: export named `GET`/`HEAD` functions that return Web
  `Response` objects and set explicit cache/content-type headers.

Current mismatch:

```ts
// app/.well-known/agent-skills/index.json/route.ts:18
url: `${base}/.well-known/agent-skills/emailcn-skill.md`,

// actual directory
app/.well-known/agent-skills/termcn-skill.md/route.ts
```

## Commands you will need

| Purpose     | Command                              | Expected on success |
| ----------- | ------------------------------------ | ------------------- |
| Test        | `pnpm test -- tests/agent-discovery` | exit 0              |
| Typecheck   | `pnpm typecheck`                     | exit 0              |
| Lint/format | `pnpm check`                         | exit 0              |
| Build       | `pnpm build`                         | exit 0              |

## Scope

**In scope**:

- Rename `app/.well-known/agent-skills/termcn-skill.md/route.ts` to
  `app/.well-known/agent-skills/emailcn-skill.md/route.ts`
- `app/api/status/route.ts` (create)
- `app/.well-known/api-catalog/route.ts`
- `lib/agent-discovery/openapi-document.ts`
- `tests/agent-discovery/discovery-routes.test.ts` (create)

**Out of scope**:

- Changing skill markdown content
- Changing public registry item URLs
- Authentication or uptime monitoring
- Reworking `requestOrigin`

## Git workflow

- Branch: `codex/002-repair-discovery-endpoints`
- Commit: `fix: repair discovery endpoint contracts`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Rename the mistyped skill route

Use `git mv` so history is preserved. Do not change response body or headers.

**Verify**:
`test -f app/.well-known/agent-skills/emailcn-skill.md/route.ts && test ! -e app/.well-known/agent-skills/termcn-skill.md`
→ exit 0.

### Step 2: Implement the advertised health route

Create `app/api/status/route.ts` with a named `GET` handler returning
`Response.json({ status: "ok" })`. Use a short public cache policy only if it
matches the discovery handlers; do not add external health checks.

**Verify**: `pnpm typecheck` → exit 0.

### Step 3: Correct the registry catalog anchor

Change only the second catalog entry's anchor from
`/r/react-email/registry.json` to `/r/registry.json`. Keep item-specific URLs
unchanged.

**Verify**:
`rg -n '/r/react-email/registry\\.json' app/.well-known/api-catalog/route.ts`
→ no matches.

### Step 4: Add handler-level contract tests

Create tests that directly call the exported handlers with a deterministic
request origin. Assert:

- the skill route returns 200, markdown content type, and the exact digest body;
- the skill index's advertised path is the implemented path;
- `/api/status` returns `{ status: "ok" }`;
- every catalog link intended to be local uses a known implemented/generated
  path;
- OpenAPI contains the status path and canonical registry path.

Avoid starting a development server.

**Verify**: `pnpm test -- tests/agent-discovery/discovery-routes.test.ts` → all
cases pass.

### Step 5: Run the complete gates

**Verify**: `pnpm test && pnpm typecheck && pnpm check && pnpm build` → all exit 0.

## Test plan

- Direct route-handler tests, not browser E2E.
- Include regressions for the `termcn` typo, missing health route, and incorrect
  renderer-specific registry manifest.
- Verify response content types as well as path strings.

## Done criteria

- [ ] No `termcn-skill` path remains.
- [ ] `/api/status` has a GET handler matching OpenAPI.
- [ ] Catalog anchor is `/r/registry.json`.
- [ ] Discovery tests pass.
- [ ] Full test/typecheck/check/build gates pass.
- [ ] No out-of-scope files changed.
- [ ] Plan index status updated.

## STOP conditions

- A deployment rewrite or platform route outside the repository already
  provides `/api/status`.
- The canonical registry manifest changes from `/r/registry.json`.
- Tests require binding a network port.

## Maintenance notes

Treat the discovery documents as one contract. Future additions must update
the route, catalog, OpenAPI document, and contract tests together.
