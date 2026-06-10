/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface DividerWithFileTypeProps {
  theme?: EmailThemeTokens;
  fileType?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const DividerWithFileTypeSection = ({
  fileType,
  theme,
  variant,
}: {
  fileType: string;
  theme: EmailThemeTokens;
  variant: NonNullable<DividerWithFileTypeProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}>
      <Row>
        <Column>
          <Hr
            style={{
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopColor: theme.colorBorder,
              borderTopStyle: "solid",
              marginBottom: theme.spacingBase ?? "16px",
              width: "100%",
            }}
          />
          <Section
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              borderRadius: theme.borderRadius,
              padding: "4px 12px",
            }}
          >
            <Row>
              <Column>
                <Text
                  style={{
                    color: theme.colorTextMuted,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeSm ?? "12px",
                    fontWeight: theme.fontWeightMedium ?? "500",
                    margin: 0,
                    textAlign: alignText,
                  }}
                >
                  {fileType}
                </Text>
              </Column>
            </Row>
          </Section>
          <Hr
            style={{
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopColor: theme.colorBorder,
              borderTopStyle: "solid",
              marginTop: theme.spacingBase ?? "16px",
              width: "100%",
            }}
          />
        </Column>
      </Row>
    </Section>
  );
};

export const DividerWithFileType = ({
  theme = defaultTheme,
  fileType = "PDF",
  variant = "default",
}: DividerWithFileTypeProps) => (
  <Html>
    <Head />
    <Preview>divider-file</Preview>
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
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <DividerWithFileTypeSection
            fileType={fileType}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

DividerWithFileType.PreviewProps = {
  fileType: "PDF",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithFileTypeProps;
