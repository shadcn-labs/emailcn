/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BlogMinimalVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogMinimalProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string; date?: string }[];
  variant?: BlogMinimalVariant;
}
const BlogMinimalSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogMinimalProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogMinimalVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(posts ?? []).slice(0, 3).map((post, i) => (
          <Section
            key={post.title + i}
            style={{ padding: `${theme.spacingBase ?? "12px"} 0` }}
          >
            <Row>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "4px",
                }}
              >
                {post.date}
              </Text>
              <Text
                style={{
                  color: theme.colorText,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeBase,
                  fontWeight: theme.fontWeightMedium,
                  margin: 0,
                  paddingBottom: theme.spacingBase ?? "4px",
                }}
              >
                {post.title}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeSm,
                  lineHeight: theme.lineHeightBase,
                  margin: 0,
                }}
              >
                {post.description}
              </Text>
            </Row>
          </Section>
        ))}
      </Column>
    </Row>
  </Section>
);
export const PodcastBlogSplit = ({
  theme = defaultTheme,
  posts = [
    { date: "May 12", description: "Description.", title: "Post Title" },
  ],
  variant = "default",
}: BlogMinimalProps) => (
  <Html>
    <Head />
    <Preview>blog minimal</Preview>
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
          <BlogMinimalSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
PodcastBlogSplit.PreviewProps = {
  posts: [
    {
      date: "May 12",
      description: "A comprehensive guide to building email components.",
      title: "Getting Started",
    },
    {
      date: "May 10",
      description: "Tips for designing responsive emails.",
      title: "Design Tips",
    },
    {
      date: "May 8",
      description: "Advanced techniques for power users.",
      title: "Advanced Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogMinimalProps;
