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

export interface SimpleSocialLogoItem {
  alt: string;
  href: string;
  src: string;
}

export interface SimpleSocialLogosRowProps {
  theme?: TailwindConfig;
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

export const SimpleSocialLogosRowSection = ({
  title = "Connect with us",
  description = "Stay in the loop by following us across our social channels for updates, news, and behind-the-scenes moments.",
  items = defaultItems,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
}: Omit<SimpleSocialLogosRowProps, "theme">) => (
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
                  className="simple-social-content"
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
                        {items.map((item, index) => (
                          <Column
                            key={`${item.alt}-${item.href}`}
                            style={
                              index > 0 ? { paddingLeft: "16px" } : undefined
                            }
                          >
                            <Link href={item.href}>
                              <Img
                                alt={item.alt}
                                src={item.src}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={24}
                              />
                            </Link>
                          </Column>
                        ))}
                      </Row>
                    </Fragment>
                  </Section>
                  <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
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

export const SimpleSocialLogosRow = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: SimpleSocialLogosRowProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Connect with us</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SimpleSocialLogosRowSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

SimpleSocialLogosRow.PreviewProps = {
  theme: defaultTheme,
} satisfies SimpleSocialLogosRowProps;
