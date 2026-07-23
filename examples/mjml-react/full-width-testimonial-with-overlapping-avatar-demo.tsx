import { FullWidthTestimonial } from "@/registry/bases/mjml-react/ui/marketing/testimonials/full-width-testimonial";

export default function FullWidthTestimonialWithOverlappingAvatarDemo() {
  return (
    <FullWidthTestimonial
      {...FullWidthTestimonial.PreviewProps}
      variant="overlapping-avatar"
    />
  );
}
