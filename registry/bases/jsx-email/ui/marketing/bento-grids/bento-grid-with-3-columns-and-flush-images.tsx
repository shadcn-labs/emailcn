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

export type BentoGridWithImagesAndDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithImagesAndDetailsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  detailTitle1?: string;
  detailDesc1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  detailTitle2?: string;
  detailDesc2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  detailTitle3?: string;
  detailDesc3?: string;
  variant?: BentoGridWithImagesAndDetailsVariant;
}

const BentoGridWithImagesAndDetailsSection = ({
  detailDesc1,
  detailDesc2,
  detailDesc3,
  detailTitle1,
  detailTitle2,
  detailTitle3,
  heading,
  imageAlt1,
  imageAlt2,
  imageAlt3,
  imageSrc1,
  imageSrc2,
  imageSrc3,
  theme,
  variant,
}: {
  detailDesc1: string;
  detailDesc2: string;
  detailDesc3: string;
  detailTitle1: string;
  detailTitle2: string;
  detailTitle3: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageAlt3: string;
  imageSrc1: string;
  imageSrc2: string;
  imageSrc3: string;
  theme: EmailThemeTokens;
  variant: BentoGridWithImagesAndDetailsVariant;
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
            fontSize: theme.fontSizeLg ?? "16px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        >
          {detailTitle1}
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
          {detailDesc1}
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
            fontSize: theme.fontSizeLg ?? "16px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        >
          {detailTitle2}
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
          {detailDesc2}
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
            fontSize: theme.fontSizeLg ?? "16px",
            fontWeight: theme.fontWeightMedium,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "24px",
          }}
        >
          {detailTitle3}
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
          {detailDesc3}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const BentoGridWith3ColumnsAndFlushImages = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://static.photos/technology/400x300/2",
  imageAlt1 = "",
  detailTitle1 = "Feature One",
  detailDesc1 = "Description for feature one.",
  imageSrc2 = "https://static.photos/technology/400x300/3",
  imageAlt2 = "",
  detailTitle2 = "Feature Two",
  detailDesc2 = "Description for feature two.",
  imageSrc3 = "https://static.photos/technology/400x300/4",
  imageAlt3 = "",
  detailTitle3 = "Feature Three",
  detailDesc3 = "Description for feature three.",
  variant = "default",
}: BentoGridWithImagesAndDetailsProps) => (
  <Html>
    <Head />
    <Preview>bento grid details</Preview>
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
          <BentoGridWithImagesAndDetailsSection
            detailDesc1={detailDesc1}
            detailDesc2={detailDesc2}
            detailDesc3={detailDesc3}
            detailTitle1={detailTitle1}
            detailTitle2={detailTitle2}
            detailTitle3={detailTitle3}
            heading={heading}
            imageAlt1={imageAlt1}
            imageAlt2={imageAlt2}
            imageAlt3={imageAlt3}
            imageSrc1={imageSrc1}
            imageSrc2={imageSrc2}
            imageSrc3={imageSrc3}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BentoGridWith3ColumnsAndFlushImages.PreviewProps = {
  detailDesc1: "Drag-and-drop builder for rapid email creation.",
  detailDesc2: "Works flawlessly across all major email clients.",
  detailDesc3: "Real-time collaboration for your team.",
  detailTitle1: "Visual Builder",
  detailTitle2: "Responsive",
  detailTitle3: "Collaboration",
  heading: "Features",
  imageAlt1: "Visual Builder",
  imageAlt2: "Responsive",
  imageAlt3: "Collaboration",
  imageSrc1: "https://static.photos/technology/400x300/5",
  imageSrc2: "https://static.photos/technology/400x300/6",
  imageSrc3: "https://static.photos/technology/400x300/7",
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridWithImagesAndDetailsProps;
