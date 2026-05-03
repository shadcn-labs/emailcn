import { pixelBasedPreset } from "react-email";
import type { TailwindConfig } from "react-email";

const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const mergeDeep = (
  base: Record<string, unknown>,
  patch: Record<string, unknown>
): Record<string, unknown> => {
  const out = { ...base };
  for (const [key, val] of Object.entries(patch)) {
    out[key] =
      isPlainObject(val) && isPlainObject(out[key] as unknown)
        ? mergeDeep(out[key] as Record<string, unknown>, val)
        : val;
  }
  return out;
};

const flattenColors = (val: unknown, prefix = ""): Record<string, string> => {
  if (typeof val === "string") {
    const key = prefix.replace(/^-/, "") || "DEFAULT";
    return { [key]: val };
  }
  if (!isPlainObject(val)) {
    return {};
  }
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(val)) {
    const nextPrefix = k === "DEFAULT" ? prefix : `${prefix}-${k}`;
    Object.assign(out, flattenColors(v, nextPrefix));
  }
  return out;
};

const fontSizeValue = (v: unknown): string => {
  if (typeof v === "string") {
    return v;
  }
  if (Array.isArray(v) && typeof v[0] === "string") {
    return v[0];
  }
  return "14px";
};

const fontFamilyRecord = (raw: unknown): Record<string, string> => {
  if (!isPlainObject(raw)) {
    return {};
  }
  const fontFamily: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (Array.isArray(v)) {
      fontFamily[k] = v.join(", ").replaceAll('"', "'");
    } else if (typeof v === "string") {
      fontFamily[k] = v.replaceAll('"', "'");
    }
  }
  return fontFamily;
};

const stringRecord = (raw: unknown): Record<string, string> => {
  if (!isPlainObject(raw)) {
    return {};
  }
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    if (typeof v === "string") {
      out[k] = v;
    }
  }
  return out;
};

const fontSizeRecord = (raw: unknown): Record<string, string> => {
  if (!isPlainObject(raw)) {
    return {};
  }
  const out: Record<string, string> = {};
  for (const [k, v] of Object.entries(raw)) {
    out[k] = fontSizeValue(v);
  }
  return out;
};

export interface ResolvedEmailTheme {
  borderRadius: Record<string, string>;
  colors: Record<string, string>;
  fontFamily: Record<string, string>;
  fontSize: Record<string, string>;
  fontWeight: Record<string, string>;
  lineHeight: Record<string, string>;
  maxWidth: Record<string, string>;
  spacing: Record<string, string>;
}

export const resolveEmailTheme = (
  config: TailwindConfig
): ResolvedEmailTheme => {
  const presetExtend =
    (pixelBasedPreset.theme as Record<string, unknown> | undefined)?.extend ??
    {};
  const userExtend =
    (config.theme as Record<string, unknown> | undefined)?.extend ?? {};

  const merged = mergeDeep(
    presetExtend as Record<string, unknown>,
    userExtend as Record<string, unknown>
  );

  return {
    borderRadius: stringRecord(merged.borderRadius),
    colors: flattenColors(merged.colors),
    fontFamily: fontFamilyRecord(merged.fontFamily),
    fontSize: fontSizeRecord(merged.fontSize),
    fontWeight: stringRecord(merged.fontWeight),
    lineHeight: stringRecord(merged.lineHeight),
    maxWidth: stringRecord(merged.maxWidth),
    spacing: stringRecord(merged.spacing),
  };
};
