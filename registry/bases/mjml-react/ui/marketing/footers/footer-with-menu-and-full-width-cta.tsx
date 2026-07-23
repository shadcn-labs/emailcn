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

export interface FooterWithMenuAndFullWidthCtaProps {
  theme?: EmailThemeTokens;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  ctaHref?: string;
  ctaText?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-full-cta-break { display: none !important; } }";

const links = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const Divider = ({ color }: { color: string }) => (
  <div
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </div>
);

export const FooterWithMenuAndFullWidthCtaSection = ({
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  ctaHref = "https://example.com/contact",
  ctaText = "Got questions? We're here to help.",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithMenuAndFullWidthCtaProps, "theme">) => (
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
                  >
                    <tbody>
                      <tr>
                        {links.map(([label, href], index) => (
                          <td
                            key={href}
                            style={
                              index < links.length - 1
                                ? { paddingRight: "24px" }
                                : undefined
                            }
                          >
                            <a
                              href={href}
                              style={{
                                color: textColor,
                                fontFamily,
                                fontSize: "14px",
                                fontWeight: 500,
                                lineHeight: "20px",
                                textDecoration: "none",
                              }}
                            >
                              {label}
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <Divider color={dividerColor} />
                  <div>
                    <a
                      href={ctaHref}
                      style={{
                        color: textColor,
                        display: "block",
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        textDecoration: "none",
                      }}
                    >
                      <span>{ctaText}</span>
                      <img
                        alt="→"
                        src="https://assets.mailviews.com/images/components/icon-chevron-right.png"
                        style={{
                          float: "right",
                          maxWidth: "100%",
                          verticalAlign: "middle",
                        }}
                        width={20}
                      />
                    </a>
                  </div>
                  <Divider color={dividerColor} />
                  <table
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        {socials.map(([label, href, icon], index) => (
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
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <p
                    style={{
                      color: subduedTextColor,
                      fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                    }}
                  >
                    © 2026 Mailviews. All rights reserved.
                  </p>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <p
                    style={{
                      color: mutedTextColor,
                      fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                    }}
                  >
                    You're receiving this because you subscribed to updates.{" "}
                    <br className="footer-full-cta-break" /> No longer want to
                    receive emails?{" "}
                    <a
                      href={unsubscribeHref}
                      style={{
                        color: mutedTextColor,
                        textDecoration: "underline",
                      }}
                    >
                      Unsubscribe
                    </a>
                  </p>
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

export const FooterWithMenuAndFullWidthCta = ({
  theme: _theme = defaultTheme,
  ...props
}: FooterWithMenuAndFullWidthCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer with menu and full-width CTA</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={props.pageBackgroundColor ?? "#f1f5f9"}
      width={600}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FooterWithMenuAndFullWidthCtaSection {...props} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterWithMenuAndFullWidthCta.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithMenuAndFullWidthCtaProps;
