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

export type SocialLinksBorderedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface SocialLinksBorderedProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksBorderedVariant;
}
const SocialLinksBorderedSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksBorderedProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksBorderedVariant;
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
            style={{
              border: `1px solid ${theme.colorBorder}`,
              borderRadius: theme.borderRadius,
              color: theme.colorTextMuted,
              padding: "6px 12px",
              textDecoration: "none",
            }}
          >
            {l.platform}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const SocialLinksBordered = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksBorderedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social bordered</MjmlPreview>
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
        <SocialLinksBorderedSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SocialLinksBordered.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksBorderedProps;
