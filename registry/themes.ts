import { airbnbTheme } from "@/registry/themes/airbnb";
import { appleTheme } from "@/registry/themes/apple";
import { defaultTheme } from "@/registry/themes/default";
import { dropboxTheme } from "@/registry/themes/dropbox";
import { githubTheme } from "@/registry/themes/github";
import { linearTheme } from "@/registry/themes/linear";
import { nikeTheme } from "@/registry/themes/nike";
import { notionTheme } from "@/registry/themes/notion";
import { raycastTheme } from "@/registry/themes/raycast";
import { slackTheme } from "@/registry/themes/slack";
import { stackOverflowTheme } from "@/registry/themes/stack-overflow";
import { stripeTheme } from "@/registry/themes/stripe";
import { twitchTheme } from "@/registry/themes/twitch";
import { vercelTheme } from "@/registry/themes/vercel";

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
};

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
