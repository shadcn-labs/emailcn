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

export type ImageSplitVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageSplitProps {
  theme?: EmailThemeTokens;
  leftSrc?: string;
  leftAlt?: string;
  rightSrc?: string;
  rightAlt?: string;
  variant?: ImageSplitVariant;
}

const ImageSplitSection = ({
  leftAlt,
  leftSrc,
  rightAlt,
  rightSrc,
  theme,
  variant,
}: {
  leftAlt: string;
  leftSrc: string;
  rightAlt: string;
  rightSrc: string;
  theme: EmailThemeTokens;
  variant: ImageSplitVariant;
}) => (
  <Section style={{ backgroundColor: theme.colorBackground, padding: "0" }}>
    <Row>
      <Column style={{ padding: "4px", width: "50%" }}>
        <Img
          alt={leftAlt}
          src={leftSrc}
          width={290}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
      <Column style={{ padding: "4px", width: "50%" }}>
        <Img
          alt={rightAlt}
          src={rightSrc}
          width={290}
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

export const FullWidthImageWithOverlay = ({
  theme = defaultTheme,
  leftSrc = "https://static.photos/city/400x300/2",
  leftAlt = "left",
  rightSrc = "https://static.photos/city/400x300/3",
  rightAlt = "right",
  variant = "default",
}: ImageSplitProps) => (
  <Html>
    <Head />
    <Preview>split image</Preview>
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
          <ImageSplitSection
            leftAlt={leftAlt}
            leftSrc={leftSrc}
            rightAlt={rightAlt}
            rightSrc={rightSrc}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FullWidthImageWithOverlay.PreviewProps = {
  leftAlt: "before",
  leftSrc: "https://static.photos/city/400x300/4",
  rightAlt: "after",
  rightSrc: "https://static.photos/city/400x300/5",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageSplitProps;
