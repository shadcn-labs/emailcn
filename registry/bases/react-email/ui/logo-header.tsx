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
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface LogoHeaderProps {
  theme?: EmailTheme;
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
  <Section className="py-6">
    <Row>
      <Column align="left">
        {logoUrl ? (
          <Img
            src={logoUrl}
            alt={logoAlt}
            width={logoWidth}
            className="block h-auto"
            style={{ maxWidth: logoWidth }}
          />
        ) : (
          <Text className="font-sans text-base font-bold text-foreground">
            {logoAlt}
          </Text>
        )}
      </Column>
      {links.length > 0 ? (
        <Column align="right">
          {links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="ml-4 text-sm text-foreground-muted no-underline"
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
  theme = defaultTheme,
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
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
  theme: defaultTheme,
} satisfies LogoHeaderProps;
