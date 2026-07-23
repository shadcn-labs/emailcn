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
} from "jsx-email";
import type { ReactNode } from "react";
import { Fragment } from "react";

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

const Socials = () => (
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
                src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}.png`}
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
      We're sending you this because you subscribed.{" "}
      <br className="footer-overlap-break" /> No longer want to receive emails?{" "}
      <Link
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

const OverlappedHero = ({
  backgroundImageSrc,
  primaryColor,
}: {
  backgroundImageSrc: string;
  primaryColor: string;
}) => (
  <>
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              borderRadius: "12px 12px 0 0",
            }}
          >
            <Section
              style={{
                backgroundImage: `url('${backgroundImageSrc}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            >
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column
                      className="footer-overlap-hero"
                      style={{ padding: "0 44px", textAlign: "center" }}
                    >
                      <Section style={{ lineHeight: "124px" }}>&zwj;</Section>
                      <Text
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
                      </Text>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <Text
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
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width={12}
                        />
                      </Link>
                      <Section style={{ lineHeight: "124px" }}>&zwj;</Section>
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Section>
          </Column>
          <Column
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
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
    <Column
      className="footer-overlap-column"
      style={{
        padding: "0 24px",
        textAlign: "left",
        verticalAlign: "top",
        width: columns === 1 ? "66.666667%" : "33.333333%",
      }}
    >
      <Logo logoSrc={logoSrc} />
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      {columns === 1 ? (
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
      ) : null}
    </Column>
  );
  const menus = (
    <Column
      className="footer-overlap-column footer-overlap-column-right"
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
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </Section>
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </Section>
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <ShortLegal textColor={textColor} unsubscribeHref={unsubscribeHref} />
        </Section>
      </>
    );
  }
  if (variant === "centered-content") {
    return (
      <Section style={{ padding: "0 48px", textAlign: "center" }}>
        <Logo logoSrc={logoSrc} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Text
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
        </Text>
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Text
          style={{
            color: mutedTextColor,
            fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          © 2026 emailcn. All rights reserved.
          <br />
          Want to change how you receive these emails?
          <br />
          You can update your preferences or unsubscribe from this list.
        </Text>
      </Section>
    );
  }
  if (variant === "centered-menu") {
    return (
      <Section style={{ padding: "0 24px", textAlign: "center" }}>
        <Logo logoSrc={logoSrc} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section
          align="center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Fragment>
            <Row>
              {quickLinks.slice(1).map(([label, href], index) => (
                <Column
                  key={href}
                  style={index < 2 ? { paddingRight: "24px" } : undefined}
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
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <AddressLegal
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  if (variant === "address") {
    return (
      <Section
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <Logo logoSrc={logoSrc} />
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
};

export const FooterWithOverlappedCtaSection = ({
  variant = "content",
  logoPosition = "left",
  backgroundImageSrc = "https://emailcn.vercel.app/api/email-assets/footers/bg-image-3.jpg",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithOverlappedCtaProps, "theme">) => (
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
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
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ backgroundColor }}>
                  <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                  <FooterContent
                    logoPosition={logoPosition}
                    logoSrc={logoSrc}
                    mutedTextColor={mutedTextColor}
                    textColor={textColor}
                    unsubscribeHref={unsubscribeHref}
                    variant={variant}
                  />
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
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
