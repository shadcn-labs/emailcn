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

export type BlogMinimalVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogMinimalProps {
  theme?: EmailThemeTokens;
  posts?: { title: string; description: string; date?: string }[];
  variant?: BlogMinimalVariant;
}
const BlogMinimalSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogMinimalProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogMinimalVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {(posts ?? []).slice(0, 3).map((post, i) => (
        <MjmlSection
          key={post.title + i}
          padding={`${theme.spacingBase ?? "12px"} 0`}
        >
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            paddingBottom={theme.spacingBase ?? "Fourpx"}
          >
            {post.date}
          </MjmlText>
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
        </MjmlSection>
      ))}
    </MjmlColumn>
  </MjmlSection>
);
export const PodcastBlogSplit = ({
  theme = defaultTheme,
  posts = [
    { date: "May 12", description: "Description.", title: "Post Title" },
  ],
  variant = "default",
}: BlogMinimalProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog minimal</MjmlPreview>
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
        <BlogMinimalSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
PodcastBlogSplit.PreviewProps = {
  posts: [
    {
      date: "May 12",
      description: "A comprehensive guide to building email components.",
      title: "Getting Started",
    },
    {
      date: "May 10",
      description: "Tips for designing responsive emails.",
      title: "Design Tips",
    },
    {
      date: "May 8",
      description: "Advanced techniques for power users.",
      title: "Advanced Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogMinimalProps;
