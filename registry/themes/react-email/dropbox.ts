import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { dropboxTheme as dropboxThemeTokens } from "@/registry/themes/definitions/dropbox";

export const DropboxTailwindConfig = createReactEmailTheme(dropboxThemeTokens);

export const dropboxTheme = DropboxTailwindConfig;
