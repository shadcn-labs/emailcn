/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithOverlappedCtaVariant =
  | "content"
  | "2-column-menu"
  | "3-column-menu"
  | "centered-content"
  | "centered-menu"
  | "address"
  | "centered-socials";

export type FooterOverlappedLogoPosition = "left" | "right";

export interface FooterWithOverlappedCtaProps {
  theme?: EmailThemeTokens;
  variant?: FooterWithOverlappedCtaVariant;
  logoPosition?: FooterOverlappedLogoPosition;
  backgroundImageSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-overlap-column { display: block !important; width: 100% !important; }",
  "  .footer-overlap-column-right { float: none !important; margin-left: 0 !important; padding-top: 24px !important; text-align: left !important; }",
  "  .footer-overlap-break { display: none !important; }",
  "  .footer-overlap-hero { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

const copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";

const quickLinks = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const connectLinks = [
  ["Facebook", "https://facebook.com"],
  ["GitHub", "https://github.com"],
  ["LinkedIn", "https://linkedin.com"],
  ["YouTube", "https://youtube.com"],
] as const;

const legalLinks = [
  ["Privacy Policy", "https://example.com/privacy"],
  ["Terms of Service", "https://example.com/terms"],
  ["Returns", "https://example.com/returns"],
] as const;

const socialIcons = [
  ["Facebook", "https://facebook.com", "facebook"],
  ["GitHub", "https://github.com", "github"],
  ["LinkedIn", "https://linkedin.com", "linkedin"],
  ["YouTube", "https://youtube.com", "youtube"],
  ["X", "https://x.com", "x"],
] as const;

const Logo = ({ logoSrc, width = 64 }: { logoSrc: string; width?: number }) => (
  <a href="https://example.com">
    <img
      alt="Maizzle"
      src={logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={width}
    />
  </a>
);

const LinkColumn = ({
  heading,
  links,
  textColor,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
  textColor: string;
}) => (
  <td style={{ padding: "0 24px", textAlign: "left", verticalAlign: "top" }}>
    <p
      style={{
        color: "#030712",
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
            display: "block",
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

const Socials = () => (
  <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
    <tbody>
      <tr>
        {socialIcons.map(([label, href, icon], index) => (
          <td
            key={label}
            style={
              index < socialIcons.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <a href={href}>
              <img
                alt={label}
                src={`https://assets.mailviews.com/images/components/icon-${icon}.png`}
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

const ShortLegal = ({
  centered = false,
  textColor,
  unsubscribeHref,
}: {
  centered?: boolean;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <p
    style={{
      color: textColor,
      fontFamily,
      fontSize: "16px",
      lineHeight: "24px",
      margin: 0,
      textAlign: centered ? "center" : "left",
    }}
  >
    © 2026 Mailviews. No longer want to receive emails?{" "}
    <a
      href={unsubscribeHref}
      style={{ color: textColor, textDecoration: "underline" }}
    >
      Unsubscribe
    </a>
  </p>
);

const AddressLegal = ({
  centered = true,
  mutedTextColor,
  textColor,
  unsubscribeHref,
}: {
  centered?: boolean;
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <div style={{ textAlign: centered ? "center" : "left" }}>
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
      <br />
      Mailviews&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505 Paris
    </p>
    <div style={{ lineHeight: "36px" }}>&zwj;</div>
    <p
      style={{
        color: mutedTextColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      We're sending you this because you subscribed.{" "}
      <br className="footer-overlap-break" /> No longer want to receive emails?{" "}
      <a
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </a>
    </p>
  </div>
);

const OverlappedHero = ({
  backgroundImageSrc,
  primaryColor,
}: {
  backgroundImageSrc: string;
  primaryColor: string;
}) => (
  <>
    <div style={{ lineHeight: "24px" }}>&zwj;</div>
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
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
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
                  <td
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td
            style={{
              backgroundColor: "#fffffe",
              borderRadius: "12px 12px 0 0",
            }}
          >
            <div
              style={{
                backgroundImage: `url('${backgroundImageSrc}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "12px",
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
                    <td
                      className="footer-overlap-hero"
                      style={{ padding: "0 44px", textAlign: "center" }}
                    >
                      <div style={{ lineHeight: "124px" }}>&zwj;</div>
                      <p
                        style={{
                          color: "#fffffe",
                          fontFamily,
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "32px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        Start sending professionally{" "}
                        <br className="footer-overlap-break" />
                        designed emails today
                      </p>
                      <div style={{ lineHeight: "24px" }}>&zwj;</div>
                      <p
                        style={{
                          color: "#d1d5db",
                          fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {copy}
                      </p>
                      <div style={{ lineHeight: "24px" }}>&zwj;</div>
                      <a
                        href="https://example.com"
                        style={{
                          backgroundColor: primaryColor,
                          borderRadius: "8px",
                          color: "#fffffe",
                          display: "inline-block",
                          fontFamily,
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: 1,
                          padding: "14px 20px",
                          textDecoration: "none",
                        }}
                      >
                        Visit website&nbsp;&nbsp;
                        <img
                          alt=""
                          src="https://assets.mailviews.com/images/components/icon-arrow-right.png"
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width={12}
                        />
                      </a>
                      <div style={{ lineHeight: "124px" }}>&zwj;</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </td>
          <td
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
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
                  <td
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </>
);

const SideLayout = ({
  columns,
  logoPosition,
  logoSrc,
  textColor,
}: {
  columns: 1 | 2 | 3;
  logoPosition: FooterOverlappedLogoPosition;
  logoSrc: string;
  textColor: string;
}) => {
  const intro = (
    <td
      className="footer-overlap-column"
      style={{
        padding: "0 24px",
        textAlign: "left",
        verticalAlign: "top",
        width: columns === 1 ? "66.666667%" : "33.333333%",
      }}
    >
      <Logo logoSrc={logoSrc} />
      <div style={{ lineHeight: "24px" }}>&zwj;</div>
      {columns === 1 ? (
        <p
          style={{
            color: textColor,
            fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {copy}
        </p>
      ) : null}
    </td>
  );
  const menus = (
    <td
      className="footer-overlap-column footer-overlap-column-right"
      style={{ textAlign: "right", verticalAlign: "top" }}
    >
      <table
        align="right"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ marginLeft: "auto" }}
      >
        <tbody>
          <tr>
            <LinkColumn
              heading="Quick Links"
              links={quickLinks}
              textColor={textColor}
            />
            {columns >= 2 ? (
              <LinkColumn
                heading="Connect"
                links={connectLinks}
                textColor={textColor}
              />
            ) : null}
            {columns === 3 ? (
              <LinkColumn
                heading="Legal"
                links={legalLinks}
                textColor={textColor}
              />
            ) : null}
          </tr>
        </tbody>
      </table>
    </td>
  );
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          {logoPosition === "left" ? intro : menus}
          {logoPosition === "left" ? menus : intro}
        </tr>
      </tbody>
    </table>
  );
};

const FooterContent = ({
  variant,
  logoPosition,
  logoSrc,
  textColor,
  mutedTextColor,
  unsubscribeHref,
}: {
  variant: FooterWithOverlappedCtaVariant;
  logoPosition: FooterOverlappedLogoPosition;
  logoSrc: string;
  textColor: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}): ReactNode => {
  if (variant === "content") {
    return (
      <>
        <SideLayout
          columns={1}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <div style={{ lineHeight: "96px" }}>&zwj;</div>
        <div style={{ padding: "0 24px", textAlign: "left" }}>
          <p
            style={{
              color: "#030712",
              fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              margin: "0 0 12px",
            }}
          >
            Follow us
          </p>
          <Socials />
          <div style={{ lineHeight: "24px" }}>&zwj;</div>
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </div>
      </>
    );
  }
  if (variant === "2-column-menu") {
    return (
      <>
        <SideLayout
          columns={2}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <div style={{ padding: "0 24px" }}>
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </div>
      </>
    );
  }
  if (variant === "3-column-menu") {
    return (
      <>
        <SideLayout
          columns={3}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <div style={{ padding: "0 24px" }}>
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </div>
      </>
    );
  }
  if (variant === "centered-content") {
    return (
      <div style={{ padding: "0 48px", textAlign: "center" }}>
        <Logo logoSrc={logoSrc} />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <p
          style={{
            color: "#030712",
            fontFamily,
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
            margin: 0,
          }}
        >
          Start sending professionally
          <br />
          designed emails today
        </p>
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
        <p
          style={{
            color: textColor,
            fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {copy}
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
          © 2026 Mailviews. All rights reserved.
          <br />
          Want to change how you receive these emails?
          <br />
          You can update your preferences or unsubscribe from this list.
        </p>
      </div>
    );
  }
  if (variant === "centered-menu") {
    return (
      <div style={{ padding: "0 24px", textAlign: "center" }}>
        <Logo logoSrc={logoSrc} />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
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
              {quickLinks.slice(1).map(([label, href], index) => (
                <td
                  key={href}
                  style={index < 2 ? { paddingRight: "24px" } : undefined}
                >
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
                </td>
              ))}
            </tr>
          </tbody>
        </table>
        <div style={{ lineHeight: "36px" }}>&zwj;</div>
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
              <td>
                <Socials />
              </td>
            </tr>
          </tbody>
        </table>
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <AddressLegal
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </div>
    );
  }
  if (variant === "address") {
    return (
      <div
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <Logo logoSrc={logoSrc} />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <AddressLegal
          centered={false}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </div>
    );
  }
  return (
    <div style={{ padding: "0 24px", textAlign: "center" }}>
      <p
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: "0 0 12px",
        }}
      >
        Follow us
      </p>
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
            <td>
              <Socials />
            </td>
          </tr>
        </tbody>
      </table>
      <div style={{ lineHeight: "44px" }}>&zwj;</div>
      <AddressLegal
        mutedTextColor={mutedTextColor}
        textColor={textColor}
        unsubscribeHref={unsubscribeHref}
      />
    </div>
  );
};

export const FooterWithOverlappedCtaSection = ({
  variant = "content",
  logoPosition = "left",
  backgroundImageSrc = "https://assets.mailviews.com/images/components/footers/bg-image-3.jpg",
  logoSrc = "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithOverlappedCtaProps, "theme">) => (
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
            backgroundColor: pageBackgroundColor,
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <OverlappedHero
            backgroundImageSrc={backgroundImageSrc}
            primaryColor={primaryColor}
          />
          <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            width="100%"
          >
            <tbody>
              <tr>
                <td style={{ backgroundColor }}>
                  <div style={{ lineHeight: "44px" }}>&zwj;</div>
                  <FooterContent
                    logoPosition={logoPosition}
                    logoSrc={logoSrc}
                    mutedTextColor={mutedTextColor}
                    textColor={textColor}
                    unsubscribeHref={unsubscribeHref}
                    variant={variant}
                  />
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
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

export const FooterWithOverlappedCta = ({
  theme: _theme = defaultTheme,
  variant = "content",
  logoPosition = "left",
  ...props
}: FooterWithOverlappedCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with overlapped CTA</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithOverlappedCtaSection
        {...props}
        logoPosition={logoPosition}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithOverlappedCta.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "content",
} satisfies FooterWithOverlappedCtaProps;
