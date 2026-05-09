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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface SocialLinksProps {
  theme?: TailwindConfig;
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
  <Section className="py-6">
    <Row>
      <Column>
        {links.map((link) => (
          <Link
            key={`${link.href}-${link.platform}`}
            href={link.href}
            className="mr-6 text-sm text-foreground-muted no-underline"
          >
            {platformLabels[link.platform]}
          </Link>
        ))}
      </Column>
    </Row>
  </Section>
);

export const SocialLinks = ({
  theme = defaultTheme,
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
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
  theme: defaultTheme,
} satisfies SocialLinksProps;
