import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Link,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type SocialsWithTileLabelsVariant = "stacked" | "inline";

export interface TiledSocialItem {
  alt: string;
  href: string;
  label: string;
  src: string;
}

export interface SocialsWithTileLabelsProps {
  theme?: TailwindConfig;
  title?: string;
  description?: string;
  items?: TiledSocialItem[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  tileBackgroundColor?: string;
  variant?: SocialsWithTileLabelsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .tiled-social-item { display: inline-block !important; padding: 0 8px 16px !important; }",
  "  .tiled-social-spacer { display: none !important; }",
  "  .tiled-social-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .tiled-social-description-gap { line-height: 20px !important; }",
  "}",
].join("\n");

const stackedItems: TiledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["X", "icon-x.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
}));

const inlineItems: TiledSocialItem[] = [
  ["LinkedIn", "icon-linkedin.png"],
  ["Facebook", "icon-facebook.png"],
  ["YouTube", "icon-youtube.png"],
  ["Instagram", "icon-instagram.png"],
].map(([label, file]) => ({
  alt: label,
  href: "https://example.com",
  label,
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
}));

export const SocialsWithTileLabelsSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  tileBackgroundColor = "#f3f4f6",
  variant = "stacked",
}: Omit<SocialsWithTileLabelsProps, "theme">) => {
  const resolvedItems =
    items ?? (variant === "stacked" ? stackedItems : inlineItems);
  const stacked = variant === "stacked";

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
                    className="tiled-social-content"
                    style={{
                      padding: stacked ? "0 52px" : "0 24px",
                      textAlign: "center",
                    }}
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
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {resolvedItems.map((item, index) => (
                            <Fragment key={`${item.label}-${item.href}`}>
                              {index > 0 ? (
                                <Column
                                  className="tiled-social-spacer"
                                  style={{ width: "16px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              <Column
                                className="tiled-social-item"
                                style={{
                                  backgroundColor: tileBackgroundColor,
                                  width: stacked ? "112px" : undefined,
                                }}
                              >
                                <Link
                                  href={item.href}
                                  style={{
                                    backgroundColor: tileBackgroundColor,
                                    borderRadius: "4px",
                                    color: "#6b7280",
                                    display: "block",
                                    fontFamily,
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    padding: "16px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                  }}
                                >
                                  <Img
                                    alt={stacked ? item.alt : ""}
                                    src={item.src}
                                    style={{
                                      maxWidth: "100%",
                                      verticalAlign: stacked ? "middle" : "top",
                                    }}
                                    width={stacked ? 24 : 16}
                                  />
                                  {stacked ? <br /> : null}
                                  <span
                                    style={
                                      stacked
                                        ? undefined
                                        : { marginLeft: "6px" }
                                    }
                                  >
                                    {item.label}
                                  </span>
                                </Link>
                              </Column>
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section
                      className="tiled-social-description-gap"
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

export const SocialsWithTileLabels = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "stacked",
  ...props
}: SocialsWithTileLabelsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Connect with us</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SocialsWithTileLabelsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

SocialsWithTileLabels.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies SocialsWithTileLabelsProps;
