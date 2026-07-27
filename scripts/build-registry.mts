import { spawnSync } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, posix, resolve } from "node:path";

import { Project, ScriptKind } from "ts-morph";

interface RegistryFile {
  path: string;
  target?: string;
  [key: string]: unknown;
}

interface RegistryItem {
  files?: RegistryFile[];
  name: string;
  [key: string]: unknown;
}

interface Registry {
  items: RegistryItem[];
  [key: string]: unknown;
}

const PROJECT_DIRECTORY = process.cwd();
const REGISTRY_PATH = resolve(PROJECT_DIRECTORY, "registry.json");
const TEMP_DIRECTORY = resolve(PROJECT_DIRECTORY, ".registry-build");
const TEMP_REGISTRY_PATH = resolve(TEMP_DIRECTORY, "registry.json");
const OUTPUT_DIRECTORY = resolve(PROJECT_DIRECTORY, "public/r");
const SOURCE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"] as const;

const stripSourceExtension = (filePath: string) =>
  filePath.replace(/\.[cm]?[jt]sx?$/u, "");

const toTargetSpecifier = (targetPath: string) =>
  `@/${stripSourceExtension(posix.normalize(targetPath))}`;

const parseRegistry = async (): Promise<Registry> => {
  const registry = JSON.parse(
    await readFile(REGISTRY_PATH, "utf-8")
  ) as Partial<Registry>;

  if (!Array.isArray(registry.items)) {
    throw new TypeError("registry.json must contain an items array.");
  }

  return registry as Registry;
};

const getRegistryFiles = (registry: Registry) =>
  registry.items.flatMap((item) => item.files ?? []);

const createSourceTargetMap = (registry: Registry) => {
  const sourceTargets = new Map<string, string>();

  for (const file of getRegistryFiles(registry)) {
    if (!file.target) {
      throw new Error(`Registry file "${file.path}" is missing a target.`);
    }

    const sourcePath = posix.normalize(file.path);
    const targetPath = posix.normalize(file.target);
    const existingTarget = sourceTargets.get(sourcePath);

    if (existingTarget && existingTarget !== targetPath) {
      throw new Error(
        `Registry file "${sourcePath}" has conflicting targets: ` +
          `"${existingTarget}" and "${targetPath}".`
      );
    }

    sourceTargets.set(sourcePath, targetPath);
  }

  return sourceTargets;
};

const getSourceCandidates = (sourcePath: string, moduleSpecifier: string) => {
  const unresolvedPath = moduleSpecifier.startsWith("@/")
    ? moduleSpecifier.slice(2)
    : posix.join(posix.dirname(sourcePath), moduleSpecifier);
  const normalizedPath = posix.normalize(unresolvedPath);

  if (
    SOURCE_EXTENSIONS.some((extension) => normalizedPath.endsWith(extension))
  ) {
    return [normalizedPath];
  }

  return [
    ...SOURCE_EXTENSIONS.map((extension) => `${normalizedPath}${extension}`),
    ...SOURCE_EXTENSIONS.map((extension) =>
      posix.join(normalizedPath, `index${extension}`)
    ),
  ];
};

const resolveTargetSpecifier = (
  sourcePath: string,
  moduleSpecifier: string,
  sourceTargets: ReadonlyMap<string, string>
) => {
  const isRegistryAlias = moduleSpecifier.startsWith("@/registry/");
  const isRelativeImport = moduleSpecifier.startsWith(".");

  if (!(isRegistryAlias || isRelativeImport)) {
    return moduleSpecifier;
  }

  for (const candidate of getSourceCandidates(sourcePath, moduleSpecifier)) {
    const targetPath = sourceTargets.get(candidate);
    if (targetPath) {
      return toTargetSpecifier(targetPath);
    }
  }

  if (isRegistryAlias) {
    throw new Error(
      `Unable to map "${moduleSpecifier}" imported by "${sourcePath}" ` +
        "to a registry file target."
    );
  }

  return moduleSpecifier;
};

const transformSource = (
  project: Project,
  sourcePath: string,
  source: string,
  sourceTargets: ReadonlyMap<string, string>
) => {
  const sourceFile = project.createSourceFile(sourcePath, source, {
    overwrite: true,
    scriptKind: sourcePath.endsWith(".tsx") ? ScriptKind.TSX : ScriptKind.TS,
  });

  for (const declaration of sourceFile.getImportDeclarations()) {
    const moduleSpecifier = declaration.getModuleSpecifierValue();
    declaration.setModuleSpecifier(
      resolveTargetSpecifier(sourcePath, moduleSpecifier, sourceTargets)
    );
  }

  for (const declaration of sourceFile.getExportDeclarations()) {
    const moduleSpecifier = declaration.getModuleSpecifierValue();
    if (moduleSpecifier) {
      declaration.setModuleSpecifier(
        resolveTargetSpecifier(sourcePath, moduleSpecifier, sourceTargets)
      );
    }
  }

  const transformedSource = sourceFile.getFullText();
  project.removeSourceFile(sourceFile);

  return transformedSource;
};

const createTemporaryRegistry = async (
  registry: Registry,
  sourceTargets: ReadonlyMap<string, string>
) => {
  const project = new Project({
    compilerOptions: {},
    useInMemoryFileSystem: true,
  });

  for (const [sourcePath] of sourceTargets) {
    const source = await readFile(
      resolve(PROJECT_DIRECTORY, sourcePath),
      "utf-8"
    );
    const temporaryPath = resolve(TEMP_DIRECTORY, sourcePath);
    const transformedSource = transformSource(
      project,
      sourcePath,
      source,
      sourceTargets
    );

    await mkdir(dirname(temporaryPath), { recursive: true });
    await writeFile(temporaryPath, transformedSource, "utf-8");
  }

  await writeFile(
    TEMP_REGISTRY_PATH,
    `${JSON.stringify(registry, null, 2)}\n`,
    "utf-8"
  );
};

const prepareOutputDirectory = async (registry: Registry) => {
  await rm(OUTPUT_DIRECTORY, { force: true, recursive: true });

  for (const item of registry.items) {
    const itemName = posix.normalize(item.name);
    if (posix.isAbsolute(itemName) || itemName.startsWith("../")) {
      throw new Error(`Registry item name "${item.name}" is not safe.`);
    }

    await mkdir(dirname(resolve(OUTPUT_DIRECTORY, `${itemName}.json`)), {
      recursive: true,
    });
  }
};

const runShadcnBuild = () => {
  const executable = process.platform === "win32" ? "pnpm.cmd" : "pnpm";
  const result = spawnSync(
    executable,
    [
      "exec",
      "shadcn",
      "build",
      "registry.json",
      "--cwd",
      ".registry-build",
      "--output",
      "../public/r",
    ],
    {
      cwd: PROJECT_DIRECTORY,
      stdio: "inherit",
    }
  );

  if (result.error) {
    throw result.error;
  }

  if (result.status !== 0) {
    throw new Error(
      result.signal
        ? `shadcn build terminated with signal ${result.signal}.`
        : `shadcn build exited with code ${result.status ?? "unknown"}.`
    );
  }
};

const buildRegistry = async () => {
  const registry = await parseRegistry();
  const sourceTargets = createSourceTargetMap(registry);

  await rm(TEMP_DIRECTORY, { force: true, recursive: true });
  await mkdir(TEMP_DIRECTORY, { recursive: true });
  await prepareOutputDirectory(registry);

  try {
    await createTemporaryRegistry(registry, sourceTargets);
    await runShadcnBuild();
  } finally {
    await rm(TEMP_DIRECTORY, { force: true, recursive: true });
  }
};

await buildRegistry();
