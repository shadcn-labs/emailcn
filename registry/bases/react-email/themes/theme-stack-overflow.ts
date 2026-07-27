import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { stackOverflowTheme as stackOverflowThemeTokens } from "@/components/email/theme-stack-overflow-tokens";

export const StackOverflowTailwindConfig = createReactEmailTheme(
  stackOverflowThemeTokens
);

export const stackOverflowTheme = StackOverflowTailwindConfig;
