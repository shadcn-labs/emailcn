import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { appleTheme as appleThemeTokens } from "@/registry/themes/definitions/apple";

export const AppleTailwindConfig = createReactEmailTheme(appleThemeTokens);

export const appleTheme = AppleTailwindConfig;
