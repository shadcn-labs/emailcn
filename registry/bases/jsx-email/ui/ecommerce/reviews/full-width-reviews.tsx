import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { ReviewsSection } from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";
import type {
  FullWidthReviewsVariant,
  ReviewItem,
} from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";

export interface FullWidthReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailThemeTokens;
  variant?: FullWidthReviewsVariant;
}

export const FullWidthReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<FullWidthReviewsProps, "theme">) => (
  <ReviewsSection layout="full-width" reviews={reviews} variant={variant} />
);

export const FullWidthReviews = ({
  theme: _theme = defaultTheme,
  ...props
}: FullWidthReviewsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Customer review</Preview>
    <Body style={{ margin: 0 }}>
      <FullWidthReviewsSection {...props} />
    </Body>
  </Html>
);

FullWidthReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies FullWidthReviewsProps;
