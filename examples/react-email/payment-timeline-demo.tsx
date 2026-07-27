import { PaymentTimeline } from "@/registry/bases/react-email/components/marketing/timelines/payment-timeline";
import { defaultTheme } from "@/registry/themes/default";

export default function PaymentTimelineDemo() {
  return (
    <PaymentTimeline
      variant="3-steps"
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
