/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithAppStoreButtonsVariant =
  | "centered"
  | "two-columns"
  | "with-title";

export interface FooterWithAppStoreButtonsProps {
  theme?: TailwindConfig;
  variant?: FooterWithAppStoreButtonsVariant;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-app-column { display: block !important; width: 100% !important; }",
  "  .footer-app-column-gap { line-height: 44px !important; }",
  "  .footer-app-break { display: none !important; }",
  "}",
].join("\n");

const AppButtons = ({ centered = true }: { centered?: boolean }) => (
  <table
    align={centered ? "center" : undefined}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={centered ? { marginLeft: "auto", marginRight: "auto" } : undefined}
  >
    <tbody>
      <tr>
        <td>
          <a href="https://www.apple.com/app-store/">
            <img
              alt="Download on the App Store"
              src="https://assets.mailviews.com/images/components/badge-app-store.png"
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              width={120}
            />
          </a>
        </td>
        <td style={{ width: "24px" }}>&zwj;</td>
        <td>
          <a href="https://play.google.com/store/apps">
            <img
              alt="Get it on Google Play"
              src="https://assets.mailviews.com/images/components/badge-google-play.png"
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              width={135}
            />
          </a>
        </td>
      </tr>
    </tbody>
  </table>
);

const AddressAndLegal = ({
  align,
  mutedTextColor,
  textColor,
  unsubscribeHref,
}: {
  align: "center" | "left";
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <div style={{ textAlign: align }}>
    <p
      style={{
        color: textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 Mailviews
      <br /> Mailviews&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505
      Paris
    </p>
    <div style={{ lineHeight: "44px" }}>&zwj;</div>
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
      <br className="footer-app-break" /> No longer want to receive emails?{" "}
      <a
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </a>
    </p>
  </div>
);

export const FooterWithAppStoreButtonsSection = ({
  variant = "centered",
  title = "Get the app",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  textColor = "#6b7280",
  headingColor = "#030712",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithAppStoreButtonsProps, "theme">) => (
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
                <td style={{ padding: "0 24px" }}>
                  {variant === "two-columns" ? (
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
                            className="footer-app-column"
                            style={{
                              textAlign: "left",
                              verticalAlign: "top",
                              width: "50%",
                            }}
                          >
                            <p
                              style={{
                                color: headingColor,
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "24px",
                                margin: 0,
                              }}
                            >
                              {title}
                            </p>
                            <div style={{ lineHeight: "24px" }}>&zwj;</div>
                            <AppButtons centered={false} />
                          </td>
                          <td
                            className="footer-app-column footer-app-column-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </td>
                          <td
                            className="footer-app-column"
                            style={{ verticalAlign: "top", width: "50%" }}
                          >
                            <AddressAndLegal
                              align="left"
                              mutedTextColor={mutedTextColor}
                              textColor={textColor}
                              unsubscribeHref={unsubscribeHref}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <div style={{ textAlign: "center" }}>
                      <p
                        style={{
                          color: headingColor,
                          fontFamily,
                          fontSize: variant === "with-title" ? "30px" : "16px",
                          fontWeight: variant === "with-title" ? 500 : 600,
                          lineHeight:
                            variant === "with-title" ? "36px" : "24px",
                          margin: 0,
                        }}
                      >
                        {title}
                      </p>
                      <div style={{ lineHeight: "24px" }}>&zwj;</div>
                      <AppButtons />
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      <AddressAndLegal
                        align="center"
                        mutedTextColor={mutedTextColor}
                        textColor={textColor}
                        unsubscribeHref={unsubscribeHref}
                      />
                    </div>
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

export const FooterWithAppStoreButtons = ({
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: FooterWithAppStoreButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with app-store buttons</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithAppStoreButtonsSection {...props} variant={variant} />
    </Body>
  </Html>
);

FooterWithAppStoreButtons.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies FooterWithAppStoreButtonsProps;
