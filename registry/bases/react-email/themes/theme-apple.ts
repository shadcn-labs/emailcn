import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { appleTheme as appleThemeTokens } from "@/components/email/theme-apple-tokens";

export const AppleTailwindConfig = createReactEmailTheme(appleThemeTokens);

export const appleTheme = AppleTailwindConfig;
