import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { defaultTheme as defaultThemeTokens } from "@/registry/themes/definitions/default";

export const DefaultTailwindConfig = createReactEmailTheme(defaultThemeTokens);

export const defaultTheme = DefaultTailwindConfig;
