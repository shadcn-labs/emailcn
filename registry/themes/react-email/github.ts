import { createReactEmailTheme } from "@/registry/themes/create-react-email-theme";
import { githubTheme as githubThemeTokens } from "@/registry/themes/definitions/github";

export const GithubTailwindConfig = createReactEmailTheme(githubThemeTokens);

export const githubTheme = GithubTailwindConfig;
