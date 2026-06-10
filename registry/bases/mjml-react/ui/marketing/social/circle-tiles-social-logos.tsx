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

export type SocialLinksAccentVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface SocialLinksAccentProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksAccentVariant;
}
const SocialLinksAccentSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksAccentProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksAccentVariant;
}) => (
  <MjmlSection backgroundColor={theme.colorBackground} padding="24px 0">
    <MjmlColumn>
      {(links ?? []).map((l) => (
        <MjmlText
          key={l.platform}
          align="center"
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize="12px"
          padding="0 12px"
        >
          <a
            href={l.href}
            style={{ color: theme.colorPrimary, textDecoration: "none" }}
          >
            {l.platform}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const CircleTilesSocialLogos = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksAccentProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social accent</MjmlPreview>
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
        <SocialLinksAccentSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
CircleTilesSocialLogos.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksAccentProps;
