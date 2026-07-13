/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CTAWithImageStripVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithImageStripProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageSrc4?: string;
  imageAlt4?: string;
  variant?: CTAWithImageStripVariant;
}

const skewStyle = (variant: CTAWithImageStripVariant): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(-10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(10deg)" };
    }
    default: {
      return {};
    }
  }
};

const unskewStyle = (variant: CTAWithImageStripVariant): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(-10deg)" };
    }
    default: {
      return {};
    }
  }
};

export const CTAWithImageStrip = ({
  theme = defaultTheme,
  heading = "Featured Brands",
  subtext = "Discover our partner brands.",
  ctaLabel = "Explore",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x100/6",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x100/7",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x100/8",
  imageAlt3 = "",
  imageSrc4 = "https://static.photos/city/150x100/9",
  imageAlt4 = "",
  variant = "default",
}: CTAWithImageStripProps) => {
  const images = [
    { alt: imageAlt1, src: imageSrc1 },
    { alt: imageAlt2, src: imageSrc2 },
    { alt: imageAlt3, src: imageSrc3 },
    { alt: imageAlt4, src: imageSrc4 },
  ];
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
          <Section style={{ padding: "64px 0", ...skewStyle(variant) }}>
            <Section style={{ textAlign: "center", ...unskewStyle(variant) }}>
              <Row style={{ marginBottom: "32px" }}>
                {images.map((image) => (
                  <Column
                    key={image.alt}
                    style={{
                      padding: "0 8px",
                      verticalAlign: "middle",
                      width: "25%",
                    }}
                  >
                    <Img
                      src={image.src}
                      alt={image.alt}
                      width="150"
                      height="100"
                      style={{
                        borderRadius: theme.borderRadius,
                        height: "auto",
                        objectFit: "cover",
                        width: "100%",
                      }}
                    />
                  </Column>
                ))}
              </Row>
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeHeading,
                  fontWeight: theme.fontWeightBold,
                  lineHeight: 1.375,
                  margin: 0,
                }}
              >
                {heading}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  margin: "8px 0 24px",
                }}
              >
                {subtext}
              </Text>
              {ctaLabel && ctaHref ? (
                <a
                  href={ctaHref}
                  style={{
                    backgroundColor: theme.colorPrimary,
                    borderRadius: theme.borderRadius,
                    color: theme.colorPrimaryForeground,
                    display: "inline-block",
                    fontSize: theme.fontSizeBase,
                    fontWeight: theme.fontWeightMedium,
                    padding: "12px 32px",
                    textDecoration: "none",
                  }}
                >
                  {ctaLabel}
                </a>
              ) : null}
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

CTAWithImageStrip.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Explore",
  heading: "Featured Brands",
  imageAlt1: "Brand 1",
  imageAlt2: "Brand 2",
  imageAlt3: "Brand 3",
  imageAlt4: "Brand 4",
  imageSrc1: "https://static.photos/city/150x100/10",
  imageSrc2: "https://static.photos/city/150x100/11",
  imageSrc3: "https://static.photos/city/150x100/12",
  imageSrc4: "https://static.photos/city/150x100/13",
  subtext: "Discover our partner brands.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithImageStripProps;
