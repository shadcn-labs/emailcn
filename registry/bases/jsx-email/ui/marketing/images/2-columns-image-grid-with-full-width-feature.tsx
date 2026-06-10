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
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ImageFullWidthVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ImageFullWidthProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  variant?: ImageFullWidthVariant;
}

const ImageFullWidthSection = ({
  alt,
  src,
  theme,
  variant,
}: {
  alt: string;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageFullWidthVariant;
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
    </Row>
  </Section>
);

export const TwoColumnsImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  src = "https://static.photos/business/600x300/2",
  alt = "full width image",
  variant = "default",
}: ImageFullWidthProps) => (
  <Html>
    <Head />
    <Preview>full width image</Preview>
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
          <ImageFullWidthSection
            alt={alt}
            src={src}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

TwoColumnsImageGridWithFullWidthFeature.PreviewProps = {
  alt: "full width banner",
  src: "https://static.photos/business/600x300/3",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageFullWidthProps;
