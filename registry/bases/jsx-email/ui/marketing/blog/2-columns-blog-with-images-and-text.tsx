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

export type BlogCardVariant = "default" | "slanted-left" | "slanted-right";

export interface BlogCardProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
    href?: string;
  }[];
  columns?: 1 | 2;
  variant?: BlogCardVariant;
}

const BlogCardSection = ({
  columns,
  posts,
  theme,
  variant,
}: {
  columns: 1 | 2;
  posts: BlogCardProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogCardVariant;
}) => {
  const colWidth = columns === 2 ? "50%" : "100%";
  const items = (posts ?? []).slice(0, columns);

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.map((post, i) => (
          <Column
            key={post.title + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: colWidth,
            }}
          >
            {post.imageUrl ? (
              <Img
                alt={post.title}
                src={post.imageUrl}
                width={260}
                style={{
                  borderRadius: theme.borderRadius,
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%",
                  paddingBottom: theme.spacingBase ?? "24px",
                }}
              />
            ) : null}
            {post.date ? (
              <Text
                style={{
                  color: theme.colorTextSubtle,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm ?? "12px",
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "8px",
                }}
              >
                {post.date}
              </Text>
            ) : null}
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
              {post.title}
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
              {post.description}
            </Text>
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const TwoColumnsBlogWithImagesAndText = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  columns = 2,
  variant = "default",
}: BlogCardProps) => (
  <Html>
    <Head />
    <Preview>blog card</Preview>
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
          <BlogCardSection
            columns={columns}
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

TwoColumnsBlogWithImagesAndText.PreviewProps = {
  columns: 2,
  posts: [
    {
      date: "May 12, 2026",
      description:
        "Learn how to build beautiful emails with our new component library.",
      imageUrl: "https://static.photos/travel/400x250/2",
      title: "Getting Started with Email Components",
    },
    {
      date: "May 10, 2026",
      description: "Tips and tricks for designing responsive email layouts.",
      imageUrl: "https://static.photos/travel/400x250/3",
      title: "Responsive Email Design Best Practices",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCardProps;
