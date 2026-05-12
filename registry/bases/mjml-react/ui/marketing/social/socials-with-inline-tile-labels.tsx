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

export type SocialLinksHorizontalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksHorizontalProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string; label: string }[];
  variant?: SocialLinksHorizontalVariant;
}

const SocialLinksHorizontalSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksHorizontalProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksHorizontalVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingBase ?? "24px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        {(links ?? []).map((link, i) => (
          <span key={link.platform}>
            <a
              href={link.href}
              style={{
                color: theme.colorTextMuted,
                margin: "0 8px",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
            {i < (links ?? []).length - 1 ? null : null}
          </span>
        ))}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const SocialsWithInlineTileLabels = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  variant = "default",
}: SocialLinksHorizontalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social horizontal</MjmlPreview>
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
        <SocialLinksHorizontalSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SocialsWithInlineTileLabels.PreviewProps = {
  links: [
    { href: "https://twitter.com", label: "Twitter", platform: "twitter" },
    { href: "https://github.com", label: "GitHub", platform: "github" },
    { href: "https://linkedin.com", label: "LinkedIn", platform: "linkedin" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksHorizontalProps;
