# Plan 010: Replace the eager demo catalog with a generated lazy manifest

> **Executor instructions**: Follow each step and verification. Stop on a STOP
> condition. Update `plans/README.md` when complete unless a reviewer maintains
> it.
>
> **Drift check (run first)**:
> `git diff --stat 9f528be5..HEAD -- examples/__index__.tsx examples scripts package.json lib/render-email-preview.tsx app tests`

## Status

- **Priority**: P2
- **Effort**: L
- **Risk**: MEDIUM
- **Depends on**: `plans/001-establish-behavior-contract-tests.md`
- **Category**: performance
- **Planned at**: commit `9f528be5`, 2026-07-28

## Why this matters

`examples/__index__.tsx` is a 2,800-line hand-maintained catalog that eagerly
imports every demo. Any consumer that needs one preview or only the list of
route parameters pulls the entire catalog into its module graph. This
increases server compilation and invalidation cost and makes adding or
renaming a demo error-prone.

A generated lightweight manifest plus explicit dynamic loaders preserves
static route discovery and strong demo-name typing while loading only the
requested demo module.

## Current state

- `examples/__index__.tsx:3-2803` contains one static import per demo.
- The same file builds the grouped demo object after line 2805.
- `lib/render-email-preview.tsx:10` imports the whole catalog before selecting
  a single `{ base, name }`.
- Static route generation traverses the catalog even though it needs names,
  not React components.
- Demo entries carry a component and `PreviewHeight`.
- Source convention is `examples/<base>/<demo-name>.tsx`; generated identifiers
  must not depend on ad hoc manual aliases.

Target modules:

```text
examples/__manifest__.ts  # base/name/height metadata and exported types
examples/__loaders__.ts   # explicit name -> () => import("literal path")
scripts/build-demo-index.mts
```

Names may differ, but metadata must stay import-free and every dynamic import
specifier must remain a literal so the Next bundler can enumerate chunks.

## Commands you will need

| Purpose          | Command            | Expected on success |
| ---------------- | ------------------ | ------------------- |
| Generate catalog | `pnpm demos:build` | exit 0              |
| Check drift      | `pnpm demos:check` | exit 0 and no diff  |
| Test             | `pnpm test`        | exit 0              |
| Typecheck        | `pnpm typecheck`   | exit 0              |
| Lint/format      | `pnpm check`       | exit 0              |
| Production build | `pnpm build`       | exit 0              |

## Scope

**In scope**:

- A deterministic demo-index generator under `scripts/`
- Generated metadata and loader modules under `examples/`
- `lib/render-email-preview.tsx`
- Static-parameter and home-page consumers of the current catalog
- Package scripts and parity/loading tests
- Removing `examples/__index__.tsx` only after every call site is migrated

**Out of scope**:

- Editing demo component output
- Renaming routes or bases
- Changing the number of examples
- On-demand preview transport (plan 009)
- General MDX or registry code generation

## Git workflow

- Branch: `codex/010-lazy-demo-catalog`
- Commit: `perf: generate lazy demo catalog`
- Do not push or open a PR unless instructed.

## Steps

### Step 1: Characterize the existing catalog

Before replacing it, write a test or one-off checked script that serializes the
current catalog as sorted records of `{ base, name, height, sourcePath }`.
Record counts by base. This is the migration oracle and must include every
existing entry.

**Verify**: the baseline contains no duplicate `{ base, name }` pairs and every
source path exists below `examples/<base>/`.

### Step 2: Build a deterministic generator

Create `scripts/build-demo-index.mts` that scans only the known base
directories, ignores generated index files, and derives the public demo name
from a documented filename rule. Generate:

1. a metadata-only manifest with `as const` names, height, `BaseName` mapping,
   and the `DemoName` type; and
2. a loader table whose values use literal `import("./base/name")` calls.

If `PreviewHeight` cannot be statically determined safely, define a small
explicit metadata convention rather than executing demo modules in the
generator. Keep output ordering stable by base and name.

**Verify**: two consecutive generation runs produce byte-identical files.

### Step 3: Add build and drift commands

Add `demos:build` and `demos:check` package scripts. The check command
regenerates and fails when the generated modules differ from tracked output.
Run it in CI before typechecking or building.

**Verify**: modify a temporary fixture through an explicit patch, observe
`pnpm demos:check` fail, then restore the fixture with another explicit patch.

### Step 4: Add a typed async loader

Expose a server-only function such as:

```ts
async function loadDemo(base: BaseName, name: DemoName) {
  const loader = demoLoaders[base]?.[name];
  if (!loader) return null;
  const module = await loader();
  return { Component: module.default, height: demoManifest[base][name].height };
}
```

Validate the module contract after import and return `null` for unknown pairs.
Do not form an import specifier from runtime strings.

**Verify**: tests load at least one demo from every base and reject unknown
pairs without importing another module.

### Step 5: Migrate consumers

Change `renderEmailPreview` to await `loadDemo`. Change static-parameter
generation and any navigation/listing code to use only the metadata manifest.
Migrate `DemoName` imports from `examples/__index__` to the manifest. Search the
whole repository before deleting or reducing the old file.

**Verify**:
`rg -n 'examples/__index__|from \"@/examples\"' --glob '!plans/**' .`
→ no stale eager-catalog imports remain.

### Step 6: Prove parity and lazy loading

Compare generated records with the Step 1 oracle. Add a focused test using a
fresh module graph or import instrumentation to prove requesting one demo does
not evaluate an unrelated demo module. Do not make a fragile assertion about
exact chunk filenames.

**Verify**: counts, names, heights, and paths exactly match the old catalog;
all representative renderer smoke tests still pass.

### Step 7: Run full gates and inspect the build

Run:

`pnpm demos:check && pnpm test && pnpm typecheck && pnpm check && pnpm build`

Inspect the Next server trace or bundle graph for a single preview route. It
should contain an enumerated loader map but should not eagerly execute every
demo at module initialization. Record the observation in the PR description.

## Test plan

- Generator tests cover ordering, duplicate names, ignored files, invalid base
  directories, missing metadata, and escaped paths.
- Parity tests compare the pre-migration oracle to the generated manifest.
- Loader tests cover each base, missing demos, invalid module shape, and
  non-evaluation of an unrelated fixture.
- Existing renderer smoke tests verify React Email, JSX Email, and MJML output.
- Production build verifies Next accepts every literal dynamic import.

## Done criteria

- [ ] Static metadata can be imported without importing demo components.
- [ ] A requested demo is loaded through an explicit literal dynamic import.
- [ ] Generated names, heights, paths, and base counts match the old catalog.
- [ ] Catalog generation is deterministic and CI checks drift.
- [ ] No consumer imports the old eager catalog.
- [ ] Production build and all repository gates pass.
- [ ] Plan index status updated.

## STOP conditions

- The proposed loader requires a runtime-computed import specifier.
- Generated metadata cannot preserve current names/heights without executing
  untrusted or side-effectful demo modules.
- A production build collapses the loader map into one eager chunk and no
  measurable compilation or evaluation improvement remains.
- Catalog parity reports a missing or duplicate public route.

## Maintenance notes

The generated files are reviewable artifacts, not hand-edit targets. Add or
rename a demo at its source path, regenerate, and commit the resulting manifest
and loader changes together.
