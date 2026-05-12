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

export type BlogWithCtaVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogWithCtaProps {
  theme?: EmailThemeTokens;
  posts?: { imageUrl?: string; title: string; description: string }[];
  ctaLabel?: string;
  ctaHref?: string;
  variant?: BlogWithCtaVariant;
}
const BlogWithCtaSection = ({
  ctaHref,
  ctaLabel,
  posts,
  theme,
  variant,
}: {
  ctaHref: string;
  ctaLabel: string;
  posts: BlogWithCtaProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogWithCtaVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(posts ?? []).slice(0, 2).map((post, i) => (
      <MjmlColumn
        key={post.title + i}
        width="50%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {post.imageUrl ? (
          <MjmlImage
            alt={post.title}
            borderRadius={theme.borderRadius}
            src={post.imageUrl}
            width={260}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg}
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
        >
          {post.description}
        </MjmlText>
      </MjmlColumn>
    ))}
    {ctaLabel && ctaHref ? (
      <MjmlColumn>
        <MjmlText
          align="center"
          color={theme.colorPrimary}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          fontWeight={theme.fontWeightMedium}
        >
          <a href={ctaHref} style={{ color: theme.colorPrimary }}>
            {ctaLabel}
          </a>
        </MjmlText>
      </MjmlColumn>
    ) : null}
  </MjmlSection>
);
export const TwoColumnsBlogWithImagesAndBoxedContent = ({
  theme = defaultTheme,
  posts = [{ description: "Description.", title: "Post Title" }],
  ctaLabel = "Read More",
  ctaHref = "#",
  variant = "default",
}: BlogWithCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog with cta</MjmlPreview>
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
        <BlogWithCtaSection
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          posts={posts}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnsBlogWithImagesAndBoxedContent.PreviewProps = {
  ctaHref: "https://example.com/blog",
  ctaLabel: "View All Posts",
  posts: [
    {
      description: "Learn how to build better emails.",
      imageUrl: "https://placehold.co/400x250?text=Post+1",
      title: "Getting Started",
    },
    {
      description: "Tips for responsive design.",
      imageUrl: "https://placehold.co/400x250?text=Post+2",
      title: "Design Tips",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogWithCtaProps;
