import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
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
}: SocialLinksProps) => {
  const t = resolveEmailTheme(theme);

  const container =
    typeof t.maxWidth.container === "string"
      ? Number.parseInt(String(t.maxWidth.container).replaceAll(/\D/g, ""), 10)
      : 600;
  const width = Number.isFinite(container) && container > 0 ? container : 600;

  const fg = t.colors.foreground ?? "#111827";
  const bg = t.colors.background ?? "#ffffff";
  const sans = t.fontFamily.sans ?? "sans-serif";
  const baseFs = t.fontSize.base ?? "14px";
  const lh = t.lineHeight.snug ?? "1.375";

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>social-links</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
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
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
