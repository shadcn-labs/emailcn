import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { twitchTheme as twitchThemeTokens } from "@/registry/themes/definitions/twitch";

export const TwitchTailwindConfig = createReactEmailTheme(twitchThemeTokens);

export const twitchTheme = TwitchTailwindConfig;
