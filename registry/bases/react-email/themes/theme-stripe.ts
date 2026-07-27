import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { stripeTheme as stripeThemeTokens } from "@/components/email/theme-stripe-tokens";

export const StripeTailwindConfig = createReactEmailTheme(stripeThemeTokens);

export const stripeTheme = StripeTailwindConfig;
