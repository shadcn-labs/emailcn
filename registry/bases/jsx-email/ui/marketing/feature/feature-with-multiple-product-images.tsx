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
          {list.slice(0, 4).map((item, i) => (
            <Section
              key={item.title + i}
              style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}
            >
              <Row>
                <Column
                  style={{ padding: "0", verticalAlign: "top", width: "10%" }}
                >
                  {item.icon ? (
                    <Img
                      alt={item.title}
                      src={item.icon}
                      width={24}
                      style={{
                        display: "block",
                        margin: "0 auto",
                        maxWidth: "100%",
                      }}
                    />
                  ) : null}
                </Column>
                <Column
                  style={{
                    padding: "0 0 0 16px",
                    verticalAlign: "top",
                    width: "90%",
                  }}
                >
                  <Text
                    style={{
                      color: theme.colorText,
                      fontFamily: theme.fontFamily,
                      fontSize: theme.fontSizeLg ?? "16px",
                      fontWeight: theme.fontWeightMedium,
                      margin: 0,
                      paddingBottom: theme.spacingBase ?? "8px",
                    }}
                  >
                    {item.title}
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
                    {item.description}
                  </Text>
                </Column>
              </Row>
            </Section>
          ))}
        </Column>
      </Row>
    </Section>
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
  <Html>
    <Head />
    <Preview>feature list</Preview>
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
          <FeatureListSection
            heading={heading}
            items={items}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
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
