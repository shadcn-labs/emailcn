import { readdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

import { transformIcons, transformMenu, transformRender } from "shadcn/utils";
import { Project, ScriptKind } from "ts-morph";
import type { SourceFile } from "ts-morph";

import { BASES } from "@/registry/bases";

const buildDisplayConfig = () => ({
  $schema: "https://ui.shadcn.com/schema.json",
  aliases: {
    components: "@/components",
    hooks: "@/hooks",
    lib: "@/lib",
    ui: "@/components/ui",
    utils: "@/lib/utils",
  },
  iconLibrary: "lucide",
  resolvedPaths: {
    components: "@/components",
    cwd: "/",
    hooks: "@/hooks",
    lib: "@/lib",
    tailwindConfig: "",
    tailwindCss: "",
    ui: "@/components/ui",
    utils: "@/lib/utils",
  },
  rsc: true,
  style: "base-nova",
  tailwind: {
    baseColor: "neutral",
    config: "",
    css: "",
    cssVariables: true,
    prefix: "",
  },
  tsx: true,
});

type DisplayTransformer = (opts: {
  filename: string;
  raw: string;
  sourceFile: SourceFile;
  config: ReturnType<typeof buildDisplayConfig>;
}) => Promise<unknown>;

export const normalizeComponentSource = (code: string) => {
  let formattedCode = code;
  for (const base of BASES) {
    formattedCode = formattedCode.replaceAll(
      new RegExp(`@/registry/bases/${base.name}/[^"']+`, "g"),
      (importPath) =>
        `@/components/email/${importPath.slice(importPath.lastIndexOf("/") + 1)}`
    );
    formattedCode = formattedCode.replaceAll(
      `@/components/ui/${base.name}-theme-provider`,
      "@/components/ui/theme-provider"
    );
  }

  return formattedCode.replaceAll("export default", "export");
};

export const formatCode = async (code: string) => {
  const formattedCode = normalizeComponentSource(code);

  try {
    const config = buildDisplayConfig();
    const project = new Project({ compilerOptions: {} });
    const sourceFile = project.createSourceFile(
      "component.tsx",
      formattedCode,
      {
        scriptKind: ScriptKind.TSX,
      }
    );

    const transformers: DisplayTransformer[] = [
      transformIcons as DisplayTransformer,
      transformMenu as DisplayTransformer,
      transformRender as DisplayTransformer,
    ];

    await Promise.all(
      transformers.map((transformer) =>
        transformer({
          config,
          filename: "component.tsx",
          raw: formattedCode,
          sourceFile,
        })
      )
    );

    return sourceFile.getText().trim();
  } catch (error) {
    console.error("Transform failed:", error);
    return code;
  }
};

const getJsonFiles = async (directory: string): Promise<string[]> => {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve(directory, entry.name);
      if (entry.isDirectory()) {
        return getJsonFiles(entryPath);
      }
      return entry.name.endsWith(".json") ? [entryPath] : [];
    })
  );

  return files.flat();
};

export const normalizeRegistryArtifacts = async (directory: string) => {
  for (const filePath of await getJsonFiles(directory)) {
    const registryItem = JSON.parse(await readFile(filePath, "utf-8")) as {
      files?: { content?: string }[];
    };

    for (const file of registryItem.files ?? []) {
      if (file.content) {
        file.content = normalizeComponentSource(file.content);
      }
    }

    await writeFile(
      filePath,
      `${JSON.stringify(registryItem, null, 2)}\n`,
      "utf-8"
    );
  }
};

const isCommandLine =
  process.argv[1] && resolve(process.argv[1]) === import.meta.filename;

if (isCommandLine && process.argv[2] === "--registry") {
  await normalizeRegistryArtifacts(resolve(process.argv[3] ?? "public/r"));
}
