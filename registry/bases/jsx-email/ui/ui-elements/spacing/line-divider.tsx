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
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface LineDividerProps {
  theme?: EmailThemeTokens;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const LineDividerSection = ({ theme }: { theme: EmailThemeTokens }) => (
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
            width: "100%",
          }}
        />
      </Column>
    </Row>
  </Section>
);

export const LineDivider = ({
  theme = defaultTheme,
  variant = "default",
}: LineDividerProps) => (
  <Html>
    <Head />
    <Preview>divider</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <LineDividerSection theme={theme} />
        </Section>
      </Container>
    </Body>
  </Html>
);

LineDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies LineDividerProps;
