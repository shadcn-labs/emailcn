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

export type BlogSingleColumnVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface BlogSingleColumnProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl?: string;
    title: string;
    description: string;
    date?: string;
  }[];
  variant?: BlogSingleColumnVariant;
}
const BlogSingleColumnSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogSingleColumnProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogSingleColumnVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(posts ?? []).slice(0, 3).map((post, i) => (
      <MjmlColumn key={post.title + i}>
        {post.imageUrl ? (
          <MjmlImage
            alt={post.title}
            borderRadius={theme.borderRadius}
            src={post.imageUrl}
            width={560}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
        {post.date ? (
          <MjmlText
            color={theme.colorTextSubtle}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            paddingBottom={theme.spacingBase ?? "8px"}
          >
            {post.date}
          </MjmlText>
        ) : null}
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeXl}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {post.title}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
          paddingBottom={theme.spacingXl ?? "48px"}
        >
          {post.description}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const PodcastFullWidth = ({
  theme = defaultTheme,
  posts = [
    { description: "Description of the blog post.", title: "Blog Post Title" },
  ],
  variant = "default",
}: BlogSingleColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog single</MjmlPreview>
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
        <BlogSingleColumnSection
          posts={posts}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
PodcastFullWidth.PreviewProps = {
  posts: [
    {
      date: "May 12, 2026",
      description: "A deep dive into building responsive email components.",
      imageUrl: "https://placehold.co/600x300?text=Featured+Post",
      title: "Featured Article",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogSingleColumnProps;
