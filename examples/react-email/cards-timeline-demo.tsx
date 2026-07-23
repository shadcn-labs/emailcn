import { CardsTimeline } from "@/registry/bases/react-email/ui/marketing/timelines/cards-timeline";
import type { CardsTimelineVariant } from "@/registry/bases/react-email/ui/marketing/timelines/cards-timeline";

export default function CardsTimelineDemo({
  variant,
}: {
  variant?: CardsTimelineVariant;
}) {
  return (
    <CardsTimeline
      {...CardsTimeline.PreviewProps}
      variant={variant ?? CardsTimeline.PreviewProps.variant}
    />
  );
}
