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

export type FeatureListVariant = "default" | "slanted-left" | "slanted-right";

export interface FeatureListProps {
  theme?: EmailThemeTokens;
  heading?: string;
  items?: { icon?: string; title: string; description: string }[];
  variant?: FeatureListVariant;
}

const FeatureListSection = ({
  heading,
  items,
  theme,
  variant,
}: {
  heading: string;
  items: FeatureListProps["items"];
  theme: EmailThemeTokens;
  variant: FeatureListVariant;
}) => {
  const list = items ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {heading ? (
          <MjmlText
            align="center"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeHeading}
            fontWeight={theme.fontWeightBold}
            paddingBottom={theme.spacingXl ?? "48px"}
          >
            {heading}
          </MjmlText>
        ) : null}
        {list.slice(0, 4).map((item, i) => (
          <MjmlSection
            key={item.title + i}
            padding={`${theme.spacingBase ?? "24px"} 0`}
          >
            <MjmlColumn width="10%" padding="0" verticalAlign="top">
              {item.icon ? (
                <MjmlImage alt={item.title} src={item.icon} width={24} />
              ) : null}
            </MjmlColumn>
            <MjmlColumn width="90%" padding="0 0 0 16px" verticalAlign="top">
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeLg ?? "16px"}
                fontWeight={theme.fontWeightMedium}
                paddingBottom={theme.spacingBase ?? "8px"}
              >
                {item.title}
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                lineHeight={theme.lineHeightBase}
              >
                {item.description}
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const FeatureWithMultipleProductImages = ({
  theme = defaultTheme,
  heading = "Key Features",
  items = [
    { description: "Description for feature one.", title: "Feature One" },
    { description: "Description for feature two.", title: "Feature Two" },
  ],
  variant = "default",
}: FeatureListProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>feature list</MjmlPreview>
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
        <FeatureListSection
          heading={heading}
          items={items}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeatureWithMultipleProductImages.PreviewProps = {
  heading: "Key Features",
  items: [
    {
      description: "Build responsive emails quickly.",
      title: "Fast Prototyping",
    },
    {
      description: "Works across all email clients.",
      title: "Cross-Client Support",
    },
    {
      description: "Easily customize every component.",
      title: "Fully Customizable",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies FeatureListProps;
