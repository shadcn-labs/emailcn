import { PaymentTimeline } from "@/registry/bases/jsx-email/ui/marketing/timelines/payment-timeline";
import type { PaymentTimelineVariant } from "@/registry/bases/jsx-email/ui/marketing/timelines/payment-timeline";

export default function PaymentTimelineDemo({
  variant,
}: {
  variant?: PaymentTimelineVariant;
}) {
  return (
    <PaymentTimeline
      {...PaymentTimeline.PreviewProps}
      variant={variant ?? PaymentTimeline.PreviewProps.variant}
    />
  );
}
