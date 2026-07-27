import { posix } from "node:path";

import { transformIcons, transformMenu, transformRender } from "shadcn/utils";
import { Project, ScriptKind } from "ts-morph";
import type { SourceFile } from "ts-morph";

import registry from "@/registry.json";

interface RegistryFile {
  path: string;
  target?: string;
}

const SOURCE_EXTENSIONS = [".tsx", ".ts", ".jsx", ".js"] as const;

const stripSourceExtension = (filePath: string) =>
  filePath.replace(/\.[cm]?[jt]sx?$/u, "");

const sourceTargets = new Map<string, string>();
for (const item of registry.items) {
  for (const file of (item.files ?? []) as RegistryFile[]) {
    if (file.target) {
      sourceTargets.set(
        posix.normalize(file.path),
        `@/${stripSourceExtension(posix.normalize(file.target))}`
      );
    }
  }
}

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

const getTargetSpecifier = (sourcePath: string, moduleSpecifier: string) => {
  if (
    !(
      moduleSpecifier.startsWith("@/registry/") ||
      moduleSpecifier.startsWith(".")
    )
  ) {
    return moduleSpecifier;
  }

  for (const candidate of getSourceCandidates(sourcePath, moduleSpecifier)) {
    const target = sourceTargets.get(candidate);
    if (target) {
      return target;
    }
  }

  return moduleSpecifier;
};

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

export const formatCode = async (
  code: string,
  sourcePath = "component.tsx"
) => {
  const formattedCode = code.replaceAll("export default", "export");
  const filename = "component.tsx";

  try {
    const config = buildDisplayConfig();
    const project = new Project({ compilerOptions: {} });
    const sourceFile = project.createSourceFile(filename, formattedCode, {
      scriptKind: ScriptKind.TSX,
    });

    for (const declaration of sourceFile.getImportDeclarations()) {
      declaration.setModuleSpecifier(
        getTargetSpecifier(sourcePath, declaration.getModuleSpecifierValue())
      );
    }

    for (const declaration of sourceFile.getExportDeclarations()) {
      const moduleSpecifier = declaration.getModuleSpecifierValue();
      if (moduleSpecifier) {
        declaration.setModuleSpecifier(
          getTargetSpecifier(sourcePath, moduleSpecifier)
        );
      }
    }

    const transformedCode = sourceFile.getFullText();
    const transformers: DisplayTransformer[] = [
      transformIcons as DisplayTransformer,
      transformMenu as DisplayTransformer,
      transformRender as DisplayTransformer,
    ];

    await Promise.all(
      transformers.map((transformer) =>
        transformer({
          config,
          filename,
          raw: transformedCode,
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
