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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface SocialLinksProps {
  theme?: EmailThemeTokens;
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
  theme,
}: {
  links: NonNullable<SocialLinksProps["links"]>;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn>
      <MjmlText>
        {links.map((link) => (
          <span key={`${link.href}-${link.platform}`}>
            <a
              href={link.href}
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
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
}: SocialLinksProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social-links</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <SocialLinksSection links={links} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SocialLinks.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "twitter" },
    { href: "https://github.com", platform: "github" },
    { href: "https://linkedin.com", platform: "linkedin" },
  ],
  theme: defaultTheme,
} satisfies SocialLinksProps;
