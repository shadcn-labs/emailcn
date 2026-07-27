import { CategoryPreview } from "@/registry/bases/react-email/components/ecommerce/category-previews/category-preview";
import { defaultTheme } from "@/registry/themes/default";

export default function CategoryPreviewDemo() {
  return (
    <CategoryPreview
      layout="cards"
      detailLevel="name"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
