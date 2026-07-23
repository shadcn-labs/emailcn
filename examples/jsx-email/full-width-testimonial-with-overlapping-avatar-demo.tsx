import { FullWidthTestimonial } from "@/registry/bases/jsx-email/ui/marketing/testimonials/full-width-testimonial";

export default function FullWidthTestimonialWithOverlappingAvatarDemo() {
  return (
    <FullWidthTestimonial
      {...FullWidthTestimonial.PreviewProps}
      variant="overlapping-avatar"
    />
  );
}
