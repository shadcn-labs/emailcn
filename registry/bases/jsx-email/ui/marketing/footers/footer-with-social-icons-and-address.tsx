import {
  Body,
  Head,
  Html,
  Preview,
  Column,
  Link,
  Section,
  Row,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithSocialIconsAndAddressVariant =
  | "left-logo"
  | "right-logo"
  | "centered";

export interface FooterAddressSocial {
  href: string;
  iconSrc: string;
  label: string;
}

export interface FooterWithSocialIconsAndAddressProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: FooterAddressSocial[];
  address?: string;
  legalText?: string;
  centeredLegalText?: string;
  title?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FooterWithSocialIconsAndAddressVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-address-cell { display: block !important; width: 100% !important; }",
  "  .footer-address-gap { line-height: 96px !important; }",
  "  .footer-address-logo { text-align: left !important; }",
  "  .footer-address-break { display: none !important; }",
  "}",
].join("\n");

const defaults = {
  address: "© 2026 emailcn\nemailcn  |  155 Bdv Saint Germain  |  75505 Paris",
  backgroundColor: "#fffffe",
  centeredLegalText: "You're receiving this because you subscribed to updates.",
  legalText: "We're sending you this because you subscribed.",
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
  textColor: "#6b7280",
  title: "Follow us",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterWithSocialIconsAndAddressProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const LogoCell = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="footer-address-cell footer-address-logo"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "55px",
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
  </Column>
);

const ContentCell = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="footer-address-cell"
    style={{ textAlign: "left", verticalAlign: "top" }}
  >
    <Section>
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
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {props.address.split("\n").map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
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
      {props.legalText}
      <br /> No longer want to receive emails?{" "}
      <Link
        href={props.unsubscribeHref}
        style={{ color: props.mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Column>
);

const CenteredContent = ({ props }: { props: ResolvedProps }) => (
  <>
    <Text
      style={{
        color: "#030712",
        fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {props.title}
    </Text>
    <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
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
    <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "0 24px", textAlign: "center" }}>
            <Text
              style={{
                color: "#9ca3af",
                fontFamily,
                fontSize: "16px",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {props.address.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </Text>
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
              {props.centeredLegalText} <br className="footer-address-break" />
              No longer want to receive emails?{" "}
              <Link
                href={props.unsubscribeHref}
                style={{
                  color: props.mutedTextColor,
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
  </>
);

export const FooterWithSocialIconsAndAddressSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "left-logo",
  } as ResolvedProps;
  const logo = <LogoCell props={resolved} />;
  const gap = (
    <Column
      className="footer-address-cell footer-address-gap"
      style={{ width: "96px" }}
    >
      &zwj;
    </Column>
  );
  const content = <ContentCell props={resolved} />;

  if (resolved.variant === "centered") {
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
              <CenteredContent props={resolved} />
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    );
  }

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
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{ padding: "44px 24px", verticalAlign: "top" }}
                  >
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {resolved.variant === "left-logo" ? logo : content}
                          {gap}
                          {resolved.variant === "left-logo" ? content : logo}
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

export const FooterWithSocialIconsAndAddress = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: FooterWithSocialIconsAndAddressProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with social icons and address</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWithSocialIconsAndAddressSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithSocialIconsAndAddress.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies FooterWithSocialIconsAndAddressProps;
