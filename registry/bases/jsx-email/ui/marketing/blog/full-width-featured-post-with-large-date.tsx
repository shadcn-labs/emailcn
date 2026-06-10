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

export type BlogListVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogListProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string; date?: string }[];
  variant?: BlogListVariant;
}
const BlogListSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogListProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogListVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        {(posts ?? []).slice(0, 4).map((post, i) => (
          <Section
            key={post.title + i}
            style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}
          >
            <Row>
              {post.date ? (
                <Text
                  style={{
                    color: theme.colorTextSubtle,
                    fontFamily: theme.fontFamily,
                    fontSize: theme.fontSizeSm,
                    margin: 0,
                    paddingBottom: theme.spacingBase ?? "4px",
                  }}
                >
                  {post.date}
                </Text>
              ) : null}
              <Text
                style={{
                  color: theme.colorText,
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
export const FullWidthFeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  variant = "default",
}: BlogListProps) => (
  <Html>
    <Head />
    <Preview>blog list</Preview>
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
          <BlogListSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
FullWidthFeaturedPostWithLargeDate.PreviewProps = {
  posts: [
    {
      date: "May 12",
      description: "A comprehensive guide to building email components.",
      title: "Getting Started Guide",
    },
    {
      date: "May 10",
      description: "Tips for designing emails that convert.",
      title: "Design Best Practices",
    },
    {
      date: "May 8",
      description: "Advanced techniques for power users.",
      title: "Advanced Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogListProps;
