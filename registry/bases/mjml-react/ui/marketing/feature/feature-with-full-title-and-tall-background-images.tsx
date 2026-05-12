/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FeatureIconRowVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureIconRowProps {
  theme?: EmailThemeTokens;
  iconUrl?: string;
  iconAlt?: string;
  heading?: string;
  body?: string;
  features?: { iconUrl?: string; heading: string; body: string }[];
  variant?: FeatureIconRowVariant;
}

const FeatureIconRowSection = ({
  features,
  theme,
  variant,
}: {
  features: FeatureIconRowProps["features"];
  theme: EmailThemeTokens;
  variant: FeatureIconRowVariant;
}) => {
  const items = features ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 3).map((f, i) => (
        <MjmlColumn
          key={f.heading + i}
          width={`${100 / Math.min(items.length, 3)}%`}
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          {f.iconUrl ? (
            <MjmlImage
              align="center"
              alt={f.heading}
              src={f.iconUrl}
              width={48}
              paddingBottom={theme.spacingBase ?? "24px"}
            />
          ) : null}
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {f.heading}
          </MjmlText>
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {f.body}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const FeatureWithFullTitleAndTallBackgroundImages = ({
  theme = defaultTheme,
  features = [
    { body: "Lightning fast performance.", heading: "Fast" },
    { body: "99.9% uptime guaranteed.", heading: "Reliable" },
    { body: "Enterprise-grade security.", heading: "Secure" },
  ],
  variant = "default",
}: FeatureIconRowProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature icon row</MjmlPreview>
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
        <FeatureIconRowSection
          features={features}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  features: [
    { body: "Lightning fast email rendering.", heading: "Fast" },
    { body: "Works across all major email clients.", heading: "Reliable" },
    { body: "Your data is always protected.", heading: "Secure" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureIconRowProps;
