import { Fragment } from "react";
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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWith3ColMenuVariant = "left-logo" | "right-logo";

export interface FooterWith3ColMenuLink {
  href: string;
  label: string;
}

export interface FooterWith3ColMenuSocial extends FooterWith3ColMenuLink {
  iconSrc: string;
}

export interface FooterWith3ColMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: FooterWith3ColMenuLink[];
  connectLinks?: FooterWith3ColMenuLink[];
  legalLinks?: FooterWith3ColMenuLink[];
  socials?: FooterWith3ColMenuSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWith3ColMenuVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-three-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-three-menu-brand { padding-bottom: 44px !important; text-align: left !important; }",
  "  .footer-three-menu-break { display: none !important; }",
  "  .footer-three-menu-columns { float: none !important; margin: 0 !important; text-align: left !important; }",
  "  .footer-three-menu-column { padding-right: 20px !important; }",
  "}",
].join("\n");

const defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  headingColor: "#030712",
  legalLinks: [
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/terms", label: "Terms of Service" },
    { href: "https://example.com/returns", label: "Returns" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
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

type SectionProps = Omit<FooterWith3ColMenuProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const MenuColumn = ({
  last = false,
  links,
  props,
  title,
}: {
  last?: boolean;
  links: FooterWith3ColMenuLink[];
  props: ResolvedProps;
  title: string;
}) => (
  <Column
    className={last ? undefined : "footer-three-menu-column"}
    style={{
      paddingRight: last ? undefined : "40px",
      textAlign: "left",
      verticalAlign: "top",
    }}
  >
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
      {title}
    </Text>
    {links.map((link) => (
      <Text key={link.href} style={{ margin: "0 0 8px" }}>
        <Link
          href={link.href}
          style={{
            color: props.textColor,
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
);

const BrandCell = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="footer-three-menu-cell footer-three-menu-brand"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "33.333333%",
    }}
  >
    <Link href={props.logoHref}>
      <Img
        alt={props.logoAlt}
        src={props.logoSrc}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={55}
      />
    </Link>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.mutedTextColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn. <br className="footer-three-menu-break" /> All rights
      reserved.
    </Text>
  </Column>
);

const MenusCell = ({ props }: { props: ResolvedProps }) => (
  <Column className="footer-three-menu-cell" style={{ verticalAlign: "top" }}>
    <Section
      align={props.variant === "left-logo" ? "right" : "left"}
      className="footer-three-menu-columns"
      style={
        props.variant === "left-logo"
          ? { marginLeft: "auto" }
          : { marginRight: "auto" }
      }
    >
      <Fragment>
        <Row>
          <MenuColumn
            links={props.quickLinks}
            props={props}
            title="Quick Links"
          />
          <MenuColumn
            links={props.connectLinks}
            props={props}
            title="Connect"
          />
          <MenuColumn
            last
            links={props.legalLinks}
            props={props}
            title="Legal"
          />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

export const FooterWith3ColMenuSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "left-logo",
  } as ResolvedProps;
  const brand = <BrandCell props={resolved} />;
  const menus = <MenusCell props={resolved} />;

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
                  <Column style={{ padding: "0 24px" }}>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {resolved.variant === "left-logo" ? brand : menus}
                          {resolved.variant === "left-logo" ? menus : brand}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
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
                        color: resolved.mutedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn. No longer want to receive emails?{" "}
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
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
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

export const FooterWith3ColMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWith3ColMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with 3-column menu</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWith3ColMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWith3ColMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith3ColMenuProps;
