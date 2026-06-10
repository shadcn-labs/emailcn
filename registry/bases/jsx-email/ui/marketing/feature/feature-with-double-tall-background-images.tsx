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

export type FeatureCardsVariant = "default" | "slanted-left" | "slanted-right";

export interface FeatureCardsProps {
  theme?: EmailThemeTokens;
  cards?: {
    imageSrc?: string;
    imageAlt?: string;
    heading: string;
    body: string;
  }[];
  variant?: FeatureCardsVariant;
}

const FeatureCardsSection = ({
  cards,
  theme,
  variant,
}: {
  cards: FeatureCardsProps["cards"];
  theme: EmailThemeTokens;
  variant: FeatureCardsVariant;
}) => {
  const items = cards ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.slice(0, 3).map((card, i) => (
          <Column
            key={card.heading + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: `${100 / Math.min(items.length, 3)}%`,
            }}
          >
            <Section
              style={{
                backgroundColor: theme.colorBackgroundMuted,
                borderRadius: theme.borderRadius,
                padding: theme.spacingBase ?? "24px",
              }}
            >
              <Row>
                {card.imageSrc ? (
                  <Img
                    alt={card.imageAlt ?? card.heading}
                    src={card.imageSrc}
                    width={200}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                      paddingBottom: theme.spacingBase ?? "24px",
                    }}
                  />
                ) : null}
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
                  {card.heading}
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
                  {card.body}
                </Text>
              </Row>
            </Section>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const FeatureWithDoubleTallBackgroundImages = ({
  theme = defaultTheme,
  cards = [
    { body: "Description for feature 1.", heading: "Feature 1" },
    { body: "Description for feature 2.", heading: "Feature 2" },
    { body: "Description for feature 3.", heading: "Feature 3" },
  ],
  variant = "default",
}: FeatureCardsProps) => (
  <Html>
    <Head />
    <Preview>feature cards</Preview>
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
          <FeatureCardsSection cards={cards} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  cards: [
    {
      body: "Intuitive interface designed for teams of all sizes.",
      heading: "Easy to Use",
      imageSrc: "https://static.photos/technology/200x150/2",
    },
    {
      body: "Seamlessly integrates with your existing tools.",
      heading: "Integrations",
      imageSrc: "https://static.photos/technology/200x150/3",
    },
    {
      body: "Real-time analytics to track your performance.",
      heading: "Analytics",
      imageSrc: "https://static.photos/technology/200x150/4",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureCardsProps;
