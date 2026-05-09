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

export interface ContentGridProps {
  theme?: EmailThemeTokens;
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

const ContentGridSection = ({
  columnCount,
  columns,
  theme,
}: {
  columnCount: 2 | 3;
  columns: ContentGridProps["columns"];
  theme: EmailThemeTokens;
}) => {
  const slice = (columns ?? []).slice(0, columnCount);
  let widthPct = "100%";
  if (columnCount === 2) {
    widthPct = "50%";
  } else if (columnCount === 3) {
    widthPct = `${100 / 3}%`;
  }

  return (
    <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
      {slice.map((col) => (
        <MjmlColumn
          key={col.title}
          width={widthPct}
          padding={theme.spacingBase}
        >
          {col.iconUrl ? (
            <MjmlImage
              alt={col.title}
              borderRadius={theme.borderRadius}
              height={48}
              paddingBottom={theme.spacingBase ?? "16px"}
              src={col.iconUrl}
              width={48}
            />
          ) : null}
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium ?? "500"}
            paddingBottom={theme.spacingBase ?? "16px"}
          >
            {col.title}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {col.description}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const ContentGrid = ({
  theme = defaultTheme,
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: ContentGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>content-grid</MjmlPreview>
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
        <ContentGridSection
          columnCount={columnCount}
          columns={columns}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ContentGrid.PreviewProps = {
  columnCount: 2,
  columns: [
    {
      description: "Lightning-fast load times for your emails.",
      iconUrl: "https://example.com/icon1.png",
      title: "Fast Performance",
    },
    {
      description: "Simple API to get started in minutes.",
      iconUrl: "https://example.com/icon2.png",
      title: "Easy Integration",
    },
  ],
  theme: defaultTheme,
} satisfies ContentGridProps;
