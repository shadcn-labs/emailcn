import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { raycastTheme as raycastThemeTokens } from "@/components/email/theme-raycast-tokens";

export const RaycastTailwindConfig = createReactEmailTheme(raycastThemeTokens);

export const raycastTheme = RaycastTailwindConfig;
