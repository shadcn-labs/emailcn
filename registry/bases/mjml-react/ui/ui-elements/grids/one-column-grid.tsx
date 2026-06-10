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

export interface OneColumnGridProps {
  theme?: EmailThemeTokens;
  content?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const OneColumnGridSection = ({
  content,
  theme,
  variant,
}: {
  content: string;
  theme: EmailThemeTokens;
  variant: NonNullable<OneColumnGridProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {content}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const OneColumnGrid = ({
  theme = defaultTheme,
  content = "Full width content",
  variant = "default",
}: OneColumnGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>1-col-grid</MjmlPreview>
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
        <OneColumnGridSection
          content={content}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

OneColumnGrid.PreviewProps = {
  content: "Single column full-width layout.",
  theme: defaultTheme,
  variant: "default",
} satisfies OneColumnGridProps;
