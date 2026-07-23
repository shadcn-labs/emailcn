import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Link,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

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
  theme?: TailwindConfig;
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
    <Link
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
      <Img
        alt={item.alt}
        src={item.src}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={24}
      />
    </Link>
  );

  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="social-logo-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    <Heading
                      style={{
                        color: "#030712",
                        fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                      as="h2"
                    >
                      {title}
                    </Heading>
                    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                    <Section
                      align="center"
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
                      <Fragment>
                        <Row>
                          {individual ? null : (
                            <Column style={{ width: "8px" }}>&zwj;</Column>
                          )}
                          {items.map((item, index) => (
                            <Column
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
                            </Column>
                          ))}
                          {individual ? null : (
                            <Column style={{ width: "8px" }}>&zwj;</Column>
                          )}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section
                      className="social-logo-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </Section>
                    <Text
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

export const SocialLogos = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "square-tiles",
  ...props
}: SocialLogosProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Connect with us</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SocialLogosSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

SocialLogos.PreviewProps = {
  theme: defaultTheme,
  variant: "square-tiles",
} satisfies SocialLogosProps;
