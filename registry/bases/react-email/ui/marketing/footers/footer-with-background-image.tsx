import type { ReactNode } from "react";
import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Link,
  Column,
  Text,
  Section,
  Row,
  Img,
} from "react-email";
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
  <Link href="https://example.com">
    <Img
      alt="Maizzle"
      src={logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={width}
    />
  </Link>
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
  <Column
    style={{ padding: "0 24px", textAlign: "left", verticalAlign: "top" }}
  >
    <Text
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
    </Text>
    {links.map(([label, href]) => (
      <Text key={href} style={{ margin: "0 0 8px" }}>
        <Link
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
        </Link>
      </Text>
    ))}
  </Column>
);

const Socials = ({ dark = false }: { dark?: boolean }) => (
  <Section>
    <Fragment>
      <Row>
        {socialIcons.map(([label, href, icon], index) => (
          <Column
            key={label}
            style={
              index < socialIcons.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <Link href={href}>
              <Img
                alt={label}
                src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}${dark ? "-dark" : ""}.png`}
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

const ShortLegal = ({
  centered = false,
  textColor,
  unsubscribeHref,
}: {
  centered?: boolean;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <Text
    style={{
      color: textColor,
      fontFamily,
      fontSize: "16px",
      lineHeight: "24px",
      margin: 0,
      textAlign: centered ? "center" : "left",
    }}
  >
    © 2026 emailcn. No longer want to receive emails?{" "}
    <Link
      href={unsubscribeHref}
      style={{ color: textColor, textDecoration: "underline" }}
    >
      Unsubscribe
    </Link>
  </Text>
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
  <Section style={{ textAlign: centered ? "center" : "left" }}>
    <Text
      style={{
        color: textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn
      <br />
      emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505 Paris
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
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
      <br className="footer-bg-break" /> No longer want to receive emails?{" "}
      <Link
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

const CenteredMenu = ({ textColor }: { textColor: string }) => (
  <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
    <Fragment>
      <Row>
        {quickLinks.map(([label, href], index) => (
          <Column
            key={href}
            style={
              index < quickLinks.length - 1
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
    <Section
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Section width="100%">
        <Fragment>
          <Row>
            <Column
              className="footer-bg-hero"
              style={{
                padding: top ? "0 44px" : "0 24px",
                textAlign: "center",
              }}
            >
              <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
              <Text
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
              </Text>
              {top ? (
                <>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
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
                  </Text>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Link
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
                    <Img
                      alt=""
                      src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
                      style={{ maxWidth: "100%", verticalAlign: "baseline" }}
                      width={12}
                    />
                  </Link>
                  <Section style={{ lineHeight: "120px" }}>&zwj;</Section>
                </>
              ) : (
                <>
                  {mode === "bottom-centered" ? null : (
                    <>
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      <Text
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
                      </Text>
                      {showSocialIcons ? (
                        <Section
                          align="center"
                          style={{ marginLeft: "auto", marginRight: "auto" }}
                        >
                          <Fragment>
                            <Row>
                              <Column>
                                <Socials dark />
                              </Column>
                            </Row>
                          </Fragment>
                        </Section>
                      ) : null}
                    </>
                  )}
                  <Section
                    style={{
                      lineHeight: mode === "bottom-centered" ? "44px" : "24px",
                    }}
                  >
                    &zwj;
                  </Section>
                  <ShortLegal
                    centered
                    textColor={textColor}
                    unsubscribeHref={unsubscribeHref}
                  />
                  <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
                </>
              )}
            </Column>
          </Row>
        </Fragment>
      </Section>
    </Section>
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
    <Column
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
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: textColor,
              fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            {copy}
          </Text>
        </>
      ) : null}
    </Column>
  );
  const menus = (
    <Column
      className="footer-bg-column footer-bg-column-right"
      style={{ textAlign: "right", verticalAlign: "top" }}
    >
      <Section align="right" style={{ marginLeft: "auto" }}>
        <Fragment>
          <Row>
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
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          {logoPosition === "left" ? intro : menus}
          {logoPosition === "left" ? menus : intro}
        </Row>
      </Fragment>
    </Section>
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
        <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px", textAlign: "left" }}>
          <Text
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
          </Text>
          <Socials />
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <ShortLegal textColor="#9ca3af" unsubscribeHref={unsubscribeHref} />
        </Section>
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <ShortLegal textColor="#9ca3af" unsubscribeHref={unsubscribeHref} />
        </Section>
      </>
    );
  }
  if (variant === "top-image-address") {
    return (
      <Section
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <Logo logoSrc={logoSrc} width={64} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <AddressLegal
          centered={false}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  if (variant === "top-image-centered") {
    return (
      <Section style={{ padding: "0 24px", textAlign: "center" }}>
        <Text
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
        </Text>
        <Section
          align="center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Fragment>
            <Row>
              <Column>
                <Socials />
              </Column>
            </Row>
          </Fragment>
        </Section>
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <AddressLegal
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  return (
    <Section style={{ padding: "0 24px", textAlign: "center" }}>
      <CenteredMenu textColor={textColor} />
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <AddressLegal
        mutedTextColor={mutedTextColor}
        textColor={textColor}
        unsubscribeHref={unsubscribeHref}
      />
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <Logo logoSrc={logoSrc} width={64} />
    </Section>
  );
};

export const FooterWithBackgroundImageSection = ({
  variant = "bottom-image-content",
  logoPosition = "left",
  bottomImageSrc = "https://emailcn.vercel.app/api/email-assets/footers/bg-image-1.jpg",
  topImageSrc = "https://emailcn.vercel.app/api/email-assets/footers/bg-image-2.jpg",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <TopImageFooterContent
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
          variant={variant}
        />
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      </>
    );
  } else if (variant === "bottom-image-centered") {
    content = (
      <>
        <Section style={{ padding: "0 24px", textAlign: "center" }}>
          <Logo logoSrc={logoSrc} width={64} />
          <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
          <CenteredMenu textColor={textColor} />
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Section
            align="center"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Fragment>
              <Row>
                <Column>
                  <Socials />
                </Column>
              </Row>
            </Fragment>
          </Section>
        </Section>
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
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingTop: topImage ? 0 : "44px",
              width: "600px",
            }}
          >
            {content}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
