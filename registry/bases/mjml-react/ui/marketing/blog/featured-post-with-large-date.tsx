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

export type BlogImageCardVariant = "default" | "slanted-left" | "slanted-right";
export interface BlogImageCardProps {
  theme?: EmailThemeTokens;
  posts?: {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string;
  }[];
  variant?: BlogImageCardVariant;
}
const BlogImageCardSection = ({
  posts,
  theme,
  variant,
}: {
  posts: BlogImageCardProps["posts"];
  theme: EmailThemeTokens;
  variant: BlogImageCardVariant;
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
        <MjmlSection
          backgroundColor={theme.colorBackgroundMuted}
          borderRadius={theme.borderRadius}
        >
          <MjmlImage alt={post.imageAlt} src={post.imageUrl} width={280} />
          <MjmlColumn padding={theme.spacingBase ?? "16px"}>
            <MjmlText
              color={theme.colorText}
              fontFamily={theme.fontFamily}
              fontSize={theme.fontSizeBase}
              fontWeight={theme.fontWeightMedium}
              paddingBottom={theme.spacingBase ?? "4px"}
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
        </MjmlSection>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const FeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  posts = [
    {
      description: "Description 1",
      imageAlt: "img",
      imageUrl: "https://static.photos/travel/400x250/2",
      title: "Post 1",
    },
    {
      description: "Description 2",
      imageAlt: "img",
      imageUrl: "https://static.photos/travel/400x250/3",
      title: "Post 2",
    },
  ],
  variant = "default",
}: BlogImageCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>blog image card</MjmlPreview>
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
        <BlogImageCardSection posts={posts} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
FeaturedPostWithLargeDate.PreviewProps = {
  posts: [
    {
      description: "A comprehensive guide to building email components.",
      imageAlt: "guide",
      imageUrl: "https://static.photos/travel/400x250/4",
      title: "Getting Started Guide",
    },
    {
      description: "Tips for designing responsive email layouts.",
      imageAlt: "tips",
      imageUrl: "https://static.photos/travel/400x250/5",
      title: "Design Best Practices",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BlogImageCardProps;
