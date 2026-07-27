import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { defaultTheme as defaultThemeTokens } from "@/components/email/theme-default-tokens";

export const DefaultTailwindConfig = createReactEmailTheme(defaultThemeTokens);

export const defaultTheme = DefaultTailwindConfig;
