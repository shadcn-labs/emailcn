// Moves ComponentPreview configuration out of component MDX and into dedicated
// demo files. This keeps every component-doc preview declarative:
//   <ComponentPreview base="..." name="..." />
// while ensuring the code panel shows the exact props used by that preview.
import fs from "node:fs";
import path from "node:path";

import { Project, SyntaxKind } from "ts-morph";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASES = ["jsx-email", "mjml-react", "react-email"];
const REACT_DOCS = path.join(ROOT, "content/docs/components/react-email");
const EXAMPLES = path.join(ROOT, "examples");
const MANIFEST_PATH = path.join(EXAMPLES, "component-preview-demos.json");
const TAG_PATTERN = /<ComponentPreview\b[\s\S]*?\/>/g;
const ATTRIBUTE_PATTERN = /\b([\w-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|\{(\d+)\})/g;

const walk = (directory) =>
  fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(entryPath) : [entryPath];
  });

const slug = (value) =>
  value
    .replaceAll(/([a-z\d])([A-Z])/g, "$1-$2")
    .replaceAll(/[^a-zA-Z\d]+/g, "-")
    .replaceAll(/^-+|-+$/g, "")
    .toLowerCase();

const componentName = (name) => {
  const pascal = name
    .split("-")
    .filter(Boolean)
    .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
    .join("");
  return /^\d/.test(pascal) ? `Email${pascal}` : pascal;
};

const parseAttributes = (tag) =>
  Object.fromEntries(
    [...tag.matchAll(ATTRIBUTE_PATTERN)].map((match) => [
      match[1],
      match[2] ?? match[3] ?? match[4],
    ])
  );

const configuredName = (source, props) => {
  const stem = source.endsWith("-demo") ? source.slice(0, -5) : source;
  const configuration = Object.entries(props)
    .map(([name, value]) => `${slug(name)}-${slug(value)}`)
    .join("-");
  return `${stem}-${configuration}-example-demo`;
};

const rewriteDocPreviews = (input, file, entries) => {
  let configuredPreviews = 0;
  const output = input.replace(TAG_PATTERN, (tag) => {
    const attributes = parseAttributes(tag);
    const { base, height, name, ...props } = attributes;
    if (!base || !name) {
      throw new Error(`ComponentPreview is missing base or name in ${file}`);
    }
    if (base !== "react-email") {
      throw new Error(`Unexpected base "${base}" in ${file}`);
    }
    if (Object.keys(props).length === 0 && height === undefined) {
      return tag;
    }
    if (Object.keys(props).length === 0) {
      throw new Error(`Height-only ComponentPreview is unsupported in ${file}`);
    }

    configuredPreviews += 1;
    const generatedName = configuredName(name, props);
    const entry = {
      height: height === undefined ? undefined : Number(height),
      name: generatedName,
      props,
      source: name,
    };
    const existing = entries.get(generatedName);
    if (existing && JSON.stringify(existing) !== JSON.stringify(entry)) {
      throw new Error(`Generated demo name collision: ${generatedName}`);
    }
    entries.set(generatedName, entry);
    return `<ComponentPreview base="react-email" name="${generatedName}" />`;
  });
  return { configuredPreviews, output };
};

const collectManifest = () => {
  const previous = fs.existsSync(MANIFEST_PATH)
    ? JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"))
    : [];
  const entries = new Map(previous.map((entry) => [entry.name, entry]));
  let configuredPreviews = 0;

  for (const file of walk(REACT_DOCS).filter((entry) =>
    entry.endsWith(".mdx")
  )) {
    const input = fs.readFileSync(file, "utf-8");
    const rewritten = rewriteDocPreviews(input, file, entries);
    configuredPreviews += rewritten.configuredPreviews;
    const { output } = rewritten;
    if (output !== input) {
      fs.writeFileSync(file, output);
    }
  }

  const manifest = [...entries.values()].toSorted((left, right) =>
    left.name.localeCompare(right.name)
  );
  if (manifest.length > 0) {
    fs.writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
  }
  return { configuredPreviews, manifest };
};

const readManifest = () => JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));

const project = new Project({
  compilerOptions: {
    jsx: 4,
  },
  skipAddingFilesFromTsConfig: true,
});

const valueForBinding = (binding, props) => {
  const propName =
    binding.getPropertyNameNode()?.getText() ?? binding.getName();
  if (Object.hasOwn(props, propName)) {
    return {
      configured: true,
      text: JSON.stringify(props[propName]),
    };
  }
  return {
    configured: false,
    text: binding.getInitializer()?.getText() ?? "undefined",
  };
};

const typeForBinding = (parameter, binding) => {
  const parameterType = parameter.getTypeNode();
  if (!parameterType) {
    return;
  }
  const propertyName =
    binding.getPropertyNameNode()?.getText() ?? binding.getName();
  if (parameterType.getKind() === SyntaxKind.TypeLiteral) {
    const property = parameterType
      .asKindOrThrow(SyntaxKind.TypeLiteral)
      .getProperties()
      .find((candidate) => candidate.getName() === propertyName);
    return property?.getTypeNode()?.getText();
  }
  return `${parameterType.getText()}[${JSON.stringify(propertyName)}]`;
};

const escapeRegExp = (value) => value.replaceAll(/[.*+?^${}()|[\]\\]/g, "\\$&");

const removeUnusedTypeDeclarations = (sourceFile) => {
  let removed = true;
  while (removed) {
    removed = false;
    const declarations = [
      ...sourceFile.getInterfaces(),
      ...sourceFile.getTypeAliases(),
    ];
    for (const declaration of declarations) {
      if (declaration.isExported()) {
        continue;
      }
      const name = declaration.getName();
      const otherText = sourceFile
        .getStatements()
        .filter((statement) => statement !== declaration)
        .map((statement) => statement.getText())
        .join("\n");
      if (!new RegExp(`\\b${escapeRegExp(name)}\\b`).test(otherText)) {
        declaration.remove();
        removed = true;
      }
    }
  }
};

const removeUnusedImports = (sourceFile) => {
  const nonImportText = sourceFile
    .getStatements()
    .filter((statement) => statement.getKind() !== SyntaxKind.ImportDeclaration)
    .map((statement) => statement.getText())
    .join("\n");
  const isUsed = (name) =>
    new RegExp(`\\b${escapeRegExp(name)}\\b`).test(nonImportText);

  for (const declaration of sourceFile.getImportDeclarations()) {
    const defaultImport = declaration.getDefaultImport();
    if (defaultImport && !isUsed(defaultImport.getText())) {
      defaultImport.remove();
    }
    const namespaceImport = declaration.getNamespaceImport();
    if (namespaceImport && !isUsed(namespaceImport.getText())) {
      namespaceImport.remove();
    }
    for (const specifier of declaration.getNamedImports()) {
      const localName =
        specifier.getAliasNode()?.getText() ?? specifier.getName();
      if (!isUsed(localName)) {
        specifier.remove();
      }
    }
    if (
      declaration.getImportClause() &&
      !declaration.getDefaultImport() &&
      !declaration.getNamespaceImport() &&
      declaration.getNamedImports().length === 0
    ) {
      declaration.remove();
    }
  }
};

const isPropertyName = (identifier) => {
  const parent = identifier.getParent();
  if (parent?.getKind() === SyntaxKind.PropertyAccessExpression) {
    return (
      parent
        .asKindOrThrow(SyntaxKind.PropertyAccessExpression)
        .getNameNode() === identifier
    );
  }
  if (parent?.getKind() === SyntaxKind.PropertyAssignment) {
    return (
      parent.asKindOrThrow(SyntaxKind.PropertyAssignment).getNameNode() ===
      identifier
    );
  }
  if (parent?.getKind() === SyntaxKind.JsxAttribute) {
    return (
      parent.asKindOrThrow(SyntaxKind.JsxAttribute).getNameNode() === identifier
    );
  }
  return false;
};

const assertedValue = (parameter, binding, value) => {
  if (value.text === "undefined") {
    return value.text;
  }
  const type = typeForBinding(parameter, binding);
  return type ? `(${value.text} as ${type})` : value.text;
};

const replaceConfiguredBinding = (body, parameter, binding, props) => {
  const localName = binding.getName();
  const value = valueForBinding(binding, props);
  const fallbacks = body
    .getDescendantsOfKind(SyntaxKind.BinaryExpression)
    .filter(
      (expression) =>
        expression.getOperatorToken().getKind() ===
          SyntaxKind.QuestionQuestionToken &&
        expression.getLeft().getKind() === SyntaxKind.Identifier &&
        expression.getLeft().getText() === localName
    )
    .toReversed();
  for (const fallback of fallbacks) {
    fallback.replaceWithText(
      value.text === "undefined" ? fallback.getRight().getText() : value.text
    );
  }

  const replacement = assertedValue(parameter, binding, value);
  const identifiers = body
    .getDescendantsOfKind(SyntaxKind.Identifier)
    .filter(
      (identifier) =>
        identifier.getText() === localName && !isPropertyName(identifier)
    )
    .toReversed();
  for (const identifier of identifiers) {
    const parent = identifier.getParent();
    if (parent?.getKind() === SyntaxKind.ShorthandPropertyAssignment) {
      parent.replaceWithText(`${localName}: ${replacement}`);
    } else {
      identifier.replaceWithText(replacement);
    }
  }
};

const inlinePropsObject = (body, parameterName, props) => {
  const attributes = Object.entries(props)
    .map(([name, value]) => `${name}=${JSON.stringify(value)}`)
    .join(" ");
  for (const spread of body
    .getDescendantsOfKind(SyntaxKind.JsxSpreadAttribute)
    .filter(
      (candidate) => candidate.getExpression().getText() === parameterName
    )
    .toReversed()) {
    spread.replaceWithText(attributes);
  }

  const objectLiteral = `({ ${Object.entries(props)
    .map(([name, value]) => `${name}: ${JSON.stringify(value)}`)
    .join(", ")} } as const)`;
  for (const identifier of body
    .getDescendantsOfKind(SyntaxKind.Identifier)
    .filter(
      (candidate) =>
        candidate.getText() === parameterName && !isPropertyName(candidate)
    )
    .toReversed()) {
    identifier.replaceWithText(objectLiteral);
  }
};

const unwrapStringLiteral = (expression) => {
  let current = expression;
  while (
    current?.getKind() === SyntaxKind.AsExpression ||
    current?.getKind() === SyntaxKind.ParenthesizedExpression
  ) {
    current = current.getExpression();
  }
  return current?.getKind() === SyntaxKind.StringLiteral ? current : undefined;
};

const simplifyJsxStringAttributes = (body) => {
  for (const attribute of body.getDescendantsOfKind(SyntaxKind.JsxAttribute)) {
    const initializer = attribute.getInitializer();
    if (initializer?.getKind() !== SyntaxKind.JsxExpression) {
      continue;
    }
    const expression = initializer
      .asKindOrThrow(SyntaxKind.JsxExpression)
      .getExpression();
    const literal = unwrapStringLiteral(expression);
    if (literal) {
      initializer.replaceWithText(JSON.stringify(literal.getLiteralValue()));
    }
  }
};

const generateDemo = (base, entry) => {
  const sourcePath = path.join(EXAMPLES, base, `${entry.source}.tsx`);
  const outputPath = path.join(EXAMPLES, base, `${entry.name}.tsx`);
  if (!fs.existsSync(sourcePath)) {
    throw new Error(`Missing source demo: ${sourcePath}`);
  }

  const sourceText = fs.readFileSync(sourcePath, "utf-8");
  const generated = project.createSourceFile(outputPath, sourceText, {
    overwrite: true,
  });
  const declaration = generated
    .getDescendantsOfKind(SyntaxKind.FunctionDeclaration)
    .find((candidate) => candidate.isDefaultExport());
  if (!declaration) {
    throw new Error(`Expected a default function declaration in ${sourcePath}`);
  }

  const name = componentName(entry.name);
  const originalName = declaration.getName();
  declaration.getNameNodeOrThrow().replaceWithText(name);
  if (originalName) {
    for (const identifier of generated.getDescendantsOfKind(
      SyntaxKind.Identifier
    )) {
      if (identifier.getText() === originalName) {
        identifier.replaceWithText(name);
      }
    }
  }
  const parameters = declaration.getParameters();
  if (parameters.length !== 1) {
    throw new Error(`Expected one demo parameter in ${sourcePath}`);
  }

  const [parameter] = parameters;
  const parameterName = parameter.getNameNode();
  const body = declaration.getBodyOrThrow();
  if (parameterName.getKind() === SyntaxKind.ObjectBindingPattern) {
    const bindings = parameterName
      .asKindOrThrow(SyntaxKind.ObjectBindingPattern)
      .getElements();
    for (const binding of bindings) {
      replaceConfiguredBinding(body, parameter, binding, entry.props);
    }
  } else if (parameterName.getKind() === SyntaxKind.Identifier) {
    inlinePropsObject(body, parameterName.getText(), entry.props);
  } else {
    throw new Error(`Unsupported demo parameter in ${sourcePath}`);
  }
  parameter.remove();
  simplifyJsxStringAttributes(body);

  if (entry.height !== undefined) {
    generated.addStatements(`\n${name}.PreviewHeight = ${entry.height};`);
  }
  removeUnusedTypeDeclarations(generated);
  removeUnusedImports(generated);
  fs.writeFileSync(outputPath, generated.getFullText());
  project.removeSourceFile(generated);
};

const cleanGeneratedDemos = () => {
  for (const base of BASES) {
    for (const file of fs.readdirSync(path.join(EXAMPLES, base))) {
      if (file.endsWith("-example-demo.tsx")) {
        fs.rmSync(path.join(EXAMPLES, base, file));
      }
    }
  }
};

const generateIndex = () => {
  const imports = ['import type { ComponentType } from "react";', ""];
  const maps = [];

  for (const base of BASES) {
    const files = fs
      .readdirSync(path.join(EXAMPLES, base))
      .filter((file) => file.endsWith(".tsx"))
      .toSorted();
    const entries = files.map((file, index) => {
      const name = file.slice(0, -4);
      const identifier = `Demo${componentName(base)}${index}`;
      imports.push(`import ${identifier} from "./${base}/${name}";`);
      return `    ${JSON.stringify(name)}: ${identifier},`;
    });
    maps.push(`  ${JSON.stringify(base)}: {\n${entries.join("\n")}\n  },`);
  }

  const output = `${imports.join("\n")}

export const demos: Record<
  "jsx-email" | "mjml-react" | "react-email",
  Record<string, ComponentType>
> = {
${maps.join("\n")}
};
`;
  fs.writeFileSync(path.join(EXAMPLES, "__index__.tsx"), output);
};

const collected = collectManifest();
const manifest =
  collected.manifest.length > 0 ? collected.manifest : readManifest();
cleanGeneratedDemos();
for (const base of BASES) {
  for (const entry of manifest) {
    generateDemo(base, entry);
  }
}
generateIndex();

console.log(
  `${manifest.length} configured demos generated per base (${collected.configuredPreviews} React Email previews rewritten)`
);
