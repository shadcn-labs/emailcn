import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { linearTheme as linearThemeTokens } from "@/registry/themes/definitions/linear";

export const LinearTailwindConfig = createReactEmailTheme(linearThemeTokens);

export const linearTheme = LinearTailwindConfig;
