import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type StackedStatsVariant = "left" | "center" | "right";

export interface StackedStatsProps {
  theme?: EmailThemeTokens;
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
                    {resolved.stats.slice(0, 3).map((stat, index) => (
                      <div
                        key={stat.heading}
                        style={{
                          marginTop: index === 0 ? undefined : "24px",
                          textAlign,
                        }}
                      >
                        <p
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
                        </p>
                        <p
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
                        </p>
                        <p
                          style={{
                            color: resolved.textColor,
                            fontFamily,
                            fontSize: "14px",
                            lineHeight: "20px",
                            margin: 0,
                          }}
                        >
                          {stat.description}
                        </p>
                        {index < 2 ? (
                          <div
                            style={{
                              backgroundColor: resolved.dividerColor,
                              height: "1px",
                              lineHeight: "1px",
                              marginTop: "24px",
                            }}
                          >
                            &zwj;
                          </div>
                        ) : null}
                      </div>
                    ))}
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

export const StackedStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left",
  ...props
}: StackedStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>10 active days</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <StackedStatsSection
            {...props}
            variant={variant}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedStats.PreviewProps = {
  theme: defaultTheme,
  variant: "left",
} satisfies StackedStatsProps;
