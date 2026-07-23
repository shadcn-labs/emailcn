import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";

export type ReviewsVariant =
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

export type FullWidthReviewsVariant =
  | ReviewsVariant
  | "avatar-aside"
  | "avatar-aside-split"
  | "avatar-aside-reverse";

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

export type ReviewsLayout = "full-width" | "masonry-grid" | "two-columns";

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const reviewsResponsiveStyles = "";

const defaultReviews: ReviewItem[] = [
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

const twoColumnReviews: ReviewItem[] = [
  defaultReviews[0],
  {
    ...defaultReviews[1],
    avatarUrl: `${ASSET_ROOT}/reviews/avatar-2.jpg`,
    date: "October 9, 2025",
    name: "Adam Johnson",
    rating: 5,
  },
];

const Rating = ({
  centered,
  rating,
}: {
  centered: boolean;
  rating: number;
}) => (
  <MjmlText
    align={centered ? "center" : "left"}
    color="#f59e0b"
    fontFamily={fontFamily}
    fontSize="18px"
    lineHeight="24px"
    padding="0"
  >
    ★ ★ ★ ★ {rating >= 4.5 ? "★" : "☆"}
  </MjmlText>
);

const AccentDivider = () => (
  <MjmlDivider
    borderColor="#6366f1"
    borderWidth="4px"
    padding="0"
    width="96px"
  />
);

const ReviewLogo = ({
  centered,
  item,
  trailingSpace = true,
}: {
  centered?: boolean;
  item: ReviewItem;
  trailingSpace?: boolean;
}) => (
  <>
    <MjmlImage
      align={centered ? "center" : "left"}
      alt={item.logoAlt ?? item.company ?? ""}
      padding="0"
      src={item.logoUrl}
      width={`${item.logoWidth ?? 145}px`}
    />
    {trailingSpace ? <MjmlSpacer height="24px" /> : null}
  </>
);

const ReviewAvatar = ({
  centered,
  item,
}: {
  centered: boolean;
  item: ReviewItem;
}) => (
  <>
    <MjmlImage
      align={centered ? "center" : "left"}
      alt={item.name}
      borderRadius="9999px"
      padding="0"
      src={item.avatarUrl}
      width="64px"
    />
    <MjmlSpacer height="12px" />
    <MjmlText
      align={centered ? "center" : "left"}
      color="#030712"
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="700"
      lineHeight="24px"
      padding="0"
    >
      {item.name}
    </MjmlText>
    <Rating centered={centered} rating={item.rating} />
    <MjmlSpacer height="24px" />
  </>
);

const ReviewTopIdentity = ({
  avatarAtTop,
  centered,
  item,
  logoAtTop,
  showRatingOnly,
}: {
  avatarAtTop: boolean;
  centered: boolean;
  item: ReviewItem;
  logoAtTop: boolean;
  showRatingOnly: boolean;
}) => {
  if (logoAtTop) {
    return <ReviewLogo centered={centered} item={item} />;
  }
  if (avatarAtTop) {
    return <ReviewAvatar centered={centered} item={item} />;
  }
  if (showRatingOnly) {
    return (
      <>
        <Rating centered={centered} rating={item.rating} />
        <MjmlSpacer height="24px" />
      </>
    );
  }
  return null;
};

const ReviewBottomIdentity = ({
  avatarAtBottom,
  item,
  logoAtBottom,
}: {
  avatarAtBottom: boolean;
  item: ReviewItem;
  logoAtBottom: boolean;
}) => {
  if (logoAtBottom) {
    return (
      <>
        <MjmlSpacer height="36px" />
        <ReviewLogo item={item} trailingSpace={false} />
      </>
    );
  }
  if (avatarAtBottom) {
    return (
      <>
        <MjmlSpacer height="36px" />
        <MjmlImage
          alt={item.name}
          borderRadius="9999px"
          padding="0"
          src={item.avatarUrl}
          width="64px"
        />
        <MjmlSpacer height="12px" />
        <Rating centered rating={item.rating} />
      </>
    );
  }
  return null;
};

const ReviewContent = ({
  featured,
  item,
  variant,
}: {
  featured: boolean;
  item: ReviewItem;
  variant: FullWidthReviewsVariant;
}) => {
  const centered =
    variant.startsWith("centered") || variant.startsWith("avatar-logo");
  const hasAvatar =
    variant.startsWith("avatar") || variant.startsWith("centered");
  const hasLogo = variant.includes("logo");
  const dividerTop =
    variant === "divider-top" ||
    variant.endsWith("-bottom") ||
    variant.endsWith("-reverse");
  const dividerMiddle =
    variant === "with-divider" || variant.endsWith("-split");
  const identityAtBottom = variant.endsWith("-bottom");
  const logoAtTop = hasLogo && !identityAtBottom;
  const avatarAtTop = hasAvatar && !identityAtBottom;
  const showRatingOnly = !hasLogo && !avatarAtTop;

  return (
    <>
      {dividerTop ? (
        <>
          <AccentDivider />
          <MjmlSpacer height="24px" />
        </>
      ) : null}
      <ReviewTopIdentity
        avatarAtTop={avatarAtTop}
        centered={centered}
        item={item}
        logoAtTop={logoAtTop}
        showRatingOnly={showRatingOnly}
      />
      {dividerMiddle ? (
        <>
          <AccentDivider />
          <MjmlSpacer height="24px" />
        </>
      ) : null}
      <MjmlText
        align={centered ? "center" : "left"}
        color="#4b5563"
        fontFamily={fontFamily}
        fontSize={featured ? "20px" : "16px"}
        lineHeight={featured ? "28px" : "24px"}
        padding="0"
      >
        {item.text}
      </MjmlText>
      <MjmlSpacer height="20px" />
      <MjmlText
        align={centered ? "center" : "left"}
        color="#9ca3af"
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="0"
      >
        {item.name} · {item.company} · {item.date}
      </MjmlText>
      <ReviewBottomIdentity
        avatarAtBottom={hasAvatar && identityAtBottom}
        item={item}
        logoAtBottom={hasLogo && identityAtBottom}
      />
    </>
  );
};

const ReviewColumn = ({
  featured,
  item,
  variant,
  width,
}: {
  featured: boolean;
  item: ReviewItem;
  variant: FullWidthReviewsVariant;
  width: string;
}) => (
  <MjmlColumn padding="0 22px" verticalAlign="top" width={width}>
    <ReviewContent featured={featured} item={item} variant={variant} />
  </MjmlColumn>
);

export const ReviewsSection = ({
  layout,
  reviews,
  variant = "with-divider",
}: {
  layout: ReviewsLayout;
  reviews?: ReviewItem[];
  variant?: FullWidthReviewsVariant;
}) => {
  const items =
    reviews ?? (layout === "two-columns" ? twoColumnReviews : defaultReviews);

  if (layout === "full-width") {
    return (
      <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
        <ReviewColumn featured item={items[0]} variant={variant} width="100%" />
      </MjmlSection>
    );
  }

  if (layout === "masonry-grid") {
    return (
      <>
        <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
          <ReviewColumn
            featured
            item={items[0]}
            variant={variant}
            width="100%"
          />
        </MjmlSection>
        <MjmlSection backgroundColor="#fffffe" padding="64px 24px 44px">
          <ReviewColumn
            featured={false}
            item={items[1]}
            variant={variant}
            width="50%"
          />
          <ReviewColumn
            featured={false}
            item={items[2]}
            variant={variant}
            width="50%"
          />
        </MjmlSection>
      </>
    );
  }

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      <ReviewColumn
        featured={false}
        item={items[0]}
        variant={variant}
        width="50%"
      />
      <ReviewColumn
        featured={false}
        item={items[1]}
        variant={variant}
        width="50%"
      />
    </MjmlSection>
  );
};
