import { MjmlSection, MjmlText } from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
}: SocialLinksProps) => {
  const t = resolveEmailTheme(theme);

  return (
    <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
      <MjmlText>
        {links.map((link) => (
          <span key={`${link.href}-${link.platform}`}>
            <a
              href={link.href}
              style={{
                color: t.colors["foreground-muted"],
                fontFamily: t.fontFamily.sans,
                fontSize: t.fontSize.sm ?? "12px",
                marginRight: 24,
                textDecoration: "none",
              }}
            >
              {platformLabels[link.platform]}
            </a>
          </span>
        ))}
      </MjmlText>
    </MjmlSection>
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
