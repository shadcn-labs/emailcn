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

export type ImageTriptychVariant = "default" | "slanted-left" | "slanted-right";

export interface ImageTriptychProps {
  theme?: EmailThemeTokens;
  src1?: string;
  alt1?: string;
  src2?: string;
  alt2?: string;
  src3?: string;
  alt3?: string;
  variant?: ImageTriptychVariant;
}

const ImageTriptychSection = ({
  alt1,
  alt2,
  alt3,
  src1,
  src2,
  src3,
  theme,
  variant,
}: {
  alt1: string;
  alt2: string;
  alt3: string;
  src1: string;
  src2: string;
  src3: string;
  theme: EmailThemeTokens;
  variant: ImageTriptychVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column style={{ padding: "4px", width: "33.33%" }}>
        <Img
          alt={alt1}
          src={src1}
          width={190}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
      <Column style={{ padding: "4px", width: "33.33%" }}>
        <Img
          alt={alt2}
          src={src2}
          width={190}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
          }}
        />
      </Column>
      <Column style={{ padding: "4px", width: "33.33%" }}>
        <Img
          alt={alt3}
          src={src3}
          width={190}
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

export const FullWidthImage = ({
  theme = defaultTheme,
  src1 = "https://static.photos/technology/300x300/2",
  alt1 = "image 1",
  src2 = "https://static.photos/technology/300x300/3",
  alt2 = "image 2",
  src3 = "https://static.photos/technology/300x300/4",
  alt3 = "image 3",
  variant = "default",
}: ImageTriptychProps) => (
  <Html>
    <Head />
    <Preview>image triptych</Preview>
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
          <ImageTriptychSection
            alt1={alt1}
            alt2={alt2}
            alt3={alt3}
            src1={src1}
            src2={src2}
            src3={src3}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

FullWidthImage.PreviewProps = {
  alt1: "product 1",
  alt2: "product 2",
  alt3: "product 3",
  src1: "https://static.photos/technology/300x300/5",
  src2: "https://static.photos/technology/300x300/6",
  src3: "https://static.photos/technology/300x300/7",
  theme: defaultTheme,
  variant: "default",
} satisfies ImageTriptychProps;
