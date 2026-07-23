import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type RollingStatsVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

export interface RollingStatsProps {
  theme?: EmailThemeTokens;
  variant?: RollingStatsVariant;
  eyebrow?: string;
  label?: string;
  values?: [string, string, string];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  panelBackgroundColor?: string;
  eyebrowColor?: string;
  labelColor?: string;
  firstValueColor?: string;
  secondValueColor?: string;
  accentColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaults = {
  backgroundColor: "#fffffe",
  eyebrow: "Mapped trails",
  eyebrowColor: "#9ca3af",
  firstValueColor: "#262626",
  label: "Tracked by active users",
  labelColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  panelBackgroundColor: "#030712",
  secondValueColor: "#737373",
};

const accentColors: Record<RollingStatsVariant, string> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

type SectionProps = Omit<RollingStatsProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & { accentColor: string; values: [string, string, string] };

export const RollingStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "centered";
  const centered = variant === "centered";
  const bottom = variant.startsWith("bottom-");
  const resolved = {
    ...defaults,
    accentColor: accentColors[variant],
    values: centered
      ? (["3,117km", "3,118km", "3,119km"] as [string, string, string])
      : (["14,598", "14,599", "14,600"] as [string, string, string]),
    ...props,
  } as ResolvedProps;
  let align: "center" | "left" | "right" = "left";
  let topSpace = "24px";
  let bottomSpace = "92px";
  if (centered) {
    align = "center";
    topSpace = "58px";
    bottomSpace = "58px";
  } else {
    if (variant.endsWith("-right")) {
      align = "right";
    }
    if (bottom) {
      topSpace = "92px";
      bottomSpace = "24px";
    }
  }
  const value = (text: string, color: string, first: boolean) => (
    <Text
      style={{
        color,
        fontFamily,
        fontSize: "72px",
        fontWeight: 500,
        lineHeight: "56px",
        margin: first ? "12px 0 0" : 0,
        textAlign: align,
      }}
    >
      {text}
    </Text>
  );

  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column
                    style={{
                      backgroundColor: resolved.panelBackgroundColor,
                      borderRadius: "8px",
                      padding: "0 24px",
                    }}
                  >
                    <Section style={{ lineHeight: topSpace }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.eyebrowColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: align,
                      }}
                    >
                      {resolved.eyebrow}
                    </Text>
                    <Text
                      style={{
                        color: resolved.labelColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: align,
                      }}
                    >
                      {resolved.label}
                    </Text>
                    {value(resolved.values[0], resolved.firstValueColor, true)}
                    {value(
                      resolved.values[1],
                      resolved.secondValueColor,
                      false
                    )}
                    {value(resolved.values[2], resolved.accentColor, false)}
                    <Section style={{ lineHeight: bottomSpace }}>&zwj;</Section>
                  </Column>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const RollingStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: RollingStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>3,119km mapped trails</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <RollingStatsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

RollingStats.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies RollingStatsProps;
