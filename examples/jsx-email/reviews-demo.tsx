import { Reviews } from "@/registry/bases/jsx-email/components/ecommerce/reviews/reviews";
import { defaultTheme } from "@/registry/themes/default";

export default function ReviewsDemo() {
  return (
    <Reviews
      layout="full-width"
      identity="text"
      divider="between"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
