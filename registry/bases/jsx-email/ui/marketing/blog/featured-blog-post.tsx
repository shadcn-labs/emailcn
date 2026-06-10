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

export type BlogGridVariant = "default" | "slanted-left" | "slanted-right";

export interface BlogGridProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogGridVariant;
}

const BlogGridSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogGridProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogGridVariant;
}) => {
  const items = posts ?? [];

  return (
    <Section
      style={{
        backgroundColor: theme.colorBackground,
        padding: `${theme.spacingXl ?? "48px"} 0`,
      }}
    >
      <Row>
        {items.slice(0, 3).map((post, i) => (
          <Column
            key={post.title + i}
            style={{
              padding: theme.spacingBase ?? "24px",
              verticalAlign: "top",
              width: "33.33%",
            }}
          >
            {post.imageUrl ? (
              <Img
                alt={post.title}
                src={post.imageUrl}
                width={180}
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

export const FeaturedBlogPost = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogGridProps) => (
  <Html>
    <Head />
    <Preview>blog grid</Preview>
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
          <BlogGridSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);

FeaturedBlogPost.PreviewProps = {
  posts: [
    {
      date: "May 2026",
      description: "Building better emails with our component library.",
      imageUrl: "https://static.photos/travel/300x200/2",
      title: "Getting Started",
    },
    {
      date: "Apr 2026",
      description: "How to design responsive email templates.",
      imageUrl: "https://static.photos/travel/300x200/3",
      title: "Responsive Design",
    },
    {
      date: "Mar 2026",
      description: "Best practices for email marketing.",
      imageUrl: "https://static.photos/travel/300x200/4",
      title: "Email Marketing",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogGridProps;
