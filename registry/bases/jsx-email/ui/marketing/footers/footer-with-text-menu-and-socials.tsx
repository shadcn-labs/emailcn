/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithTextMenuAndSocialsVariant = "left-logo" | "right-logo";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterSocialLink extends FooterLink {
  iconSrc: string;
}

export interface FooterWithTextMenuAndSocialsProps {
  theme?: EmailThemeTokens;
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
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td
          className="footer-text-menu-copy"
          style={{
            padding: "0 24px 24px",
            textAlign: props.variant === "right-logo" ? "right" : "left",
          }}
        >
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
            width={55}
          />
          <div style={{ lineHeight: "24px" }}>&zwj;</div>
          <p
            style={{
              color: props.textColor,
              fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            {props.description}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

const QuickLinks = ({ props }: { props: ResolvedProps }) => (
  <table
    align={props.variant === "left-logo" ? "right" : "left"}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="footer-text-menu-links"
    role="presentation"
    style={
      props.variant === "left-logo"
        ? { marginLeft: "auto" }
        : { marginRight: "auto" }
    }
  >
    <tbody>
      <tr>
        <td style={{ padding: "0 24px", textAlign: "left" }}>
          <p
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
          </p>
          {props.quickLinks.map((link) => (
            <p key={link.href} style={{ margin: "0 0 8px" }}>
              <a
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
              </a>
            </p>
          ))}
        </td>
      </tr>
    </tbody>
  </table>
);

export const FooterWithTextMenuAndSocialsSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    copyright: props.copyright ?? props.text ?? defaults.copyright,
    variant: props.variant ?? "left-logo",
  } as ResolvedProps;
  const brandCell = (
    <td
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "66.666667%" }}
    >
      <BrandCopy props={resolved} />
    </td>
  );
  const linksCell = (
    <td
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "33.333333%" }}
    >
      <QuickLinks props={resolved} />
    </td>
  );

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
                  {resolved.variant === "left-logo" ? brandCell : linksCell}
                  {resolved.variant === "left-logo" ? linksCell : brandCell}
                </tr>
              </tbody>
            </table>
            <div style={{ lineHeight: "96px" }}>&zwj;</div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0 24px", textAlign: "left" }}>
                    <p
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
                    </p>
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                    >
                      <tbody>
                        <tr>
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
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={20}
                                />
                              </a>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
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
                      {resolved.copyright}{" "}
                      <a
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.textColor,
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
