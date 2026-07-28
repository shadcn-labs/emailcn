import { ProductImagesFeature } from "@/registry/bases/mjml-react/components/marketing/feature/product-images-feature";
import { defaultTheme } from "@/registry/themes/default";

export default function ProductImagesFeatureDemo() {
  return (
    <ProductImagesFeature
      placement="right"
      presentation="logo"
      theme={defaultTheme}
    />
  );
}
