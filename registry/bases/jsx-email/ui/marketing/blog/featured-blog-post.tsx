import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Text,
  Heading,
  Section,
  Row,
  Column,
  Img,
} from "jsx-email";
import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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

const tableStyle: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
};

const textBase: CSSProperties = { fontFamily, margin: 0 };

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
  <Img
    alt={alt}
    src={src}
    width={width}
    style={{
      border: "none",
      borderRadius: "8px",
      display: "block",
      height: "auto",
      maxWidth: "100%",
      outline: "none",
      textDecoration: "none",
      width: "100%",
    }}
  />
);

const Meta = ({ post }: { post: BlogPostData }) => {
  const label =
    post.episode ??
    post.badge ??
    (post.date && post.month ? `${post.date} ${post.month}` : undefined);
  return label ? (
    <Text
      style={{
        ...textBase,
        color: colors.subtle,
        fontSize: "12px",
        fontWeight: 600,
        letterSpacing: "0.04em",
        lineHeight: "16px",
        textTransform: "uppercase",
      }}
    >
      {label}
    </Text>
  ) : null;
};

const Copy = ({ post }: { post: BlogPostData }) => (
  <>
    <Meta post={post} />
    <Heading
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
        marginTop:
          post.episode || post.badge || (post.date && post.month) ? "8px" : 0,
      }}
      as="h3"
    >
      {post.title}
    </Heading>
    <Text
      style={{
        ...textBase,
        color: colors.muted,
        fontSize: "14px",
        lineHeight: "22px",
        marginTop: "10px",
      }}
    >
      {post.excerpt}
    </Text>
    {(() => {
      if (post.author || post.host) {
        return (
          <Text
            style={{
              ...textBase,
              color: colors.subtle,
              fontSize: "12px",
              lineHeight: "16px",
              marginTop: "12px",
            }}
          >
            {post.host ? `Hosted by ${post.host}` : `By ${post.author}`}
          </Text>
        );
      }
      return null;
    })()}
  </>
);

const VerticalCard = ({
  boxed = false,
  post,
  width = 264,
}: {
  boxed?: boolean;
  post: BlogPostData;
  width?: number;
}) => (
  <Section
    style={{
      ...tableStyle,
      backgroundColor: boxed ? colors.surfaceMuted : undefined,
      border: boxed ? `1px solid ${colors.border}` : undefined,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Fragment>
      <Row>
        <Column>
          <Image alt={post.imageAlt} src={post.imageSrc} width={width} />
        </Column>
      </Row>
      <Row>
        <Column style={{ padding: boxed ? "20px" : "16px 0 0" }}>
          <Copy post={post} />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Gap = ({ width = 24 }: { width?: number }) => (
  <Column
    className="blog-gap"
    width={width}
    style={{ fontSize: 0, lineHeight: "1px", width: `${width}px` }}
  >
    &zwj;
  </Column>
);

const BlogColumnFragment = ({
  boxed,
  index,
  post,
}: {
  boxed: boolean;
  index: number;
  post: BlogPostData;
}) => (
  <>
    {index > 0 ? <Gap /> : null}
    <Column
      className="blog-column"
      style={{ verticalAlign: "top", width: "264px" }}
    >
      <VerticalCard boxed={boxed} post={post} />
    </Column>
  </>
);

const TwoColumns = ({
  boxed,
  posts,
}: {
  boxed: boolean;
  posts: readonly BlogPostData[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      <Row>
        {posts.slice(0, 2).map((post, index) => (
          <BlogColumnFragment
            boxed={boxed}
            index={index}
            key={`${post.title}-${index}`}
            post={post}
          />
        ))}
      </Row>
    </Fragment>
  </Section>
);

const Masonry = ({
  boxed,
  posts,
}: {
  boxed: boolean;
  posts: readonly BlogPostData[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      <Row>
        <Column
          className="blog-column"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          <VerticalCard boxed={boxed} post={posts[0]} />
        </Column>
        <Gap />
        <Column
          className="blog-column"
          style={{ verticalAlign: "top", width: "264px" }}
        >
          <VerticalCard boxed={boxed} post={posts[1]} />
          <Section style={{ height: "16px", lineHeight: "16px" }}>
            &zwj;
          </Section>
          <VerticalCard boxed={boxed} post={posts[2]} />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Horizontal = ({
  boxed = false,
  post,
}: {
  boxed?: boolean;
  post: BlogPostData;
}) => (
  <Section
    style={{
      ...tableStyle,
      backgroundColor: boxed ? colors.surfaceMuted : undefined,
      border: boxed ? `1px solid ${colors.border}` : undefined,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Fragment>
      <Row>
        <Column
          className="blog-column"
          width={220}
          style={{ verticalAlign: "top" }}
        >
          <Image alt={post.imageAlt} src={post.imageSrc} width={220} />
        </Column>
        <Column
          className="blog-column"
          style={{
            padding: boxed ? "20px" : "0 0 0 24px",
            verticalAlign: "middle",
          }}
        >
          <Copy post={post} />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const SplitImages = ({ post }: { post: BlogPostData }) => (
  <Section
    style={{
      ...tableStyle,
      backgroundColor: colors.surfaceMuted,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Fragment>
      <Row>
        <Column
          className="blog-column"
          width={112}
          style={{ verticalAlign: "top" }}
        >
          <Image alt={post.imageAlt} src={post.imageSrc} width={112} />
        </Column>
        <Column
          className="blog-column"
          width={112}
          style={{ paddingLeft: "8px", verticalAlign: "top" }}
        >
          <Image
            alt={post.imageAlt2 ?? ""}
            src={post.imageSrc2 ?? post.imageSrc}
            width={112}
          />
        </Column>
        <Column
          className="blog-column"
          style={{ padding: "20px", verticalAlign: "middle" }}
        >
          <Copy post={post} />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const FullWidth = ({ post }: { post: BlogPostData }) => (
  <Section style={tableStyle}>
    <Fragment>
      <Row>
        <Column>
          <Image alt={post.imageAlt} src={post.imageSrc} width={552} />
        </Column>
      </Row>
      <Row>
        <Column style={{ paddingTop: "20px" }}>
          <Copy post={post} />
        </Column>
      </Row>
    </Fragment>
  </Section>
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
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: [
            "@media only screen and (max-width: 599px) {",
            "  .blog-column { display: block !important; width: 100% !important; }",
            "  .blog-gap { display: block !important; height: 24px !important; line-height: 24px !important; width: 100% !important; }",
            "}",
          ].join("\n"),
        }}
      />
    </EmailHead>
    <Preview>{preview}</Preview>
    <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
      <Section style={{ ...tableStyle, backgroundColor: colors.canvas }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              width={600}
              style={{
                backgroundColor: colors.surface,
                maxWidth: "100%",
                padding: "44px 24px",
                width: theme.containerWidth,
              }}
            >
              {children}
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </Body>
  </Html>
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
