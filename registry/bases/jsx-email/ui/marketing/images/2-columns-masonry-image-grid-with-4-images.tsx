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

export type ImageCardVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageCardProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  title?: string;
  description?: string;
  variant?: ImageCardVariant;
}

const ImageCardSection = ({
  alt,
  description,
  src,
  theme,
  title,
  variant,
}: {
  alt: string;
  description: string;
  src: string;
  theme: EmailThemeTokens;
  title: string;
  variant: ImageCardVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackgroundMuted,
      borderRadius: theme.borderRadius,
      padding: "0",
    }}
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
      <Column style={{ padding: `${theme.spacingBase ?? "24px"}` }}>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg ?? "16px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase ?? "14px",
            lineHeight: theme.lineHeightBase,
            margin: 0,
          }}
        >
          {description}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const TwoColumnsMasonryImageGridWith4Images = ({
  theme = defaultTheme,
  src = "https://static.photos/business/600x300/2",
  alt = "card image",
  title = "Image Card Title",
  description = "A description that accompanies the image card.",
  variant = "default",
}: ImageCardProps) => (
  <Html>
    <Head />
    <Preview>image card</Preview>
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
          <ImageCardSection
            alt={alt}
            description={description}
            src={src}
            theme={theme}
            title={title}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  alt: "card image",
  description:
    "This card layout pairs an image with descriptive text below it.",
  src: "https://static.photos/business/600x300/3",
  theme: defaultTheme,
  title: "Image Card",
  variant: "default",
} satisfies ImageCardProps;
