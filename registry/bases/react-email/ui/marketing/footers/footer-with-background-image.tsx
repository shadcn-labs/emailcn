import type { ReactNode } from "react";
/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithBackgroundImageVariant =
  | "bottom-image-content"
  | "bottom-image-2-column-menu"
  | "bottom-image-3-column-menu"
  | "bottom-image-centered"
  | "top-image-content"
  | "top-image-3-column-menu"
  | "top-image-address"
  | "top-image-centered"
  | "top-image-logo-bottom";

export type FooterBackgroundLogoPosition = "left" | "right";

export interface FooterWithBackgroundImageProps {
  theme?: TailwindConfig;
  variant?: FooterWithBackgroundImageVariant;
  logoPosition?: FooterBackgroundLogoPosition;
  bottomImageSrc?: string;
  topImageSrc?: string;
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
  "  .footer-bg-column { display: block !important; width: 100% !important; }",
  "  .footer-bg-column-right { float: none !important; margin-left: 0 !important; padding-top: 24px !important; text-align: left !important; }",
  "  .footer-bg-break { display: none !important; }",
  "  .footer-bg-hero { padding-left: 24px !important; padding-right: 24px !important; }",
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
  ["Instagram", "https://instagram.com"],
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

const Logo = ({ logoSrc, width = 55 }: { logoSrc: string; width?: number }) => (
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

const Socials = ({ dark = false }: { dark?: boolean }) => (
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
                src={`https://assets.mailviews.com/images/components/icon-${icon}${dark ? "-dark" : ""}.png`}
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
      You're receiving this because you subscribed to updates.{" "}
      <br className="footer-bg-break" /> No longer want to receive emails?{" "}
      <a
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </a>
    </p>
  </div>
);

const CenteredMenu = ({ textColor }: { textColor: string }) => (
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
        {quickLinks.map(([label, href], index) => (
          <td
            key={href}
            style={
              index < quickLinks.length - 1
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
);

const ImageCta = ({
  imageSrc,
  mode,
  primaryColor,
  showSocialIcons = true,
  textColor,
  unsubscribeHref,
}: {
  imageSrc: string;
  mode: "bottom" | "top" | "bottom-centered";
  primaryColor: string;
  showSocialIcons?: boolean;
  textColor: string;
  unsubscribeHref: string;
}) => {
  const top = mode === "top";
  return (
    <div
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
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
              className="footer-bg-hero"
              style={{
                padding: top ? "0 44px" : "0 24px",
                textAlign: "center",
              }}
            >
              <div style={{ lineHeight: "96px" }}>&zwj;</div>
              <p
                style={{
                  color: "#030712",
                  fontFamily,
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "32px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Start sending professionally <br className="footer-bg-break" />
                designed emails today
              </p>
              {top ? (
                <>
                  <div style={{ lineHeight: "24px" }}>&zwj;</div>
                  <p
                    style={{
                      color: "#030712",
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
                      style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                      width={12}
                    />
                  </a>
                  <div style={{ lineHeight: "120px" }}>&zwj;</div>
                </>
              ) : (
                <>
                  {mode === "bottom-centered" ? null : (
                    <>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      <p
                        style={{
                          color: "#030712",
                          fontFamily,
                          fontSize: "16px",
                          fontWeight: 600,
                          lineHeight: "24px",
                          margin: "0 0 12px",
                          textAlign: "center",
                        }}
                      >
                        Follow us
                      </p>
                      {showSocialIcons ? (
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
                                <Socials dark />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      ) : null}
                    </>
                  )}
                  <div
                    style={{
                      lineHeight: mode === "bottom-centered" ? "44px" : "24px",
                    }}
                  >
                    &zwj;
                  </div>
                  <ShortLegal
                    centered
                    textColor={textColor}
                    unsubscribeHref={unsubscribeHref}
                  />
                  <div style={{ lineHeight: "96px" }}>&zwj;</div>
                </>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const SideContent = ({
  columns,
  logoPosition,
  logoSrc,
  textColor,
}: {
  columns: 1 | 2 | 3;
  logoPosition: FooterBackgroundLogoPosition;
  logoSrc: string;
  textColor: string;
}) => {
  const intro = (
    <td
      className="footer-bg-column"
      style={{
        padding: "0 24px",
        textAlign: "left",
        verticalAlign: "top",
        width: columns === 1 ? "66.666667%" : "41.666667%",
      }}
    >
      <Logo logoSrc={logoSrc} />
      {columns === 1 ? (
        <>
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
        </>
      ) : null}
    </td>
  );
  const menus = (
    <td
      className="footer-bg-column footer-bg-column-right"
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

const TopImageFooterContent = ({
  variant,
  logoPosition,
  logoSrc,
  textColor,
  mutedTextColor,
  unsubscribeHref,
}: {
  variant: FooterWithBackgroundImageVariant;
  logoPosition: FooterBackgroundLogoPosition;
  logoSrc: string;
  textColor: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}) => {
  if (variant === "top-image-content") {
    return (
      <>
        <SideContent
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
          <ShortLegal textColor="#9ca3af" unsubscribeHref={unsubscribeHref} />
        </div>
      </>
    );
  }
  if (variant === "top-image-3-column-menu") {
    return (
      <>
        <SideContent
          columns={3}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <div style={{ padding: "0 24px" }}>
          <ShortLegal textColor="#9ca3af" unsubscribeHref={unsubscribeHref} />
        </div>
      </>
    );
  }
  if (variant === "top-image-address") {
    return (
      <div
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <Logo logoSrc={logoSrc} width={64} />
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
  if (variant === "top-image-centered") {
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
  }
  return (
    <div style={{ padding: "0 24px", textAlign: "center" }}>
      <CenteredMenu textColor={textColor} />
      <div style={{ lineHeight: "44px" }}>&zwj;</div>
      <AddressLegal
        mutedTextColor={mutedTextColor}
        textColor={textColor}
        unsubscribeHref={unsubscribeHref}
      />
      <div style={{ lineHeight: "44px" }}>&zwj;</div>
      <Logo logoSrc={logoSrc} width={64} />
    </div>
  );
};

export const FooterWithBackgroundImageSection = ({
  variant = "bottom-image-content",
  logoPosition = "left",
  bottomImageSrc = "https://assets.mailviews.com/images/components/footers/bg-image-1.jpg",
  topImageSrc = "https://assets.mailviews.com/images/components/footers/bg-image-2.jpg",
  logoSrc = "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithBackgroundImageProps, "theme">) => {
  const topImage = variant.startsWith("top-image");
  let columns: 1 | 2 | 3 = 1;
  if (variant === "bottom-image-2-column-menu") {
    columns = 2;
  }
  if (variant === "bottom-image-3-column-menu") {
    columns = 3;
  }

  let content: ReactNode;
  if (topImage) {
    content = (
      <>
        <ImageCta
          imageSrc={topImageSrc}
          mode="top"
          primaryColor={primaryColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
        <div style={{ lineHeight: "44px" }}>&zwj;</div>
        <TopImageFooterContent
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
          variant={variant}
        />
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
      </>
    );
  } else if (variant === "bottom-image-centered") {
    content = (
      <>
        <div style={{ padding: "0 24px", textAlign: "center" }}>
          <Logo logoSrc={logoSrc} width={64} />
          <div style={{ lineHeight: "64px" }}>&zwj;</div>
          <CenteredMenu textColor={textColor} />
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
        </div>
        <ImageCta
          imageSrc={bottomImageSrc}
          mode="bottom-centered"
          primaryColor={primaryColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </>
    );
  } else {
    content = (
      <>
        <SideContent
          columns={columns}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <ImageCta
          imageSrc={bottomImageSrc}
          mode="bottom"
          primaryColor={primaryColor}
          showSocialIcons={variant !== "bottom-image-2-column-menu"}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </>
    );
  }

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
              paddingTop: topImage ? 0 : "44px",
              width: "600px",
            }}
          >
            {content}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const FooterWithBackgroundImage = ({
  theme: _theme = defaultTheme,
  variant = "bottom-image-content",
  logoPosition = "left",
  ...props
}: FooterWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with background image</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithBackgroundImageSection
        {...props}
        logoPosition={logoPosition}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithBackgroundImage.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "bottom-image-content",
} satisfies FooterWithBackgroundImageProps;
