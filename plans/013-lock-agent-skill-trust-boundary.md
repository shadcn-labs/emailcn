# Plan 013: Lock the public agent-skill trust boundary

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- lib/agent-discovery app/.well-known app/llms.txt SECURITY.md tests`

## Status

- **Priority**: P3
- **Effort**: S
- **Risk**: LOW
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`,
  `plans/002-repair-discovery-endpoints.md`
- **Category**: security
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

The site intentionally publishes Markdown instructions for AI agents. That
content is an instruction surface, so a future refactor that interpolates
request values, registry descriptions, MDX, or other mutable content could
turn ordinary content injection into prompt injection for downstream agents.

The current body is a static source constant and its SHA-256 digest is exposed.
Preserve that safe architecture with a documented trust boundary and golden
tests. This plan does not change the intended instructions.

## Current state

- `lib/agent-discovery/emailcn-agent-skill.ts:6-30` defines
  `EMAILCN_AGENT_SKILL_MD` as a static template literal containing the intended
  “When answering” guidance.
- `lib/agent-discovery/emailcn-agent-skill.ts:32-37` computes a SHA-256 digest
  from that exact UTF-8 body.
- Discovery routes advertise the skill and digest; plan 002 repairs their
  naming and endpoint consistency.
- The skill body currently imports only the static `SITE` configuration. It
  does not include request headers, query parameters, user input, registry item
  descriptions, or MDX.
- No security document states which data is permitted to influence agent
  instructions.

Trust-boundary invariant:

```text
public agent instruction body
  <- reviewed source constants only
  <- no request, user, CMS/MDX, registry-description, or remote input
```

## Commands you will need

| Purpose              | Command                     | Expected on success |
| -------------------- | --------------------------- | ------------------- | ---------------------- | ---------------------------- |
| Find skill consumers | `rg -n 'EMAILCN_AGENT_SKILL | agent-skill         | sha256' lib app tests` | all routes and tests visible |
| Test                 | `pnpm test`                 | exit 0              |
| Typecheck            | `pnpm typecheck`            | exit 0              |
| Lint/format          | `pnpm check`                | exit 0              |

## Scope

**In scope**:

- `lib/agent-discovery/emailcn-agent-skill.ts`
- The discovery routes finalized by plan 002
- A golden fixture and route-contract tests
- `SECURITY.md` or an equivalent security section in existing contributor
  documentation
- A short source comment explaining the static-only invariant

**Out of scope**:

- Rewriting the agent instructions
- Cryptographic signing or key infrastructure
- Authenticating public discovery endpoints
- Treating the digest as a signature
- Fetching or composing instructions from remote services

## Git workflow

- Branch: `codex/013-agent-skill-trust-boundary`
- Commit: `test: lock agent skill trust boundary`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Capture the intended body as a golden fixture

Create `tests/fixtures/emailcn-agent-skill.md` with the exact canonical response
body, including final newline policy. Add a test that compares
`EMAILCN_AGENT_SKILL_MD` byte-for-byte with the fixture and computes the
expected lowercase SHA-256 digest independently.

The fixture is a review tripwire, not a second runtime source. Production code
must continue to use the reviewed TypeScript constant.

**Verify**: changing one fixture byte causes the body test and digest test to
fail with a readable diff.

### Step 2: Test every public representation

Add route-contract tests for the canonical skill URL and every discovery index
that advertises it. Assert:

- exact UTF-8 body and `text/markdown` content type;
- digest matches the exact served bytes;
- canonical URL/name from plan 002;
- no request headers, path fragments, or query strings appear in the body;
- status and caching headers follow the discovery contract.

**Verify**: tests exercise route handlers directly and, if existing test
infrastructure supports it, one built-app HTTP smoke path.

### Step 3: Make the static-only invariant explicit in code

Add a concise comment adjacent to the source constant: the instruction body may
be assembled only from reviewed source constants. If `SITE` contains values
that can become runtime-configurable, replace the interpolation with reviewed
literal fields or assert their canonical values in the golden test.

Do not introduce a sanitizer as a substitute for the invariant. The safe
contract is non-interpolation of untrusted content.

**Verify**:
`rg -n 'headers\\(|cookies\\(|searchParams|request|MDX|registry' lib/agent-discovery/emailcn-agent-skill.ts`
→ no untrusted content source is used.

### Step 4: Document the boundary and review process

Add a small “AI/agent instruction surfaces” section to `SECURITY.md` or the
project's security documentation. State:

- public agent instructions are reviewed source code;
- request/user/remote/content-system data must never be interpolated;
- the digest detects byte drift but does not authenticate the publisher;
- changes require fixture, digest, and endpoint review;
- suspected injection or unexpected body changes follow the normal
  vulnerability-reporting channel.

Do not publish an email address that the project has not already designated for
security reports.

**Verify**: the document contains the invariant and accurately distinguishes a
digest from a signature.

### Step 5: Add a constrained composition test

If the body remains templated, make allowed substitutions an explicit,
closed typed object in the same module. Test that changing request-like inputs
cannot affect the result because the builder does not accept them. Prefer a
constant body if no substitution is needed.

**Verify**: code review can enumerate every input to the instruction body from
one module, and every input is a reviewed constant.

### Step 6: Run gates

Run:

`pnpm test && pnpm typecheck && pnpm check`

Fetch the canonical endpoint locally and compare its bytes and digest with the
fixture using a small test helper. Do not copy a hand-calculated digest into
multiple production locations.

## Test plan

- Byte-for-byte golden body comparison.
- Independent SHA-256 assertion over the served body.
- Route tests for content type, caching, canonical discovery link, and status.
- Negative assertions for representative request/header/query marker values.
- Review test proving the runtime body has only a closed static input set.

## Done criteria

- [ ] The canonical public skill body has a reviewed golden fixture.
- [ ] Its advertised digest is computed from and matches served bytes.
- [ ] Tests prove request/user/content-system values cannot enter the body.
- [ ] Security documentation explains the static-only invariant and digest
      limitation.
- [ ] The intended agent instructions are unchanged.
- [ ] All repository gates pass.
- [ ] Plan index status updated.

## STOP conditions

- Product requirements call for user-specific or remotely managed agent
  instructions; that requires a separate threat model and authorization design.
- Plan 002 has not established the canonical discovery URL and response.
- The body already receives runtime content not accounted for in the current
  audit.
- Security contact details are required but no approved reporting channel
  exists.

## Maintenance notes

Treat this fixture like a public API contract. Intentional instruction changes
should produce a visible fixture diff, a new digest, and reviewer confirmation
that no mutable or untrusted content source was added.
