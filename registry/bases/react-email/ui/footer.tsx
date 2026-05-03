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
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface FooterProps {
  theme?: EmailTheme;
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
  <Section className="border-t border-border pt-12 pb-6">
    <Text className="mb-2 text-sm leading-snug text-foreground-muted">
      © {new Date().getFullYear()} {companyName}. All rights reserved.
    </Text>
    {address ? (
      <Text className="mb-2 text-sm leading-snug text-foreground-muted">
        {address}
      </Text>
    ) : null}
    <Row>
      {links.map((link) => (
        <Column key={`${link.href}-${link.label}`}>
          <Link
            href={link.href}
            className="mr-6 text-sm text-foreground-muted no-underline"
          >
            {link.label}
          </Link>
        </Column>
      ))}
    </Row>
    <Text className="mt-6 text-sm">
      <Link href={unsubscribeHref} className="text-foreground-muted underline">
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

export const Footer = ({
  theme = defaultTheme,
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
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
  theme: defaultTheme,
  unsubscribeHref: "#unsubscribe",
} satisfies FooterProps;
