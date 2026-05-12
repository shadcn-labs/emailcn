/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(posts ?? []).slice(0, 4).map((post, i) => (
        <MjmlSection
          key={post.title + i}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
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
            fontSize={theme.fontSizeBase}
            lineHeight={theme.lineHeightBase}
          >
            {post.description}
          </MjmlText>
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const FullWidthFeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  variant = "default",
}: BlogListProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog list</MjmlPreview>
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
        <BlogListSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
