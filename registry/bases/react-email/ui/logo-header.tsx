import { Column, Img, Link, Row, Section, Tailwind, Text } from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface LogoHeaderProps {
  theme?: EmailTheme;
  logoUrl?: string;
  logoAlt?: string;
  logoWidth?: number;
  links?: { label: string; href: string }[];
}

export const LogoHeader = ({
  theme = defaultTheme,
  logoUrl,
  logoAlt = "Logo",
  logoWidth = 120,
  links = [],
}: LogoHeaderProps) => (
  <Tailwind config={theme}>
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
            {links.map((link, index) => (
              <Link
                key={index}
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
  </Tailwind>
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

export default LogoHeader;
