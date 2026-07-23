import type { ReactNode } from "react";
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

export interface CenteredFooterLink {
  href: string;
  label: string;
}

export interface CenteredFooterSocial extends CenteredFooterLink {
  iconSrc: string;
}

export interface FooterCenteredWithMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: CenteredFooterLink[];
  socials?: CenteredFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-centered-menu-break { display: none !important; } }";

const defaults = {
  backgroundColor: "#fffffe",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
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
  textColor: "#9ca3af",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterCenteredWithMenuAndSocialsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const CenteredRow = ({ children }: { children: ReactNode }) => (
  <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
    <Fragment>
      <Row>{children}</Row>
    </Fragment>
  </Section>
);

export const FooterCenteredWithMenuAndSocialsSection = (
  props: SectionProps
) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
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
            <Section style={{ textAlign: "center" }}>
              <Link href={resolved.logoHref}>
                <Img
                  alt={resolved.logoAlt}
                  src={resolved.logoSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width={55}
                />
              </Link>
            </Section>
            <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
            <CenteredRow>
              {resolved.links.map((link, index) => (
                <Column
                  key={link.href}
                  style={
                    index === resolved.links.length - 1
                      ? undefined
                      : { paddingRight: "24px" }
                  }
                >
                  <Link
                    href={link.href}
                    style={{
                      color: resolved.textColor,
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
            </CenteredRow>
            <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
            <CenteredRow>
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
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={20}
                    />
                  </Link>
                </Column>
              ))}
            </CenteredRow>
            <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn
                      <br /> emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; |
                      &nbsp;75505 Paris
                    </Text>
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
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-centered-menu-break" /> No longer
                      want to receive emails?{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
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

export const FooterCenteredWithMenuAndSocials = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: FooterCenteredWithMenuAndSocialsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer centered with menu and socials</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterCenteredWithMenuAndSocialsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterCenteredWithMenuAndSocialsProps;
