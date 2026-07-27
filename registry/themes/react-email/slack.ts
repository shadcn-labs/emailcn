import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { slackTheme as slackThemeTokens } from "@/registry/themes/definitions/slack";

export const SlackTailwindConfig = createReactEmailTheme(slackThemeTokens);

export const slackTheme = SlackTailwindConfig;
