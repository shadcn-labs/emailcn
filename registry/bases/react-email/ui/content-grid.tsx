import { Column, Img, Row, Section, Tailwind, Text } from "react-email";

import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

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
}: ContentGridProps) => (
  <Tailwind config={theme}>
    <Section className="py-12">
      <Row>
        {columns.slice(0, columnCount).map((col, index) => (
          <Column key={index} className="align-top p-6">
            {col.iconUrl ? (
              <Img
                src={col.iconUrl}
                alt={col.title}
                height={48}
                width={48}
                className="mb-6 object-contain"
              />
            ) : null}
            <Text className="mb-2 text-lg font-medium text-foreground">
              {col.title}
            </Text>
            <Text className="text-base leading-snug text-foreground-muted">
              {col.description}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  </Tailwind>
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
