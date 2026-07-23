/* eslint-disable @next/next/no-img-element, complexity, no-nested-ternary */
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

export type CardsTimelineVariant =
  | "default"
  | "with-badge"
  | "with-accent"
  | "image-top"
  | "image-bottom";

export interface CardsTimelineProps {
  theme?: EmailThemeTokens;
  variant?: CardsTimelineVariant;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

export const CardsTimelineSection = ({
  badge = "Today",
  date = "Monday",
  description = "Description of event",
  imageAlt = "One workspace. Every team.",
  imageSrc = "https://assets.mailviews.com/images/components/timelines/cards.jpg",
  title = "Miles traveled",
  variant = "default",
}: Omit<CardsTimelineProps, "theme">) => {
  const dark =
    variant === "with-accent" ||
    variant === "image-top" ||
    variant === "image-bottom";
  const withBadge = variant !== "default";
  const withCheck = variant === "with-accent";
  const imageTop = variant === "image-top";
  const imageBottom = variant === "image-bottom";

  const image = (
    <img
      alt={imageAlt}
      src={imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="536"
    />
  );

  return (
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
              padding: variant === "default" ? 0 : "16px 0",
              width: "600px",
            }}
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
                  <td style={{ padding: "0 16px" }}>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      style={{ width: "100%" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              backgroundColor: dark
                                ? "#030712"
                                : variant === "with-badge"
                                  ? "#f9fafb"
                                  : "#fffffe",
                              borderRadius:
                                variant === "default" ? undefined : "8px",
                              padding: "16px",
                            }}
                          >
                            {imageTop ? (
                              <>
                                {image}
                                <div style={{ lineHeight: "16px" }}>&zwj;</div>
                              </>
                            ) : null}
                            <table
                              border={0}
                              cellPadding={0}
                              cellSpacing={0}
                              role="presentation"
                              style={{ width: "100%" }}
                            >
                              <tbody>
                                <tr>
                                  <td>
                                    <table
                                      border={0}
                                      cellPadding={0}
                                      cellSpacing={0}
                                      role="presentation"
                                    >
                                      <tbody>
                                        <tr>
                                          <td>
                                            <div
                                              style={{
                                                backgroundColor:
                                                  variant === "default"
                                                    ? "#fcd34d"
                                                    : "#6ee7b7",
                                                borderRadius: "9999px",
                                                height: "12px",
                                                lineHeight: withCheck
                                                  ? "10px"
                                                  : "12px",
                                                textAlign: "center",
                                                width: "12px",
                                              }}
                                            >
                                              {withCheck ? (
                                                <img
                                                  alt=""
                                                  src="https://assets.mailviews.com/images/components/timelines/icon-check.png"
                                                  style={{
                                                    marginBottom: "1px",
                                                  }}
                                                  width="8"
                                                />
                                              ) : (
                                                <>&zwj;</>
                                              )}
                                            </div>
                                          </td>
                                          <td style={{ width: "8px" }}>
                                            &zwj;
                                          </td>
                                          <td>
                                            <p
                                              style={{
                                                ...textStyle,
                                                color: dark
                                                  ? "#e5e7eb"
                                                  : "#374151",
                                                fontSize: "12px",
                                                lineHeight: "16px",
                                              }}
                                            >
                                              {date}
                                            </p>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </td>
                                  <td style={{ textAlign: "right" }}>
                                    {withBadge ? (
                                      <span
                                        style={{
                                          backgroundColor: "#eef2ff",
                                          border: "1px solid #c7d2fe",
                                          borderRadius: "9999px",
                                          color: "#4f46e5",
                                          display: "inline-block",
                                          fontFamily,
                                          fontSize: "12px",
                                          fontWeight: 500,
                                          lineHeight: "16px",
                                          padding: "1px 8px",
                                        }}
                                      >
                                        {badge}
                                      </span>
                                    ) : null}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <p
                              style={{
                                ...textStyle,
                                color: dark ? "#fffffe" : "#030712",
                                fontSize: "18px",
                                fontWeight: 600,
                                lineHeight: "28px",
                                marginTop: "4px",
                              }}
                            >
                              {title}
                            </p>
                            <p
                              style={{
                                ...textStyle,
                                color: dark ? "#d1d5db" : "#4b5563",
                                fontSize: "16px",
                                lineHeight: "24px",
                                marginTop: "4px",
                              }}
                            >
                              {description}
                            </p>
                            {imageBottom ? (
                              <>
                                <div style={{ lineHeight: "16px" }}>&zwj;</div>
                                {image}
                              </>
                            ) : null}
                          </td>
                        </tr>
                      </tbody>
                    </table>
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

export const CardsTimeline = ({
  theme = defaultTheme,
  ...props
}: CardsTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <CardsTimelineSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CardsTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimelineProps;
