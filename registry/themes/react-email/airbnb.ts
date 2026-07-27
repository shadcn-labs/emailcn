import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { airbnbTheme as airbnbThemeTokens } from "@/registry/themes/definitions/airbnb";

export const AirbnbTailwindConfig = createReactEmailTheme(airbnbThemeTokens);

export const airbnbTheme = AirbnbTailwindConfig;
