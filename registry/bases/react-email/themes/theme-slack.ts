import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { slackTheme as slackThemeTokens } from "@/components/email/theme-slack-tokens";

export const SlackTailwindConfig = createReactEmailTheme(slackThemeTokens);

export const slackTheme = SlackTailwindConfig;
