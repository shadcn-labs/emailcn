import { BlogGrid } from "@/registry/bases/mjml-react/components/marketing/blog/blog-grid";
import { defaultTheme } from "@/registry/themes/default";

export default function BlogGridDemo() {
  return (
    <BlogGrid
      content="image"
      masonry={false}
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
