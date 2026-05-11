import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface LogoHeaderProps {
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
}

export const LogoHeaderSection = ({
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: Omit<LogoHeaderProps, "theme">) => (
  <Section style={{ paddingBottom: "24px", paddingTop: "24px" }}>
    <Row>
      <Column style={{ textAlign: "left" }}>
        {logoUrl ? (
          <Img
            src={logoUrl}
            alt={logoAlt}
            width={logoWidth}
            style={{ display: "block", height: "auto", maxWidth: logoWidth }}
          />
        ) : (
          <Text
            style={{
              color: defaultTheme.colorText,
              fontFamily: defaultTheme.fontFamily,
              fontSize: defaultTheme.fontSizeBase,
              fontWeight: defaultTheme.fontWeightBold,
            }}
          >
            {logoAlt}
          </Text>
        )}
      </Column>
      {links.length > 0 ? (
        <Column style={{ textAlign: "right" }}>
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginLeft: "16px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
        </Column>
      ) : null}
    </Row>
  </Section>
);

export const LogoHeader = ({
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: LogoHeaderProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{logoAlt}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <LogoHeaderSection
          links={links}
          logoAlt={logoAlt}
          logoUrl={logoUrl}
          logoWidth={logoWidth}
        />
      </Body>
    </Tailwind>
  </Html>
);

LogoHeader.PreviewProps = {
  links: [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
  ],
  logoAlt: "Acme",
  logoUrl: "https://example.com/logo.png",
  logoWidth: 120,
} satisfies LogoHeaderProps;
