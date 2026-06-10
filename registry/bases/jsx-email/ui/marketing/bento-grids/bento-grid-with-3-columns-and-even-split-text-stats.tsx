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

export type BentoGridWithImagesAndCaptionsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndCaptionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subheading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  caption1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  caption2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  caption3?: string;
  variant?: BentoGridWithImagesAndCaptionsVariant;
}

const BentoGridWithImagesAndCaptionsSection = ({
  caption1,
  caption2,
  caption3,
  heading,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  subheading,
  theme,
  variant,
}: {
  caption1: string;
  caption2: string;
  caption3: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageAlt3: string;
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  subheading: string;
  theme: EmailThemeTokens;
  variant: BentoGridWithImagesAndCaptionsVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {heading ? (
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeHeading,
              fontWeight: theme.fontWeightBold,
              margin: 0,
              paddingBottom: theme.spacingBase ?? "24px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        ) : null}
        {subheading ? (
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
              lineHeight: theme.lineHeightBase,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {subheading}
          </Text>
        ) : null}
      </Column>
      <Column
        style={{ padding: "0 8px", verticalAlign: "top", width: "33.33%" }}
      >
        <Img
          alt={imageAlt1}
          src={imageSrc1}
          width={260}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
          }}
        >
          {caption1}
        </Text>
      </Column>
      <Column
        style={{ padding: "0 8px", verticalAlign: "top", width: "33.33%" }}
      >
        <Img
          alt={imageAlt2}
          src={imageSrc2}
          width={260}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
          }}
        >
          {caption2}
        </Text>
      </Column>
      <Column
        style={{ padding: "0 8px", verticalAlign: "top", width: "33.33%" }}
      >
        <Img
          alt={imageAlt3}
          src={imageSrc3}
          width={260}
          style={{
            borderRadius: theme.borderRadius,
            display: "block",
            margin: "0 auto",
            maxWidth: "100%",
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        />
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            fontWeight: theme.fontWeightMedium,
            margin: 0,
          }}
        >
          {caption3}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const BentoGridWith3ColumnsAndEvenSplitTextStats = ({
  theme = defaultTheme,
  heading = "Our Work",
  subheading = "A selection of our recent projects.",
  imageSrc1 = "https://static.photos/technology/400x300/2",
  imageAlt1 = "",
  caption1 = "Project Alpha",
  imageSrc2 = "https://static.photos/technology/400x300/3",
  imageAlt2 = "",
  caption2 = "Project Beta",
  imageSrc3 = "https://static.photos/technology/400x300/4",
  imageAlt3 = "",
  caption3 = "Project Gamma",
  variant = "default",
}: BentoGridWithImagesAndCaptionsProps) => (
  <Html>
    <Head />
    <Preview>bento grid captions</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorText,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <BentoGridWithImagesAndCaptionsSection
            caption1={caption1}
            caption2={caption2}
            caption3={caption3}
            heading={heading}
            imageAlt1={imageAlt1}
            imageAlt2={imageAlt2}
            imageAlt3={imageAlt3}
            imageSrc1={imageSrc1}
            imageSrc2={imageSrc2}
            imageSrc3={imageSrc3}
            subheading={subheading}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BentoGridWith3ColumnsAndEvenSplitTextStats.PreviewProps = {
  caption1: "Project Alpha",
  caption2: "Project Beta",
  caption3: "Project Gamma",
  heading: "Our Work",
  imageAlt1: "Project Alpha",
  imageAlt2: "Project Beta",
  imageAlt3: "Project Gamma",
  imageSrc1: "https://static.photos/technology/400x300/5",
  imageSrc2: "https://static.photos/technology/400x300/6",
  imageSrc3: "https://static.photos/technology/400x300/7",
  subheading: "A selection of our recent projects.",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndCaptionsProps;
