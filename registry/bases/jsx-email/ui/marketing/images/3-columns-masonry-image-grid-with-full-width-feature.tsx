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

export type ImageHeroVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageHeroProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  caption?: string;
  variant?: ImageHeroVariant;
}

const ImageHeroSection = ({
  alt,
  caption,
  src,
  theme,
  variant,
}: {
  alt: string;
  caption: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageHeroVariant;
}) => (
  <Section style={{ backgroundColor: theme.colorBackground, padding: "0" }}>
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
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeSm ?? "12px",
            margin: 0,
            paddingTop: theme.spacingBase ?? "24px",
            textAlign: "center",
          }}
        >
          {caption}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const ThreeColumnsMasonryImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  src = "https://static.photos/technology/600x400/2",
  alt = "hero image",
  caption = "Image caption goes here.",
  variant = "default",
}: ImageHeroProps) => (
  <Html>
    <Head />
    <Preview>hero image</Preview>
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
          <ImageHeroSection
            alt={alt}
            caption={caption}
            src={src}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps = {
  alt: "hero image",
  caption: "A beautiful hero image showcasing the product.",
  src: "https://static.photos/technology/600x400/3",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageHeroProps;
