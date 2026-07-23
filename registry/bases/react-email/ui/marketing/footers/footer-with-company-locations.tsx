import { Fragment } from "react";
import type { CSSProperties } from "react";
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

export type FooterWithCompanyLocationsVariant = "stacked" | "grid";

export interface CompanyLocation {
  address: string;
  name: string;
}

export interface FooterWithCompanyLocationsProps {
  theme?: TailwindConfig;
  variant?: FooterWithCompanyLocationsVariant;
  locations?: CompanyLocation[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  strongTextColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-locations-grid-cell { display: block !important; width: 100% !important; }",
  "  .footer-locations-grid-gap { display: none !important; }",
  "  .footer-locations-grid-cell-spaced { padding-bottom: 44px !important; }",
  "  .footer-locations-break { display: none !important; }",
  "}",
].join("\n");

const stackedLocations: CompanyLocation[] = [
  {
    address: "Gas Company Tower\n555 W 5th St, Los Angeles, CA 90013",
    name: "Downtown Los Angeles, CA",
  },
  {
    address: "One World Trade Center\n285 Fulton St, New York, NY 10007",
    name: "Downtown New York, NY",
  },
  {
    address:
      "Willis Tower (formerly Sears Tower)\n233 S Wacker Dr, Chicago, IL 60606",
    name: "Downtown Chicago, IL",
  },
];

const gridLocations: CompanyLocation[] = [
  ...stackedLocations,
  {
    address: "Salesforce Tower\n415 Mission St, San Francisco, CA 94105",
    name: "Downtown San Francisco, CA",
  },
];

const menu = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const LineBreaks = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`}>
        {index > 0 ? <br /> : null}
        {line}
      </span>
    ))}
  </>
);

const Divider = ({
  color,
  style,
}: {
  color: string;
  style?: CSSProperties;
}) => (
  <Section
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
      ...style,
    }}
  >
    &zwj;
  </Section>
);

const SocialLinks = () => (
  <Section>
    <Fragment>
      <Row>
        {socials.map(([label, href, icon], index) => (
          <Column
            key={label}
            style={
              index < socials.length - 1 ? { paddingRight: "24px" } : undefined
            }
          >
            <Link href={href}>
              <Img
                alt={label}
                src={`https://emailcn.vercel.app/api/email-assets/${icon}`}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width={20}
              />
            </Link>
          </Column>
        ))}
      </Row>
    </Fragment>
  </Section>
);

export const FooterWithCompanyLocationsSection = ({
  variant = "stacked",
  locations,
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  strongTextColor = "#030712",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithCompanyLocationsProps, "theme">) => {
  const items =
    locations ?? (variant === "grid" ? gridLocations : stackedLocations);

  return (
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
                  <Column style={{ padding: "0 24px" }}>
                    <Section style={{ textAlign: "center" }}>
                      <Link href={logoHref}>
                        <Img
                          alt={logoAlt}
                          src={logoSrc}
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
                          width={64}
                        />
                      </Link>
                    </Section>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Section
                      align="center"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {menu.map((link, index) => (
                            <Column
                              key={link.href}
                              style={
                                index < menu.length - 1
                                  ? { paddingRight: "24px" }
                                  : undefined
                              }
                            >
                              <Link
                                href={link.href}
                                style={{
                                  color: textColor,
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
                    <Divider color={dividerColor} />
                    {variant === "stacked" ? (
                      <Section
                        style={{ margin: "24px 0", textAlign: "center" }}
                      >
                        <Text
                          style={{
                            color: strongTextColor,
                            fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                          }}
                        >
                          Locations
                        </Text>
                        {items.map((location) => (
                          <Section
                            key={location.name}
                            style={{
                              color: textColor,
                              fontFamily,
                              fontSize: "16px",
                              lineHeight: "24px",
                              textAlign: "center",
                            }}
                          >
                            <Section style={{ lineHeight: "44px" }}>
                              &zwj;
                            </Section>
                            <Text
                              style={{
                                color: strongTextColor,
                                fontWeight: 600,
                                margin: 0,
                              }}
                            >
                              {location.name}
                            </Text>
                            <Text style={{ margin: 0 }}>
                              <LineBreaks text={location.address} />
                            </Text>
                          </Section>
                        ))}
                      </Section>
                    ) : (
                      <Section style={{ margin: "24px 0", textAlign: "left" }}>
                        <Text
                          style={{
                            color: strongTextColor,
                            fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: "44px 0",
                          }}
                        >
                          Locations
                        </Text>
                        <Section style={{ tableLayout: "fixed" }} width="100%">
                          <Fragment>
                            {[0, 2].map((start, rowIndex) => (
                              <Row key={start}>
                                {[start, start + 1].map(
                                  (itemIndex, columnIndex) => {
                                    const location = items[itemIndex];
                                    return (
                                      <Fragment
                                        key={location?.name ?? itemIndex}
                                      >
                                        {columnIndex > 0 ? (
                                          <Column
                                            className="footer-locations-grid-gap"
                                            style={{ width: "44px" }}
                                          >
                                            &zwj;
                                          </Column>
                                        ) : null}
                                        <Column
                                          className={`footer-locations-grid-cell ${rowIndex === 0 ? "footer-locations-grid-cell-spaced" : ""}`}
                                          style={{
                                            color: textColor,
                                            fontFamily,
                                            fontSize: "16px",
                                            lineHeight: "24px",
                                            verticalAlign: "top",
                                            width: "50%",
                                          }}
                                        >
                                          {location ? (
                                            <>
                                              <Text
                                                style={{
                                                  color: strongTextColor,
                                                  fontWeight: 600,
                                                  margin: "0 0 16px",
                                                }}
                                              >
                                                {location.name}
                                              </Text>
                                              <Text style={{ margin: 0 }}>
                                                <LineBreaks
                                                  text={location.address}
                                                />
                                              </Text>
                                            </>
                                          ) : null}
                                        </Column>
                                      </Fragment>
                                    );
                                  }
                                )}
                              </Row>
                            ))}
                          </Fragment>
                        </Section>
                      </Section>
                    )}
                    <Divider
                      color={dividerColor}
                      style={
                        variant === "grid"
                          ? { margin: "44px 0 24px" }
                          : undefined
                      }
                    />
                    <SocialLinks />
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: subduedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: variant === "stacked" ? "center" : "left",
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
                        textAlign: variant === "stacked" ? "center" : "left",
                      }}
                    >
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-locations-break" /> No longer want
                      to receive emails?{" "}
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
};

export const FooterWithCompanyLocations = ({
  theme: _theme = defaultTheme,
  variant = "stacked",
  ...props
}: FooterWithCompanyLocationsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with company locations</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithCompanyLocationsSection {...props} variant={variant} />
    </Body>
  </Html>
);

FooterWithCompanyLocations.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies FooterWithCompanyLocationsProps;
