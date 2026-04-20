import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

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
  const t = resolveEmailTheme(theme);
  const slice = columns.slice(0, columnCount);
  const widthPct =
    columnCount === 3 ? `${100 / 3}%` : (columnCount === 2 ? "50%" : "100%");

  return (
    <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
      {slice.map((col, index) => (
        <MjmlColumn key={col.title} width={widthPct} padding={t.spacing.md}>
          {col.iconUrl ? (
            <MjmlImage
              alt={col.title}
              borderRadius={t.borderRadius.md}
              height={48}
              paddingBottom={t.spacing.md}
              src={col.iconUrl}
              width={48}
            />
          ) : null}
          <MjmlText
            color={t.colors.foreground}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.lg ?? "16px"}
            fontWeight={t.fontWeight.medium ?? "500"}
            paddingBottom={t.spacing.sm}
          >
            {col.title}
          </MjmlText>
          <MjmlText
            color={t.colors["foreground-muted"]}
            fontFamily={t.fontFamily.sans}
            fontSize={t.fontSize.base ?? "14px"}
            lineHeight={t.lineHeight.snug}
          >
            {col.description}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
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
