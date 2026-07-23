import { TwoColumnTeamCards } from "@/registry/bases/jsx-email/ui/marketing/team/2-column-team-cards";
import type { TwoColumnTeamCardsVariant } from "@/registry/bases/jsx-email/ui/marketing/team/2-column-team-cards";

export default function TwoColumnTeamCardsDemo({
  variant,
}: {
  variant?: TwoColumnTeamCardsVariant;
}) {
  return (
    <TwoColumnTeamCards
      {...TwoColumnTeamCards.PreviewProps}
      variant={variant ?? TwoColumnTeamCards.PreviewProps.variant}
    />
  );
}
