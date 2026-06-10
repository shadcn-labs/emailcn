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

export type BlogSingleColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BlogSingleColumnProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogSingleColumnVariant;
}
const BlogSingleColumnSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogSingleColumnProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogSingleColumnVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(posts ?? []).slice(0, 3).map((post, i) => (
        <Column key={post.title + i}>
          {post.imageUrl ? (
            <Img
              alt={post.title}
              src={post.imageUrl}
              width={560}
              style={{
                borderRadius: theme.borderRadius,
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
                paddingBottom: theme.spacingBase ?? "16px",
              }}
            />
          ) : null}
          {post.date ? (
            <Text
              style={{
                color: theme.colorTextSubtle,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm,
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
              fontSize: theme.fontSizeXl,
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
              fontSize: theme.fontSizeBase,
              lineHeight: theme.lineHeightBase,
              margin: 0,
              paddingBottom: theme.spacingXl ?? "48px",
            }}
          >
            {post.description}
          </Text>
        </Column>
      ))}
    </Row>
  </Section>
);
export const PodcastFullWidth = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogSingleColumnProps) => (
  <Html>
    <Head />
    <Preview>blog single</Preview>
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
          <BlogSingleColumnSection
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
PodcastFullWidth.PreviewProps = {
  posts: [
    {
      date: "May 12, 2026",
      description: "A deep dive into building responsive email components.",
      imageUrl: "https://static.photos/business/600x300/2",
      title: "Featured Article",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogSingleColumnProps;
