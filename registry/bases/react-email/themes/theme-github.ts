import { createReactEmailTheme } from "@/components/email/create-react-email-theme";
import { githubTheme as githubThemeTokens } from "@/components/email/theme-github-tokens";

export const GithubTailwindConfig = createReactEmailTheme(githubThemeTokens);

export const githubTheme = GithubTailwindConfig;
