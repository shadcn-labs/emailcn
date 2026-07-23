/* eslint-disable no-nested-ternary, no-use-before-define */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  theme?: EmailThemeTokens;
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: "#f1f5f9", width: "100%" }}
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  </>
);

interface MetaProps {
  index: string;
  label: string;
  muted: boolean;
  right: boolean;
}

const TimelineMeta = ({ index, label, muted, right }: MetaProps) => (
  <td
    className="stacked-timeline-meta"
    style={{
      textAlign: right ? "left" : "right",
      verticalAlign: "top",
      width: "136px",
    }}
  >
    <p
      style={{
        ...textStyle,
        color: muted ? "#9ca3af" : "#030712",
        fontSize: "60px",
        fontWeight: 600,
      }}
    >
      {index}
    </p>
    <p
      style={{
        ...textStyle,
        color: "#9ca3af",
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "16px",
      }}
    >
      {label}
    </p>
  </td>
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
  const cardBackground = boxed ? (accent ? "#030712" : "#f9fafb") : undefined;
  const titleColor = boxed && accent ? "#fffffe" : "#030712";
  const descriptionColor = boxed && accent ? "#d1d5db" : "#4b5563";

  return (
    <td
      className="stacked-timeline-content"
      style={{ textAlign: right ? "right" : "left", verticalAlign: "top" }}
    >
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            {right ? (
              <>
                <td
                  className="stacked-timeline-card"
                  style={{ paddingBottom: "80px" }}
                >
                  <div className="stacked-timeline-mobile">
                    <p
                      style={{
                        ...textStyle,
                        color: muted ? "#9ca3af" : "#030712",
                        fontSize: "60px",
                        fontWeight: 600,
                        lineHeight: "64px",
                      }}
                    >
                      {index}
                    </p>
                    <p
                      style={{
                        ...textStyle,
                        color: "#9ca3af",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16px",
                      }}
                    >
                      {label}
                    </p>
                    <div style={{ lineHeight: "16px" }}>&zwj;</div>
                  </div>
                  <TimelineCopy
                    accent={accent}
                    boxed={boxed}
                    cardBackground={cardBackground}
                    description={description}
                    descriptionColor={descriptionColor}
                    title={title}
                    titleColor={titleColor}
                  />
                </td>
                <td style={{ width: "16px" }}>&zwj;</td>
                <Rail boxed={boxed} muted={muted} railColor={railColor} />
              </>
            ) : (
              <>
                <Rail boxed={boxed} muted={muted} railColor={railColor} />
                <td style={{ width: "16px" }}>&zwj;</td>
                <td
                  className="stacked-timeline-card"
                  style={{ paddingBottom: "80px" }}
                >
                  <div className="stacked-timeline-mobile">
                    <p
                      style={{
                        ...textStyle,
                        color: muted ? "#9ca3af" : "#030712",
                        fontSize: "60px",
                        fontWeight: 600,
                        lineHeight: "64px",
                      }}
                    >
                      {index}
                    </p>
                    <p
                      style={{
                        ...textStyle,
                        color: "#9ca3af",
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "16px",
                      }}
                    >
                      {label}
                    </p>
                    <div style={{ lineHeight: "16px" }}>&zwj;</div>
                  </div>
                  <TimelineCopy
                    accent={accent}
                    boxed={boxed}
                    cardBackground={cardBackground}
                    description={description}
                    descriptionColor={descriptionColor}
                    title={title}
                    titleColor={titleColor}
                  />
                </td>
              </>
            )}
          </tr>
        </tbody>
      </table>
    </td>
  );
};

const Rail = ({
  boxed,
  muted,
  railColor,
}: {
  boxed: boolean;
  muted: boolean;
  railColor: string;
}) => (
  <td style={{ verticalAlign: "top", width: "12px" }}>
    <div
      style={{
        backgroundColor: railColor,
        height: boxed ? "24px" : "4px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </div>
    <div
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
    </div>
    <div
      style={{
        backgroundColor: railColor,
        height: "104px",
        margin: "0 auto",
        width: "2px",
      }}
    >
      &zwj;
    </div>
  </td>
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{
        backgroundColor: cardBackground,
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: "24px 24px 0" }}>
            <p
              style={{
                ...textStyle,
                color: titleColor,
                fontSize: "18px",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              {title}
            </p>
          </td>
        </tr>
        <tr>
          <td style={{ padding: "16px 24px 24px" }}>
            <p
              style={{
                ...textStyle,
                color: descriptionColor,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {description}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  ) : (
    <>
      <p
        style={{
          ...textStyle,
          color: titleColor,
          fontSize: "18px",
          fontWeight: 600,
          lineHeight: "24px",
        }}
      >
        {title}
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <p
        style={{
          ...textStyle,
          color: descriptionColor,
          fontSize: "16px",
          lineHeight: "24px",
        }}
      >
        {description}
      </p>
    </>
  );

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
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            <td style={{ padding: "0 24px" }}>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    {right ? content : meta}
                    <td
                      className="stacked-timeline-gap"
                      style={{ width: "16px" }}
                    >
                      &zwj;
                    </td>
                    {right ? meta : content}
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </TimelineShell>
  );
};

export const StackedTimeline = ({
  theme = defaultTheme,
  ...props
}: StackedTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Total distance</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <StackedTimelineSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedTimeline.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies StackedTimelineProps;
