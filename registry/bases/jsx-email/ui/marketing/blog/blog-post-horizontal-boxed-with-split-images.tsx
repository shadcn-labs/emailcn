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

export type BlogHorizontalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BlogHorizontalProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogHorizontalVariant;
}

const BlogHorizontalSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogHorizontalProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogHorizontalVariant;
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
          <Section
            key={post.title + i}
            style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}
          >
            <Row>
              {post.imageUrl ? (
                <Column
                  style={{
                    padding: "0 12px 0 0",
                    verticalAlign: "top",
                    width: "30%",
                  }}
                >
                  <Img
                    alt={post.title}
                    src={post.imageUrl}
                    width={160}
                    style={{
                      borderRadius: theme.borderRadius,
                      display: "block",
                      margin: "0 auto",
                      maxWidth: "100%",
                    }}
                  />
                </Column>
              ) : null}
              <Column
                style={{
                  verticalAlign: "top",
                  width: post.imageUrl ? "70%" : "100%",
                }}
              >
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
            </Row>
          </Section>
        ))}
      </Row>
    </Section>
  );
};

export const BlogPostHorizontalBoxedWithSplitImages = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogHorizontalProps) => (
  <Html>
    <Head />
    <Preview>blog horizontal</Preview>
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
          <BlogHorizontalSection
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

BlogPostHorizontalBoxedWithSplitImages.PreviewProps = {
  posts: [
    {
      date: "May 12, 2026",
      description: "A comprehensive guide to building email components.",
      imageUrl: "https://static.photos/travel/200x150/2",
      title: "Complete Guide",
    },
    {
      date: "May 10, 2026",
      description: "Tips for designing emails that convert.",
      imageUrl: "https://static.photos/travel/200x150/3",
      title: "Design Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogHorizontalProps;
