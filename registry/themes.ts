import { BASE_NAMES } from "@/registry/bases";
import type { BaseName } from "@/registry/bases";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/define";

import { airbnbTheme } from "./themes/airbnb";
import { defaultTheme } from "./themes/default";
import { githubTheme } from "./themes/github";
import { linearTheme } from "./themes/linear";
import { notionTheme } from "./themes/notion";
import { raycastTheme } from "./themes/raycast";
import { slackTheme } from "./themes/slack";
import { stripeTheme } from "./themes/stripe";
import { twitchTheme } from "./themes/twitch";
import { vercelTheme } from "./themes/vercel";

export interface RegistryThemeDefinition {
  bases: readonly BaseName[];
  description: string;
  name: string;
  theme: EmailTheme;
  title: string;
  type: "registry:theme";
}

export const THEMES = [
  {
    bases: BASE_NAMES,
    description: "Neutral grayscale palette suitable for transactional mail.",
    name: "default",
    theme: defaultTheme,
    title: "Default",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Warm Airbnb-inspired coral accent with clean sans type.",
    name: "airbnb",
    theme: airbnbTheme,
    title: "Airbnb",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "GitHub-style green accent on crisp light backgrounds.",
    name: "github",
    theme: githubTheme,
    title: "GitHub",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Linear-inspired indigo primary with tight UI spacing cues.",
    name: "linear",
    theme: linearTheme,
    title: "Linear",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Notion-like blue-gray surfaces and approachable typography.",
    name: "notion",
    theme: notionTheme,
    title: "Notion",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Bold Raycast reds on dark-forward contrast.",
    name: "raycast",
    theme: raycastTheme,
    title: "Raycast",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Slack aubergine accent for product-style announcements.",
    name: "slack",
    theme: slackTheme,
    title: "Slack",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Stripe violet primary for billing and receipts.",
    name: "stripe",
    theme: stripeTheme,
    title: "Stripe",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Twitch purple-forward theme for creator-facing mail.",
    name: "twitch",
    theme: twitchTheme,
    title: "Twitch",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Minimal high-contrast base with monochrome primary.",
    name: "vercel",
    theme: vercelTheme,
    title: "Vercel",
    type: "registry:theme",
  },
] as const satisfies readonly RegistryThemeDefinition[];

export type RegistryTheme = (typeof THEMES)[number];
export type RegistryThemeName = RegistryTheme["name"];

export const THEME_NAMES = THEMES.map((theme) => theme.name) as [
  RegistryThemeName,
  ...RegistryThemeName[],
];

export const EMAIL_THEME_MAP = Object.fromEntries(
  THEMES.map((entry) => [entry.name, entry.theme])
) as Record<RegistryThemeName, EmailTheme>;

export const EMAIL_THEME_OPTIONS = THEMES.map((entry) => ({
  label: entry.title,
  value: entry.name,
}));

export const THEME_PRIMARY_BY_NAME = Object.fromEntries(
  THEMES.map((entry) => {
    const { colors } = resolveEmailTheme(entry.theme);
    return [entry.name, colors.primary];
  })
) as Record<RegistryThemeName, string>;

export const getThemesForBase = (base: BaseName) =>
  THEMES.filter((theme) => theme.bases.includes(base));
