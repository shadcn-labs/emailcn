import { MjmlImage } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import { DividerFrame, SpacingEmailShell } from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithLogoProps {
  logoAlt?: string;
  logoSrc?: string;
  theme?: EmailThemeTokens;
  variant?: DividerVariant;
}

export const DividerWithLogoSection = ({
  logoAlt = "Logo",
  logoSrc,
  variant = "center",
}: Omit<DividerWithLogoProps, "theme">) => (
  <DividerFrame variant={variant}>
    {logoSrc ? (
      <MjmlImage
        align="center"
        alt={logoAlt}
        height={32}
        padding="0"
        src={logoSrc}
        width={128}
      />
    ) : null}
  </DividerFrame>
);

export const DividerWithLogo = ({
  logoAlt = "Logo",
  logoSrc,
  theme = defaultTheme,
  variant = "center",
}: DividerWithLogoProps) => (
  <SpacingEmailShell preview="Divider with logo" theme={theme}>
    <DividerWithLogoSection
      logoAlt={logoAlt}
      logoSrc={logoSrc}
      variant={variant}
    />
  </SpacingEmailShell>
);

DividerWithLogo.PreviewProps = {
  logoAlt: "emailcn",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/emailcn-logo.png",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithLogoProps;
