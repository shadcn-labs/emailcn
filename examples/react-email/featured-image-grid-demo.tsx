import { FeaturedImageGrid } from "@/registry/bases/react-email/components/marketing/images/featured-image-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function FeaturedImageGridDemo() {
  return (
    <FeaturedImageGrid
      columns={2}
      featurePosition="top"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
