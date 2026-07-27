import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { dropboxTheme as dropboxThemeTokens } from "@/components/email/theme-dropbox-tokens";

export const DropboxTailwindConfig = createReactEmailTheme(dropboxThemeTokens);

export const dropboxTheme = DropboxTailwindConfig;
