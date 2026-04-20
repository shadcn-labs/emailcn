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

/** Deep-merge Tailwind extend blocks for brand variants (MJML / React Email). */
export const mergeEmailThemes = (
  base: TailwindConfig,
  patch: TailwindConfig
): TailwindConfig => {
  const baseExtend =
    (base.theme as Record<string, unknown> | undefined)?.extend ?? {};
  const patchExtend =
    (patch.theme as Record<string, unknown> | undefined)?.extend ?? {};

  return {
    presets: patch.presets ?? base.presets,
    theme: {
      extend: mergeDeep(
        baseExtend as Record<string, unknown>,
        patchExtend as Record<string, unknown>
      ) as Record<string, unknown>,
    },
  } as TailwindConfig;
};
