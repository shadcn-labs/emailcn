import { Column, Img, Row, Section, Text } from "react-email";

import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface ContentGridProps {
  theme?: EmailTheme;
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

export const ContentGrid = ({
  theme = defaultTheme,
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: ContentGridProps) => {
  const style = {
    column: {
      padding: theme.spacingBase,
      verticalAlign: "top" as const,
    },
    description: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeBase,
      lineHeight: theme.lineHeightBase,
    },
    icon: {
      height: 48,
      marginBottom: theme.spacingBase,
      objectFit: "contain" as const,
      width: 48,
    },
    section: {
      padding: `${theme.spacingXl} 0`,
    },
    title: {
      color: theme.colorText,
      fontSize: theme.fontSizeLg,
      fontWeight: theme.fontWeightMedium,
      marginBottom: "8px",
    },
  };

  return (
    <Section style={style.section}>
      <Row>
        {columns.slice(0, columnCount).map((col, index) => (
          <Column key={index} style={style.column}>
            {col.iconUrl && (
              <Img src={col.iconUrl} style={style.icon} alt={col.title} />
            )}
            <Text style={style.title}>{col.title}</Text>
            <Text style={style.description}>{col.description}</Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

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

export default ContentGrid;
