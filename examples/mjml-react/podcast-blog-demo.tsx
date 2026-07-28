import { PodcastBlog } from "@/registry/bases/mjml-react/components/marketing/blog/podcast-blog";
import { defaultTheme } from "@/registry/themes/default";

export default function PodcastBlogDemo() {
  return (
    <PodcastBlog
      width="split"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
