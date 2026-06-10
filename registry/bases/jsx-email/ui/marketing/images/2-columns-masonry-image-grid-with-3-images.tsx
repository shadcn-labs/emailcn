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

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ImageBannerVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageBannerProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  overlayText?: string;
  variant?: ImageBannerVariant;
}

const ImageBannerSection = ({
  alt,
  overlayText,
  src,
  theme,
  variant,
}: {
  alt: string;
  overlayText: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageBannerVariant;
}) => (
  <Section
    style={{ backgroundColor: theme.colorBackgroundMuted, padding: "0" }}
  >
    <Row>
      <Column style={{ padding: "0" }}>
        <Img
          alt={alt}
          src={src}
          width={600}
          style={{
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            padding: "0",
          }}
        />
      </Column>
      <Column>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeXl ?? "20px",
            fontWeight: theme.fontWeightBold,
            margin: 0,
            padding: `${theme.spacingBase ?? "24px"} ${theme.spacingBase ?? "24px"}`,
            textAlign: "center",
          }}
        >
          {overlayText}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const TwoColumnsMasonryImageGridWith3Images = ({
  theme = defaultTheme,
  src = "https://static.photos/business/600x200/2",
  alt = "banner",
  overlayText = "Banner Text",
  variant = "default",
}: ImageBannerProps) => (
  <Html>
    <Head />
    <Preview>image banner</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <ImageBannerSection
            alt={alt}
            overlayText={overlayText}
            src={src}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  alt: "promotional banner",
  overlayText: "Seasonal Sale — Up to 50% Off",
  src: "https://static.photos/business/600x200/3",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageBannerProps;
