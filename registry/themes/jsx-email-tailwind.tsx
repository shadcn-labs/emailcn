import { Tailwind } from "jsx-email";
import type { ReactNode } from "react";

import { createJsxEmailTheme } from "@/components/email/create-jsx-email-theme";
import type { EmailThemeTokens } from "@/components/email/email-theme-types";

interface EmailTailwindProps {
  children: ReactNode;
  theme: EmailThemeTokens;
}

export const EmailTailwind = ({ children, theme }: EmailTailwindProps) => (
  <Tailwind config={createJsxEmailTheme(theme)}>{children}</Tailwind>
);
