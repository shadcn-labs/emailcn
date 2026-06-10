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

export type BlogImageCardVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogImageCardProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
  variant?: BlogImageCardVariant;
}
const BlogImageCardSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogImageCardProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogImageCardVariant;
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
          <Section
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              borderRadius: theme.borderRadius,
            }}
          >
            <Row>
              <Img
                alt={post.imageAlt}
                src={post.imageUrl}
                width={280}
                style={{ display: "block", margin: "0 auto", maxWidth: "100%" }}
              />
              <Column style={{ padding: theme.spacingBase ?? "16px" }}>
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
            </Row>
          </Section>
        </Column>
      ))}
    </Row>
  </Section>
);
export const FeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  posts = [
    {
      description: "Description 1",
      imageAlt: "img",
      imageUrl: "https://static.photos/travel/400x250/2",
      title: "Post 1",
    },
    {
      description: "Description 2",
      imageAlt: "img",
      imageUrl: "https://static.photos/travel/400x250/3",
      title: "Post 2",
    },
  ],
  variant = "default",
}: BlogImageCardProps) => (
  <Html>
    <Head />
    <Preview>blog image card</Preview>
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
          <BlogImageCardSection posts={posts} theme={theme} variant={variant} />
        </Section>
      </Container>
    </Body>
  </Html>
);
FeaturedPostWithLargeDate.PreviewProps = {
  posts: [
    {
      description: "A comprehensive guide to building email components.",
      imageAlt: "guide",
      imageUrl: "https://static.photos/travel/400x250/4",
      title: "Getting Started Guide",
    },
    {
      description: "Tips for designing responsive email layouts.",
      imageAlt: "tips",
      imageUrl: "https://static.photos/travel/400x250/5",
      title: "Design Best Practices",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogImageCardProps;
