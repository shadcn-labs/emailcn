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

export interface ContainerFlushMobileProps {
  theme?: EmailThemeTokens;
  content?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const ContainerFlushMobileSection = ({
  content,
  theme,
  variant,
}: {
  content: string;
  theme: EmailThemeTokens;
  variant: NonNullable<ContainerFlushMobileProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";

  return (
    <MjmlWrapper padding="0">
      <MjmlSection padding="0">
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

export const ContainerFlushMobile = ({
  theme = defaultTheme,
  content = "Edge-to-edge content on mobile.",
  variant = "default",
}: ContainerFlushMobileProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>flush-container</MjmlPreview>
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
      <ContainerFlushMobileSection
        content={content}
        theme={theme}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

ContainerFlushMobile.PreviewProps = {
  content: "Flush container spans edge to edge on mobile devices.",
  theme: defaultTheme,
  variant: "default",
} satisfies ContainerFlushMobileProps;
