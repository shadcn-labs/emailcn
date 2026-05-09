import fs from "node:fs";
import path from "node:path";

const THEMES_DIR = path.join(process.cwd(), "registry/bases/mjml-react/themes");
const OUTPUT_DIR = path.join(
  process.cwd(),
  "registry/bases/react-email/themes"
);

const extractValue = (content: string, key: string): string | undefined => {
  const regex = new RegExp(`${key}:\\s*['"]([^'"]+)['"]`, "g");
  let match;
  let fullMatch = "";
  while ((match = regex.exec(content)) !== null) {
    fullMatch += match[1];
  }
  return fullMatch || undefined;
};

const extractMultiLineValue = (
  content: string,
  key: string
): string | undefined => {
  const regex = new RegExp(`${key}:\\s*'([^']*)'`);
  const match = content.match(regex);
  return match?.[1];
};

const generateThemeFile = (themeName: string, content: string): string => {
  const pascalName = themeName
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  const exportName = `${pascalName}TailwindConfig`;

  const colorPrimary = extractValue(content, "colorPrimary") || "#000000";
  const colorBackground = extractValue(content, "colorBackground") || "#ffffff";
  const colorBackgroundMuted =
    extractValue(content, "colorBackgroundMuted") || "#f3f4f6";
  const colorText = extractValue(content, "colorText") || "#000000";
  const colorTextMuted = extractValue(content, "colorTextMuted") || "#6b7280";
  const colorTextSubtle = extractValue(content, "colorTextSubtle") || "#9ca3af";
  const colorBorder = extractValue(content, "colorBorder") || "#e5e7eb";
  const colorBorderSubtle =
    extractValue(content, "colorBorderSubtle") || "#f3f4f6";
  const fontFamily =
    extractMultiLineValue(content, "fontFamily") || "sans-serif";
  const fontFamilyMono =
    extractMultiLineValue(content, "fontFamilyMono") || "monospace";

  const colors = {
    bg: colorBackground,
    "bg-2": colorBackgroundMuted,
    brand: colorPrimary,
    fg: colorText,
    "fg-2": colorTextMuted,
    "fg-3": colorTextSubtle,
    stroke: colorBorder,
    "stroke-strong": colorBorderSubtle,
  };

  const fontScale = {
    "11": {
      fontSize: "11px",
      fontWeight: "400",
      letterSpacing: "-0.033px",
      lineHeight: "1.5",
    },
    "13": {
      fontSize: "13px",
      fontWeight: "400",
      letterSpacing: "-0.039px",
      lineHeight: "1.5",
    },
    "14": { fontSize: "14px", lineHeight: "1.5" },
    "16": {
      fontSize: "16px",
      fontWeight: "400",
      letterSpacing: "-0.048px",
      lineHeight: "1.5",
    },
    "20": {
      fontSize: "20px",
      fontWeight: "500",
      letterSpacing: "-0.1px",
      lineHeight: "1.2",
    },
    "24": {
      fontSize: "24px",
      fontWeight: "600",
      letterSpacing: "-0.084px",
      lineHeight: "1",
    },
    "28": {
      fontSize: "28px",
      fontWeight: "600",
      letterSpacing: "-0.084px",
      lineHeight: "1.3",
    },
  };

  const colorsObj = Object.entries(colors)
    .map(([key, value]) => `  '${key}': '${value}',`)
    .join("\n");

  const fontScaleObj = Object.entries(fontScale)
    .map(([key, value]) => {
      const props = Object.entries(value)
        .map(([k, v]) => `'${k}': '${v}'`)
        .join(", ");
      return `  '${key}': { ${props} },`;
    })
    .join("\n");

  return `import type { TailwindConfig } from 'react-email';
import plugin from 'tailwindcss/plugin';

const colors = {
${colorsObj}
} as const;

const fontScale = {
${fontScaleObj}
} as const;

export const ${exportName}: TailwindConfig = {
  plugins: [
    plugin(({ addUtilities, addVariant }) => {
      addVariant('mobile', '@media (max-width: 600px)');
      const utilities: Record<string, Record<string, string>> = {};
      for (const [step, token] of Object.entries(fontScale)) {
        utilities[\`.font-\${step}\`] = token;
      }
      addUtilities(utilities);
    }),
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ['${fontFamily.replaceAll("'", "\\'")}'],
        mono: ['${fontFamilyMono.replaceAll("'", "\\'")}'],
      },
    },
  },
};
`;
};

const main = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(THEMES_DIR)
    .filter(
      (f) => f.endsWith(".ts") && f !== "types.ts" && f !== "registry.ts"
    );

  const themeNames: string[] = [];

  for (const file of files) {
    const themeName = file.replace(".ts", "");
    const filePath = path.join(THEMES_DIR, file);

    const content = fs.readFileSync(filePath, "utf-8");

    const outputFile = path.join(
      OUTPUT_DIR,
      `${themeName.replace("theme-", "")}.ts`
    );
    fs.writeFileSync(outputFile, generateThemeFile(themeName, content));
    console.log(`Generated: theme-${themeName}.ts`);

    themeNames.push(themeName);
  }

  console.log(`\nDone! Generated ${themeNames.length} theme files.`);
};

main();
