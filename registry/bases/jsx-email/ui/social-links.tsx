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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface SocialLinksProps {
  links?: {
    platform:
      | "twitter"
      | "github"
      | "linkedin"
      | "youtube"
      | "instagram"
      | "discord";
    href: string;
  }[];
}

const platformLabels: Record<
  "twitter" | "github" | "linkedin" | "youtube" | "instagram" | "discord",
  string
> = {
  discord: "Discord",
  github: "GitHub",
  instagram: "Instagram",
  linkedin: "LinkedIn",
  twitter: "Twitter",
  youtube: "YouTube",
};

export const SocialLinksSection = ({
  links = [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
  ],
}: Pick<SocialLinksProps, "links">) => (
  <Section style={{ paddingBottom: "24px", paddingTop: "24px" }}>
    <Row>
      <Column>
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.platform}`}
            href={link.href}
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeSm,
              marginRight: "24px",
              textDecoration: "none",
            }}
          >
            {platformLabels[link.platform]}
          </Link>
        ))}
      </Column>
    </Row>
  </Section>
);

export const SocialLinks = ({
  links = [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
  ],
}: SocialLinksProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Social links</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <SocialLinksSection links={links} />
      </Body>
    </Tailwind>
  </Html>
);

SocialLinks.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
    { href: "https://linkedin.com", platform: "linkedin" },
  ],
} satisfies SocialLinksProps;
