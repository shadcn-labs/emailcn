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
} from "jsx-email";
import { Fragment } from "react";

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
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
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
  src: `https://emailcn.vercel.app/api/email-assets/social/${file}`,
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
                    className="labeled-social-content"
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
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {resolvedItems.map((item, index) => (
                            <Column
                              className="labeled-social-item"
                              key={`${item.label}-${item.href}`}
                              style={
                                index > 0
                                  ? { paddingLeft: stacked ? "36px" : "28px" }
                                  : undefined
                              }
                            >
                              <Link
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
                                <Img
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
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section
                      className="labeled-social-description-gap"
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
