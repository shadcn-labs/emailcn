import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { stripeTheme as stripeThemeTokens } from "@/registry/themes/definitions/stripe";

export const StripeTailwindConfig = createReactEmailTheme(stripeThemeTokens);

export const stripeTheme = StripeTailwindConfig;
