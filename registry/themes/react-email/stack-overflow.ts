import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { stackOverflowTheme as stackOverflowThemeTokens } from "@/registry/themes/definitions/stack-overflow";

export const StackOverflowTailwindConfig = createReactEmailTheme(
  stackOverflowThemeTokens
);

export const stackOverflowTheme = StackOverflowTailwindConfig;
