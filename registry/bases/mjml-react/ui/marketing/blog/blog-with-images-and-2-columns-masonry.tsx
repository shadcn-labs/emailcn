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

export type BlogFeaturedVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogFeaturedProps {
  theme?: EmailThemeTokens;
  featuredTitle?: string;
  featuredDescription?: string;
  posts?: { title: string; description: string }[];
  variant?: BlogFeaturedVariant;
}
const BlogFeaturedSection = ({
  featuredDescription,
  featuredTitle,
  posts,
  theme,
  variant,
}: {
  featuredDescription: string;
  featuredTitle: string;
  posts: BlogFeaturedProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogFeaturedVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeHeading}
        fontWeight={theme.fontWeightBold}
        paddingBottom={theme.spacingBase ?? "8px"}
      >
        {featuredTitle}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingXl ?? "48px"}
      >
        {featuredDescription}
      </MjmlText>
    </MjmlColumn>
    {(posts ?? []).slice(0, 2).map((post, i) => (
      <MjmlColumn
        key={post.title + i}
        width="50%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
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
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const BlogWithImagesAnd2ColumnsMasonry = ({
  theme = defaultTheme,
  featuredTitle = "Latest News",
  featuredDescription = "Stay up to date with our latest articles and updates.",
  posts = [
    { description: "Description 1", title: "Article 1" },
    { description: "Description 2", title: "Article 2" },
  ],
  variant = "default",
}: BlogFeaturedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog featured</MjmlPreview>
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
        <BlogFeaturedSection
          featuredDescription={featuredDescription}
          featuredTitle={featuredTitle}
          posts={posts}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
BlogWithImagesAnd2ColumnsMasonry.PreviewProps = {
  featuredDescription: "Stay up to date with our latest articles and updates.",
  featuredTitle: "Latest News",
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
} satisfies BlogFeaturedProps;
