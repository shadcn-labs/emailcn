import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
/* eslint-disable next/no-img-element */
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface CenteredFooterLink {
  href: string;
  label: string;
}

export interface CenteredFooterSocial extends CenteredFooterLink {
  iconSrc: string;
}

export interface FooterCenteredWithMenuAndSocialsProps {
  theme?: EmailThemeTokens;
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
  logoSrc:
    "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://assets.mailviews.com/images/components/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc:
        "https://assets.mailviews.com/images/components/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://assets.mailviews.com/images/components/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#9ca3af",
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<FooterCenteredWithMenuAndSocialsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const CenteredRow = ({ children }: { children: ReactNode }) => (
  <table
    align="center"
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ marginLeft: "auto", marginRight: "auto" }}
  >
    <tbody>
      <tr>{children}</tr>
    </tbody>
  </table>
);

export const FooterCenteredWithMenuAndSocialsSection = (
  props: SectionProps
) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              padding: "44px 0 24px",
              width: "600px",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <a href={resolved.logoHref}>
                <img
                  alt={resolved.logoAlt}
                  src={resolved.logoSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width={55}
                />
              </a>
            </div>
            <div style={{ lineHeight: "64px" }}>&zwj;</div>
            <CenteredRow>
              {resolved.links.map((link, index) => (
                <td
                  key={link.href}
                  style={
                    index === resolved.links.length - 1
                      ? undefined
                      : { paddingRight: "24px" }
                  }
                >
                  <a
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
                  </a>
                </td>
              ))}
            </CenteredRow>
            <div style={{ lineHeight: "36px" }}>&zwj;</div>
            <CenteredRow>
              {resolved.socials.map((social, index) => (
                <td
                  key={social.href}
                  style={
                    index === resolved.socials.length - 1
                      ? undefined
                      : { paddingRight: "24px" }
                  }
                >
                  <a href={social.href}>
                    <img
                      alt={social.label}
                      src={social.iconSrc}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={20}
                    />
                  </a>
                </td>
              ))}
            </CenteredRow>
            <div style={{ lineHeight: "64px" }}>&zwj;</div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0 24px", textAlign: "center" }}>
                    <p
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 Mailviews
                      <br /> Mailviews&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp;
                      | &nbsp;75505 Paris
                    </p>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <p
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
                      <a
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        Unsubscribe
                      </a>
                    </p>
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
};

export const FooterCenteredWithMenuAndSocials = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: FooterCenteredWithMenuAndSocialsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Footer centered with menu and socials</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FooterCenteredWithMenuAndSocialsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FooterCenteredWithMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
} satisfies FooterCenteredWithMenuAndSocialsProps;
