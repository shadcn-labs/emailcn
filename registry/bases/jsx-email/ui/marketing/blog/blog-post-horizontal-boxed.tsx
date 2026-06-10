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

export type BlogDarkVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogDarkProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string }[];
  variant?: BlogDarkVariant;
}
const BlogDarkSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogDarkProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogDarkVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorText,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(posts ?? []).slice(0, 2).map((post, i) => (
          <Section
            key={post.title + i}
            style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
          >
            <Row>
              <Text
                style={{
                  color: theme.colorBackground,
                  fontFamily: theme.fontFamily,
                  fontSize: theme.fontSizeLg,
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
                  fontSize: theme.fontSizeBase,
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
export const BlogPostHorizontalBoxed = ({
  theme = defaultTheme,
  posts = [
    { description: "Description 1", title: "Post 1" },
    { description: "Description 2", title: "Post 2" },
  ],
  variant = "default",
}: BlogDarkProps) => (
  <Html>
    <Head />
    <Preview>blog dark</Preview>
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
          <BlogDarkSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
BlogPostHorizontalBoxed.PreviewProps = {
  posts: [
    {
      description: "A comprehensive guide to building email components.",
      title: "Getting Started Guide",
    },
    {
      description: "Tips for designing emails that convert.",
      title: "Design Best Practices",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogDarkProps;
