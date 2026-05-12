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

export interface FourColumnsGridProps {
  theme?: EmailThemeTokens;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const FourColumnsGridSection = ({
  col1,
  col2,
  col3,
  col4,
  theme,
  variant,
}: {
  col1: string;
  col2: string;
  col3: string;
  col4: string;
  theme: EmailThemeTokens;
  variant: NonNullable<FourColumnsGridProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      <MjmlColumn width="25%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col1}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="25%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col2}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="25%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col3}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="25%" padding={theme.spacingBase ?? "16px"}>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {col4}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FourColumnsGrid = ({
  theme = defaultTheme,
  col1 = "A",
  col2 = "B",
  col3 = "C",
  col4 = "D",
  variant = "default",
}: FourColumnsGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>4-col-grid</MjmlPreview>
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
        <FourColumnsGridSection
          col1={col1}
          col2={col2}
          col3={col3}
          col4={col4}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FourColumnsGrid.PreviewProps = {
  col1: "Product",
  col2: "Price",
  col3: "Qty",
  col4: "Total",
  theme: defaultTheme,
  variant: "default",
} satisfies FourColumnsGridProps;
