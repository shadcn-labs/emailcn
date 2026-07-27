import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { linearTheme as linearThemeTokens } from "@/components/email/theme-linear-tokens";

export const LinearTailwindConfig = createReactEmailTheme(linearThemeTokens);

export const linearTheme = LinearTailwindConfig;
