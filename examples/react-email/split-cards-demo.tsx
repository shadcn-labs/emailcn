import { SplitCards } from "@/registry/bases/react-email/ui/marketing/timelines/split-cards";
import type { SplitCardsVariant } from "@/registry/bases/react-email/ui/marketing/timelines/split-cards";

export default function SplitCardsDemo({
  variant,
}: {
  variant?: SplitCardsVariant;
}) {
  return (
    <SplitCards
      {...SplitCards.PreviewProps}
      variant={variant ?? SplitCards.PreviewProps.variant}
    />
  );
}
