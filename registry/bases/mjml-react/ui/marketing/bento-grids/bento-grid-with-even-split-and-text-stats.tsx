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

export type BentoGridCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridCenteredProps {
  theme?: EmailThemeTokens;
  heading?: string;
  columns?: { icon?: string; title: string; description: string }[];
  variant?: BentoGridCenteredVariant;
}
const BentoGridCenteredSection = ({
  columns,
  heading,
  theme,
  variant,
}: {
  columns: BentoGridCenteredProps["columns"];
  heading: string;
  theme: EmailThemeTokens;
  variant: BentoGridCenteredVariant;
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
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize="32px"
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {col.icon ?? "✦"}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {col.title}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        >
          {col.description}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BentoGridWithEvenSplitAndTextStats = ({
  theme = defaultTheme,
  heading = "How It Works",
  columns = [
    { description: "Sign up for an account.", title: "Step 1" },
    { description: "Configure your settings.", title: "Step 2" },
    { description: "Start building emails.", title: "Step 3" },
  ],
  variant = "default",
}: BentoGridCenteredProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento centered</MjmlPreview>
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
        <BentoGridCenteredSection
          columns={columns}
          heading={heading}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BentoGridWithEvenSplitAndTextStats.PreviewProps = {
  columns: [
    { description: "Create your free account in seconds.", title: "Sign Up" },
    {
      description: "Customize your workspace and preferences.",
      title: "Configure",
    },
    { description: "Create beautiful emails with our tools.", title: "Build" },
  ],
  heading: "How It Works",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridCenteredProps;
