import {
  Body,
  Head,
  Html,
  Preview,
  Column,
  Text,
  Link,
  Section,
  Row,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
  <Column
    style={{
      paddingRight: heading === "Quick Links" ? "64px" : 0,
      verticalAlign: "top",
    }}
  >
    <Text
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
    </Text>
    {links.map(([label, href]) => (
      <Text key={href} style={{ margin: "0 0 8px" }}>
        <Link
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
        </Link>
      </Text>
    ))}
  </Column>
);

export const FooterWith2ColumnMenuAndDividerSection = ({
  variant = "left-logo",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
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
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        <Column style={{ verticalAlign: "top" }}>
                          <Section>
                            <Fragment>
                              <Row>
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
                              </Row>
                            </Fragment>
                          </Section>
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Section
                            style={{
                              backgroundColor: dividerColor,
                              height: "1px",
                              lineHeight: "1px",
                              margin: "24px 0",
                            }}
                          >
                            &zwj;
                          </Section>
                        </Column>
                      </Row>
                      <Row>
                        <Column
                          style={{
                            textAlign:
                              variant === "right-logo" ? "right" : "left",
                          }}
                        >
                          <Link href={logoHref}>
                            <Img
                              alt={logoAlt}
                              src={logoSrc}
                              style={{
                                maxWidth: "100%",
                                verticalAlign: "middle",
                              }}
                              width={64}
                            />
                          </Link>
                        </Column>
                      </Row>
                      <Row>
                        <Column style={{ lineHeight: "24px" }}>&zwj;</Column>
                      </Row>
                      <Row>
                        <Column>
                          <Section
                            style={{ tableLayout: "fixed" }}
                            width="100%"
                          >
                            <Fragment>
                              <Row>
                                <Column className="footer-divider-legal">
                                  <Text
                                    style={{
                                      color: legalColor,
                                      fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    © 2026 emailcn. All rights reserved.
                                  </Text>
                                  <Text
                                    style={{
                                      color: legalColor,
                                      fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    No longer want to receive emails?{" "}
                                    <Link
                                      href={unsubscribeHref}
                                      style={{
                                        color: legalColor,
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Unsubscribe
                                    </Link>
                                  </Text>
                                </Column>
                                <Column
                                  className="footer-divider-social-cell"
                                  style={{
                                    paddingLeft: "44px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <Section
                                    align="right"
                                    className="footer-divider-socials"
                                    style={{
                                      float: "right",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <Fragment>
                                      <Row>
                                        {socials.map(
                                          ([label, href, icon], index) => (
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
                                          )
                                        )}
                                      </Row>
                                    </Fragment>
                                  </Section>
                                </Column>
                              </Row>
                            </Fragment>
                          </Section>
                        </Column>
                      </Row>
                    </Fragment>
                  </Section>
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

export const FooterWith2ColumnMenuAndDivider = ({
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWith2ColumnMenuAndDividerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with two-column menu and divider</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWith2ColumnMenuAndDividerSection {...props} variant={variant} />
    </Body>
  </Html>
);

FooterWith2ColumnMenuAndDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith2ColumnMenuAndDividerProps;
