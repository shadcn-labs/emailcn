import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import Testimonial from "@/registry/bases/mjml-react/ui/testimonial";
import { theme as defaultTheme } from "@/registry/themes/default";

export default function TestimonialDemo() {
  return (
    <MjmlEmailDocument preview="testimonial" theme={defaultTheme}>
      <Testimonial {...Testimonial.PreviewProps} />
    </MjmlEmailDocument>
  );
}
