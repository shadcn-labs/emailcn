export type EmailColorMode = "dark" | "light";

const darkPalette = {
  border: "#2f2f2f",
  canvas: "#0a0a0a",
  surface: "#171717",
  surfaceMuted: "#262626",
  text: "#fafafa",
  textMuted: "#a3a3a3",
  textSubtle: "#737373",
} as const;

const backgroundColors = new Map<string, string>([
  ["#ffffff", darkPalette.surface],
  ["#fffffe", darkPalette.surface],
  ["#fafafa", darkPalette.surface],
  ["#f9fafb", darkPalette.surfaceMuted],
  ["#f8fafc", darkPalette.surfaceMuted],
  ["#f5f5f5", darkPalette.surfaceMuted],
  ["#f3f4f6", darkPalette.surfaceMuted],
  ["#f1f5f9", darkPalette.canvas],
  ["#e5e7eb", darkPalette.surfaceMuted],
]);

const borderColors = new Map<string, string>([
  ["#f3f4f6", darkPalette.border],
  ["#e5e7eb", darkPalette.border],
  ["#e2e8f0", darkPalette.border],
  ["#d1d5db", darkPalette.border],
  ["#d4d4d4", darkPalette.border],
]);

const textColors = new Map<string, string>([
  ["#000000", darkPalette.text],
  ["#030712", darkPalette.text],
  ["#0a0a0a", darkPalette.text],
  ["#111827", darkPalette.text],
  ["#18181b", darkPalette.text],
  ["#1f2937", darkPalette.text],
  ["#27272a", darkPalette.text],
  ["#374151", darkPalette.textMuted],
  ["#3f3f46", darkPalette.textMuted],
  ["#4b5563", darkPalette.textMuted],
  ["#52525b", darkPalette.textMuted],
  ["#6b7280", darkPalette.textMuted],
  ["#71717a", darkPalette.textMuted],
  ["#737373", darkPalette.textMuted],
  ["#9ca3af", darkPalette.textSubtle],
]);

const expandHex = (color: string) => {
  const normalized = color.toLowerCase();
  if (normalized.length !== 4) {
    return normalized;
  }
  return `#${normalized[1]}${normalized[1]}${normalized[2]}${normalized[2]}${normalized[3]}${normalized[3]}`;
};

const rgbToHex = (red: string, green: string, blue: string) =>
  `#${[red, green, blue]
    .map((channel) =>
      Math.min(255, Number.parseInt(channel, 10)).toString(16).padStart(2, "0")
    )
    .join("")}`;

const replaceHexColors = (value: string, colors: ReadonlyMap<string, string>) =>
  value.replaceAll(/#[\da-f]{3}(?:[\da-f]{3})?\b/gi, (color) => {
    const normalized = expandHex(color);
    return colors.get(normalized) ?? color;
  });

const replaceRgbColors = (value: string, colors: ReadonlyMap<string, string>) =>
  value.replaceAll(
    /rgb\(\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*[,\s]\s*(\d{1,3})\s*\)/gi,
    (color, red: string, green: string, blue: string) =>
      colors.get(rgbToHex(red, green, blue)) ?? color
  );

const replaceColors = (value: string, colors: ReadonlyMap<string, string>) =>
  replaceRgbColors(replaceHexColors(value, colors), colors);

const getPaletteForProperty = (property: string) => {
  const normalizedProperty = property.toLowerCase();
  if (normalizedProperty.startsWith("background")) {
    return backgroundColors;
  }
  if (
    normalizedProperty.startsWith("border") ||
    normalizedProperty === "stroke"
  ) {
    return borderColors;
  }
  return textColors;
};

const applyDarkPalette = (html: string) =>
  html
    .replaceAll(
      /(background(?:-color)?|color|fill|stroke|border(?:-(?:top|right|bottom|left))?(?:-color)?)\s*:\s*([^;}"'<]+)/gi,
      (declaration, property: string, value: string) => {
        const palette = getPaletteForProperty(property);
        return declaration.replace(value, replaceColors(value, palette));
      }
    )
    .replaceAll(
      /(bgcolor|color)=(["'])(#[\da-f]{3}(?:[\da-f]{3})?)\2/gi,
      (attribute, name: string, quote: string, color: string) => {
        const palette =
          name.toLowerCase() === "bgcolor" ? backgroundColors : textColors;
        return `${name}=${quote}${replaceColors(color, palette)}${quote}`;
      }
    );

const colorSchemeHead = (mode: EmailColorMode) => `
    <meta name="color-scheme" content="${mode} only">
    <meta name="supported-color-schemes" content="${mode} only">
    <style>
      :root {
        color-scheme: ${mode} only;
        supported-color-schemes: ${mode} only;
      }
    </style>`;

const applyColorSchemeMetadata = (html: string, mode: EmailColorMode) => {
  const withoutExistingMetadata = html.replaceAll(
    /<meta\b[^>]*\bname=(["'])(?:color-scheme|supported-color-schemes)\1[^>]*>/gi,
    ""
  );
  const withMode = withoutExistingMetadata.replace(
    /<html\b(?![^>]*\bdata-email-color-mode=)/i,
    `<html data-email-color-mode="${mode}"`
  );

  if (/<head\b[^>]*>/i.test(withMode)) {
    return withMode.replace(
      /<head\b[^>]*>/i,
      (head) => `${head}${colorSchemeHead(mode)}`
    );
  }

  return withMode.replace(
    /<html\b[^>]*>/i,
    (htmlTag) => `${htmlTag}<head>${colorSchemeHead(mode)}</head>`
  );
};

export const getEmailHtmlForColorMode = (html: string, mode: EmailColorMode) =>
  applyColorSchemeMetadata(
    mode === "dark" ? applyDarkPalette(html) : html,
    mode
  );
