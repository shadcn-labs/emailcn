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
import { Fragment } from "react";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FooterWithCompanyLocationsVariant = "stacked" | "grid";

export interface CompanyLocation {
  address: string;
  name: string;
}

export interface FooterWithCompanyLocationsProps {
  theme?: EmailThemeTokens;
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
  <div
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
      ...style,
    }}
  >
    &zwj;
  </div>
);

const SocialLinks = () => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        {socials.map(([label, href, icon], index) => (
          <td
            key={label}
            style={
              index < socials.length - 1 ? { paddingRight: "24px" } : undefined
            }
          >
            <a href={href}>
              <img
                alt={label}
                src={`https://emailcn.vercel.app/api/email-assets/${icon}`}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width={20}
              />
            </a>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
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
                    <div style={{ textAlign: "center" }}>
                      <a href={logoHref}>
                        <img
                          alt={logoAlt}
                          src={logoSrc}
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
                          width={64}
                        />
                      </a>
                    </div>
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
                          {menu.map((link, index) => (
                            <td
                              key={link.href}
                              style={
                                index < menu.length - 1
                                  ? { paddingRight: "24px" }
                                  : undefined
                              }
                            >
                              <a
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
                              </a>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                    <Divider color={dividerColor} />
                    {variant === "stacked" ? (
                      <div style={{ margin: "24px 0", textAlign: "center" }}>
                        <p
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
                        </p>
                        {items.map((location) => (
                          <div
                            key={location.name}
                            style={{
                              color: textColor,
                              fontFamily,
                              fontSize: "16px",
                              lineHeight: "24px",
                              textAlign: "center",
                            }}
                          >
                            <div style={{ lineHeight: "44px" }}>&zwj;</div>
                            <p
                              style={{
                                color: strongTextColor,
                                fontWeight: 600,
                                margin: 0,
                              }}
                            >
                              {location.name}
                            </p>
                            <p style={{ margin: 0 }}>
                              <LineBreaks text={location.address} />
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ margin: "24px 0", textAlign: "left" }}>
                        <p
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
                        </p>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          role="presentation"
                          style={{ tableLayout: "fixed" }}
                          width="100%"
                        >
                          <tbody>
                            {[0, 2].map((start, rowIndex) => (
                              <tr key={start}>
                                {[start, start + 1].map(
                                  (itemIndex, columnIndex) => {
                                    const location = items[itemIndex];
                                    return (
                                      <Fragment
                                        key={location?.name ?? itemIndex}
                                      >
                                        {columnIndex > 0 ? (
                                          <td
                                            className="footer-locations-grid-gap"
                                            style={{ width: "44px" }}
                                          >
                                            &zwj;
                                          </td>
                                        ) : null}
                                        <td
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
                                              <p
                                                style={{
                                                  color: strongTextColor,
                                                  fontWeight: 600,
                                                  margin: "0 0 16px",
                                                }}
                                              >
                                                {location.name}
                                              </p>
                                              <p style={{ margin: 0 }}>
                                                <LineBreaks
                                                  text={location.address}
                                                />
                                              </p>
                                            </>
                                          ) : null}
                                        </td>
                                      </Fragment>
                                    );
                                  }
                                )}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
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
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <p
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
                    </p>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <p
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
};

export const FooterWithCompanyLocations = ({
  theme: _theme = defaultTheme,
  variant = "stacked",
  ...props
}: FooterWithCompanyLocationsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer with company locations</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={props.pageBackgroundColor ?? "#f1f5f9"}
      width={600}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FooterWithCompanyLocationsSection {...props} variant={variant} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterWithCompanyLocations.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies FooterWithCompanyLocationsProps;
