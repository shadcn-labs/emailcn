/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type BlogGridVariant = "default" | "slanted-left" | "slanted-right";

export interface BlogGridProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogGridVariant;
}

const BlogGridSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogGridProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogGridVariant;
}) => {
  const items = posts ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 3).map((post, i) => (
        <MjmlColumn
          key={post.title + i}
          width="33.33%"
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          {post.imageUrl ? (
            <MjmlImage
              alt={post.title}
              borderRadius={theme.borderRadius}
              src={post.imageUrl}
              width={180}
              paddingBottom={theme.spacingBase ?? "24px"}
            />
          ) : null}
          {post.date ? (
            <MjmlText
              color={theme.colorTextSubtle}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeSm ?? "12px"}
              paddingBottom={theme.spacingBase ?? "8px"}
            >
              {post.date}
            </MjmlText>
          ) : null}
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg ?? "16px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "8px"}
          >
            {post.title}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
            lineHeight={theme.lineHeightBase}
          >
            {post.description}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const FeaturedBlogPost = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog grid</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <BlogGridSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeaturedBlogPost.PreviewProps = {
  posts: [
    {
      date: "May 2026",
      description: "Building better emails with our component library.",
      imageUrl: "https://placehold.co/300x200?text=Post+1",
      title: "Getting Started",
    },
    {
      date: "Apr 2026",
      description: "How to design responsive email templates.",
      imageUrl: "https://placehold.co/300x200?text=Post+2",
      title: "Responsive Design",
    },
    {
      date: "Mar 2026",
      description: "Best practices for email marketing.",
      imageUrl: "https://placehold.co/300x200?text=Post+3",
      title: "Email Marketing",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogGridProps;
