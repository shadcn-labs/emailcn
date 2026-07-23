import { FullWidthReviews } from "@/registry/bases/mjml-react/ui/ecommerce/reviews/full-width-reviews";
import type { FullWidthReviewsVariant } from "@/registry/bases/mjml-react/ui/ecommerce/reviews/reviews-shared";

export default function FullWidthReviewsDemo({
  variant = "with-divider",
}: {
  variant?: FullWidthReviewsVariant;
}) {
  return (
    <FullWidthReviews {...FullWidthReviews.PreviewProps} variant={variant} />
  );
}
