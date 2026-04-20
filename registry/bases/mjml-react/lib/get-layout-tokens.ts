import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";

/** Shared container / typography defaults for inlined MJML documents. */
export const getLayoutTokens = (t: ResolvedEmailTheme) => {
  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  return {
    baseFs: t.fontSize.base ?? "14px",
    bg: t.colors.background ?? "#ffffff",
    fg: t.colors.foreground ?? "#111827",
    lh: t.lineHeight.snug ?? "1.375",
    sans: t.fontFamily.sans ?? "sans-serif",
    width,
  };
};
