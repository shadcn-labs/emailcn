import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { nikeTheme as nikeThemeTokens } from "@/registry/themes/definitions/nike";

export const NikeTailwindConfig = createReactEmailTheme(nikeThemeTokens);

export const nikeTheme = NikeTailwindConfig;
