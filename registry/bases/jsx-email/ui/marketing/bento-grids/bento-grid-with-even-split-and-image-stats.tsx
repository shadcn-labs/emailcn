/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
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

export type BentoGridWithCtaVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BentoGridWithCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  title1?: string;
  desc1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  title2?: string;
  desc2?: string;
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BentoGridWithCtaVariant;
}

const BentoGridWithCtaSection = ({
  ctaHref,
  ctaLabel,
  desc1,
  desc2,
  heading,
  imageAlt1,
  imageAlt2,
  imageSrc1,
  imageSrc2,
  theme,
  title1,
  title2,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  desc1: string;
  desc2: string;
  heading: string;
  imageAlt1: string;
  imageAlt2: string;
  imageSrc1: string;
  imageSrc2: string;
  theme: EmailThemeTokens;
  title1: string;
  title2: string;
  variant: BentoGridWithCtaVariant;
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
              paddingBottom: theme.spacingXl ?? "48px",
              textAlign: "center",
            }}
          >
            {heading}
          </Text>
        ) : null}
      </Column>
      <Column style={{ padding: "8px", verticalAlign: "top", width: "50%" }}>
        <Img
          alt={imageAlt1}
          src={imageSrc1}
          width={280}
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
          {title1}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
          }}
        >
          {desc1}
        </Text>
      </Column>
      <Column style={{ padding: "8px", verticalAlign: "top", width: "50%" }}>
        <Img
          alt={imageAlt2}
          src={imageSrc2}
          width={280}
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
          {title2}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeBase,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
          }}
        >
          {desc2}
        </Text>
      </Column>
      {ctaLabel && ctaHref ? (
        <Column>
          <Button
            href={ctaHref}
            align="center"
            width={160}
            height={40}
            style={{
              backgroundColor: theme.colorPrimary,
              borderRadius: theme.borderRadius,
              color: theme.colorPrimaryForeground,
              display: "inline-block",
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightMedium,
              height: "auto",
              padding: `${theme.button.primary.paddingY} ${theme.button.primary.paddingX}`,
              textDecoration: "none",
              width: "auto",
            }}
          >
            {ctaLabel}
          </Button>
        </Column>
      ) : null}
    </Row>
  </Section>
);

export const BentoGridWithEvenSplitAndImageStats = ({
  theme = defaultTheme,
  heading = "Features",
  imageSrc1 = "https://static.photos/technology/400x250/2",
  imageAlt1 = "",
  title1 = "Feature One",
  desc1 = "Description for feature one.",
  imageSrc2 = "https://static.photos/technology/400x250/3",
  imageAlt2 = "",
  title2 = "Feature Two",
  desc2 = "Description for feature two.",
  ctaLabel = "View All",
  ctaHref = "#",
  variant = "default",
}: BentoGridWithCtaProps) => (
  <Html>
    <Head />
    <Preview>bento grid cta</Preview>
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
          <BentoGridWithCtaSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            desc1={desc1}
            desc2={desc2}
            heading={heading}
            imageAlt1={imageAlt1}
            imageAlt2={imageAlt2}
            imageSrc1={imageSrc1}
            imageSrc2={imageSrc2}
            theme={theme}
            title1={title1}
            title2={title2}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWithEvenSplitAndImageStats.PreviewProps = {
  ctaHref: "https://example.com",
  ctaLabel: "View All Features",
  desc1: "Powerful features to boost productivity.",
  desc2: "Seamless integration with your tools.",
  heading: "Key Features",
  imageAlt1: "feature 1",
  imageAlt2: "feature 2",
  imageSrc1: "https://static.photos/technology/400x250/4",
  imageSrc2: "https://static.photos/technology/400x250/5",
  theme: defaultTheme,
  title1: "Productivity",
  title2: "Integration",
  variant: "default",
} satisfies BentoGridWithCtaProps;
