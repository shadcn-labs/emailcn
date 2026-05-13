/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 3).map((card, i) => (
        <MjmlColumn
          key={card.heading + i}
          width={`${100 / Math.min(items.length, 3)}%`}
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          <MjmlSection
            backgroundColor={theme.colorBackgroundMuted}
            borderRadius={theme.borderRadius}
            padding={theme.spacingBase ?? "24px"}
          >
            {card.imageSrc ? (
              <MjmlImage
                alt={card.imageAlt ?? card.heading}
                borderRadius={theme.borderRadius}
                src={card.imageSrc}
                width={200}
                paddingBottom={theme.spacingBase ?? "24px"}
              />
            ) : null}
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeLg ?? "16px"}
              fontWeight={theme.fontWeightMedium}
              paddingBottom={theme.spacingBase ?? "16px"}
            >
              {card.heading}
            </MjmlText>
            <MjmlText
              color={theme.colorTextMuted}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase ?? "14px"}
              lineHeight={theme.lineHeightBase}
            >
              {card.body}
            </MjmlText>
          </MjmlSection>
        </MjmlColumn>
      ))}
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature cards</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <FeatureCardsSection cards={cards} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
