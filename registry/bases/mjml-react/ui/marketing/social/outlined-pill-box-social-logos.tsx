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

export type SocialLinksCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksCenteredProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksCenteredVariant;
}

const SocialLinksCenteredSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksCenteredProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksCenteredVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        {(links ?? []).map((link) => (
          <a
            key={link.platform}
            href={link.href}
            style={{
              color: theme.colorTextMuted,
              margin: "0 12px",
              textDecoration: "none",
            }}
          >
            {link.label}
          </a>
        ))}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const OutlinedPillBoxSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://youtube.com", label: "YouTube", platform: "youtube" },
    {
      href: "https://instagram.com",
      label: "Instagram",
      platform: "instagram",
    },
  ],
  variant = "default",
}: SocialLinksCenteredProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social centered</MjmlPreview>
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
        <SocialLinksCenteredSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OutlinedPillBoxSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://youtube.com", label: "YouTube", platform: "youtube" },
    {
      href: "https://instagram.com",
      label: "Instagram",
      platform: "instagram",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksCenteredProps;
