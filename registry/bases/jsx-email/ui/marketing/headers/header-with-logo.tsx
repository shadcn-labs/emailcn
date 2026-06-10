/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderLogoWithLinksVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HeaderLogoWithLinksProps {
  theme?: EmailThemeTokens;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
  variant?: HeaderLogoWithLinksVariant;
}

const HeaderLogoWithLinksSection = ({
  links,
  logoAlt,
  logoUrl,
  logoWidth,
  theme,
  variant,
}: {
  links: HeaderLogoWithLinksProps["links"];
  logoAlt: string;
  logoUrl?: string;
  logoWidth: number;
  theme: EmailThemeTokens;
  variant: HeaderLogoWithLinksVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingBase ?? "24px"} 0`,
    }}
  >
    <Row>
      <Column style={{ verticalAlign: "middle", width: "50%" }}>
        {logoUrl ? (
          <Img
            alt={logoAlt}
            src={logoUrl}
            width={logoWidth}
            style={{ display: "block", maxWidth: "100%" }}
          />
        ) : (
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeXl ?? "20px",
              fontWeight: theme.fontWeightBold,
              margin: 0,
              textAlign: "left",
            }}
          >
            {logoAlt}
          </Text>
        )}
      </Column>
      {links && links.length > 0 ? (
        <Column style={{ verticalAlign: "middle", width: "50%" }}>
          {links.map((link) => (
            <Text
              key={link.label}
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                margin: 0,
                padding: "0 0 0 16px",
                textAlign: "right",
              }}
            >
              <a
                href={link.href}
                style={{ color: theme.colorTextMuted, textDecoration: "none" }}
              >
                {link.label}
              </a>
            </Text>
          ))}
        </Column>
      ) : null}
    </Row>
  </Section>
);

export const HeaderLogoWithLinks = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  variant = "default",
}: HeaderLogoWithLinksProps) => (
  <Html>
    <Head />
    <Preview>header with links</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <HeaderLogoWithLinksSection
            links={links}
            logoAlt={logoAlt}
            logoUrl={logoUrl}
            logoWidth={logoWidth}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

HeaderLogoWithLinks.PreviewProps = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  logoAlt: "Acme",
  logoUrl: "https://static.photos/business/120x40/2",
  logoWidth: 120,
  theme: defaultTheme,
  variant: "default",
} satisfies HeaderLogoWithLinksProps;
