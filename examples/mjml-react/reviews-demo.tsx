import { Reviews } from "@/registry/bases/mjml-react/components/ecommerce/reviews/reviews";
import { defaultTheme } from "@/registry/themes/default";

export default function ReviewsDemo() {
  return (
    <Reviews
      layout="full-width"
      identity="text"
      divider="none"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
