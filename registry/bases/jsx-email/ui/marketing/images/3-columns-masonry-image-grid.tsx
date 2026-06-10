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

export type ImageRoundedVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageRoundedProps {
  theme?: EmailThemeTokens;
  src?: string;
  alt?: string;
  size?: number;
  variant?: ImageRoundedVariant;
}

const ImageRoundedSection = ({
  alt,
  size,
  src,
  theme,
  variant,
}: {
  alt: string;
  size: number;
  src: string;
  theme: EmailThemeTokens;
  variant: ImageRoundedVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Img
          alt={alt}
          src={src}
          width={size}
          height={size}
          style={{
            borderRadius: "50%",
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
    </Row>
  </Section>
);

export const ThreeColumnsMasonryImageGrid = ({
  theme = defaultTheme,
  src = "https://api.dicebear.com/9.x/lorelei/png?seed=grid-avatar-1&size=200",
  alt = "avatar",
  size = 200,
  variant = "default",
}: ImageRoundedProps) => (
  <Html>
    <Head />
    <Preview>rounded image</Preview>
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
          <ImageRoundedSection
            alt={alt}
            size={size}
            src={src}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ThreeColumnsMasonryImageGrid.PreviewProps = {
  alt: "profile photo",
  size: 200,
  src: "https://api.dicebear.com/9.x/lorelei/png?seed=grid-avatar-2&size=200",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageRoundedProps;
