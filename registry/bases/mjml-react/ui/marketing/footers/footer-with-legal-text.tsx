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
/* eslint-disable next/no-img-element */
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface LegalFooterLink {
  href: string;
  label: string;
}

export interface LegalFooterSocial extends LegalFooterLink {
  iconSrc: string;
}

export interface FooterWithLegalTextProps {
  theme?: EmailThemeTokens;
  legalText?: string;
  links?: LegalFooterLink[];
  socials?: LegalFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  copyrightColor?: string;
  mutedTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-legal-break { display: none !important; } }";

const defaults = {
  backgroundColor: "#fffffe",
  copyrightColor: "#9ca3af",
  dividerColor: "#d1d5db",
  legalText:
    "The information provided in this email is for general informational purposes only. It is not intended as professional advice and should not be considered as a substitute for consulting with qualified professionals. The author/publisher makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information contained herein. Any reliance you place on such information is strictly at your own risk.\n\nIn no event will the author/publisher be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this information.\n\nThrough this email, you are able to link to other websites that are not under the control of the author/publisher. The author/publisher has no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://assets.mailviews.com/images/components/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://assets.mailviews.com/images/components/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWithLegalTextProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const Divider = ({ color, margin }: { color: string; margin: string }) => (
  <div
    style={{ backgroundColor: color, height: "1px", lineHeight: "1px", margin }}
  >
    &zwj;
  </div>
);

export const FooterWithLegalTextSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
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
                    <Divider color={resolved.dividerColor} margin="0 0 36px" />
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          {resolved.links.map((link, index) => (
                            <td
                              key={link.href}
                              style={
                                index === resolved.links.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <a
                                href={link.href}
                                style={{
                                  color: resolved.textColor,
                                  fontFamily,
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  textDecoration: "none",
                                }}
                              >
                                {link.label}
                              </a>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                    <div style={{ lineHeight: "36px" }}>&zwj;</div>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                    >
                      <tbody>
                        <tr>
                          {resolved.socials.map((social, index) => (
                            <td
                              key={social.href}
                              style={
                                index === resolved.socials.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <a href={social.href}>
                                <img
                                  alt={social.label}
                                  src={social.iconSrc}
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
                    <Divider
                      color={resolved.dividerColor}
                      margin="36px 0 24px"
                    />
                    <div style={{ margin: "24px 0" }}>
                      <p
                        style={{
                          color: resolved.textColor,
                          fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                        }}
                      >
                        {resolved.legalText
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <Fragment key={paragraph}>
                              {index > 0 ? (
                                <>
                                  <br />
                                  <br />
                                </>
                              ) : null}
                              {paragraph}
                            </Fragment>
                          ))}
                      </p>
                    </div>
                    <p
                      style={{
                        color: resolved.copyrightColor,
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
                        color: resolved.mutedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-legal-break" /> No longer want to
                      receive emails?{" "}
                      <a
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
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
};

export const FooterWithLegalText = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterWithLegalTextProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer with legal text</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FooterWithLegalTextSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterWithLegalText.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithLegalTextProps;
