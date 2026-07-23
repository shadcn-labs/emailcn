import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface LegalFooterLink {
  href: string;
  label: string;
}

export interface LegalFooterSocial extends LegalFooterLink {
  iconSrc: string;
}

export interface FooterWithLegalTextProps {
  theme?: TailwindConfig;
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
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWithLegalTextProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const Divider = ({ color, margin }: { color: string; margin: string }) => (
  <Section
    style={{ backgroundColor: color, height: "1px", lineHeight: "1px", margin }}
  >
    &zwj;
  </Section>
);

export const FooterWithLegalTextSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              padding: "44px 0 24px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Divider color={resolved.dividerColor} margin="0 0 36px" />
                    <Section>
                      <Fragment>
                        <Row>
                          {resolved.links.map((link, index) => (
                            <Column
                              key={link.href}
                              style={
                                index === resolved.links.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <Link
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
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                    <Section>
                      <Fragment>
                        <Row>
                          {resolved.socials.map((social, index) => (
                            <Column
                              key={social.href}
                              style={
                                index === resolved.socials.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <Link href={social.href}>
                                <Img
                                  alt={social.label}
                                  src={social.iconSrc}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={20}
                                />
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Divider
                      color={resolved.dividerColor}
                      margin="36px 0 24px"
                    />
                    <Section style={{ margin: "24px 0" }}>
                      <Text
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
                      </Text>
                    </Section>
                    <Text
                      style={{
                        color: resolved.copyrightColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn. All rights reserved.
                    </Text>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
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
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        Unsubscribe
                      </Link>
                    </Text>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const FooterWithLegalText = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: FooterWithLegalTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with legal text</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWithLegalTextSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

FooterWithLegalText.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithLegalTextProps;
