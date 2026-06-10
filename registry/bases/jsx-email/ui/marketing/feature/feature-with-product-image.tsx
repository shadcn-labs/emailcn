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

export type FeatureRightImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FeatureRightImageProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  body?: string;
  variant?: FeatureRightImageVariant;
}

const FeatureRightImageSection = ({
  body,
  heading,
  imageAlt,
  imageSrc,
  theme,
  variant,
}: {
  body: string;
  heading: string;
  imageAlt: string;
  imageSrc: string;
  theme: EmailThemeTokens;
  variant: FeatureRightImageVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column
        style={{ padding: "0 12px", verticalAlign: "middle", width: "60%" }}
      >
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeXl ?? "20px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "16px",
          }}
        >
          {heading}
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
          {body}
        </Text>
      </Column>
      <Column
        style={{ padding: "0 12px", verticalAlign: "middle", width: "40%" }}
      >
        <Img
          alt={imageAlt}
          src={imageSrc}
          width={220}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
    </Row>
  </Section>
);

export const FeatureWithProductImage = ({
  theme = defaultTheme,
  imageSrc = "https://static.photos/technology/400x300/2",
  imageAlt = "feature",
  heading = "Feature Title",
  body = "Description of the feature shown on the right side.",
  variant = "default",
}: FeatureRightImageProps) => (
  <Html>
    <Head />
    <Preview>feature right image</Preview>
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
          <FeatureRightImageSection
            body={body}
            heading={heading}
            imageAlt={imageAlt}
            imageSrc={imageSrc}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FeatureWithProductImage.PreviewProps = {
  body: "Image displayed on the right with supporting text on the left.",
  heading: "Feature with Right Image",
  imageAlt: "feature",
  imageSrc: "https://static.photos/technology/400x300/3",
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureRightImageProps;
