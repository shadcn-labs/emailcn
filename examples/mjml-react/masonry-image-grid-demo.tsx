import { MasonryImageGrid } from "@/registry/bases/mjml-react/components/marketing/images/masonry-image-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function MasonryImageGridDemo() {
  return (
    <MasonryImageGrid columns={2} stackPosition="left" theme={defaultTheme} />
  );
}
