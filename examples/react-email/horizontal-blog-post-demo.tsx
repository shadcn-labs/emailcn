import { HorizontalBlogPost } from "@/registry/bases/react-email/components/marketing/blog/horizontal-blog-post";
import { defaultTheme } from "@/registry/themes/default";

export default function HorizontalBlogPostDemo() {
  return (
    <HorizontalBlogPost
      surface="plain"
      media="single"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
