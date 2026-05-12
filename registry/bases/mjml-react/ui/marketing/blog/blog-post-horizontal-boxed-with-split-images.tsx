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

export type BlogHorizontalVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface BlogHorizontalProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogHorizontalVariant;
}

const BlogHorizontalSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogHorizontalProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogHorizontalVariant;
}) => {
  const items = posts ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 3).map((post, i) => (
        <MjmlSection
          key={post.title + i}
          padding={`${theme.spacingBase ?? "24px"} 0`}
        >
          {post.imageUrl ? (
            <MjmlColumn width="30%" padding="0 12px 0 0" verticalAlign="top">
              <MjmlImage
                alt={post.title}
                borderRadius={theme.borderRadius}
                src={post.imageUrl}
                width={160}
              />
            </MjmlColumn>
          ) : null}
          <MjmlColumn
            width={post.imageUrl ? "70%" : "100%"}
            verticalAlign="top"
          >
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
        </MjmlSection>
      ))}
    </MjmlSection>
  );
};

export const BlogPostHorizontalBoxedWithSplitImages = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogHorizontalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog horizontal</MjmlPreview>
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
        <BlogHorizontalSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BlogPostHorizontalBoxedWithSplitImages.PreviewProps = {
  posts: [
    {
      date: "May 12, 2026",
      description: "A comprehensive guide to building email components.",
      imageUrl: "https://placehold.co/200x150?text=Guide",
      title: "Complete Guide",
    },
    {
      date: "May 10, 2026",
      description: "Tips for designing emails that convert.",
      imageUrl: "https://placehold.co/200x150?text=Tips",
      title: "Design Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogHorizontalProps;
