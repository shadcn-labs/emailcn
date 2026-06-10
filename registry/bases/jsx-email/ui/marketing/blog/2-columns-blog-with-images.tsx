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

export type BlogCompactVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogCompactProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string }[];
  variant?: BlogCompactVariant;
}
const BlogCompactSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogCompactProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogCompactVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(posts ?? []).slice(0, 3).map((post, i) => (
        <Column
          key={post.title + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "33.33%",
          }}
        >
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
        </Column>
      ))}
    </Row>
  </Section>
);
export const TwoColumnsBlogWithImages = ({
  theme = defaultTheme,
  posts = [
    { description: "Description 1", title: "Post 1" },
    { description: "Description 2", title: "Post 2" },
    { description: "Description 3", title: "Post 3" },
  ],
  variant = "default",
}: BlogCompactProps) => (
  <Html>
    <Head />
    <Preview>blog compact</Preview>
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
          <BlogCompactSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
TwoColumnsBlogWithImages.PreviewProps = {
  posts: [
    {
      description: "A guide to building email components.",
      title: "Getting Started",
    },
    { description: "Tips for responsive email design.", title: "Design Tips" },
    { description: "Advanced techniques for power users.", title: "Advanced" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCompactProps;
