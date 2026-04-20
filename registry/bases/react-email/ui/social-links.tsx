import { Column, Link, Row, Section, Tailwind } from "react-email";

import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

export interface SocialLinksProps {
  theme?: EmailTheme;
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

export const SocialLinks = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
  ],
}: SocialLinksProps) => (
  <Tailwind config={theme}>
    <Section className="py-6">
      <Row>
        <Column>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="mr-6 text-sm text-foreground-muted no-underline"
            >
              {platformLabels[link.platform]}
            </Link>
          ))}
        </Column>
      </Row>
    </Section>
  </Tailwind>
);

SocialLinks.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
    { href: "https://linkedin.com", platform: "linkedin" },
  ],
  theme: defaultTheme,
} satisfies SocialLinksProps;
