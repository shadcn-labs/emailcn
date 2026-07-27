import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { twitchTheme as twitchThemeTokens } from "@/components/email/theme-twitch-tokens";

export const TwitchTailwindConfig = createReactEmailTheme(twitchThemeTokens);

export const twitchTheme = TwitchTailwindConfig;
