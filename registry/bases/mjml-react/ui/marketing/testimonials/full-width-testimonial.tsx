/* eslint-disable next/no-img-element */
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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export type FullWidthTestimonialVariant = "default" | "overlapping-avatar";

export interface FullWidthTestimonialProps {
  theme?: EmailThemeTokens;
  variant?: FullWidthTestimonialVariant;
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .full-testimonial-card { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

export const FullWidthTestimonialSection = ({
  variant = "default",
  quote = "“After migrating to Mailviews, we increased efficiency by 40% across our transactional and marketing email development pipeline.”",
  author = "Ella Roustek",
  role = "Operations Manager",
  avatarSrc = "https://assets.mailviews.com/images/components/testimonials/user-2.jpg",
  logoSrc,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f8fafc",
}: Omit<FullWidthTestimonialProps, "theme">) => {
  const overlapping = variant === "overlapping-avatar";
  const resolvedLogoSrc =
    logoSrc ??
    (overlapping
      ? "https://assets.mailviews.com/images/components/testimonials/logo-accentic.png"
      : "https://assets.mailviews.com/images/components/testimonials/logo-monarch.png");

  return (
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
                  <td style={{ padding: "0 24px", textAlign: "left" }}>
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    {overlapping ? (
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
                              className="full-testimonial-card"
                              style={{
                                backgroundColor: cardBackgroundColor,
                                borderRadius: "8px",
                                padding: "48px 44px 24px",
                              }}
                            >
                              <h2
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                              >
                                {quote}
                              </h2>
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <img
                                alt=""
                                src={resolvedLogoSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={106}
                              />
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <p
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  lineHeight: "24px",
                                  margin: 0,
                                }}
                              >
                                {author}, <br />{" "}
                                <span style={{ color: "#4b5563" }}>{role}</span>
                              </p>
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <div style={{ maxHeight: "8px" }}>
                                <img
                                  alt=""
                                  src={avatarSrc}
                                  style={{
                                    borderRadius: "9999px",
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={64}
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ) : (
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        role="presentation"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td>
                              <img
                                alt=""
                                src={resolvedLogoSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={145}
                              />
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <h2
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                              >
                                {quote}
                              </h2>
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <table
                                border={0}
                                cellPadding={0}
                                cellSpacing={0}
                                role="presentation"
                              >
                                <tbody>
                                  <tr>
                                    <td style={{ width: "64px" }}>
                                      <img
                                        alt=""
                                        src={avatarSrc}
                                        style={{
                                          borderRadius: "9999px",
                                          maxWidth: "100%",
                                          verticalAlign: "middle",
                                        }}
                                        width={64}
                                      />
                                    </td>
                                    <td style={{ width: "12px" }}>&zwj;</td>
                                    <td>
                                      <p
                                        style={{
                                          color: "#030712",
                                          fontFamily,
                                          fontSize: "16px",
                                          fontWeight: 600,
                                          lineHeight: "24px",
                                          margin: 0,
                                        }}
                                      >
                                        {author}, <br />{" "}
                                        <span style={{ color: "#4b5563" }}>
                                          {role}
                                        </span>
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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

export const FullWidthTestimonial = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthTestimonialProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlPreview>Customer testimonial</MjmlPreview>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FullWidthTestimonialSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthTestimonial.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonialProps;
