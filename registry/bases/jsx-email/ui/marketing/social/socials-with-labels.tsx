/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export type SocialsWithLabelsVariant = "stacked" | "inline";

export interface LabeledSocialItem {
  alt: string;
  href: string;
  label: string;
  src: string;
}

export interface SocialsWithLabelsProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: LabeledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  variant?: SocialsWithLabelsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .labeled-social-item { display: inline-block !important; padding: 0 18px 16px !important; }",
  "  .labeled-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .labeled-social-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const stackedItems: LabeledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
  ["Discord", "icon-discord.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: `https://assets.mailviews.com/images/components/social/${file}`,
}));

const inlineItems: LabeledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: `https://assets.mailviews.com/images/components/social/${file}`,
}));

export const SocialsWithLabelsSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  variant = "stacked",
}: Omit<SocialsWithLabelsProps, "theme">) => {
  const resolvedItems =
    items ?? (variant === "stacked" ? stackedItems : inlineItems);
  const stacked = variant === "stacked";

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
                    className="labeled-social-content"
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
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <tbody>
                        <tr>
                          {resolvedItems.map((item, index) => (
                            <td
                              className="labeled-social-item"
                              key={`${item.label}-${item.href}`}
                              style={
                                index > 0
                                  ? { paddingLeft: stacked ? "36px" : "28px" }
                                  : undefined
                              }
                            >
                              <a
                                href={item.href}
                                style={{
                                  color: "#6b7280",
                                  display: stacked ? "inline-block" : undefined,
                                  fontFamily,
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  textAlign: "center",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  alt={stacked ? item.alt : ""}
                                  src={item.src}
                                  style={{
                                    marginBottom: stacked ? "4px" : undefined,
                                    maxWidth: "100%",
                                    verticalAlign: stacked ? "middle" : "top",
                                  }}
                                  width={stacked ? 24 : 16}
                                />
                                {stacked ? <br /> : null}
                                <span
                                  style={
                                    stacked ? undefined : { marginLeft: "6px" }
                                  }
                                >
                                  {item.label}
                                </span>
                              </a>
                            </td>
                          ))}
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="labeled-social-description-gap"
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

export const SocialsWithLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialsWithLabelsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Connect with us</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SocialsWithLabelsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

SocialsWithLabels.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies SocialsWithLabelsProps;
