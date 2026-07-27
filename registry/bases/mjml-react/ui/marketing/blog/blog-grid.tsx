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
const BlogHeading = ({ children }: { children: ReactNode }) => (
  <MjmlSection padding="0 0 32px">
    <MjmlColumn padding="0">
      <MjmlText
        align="center"
        color={colors.dark}
        fontFamily={fontFamily}
        fontSize="28px"
        fontWeight="600"
        lineHeight="36px"
        padding="0"
      >
        {children}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);
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
interface GridImage_TwoColumnsBlogWithImagesProps {
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
