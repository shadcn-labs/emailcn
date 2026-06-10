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

export type BlogDarkVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogDarkProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string }[];
  variant?: BlogDarkVariant;
}
const BlogDarkSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogDarkProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogDarkVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorText}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(posts ?? []).slice(0, 2).map((post, i) => (
        <MjmlSection
          key={post.title + i}
          padding={`${theme.spacingBase ?? "16px"} 0`}
        >
          <MjmlText
            color={theme.colorBackground}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeLg}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingBase ?? "4px"}
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
export const BlogPostHorizontalBoxed = ({
  theme = defaultTheme,
  posts = [
    { description: "Description 1", title: "Post 1" },
    { description: "Description 2", title: "Post 2" },
  ],
  variant = "default",
}: BlogDarkProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog dark</MjmlPreview>
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
        <BlogDarkSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BlogPostHorizontalBoxed.PreviewProps = {
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
} satisfies BlogDarkProps;
