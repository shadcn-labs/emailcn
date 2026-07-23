import { ProductDetailMasonry } from "@/registry/bases/jsx-email/ui/ecommerce/product-detail/product-detail-with-masonry-image-grid-and-details";

export default function ProductDetailMasonryVariantRatingAsideExampleDemo() {
  return (
    <ProductDetailMasonry
      {...ProductDetailMasonry.PreviewProps}
      variant="rating-aside"
    />
  );
}
