import { FeaturedBlogPost } from "@/registry/bases/mjml-react/components/marketing/blog/featured-blog-post";
import { defaultTheme } from "@/registry/themes/default";

export default function FeaturedBlogPostDemo() {
  return (
    <FeaturedBlogPost
      width="contained"
      dateStyle="none"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
