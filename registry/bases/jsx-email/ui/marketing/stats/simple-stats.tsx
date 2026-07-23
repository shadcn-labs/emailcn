import { Body, Container, Head, Html, Preview } from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type SimpleStatsVariant = "default" | "outlined" | "boxed" | "bordered";

export interface SimpleStatsProps {
  theme?: EmailThemeTokens;
  variant?: SimpleStatsVariant;
  stats?: { label: string; value: string }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  borderColor?: string;
  headingColor?: string;
  textColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .simple-stat-stack { display: block !important; width: 100% !important; }
    .simple-stat-gap { line-height: 24px !important; }
  }
`;

const defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  cardBackgroundColor: "#f9fafb",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  stats: [
    { label: "Increase in conversion rate", value: "45%" },
    { label: "Average page load time", value: "2.1s" },
    { label: "Monthly churn reduction", value: "18%" },
  ],
  textColor: "#4b5563",
};

type SectionProps = Omit<SimpleStatsProps, "theme">;

const StatCopy = ({
  headingColor,
  label,
  textColor,
  value,
}: {
  headingColor: string;
  label: string;
  textColor: string;
  value: string;
}) => (
  <>
    <p
      style={{
        color: headingColor,
        fontFamily,
        fontSize: "36px",
        fontWeight: 300,
        lineHeight: "40px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {value}
    </p>
    <p
      style={{
        color: textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: "8px 0 0",
        textAlign: "center",
      }}
    >
      {label}
    </p>
  </>
);

export const SimpleStatsSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props };
  const variant = props.variant ?? "default";
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
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          {resolved.stats.slice(0, 3).map((stat, index) => (
                            <Fragment key={stat.label + stat.value}>
                              {index > 0 ? (
                                <td
                                  className="simple-stat-stack simple-stat-gap"
                                  style={{ width: "24px" }}
                                >
                                  &zwj;
                                </td>
                              ) : null}
                              <td
                                className="simple-stat-stack"
                                style={{ verticalAlign: "top", width: "168px" }}
                              >
                                {variant === "default" ? (
                                  <StatCopy
                                    headingColor={resolved.headingColor}
                                    label={stat.label}
                                    textColor={resolved.textColor}
                                    value={stat.value}
                                  />
                                ) : (
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    role="presentation"
                                    style={{
                                      backgroundColor:
                                        variant === "boxed"
                                          ? resolved.cardBackgroundColor
                                          : undefined,
                                      border:
                                        variant === "outlined"
                                          ? `1px solid ${resolved.borderColor}`
                                          : undefined,
                                      borderRadius:
                                        variant === "outlined" ||
                                        variant === "boxed"
                                          ? "8px"
                                          : undefined,
                                      borderTop:
                                        variant === "bordered"
                                          ? `4px solid ${resolved.headingColor}`
                                          : undefined,
                                    }}
                                    width="100%"
                                  >
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            padding:
                                              variant === "bordered"
                                                ? "20px 16px"
                                                : "24px 16px",
                                          }}
                                        >
                                          <StatCopy
                                            headingColor={resolved.headingColor}
                                            label={stat.label}
                                            textColor={resolved.textColor}
                                            value={stat.value}
                                          />
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                )}
                              </td>
                            </Fragment>
                          ))}
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

export const SimpleStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "default",
  ...props
}: SimpleStatsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>45% increase in conversion rate</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <SimpleStatsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

SimpleStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies SimpleStatsProps;
