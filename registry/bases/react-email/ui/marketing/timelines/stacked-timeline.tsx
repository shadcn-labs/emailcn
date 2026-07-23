import type { ReactNode } from "react";
import { Fragment } from "react";
import {
  Body,
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

export type StackedTimelineVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "completed-left"
  | "completed-right"
  | "accent-left"
  | "accent-right";

export type StackedTimelineLayout = "line" | "boxed";

export interface StackedTimelineProps {
  theme?: TailwindConfig;
  variant?: StackedTimelineVariant;
  layout?: StackedTimelineLayout;
  index?: string;
  label?: string;
  title?: string;
  description?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  .stacked-timeline-mobile { display: none; }
  @media only screen and (max-width: 599px) {
    .stacked-timeline-meta { width: 96px !important; }
  }
  @media only screen and (max-width: 430px) {
    .stacked-timeline-meta, .stacked-timeline-gap { display: none !important; }
    .stacked-timeline-mobile { display: block !important; }
    .stacked-timeline-content { width: 100% !important; }
    .stacked-timeline-card { text-align: left !important; }
  }
`;

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

interface ShellProps {
  children: ReactNode;
}

const TimelineShell = ({ children }: ShellProps) => (
  <>
    <style>{responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

interface MetaProps {
  index: string;
  label: string;
  muted: boolean;
  right: boolean;
}

const TimelineMeta = ({ index, label, muted, right }: MetaProps) => (
  <Column
    className="stacked-timeline-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <Text
      style={{
        ...textStyle,
        color: muted ? "#9ca3af" : "#030712",
        fontSize: "60px",
        fontWeight: 600,
      }}
    >
      {index}
    </Text>
    <Text
      style={{
        ...textStyle,
        color: "#9ca3af",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px",
      }}
    >
      {label}
    </Text>
  </Column>
);

const Rail = ({
  boxed,
  muted,
  railColor,
}: {
  boxed: boolean;
  muted: boolean;
  railColor: string;
}) => (
  <Column style={{ verticalAlign: "top", width: "12px" }}>
    <Section
      style={{
        backgroundColor: railColor,
        height: boxed ? "24px" : "4px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
    <Section
      style={{
        backgroundColor: muted ? undefined : "#4f46e5",
        border: muted ? "2px solid #d1d5db" : undefined,
        borderRadius: "9999px",
        height: muted ? "8px" : "12px",
        margin: muted ? "6px 2px" : "6px 0",
        width: muted ? "8px" : "12px",
      }}
    >
      &zwj;
    </Section>
    <Section
      style={{
        backgroundColor: railColor,
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </Section>
  </Column>
);

interface CopyProps {
  accent: boolean;
  boxed: boolean;
  cardBackground?: string;
  description: string;
  descriptionColor: string;
  title: string;
  titleColor: string;
}

const TimelineCopy = ({
  boxed,
  cardBackground,
  description,
  descriptionColor,
  title,
  titleColor,
}: CopyProps) =>
  boxed ? (
    <Section
      style={{
        backgroundColor: cardBackground,
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "24px 24px 0" }}>
            <Text
              style={{
                ...textStyle,
                color: titleColor,
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              {title}
            </Text>
          </Column>
        </Row>
        <Row>
          <Column style={{ padding: "16px 24px 24px" }}>
            <Text
              style={{
                ...textStyle,
                color: descriptionColor,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {description}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  ) : (
    <>
      <Text
        style={{
          ...textStyle,
          color: titleColor,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {title}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          ...textStyle,
          color: descriptionColor,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {description}
      </Text>
    </>
  );

interface ContentProps {
  accent: boolean;
  boxed: boolean;
  description: string;
  index: string;
  label: string;
  muted: boolean;
  right: boolean;
  title: string;
}

const TimelineContent = ({
  accent,
  boxed,
  description,
  index,
  label,
  muted,
  right,
  title,
}: ContentProps) => {
  const railColor = accent ? "#030712" : "#d1d5db";
  let cardBackground: string | undefined;
  if (boxed) {
    cardBackground = accent ? "#030712" : "#f9fafb";
  }
  const titleColor = boxed && accent ? "#fffffe" : "#030712";
  const descriptionColor = boxed && accent ? "#d1d5db" : "#4b5563";

  return (
    <Column
      className="stacked-timeline-content"
      style={{ textAlign: right ? "right" : "left", verticalAlign: "top" }}
    >
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            {right ? (
              <>
                <Column
                  className="stacked-timeline-card"
                  style={{ paddingBottom: "80px" }}
                >
                  <Section className="stacked-timeline-mobile">
                    <Text
                      style={{
                        ...textStyle,
                        color: muted ? "#9ca3af" : "#030712",
                        fontSize: "60px",
                        fontWeight: 600,
                        lineHeight: "64px",
                      }}
                    >
                      {index}
                    </Text>
                    <Text
                      style={{
                        ...textStyle,
                        color: "#9ca3af",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16px",
                      }}
                    >
                      {label}
                    </Text>
                    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                  </Section>
                  <TimelineCopy
                    accent={accent}
                    boxed={boxed}
                    cardBackground={cardBackground}
                    description={description}
                    descriptionColor={descriptionColor}
                    title={title}
                    titleColor={titleColor}
                  />
                </Column>
                <Column style={{ width: "16px" }}>&zwj;</Column>
                <Rail boxed={boxed} muted={muted} railColor={railColor} />
              </>
            ) : (
              <>
                <Rail boxed={boxed} muted={muted} railColor={railColor} />
                <Column style={{ width: "16px" }}>&zwj;</Column>
                <Column
                  className="stacked-timeline-card"
                  style={{ paddingBottom: "80px" }}
                >
                  <Section className="stacked-timeline-mobile">
                    <Text
                      style={{
                        ...textStyle,
                        color: muted ? "#9ca3af" : "#030712",
                        fontSize: "60px",
                        fontWeight: 600,
                        lineHeight: "64px",
                      }}
                    >
                      {index}
                    </Text>
                    <Text
                      style={{
                        ...textStyle,
                        color: "#9ca3af",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16px",
                      }}
                    >
                      {label}
                    </Text>
                    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                  </Section>
                  <TimelineCopy
                    accent={accent}
                    boxed={boxed}
                    cardBackground={cardBackground}
                    description={description}
                    descriptionColor={descriptionColor}
                    title={title}
                    titleColor={titleColor}
                  />
                </Column>
              </>
            )}
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
};

export const StackedTimelineSection = ({
  description = "Every mile tells a story. Each step forward adds to the journey, shaping the path ahead and marking progress along the way.",
  index,
  label,
  layout = "line",
  title = "Total distance",
  variant = "muted-left",
}: Omit<StackedTimelineProps, "theme">) => {
  const boxed = layout === "boxed";
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent =
    variant.startsWith("completed") || variant.startsWith("accent");
  const resolvedIndex = index ?? (boxed ? "A" : "01");
  const resolvedLabel = label ?? (boxed ? "Cargo number" : "Miles traveled");

  const meta = (
    <TimelineMeta
      index={resolvedIndex}
      label={resolvedLabel}
      muted={muted}
      right={right}
    />
  );
  const content = (
    <TimelineContent
      accent={accent}
      boxed={boxed}
      description={description}
      index={resolvedIndex}
      label={resolvedLabel}
      muted={muted}
      right={right}
      title={title}
    />
  );

  return (
    <TimelineShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column style={{ padding: "0 24px" }}>
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {right ? content : meta}
                    <Column
                      className="stacked-timeline-gap"
                      style={{ width: "16px" }}
                    >
                      &zwj;
                    </Column>
                    {right ? meta : content}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </TimelineShell>
  );
};

export const StackedTimeline = ({
  theme = defaultTheme,
  ...props
}: StackedTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Total distance</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <StackedTimelineSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

StackedTimeline.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies StackedTimelineProps;
