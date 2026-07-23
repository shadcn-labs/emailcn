import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
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
  FullWidthReviewsVariant,
  ReviewItem,
} from "@/registry/bases/mjml-react/ui/ecommerce/reviews/reviews-shared";

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
  theme = defaultTheme,
  ...props
}: FullWidthReviewsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Customer review</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{reviewsResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <FullWidthReviewsSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthReviews.PreviewProps = {
  theme: defaultTheme,
  variant: "with-divider",
} satisfies FullWidthReviewsProps;
