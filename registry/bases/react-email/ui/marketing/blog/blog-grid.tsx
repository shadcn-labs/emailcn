import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Text,
  Heading,
  Section,
  Row,
  Column,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

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

const BlogHeading = ({ children }: { children: ReactNode }) => (
  <>
    <Heading
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "36px",
        textAlign: "center",
      }}
      as="h2"
    >
      {children}
    </Heading>
    <Section style={{ height: "32px", lineHeight: "32px" }}>&zwj;</Section>
  </>
);

const BlogEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
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
    <Tailwind config={theme}>
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
                  width: "600px",
                }}
              >
                {children}
              </Column>
              <Column>&zwj;</Column>
            </Row>
          </Fragment>
        </Section>
      </Body>
    </Tailwind>
  </Html>
);

interface GridImage_TwoColumnsBlogWithImagesProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
}

const GridImage_TwoColumnsBlogWithImagesSection = ({
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: Omit<GridImage_TwoColumnsBlogWithImagesProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
  ];
  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="two-column-images" posts={posts} />
    </>
  );
};

const GridImage_TwoColumnsBlogWithImages = ({
  theme = defaultTheme,
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: GridImage_TwoColumnsBlogWithImagesProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <GridImage_TwoColumnsBlogWithImagesSection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
    />
  </BlogEmailShell>
);

GridImage_TwoColumnsBlogWithImages.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  heading: "Latest posts",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
} satisfies GridImage_TwoColumnsBlogWithImagesProps;

const __GridImage = GridImage_TwoColumnsBlogWithImages;

interface GridText_TwoColumnsBlogWithImagesAndTextProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
}

const GridText_TwoColumnsBlogWithImagesAndTextSection = ({
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: Omit<GridText_TwoColumnsBlogWithImagesAndTextProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
  ];
  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="two-column-images-text" posts={posts} />
    </>
  );
};

const GridText_TwoColumnsBlogWithImagesAndText = ({
  theme = defaultTheme,
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: GridText_TwoColumnsBlogWithImagesAndTextProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <GridText_TwoColumnsBlogWithImagesAndTextSection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
    />
  </BlogEmailShell>
);

GridText_TwoColumnsBlogWithImagesAndText.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  heading: "Latest posts",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
} satisfies GridText_TwoColumnsBlogWithImagesAndTextProps;

const __GridText = GridText_TwoColumnsBlogWithImagesAndText;

interface GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
}

const GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentSection = ({
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: Omit<GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
  ];
  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="two-column-boxed" posts={posts} />
    </>
  );
};

const GridBoxed_TwoColumnsBlogWithImagesAndBoxedContent = ({
  theme = defaultTheme,
  heading = "Latest posts",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
}: GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentSection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
    />
  </BlogEmailShell>
);

GridBoxed_TwoColumnsBlogWithImagesAndBoxedContent.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  heading: "Latest posts",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
} satisfies GridBoxed_TwoColumnsBlogWithImagesAndBoxedContentProps;

const __GridBoxed = GridBoxed_TwoColumnsBlogWithImagesAndBoxedContent;

interface Masonry_BlogWithImagesAnd2ColumnsMasonryProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
  imageAlt3?: string;
  imageSrc3?: string;
  title3?: string;
  excerpt3?: string;
}

const Masonry_BlogWithImagesAnd2ColumnsMasonrySection = ({
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: Omit<Masonry_BlogWithImagesAnd2ColumnsMasonryProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
    {
      excerpt: excerpt3,
      imageAlt: imageAlt3,
      imageSrc: imageSrc3,
      title: title3,
    },
  ];
  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="masonry" posts={posts} />
    </>
  );
};

const Masonry_BlogWithImagesAnd2ColumnsMasonry = ({
  theme = defaultTheme,
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: Masonry_BlogWithImagesAnd2ColumnsMasonryProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <Masonry_BlogWithImagesAnd2ColumnsMasonrySection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
      imageAlt3={imageAlt3}
      imageSrc3={imageSrc3}
      title3={title3}
      excerpt3={excerpt3}
    />
  </BlogEmailShell>
);

Masonry_BlogWithImagesAnd2ColumnsMasonry.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  excerpt3: "Notes, experiments, and lessons from our latest work.",
  heading: "From the blog",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageAlt3: "Modern city",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
  title3: "What we learned this month",
} satisfies Masonry_BlogWithImagesAnd2ColumnsMasonryProps;

const __Masonry = Masonry_BlogWithImagesAnd2ColumnsMasonry;

interface MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentProps {
  theme?: TailwindConfig;
  heading?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  title1?: string;
  title2?: string;
  excerpt1?: string;
  excerpt2?: string;
  imageAlt3?: string;
  imageSrc3?: string;
  title3?: string;
  excerpt3?: string;
}

const MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentSection = ({
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: Omit<MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentProps, "theme">) => {
  const posts = [
    {
      excerpt: excerpt1,
      imageAlt: imageAlt1,
      imageSrc: imageSrc1,
      title: title1,
    },
    {
      excerpt: excerpt2,
      imageAlt: imageAlt2,
      imageSrc: imageSrc2,
      title: title2,
    },
    {
      excerpt: excerpt3,
      imageAlt: imageAlt3,
      imageSrc: imageSrc3,
      title: title3,
    },
  ];
  return (
    <>
      {heading ? <BlogHeading>{heading}</BlogHeading> : null}
      <BlogContent layout="masonry-boxed" posts={posts} />
    </>
  );
};

const MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContent = ({
  theme = defaultTheme,
  heading = "From the blog",
  imageAlt1 = "Mountain landscape",
  imageAlt2 = "Coastal landscape",
  imageSrc1 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2 = "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  title1 = "Designing emails people enjoy",
  title2 = "A better content workflow",
  excerpt1 = "Practical ideas for clearer, more useful email experiences.",
  excerpt2 = "How small systems help teams publish consistently.",
  imageAlt3 = "Modern city",
  imageSrc3 = "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  title3 = "What we learned this month",
  excerpt3 = "Notes, experiments, and lessons from our latest work.",
}: MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentProps) => (
  <BlogEmailShell preview={heading} theme={theme}>
    <MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentSection
      heading={heading}
      imageAlt1={imageAlt1}
      imageAlt2={imageAlt2}
      imageSrc1={imageSrc1}
      imageSrc2={imageSrc2}
      title1={title1}
      title2={title2}
      excerpt1={excerpt1}
      excerpt2={excerpt2}
      imageAlt3={imageAlt3}
      imageSrc3={imageSrc3}
      title3={title3}
      excerpt3={excerpt3}
    />
  </BlogEmailShell>
);

MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContent.PreviewProps = {
  excerpt1: "Practical ideas for clearer, more useful email experiences.",
  excerpt2: "How small systems help teams publish consistently.",
  excerpt3: "Notes, experiments, and lessons from our latest work.",
  heading: "From the blog",
  imageAlt1: "Mountain landscape",
  imageAlt2: "Coastal landscape",
  imageAlt3: "Modern city",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  theme: defaultTheme,
  title1: "Designing emails people enjoy",
  title2: "A better content workflow",
  title3: "What we learned this month",
} satisfies MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContentProps;

const __MasonryBoxed = MasonryBoxed_TwoColumnsMasonryBlogWithBoxedContent;

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

export interface BlogGridProps {
  theme?: Parameters<typeof __GridImage>[0]["theme"];
  heading?: string;
  posts?: BlogPost[];
  masonry?: boolean;
  content?: "image" | "image-text" | "boxed";
}

const toPostProps = (posts: BlogPost[] | undefined) => {
  if (!posts) {
    return {};
  }
  return Object.fromEntries(
    posts.flatMap((post, index) => {
      const suffix = index + 1;
      return [
        [`title${suffix}`, post.title],
        [`excerpt${suffix}`, post.excerpt],
        [`imageSrc${suffix}`, post.image?.src],
        [`imageAlt${suffix}`, post.image?.alt],
      ];
    })
  );
};

export const BlogGrid = ({
  theme,
  heading,
  posts,
  masonry = false,
  content = "image",
}: BlogGridProps) => {
  const props = { heading, theme, ...toPostProps(posts) };
  if (masonry) {
    return content === "boxed" ? (
      <__MasonryBoxed {...props} />
    ) : (
      <__Masonry {...props} />
    );
  }
  if (content === "boxed") {
    return <__GridBoxed {...props} />;
  }
  if (content === "image-text") {
    return <__GridText {...props} />;
  }
  return <__GridImage {...props} />;
};

BlogGrid.PreviewProps = {
  content: "image",
  masonry: false,
} satisfies BlogGridProps;
