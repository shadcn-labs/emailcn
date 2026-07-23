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

export interface SimpleSocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

export interface SimpleSocialLogosRowProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  items?: SimpleSocialLogoItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 430px) {",
  "  .simple-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

const defaultItems: SimpleSocialLogoItem[] = [
  {
    alt: "LinkedIn",
    href: "https://example.com",
    src: "https://assets.mailviews.com/images/components/social/icon-linkedin.png",
  },
  {
    alt: "X",
    href: "https://example.com",
    src: "https://assets.mailviews.com/images/components/social/icon-x.png",
  },
  {
    alt: "YouTube",
    href: "https://example.com",
    src: "https://assets.mailviews.com/images/components/social/icon-youtube.png",
  },
  {
    alt: "Instagram",
    href: "https://example.com",
    src: "https://assets.mailviews.com/images/components/social/icon-instagram.png",
  },
  {
    alt: "Discord",
    href: "https://example.com",
    src: "https://assets.mailviews.com/images/components/social/icon-discord.png",
  },
];

export const SimpleSocialLogosRowSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = defaultItems,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
}: Omit<SimpleSocialLogosRowProps, "theme">) => (
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
                  className="simple-social-content"
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
                        {items.map((item, index) => (
                          <td
                            key={`${item.alt}-${item.href}`}
                            style={
                              index > 0 ? { paddingLeft: "16px" } : undefined
                            }
                          >
                            <a href={item.href}>
                              <img
                                alt={item.alt}
                                src={item.src}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={24}
                              />
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                  <div style={{ lineHeight: "36px" }}>&zwj;</div>
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

export const SimpleSocialLogosRow = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SimpleSocialLogosRowProps) => (
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
          <SimpleSocialLogosRowSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SimpleSocialLogosRow.PreviewProps = {
  theme: defaultTheme,
} satisfies SimpleSocialLogosRowProps;
