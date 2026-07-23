/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "react-email";
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
  <div
    style={{
      backgroundColor: props.dividerColor,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </div>
);

const Menu = ({ props }: { props: ResolvedProps }) => (
  <table
    align="center"
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="footer-full-menu-row"
    role="presentation"
    style={{ marginLeft: "auto", marginRight: "auto" }}
  >
    <tbody>
      <tr>
        {props.links.map((link) => (
          <td
            className="footer-full-menu-item"
            key={link.href}
            style={{ padding: "0 12px" }}
          >
            <a
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
            </a>
          </td>
        ))}
      </tr>
    </tbody>
  </table>
);

const Socials = ({ props }: { props: ResolvedProps }) => (
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
        {props.socials.map((social, index) => (
          <td
            key={social.href}
            style={
              index === props.socials.length - 1
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
      </tr>
    </tbody>
  </table>
);

const Address = ({ props }: { props: ResolvedProps }) => (
  <div style={{ textAlign: "center" }}>
    <p
      style={{
        color: props.textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 Mailviews
      <br /> Mailviews&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505
      Paris
    </p>
    <div style={{ lineHeight: "36px" }}>&zwj;</div>
    <p
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
      <a
        href={props.unsubscribeHref}
        style={{ color: props.mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </a>
    </p>
  </div>
);

export const FooterWithFullMenuSection = (props: SectionProps) => {
  const variant = props.variant ?? "oversized-logo";
  const resolved = {
    ...defaults,
    ...props,
    logoSrc:
      props.logoSrc ??
      (variant === "bordered"
        ? "https://assets.mailviews.com/images/components/maizzle-insignia.png"
        : "https://assets.mailviews.com/images/components/maizzle-insignia-lg.png"),
    variant,
  } as ResolvedProps;
  const bordered = variant === "bordered";

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
                    <a href={resolved.logoHref}>
                      <img
                        alt={resolved.logoAlt}
                        src={resolved.logoSrc}
                        style={{ maxWidth: "100%", verticalAlign: "middle" }}
                        width={bordered ? 88 : 197}
                      />
                    </a>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    {bordered ? (
                      <>
                        <p
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
                        </p>
                        <Divider props={resolved} />
                        <Menu props={resolved} />
                        <Divider props={resolved} />
                        <Socials props={resolved} />
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                      </>
                    ) : (
                      <>
                        <Menu props={resolved} />
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <Socials props={resolved} />
                        <Divider props={resolved} />
                      </>
                    )}
                    <Address props={resolved} />
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
