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
  MjmlButton,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ContentGridWithCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface ContentGridWithCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  columns?: { title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: ContentGridWithCtaVariant;
}
const ContentGridWithCtaSection = ({
  columns,
  ctaHref,
  ctaLabel,
  heading,
  theme,
  variant,
}: {
  columns: ContentGridWithCtaProps["columns"];
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  theme: EmailThemeTokens;
  variant: ContentGridWithCtaVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {heading ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeHeading}
          fontWeight={theme.fontWeightBold}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {heading}
        </MjmlText>
      </MjmlColumn>
    ) : null}
    {(columns ?? []).slice(0, 3).map((col, i) => (
      <MjmlColumn
        key={col.title + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {col.title}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        >
          {col.description}
        </MjmlText>
      </MjmlColumn>
    ))}
    {ctaLabel && ctaHref ? (
      <MjmlColumn>
        <MjmlButton
          align="center"
          backgroundColor={theme.colorPrimary}
          borderRadius={theme.borderRadius}
          color={theme.colorPrimaryForeground}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightMedium}
          href={ctaHref}
          innerPadding={`${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`}
        >
          {ctaLabel}
        </MjmlButton>
      </MjmlColumn>
    ) : null}
  </MjmlSection>
);
export const TitleWithRegularPadding = ({
  theme = defaultTheme,
  heading = "Features",
  columns = [
    { description: "Description 1", title: "Feature 1" },
    { description: "Description 2", title: "Feature 2" },
    { description: "Description 3", title: "Feature 3" },
  ],
  ctaLabel = "Learn More",
  ctaHref = "#",
  variant = "default",
}: ContentGridWithCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content with cta</MjmlPreview>
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
        <ContentGridWithCtaSection
          columns={columns}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TitleWithRegularPadding.PreviewProps = {
  columns: [
    { description: "Build responsive emails quickly.", title: "Fast" },
    { description: "Works across all email clients.", title: "Reliable" },
    { description: "Enterprise-grade security.", title: "Secure" },
  ],
  ctaHref: "https://example.com",
  ctaLabel: "Learn More",
  heading: "Features",
  theme: defaultTheme,
  variant: "default",
} satisfies ContentGridWithCtaProps;
