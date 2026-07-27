import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const colors = {
  border: "#e5e7eb",
  canvas: "#f1f5f9",
  dark: "#030712",
  muted: "#4b5563",
  subtle: "#6b7280",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

type BlogLayout =
  | "featured"
  | "featured-date"
  | "featured-date-full"
  | "horizontal-boxed"
  | "horizontal-split-images"
  | "masonry"
  | "masonry-boxed"
  | "podcast-full"
  | "podcast-split"
  | "single-horizontal"
  | "two-column-boxed"
  | "two-column-images"
  | "two-column-images-text";

interface BlogPostData {
  author?: string;
  badge?: string;
  date?: string;
  episode?: string;
  excerpt: string;
  host?: string;
  imageAlt: string;
  imageSrc: string;
  imageAlt2?: string;
  imageSrc2?: string;
  month?: string;
  title: string;
}

const Image = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: number;
}) => (
  <MjmlImage
    alt={alt}
    borderRadius="8px"
    padding="0"
    src={src}
    width={`${width}px`}
  />
);

const Meta = ({
  boxed = false,
  post,
}: {
  boxed?: boolean;
  post: BlogPostData;
}) => {
  const label =
    post.episode ??
    post.badge ??
    (post.date && post.month ? `${post.date} ${post.month}` : undefined);
  return (() => {
    if (label) {
      return (
        <MjmlText
          color={colors.subtle}
          fontFamily={fontFamily}
          fontSize="12px"
          fontWeight="600"
          letterSpacing="0.04em"
          lineHeight="16px"
          padding={boxed ? "20px 20px 0" : "0"}
          textTransform="uppercase"
        >
          {label}
        </MjmlText>
      );
    }
    return null;
  })();
};

const Copy = ({
  boxed = false,
  post,
}: {
  boxed?: boolean;
  post: BlogPostData;
}) => {
  const hasMeta = Boolean(
    post.episode ?? post.badge ?? (post.date && post.month)
  );
  const horizontalPadding = boxed ? "20px" : "0";
  let titleTopPadding = 0;
  if (hasMeta) {
    titleTopPadding = 8;
  } else if (boxed) {
    titleTopPadding = 20;
  }
  let footer: ReactNode = null;
  if (post.author || post.host) {
    footer = (
      <MjmlText
        color={colors.subtle}
        fontFamily={fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding={`12px ${horizontalPadding} ${boxed ? "20px" : "0"}`}
      >
        {post.host ? `Hosted by ${post.host}` : `By ${post.author}`}
      </MjmlText>
    );
  } else if (boxed) {
    footer = <MjmlSpacer height="20px" />;
  }
  return (
    <>
      <Meta boxed={boxed} post={post} />
      <MjmlText
        color={colors.dark}
        fontFamily={fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding={`${titleTopPadding}px ${horizontalPadding} 0`}
      >
        {post.title}
      </MjmlText>
      <MjmlText
        color={colors.muted}
        fontFamily={fontFamily}
        fontSize="14px"
        lineHeight="22px"
        padding={`10px ${horizontalPadding} 0`}
      >
        {post.excerpt}
      </MjmlText>
      {footer}
    </>
  );
};

const VerticalCard = ({
  boxed = false,
  post,
  width = 264,
}: {
  boxed?: boolean;
  post: BlogPostData;
  width?: number;
}) => (
  <>
    <Image alt={post.imageAlt} src={post.imageSrc} width={width} />
    {boxed ? null : <MjmlSpacer height="16px" />}
    <Copy boxed={boxed} post={post} />
  </>
);

const TwoColumns = ({
  boxed,
  posts,
}: {
  boxed: boolean;
  posts: readonly BlogPostData[];
}) => (
  <MjmlSection padding="0">
    {posts.slice(0, 2).map((post, index) => (
      <MjmlColumn
        backgroundColor={boxed ? colors.surfaceMuted : undefined}
        border={boxed ? `1px solid ${colors.border}` : undefined}
        borderRadius="8px"
        key={`${post.title}-${index}`}
        padding={index === 0 ? "0 12px 0 0" : "0 0 0 12px"}
        verticalAlign="top"
        width="50%"
      >
        <VerticalCard boxed={boxed} post={post} />
      </MjmlColumn>
    ))}
  </MjmlSection>
);

const Masonry = ({
  boxed,
  posts,
}: {
  boxed: boolean;
  posts: readonly BlogPostData[];
}) => (
  <MjmlSection padding="0">
    <MjmlColumn
      backgroundColor={boxed ? colors.surfaceMuted : undefined}
      border={boxed ? `1px solid ${colors.border}` : undefined}
      borderRadius="8px"
      padding="0 12px 0 0"
      verticalAlign="top"
      width="50%"
    >
      <VerticalCard boxed={boxed} post={posts[0]} />
    </MjmlColumn>
    <MjmlColumn padding="0 0 0 12px" verticalAlign="top" width="50%">
      {posts.slice(1, 3).map((post, index) => (
        <Fragment key={`${post.title}-${index}`}>
          <VerticalCard boxed={boxed} post={post} />
          {index === 0 ? <MjmlSpacer height="16px" /> : null}
        </Fragment>
      ))}
    </MjmlColumn>
  </MjmlSection>
);

const Horizontal = ({
  boxed = false,
  post,
}: {
  boxed?: boolean;
  post: BlogPostData;
}) => (
  <MjmlSection
    backgroundColor={boxed ? colors.surfaceMuted : undefined}
    border={boxed ? `1px solid ${colors.border}` : undefined}
    borderRadius="8px"
    padding="0"
  >
    <MjmlColumn padding="0" verticalAlign="middle" width="220px">
      <Image alt={post.imageAlt} src={post.imageSrc} width={220} />
    </MjmlColumn>
    <MjmlColumn padding={boxed ? "0" : "0 0 0 24px"} verticalAlign="middle">
      <Copy boxed={boxed} post={post} />
    </MjmlColumn>
  </MjmlSection>
);

const SplitImages = ({ post }: { post: BlogPostData }) => (
  <MjmlSection
    backgroundColor={colors.surfaceMuted}
    border={`1px solid ${colors.border}`}
    borderRadius="8px"
    padding="0"
  >
    <MjmlColumn padding="0 4px 0 0" verticalAlign="middle" width="112px">
      <Image alt={post.imageAlt} src={post.imageSrc} width={112} />
    </MjmlColumn>
    <MjmlColumn padding="0 0 0 4px" verticalAlign="middle" width="112px">
      <Image
        alt={post.imageAlt2 ?? ""}
        src={post.imageSrc2 ?? post.imageSrc}
        width={112}
      />
    </MjmlColumn>
    <MjmlColumn padding="0" verticalAlign="middle">
      <Copy boxed post={post} />
    </MjmlColumn>
  </MjmlSection>
);

const FullWidth = ({ post }: { post: BlogPostData }) => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <Image alt={post.imageAlt} src={post.imageSrc} width={552} />
      <MjmlSpacer height="20px" />
      <Copy post={post} />
    </MjmlColumn>
  </MjmlSection>
);

const BlogContent = ({
  layout,
  posts,
}: {
  layout: BlogLayout;
  posts: readonly BlogPostData[];
}) => {
  if (layout === "horizontal-split-images") {
    return <SplitImages post={posts[0]} />;
  }
  if (
    layout === "horizontal-boxed" ||
    layout === "podcast-split" ||
    layout === "featured-date"
  ) {
    return <Horizontal boxed={layout === "horizontal-boxed"} post={posts[0]} />;
  }
  if (layout === "single-horizontal") {
    return <Horizontal post={posts[0]} />;
  }
  if (layout === "masonry" || layout === "masonry-boxed") {
    return <Masonry boxed={layout === "masonry-boxed"} posts={posts} />;
  }
  if (
    layout === "two-column-images" ||
    layout === "two-column-images-text" ||
    layout === "two-column-boxed"
  ) {
    return <TwoColumns boxed={layout === "two-column-boxed"} posts={posts} />;
  }
  return <FullWidth post={posts[0]} />;
};

const BlogEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper backgroundColor={colors.surface} padding="44px 24px">
        {children}
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

interface Featured_FeaturedBlogPostProps {
  theme?: EmailThemeTokens;
  author?: string;
  badge?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  title?: string;
}

const Featured_FeaturedBlogPostSection = ({
  author = "John Doe",
  badge = "Featured",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  title = "Featured article",
}: Omit<Featured_FeaturedBlogPostProps, "theme">) => {
  const posts = [
    {
      author,
      badge,
      excerpt,
      imageAlt,
      imageSrc,
      title,
    },
  ];
  return (
    <>
      <BlogContent layout="featured" posts={posts} />
    </>
  );
};

const Featured_FeaturedBlogPost = ({
  theme = defaultTheme,
  author = "John Doe",
  badge = "Featured",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  title = "Featured article",
}: Featured_FeaturedBlogPostProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <Featured_FeaturedBlogPostSection
      author={author}
      badge={badge}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      title={title}
    />
  </BlogEmailShell>
);

Featured_FeaturedBlogPost.PreviewProps = {
  author: "John Doe",
  badge: "Featured",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  theme: defaultTheme,
  title: "Featured article",
} satisfies Featured_FeaturedBlogPostProps;

const __Featured = Featured_FeaturedBlogPost;

interface FeaturedDate_FeaturedPostWithLargeDateProps {
  theme?: EmailThemeTokens;
  date?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  month?: string;
  title?: string;
}

const FeaturedDate_FeaturedPostWithLargeDateSection = ({
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month = "MAR",
  title = "Featured article",
}: Omit<FeaturedDate_FeaturedPostWithLargeDateProps, "theme">) => {
  const posts = [
    {
      date,
      excerpt,
      imageAlt,
      imageSrc,
      month,
      title,
    },
  ];
  return (
    <>
      <BlogContent layout="featured-date" posts={posts} />
    </>
  );
};

const FeaturedDate_FeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month = "MAR",
  title = "Featured article",
}: FeaturedDate_FeaturedPostWithLargeDateProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <FeaturedDate_FeaturedPostWithLargeDateSection
      date={date}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      month={month}
      title={title}
    />
  </BlogEmailShell>
);

FeaturedDate_FeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  month: "MAR",
  theme: defaultTheme,
  title: "Featured article",
} satisfies FeaturedDate_FeaturedPostWithLargeDateProps;

const __FeaturedDate = FeaturedDate_FeaturedPostWithLargeDate;

interface FeaturedDateFull_FullWidthFeaturedPostWithLargeDateProps {
  theme?: EmailThemeTokens;
  date?: string;
  excerpt?: string;
  imageAlt?: string;
  imageSrc?: string;
  month?: string;
  title?: string;
}

const FeaturedDateFull_FullWidthFeaturedPostWithLargeDateSection = ({
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month = "MAR",
  title = "Featured article",
}: Omit<FeaturedDateFull_FullWidthFeaturedPostWithLargeDateProps, "theme">) => {
  const posts = [
    {
      date,
      excerpt,
      imageAlt,
      imageSrc,
      month,
      title,
    },
  ];
  return (
    <>
      <BlogContent layout="featured-date-full" posts={posts} />
    </>
  );
};

const FeaturedDateFull_FullWidthFeaturedPostWithLargeDate = ({
  theme = defaultTheme,
  date = "15",
  excerpt = "A compelling excerpt from the featured article.",
  imageAlt = "Editorial feature",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month = "MAR",
  title = "Featured article",
}: FeaturedDateFull_FullWidthFeaturedPostWithLargeDateProps) => (
  <BlogEmailShell preview={title} theme={theme}>
    <FeaturedDateFull_FullWidthFeaturedPostWithLargeDateSection
      date={date}
      excerpt={excerpt}
      imageAlt={imageAlt}
      imageSrc={imageSrc}
      month={month}
      title={title}
    />
  </BlogEmailShell>
);

FeaturedDateFull_FullWidthFeaturedPostWithLargeDate.PreviewProps = {
  date: "15",
  excerpt: "A compelling excerpt from the featured article.",
  imageAlt: "Editorial feature",
  imageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-4.jpg",
  month: "MAR",
  theme: defaultTheme,
  title: "Featured article",
} satisfies FeaturedDateFull_FullWidthFeaturedPostWithLargeDateProps;

const __FeaturedDateFull = FeaturedDateFull_FullWidthFeaturedPostWithLargeDate;

export interface BlogPost {
  title: string;
  excerpt?: string;
  image?: {
    alt?: string;
    src: string;
  };
  author?: string;
  badge?: string;
  date?: string;
  month?: string;
  episode?: string;
  host?: string;
}

export interface FeaturedBlogPostProps {
  theme?: Parameters<typeof __Featured>[0]["theme"];
  post?: BlogPost;
  width?: "contained" | "full";
  dateStyle?: "none" | "large";
}

const toFeaturedProps = (post: BlogPost | undefined) =>
  post
    ? {
        author: post.author,
        badge: post.badge,
        date: post.date,
        excerpt: post.excerpt,
        imageAlt: post.image?.alt,
        imageSrc: post.image?.src,
        month: post.month,
        title: post.title,
      }
    : {};

export const FeaturedBlogPost = ({
  theme,
  post,
  width = "contained",
  dateStyle = "none",
}: FeaturedBlogPostProps) => {
  const props = { theme, ...toFeaturedProps(post) };
  if (dateStyle === "large") {
    return width === "full" ? (
      <__FeaturedDateFull {...props} />
    ) : (
      <__FeaturedDate {...props} />
    );
  }
  return <__Featured {...props} />;
};

FeaturedBlogPost.PreviewProps = {
  dateStyle: "none",
  width: "contained",
} satisfies FeaturedBlogPostProps;
