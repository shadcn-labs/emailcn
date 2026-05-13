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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(rows ?? []).slice(0, 3).map((row, i) => (
      <MjmlSection
        key={row.title + i}
        padding={`${theme.spacingBase ?? "24px"} 0`}
      >
        {row.align === "left" ? (
          <>
            <MjmlColumn width="40%" padding="8px" verticalAlign="middle">
              <MjmlImage
                alt={row.imageAlt}
                borderRadius={theme.borderRadius}
                src={row.imageUrl}
                width={220}
              />
            </MjmlColumn>
            <MjmlColumn width="60%" padding="8px" verticalAlign="middle">
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeXl}
                fontWeight={theme.fontWeightMedium}
                paddingBottom={theme.spacingBase ?? "8px"}
              >
                {row.title}
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase}
                lineHeight={theme.lineHeightBase}
              >
                {row.description}
              </MjmlText>
            </MjmlColumn>
          </>
        ) : (
          <>
            <MjmlColumn width="60%" padding="8px" verticalAlign="middle">
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeXl}
                fontWeight={theme.fontWeightMedium}
                paddingBottom={theme.spacingBase ?? "8px"}
              >
                {row.title}
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase}
                lineHeight={theme.lineHeightBase}
              >
                {row.description}
              </MjmlText>
            </MjmlColumn>
            <MjmlColumn width="40%" padding="8px" verticalAlign="middle">
              <MjmlImage
                alt={row.imageAlt}
                borderRadius={theme.borderRadius}
                src={row.imageUrl}
                width={220}
              />
            </MjmlColumn>
          </>
        )}
      </MjmlSection>
    ))}
  </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>bento alternating</MjmlPreview>
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
        <BentoGridAlternatingSection
          rows={rows}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
