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

export type BentoGridFeaturedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridFeaturedProps {
  theme?: EmailThemeTokens;
  heading?: string;
  featuredImage?: string;
  featuredAlt?: string;
  featuredTitle?: string;
  featuredDesc?: string;
  smallImage1?: string;
  smallAlt1?: string;
  smallTitle1?: string;
  smallImage2?: string;
  smallAlt2?: string;
  smallTitle2?: string;
  variant?: BentoGridFeaturedVariant;
}

const BentoGridFeaturedSection = ({
  heading,
  featuredImage,
  featuredAlt,
  featuredTitle,
  featuredDesc,
  smallImage1,
  smallAlt1,
  smallTitle1,
  smallImage2,
  smallAlt2,
  smallTitle2,
  theme,
  variant,
}: {
  heading: string;
  featuredImage: string;
  featuredAlt: string;
  featuredTitle: string;
  featuredDesc: string;
  smallImage1: string;
  smallAlt1: string;
  smallTitle1: string;
  smallImage2: string;
  smallAlt2: string;
  smallTitle2: string;
  theme: EmailThemeTokens;
  variant: BentoGridFeaturedVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {heading ? (
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        </Column>
      ) : null}
      <Column style={{ padding: "8px", verticalAlign: "top", width: "60%" }}>
        <Img
          alt={featuredAlt}
          src={featuredImage}
          width={340}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "16px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeXl,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
          }}
        >
          {featuredTitle}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            lineHeight: theme.lineHeightBase,
            margin: 0,
          }}
        >
          {featuredDesc}
        </Text>
      </Column>
      <Column style={{ padding: "8px", verticalAlign: "top", width: "40%" }}>
        <Img
          alt={smallAlt1}
          src={smallImage1}
          width={220}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "16px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
          }}
        >
          {smallTitle1}
        </Text>
        <Img
          alt={smallAlt2}
          src={smallImage2}
          width={220}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "16px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
          }}
        >
          {smallTitle2}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const BentoGridWithEvenSplitAndTwoThirds = ({
  theme = defaultTheme,
  heading = "Featured",
  featuredImage = "https://static.photos/technology/600x350/2",
  featuredAlt = "",
  featuredTitle = "Featured Content",
  featuredDesc = "Main featured item with larger visual space.",
  smallImage1 = "https://static.photos/business/300x150/3",
  smallAlt1 = "",
  smallTitle1 = "Item One",
  smallImage2 = "https://static.photos/business/300x150/4",
  smallAlt2 = "",
  smallTitle2 = "Item Two",
  variant = "default",
}: BentoGridFeaturedProps) => (
  <Html>
    <Head />
    <Preview>bento featured</Preview>
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
          <BentoGridFeaturedSection
            featuredDesc={featuredDesc}
            featuredImage={featuredImage}
            featuredAlt={featuredAlt}
            featuredTitle={featuredTitle}
            heading={heading}
            smallAlt1={smallAlt1}
            smallAlt2={smallAlt2}
            smallImage1={smallImage1}
            smallImage2={smallImage2}
            smallTitle1={smallTitle1}
            smallTitle2={smallTitle2}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWithEvenSplitAndTwoThirds.PreviewProps = {
  featuredAlt: "featured",
  featuredDesc: "Highlight your main content with this bento grid layout.",
  featuredImage: "https://static.photos/technology/600x350/5",
  featuredTitle: "Main Feature",
  heading: "Featured Content",
  smallAlt1: "item 1",
  smallAlt2: "item 2",
  smallImage1: "https://static.photos/business/300x150/6",
  smallImage2: "https://static.photos/business/300x150/7",
  smallTitle1: "Secondary Item 1",
  smallTitle2: "Secondary Item 2",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridFeaturedProps;
