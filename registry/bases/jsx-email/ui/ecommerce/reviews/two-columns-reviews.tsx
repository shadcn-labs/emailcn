import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ReviewsSection } from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";
import type {
  ReviewItem,
  ReviewsVariant,
} from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";

export interface TwoColumnsReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailThemeTokens;
  variant?: ReviewsVariant;
}

export const TwoColumnsReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<TwoColumnsReviewsProps, "theme">) => (
  <ReviewsSection layout="two-columns" reviews={reviews} variant={variant} />
);

export const TwoColumnsReviews = ({
  theme: _theme = defaultTheme,
  ...props
}: TwoColumnsReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer reviews</Preview>
    <Body style={{ margin: 0 }}>
      <TwoColumnsReviewsSection {...props} />
    </Body>
  </Html>
);

TwoColumnsReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies TwoColumnsReviewsProps;
