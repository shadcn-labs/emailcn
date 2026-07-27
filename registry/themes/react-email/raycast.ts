import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { raycastTheme as raycastThemeTokens } from "@/registry/themes/definitions/raycast";

export const RaycastTailwindConfig = createReactEmailTheme(raycastThemeTokens);

export const raycastTheme = RaycastTailwindConfig;
