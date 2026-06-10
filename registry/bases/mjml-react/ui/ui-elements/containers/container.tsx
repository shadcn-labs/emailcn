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

export interface ContainerProps {
  theme?: EmailThemeTokens;
  content?: string;
  mobile?: "gutters" | "flush";
  align?: "left" | "center" | "right";
}

const ContainerSection = ({
  content,
  theme,
  mobile,
  align,
}: {
  content: string;
  theme: EmailThemeTokens;
  mobile: NonNullable<ContainerProps["mobile"]>;
  align: NonNullable<ContainerProps["align"]>;
}) => (
  <MjmlWrapper padding="0">
    <MjmlSection
      padding={mobile === "flush" ? "0" : `0 ${theme.spacingBase ?? "16px"}`}
    >
      <MjmlColumn>
        <MjmlText
          align={align}
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

export const Container = ({
  theme = defaultTheme,
  content = "Container content.",
  mobile = "gutters",
  align = "center",
}: ContainerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Container</MjmlPreview>
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
      <ContainerSection
        content={content}
        theme={theme}
        mobile={mobile}
        align={align}
      />
    </MjmlBody>
  </Mjml>
);

Container.PreviewProps = {
  align: "center",
  content: "Container with padding on mobile for comfortable reading.",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies ContainerProps;
