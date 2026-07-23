import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Text,
  Row,
  Column,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type MilestoneStatsVariant = "default" | "boxed" | "accent";

export interface MilestoneStatsProps {
  theme?: TailwindConfig;
  variant?: MilestoneStatsVariant;
  heading?: string;
  value?: string;
  unit?: string;
  currentLevel?: string;
  nextLevel?: string;
  remaining?: string;
  progress?: number;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  progressTrackColor?: string;
  progressColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) { .milestone-side-gap { width: 48px !important; } }
  @media only screen and (max-width: 430px) { .milestone-side-gap { display: none !important; } }
`;

const defaults = {
  backgroundColor: "#fffffe",
  cardBackgroundColor: "#f9fafb",
  currentLevel: "SILVER",
  heading: "Miles traveled",
  headingColor: "#030712",
  mutedTextColor: "#9ca3af",
  nextLevel: "GOLD",
  pageBackgroundColor: "#f1f5f9",
  progress: 90,
  progressColor: "#030712",
  progressTrackColor: "#e5e7eb",
  remaining: "1,315 miles",
  textColor: "#4b5563",
  unit: "miles",
  value: "5,685",
};

type SectionProps = Omit<MilestoneStatsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const MilestoneContent = ({
  props,
  variant,
}: {
  props: ResolvedProps;
  variant: MilestoneStatsVariant;
}) => {
  const accent = variant === "accent";
  const primary = accent ? "#fffffe" : props.headingColor;
  return (
    <>
      <Section>
        <Text
          style={{
            color: primary,
            fontFamily,
            fontSize: "18px",
            fontWeight: 600,
            lineHeight: "28px",
            margin: 0,
            textAlign: "center",
          }}
        >
          {props.heading}
        </Text>
        <Text
          style={{
            color: accent ? "#fde68a" : props.headingColor,
            fontFamily,
            fontSize: "48px",
            fontWeight: 600,
            lineHeight: "normal",
            margin: "8px 0 0",
            textAlign: "center",
          }}
        >
          {props.value}{" "}
          <span style={{ color: props.mutedTextColor, fontSize: "30px" }}>
            {props.unit}
          </span>
        </Text>
      </Section>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      <Section width="100%">
        <Fragment>
          <Row>
            <Column className="milestone-side-gap" style={{ width: "88px" }}>
              &zwj;
            </Column>
            <Column>
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column
                      style={{
                        color: props.mutedTextColor,
                        fontFamily,
                        fontSize: "14px",
                        fontWeight: accent ? 500 : 600,
                        lineHeight: "20px",
                      }}
                    >
                      {props.currentLevel}
                    </Column>
                    <Column
                      style={{
                        color: primary,
                        fontFamily,
                        fontSize: "14px",
                        fontWeight: accent ? 500 : 600,
                        lineHeight: "20px",
                        textAlign: "right",
                      }}
                    >
                      {props.nextLevel}
                    </Column>
                  </Row>
                </Fragment>
              </Section>
              <Section style={{ lineHeight: "10px" }}>&zwj;</Section>
            </Column>
            <Column className="milestone-side-gap" style={{ width: "88px" }}>
              &zwj;
            </Column>
          </Row>
          <Row>
            <Column
              className="milestone-side-gap"
              style={{ lineHeight: "4px", width: "88px" }}
            >
              &zwj;
            </Column>
            <Column
              style={{
                backgroundColor: accent ? "#4b5563" : props.progressTrackColor,
                borderRadius: "4px",
                height: "4px",
              }}
            >
              <Section style={{ width: `${props.progress}%` }}>
                <Fragment>
                  <Row>
                    <Column
                      style={{
                        backgroundColor: accent
                          ? "#fde68a"
                          : props.progressColor,
                        borderRadius: "4px",
                        lineHeight: "4px",
                      }}
                    >
                      &zwj;
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column
              className="milestone-side-gap"
              style={{ lineHeight: "4px", width: "88px" }}
            >
              &zwj;
            </Column>
          </Row>
        </Fragment>
      </Section>
      <Text
        style={{
          color: accent ? "#d1d5db" : props.textColor,
          fontFamily,
          fontSize: "14px",
          lineHeight: "20px",
          margin: "16px 0 0",
          textAlign: "center",
        }}
      >
        You’re <strong>{props.remaining}</strong> from Gold status
      </Text>
    </>
  );
};

export const MilestoneStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const boxed = variant !== "default";
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
                    {boxed ? (
                      <Section
                        style={{
                          backgroundColor:
                            variant === "accent"
                              ? "#030712"
                              : resolved.cardBackgroundColor,
                          borderRadius: "8px",
                        }}
                        width="100%"
                      >
                        <Fragment>
                          <Row>
                            <Column style={{ padding: "24px" }}>
                              <MilestoneContent
                                props={resolved}
                                variant={variant}
                              />
                            </Column>
                          </Row>
                        </Fragment>
                      </Section>
                    ) : (
                      <MilestoneContent props={resolved} variant={variant} />
                    )}
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

export const MilestoneStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: MilestoneStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>5,685 miles traveled</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <MilestoneStatsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

MilestoneStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies MilestoneStatsProps;
