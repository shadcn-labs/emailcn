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

export interface FooterWithMenuAndFullWidthCtaProps {
  theme?: TailwindConfig;
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
  <Section
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </Section>
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
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor,
            maxWidth: "100%",
            padding: "44px 0 24px",
            width: "600px",
          }}
        >
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ padding: "0 24px", textAlign: "left" }}>
                  <Section>
                    <Fragment>
                      <Row>
                        {links.map(([label, href], index) => (
                          <Column
                            key={href}
                            style={
                              index < links.length - 1
                                ? { paddingRight: "24px" }
                                : undefined
                            }
                          >
                            <Link
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
                            </Link>
                          </Column>
                        ))}
                      </Row>
                    </Fragment>
                  </Section>
                  <Divider color={dividerColor} />
                  <Section>
                    <Link
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
                      <Img
                        alt="→"
                        src="https://emailcn.vercel.app/api/email-assets/icon-chevron-right.png"
                        style={{
                          float: "right",
                          maxWidth: "100%",
                          verticalAlign: "middle",
                        }}
                        width={20}
                      />
                    </Link>
                  </Section>
                  <Divider color={dividerColor} />
                  <Section>
                    <Fragment>
                      <Row>
                        {socials.map(([label, href, icon], index) => (
                          <Column
                            key={label}
                            style={
                              index < socials.length - 1
                                ? { paddingRight: "24px" }
                                : undefined
                            }
                          >
                            <Link href={href}>
                              <Img
                                alt={label}
                                src={`https://emailcn.vercel.app/api/email-assets/${icon}`}
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
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: subduedTextColor,
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
                    <Link
                      href={unsubscribeHref}
                      style={{
                        color: mutedTextColor,
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

export const FooterWithMenuAndFullWidthCta = ({
  theme: _theme = defaultTheme,
  ...props
}: FooterWithMenuAndFullWidthCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with menu and full-width CTA</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithMenuAndFullWidthCtaSection {...props} />
    </Body>
  </Html>
);

FooterWithMenuAndFullWidthCta.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterWithMenuAndFullWidthCtaProps;
