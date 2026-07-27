import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { vercelTheme as vercelThemeTokens } from "@/components/email/theme-vercel-tokens";

export const VercelTailwindConfig = createReactEmailTheme(vercelThemeTokens);

export const vercelTheme = VercelTailwindConfig;
