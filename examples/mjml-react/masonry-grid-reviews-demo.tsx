import { MasonryGridReviews } from "@/registry/bases/mjml-react/ui/ecommerce/reviews/masonry-grid-reviews";
import type { ReviewsVariant } from "@/registry/bases/mjml-react/ui/ecommerce/reviews/reviews-shared";

export default function MasonryGridReviewsDemo({
  variant = "with-divider",
}: {
  variant?: ReviewsVariant;
}) {
  return (
    <MasonryGridReviews
      {...MasonryGridReviews.PreviewProps}
      variant={variant}
    />
  );
}
