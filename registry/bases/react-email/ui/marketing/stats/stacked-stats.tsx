import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type StackedStatsVariant = "left" | "center" | "right";

export interface StackedStatsProps {
  theme?: TailwindConfig;
  variant?: StackedStatsVariant;
  stats?: { heading: string; value: string; description: string }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  accentColor?: string;
  headingColor?: string;
  textColor?: string;
  dividerColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaults = {
  accentColor: "#f97316",
  backgroundColor: "#fffffe",
  dividerColor: "#cbd5e1",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  stats: [
    {
      description: "For the month of January",
      heading: "Active days",
      value: "10 days",
    },
    {
      description: "Total distance recorded",
      heading: "Distance covered",
      value: "28km",
    },
    {
      description: "Time spent across all activities",
      heading: "Total time of activity",
      value: "5h 34min",
    },
  ],
  textColor: "#4b5563",
};

type SectionProps = Omit<StackedStatsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

export const StackedStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  let textAlign: "center" | "left" | "right" = "left";
  if (variant === "center") {
    textAlign = "center";
  } else if (variant === "right") {
    textAlign = "right";
  }
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
                  <Column style={{ padding: "0 24px" }}>
                    {resolved.stats.slice(0, 3).map((stat, index) => (
                      <Section
                        key={stat.heading}
                        style={{
                          marginTop: index === 0 ? undefined : "24px",
                          textAlign,
                        }}
                      >
                        <Text
                          style={{
                            color: resolved.accentColor,
                            fontFamily,
                            fontSize: "18px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                          }}
                        >
                          {stat.heading}
                        </Text>
                        <Text
                          style={{
                            color: resolved.headingColor,
                            fontFamily,
                            fontSize: "60px",
                            fontWeight: 600,
                            lineHeight: "normal",
                            margin: 0,
                          }}
                        >
                          {stat.value}
                        </Text>
                        <Text
                          style={{
                            color: resolved.textColor,
                            fontFamily,
                            fontSize: "14px",
                            lineHeight: "20px",
                            margin: 0,
                          }}
                        >
                          {stat.description}
                        </Text>
                        {index < 2 ? (
                          <Section
                            style={{
                              backgroundColor: resolved.dividerColor,
                              height: "1px",
                              lineHeight: "1px",
                              marginTop: "24px",
                            }}
                          >
                            &zwj;
                          </Section>
                        ) : null}
                      </Section>
                    ))}
                  </Column>
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

export const StackedStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left",
  ...props
}: StackedStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>10 active days</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <StackedStatsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

StackedStats.PreviewProps = {
  theme: defaultTheme,
  variant: "left",
} satisfies StackedStatsProps;
