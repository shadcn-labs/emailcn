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

export interface ContainerGuttersMobileProps {
  theme?: EmailThemeTokens;
  content?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ContainerGuttersMobileSection = ({
  content,
  theme,
  variant,
}: {
  content: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ContainerGuttersMobileProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";

  return (
    <MjmlWrapper padding="0">
      <MjmlSection padding={`0 ${theme.spacingBase ?? "16px"}`}>
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
    </MjmlWrapper>
  );
};

export const ContainerGuttersMobile = ({
  theme = defaultTheme,
  content = "Content with gutters/padding on mobile.",
  variant = "default",
}: ContainerGuttersMobileProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>gutters-container</MjmlPreview>
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
      <ContainerGuttersMobileSection
        content={content}
        theme={theme}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

ContainerGuttersMobile.PreviewProps = {
  content: "Container with padding on mobile for comfortable reading.",
  theme: defaultTheme,
  variant: "default",
} satisfies ContainerGuttersMobileProps;
