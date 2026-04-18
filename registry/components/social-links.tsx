import { Column, Link, Row, Section } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface SocialLinksProps {
  theme?: EmailTheme;
  links?: {
    platform: "twitter" | "github" | "linkedin" | "youtube" | "instagram" | "discord";
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
}: SocialLinksProps) => {
  const style = {
    link: {
      color: theme.colorTextMuted,
      fontFamily: theme.fontFamily,
      fontSize: theme.fontSizeSm,
      marginRight: theme.spacingBase,
      textDecoration: "none",
    } as const,
    section: {
      padding: `${theme.spacingBase} 0`,
    },
  };

  return (
    <Section style={style.section}>
      <Row>
        <Column>
          {links.map((link, index) => (
            <Link key={index} href={link.href} style={style.link}>
              {platformLabels[link.platform]}
            </Link>
          ))}
        </Column>
      </Row>
    </Section>
  );
};

SocialLinks.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
    { href: "https://linkedin.com", platform: "linkedin" },
  ],
  theme: defaultTheme,
} satisfies SocialLinksProps;

export default SocialLinks;
