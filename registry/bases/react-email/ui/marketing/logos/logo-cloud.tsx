/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type LogoCloudVariant = "default" | "slanted-left" | "slanted-right";

export type LogoCloudTone = "boxed" | "outlined";

export interface LogoCloudProps {
  theme?: TailwindConfig;
  heading?: string;
  logoSrc1?: string;
  logoAlt1?: string;
  logoSrc2?: string;
  logoAlt2?: string;
  logoSrc3?: string;
  logoAlt3?: string;
  logoSrc4?: string;
  logoAlt4?: string;
  variant?: LogoCloudVariant;
  tone?: LogoCloudTone;
}

const TONE_CLASSES = {
  boxed: "rounded-lg bg-background-muted px-6 py-4",
  outlined: "rounded-lg border border-border px-6 py-4",
} as const;

export const LogoCloudSection = ({
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/2",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/3",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/4",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/5",
  logoAlt4 = "Logo 4",
  variant = "default",
  tone = "boxed",
}: Omit<LogoCloudProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const toneClass = TONE_CLASSES[tone];
  const logos = [
    { alt: logoAlt1, src: logoSrc1 },
    { alt: logoAlt2, src: logoSrc2 },
    { alt: logoAlt3, src: logoSrc3 },
    { alt: logoAlt4, src: logoSrc4 },
  ];

  return (
    <Section className={`bg-background py-12 ${getVariantClass()}`}>
      <Section
        className={`max-w-container mx-auto text-center ${getUnskewClass()}`}
      >
        {heading ? (
          <Text className="m-0 mb-8 text-sm uppercase tracking-wider text-foreground-muted">
            {heading}
          </Text>
        ) : null}
        <Row>
          {logos.map((logo) => (
            <Column key={logo.alt} className="w-1/4 px-2 align-middle">
              <Section className={toneClass}>
                <Img
                  src={logo.src}
                  alt={logo.alt}
                  width="120"
                  height="40"
                  className="mx-auto h-auto object-contain"
                />
              </Section>
            </Column>
          ))}
        </Row>
      </Section>
    </Section>
  );
};

export const LogoCloud = ({
  theme = defaultTheme,
  heading = "Trusted by",
  logoSrc1 = "https://static.photos/business/120x40/6",
  logoAlt1 = "Logo 1",
  logoSrc2 = "https://static.photos/business/120x40/7",
  logoAlt2 = "Logo 2",
  logoSrc3 = "https://static.photos/business/120x40/8",
  logoAlt3 = "Logo 3",
  logoSrc4 = "https://static.photos/business/120x40/9",
  logoAlt4 = "Logo 4",
  variant = "default",
  tone = "boxed",
}: LogoCloudProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <LogoCloudSection
          heading={heading}
          logoAlt1={logoAlt1}
          logoAlt2={logoAlt2}
          logoAlt3={logoAlt3}
          logoAlt4={logoAlt4}
          logoSrc1={logoSrc1}
          logoSrc2={logoSrc2}
          logoSrc3={logoSrc3}
          logoSrc4={logoSrc4}
          tone={tone}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

LogoCloud.PreviewProps = {
  heading: "Trusted by",
  logoAlt1: "Company 1",
  logoAlt2: "Company 2",
  logoAlt3: "Company 3",
  logoAlt4: "Company 4",
  logoSrc1: "https://static.photos/business/120x40/10",
  logoSrc2: "https://static.photos/business/120x40/11",
  logoSrc3: "https://static.photos/business/120x40/12",
  logoSrc4: "https://static.photos/business/120x40/13",
  theme: defaultTheme,
  tone: "boxed",
  variant: "default",
} satisfies LogoCloudProps;
