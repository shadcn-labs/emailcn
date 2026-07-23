import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  reviewsResponsiveStyles,
  ReviewsSection,
} from "@/registry/bases/mjml-react/ui/ecommerce/reviews/reviews-shared";
import type {
  ReviewItem,
  ReviewsVariant,
} from "@/registry/bases/mjml-react/ui/ecommerce/reviews/reviews-shared";

export interface MasonryGridReviewsProps {
  reviews?: ReviewItem[];
  theme?: EmailThemeTokens;
  variant?: ReviewsVariant;
}

export const MasonryGridReviewsSection = ({
  reviews,
  variant = "with-divider",
}: Omit<MasonryGridReviewsProps, "theme">) => (
  <ReviewsSection layout="masonry-grid" reviews={reviews} variant={variant} />
);

export const MasonryGridReviews = ({
  theme = defaultTheme,
  ...props
}: MasonryGridReviewsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Customer reviews</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{reviewsResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MasonryGridReviewsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

MasonryGridReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies MasonryGridReviewsProps;
