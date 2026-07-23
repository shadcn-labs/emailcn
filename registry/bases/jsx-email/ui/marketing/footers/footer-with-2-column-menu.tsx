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

export type FooterWith2ColumnMenuVariant = "left-logo" | "right-logo";

export interface FooterWith2ColumnMenuLink {
  href: string;
  label: string;
}

export interface FooterWith2ColumnMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: FooterWith2ColumnMenuLink[];
  connectLinks?: FooterWith2ColumnMenuLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWith2ColumnMenuVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-two-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-two-menu-logo { padding-bottom: 24px !important; text-align: left !important; }",
  "  .footer-two-menu-columns { float: none !important; margin: 0 !important; text-align: left !important; }",
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
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  headingColor: "#030712",
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
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWith2ColumnMenuProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const MenuColumn = ({
  links,
  props,
  title,
}: {
  links: FooterWith2ColumnMenuLink[];
  props: ResolvedProps;
  title: string;
}) => (
  <Column
    style={{ padding: "0 24px", textAlign: "left", verticalAlign: "top" }}
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

const LogoCell = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="footer-two-menu-cell footer-two-menu-logo"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "41.666667%",
    }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "0 24px 24px" }}>
            <Link href={props.logoHref}>
              <Img
                alt={props.logoAlt}
                src={props.logoSrc}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width={55}
              />
            </Link>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const MenusCell = ({ props }: { props: ResolvedProps }) => (
  <Column className="footer-two-menu-cell" style={{ verticalAlign: "top" }}>
    <Section
      align={props.variant === "left-logo" ? "right" : "left"}
      className="footer-two-menu-columns"
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
        </Row>
      </Fragment>
    </Section>
  </Column>
);

export const FooterWith2ColumnMenuSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "left-logo",
  } as ResolvedProps;
  const logo = <LogoCell props={resolved} />;
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
                  {resolved.variant === "left-logo" ? logo : menus}
                  {resolved.variant === "left-logo" ? menus : logo}
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

export const FooterWith2ColumnMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWith2ColumnMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with 2-column menu</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWith2ColumnMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWith2ColumnMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWith2ColumnMenuProps;
