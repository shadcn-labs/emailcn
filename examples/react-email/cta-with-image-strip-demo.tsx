import { CTAWithImageStrip } from "@/registry/bases/react-email/ui/marketing/cta/cta-with-image-strip";
import type { CTAWithImageStripVariant } from "@/registry/bases/react-email/ui/marketing/cta/cta-with-image-strip";

export default function CTAWithImageStripDemo({
  variant,
}: {
  variant?: CTAWithImageStripVariant;
}) {
  return (
    <CTAWithImageStrip
      {...CTAWithImageStrip.PreviewProps}
      variant={variant ?? CTAWithImageStrip.PreviewProps.variant}
    />
  );
}
