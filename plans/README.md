# emailcn implementation plan index

Generated from a read-only repository audit at commit `9f528be5` on
2026-07-28. The user selected all 13 findings for implementation planning.
Each linked plan is a self-contained handoff for a fresh executor agent.

## Recommended execution order

| Order | Plan                                                                                      | Priority | Effort | Depends on | Status |
| ----: | ----------------------------------------------------------------------------------------- | :------: | :----: | ---------- | :----: |
|     1 | [001 — Establish behavior-level contract tests](001-establish-behavior-contract-tests.md) |    P1    |   M    | —          |  DONE  |
|     2 | [002 — Repair discovery endpoints](002-repair-discovery-endpoints.md)                     |    P1    |   S    | 001        |  TODO  |
|     3 | [003 — Fix the installation example](003-fix-installation-example.md)                     |    P1    |   S    | 001        |  TODO  |
|     4 | [004 — Enforce production typechecking](004-enforce-production-typecheck.md)              |    P1    |   S    | 001        |  TODO  |
|     5 | [005 — Add the claimed MIT license](005-add-mit-license.md)                               |    P1    |   S    | —          |  TODO  |
|     6 | [006 — Harden the registry build](006-harden-registry-build.md)                           |    P1    |   M    | 001        |  TODO  |
|     7 | [007 — Complete the MJML output contract](007-complete-mjml-output-contract.md)           |    P1    |   M    | 001        |  TODO  |
|     8 | [008 — Define the registry artifact lifecycle](008-define-registry-artifact-lifecycle.md) |    P2    |   S    | 006        |  TODO  |
|     9 | [009 — Load preview output on demand](009-lazy-preview-payload.md)                        |    P2    |   M    | 001, 007   |  TODO  |
|    10 | [010 — Generate a lazy demo catalog](010-lazy-demo-catalog.md)                            |    P2    |   L    | 001        |  TODO  |
|    11 | [011 — Share the registry import resolver](011-share-registry-resolver.md)                |    P2    |   M    | 001, 006   |  TODO  |
|    12 | [012 — Align the MJML compiler](012-align-mjml-compiler.md)                               |    P2    |   M    | 001, 007   |  TODO  |
|    13 | [013 — Lock the agent-skill trust boundary](013-lock-agent-skill-trust-boundary.md)       |    P3    |   S    | 001, 002   |  TODO  |

Execute plan 001 first because it establishes the test harness used by most
later work. Plans 002–007 may then proceed in dependency-safe parallel branches
if separate executors are used. Plan 008 follows 006; plan 009 and plan 012
follow 007; plan 011 follows 006; and plan 013 follows 002. Plan 010 can land
before or after plan 009 because neither is a hard dependency of the other,
though whichever lands second must reconcile the preview-height path described
in plan 009.

## Status convention

- `TODO`: selected and fully planned, not yet implemented
- `IN PROGRESS`: an executor has started the plan
- `BLOCKED`: a named STOP condition or external decision prevents progress
- `DONE`: done criteria and all plan-specific gates pass

An executor should update this table when starting and completing a plan.
Every plan begins with a drift check against the audited commit. If relevant
files have changed, reconcile the plan with current code before implementation
rather than applying its steps mechanically.

## Audit coverage

The selected set covers:

- missing behavior-level tests and production type enforcement;
- broken discovery/install documentation and the missing license;
- registry path containment, transactional generation, artifact drift, and
  duplicate import-resolution logic;
- MJML plain-text/validation behavior and compiler-version mismatch;
- eager preview payloads and the monolithic demo catalog; and
- the public agent-instruction trust boundary.

## Considered but not promoted to implementation plans

The audit also examined the following hypotheses and deliberately did not turn
them into work:

- `requestOrigin()` uses forwarded headers, but the stated Vercel deployment
  supplies and sanitizes those headers; no exploitable host-header issue was
  demonstrated.
- Preview email HTML is isolated in an iframe with `sandbox=""`; the reviewed
  `srcDoc` use was not a parent-page XSS path.
- Reviewed `dangerouslySetInnerHTML` sinks contain Shiki output or static style
  values, not request or user-controlled content.
- Sidebar cookies and local storage contain non-sensitive UI preferences.
- Broad `outputFileTracingIncludes` patterns may affect deployment size, but
  the audit did not have production `.nft.json` measurements to support a
  scoped change.
- Formatting/highlighting caches may help build speed, but should be driven by
  a build profile rather than assumption.
- Hidden or incomplete theme documentation may be intentional work in
  progress; publishing it requires a product/content decision.

These exclusions are not assertions that the areas can never change. They
record why no implementation handoff was justified by the evidence available
at the audited commit.

## Executor handoff

Run one plan in a fresh task with an instruction such as:

```text
Execute plans/001-establish-behavior-contract-tests.md exactly. Begin with its
drift check, stop on any STOP condition, and update plans/README.md when done.
```

Review and merge dependency plans before starting their dependents. Do not
combine all 13 into one commit or pull request; their risk profiles and rollback
boundaries are intentionally separate.
