/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BentoGridStatsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridStatsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  stats?: { value: string; label: string; imageUrl?: string }[];
  variant?: BentoGridStatsVariant;
}
const BentoGridStatsSection = ({
  heading,
  stats,
  theme,
  variant,
}: {
  heading: string;
  stats: BentoGridStatsProps["stats"];
  theme: EmailThemeTokens;
  variant: BentoGridStatsVariant;
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
      {(stats ?? []).slice(0, 4).map((s, i) => (
        <Column
          key={s.label + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "25%",
          }}
        >
          {s.imageUrl ? (
            <Img
              alt={s.label}
              src={s.imageUrl}
              width={200}
              style={{
                borderRadius: theme.borderRadius,
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                paddingBottom: theme.spacingBase ?? "12px",
              }}
            />
          ) : null}
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: "24px",
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "4px",
              textAlign: "center",
            }}
          >
            {s.value}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              margin: 0,
              textAlign: "center",
            }}
          >
            {s.label}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const BentoGridWith3ColumnsAndEvenSplitImageStats = ({
  theme = defaultTheme,
  heading = "By the Numbers",
  stats = [
    { label: "Users", value: "10K+" },
    { label: "Downloads", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "Reviews", value: "5K+" },
  ],
  variant = "default",
}: BentoGridStatsProps) => (
  <Html>
    <Head />
    <Preview>bento stats</Preview>
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
          <BentoGridStatsSection
            heading={heading}
            stats={stats}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWith3ColumnsAndEvenSplitImageStats.PreviewProps = {
  heading: "By the Numbers",
  stats: [
    { label: "Active Users", value: "50K+" },
    { label: "Countries", value: "120+" },
    { label: "5-Star Reviews", value: "10K+" },
    { label: "Years in Business", value: "5+" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridStatsProps;
