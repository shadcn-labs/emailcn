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
  theme = defaultTheme,
  ...props
}: TwoColumnsReviewsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Customer reviews</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{reviewsResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <TwoColumnsReviewsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies TwoColumnsReviewsProps;
