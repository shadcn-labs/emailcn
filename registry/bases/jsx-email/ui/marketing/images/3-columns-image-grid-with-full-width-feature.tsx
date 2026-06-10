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

export type ImageCollageVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageCollageProps {
  theme?: EmailThemeTokens;
  largeSrc?: string;
  largeAlt?: string;
  smallSrc1?: string;
  smallAlt1?: string;
  smallSrc2?: string;
  smallAlt2?: string;
  variant?: ImageCollageVariant;
}

const ImageCollageSection = ({
  largeAlt,
  largeSrc,
  smallAlt1,
  smallAlt2,
  smallSrc1,
  smallSrc2,
  theme,
  variant,
}: {
  largeAlt: string;
  largeSrc: string;
  smallAlt1: string;
  smallAlt2: string;
  smallSrc1: string;
  smallSrc2: string;
  theme: EmailThemeTokens;
  variant: ImageCollageVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column style={{ padding: "8px", verticalAlign: "middle", width: "50%" }}>
        <Img
          alt={largeAlt}
          src={largeSrc}
          width={280}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
      <Column style={{ padding: "0", verticalAlign: "middle", width: "50%" }}>
        <Img
          alt={smallAlt1}
          src={smallSrc1}
          width={280}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            padding: "4px",
          }}
        />
        <Img
          alt={smallAlt2}
          src={smallSrc2}
          width={280}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            padding: "4px",
          }}
        />
      </Column>
    </Row>
  </Section>
);

export const ThreeColumnsImageGridWithFullWidthFeature = ({
  theme = defaultTheme,
  largeSrc = "https://static.photos/technology/400x500/2",
  largeAlt = "large",
  smallSrc1 = "https://static.photos/technology/400x240/3",
  smallAlt1 = "small 1",
  smallSrc2 = "https://static.photos/technology/400x240/4",
  smallAlt2 = "small 2",
  variant = "default",
}: ImageCollageProps) => (
  <Html>
    <Head />
    <Preview>image collage</Preview>
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
          <ImageCollageSection
            largeAlt={largeAlt}
            largeSrc={largeSrc}
            smallAlt1={smallAlt1}
            smallAlt2={smallAlt2}
            smallSrc1={smallSrc1}
            smallSrc2={smallSrc2}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

ThreeColumnsImageGridWithFullWidthFeature.PreviewProps = {
  largeAlt: "featured",
  largeSrc: "https://static.photos/technology/400x500/5",
  smallAlt1: "detail 1",
  smallAlt2: "detail 2",
  smallSrc1: "https://static.photos/technology/400x240/6",
  smallSrc2: "https://static.photos/technology/400x240/7",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageCollageProps;
