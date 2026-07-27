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

export const THEME_PRIMARY_BY_NAME = {
  airbnb: airbnbTheme.colorPrimary,
  apple: appleTheme.colorPrimary,
  default: defaultTheme.colorPrimary,
  dropbox: dropboxTheme.colorPrimary,
  github: githubTheme.colorPrimary,
  linear: linearTheme.colorPrimary,
  nike: nikeTheme.colorPrimary,
  notion: notionTheme.colorPrimary,
  raycast: raycastTheme.colorPrimary,
  slack: slackTheme.colorPrimary,
  "stack-overflow": stackOverflowTheme.colorPrimary,
  stripe: stripeTheme.colorPrimary,
  twitch: twitchTheme.colorPrimary,
  vercel: vercelTheme.colorPrimary,
} as const;

export type RegistryThemeName = keyof typeof THEME_PRIMARY_BY_NAME;
