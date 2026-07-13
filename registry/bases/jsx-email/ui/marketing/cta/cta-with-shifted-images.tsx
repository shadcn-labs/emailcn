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

export type CTAWithShiftedImagesVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithShiftedImagesProps {
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
  variant?: CTAWithShiftedImagesVariant;
}

const skewStyle = (variant: CTAWithShiftedImagesVariant): CSSProperties => {
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

const unskewStyle = (variant: CTAWithShiftedImagesVariant): CSSProperties => {
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

export const CTAWithShiftedImages = ({
  theme = defaultTheme,
  heading = "Creative Team",
  subtext = "Meet the people behind the magic.",
  ctaLabel = "Meet Us",
  ctaHref = "#",
  imageSrc1 = "https://static.photos/city/150x150/5",
  imageAlt1 = "",
  imageSrc2 = "https://static.photos/city/150x150/6",
  imageAlt2 = "",
  imageSrc3 = "https://static.photos/city/150x150/7",
  imageAlt3 = "",
  variant = "default",
}: CTAWithShiftedImagesProps) => {
  const images = [
    {
      alt: imageAlt1,
      padding: "0 8px 0 0",
      src: imageSrc1,
      translate: "-16px",
    },
    { alt: imageAlt2, padding: "0 8px", src: imageSrc2, translate: "16px" },
    { alt: imageAlt3, padding: "0 0 0 8px", src: imageSrc3, translate: "-8px" },
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
                      padding: image.padding,
                      verticalAlign: "middle",
                      width: "33.3333%",
                    }}
                  >
                    <Img
                      src={image.src}
                      alt={image.alt}
                      width="150"
                      height="150"
                      style={{
                        borderRadius: "9999px",
                        height: "auto",
                        objectFit: "cover",
                        transform: `translateY(${image.translate})`,
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
                  fontSize: theme.fontSizeLg,
                  margin: "16px 0 32px",
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

CTAWithShiftedImages.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "Meet Us",
  heading: "Creative Team",
  imageAlt1: "Team 1",
  imageAlt2: "Team 2",
  imageAlt3: "Team 3",
  imageSrc1: "https://static.photos/city/150x150/8",
  imageSrc2: "https://static.photos/city/150x150/9",
  imageSrc3: "https://static.photos/city/150x150/10",
  subtext: "Meet the people behind the magic.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithShiftedImagesProps;
