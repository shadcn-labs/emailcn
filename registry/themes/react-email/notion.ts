import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { notionTheme as notionThemeTokens } from "@/registry/themes/definitions/notion";

export const NotionTailwindConfig = createReactEmailTheme(notionThemeTokens);

export const notionTheme = NotionTailwindConfig;
