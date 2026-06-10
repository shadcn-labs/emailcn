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

export type BentoGridAlternatingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BentoGridAlternatingProps {
  theme?: EmailThemeTokens;
  rows?: {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
    align: "left" | "right";
  }[];
  variant?: BentoGridAlternatingVariant;
}
const BentoGridAlternatingSection = ({
  rows,
  theme,
  variant,
}: {
  rows: BentoGridAlternatingProps["rows"];
  theme: EmailThemeTokens;
  variant: BentoGridAlternatingVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(rows ?? []).slice(0, 3).map((row, i) => (
        <Section
          key={row.title + i}
          style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}
        >
          <Row>
            {row.align === "left" ? (
              <>
                <Column
                  style={{
                    padding: "8px",
                    verticalAlign: "middle",
                    width: "40%",
                  }}
                >
                  <Img
                    alt={row.imageAlt}
                    src={row.imageUrl}
                    width={220}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </Column>
                <Column
                  style={{
                    padding: "8px",
                    verticalAlign: "middle",
                    width: "60%",
                  }}
                >
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
                    {row.title}
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
                    {row.description}
                  </Text>
                </Column>
              </>
            ) : (
              <>
                <Column
                  style={{
                    padding: "8px",
                    verticalAlign: "middle",
                    width: "60%",
                  }}
                >
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
                    {row.title}
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
                    {row.description}
                  </Text>
                </Column>
                <Column
                  style={{
                    padding: "8px",
                    verticalAlign: "middle",
                    width: "40%",
                  }}
                >
                  <Img
                    alt={row.imageAlt}
                    src={row.imageUrl}
                    width={220}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </Column>
              </>
            )}
          </Row>
        </Section>
      ))}
    </Row>
  </Section>
);
export const BentoGridWith3ColumnsAndPaddedImages = ({
  theme = defaultTheme,
  rows = [
    {
      align: "left",
      description: "Description for item 1.",
      imageAlt: "img1",
      imageUrl: "https://static.photos/technology/400x300/2",
      title: "Left Aligned",
    },
    {
      align: "right",
      description: "Description for item 2.",
      imageAlt: "img2",
      imageUrl: "https://static.photos/technology/400x300/3",
      title: "Right Aligned",
    },
  ],
  variant = "default",
}: BentoGridAlternatingProps) => (
  <Html>
    <Head />
    <Preview>bento alternating</Preview>
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
          <BentoGridAlternatingSection
            rows={rows}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BentoGridWith3ColumnsAndPaddedImages.PreviewProps = {
  rows: [
    {
      align: "left",
      description: "Text on the right side of the image.",
      imageAlt: "feature 1",
      imageUrl: "https://static.photos/technology/400x300/4",
      title: "Feature One",
    },
    {
      align: "right",
      description: "Text on the left side of the image.",
      imageAlt: "feature 2",
      imageUrl: "https://static.photos/technology/400x300/5",
      title: "Feature Two",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BentoGridAlternatingProps;
