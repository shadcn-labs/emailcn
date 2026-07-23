/* eslint-disable next/no-img-element */
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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export type SocialLogosVariant =
  | "square-tiles"
  | "squared-box"
  | "circle-tiles"
  | "pill-box"
  | "outlined-square-tiles"
  | "outlined-circle-tiles"
  | "outlined-box"
  | "outlined-pill-box";

export interface SocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

export interface SocialLogosProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialLogosVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .social-logo-item { display: inline-block !important; padding: 0 8px 16px !important; }",
  "  .social-logo-group-item { display: inline-block !important; }",
  "  .social-logo-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .social-logo-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const defaultItems: SocialLogoItem[] = [
  {
    alt: "LinkedIn",
    href: "https://example.com",
    src: "https://emailcn.vercel.app/api/email-assets/social/icon-linkedin.png",
  },
  {
    alt: "X",
    href: "https://example.com",
    src: "https://emailcn.vercel.app/api/email-assets/social/icon-x.png",
  },
  {
    alt: "YouTube",
    href: "https://example.com",
    src: "https://emailcn.vercel.app/api/email-assets/social/icon-youtube.png",
  },
  {
    alt: "Instagram",
    href: "https://example.com",
    src: "https://emailcn.vercel.app/api/email-assets/social/icon-instagram.png",
  },
  {
    alt: "Discord",
    href: "https://example.com",
    src: "https://emailcn.vercel.app/api/email-assets/social/icon-discord.png",
  },
];

const individualVariants = new Set<SocialLogosVariant>([
  "square-tiles",
  "circle-tiles",
  "outlined-square-tiles",
  "outlined-circle-tiles",
]);

const variantStyle = (variant: SocialLogosVariant) => {
  const outlined = variant.startsWith("outlined");
  const rounded = variant.includes("circle") || variant.includes("pill");

  return {
    backgroundColor: outlined ? undefined : "#f3f4f6",
    border: outlined ? "1px solid #d1d5db" : undefined,
    borderRadius: rounded ? "9999px" : "4px",
  };
};

export const SocialLogosSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = defaultItems,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  variant = "square-tiles",
}: Omit<SocialLogosProps, "theme">) => {
  const individual = individualVariants.has(variant);
  const decoration = variantStyle(variant);

  const itemLink = (item: SocialLogoItem) => (
    <a
      href={item.href}
      style={{
        ...(individual ? decoration : {}),
        color: "#6b7280",
        display: "inline-block",
        fontFamily,
        fontSize: "16px",
        fontWeight: 500,
        lineHeight: "24px",
        padding: "20px",
        textAlign: "center",
        textDecoration: "none",
      }}
    >
      <img
        alt={item.alt}
        src={item.src}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={24}
      />
    </a>
  );

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "44px" }}>&zwj;</div>
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
                    className="social-logo-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    <h2
                      style={{
                        color: "#030712",
                        fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {title}
                    </h2>
                    <div style={{ lineHeight: "36px" }}>&zwj;</div>
                    <table
                      align="center"
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      style={
                        individual
                          ? { marginLeft: "auto", marginRight: "auto" }
                          : {
                              ...decoration,
                              marginLeft: "auto",
                              marginRight: "auto",
                            }
                      }
                    >
                      <tbody>
                        <tr>
                          {individual ? null : (
                            <td style={{ width: "8px" }}>&zwj;</td>
                          )}
                          {items.map((item, index) => (
                            <td
                              className={
                                individual
                                  ? "social-logo-item"
                                  : "social-logo-group-item"
                              }
                              key={`${item.alt}-${item.href}`}
                              style={
                                individual && index > 0
                                  ? { paddingLeft: "16px" }
                                  : undefined
                              }
                            >
                              {itemLink(item)}
                            </td>
                          ))}
                          {individual ? null : (
                            <td style={{ width: "8px" }}>&zwj;</td>
                          )}
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="social-logo-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </div>
                    <p
                      style={{
                        color: "#4b5563",
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {description}
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

export const SocialLogos = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-tiles",
  ...props
}: SocialLogosProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlPreview>Connect with us</MjmlPreview>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <SocialLogosSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SocialLogos.PreviewProps = {
  theme: defaultTheme,
  variant: "square-tiles",
} satisfies SocialLogosProps;
