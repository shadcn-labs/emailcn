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

export type BlogCompactVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogCompactProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string }[];
  variant?: BlogCompactVariant;
}
const BlogCompactSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogCompactProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogCompactVariant;
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
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
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
export const TwoColumnsBlogWithImages = ({
  theme = defaultTheme,
  posts = [
    { description: "Description 1", title: "Post 1" },
    { description: "Description 2", title: "Post 2" },
    { description: "Description 3", title: "Post 3" },
  ],
  variant = "default",
}: BlogCompactProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog compact</MjmlPreview>
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
        <BlogCompactSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnsBlogWithImages.PreviewProps = {
  posts: [
    {
      description: "A guide to building email components.",
      title: "Getting Started",
    },
    { description: "Tips for responsive email design.", title: "Design Tips" },
    { description: "Advanced techniques for power users.", title: "Advanced" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogCompactProps;
