/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type SimpleFooterWithSocialIconsVariant =
  | "left-aligned"
  | "centered"
  | "right-aligned";

export interface SimpleFooterSocial {
  href: string;
  iconSrc: string;
  label: string;
}

export interface SimpleFooterWithSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: SimpleFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  mutedTextColor?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaults = {
  backgroundColor: "#fffffe",
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
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<SimpleFooterWithSocialIconsProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & { variant: SimpleFooterWithSocialIconsVariant };

export const SimpleFooterWithSocialIconsSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "left-aligned",
  } as ResolvedProps;
  const textAlign = {
    centered: "center",
    "left-aligned": "left",
    "right-aligned": "right",
  }[resolved.variant] as "center" | "left" | "right";
  const tableAlign = {
    centered: "center",
    "left-aligned": undefined,
    "right-aligned": "right",
  }[resolved.variant] as "center" | "right" | undefined;
  const tableStyle = {
    centered: { marginLeft: "auto", marginRight: "auto" },
    "left-aligned": undefined,
    "right-aligned": { marginLeft: "auto" },
  }[resolved.variant];

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
                  <td style={{ padding: "0 24px", textAlign }}>
                    <div>
                      <a href={resolved.logoHref}>
                        <img
                          alt={resolved.logoAlt}
                          src={resolved.logoSrc}
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
                          width={64}
                        />
                      </a>
                    </div>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <table
                      align={tableAlign}
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      style={tableStyle}
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
                    <div>
                      <p
                        style={{
                          color: resolved.mutedTextColor,
                          fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: "0 0 8px",
                        }}
                      >
                        © 2026 emailcn. All rights reserved.
                      </p>
                      <p
                        style={{
                          color: resolved.mutedTextColor,
                          fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                        }}
                      >
                        No longer want to receive emails?{" "}
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
                    </div>
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

export const SimpleFooterWithSocialIcons = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-aligned",
  ...props
}: SimpleFooterWithSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Simple footer with social icons</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SimpleFooterWithSocialIconsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

SimpleFooterWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies SimpleFooterWithSocialIconsProps;
