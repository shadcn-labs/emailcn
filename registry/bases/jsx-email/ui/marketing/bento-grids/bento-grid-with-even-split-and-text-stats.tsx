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
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BentoGridCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridCenteredProps {
  theme?: EmailThemeTokens;
  heading?: string;
  columns?: { icon?: string; title: string; description: string }[];
  variant?: BentoGridCenteredVariant;
}
const BentoGridCenteredSection = ({
  columns,
  heading,
  theme,
  variant,
}: {
  columns: BentoGridCenteredProps["columns"];
  heading: string;
  theme: EmailThemeTokens;
  variant: BentoGridCenteredVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {heading ? (
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        </Column>
      ) : null}
      {(columns ?? []).slice(0, 3).map((col, i) => (
        <Column
          key={col.title + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "33.33%",
          }}
        >
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: "32px",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "8px",
              textAlign: "center",
            }}
          >
            {col.icon ?? "✦"}
          </Text>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "8px",
              textAlign: "center",
            }}
          >
            {col.title}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase,
              lineHeight: theme.lineHeightBase,
              margin: 0,
              textAlign: "center",
            }}
          >
            {col.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const BentoGridWithEvenSplitAndTextStats = ({
  theme = defaultTheme,
  heading = "How It Works",
  columns = [
    { description: "Sign up for an account.", title: "Step 1" },
    { description: "Configure your settings.", title: "Step 2" },
    { description: "Start building emails.", title: "Step 3" },
  ],
  variant = "default",
}: BentoGridCenteredProps) => (
  <Html>
    <Head />
    <Preview>bento centered</Preview>
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
          <BentoGridCenteredSection
            columns={columns}
            heading={heading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWithEvenSplitAndTextStats.PreviewProps = {
  columns: [
    { description: "Create your free account in seconds.", title: "Sign Up" },
    {
      description: "Customize your workspace and preferences.",
      title: "Configure",
    },
    { description: "Create beautiful emails with our tools.", title: "Build" },
  ],
  heading: "How It Works",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridCenteredProps;
