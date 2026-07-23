import { Img } from "react-email";
import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { DividerFrame, SpacingEmailShell } from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithLogoProps {
  logoAlt?: string;
  logoSrc?: string;
  theme?: TailwindConfig;
  variant?: DividerVariant;
}

export const DividerWithLogoSection = ({
  logoAlt = "Logo",
  logoSrc,
  variant = "center",
}: Omit<DividerWithLogoProps, "theme">) => (
  <DividerFrame variant={variant}>
    {logoSrc ? (
      <Img
        alt={logoAlt}
        height={32}
        src={logoSrc}
        width={128}
        style={{
          display: "block",
          height: "32px",
          objectFit: "contain",
          width: "128px",
        }}
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
