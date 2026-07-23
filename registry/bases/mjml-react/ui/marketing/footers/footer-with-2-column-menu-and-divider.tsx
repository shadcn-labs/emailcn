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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterWith2ColumnMenuAndDividerVariant = "left-logo" | "right-logo";

export interface FooterWith2ColumnMenuAndDividerProps {
  theme?: EmailThemeTokens;
  variant?: FooterWith2ColumnMenuAndDividerVariant;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  headingColor?: string;
  legalColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-divider-socials { float: none !important; margin-bottom: 44px !important; margin-left: 0 !important; }",
  "  .footer-divider-legal { display: table-footer-group !important; }",
  "  .footer-divider-social-cell { display: table-header-group !important; }",
  "}",
].join("\n");

const quickLinks = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const legalLinks = [
  ["Privacy Policy", "https://example.com/privacy"],
  ["Terms of Service", "https://example.com/terms"],
  ["Returns", "https://example.com/returns"],
] as const;

const socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const LinkColumn = ({
  heading,
  links,
  headingColor,
  textColor,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
  headingColor: string;
  textColor: string;
}) => (
  <td
    style={{
      paddingRight: heading === "Quick Links" ? "64px" : 0,
      verticalAlign: "top",
    }}
  >
    <p
      style={{
        color: headingColor,
        fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: "0 0 10px",
      }}
    >
      {heading}
    </p>
    {links.map(([label, href]) => (
      <p key={href} style={{ margin: "0 0 8px" }}>
        <a
          href={href}
          style={{
            color: textColor,
            fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            textDecoration: "none",
          }}
        >
          {label}
        </a>
      </p>
    ))}
  </td>
);

export const FooterWith2ColumnMenuAndDividerSection = ({
  variant = "left-logo",
  logoSrc = "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  headingColor = "#030712",
  legalColor = "#9ca3af",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWith2ColumnMenuAndDividerProps, "theme">) => (
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
            padding: "44px 0 24px",
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
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td style={{ verticalAlign: "top" }}>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                          >
                            <tbody>
                              <tr>
                                <LinkColumn
                                  heading="Quick Links"
                                  headingColor={headingColor}
                                  links={quickLinks}
                                  textColor={textColor}
                                />
                                <LinkColumn
                                  heading="Legal"
                                  headingColor={headingColor}
                                  links={legalLinks}
                                  textColor={textColor}
                                />
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div
                            style={{
                              backgroundColor: dividerColor,
                              height: "1px",
                              lineHeight: "1px",
                              margin: "24px 0",
                            }}
                          >
                            &zwj;
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            textAlign:
                              variant === "right-logo" ? "right" : "left",
                          }}
                        >
                          <a href={logoHref}>
                            <img
                              alt={logoAlt}
                              src={logoSrc}
                              style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                              }}
                              width={64}
                            />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ lineHeight: "24px" }}>&zwj;</td>
                      </tr>
                      <tr>
                        <td>
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                            style={{ tableLayout: "fixed" }}
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td className="footer-divider-legal">
                                  <p
                                    style={{
                                      color: legalColor,
                                      fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    © 2026 Mailviews. All rights reserved.
                                  </p>
                                  <p
                                    style={{
                                      color: legalColor,
                                      fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    No longer want to receive emails?{" "}
                                    <a
                                      href={unsubscribeHref}
                                      style={{
                                        color: legalColor,
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Unsubscribe
                                    </a>
                                  </p>
                                </td>
                                <td
                                  className="footer-divider-social-cell"
                                  style={{
                                    paddingLeft: "44px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <table
                                    align="right"
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    className="footer-divider-socials"
                                    role="presentation"
                                    style={{
                                      float: "right",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <tbody>
                                      <tr>
                                        {socials.map(
                                          ([label, href, icon], index) => (
                                            <td
                                              key={label}
                                              style={
                                                index < socials.length - 1
                                                  ? { paddingRight: "24px" }
                                                  : undefined
                                              }
                                            >
                                              <a href={href}>
                                                <img
                                                  alt={label}
                                                  src={`https://assets.mailviews.com/images/components/${icon}`}
                                                  style={{
                                                    maxWidth: "100%",
                                                    verticalAlign: "middle",
                                                  }}
                                                  width={20}
                                                />
                                              </a>
                                            </td>
                                          )
                                        )}
                                      </tr>
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
              </tr>
            </tbody>
          </table>
        </td>
        <td>&zwj;</td>
      </tr>
    </tbody>
  </table>
);

export const FooterWith2ColumnMenuAndDivider = ({
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWith2ColumnMenuAndDividerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer with two-column menu and divider</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={props.pageBackgroundColor ?? "#f1f5f9"}
      width={600}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FooterWith2ColumnMenuAndDividerSection
            {...props}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterWith2ColumnMenuAndDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith2ColumnMenuAndDividerProps;
