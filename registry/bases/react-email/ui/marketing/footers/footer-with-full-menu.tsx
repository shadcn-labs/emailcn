import { Fragment } from "react";
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

export type FooterWithFullMenuVariant = "oversized-logo" | "bordered";

export interface FullMenuFooterLink {
  href: string;
  label: string;
}

export interface FullMenuFooterSocial extends FullMenuFooterLink {
  iconSrc: string;
}

export interface FooterWithFullMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  assistanceText?: string;
  links?: FullMenuFooterLink[];
  socials?: FullMenuFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithFullMenuVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-full-menu-item { display: inline-block !important; }",
  "  .footer-full-menu-break { display: none !important; }",
  "  .footer-full-menu-row { line-height: 32px !important; text-align: center !important; }",
  "}",
].join("\n");

const defaults = {
  assistanceText:
    "If you have any questions or need assistance\nplease reply to this email.",
  backgroundColor: "#fffffe",
  dividerColor: "#d1d5db",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/blog", label: "Blog" },
    { href: "https://example.com/support", label: "Support" },
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
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

type SectionProps = Omit<FooterWithFullMenuProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & {
    logoSrc: string;
    variant: FooterWithFullMenuVariant;
  };

const Divider = ({ props }: { props: ResolvedProps }) => (
  <Section
    style={{
      backgroundColor: props.dividerColor,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </Section>
);

const Menu = ({ props }: { props: ResolvedProps }) => (
  <Section
    align="center"
    className="footer-full-menu-row"
    style={{ marginLeft: "auto", marginRight: "auto" }}
  >
    <Fragment>
      <Row>
        {props.links.map((link) => (
          <Column
            className="footer-full-menu-item"
            key={link.href}
            style={{ padding: "0 12px" }}
          >
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
          </Column>
        ))}
      </Row>
    </Fragment>
  </Section>
);

const Socials = ({ props }: { props: ResolvedProps }) => (
  <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
    <Fragment>
      <Row>
        {props.socials.map((social, index) => (
          <Column
            key={social.href}
            style={
              index === props.socials.length - 1
                ? undefined
                : { paddingRight: "24px" }
            }
          >
            <Link href={social.href}>
              <Img
                alt={social.label}
                src={social.iconSrc}
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

const Address = ({ props }: { props: ResolvedProps }) => (
  <Section style={{ textAlign: "center" }}>
    <Text
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn
      <br /> emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505
      Paris
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.mutedTextColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      We're sending you this because you subscribed.{" "}
      <br className="footer-full-menu-break" /> No longer want to receive
      emails?{" "}
      <Link
        href={props.unsubscribeHref}
        style={{ color: props.mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

export const FooterWithFullMenuSection = (props: SectionProps) => {
  const variant = props.variant ?? "oversized-logo";
  const resolved = {
    ...defaults,
    ...props,
    logoSrc:
      props.logoSrc ??
      (variant === "bordered"
        ? "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
        : "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-lg.png"),
    variant,
  } as ResolvedProps;
  const bordered = variant === "bordered";

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
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Link href={resolved.logoHref}>
                      <Img
                        alt={resolved.logoAlt}
                        src={resolved.logoSrc}
                        style={{ maxWidth: "100%", verticalAlign: "middle" }}
                        width={bordered ? 88 : 197}
                      />
                    </Link>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    {bordered ? (
                      <>
                        <Text
                          style={{
                            color: resolved.textColor,
                            fontFamily,
                            fontSize: "18px",
                            lineHeight: "28px",
                            margin: 0,
                          }}
                        >
                          {resolved.assistanceText
                            .split("\n")
                            .map((line, index) => (
                              <span key={line}>
                                {index > 0 ? (
                                  <br className="footer-full-menu-break" />
                                ) : null}
                                {line}
                              </span>
                            ))}
                        </Text>
                        <Divider props={resolved} />
                        <Menu props={resolved} />
                        <Divider props={resolved} />
                        <Socials props={resolved} />
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      </>
                    ) : (
                      <>
                        <Menu props={resolved} />
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <Socials props={resolved} />
                        <Divider props={resolved} />
                      </>
                    )}
                    <Address props={resolved} />
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

export const FooterWithFullMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "oversized-logo",
  ...props
}: FooterWithFullMenuProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with full menu</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWithFullMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithFullMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "oversized-logo",
} satisfies FooterWithFullMenuProps;
