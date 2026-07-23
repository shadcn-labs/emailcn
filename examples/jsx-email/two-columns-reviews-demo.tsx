import type { ReviewsVariant } from "@/registry/bases/jsx-email/ui/ecommerce/reviews/reviews-shared";
import { TwoColumnsReviews } from "@/registry/bases/jsx-email/ui/ecommerce/reviews/two-columns-reviews";

export default function TwoColumnsReviewsDemo({
  variant = "with-divider",
}: {
  variant?: ReviewsVariant;
}) {
  return (
    <TwoColumnsReviews {...TwoColumnsReviews.PreviewProps} variant={variant} />
  );
}
