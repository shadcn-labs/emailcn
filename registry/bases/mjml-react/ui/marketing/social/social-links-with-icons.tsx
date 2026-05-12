/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
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

export type SocialLinksWithIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksWithIconsProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksWithIconsVariant;
}

const SocialLinksWithIconsSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksWithIconsProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksWithIconsVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="24px 0">
    <MjmlColumn>
      {(links ?? []).map((l) => (
        <MjmlText
          key={l.platform}
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize="12px"
          padding="0 12px"
        >
          <a
            href={l.href}
            style={{ color: theme.colorTextMuted, textDecoration: "none" }}
          >
            {l.label}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

export const SocialLinksWithIcons = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
  ],
  variant = "default",
}: SocialLinksWithIconsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social with icons</MjmlPreview>
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
        <SocialLinksWithIconsSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SocialLinksWithIcons.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksWithIconsProps;
