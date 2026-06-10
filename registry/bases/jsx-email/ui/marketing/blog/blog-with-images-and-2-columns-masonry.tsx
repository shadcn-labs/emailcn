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

export type BlogFeaturedVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogFeaturedProps {
  theme?: EmailThemeTokens;
  featuredTitle?: string;
  featuredDescription?: string;
  posts?: { title: string; description: string }[];
  variant?: BlogFeaturedVariant;
}
const BlogFeaturedSection = ({
  featuredDescription,
  featuredTitle,
  posts,
  theme,
  variant,
}: {
  featuredDescription: string;
  featuredTitle: string;
  posts: BlogFeaturedProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogFeaturedVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      <Column>
        <Text
          style={{
            color: theme.colorText,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeHeading,
            fontWeight: theme.fontWeightBold,
            margin: 0,
            paddingBottom: theme.spacingBase ?? "8px",
          }}
        >
          {featuredTitle}
        </Text>
        <Text
          style={{
            color: theme.colorTextMuted,
            fontFamily: theme.fontFamily,
            fontSize: theme.fontSizeLg,
            lineHeight: theme.lineHeightBase,
            margin: 0,
            paddingBottom: theme.spacingXl ?? "48px",
          }}
        >
          {featuredDescription}
        </Text>
      </Column>
      {(posts ?? []).slice(0, 2).map((post, i) => (
        <Column
          key={post.title + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
          }}
        >
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
        </Column>
      ))}
    </Row>
  </Section>
);
export const BlogWithImagesAnd2ColumnsMasonry = ({
  theme = defaultTheme,
  featuredTitle = "Latest News",
  featuredDescription = "Stay up to date with our latest articles and updates.",
  posts = [
    { description: "Description 1", title: "Article 1" },
    { description: "Description 2", title: "Article 2" },
  ],
  variant = "default",
}: BlogFeaturedProps) => (
  <Html>
    <Head />
    <Preview>blog featured</Preview>
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
          <BlogFeaturedSection
            featuredDescription={featuredDescription}
            featuredTitle={featuredTitle}
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
BlogWithImagesAnd2ColumnsMasonry.PreviewProps = {
  featuredDescription: "Stay up to date with our latest articles and updates.",
  featuredTitle: "Latest News",
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
} satisfies BlogFeaturedProps;
