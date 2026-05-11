import {
  Body,
  Column,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export interface ContentGridProps {
  columnCount?: 2 | 3;
  columns?: {
    iconUrl?: string;
    title: string;
    description: string;
  }[];
}

export const ContentGridSection = ({
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: Omit<ContentGridProps, "theme">) => (
  <Section style={{ padding: "48px 0" }}>
    <Row>
      {columns.slice(0, columnCount).map((col, index) => (
        <Column
          key={`${col.title}-${index}`}
          style={{ padding: "24px", verticalAlign: "top" }}
        >
          {col.iconUrl ? (
            <Img
              src={col.iconUrl}
              alt={col.title}
              height={48}
              width={48}
              style={{
                marginBottom: "24px",
                objectFit: "contain",
              }}
            />
          ) : null}
          <Text
            style={{
              color: defaultTheme.colorText,
              fontSize: defaultTheme.fontSizeLg,
              fontWeight: defaultTheme.fontWeightMedium,
              marginBottom: "8px",
            }}
          >
            {col.title}
          </Text>
          <Text
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeBase,
              lineHeight: 1.4,
            }}
          >
            {col.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);

export const ContentGrid = ({
  columnCount = 2,
  columns = [
    { description: "Description for feature 1", title: "Feature 1" },
    { description: "Description for feature 2", title: "Feature 2" },
  ],
}: ContentGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Features</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <ContentGridSection columnCount={columnCount} columns={columns} />
      </Body>
    </Tailwind>
  </Html>
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
} satisfies ContentGridProps;
