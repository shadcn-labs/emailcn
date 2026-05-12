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

export interface ThreeColumnsGridProps {
  theme?: EmailThemeTokens;
  col1?: string;
  col2?: string;
  col3?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ThreeColumnsGridSection = ({
  col1,
  col2,
  col3,
  theme,
  variant,
}: {
  col1: string;
  col2: string;
  col3: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ThreeColumnsGridProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn width="33.33%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col1}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="33.33%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col2}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="33.33%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col3}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const ThreeColumnsGrid = ({
  theme = defaultTheme,
  col1 = "Col 1",
  col2 = "Col 2",
  col3 = "Col 3",
  variant = "default",
}: ThreeColumnsGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>3-col-grid</MjmlPreview>
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
        <ThreeColumnsGridSection
          col1={col1}
          col2={col2}
          col3={col3}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ThreeColumnsGrid.PreviewProps = {
  col1: "Feature A",
  col2: "Feature B",
  col3: "Feature C",
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsGridProps;
