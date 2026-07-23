/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface PricingFeature {
  label: string;
  muted?: boolean;
}

export interface FullWidthSinglePricingProps {
  theme?: EmailThemeTokens;
  name?: string;
  price?: string;
  currency?: string;
  period?: string;
  description?: string;
  features?: PricingFeature[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  brandColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .single-pricing-break { display: none !important; }",
  "}",
].join("\n");

const defaultFeatures: PricingFeature[] = [
  { label: "Visual email editor" },
  { label: "Transactional & marketing templates" },
  { label: "Team collaboration (up to 3 users)", muted: true },
  { label: "Version control & previews", muted: true },
];

export const FullWidthSinglePricingSection = ({
  name = "Takeoff",
  price = "$19",
  currency = "USD",
  period = "/Month",
  description = "Everything you need to design, build, and ship emails faster.",
  features = defaultFeatures,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f9fafb",
  brandColor = "#4f46e5",
}: Omit<FullWidthSinglePricingProps, "theme">) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ backgroundColor: pageBackgroundColor }}
    width="100%"
  >
    <tbody>
      <tr>
        <td>&zwj;</td>
        <td
          style={{
            backgroundColor,
            maxWidth: "100%",
            paddingBottom: "44px",
            width: "600px",
          }}
        >
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
                        <td
                          style={{
                            backgroundColor: cardBackgroundColor,
                            borderRadius: "8px",
                            padding: "24px",
                          }}
                        >
                          <p
                            style={{
                              color: brandColor,
                              fontFamily,
                              fontSize: "24px",
                              fontWeight: 600,
                              lineHeight: "32px",
                              margin: 0,
                            }}
                          >
                            {name}
                          </p>
                          <div style={{ lineHeight: "16px" }}>&zwj;</div>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <p
                                    style={{
                                      color: "#030712",
                                      fontFamily,
                                      fontSize: "60px",
                                      fontWeight: 600,
                                      lineHeight: 1,
                                      margin: 0,
                                    }}
                                  >
                                    {price}
                                  </p>
                                </td>
                                <td style={{ width: "8px" }}>&zwj;</td>
                                <td>
                                  <p
                                    style={{
                                      color: "#374151",
                                      fontFamily,
                                      fontSize: "14px",
                                      fontWeight: 500,
                                      lineHeight: "20px",
                                      margin: 0,
                                    }}
                                  >
                                    {currency}
                                  </p>
                                  <p
                                    style={{
                                      color: "#6b7280",
                                      fontFamily,
                                      fontSize: "14px",
                                      lineHeight: "20px",
                                      margin: 0,
                                    }}
                                  >
                                    {period}
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div style={{ lineHeight: "16px" }}>&zwj;</div>
                          <p
                            style={{
                              color: "#030712",
                              fontFamily,
                              fontSize: "18px",
                              fontWeight: 500,
                              lineHeight: "28px",
                              margin: 0,
                            }}
                          >
                            {description ===
                            "Everything you need to design, build, and ship emails faster." ? (
                              <>
                                Everything you need to design, build,{" "}
                                <br className="single-pricing-break" /> and ship
                                emails faster.
                              </>
                            ) : (
                              description
                            )}
                          </p>
                          <div style={{ lineHeight: "36px" }}>&zwj;</div>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                          >
                            <tbody>
                              {features.map((feature, index) => (
                                <tr key={feature.label}>
                                  <td
                                    style={{
                                      lineHeight: "24px",
                                      verticalAlign: "top",
                                      width: "16px",
                                    }}
                                  >
                                    <img
                                      alt=""
                                      src={`https://assets.mailviews.com/images/components/icon-check-${feature.muted ? "muted" : "brand"}.png`}
                                      style={{
                                        maxWidth: "100%",
                                        verticalAlign: "middle",
                                      }}
                                      width={16}
                                    />
                                  </td>
                                  <td style={{ width: "12px" }}>&zwj;</td>
                                  <td
                                    style={{
                                      paddingBottom:
                                        index < features.length - 1
                                          ? "16px"
                                          : 0,
                                      verticalAlign: "top",
                                    }}
                                  >
                                    <p
                                      style={{
                                        color: feature.muted
                                          ? "#9ca3af"
                                          : "#4b5563",
                                        fontFamily,
                                        fontSize: "16px",
                                        lineHeight: "24px",
                                        margin: 0,
                                      }}
                                    >
                                      {feature.label}
                                    </p>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
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

export const FullWidthSinglePricing = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: FullWidthSinglePricingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Takeoff pricing</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FullWidthSinglePricingSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

FullWidthSinglePricing.PreviewProps = {
  theme: defaultTheme,
} satisfies FullWidthSinglePricingProps;
