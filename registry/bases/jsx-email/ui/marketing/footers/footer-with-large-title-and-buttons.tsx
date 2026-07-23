/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface FooterWithLargeTitleAndButtonsProps {
  theme?: EmailThemeTokens;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  dividerColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-large-button-cell { display: block !important; margin-left: auto !important; margin-right: auto !important; max-width: 260px !important; width: 100% !important; }",
  "  .footer-large-button-gap { display: block !important; line-height: 24px !important; }",
  "  .footer-large-break { display: none !important; }",
  "}",
].join("\n");

export const FooterWithLargeTitleAndButtonsSection = ({
  title = "Start sending professionally\ndesigned emails today",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  dividerColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithLargeTitleAndButtonsProps, "theme">) => (
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
                <td style={{ padding: "0 24px", textAlign: "center" }}>
                  <a href="https://example.com">
                    <img
                      alt="Maizzle"
                      src="https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={64}
                    />
                  </a>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <p
                    style={{
                      color: "#030712",
                      fontFamily,
                      fontSize: "30px",
                      fontWeight: 500,
                      lineHeight: "36px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {title.split("\n").map((line, index) => (
                      <span key={line}>
                        {index > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </p>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <table
                    align="center"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <tbody>
                      <tr>
                        <td
                          className="footer-large-button-cell"
                          style={{ width: "188px" }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <a
                              href="https://example.com/shop"
                              style={{
                                backgroundColor: primaryColor,
                                borderRadius: "8px",
                                color: "#f8fafc",
                                display: "block",
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: 1,
                                padding: "16px 24px",
                                textAlign: "center",
                                textDecoration: "none",
                              }}
                            >
                              Shop with us
                            </a>
                          </div>
                        </td>
                        <td
                          className="footer-large-button-gap"
                          style={{ width: "16px" }}
                        >
                          &zwj;
                        </td>
                        <td
                          className="footer-large-button-cell"
                          style={{ width: "188px" }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <a
                              href="https://example.com/follow"
                              style={{
                                backgroundColor,
                                border: `1px solid ${dividerColor}`,
                                borderRadius: "8px",
                                color: "#4b5563",
                                display: "block",
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: 1,
                                padding: "16px 24px",
                                textAlign: "center",
                                textDecoration: "none",
                              }}
                            >
                              Follow us
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ lineHeight: "96px" }}>&zwj;</div>
                  <p
                    style={{
                      color: textColor,
                      fontFamily,
                      fontSize: "18px",
                      lineHeight: "28px",
                      margin: "1em 0",
                      textAlign: "center",
                    }}
                  >
                    If you have any questions or need assistance{" "}
                    <br className="footer-large-break" />
                    please reply to this email.
                  </p>
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
                  <p
                    style={{
                      color: mutedTextColor,
                      fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    © 2026 emailcn. All rights reserved.
                  </p>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <p
                    style={{
                      color: mutedTextColor,
                      fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    You're receiving this because you subscribed to updates.{" "}
                    <br className="footer-large-break" /> No longer want to
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

export const FooterWithLargeTitleAndButtons = ({
  theme: _theme = defaultTheme,
  ...props
}: FooterWithLargeTitleAndButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with large title and buttons</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithLargeTitleAndButtonsSection {...props} />
    </Body>
  </Html>
);

FooterWithLargeTitleAndButtons.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithLargeTitleAndButtonsProps;
