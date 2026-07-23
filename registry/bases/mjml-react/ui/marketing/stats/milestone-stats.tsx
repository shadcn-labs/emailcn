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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type MilestoneStatsVariant = "default" | "boxed" | "accent";

export interface MilestoneStatsProps {
  theme?: EmailThemeTokens;
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
      <div>
        <p
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
        </p>
        <p
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
        </p>
      </div>
      <div style={{ lineHeight: "24px" }}>&zwj;</div>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td className="milestone-side-gap" style={{ width: "88px" }}>
              &zwj;
            </td>
            <td>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        color: props.mutedTextColor,
                        fontFamily,
                        fontSize: "14px",
                        fontWeight: accent ? 500 : 600,
                        lineHeight: "20px",
                      }}
                    >
                      {props.currentLevel}
                    </td>
                    <td
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
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ lineHeight: "10px" }}>&zwj;</div>
            </td>
            <td className="milestone-side-gap" style={{ width: "88px" }}>
              &zwj;
            </td>
          </tr>
          <tr>
            <td
              className="milestone-side-gap"
              style={{ lineHeight: "4px", width: "88px" }}
            >
              &zwj;
            </td>
            <td
              style={{
                backgroundColor: accent ? "#4b5563" : props.progressTrackColor,
                borderRadius: "4px",
                height: "4px",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: `${props.progress}%` }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        backgroundColor: accent
                          ? "#fde68a"
                          : props.progressColor,
                        borderRadius: "4px",
                        lineHeight: "4px",
                      }}
                    >
                      &zwj;
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td
              className="milestone-side-gap"
              style={{ lineHeight: "4px", width: "88px" }}
            >
              &zwj;
            </td>
          </tr>
        </tbody>
      </table>
      <p
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
      </p>
    </>
  );
};

export const MilestoneStatsSection = (props: SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const boxed = variant !== "default";
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0 24px" }}>
                    {boxed ? (
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                        style={{
                          backgroundColor:
                            variant === "accent"
                              ? "#030712"
                              : resolved.cardBackgroundColor,
                          borderRadius: "8px",
                        }}
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td style={{ padding: "24px" }}>
                              <MilestoneContent
                                props={resolved}
                                variant={variant}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <MilestoneContent props={resolved} variant={variant} />
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const MilestoneStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: MilestoneStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>5,685 miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <MilestoneStatsSection
            {...props}
            variant={variant}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

MilestoneStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies MilestoneStatsProps;
