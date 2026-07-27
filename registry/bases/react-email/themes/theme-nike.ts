import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { nikeTheme as nikeThemeTokens } from "@/components/email/theme-nike-tokens";

export const NikeTailwindConfig = createReactEmailTheme(nikeThemeTokens);

export const nikeTheme = NikeTailwindConfig;
