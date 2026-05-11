import {
  Body,
  Column,
  Head,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface FooterProps {
  companyName?: string;
  address?: string;
  links?: { label: string; href: string }[];
  unsubscribeHref?: string;
}

export const FooterSection = ({
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: Omit<FooterProps, "theme">) => (
  <Section
    style={{
      borderTop: `1px solid ${defaultTheme.colorBorder}`,
      paddingBottom: "24px",
      paddingTop: "48px",
    }}
  >
    <Text
      style={{
        color: defaultTheme.colorTextMuted,
        fontSize: defaultTheme.fontSizeSm,
        lineHeight: 1.5,
        marginBottom: "8px",
      }}
    >
      © {new Date().getFullYear()} {companyName}. All rights reserved.
    </Text>
    {address ? (
      <Text
        style={{
          color: defaultTheme.colorTextMuted,
          fontSize: defaultTheme.fontSizeSm,
          lineHeight: 1.5,
          marginBottom: "8px",
        }}
      >
        {address}
      </Text>
    ) : null}
    <Row>
      {links.map((link) => (
        <Column key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeSm,
              marginRight: "24px",
              textDecoration: "none",
            }}
          >
            {link.label}
          </Link>
        </Column>
      ))}
    </Row>
    <Text style={{ fontSize: defaultTheme.fontSizeSm, marginTop: "24px" }}>
      <Link
        href={unsubscribeHref}
        style={{
          color: defaultTheme.colorTextMuted,
          textDecoration: "underline",
        }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

export const Footer = ({
  companyName = "Acme",
  address = "123 Main St, San Francisco, CA",
  links = [
    { href: "#", label: "Privacy" },
    { href: "#", label: "Terms" },
  ],
  unsubscribeHref = "#",
}: FooterProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Footer · {companyName}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <FooterSection
          address={address}
          companyName={companyName}
          links={links}
          unsubscribeHref={unsubscribeHref}
        />
      </Body>
    </Tailwind>
  </Html>
);

Footer.PreviewProps = {
  address: "123 Main Street, San Francisco, CA 94105",
  companyName: "Acme Inc.",
  links: [
    { href: "#privacy", label: "Privacy Policy" },
    { href: "#terms", label: "Terms of Service" },
  ],
  unsubscribeHref: "#unsubscribe",
} satisfies FooterProps;
