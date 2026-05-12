/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithLogoProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithLogoSection = ({
  logoSrc,
  logoAlt = "Logo",
  variant = "default",
}: Omit<DividerWithLogoProps, "theme">) => {
  const alignClass =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-6">
      <div className="flex items-center">
        <Hr className="flex-1 border-border" />
        <div className={`mx-4 ${alignClass}`}>
          {logoSrc ? (
            <Img src={logoSrc} alt={logoAlt} className="h-8 w-auto" />
          ) : null}
        </div>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithLogo = ({
  theme = defaultTheme,
  logoSrc,
  logoAlt = "Logo",
  variant = "default",
}: DividerWithLogoProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>—</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithLogoSection
          logoSrc={logoSrc}
          logoAlt={logoAlt}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithLogo.PreviewProps = {
  logoAlt: "Brand Logo",
  logoSrc: "https://example.com/logo.png",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithLogoProps;
