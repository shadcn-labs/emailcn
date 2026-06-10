/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface VerticalSpacerProps {
  theme?: EmailThemeTokens;
  height?: number;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const VerticalSpacerSection = ({ height }: { height: number }) => (
  <Section style={{ padding: `${height}px 0` }}>
    <Row>
      <Column></Column>
    </Row>
  </Section>
);

export const VerticalSpacer = ({
  theme = defaultTheme,
  height = 24,
  variant = "default",
}: VerticalSpacerProps) => (
  <Html>
    <Head />
    <Preview>spacer</Preview>
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
          <VerticalSpacerSection height={height} />
        </Section>
      </Container>
    </Body>
  </Html>
);

VerticalSpacer.PreviewProps = {
  height: 48,
  theme: defaultTheme,
  variant: "default",
} satisfies VerticalSpacerProps;
