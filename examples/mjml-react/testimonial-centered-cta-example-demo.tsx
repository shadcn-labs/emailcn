import { Testimonial } from "@/registry/bases/mjml-react/components/marketing/testimonials/testimonial";

export default function TestimonialCenteredCtaDemo() {
  return (
    <Testimonial layout="centered" action={{ href: "#", label: "Read more" }} />
  );
}
