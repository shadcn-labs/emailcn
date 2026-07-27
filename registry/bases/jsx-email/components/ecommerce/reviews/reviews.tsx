import {
  Section,
  Row,
  Column,
  Text,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type ReviewsVariant =
  | "with-divider"
  | "simple"
  | "divider-top"
  | "with-logo"
  | "logo-split"
  | "logo-bottom"
  | "avatar-inline"
  | "avatar-inline-split"
  | "avatar-inline-bottom"
  | "centered-with-avatar"
  | "centered-avatar-split"
  | "centered-avatar-bottom"
  | "avatar-logo"
  | "avatar-logo-split"
  | "avatar-logo-bottom";

type FullWidthReviewsVariant =
  | ReviewsVariant
  | "avatar-aside"
  | "avatar-aside-split"
  | "avatar-aside-reverse";

interface InternalReviewItem {
  avatarUrl?: string;
  company?: string;
  date: string;
  logoAlt?: string;
  logoUrl?: string;
  logoWidth?: number;
  name: string;
  rating: number;
  text: string;
}

type ReviewsLayout = "full-width" | "masonry-grid" | "two-columns";

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const reviewsResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .review-column { display: block !important; width: 100% !important; }
    .review-column-gap { line-height: 44px !important; }
  }
`;

const defaultReviews: InternalReviewItem[] = [
  {
    avatarUrl: `${ASSET_ROOT}/reviews/avatar.jpg`,
    company: "Monarch",
    date: "August 16, 2025",
    logoAlt: "Monarch",
    logoUrl: `${ASSET_ROOT}/reviews/logo-monarch.png`,
    logoWidth: 145,
    name: "Jenna Hendricks",
    rating: 4.5,
    text: "This tool made it incredibly easy to launch polished projects. The components are flexible, clean, and work perfectly across platforms.",
  },
  {
    avatarUrl: `${ASSET_ROOT}/reviews/avatar-3.jpg`,
    company: "Accentic",
    date: "October 7, 2025",
    logoAlt: "Accentic",
    logoUrl: `${ASSET_ROOT}/reviews/logo-accentic.png`,
    logoWidth: 165,
    name: "Ella James",
    rating: 4.5,
    text: "Great set of templates. I saved hours of dev time and everything came out looking professional and well executed, even in tricky environments.",
  },
  {
    avatarUrl: `${ASSET_ROOT}/reviews/avatar-4.jpg`,
    company: "Amada",
    date: "June 2, 2025",
    logoAlt: "Amada",
    logoUrl: `${ASSET_ROOT}/reviews/logo-amada.png`,
    logoWidth: 137,
    name: "Roderick Adams",
    rating: 3.5,
    text: "Super impressed with the quality. The designs are modern, easy to adapt, and helped streamline our entire workflow. Highly recommended!",
  },
];

const twoColumnReviews: InternalReviewItem[] = [
  defaultReviews[0],
  {
    ...defaultReviews[1],
    avatarUrl: `${ASSET_ROOT}/reviews/avatar-2.jpg`,
    date: "October 9, 2025",
    name: "Adam Johnson",
    rating: 5,
  },
];

const textStyle = { fontFamily, margin: 0 } as const;

const Spacer = ({ height }: { height: number }) => (
  <Section style={{ lineHeight: `${height}px` }}>&zwj;</Section>
);

const Divider = ({ centered = false }: { centered?: boolean }) => (
  <Section
    align={centered ? "center" : undefined}
    style={
      centered
        ? { margin: 0, marginLeft: "auto", marginRight: "auto" }
        : undefined
    }
  >
    <Fragment>
      <Row>
        <Column
          style={{
            backgroundColor: "#6366f1",
            lineHeight: "4px",
            width: "96px",
          }}
        >
          &zwj;
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const getRatingIcon = (rating: number, index: number) => {
  if (rating >= index + 1) {
    return "solid";
  }
  if (rating >= index + 0.5) {
    return "half";
  }
  return "outline";
};

const Rating = ({ rating, size }: { rating: number; size: 16 | 24 }) => (
  <Section>
    <Fragment>
      <Row>
        {[0, 1, 2, 3, 4].map((index) => {
          const icon = getRatingIcon(rating, index);
          return (
            <Column key={index} style={{ paddingRight: "4px" }}>
              <Img
                alt=""
                src={`${ASSET_ROOT}/icon-star-${icon}.png`}
                style={{ display: "block" }}
                width={size}
              />
            </Column>
          );
        })}
      </Row>
    </Fragment>
  </Section>
);

const CenteredRating = ({
  rating,
  size,
}: {
  rating: number;
  size: 16 | 24;
}) => (
  <Section
    align="center"
    style={{ margin: 0, marginLeft: "auto", marginRight: "auto" }}
  >
    <Fragment>
      <Row>
        {[0, 1, 2, 3, 4].map((index) => {
          const icon = getRatingIcon(rating, index);
          return (
            <Column key={index} style={{ paddingRight: "4px" }}>
              <Img
                alt=""
                src={`${ASSET_ROOT}/icon-star-${icon}.png`}
                style={{ display: "block" }}
                width={size}
              />
            </Column>
          );
        })}
      </Row>
    </Fragment>
  </Section>
);

const Logo = ({ item }: { centered?: boolean; item: InternalReviewItem }) => (
  <Section>
    <Img
      alt={item.logoAlt ?? item.company ?? ""}
      src={item.logoUrl}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={item.logoWidth}
    />
  </Section>
);

const ReviewCopy = ({
  featured,
  item,
  separateAuthor,
}: {
  centered?: boolean;
  featured: boolean;
  item: InternalReviewItem;
  separateAuthor?: boolean;
}) => (
  <>
    <Text
      style={{
        ...textStyle,
        color: "#4b5563",
        fontSize: featured ? "20px" : "16px",
        lineHeight: featured ? "28px" : "24px",
      }}
    >
      {item.text}
    </Text>
    <Spacer height={20} />
    <Text
      style={{
        ...textStyle,
        color: "#9ca3af",
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
      }}
    >
      {separateAuthor ? null : (
        <>
          {item.name} - {item.company}
          <br />
        </>
      )}
      {item.date}
    </Text>
  </>
);

const Author = ({
  centered,
  item,
  rating,
  size,
}: {
  centered?: boolean;
  item: InternalReviewItem;
  rating: number;
  size: 16 | 24;
}) =>
  centered ? (
    <>
      <Section>
        <Img
          alt=""
          src={item.avatarUrl}
          style={{
            borderRadius: "9999px",
            maxWidth: "100%",
            verticalAlign: "middle",
          }}
          width="64"
        />
      </Section>
      <Text
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
          marginTop: "16px",
        }}
      >
        {item.name}
      </Text>
      <CenteredRating rating={rating} size={size} />
    </>
  ) : (
    <Section>
      <Fragment>
        <Row>
          <Column style={{ verticalAlign: "top", width: "56px" }}>
            <Section>
              <Img
                alt=""
                src={item.avatarUrl}
                style={{
                  borderRadius: "9999px",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
                width="56"
              />
            </Section>
          </Column>
          <Column style={{ width: "16px" }}>&zwj;</Column>
          <Column style={{ verticalAlign: "top" }}>
            <Text
              style={{
                ...textStyle,
                color: "#030712",
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                marginBottom: "4px",
              }}
            >
              {item.name}
            </Text>
            <Rating rating={rating} size={size} />
          </Column>
        </Row>
      </Fragment>
    </Section>
  );

const ratingFor = (
  item: InternalReviewItem,
  index: number,
  layout: ReviewsLayout,
  variant: FullWidthReviewsVariant
) => {
  if (
    layout === "full-width" &&
    (variant.startsWith("centered") || variant.startsWith("avatar-logo"))
  ) {
    return 3.5;
  }
  if (
    layout === "masonry-grid" &&
    index === 2 &&
    (variant.includes("logo") || variant.startsWith("centered"))
  ) {
    return 5;
  }
  return item.rating;
};

const ratingSizeFor = (
  index: number,
  layout: ReviewsLayout,
  variant: FullWidthReviewsVariant
): 16 | 24 => {
  if (layout === "full-width") {
    return 16;
  }
  if (variant === "logo-bottom" && layout === "two-columns") {
    return 16;
  }
  if (
    layout === "masonry-grid" &&
    index === 0 &&
    variant.startsWith("avatar-inline")
  ) {
    return 16;
  }
  return 24;
};

const StandardReview = ({
  featured,
  item,
  rating,
  size,
  variant,
}: {
  featured: boolean;
  item: InternalReviewItem;
  rating: number;
  size: 16 | 24;
  variant: FullWidthReviewsVariant;
}) => {
  if (variant === "divider-top") {
    return (
      <>
        <Divider />
        <Spacer height={24} />
        <ReviewCopy featured={featured} item={item} />
        <Spacer height={36} />
        <Rating rating={rating} size={size} />
      </>
    );
  }
  return (
    <>
      <Rating rating={rating} size={size} />
      <Spacer height={36} />
      {variant === "with-divider" ? (
        <>
          <Divider />
          <Spacer height={24} />
        </>
      ) : null}
      <ReviewCopy featured={featured} item={item} />
    </>
  );
};

const LogoReview = ({
  featured,
  item,
  layout,
  rating,
  size,
  variant,
}: {
  featured: boolean;
  item: InternalReviewItem;
  layout: ReviewsLayout;
  rating: number;
  size: 16 | 24;
  variant: FullWidthReviewsVariant;
}) => {
  if (variant === "logo-bottom") {
    return (
      <>
        {layout === "full-width" ? null : (
          <>
            <Divider />
            <Spacer height={24} />
          </>
        )}
        <ReviewCopy featured={featured} item={item} />
        <Spacer height={36} />
        <Logo item={item} />
        <Spacer height={36} />
        <Rating rating={rating} size={size} />
      </>
    );
  }
  return (
    <>
      <Logo item={item} />
      <Spacer height={36} />
      <Rating rating={rating} size={size} />
      <Spacer height={36} />
      {variant === "logo-split" ? (
        <>
          <Divider />
          <Spacer height={24} />
        </>
      ) : null}
      <ReviewCopy featured={featured} item={item} />
    </>
  );
};

const InlineReview = ({
  featured,
  item,
  rating,
  size,
  variant,
}: {
  featured: boolean;
  item: InternalReviewItem;
  rating: number;
  size: 16 | 24;
  variant: FullWidthReviewsVariant;
}) => {
  const author = <Author item={item} rating={rating} size={size} />;
  if (variant === "avatar-inline-bottom") {
    return (
      <>
        <Divider />
        <Spacer height={24} />
        <ReviewCopy featured={featured} item={item} separateAuthor />
        <Spacer height={36} />
        {author}
      </>
    );
  }
  return (
    <>
      {author}
      <Spacer height={36} />
      {variant === "avatar-inline-split" ? (
        <>
          <Divider />
          <Spacer height={24} />
        </>
      ) : null}
      <ReviewCopy featured={featured} item={item} separateAuthor />
    </>
  );
};

const CenteredReview = ({
  featured,
  index,
  item,
  layout,
  rating,
  size,
  variant,
}: {
  featured: boolean;
  index: number;
  item: InternalReviewItem;
  layout: ReviewsLayout;
  rating: number;
  size: 16 | 24;
  variant: FullWidthReviewsVariant;
}) => {
  const author = <Author centered item={item} rating={rating} size={size} />;
  if (variant === "centered-avatar-bottom") {
    if (layout === "masonry-grid" && index === 0) {
      return (
        <>
          {author}
          <Spacer height={36} />
          <Divider centered />
          <Spacer height={24} />
          <ReviewCopy centered featured={featured} item={item} separateAuthor />
        </>
      );
    }
    return (
      <>
        <Divider centered />
        <Spacer height={24} />
        <ReviewCopy centered featured={featured} item={item} separateAuthor />
        <Spacer height={36} />
        {author}
      </>
    );
  }
  return (
    <>
      {author}
      <Spacer height={variant === "centered-avatar-split" ? 36 : 24} />
      {variant === "centered-avatar-split" ? (
        <>
          <Divider centered />
          <Spacer height={24} />
        </>
      ) : null}
      <ReviewCopy centered featured={featured} item={item} separateAuthor />
    </>
  );
};

const AvatarLogoReview = ({
  featured,
  index,
  item,
  layout,
  rating,
  size,
  variant,
}: {
  featured: boolean;
  index: number;
  item: InternalReviewItem;
  layout: ReviewsLayout;
  rating: number;
  size: 16 | 24;
  variant: FullWidthReviewsVariant;
}) => {
  const author = <Author centered item={item} rating={rating} size={size} />;
  if (variant === "avatar-logo-bottom") {
    if (layout === "masonry-grid" && index === 0) {
      return (
        <>
          {author}
          <Spacer height={36} />
          <Divider centered />
          <Spacer height={24} />
          <ReviewCopy centered featured={featured} item={item} separateAuthor />
          <Spacer height={36} />
          <Logo centered item={item} />
        </>
      );
    }
    return (
      <>
        {layout === "two-columns" ? (
          <>
            <Logo centered item={item} />
            <Spacer height={36} />
          </>
        ) : null}
        <Divider centered />
        <Spacer height={24} />
        <ReviewCopy centered featured={featured} item={item} separateAuthor />
        <Spacer height={36} />
        {layout === "two-columns" ? null : (
          <>
            <Logo centered item={item} />
            <Spacer height={36} />
          </>
        )}
        {author}
      </>
    );
  }
  if (layout !== "full-width") {
    return (
      <>
        <Logo centered item={item} />
        <Spacer height={36} />
        {author}
        <Spacer height={variant === "avatar-logo-split" ? 36 : 24} />
        {variant === "avatar-logo-split" ? (
          <>
            <Divider centered />
            <Spacer height={24} />
          </>
        ) : null}
        <ReviewCopy centered featured={featured} item={item} separateAuthor />
      </>
    );
  }
  return (
    <>
      {author}
      <Spacer height={variant === "avatar-logo-split" ? 36 : 24} />
      {variant === "avatar-logo-split" ? (
        <>
          <Divider centered />
          <Spacer height={24} />
        </>
      ) : null}
      <ReviewCopy centered featured={featured} item={item} separateAuthor />
      <Spacer height={36} />
      <Logo centered item={item} />
    </>
  );
};

const AsideReview = ({
  item,
  rating,
  variant,
}: {
  item: InternalReviewItem;
  rating: number;
  variant: FullWidthReviewsVariant;
}) => {
  const author = (
    <>
      <Text
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "16px",
          fontWeight: 700,
          lineHeight: "24px",
          marginBottom: "4px",
        }}
      >
        {item.name}
      </Text>
      <Rating rating={rating} size={16} />
    </>
  );
  return (
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column style={{ verticalAlign: "top", width: "56px" }}>
            <Section>
              <Img
                alt=""
                src={item.avatarUrl}
                style={{
                  borderRadius: "9999px",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
                width="56"
              />
            </Section>
          </Column>
          <Column style={{ width: "36px" }}>&zwj;</Column>
          <Column style={{ verticalAlign: "top" }}>
            {variant === "avatar-aside-reverse" ? null : author}
            {variant === "avatar-aside-reverse" ? null : <Spacer height={36} />}
            {variant === "avatar-aside-split" ||
            variant === "avatar-aside-reverse" ? (
              <>
                <Divider />
                <Spacer height={24} />
              </>
            ) : null}
            <ReviewCopy featured item={item} separateAuthor />
            {variant === "avatar-aside-reverse" ? (
              <>
                <Spacer height={36} />
                {author}
              </>
            ) : null}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const Review = ({
  index,
  item,
  layout,
  variant,
}: {
  index: number;
  item: InternalReviewItem;
  layout: ReviewsLayout;
  variant: FullWidthReviewsVariant;
}) => {
  const featured =
    layout === "full-width" || (layout === "masonry-grid" && index === 0);
  const rating = ratingFor(item, index, layout, variant);
  const size = ratingSizeFor(index, layout, variant);
  if (variant.startsWith("avatar-aside")) {
    return <AsideReview item={item} rating={rating} variant={variant} />;
  }
  if (variant.startsWith("avatar-inline")) {
    return (
      <InlineReview
        featured={featured}
        item={item}
        rating={rating}
        size={size}
        variant={variant}
      />
    );
  }
  if (variant.startsWith("centered")) {
    return (
      <CenteredReview
        featured={featured}
        index={index}
        item={item}
        layout={layout}
        rating={rating}
        size={size}
        variant={variant}
      />
    );
  }
  if (variant.startsWith("avatar-logo")) {
    return (
      <AvatarLogoReview
        featured={featured}
        index={index}
        item={item}
        layout={layout}
        rating={rating}
        size={size}
        variant={variant}
      />
    );
  }
  if (variant.includes("logo")) {
    return (
      <LogoReview
        featured={featured}
        item={item}
        layout={layout}
        rating={rating}
        size={size}
        variant={variant}
      />
    );
  }
  return (
    <StandardReview
      featured={featured}
      item={item}
      rating={rating}
      size={size}
      variant={variant}
    />
  );
};

const Columns = ({
  children,
  top,
}: {
  children: [ReactNode, ReactNode];
  top: boolean;
}) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          className="review-column"
          style={{ verticalAlign: top ? "top" : undefined, width: "254px" }}
        >
          {children[0]}
        </Column>
        <Column
          className="review-column review-column-gap"
          style={{ width: "44px" }}
        >
          &zwj;
        </Column>
        <Column
          className="review-column"
          style={{ verticalAlign: top ? "top" : undefined, width: "254px" }}
        >
          {children[1]}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const EmailShell = ({
  centered,
  children,
}: {
  centered: boolean;
  children: ReactNode;
}) => (
  <>
    <style>{reviewsResponsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column
                    style={{
                      padding: "0 24px",
                      textAlign: centered ? "center" : undefined,
                    }}
                  >
                    <Spacer height={44} />
                    {children}
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const ReviewsSection = ({
  layout,
  reviews,
  variant = "with-divider",
}: {
  layout: ReviewsLayout;
  reviews?: InternalReviewItem[];
  variant?: FullWidthReviewsVariant;
}) => {
  const baseItems =
    reviews ?? (layout === "two-columns" ? twoColumnReviews : defaultReviews);
  const items =
    layout === "two-columns" &&
    ["with-divider", "simple", "divider-top"].includes(variant)
      ? [
          baseItems[0],
          {
            ...baseItems[1],
            text: baseItems[0].text,
          },
        ]
      : baseItems;
  const centered =
    variant.startsWith("centered") || variant.startsWith("avatar-logo");
  const columnsTop =
    layout === "two-columns" ||
    variant.includes("logo") ||
    variant.startsWith("centered");
  if (layout === "full-width") {
    return (
      <EmailShell centered={centered}>
        <Review index={0} item={items[0]} layout={layout} variant={variant} />
      </EmailShell>
    );
  }
  if (layout === "masonry-grid") {
    return (
      <EmailShell centered={centered}>
        <Section>
          <Review index={0} item={items[0]} layout={layout} variant={variant} />
        </Section>
        <Spacer height={64} />
        <Columns top={columnsTop}>
          <Review index={1} item={items[1]} layout={layout} variant={variant} />
          <Review index={2} item={items[2]} layout={layout} variant={variant} />
        </Columns>
      </EmailShell>
    );
  }
  return (
    <EmailShell centered={centered}>
      <Columns top={columnsTop}>
        <Review index={0} item={items[0]} layout={layout} variant={variant} />
        <Review index={1} item={items[1]} layout={layout} variant={variant} />
      </Columns>
    </EmailShell>
  );
};

interface FullWidthReviews_FullWidthReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailTheme;
  variant?: FullWidthReviewsVariant;
}

const FullWidthReviews_FullWidthReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<FullWidthReviews_FullWidthReviewsProps, "theme">) => (
  <ReviewsSection layout="full-width" reviews={reviews} variant={variant} />
);

const FullWidthReviews_FullWidthReviews = ({
  theme = defaultTheme,
  ...props
}: FullWidthReviews_FullWidthReviewsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Customer review</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <FullWidthReviews_FullWidthReviewsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

FullWidthReviews_FullWidthReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies FullWidthReviews_FullWidthReviewsProps;

const __FullWidthReviews = FullWidthReviews_FullWidthReviews;

interface MasonryReviews_MasonryGridReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailTheme;
  variant?: ReviewsVariant;
}

const MasonryReviews_MasonryGridReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<MasonryReviews_MasonryGridReviewsProps, "theme">) => (
  <ReviewsSection layout="masonry-grid" reviews={reviews} variant={variant} />
);

const MasonryReviews_MasonryGridReviews = ({
  theme = defaultTheme,
  ...props
}: MasonryReviews_MasonryGridReviewsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Customer reviews</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <MasonryReviews_MasonryGridReviewsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

MasonryReviews_MasonryGridReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies MasonryReviews_MasonryGridReviewsProps;

const __MasonryReviews = MasonryReviews_MasonryGridReviews;

interface TwoColumnReviews_TwoColumnsReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailTheme;
  variant?: ReviewsVariant;
}

const TwoColumnReviews_TwoColumnsReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<TwoColumnReviews_TwoColumnsReviewsProps, "theme">) => (
  <ReviewsSection layout="two-columns" reviews={reviews} variant={variant} />
);

const TwoColumnReviews_TwoColumnsReviews = ({
  theme = defaultTheme,
  ...props
}: TwoColumnReviews_TwoColumnsReviewsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Customer reviews</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TwoColumnReviews_TwoColumnsReviewsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

TwoColumnReviews_TwoColumnsReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies TwoColumnReviews_TwoColumnsReviewsProps;

const __TwoColumnReviews = TwoColumnReviews_TwoColumnsReviews;

export interface ReviewItem {
  avatarUrl?: string;
  company?: string;
  date: string;
  logoAlt?: string;
  logoUrl?: string;
  logoWidth?: number;
  name: string;
  rating: number;
  text: string;
}

export interface ReviewsProps {
  theme?: Parameters<typeof __FullWidthReviews>[0]["theme"];
  items?: ReviewItem[];
  layout?: "full-width" | "two-columns" | "masonry";
  identity?:
    | "text"
    | "logo"
    | "avatar-inline"
    | "avatar-centered"
    | "avatar-logo"
    | "avatar-aside";
  divider?: "none" | "top" | "between" | "bottom";
  reverse?: boolean;
}

const reviewVariant = ({
  identity,
  divider,
  reverse,
}: Pick<ReviewsProps, "identity" | "divider" | "reverse">): NonNullable<
  Parameters<typeof __FullWidthReviews>[0]["variant"]
> => {
  if (identity === "avatar-aside") {
    if (reverse) {
      return "avatar-aside-reverse";
    }
    return divider === "between" ? "avatar-aside-split" : "avatar-aside";
  }
  if (identity === "text") {
    if (divider === "top") {
      return "divider-top";
    }
    return divider === "between" ? "with-divider" : "simple";
  }
  if (identity === "logo") {
    if (divider === "between") {
      return "logo-split";
    }
    return divider === "bottom" ? "logo-bottom" : "with-logo";
  }
  if (identity === "avatar-inline") {
    if (divider === "between") {
      return "avatar-inline-split";
    }
    return divider === "bottom" ? "avatar-inline-bottom" : "avatar-inline";
  }
  if (identity === "avatar-centered") {
    if (divider === "between") {
      return "centered-avatar-split";
    }
    return divider === "bottom"
      ? "centered-avatar-bottom"
      : "centered-with-avatar";
  }
  if (divider === "between") {
    return "avatar-logo-split";
  }
  return divider === "bottom" ? "avatar-logo-bottom" : "avatar-logo";
};

export const Reviews = ({
  theme,
  items,
  layout = "full-width",
  identity = "text",
  divider = "none",
  reverse = false,
}: ReviewsProps) => {
  const props = {
    reviews: items,
    theme,
    variant: reviewVariant({ divider, identity, reverse }),
  };
  if (layout === "masonry") {
    return (
      <__MasonryReviews
        {...props}
        variant={
          props.variant as Parameters<typeof __MasonryReviews>[0]["variant"]
        }
      />
    );
  }
  if (layout === "two-columns") {
    return (
      <__TwoColumnReviews
        {...props}
        variant={
          props.variant as Parameters<typeof __TwoColumnReviews>[0]["variant"]
        }
      />
    );
  }
  return <__FullWidthReviews {...props} />;
};

Reviews.PreviewProps = {
  divider: "none",
  identity: "text",
  layout: "full-width",
} satisfies ReviewsProps;
