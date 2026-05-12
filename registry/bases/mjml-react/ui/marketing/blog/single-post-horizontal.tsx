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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(posts ?? []).slice(0, 3).map((post, i) => (
      <MjmlColumn
        key={post.title + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {post.imageUrl ? (
          <MjmlImage
            alt={post.title}
            borderRadius={theme.borderRadius}
            src={post.imageUrl}
            width={180}
            paddingBottom={theme.spacingBase ?? "12px"}
          />
        ) : null}
        {post.date ? (
          <MjmlText
            color={theme.colorTextSubtle}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            paddingBottom={theme.spacingBase ?? "Fourpx"}
          >
            {post.date}
          </MjmlText>
        ) : null}
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "Fourpx"}
        >
          {post.title}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          lineHeight={theme.lineHeightBase}
        >
          {post.description}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const SinglePostHorizontal = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  variant = "default",
}: BlogThreeColumnProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog 3-col</MjmlPreview>
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
        <BlogThreeColumnSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
SinglePostHorizontal.PreviewProps = {
  posts: [
    {
      date: "May 2026",
      description: "Getting started guide.",
      imageUrl: "https://placehold.co/300x200?text=Guide",
      title: "Getting Started",
    },
    {
      date: "Apr 2026",
      description: "Design best practices.",
      imageUrl: "https://placehold.co/300x200?text=Design",
      title: "Design Tips",
    },
    {
      date: "Mar 2026",
      description: "Advanced techniques.",
      imageUrl: "https://placehold.co/300x200?text=Advanced",
      title: "Advanced",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogThreeColumnProps;
