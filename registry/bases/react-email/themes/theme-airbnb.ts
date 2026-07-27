import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { airbnbTheme as airbnbThemeTokens } from "@/components/email/theme-airbnb-tokens";

export const AirbnbTailwindConfig = createReactEmailTheme(airbnbThemeTokens);

export const airbnbTheme = AirbnbTailwindConfig;
