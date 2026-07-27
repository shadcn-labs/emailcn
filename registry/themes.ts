import { airbnbTheme } from "@/registry/themes/definitions/airbnb";
import { appleTheme } from "@/registry/themes/definitions/apple";
import { defaultTheme } from "@/registry/themes/definitions/default";
import { dropboxTheme } from "@/registry/themes/definitions/dropbox";
import { githubTheme } from "@/registry/themes/definitions/github";
import { linearTheme } from "@/registry/themes/definitions/linear";
import { nikeTheme } from "@/registry/themes/definitions/nike";
import { notionTheme } from "@/registry/themes/definitions/notion";
import { raycastTheme } from "@/registry/themes/definitions/raycast";
import { slackTheme } from "@/registry/themes/definitions/slack";
import { stackOverflowTheme } from "@/registry/themes/definitions/stack-overflow";
import { stripeTheme } from "@/registry/themes/definitions/stripe";
import { twitchTheme } from "@/registry/themes/definitions/twitch";
import { vercelTheme } from "@/registry/themes/definitions/vercel";
import type { EmailTheme } from "@/registry/themes/types";

const THEMES_BY_NAME = {
  airbnb: airbnbTheme,
  apple: appleTheme,
  default: defaultTheme,
  dropbox: dropboxTheme,
  github: githubTheme,
  linear: linearTheme,
  nike: nikeTheme,
  notion: notionTheme,
  raycast: raycastTheme,
  slack: slackTheme,
  "stack-overflow": stackOverflowTheme,
  stripe: stripeTheme,
  twitch: twitchTheme,
  vercel: vercelTheme,
} satisfies Record<string, EmailTheme>;

export const THEME_PRIMARY_BY_NAME = {
  airbnb: THEMES_BY_NAME.airbnb.colorPrimary,
  apple: THEMES_BY_NAME.apple.colorPrimary,
  default: THEMES_BY_NAME.default.colorPrimary,
  dropbox: THEMES_BY_NAME.dropbox.colorPrimary,
  github: THEMES_BY_NAME.github.colorPrimary,
  linear: THEMES_BY_NAME.linear.colorPrimary,
  nike: THEMES_BY_NAME.nike.colorPrimary,
  notion: THEMES_BY_NAME.notion.colorPrimary,
  raycast: THEMES_BY_NAME.raycast.colorPrimary,
  slack: THEMES_BY_NAME.slack.colorPrimary,
  "stack-overflow": THEMES_BY_NAME["stack-overflow"].colorPrimary,
  stripe: THEMES_BY_NAME.stripe.colorPrimary,
  twitch: THEMES_BY_NAME.twitch.colorPrimary,
  vercel: THEMES_BY_NAME.vercel.colorPrimary,
} as const;

export type RegistryThemeName = keyof typeof THEME_PRIMARY_BY_NAME;
