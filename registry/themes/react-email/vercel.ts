import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { vercelTheme as vercelThemeTokens } from "@/registry/themes/definitions/vercel";

export const VercelTailwindConfig = createReactEmailTheme(vercelThemeTokens);

export const vercelTheme = VercelTailwindConfig;
