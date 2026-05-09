import { BASE_NAMES } from "@/registry/bases";
import type { BaseName } from "@/registry/bases";
import { airbnbTheme as mjmlAirbnb } from "@/registry/bases/mjml-react/themes/airbnb";
import { appleTheme as mjmlApple } from "@/registry/bases/mjml-react/themes/apple";
import { defaultTheme as mjmlDefault } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { dropboxTheme as mjmlDropbox } from "@/registry/bases/mjml-react/themes/dropbox";
import { githubTheme as mjmlGithub } from "@/registry/bases/mjml-react/themes/github";
import { linearTheme as mjmlLinear } from "@/registry/bases/mjml-react/themes/linear";
import { nikeTheme as mjmlNike } from "@/registry/bases/mjml-react/themes/nike";
import { notionTheme as mjmlNotion } from "@/registry/bases/mjml-react/themes/notion";
import { raycastTheme as mjmlRaycast } from "@/registry/bases/mjml-react/themes/raycast";
import { slackTheme as mjmlSlack } from "@/registry/bases/mjml-react/themes/slack";
import { stackOverflowTheme as mjmlStackOverflow } from "@/registry/bases/mjml-react/themes/stack-overflow";
import { stripeTheme as mjmlStripe } from "@/registry/bases/mjml-react/themes/stripe";
import { twitchTheme as mjmlTwitch } from "@/registry/bases/mjml-react/themes/twitch";
import { vercelTheme as mjmlVercel } from "@/registry/bases/mjml-react/themes/vercel";

export interface RegistryThemeDefinition {
  bases: readonly BaseName[];
  description: string;
  name: string;
  theme: EmailThemeTokens;
  title: string;
  type: "registry:theme";
}

export const THEMES = [
  {
    bases: BASE_NAMES,
    description: "Neutral grayscale palette suitable for transactional mail.",
    name: "default",
    theme: mjmlDefault,
    title: "Default",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Warm Airbnb-inspired coral accent with clean sans type.",
    name: "airbnb",
    theme: mjmlAirbnb,
    title: "Airbnb",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "GitHub-style green accent on crisp light backgrounds.",
    name: "github",
    theme: mjmlGithub,
    title: "GitHub",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Linear-inspired indigo primary with tight UI spacing cues.",
    name: "linear",
    theme: mjmlLinear,
    title: "Linear",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Notion-like blue-gray surfaces and approachable typography.",
    name: "notion",
    theme: mjmlNotion,
    title: "Notion",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Bold Raycast reds on dark-forward contrast.",
    name: "raycast",
    theme: mjmlRaycast,
    title: "Raycast",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Slack aubergine accent for product-style announcements.",
    name: "slack",
    theme: mjmlSlack,
    title: "Slack",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Stripe violet primary for billing and receipts.",
    name: "stripe",
    theme: mjmlStripe,
    title: "Stripe",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Twitch purple-forward theme for creator-facing mail.",
    name: "twitch",
    theme: mjmlTwitch,
    title: "Twitch",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Minimal high-contrast base with monochrome primary.",
    name: "vercel",
    theme: mjmlVercel,
    title: "Vercel",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description:
      "Apple-inspired clean whites and subtle grays with blue accents.",
    name: "apple",
    theme: mjmlApple,
    title: "Apple",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description:
      "Dropbox blue primary for professional file-sharing communications.",
    name: "dropbox",
    theme: mjmlDropbox,
    title: "Dropbox",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Nike's signature black-and-white minimal aesthetic.",
    name: "nike",
    theme: mjmlNike,
    title: "Nike",
    type: "registry:theme",
  },
  {
    bases: BASE_NAMES,
    description: "Stack Overflow orange for developer community newsletters.",
    name: "stack-overflow",
    theme: mjmlStackOverflow,
    title: "Stack Overflow",
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
) as Record<RegistryThemeName, EmailThemeTokens>;

export const EMAIL_THEME_OPTIONS = THEMES.map((entry) => ({
  label: entry.title,
  value: entry.name,
}));

export const THEME_PRIMARY_BY_NAME = Object.fromEntries(
  THEMES.map((entry) => [entry.name, entry.theme.colorPrimary])
) as Record<RegistryThemeName, string>;

export const getThemesForBase = (base: BaseName) =>
  THEMES.filter((theme) => theme.bases.includes(base));
