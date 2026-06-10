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

export type BlogThreeColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BlogThreeColumnProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogThreeColumnVariant;
}
const BlogThreeColumnSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogThreeColumnProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogThreeColumnVariant;
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
                paddingBottom: theme.spacingBase ?? "12px",
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
export const SinglePostHorizontal = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  variant = "default",
}: BlogThreeColumnProps) => (
  <Html>
    <Head />
    <Preview>blog 3-col</Preview>
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
          <BlogThreeColumnSection
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
SinglePostHorizontal.PreviewProps = {
  posts: [
    {
      date: "May 2026",
      description: "Getting started guide.",
      imageUrl: "https://static.photos/travel/300x200/2",
      title: "Getting Started",
    },
    {
      date: "Apr 2026",
      description: "Design best practices.",
      imageUrl: "https://static.photos/travel/300x200/3",
      title: "Design Tips",
    },
    {
      date: "Mar 2026",
      description: "Advanced techniques.",
      imageUrl: "https://static.photos/travel/300x200/4",
      title: "Advanced",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogThreeColumnProps;
