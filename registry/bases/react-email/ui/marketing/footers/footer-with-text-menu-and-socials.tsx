import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
  Link,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithTextMenuAndSocialsVariant = "left-logo" | "right-logo";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSocialLink extends FooterLink {
  iconSrc: string;
}

export interface FooterWithTextMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  /** @deprecated Use `copyright` instead. */
  text?: string;
  quickLinks?: FooterLink[];
  socials?: FooterSocialLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithTextMenuAndSocialsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-text-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-text-menu-copy { padding-bottom: 24px !important; text-align: left !important; }",
  "  .footer-text-menu-links { float: none !important; margin: 0 !important; text-align: left !important; }",
  "}",
].join("\n");

const defaults = {
  backgroundColor: "#fffffe",
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
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

type SectionProps = Omit<FooterWithTextMenuAndSocialsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const BrandCopy = ({ props }: { props: ResolvedProps }) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column
          className="footer-text-menu-copy"
          style={{
            padding: "0 24px 24px",
            textAlign: props.variant === "right-logo" ? "right" : "left",
          }}
        >
          <Img
            alt={props.logoAlt}
            src={props.logoSrc}
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
            width={55}
          />
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: props.textColor,
              fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            {props.description}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const QuickLinks = ({ props }: { props: ResolvedProps }) => (
  <Section
    align={props.variant === "left-logo" ? "right" : "left"}
    className="footer-text-menu-links"
    style={
      props.variant === "left-logo"
        ? { marginLeft: "auto" }
        : { marginRight: "auto" }
    }
  >
    <Fragment>
      <Row>
        <Column style={{ padding: "0 24px", textAlign: "left" }}>
          <Text
            style={{
              color: props.headingColor,
              fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              margin: "0 0 10px",
            }}
          >
            Quick Links
          </Text>
          {props.quickLinks.map((link) => (
            <Text key={link.href} style={{ margin: "0 0 8px" }}>
              <Link
                href={link.href}
                style={{
                  color: props.textColor,
                  display: "block",
                  fontFamily,
                  fontSize: "14px",
                  lineHeight: "20px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            </Text>
          ))}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

export const FooterWithTextMenuAndSocialsSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    copyright: props.copyright ?? props.text ?? defaults.copyright,
    variant: props.variant ?? "left-logo",
  } as ResolvedProps;
  const brandCell = (
    <Column
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "66.666667%" }}
    >
      <BrandCopy props={resolved} />
    </Column>
  );
  const linksCell = (
    <Column
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "33.333333%" }}
    >
      <QuickLinks props={resolved} />
    </Column>
  );

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
                  {resolved.variant === "left-logo" ? brandCell : linksCell}
                  {resolved.variant === "left-logo" ? linksCell : brandCell}
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Text
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        margin: "0 0 12px",
                      }}
                    >
                      Follow us
                    </Text>
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
                      {resolved.copyright}{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.textColor,
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

export const FooterWithTextMenuAndSocials = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWithTextMenuAndSocialsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with text, menu and socials</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWithTextMenuAndSocialsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithTextMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWithTextMenuAndSocialsProps;
