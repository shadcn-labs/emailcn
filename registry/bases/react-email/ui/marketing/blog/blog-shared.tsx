import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";
import {
  Body,
  Head,
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

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";

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

export type BlogLayout =
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

export interface BlogPostData {
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
    {post.author || post.host ? (
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
    ) : null}
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

export const BlogContent = ({
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

export const BlogHeading = ({ children }: { children: ReactNode }) => (
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

export const BlogEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
}) => (
  <Html>
    <Head>
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
    </Head>
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
