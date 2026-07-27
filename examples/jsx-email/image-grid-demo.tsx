import { ImageGrid } from "@/registry/bases/jsx-email/components/marketing/images/image-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function ImageGridDemo() {
  return (
    <ImageGrid
      columns={2}
      aspect="square"
      overlay={false}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
