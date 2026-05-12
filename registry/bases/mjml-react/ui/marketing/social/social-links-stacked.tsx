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

export type SocialLinksStackedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SocialLinksStackedProps {
  theme?: EmailThemeTokens;
  links?: { platform: string; href: string }[];
  variant?: SocialLinksStackedVariant;
}

const SocialLinksStackedSection = ({
  links,
  theme,
  variant,
}: {
  links: SocialLinksStackedProps["links"];
  theme: EmailThemeTokens;
  variant: SocialLinksStackedVariant;
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
          paddingBottom="8px"
        >
          <a
            href={l.href}
            style={{ color: theme.colorTextMuted, textDecoration: "none" }}
          >
            {l.platform}
          </a>
        </MjmlText>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

export const SocialLinksStacked = ({
  theme = defaultTheme,
  links = [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
  ],
  variant = "default",
}: SocialLinksStackedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>social stacked</MjmlPreview>
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
        <SocialLinksStackedSection
          links={links}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SocialLinksStacked.PreviewProps = {
  links: [
    { href: "https://twitter.com", platform: "Twitter" },
    { href: "https://github.com", platform: "GitHub" },
    { href: "https://linkedin.com", platform: "LinkedIn" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies SocialLinksStackedProps;
