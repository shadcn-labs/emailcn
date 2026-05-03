import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

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

const SocialLinksSection = ({
  links,
  t,
}: {
  links: NonNullable<SocialLinksProps["links"]>;
  t: ResolvedEmailTheme;
}) => (
  <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
    <MjmlColumn>
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
    </MjmlColumn>
  </MjmlSection>
);

export const SocialLinks = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
  ],
}: SocialLinksProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

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
          <SocialLinksSection links={links} t={t} />
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
