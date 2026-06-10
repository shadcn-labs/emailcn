/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container as EmailContainer,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  <Section style={{ padding: "0" }}>
    <Section
      style={{
        padding: mobile === "flush" ? "0" : `0 ${theme.spacingBase ?? "16px"}`,
      }}
    >
      <Row>
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: align,
            }}
          >
            {content}
          </Text>
        </Column>
      </Row>
    </Section>
  </Section>
);

export const Container = ({
  theme = defaultTheme,
  content = "Container content.",
  mobile = "gutters",
  align = "center",
}: ContainerProps) => (
  <Html>
    <Head />
    <Preview>Container</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <EmailContainer style={{ maxWidth: theme.containerWidth }}>
        <ContainerSection
          content={content}
          theme={theme}
          mobile={mobile}
          align={align}
        />
      </EmailContainer>
    </Body>
  </Html>
);

Container.PreviewProps = {
  align: "center",
  content: "Container with padding on mobile for comfortable reading.",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies ContainerProps;
