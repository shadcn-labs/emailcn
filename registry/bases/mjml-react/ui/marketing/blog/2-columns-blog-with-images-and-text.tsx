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

export type BlogCardVariant = "default" | "slanted-left" | "slanted-right";

export interface BlogCardProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
    href?: string;
  }[];
  columns?: 1 | 2;
  variant?: BlogCardVariant;
}

const BlogCardSection = ({
  columns,
  posts,
  theme,
  variant,
}: {
  columns: 1 | 2;
  posts: BlogCardProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogCardVariant;
}) => {
  const colWidth = columns === 2 ? "50%" : "100%";
  const items = (posts ?? []).slice(0, columns);

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.map((post, i) => (
        <MjmlColumn
          key={post.title + i}
          width={colWidth}
          padding={theme.spacingBase ?? "24px"}
          verticalAlign="top"
        >
          {post.imageUrl ? (
            <MjmlImage
              alt={post.title}
              borderRadius={theme.borderRadius}
              src={post.imageUrl}
              width={260}
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

export const TwoColumnsBlogWithImagesAndText = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  columns = 2,
  variant = "default",
}: BlogCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog card</MjmlPreview>
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
        <BlogCardSection
          columns={columns}
          posts={posts}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsBlogWithImagesAndText.PreviewProps = {
  columns: 2,
  posts: [
    {
      date: "May 12, 2026",
      description:
        "Learn how to build beautiful emails with our new component library.",
      imageUrl: "https://static.photos/travel/400x250/2",
      title: "Getting Started with Email Components",
    },
    {
      date: "May 10, 2026",
      description: "Tips and tricks for designing responsive email layouts.",
      imageUrl: "https://static.photos/travel/400x250/3",
      title: "Responsive Email Design Best Practices",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCardProps;
