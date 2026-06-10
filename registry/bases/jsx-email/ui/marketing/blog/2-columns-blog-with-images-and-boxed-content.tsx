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

export type BlogWithCtaVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogWithCtaProps {
  theme?: EmailThemeTokens;
  posts?: { imageUrl?: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BlogWithCtaVariant;
}
const BlogWithCtaSection = ({
  ctaHref,
  ctaLabel,
  posts,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  posts: BlogWithCtaProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogWithCtaVariant;
}) => (
  <Section
    style={{
      backgroundColor: theme.colorBackground,
      padding: `${theme.spacingXl ?? "48px"} 0`,
    }}
  >
    <Row>
      {(posts ?? []).slice(0, 2).map((post, i) => (
        <Column
          key={post.title + i}
          style={{
            padding: theme.spacingBase ?? "16px",
            verticalAlign: "top",
            width: "50%",
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
                paddingBottom: theme.spacingBase ?? "16px",
              }}
            />
          ) : null}
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg,
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
            }}
          >
            {post.description}
          </Text>
        </Column>
      ))}
      {ctaLabel && ctaHref ? (
        <Column>
          <Text
            style={{
              color: theme.colorPrimary,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeSm,
              fontWeight: theme.fontWeightMedium,
              margin: 0,
              textAlign: "center",
            }}
          >
            <a href={ctaHref} style={{ color: theme.colorPrimary }}>
              {ctaLabel}
            </a>
          </Text>
        </Column>
      ) : null}
    </Row>
  </Section>
);
export const TwoColumnsBlogWithImagesAndBoxedContent = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  ctaLabel = "Read More",
  ctaHref = "#",
  variant = "default",
}: BlogWithCtaProps) => (
  <Html>
    <Head />
    <Preview>blog with cta</Preview>
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
          <BlogWithCtaSection
            ctaHref={ctaHref}
            ctaLabel={ctaLabel}
            posts={posts}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);
TwoColumnsBlogWithImagesAndBoxedContent.PreviewProps = {
  ctaHref: "https://example.com/blog",
  ctaLabel: "View All Posts",
  posts: [
    {
      description: "Learn how to build better emails.",
      imageUrl: "https://static.photos/travel/400x250/2",
      title: "Getting Started",
    },
    {
      description: "Tips for responsive design.",
      imageUrl: "https://static.photos/travel/400x250/3",
      title: "Design Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogWithCtaProps;
