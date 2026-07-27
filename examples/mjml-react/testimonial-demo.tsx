import { Testimonial } from "@/registry/bases/mjml-react/components/marketing/testimonials/testimonial";
import { defaultTheme } from "@/registry/themes/default";

export default function TestimonialDemo() {
  return (
    <Testimonial
      layout="full-width"
      alignment="left"
      appearance="plain"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
