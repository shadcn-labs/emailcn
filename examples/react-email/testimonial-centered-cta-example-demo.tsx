import { Testimonial } from "@/registry/bases/react-email/ui/marketing/testimonials/testimonial";

export default function TestimonialCenteredCtaDemo() {
  return (
    <Testimonial layout="centered" action={{ href: "#", label: "Read more" }} />
  );
}
