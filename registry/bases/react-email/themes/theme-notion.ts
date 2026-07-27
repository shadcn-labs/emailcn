import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { notionTheme as notionThemeTokens } from "@/components/email/theme-notion-tokens";

export const NotionTailwindConfig = createReactEmailTheme(notionThemeTokens);

export const notionTheme = NotionTailwindConfig;
