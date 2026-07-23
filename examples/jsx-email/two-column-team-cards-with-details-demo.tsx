import { TwoColumnTeamCardsWithDetails } from "@/registry/bases/jsx-email/ui/marketing/team/2-column-team-cards-with-details";
import type { TwoColumnTeamCardsWithDetailsVariant } from "@/registry/bases/jsx-email/ui/marketing/team/2-column-team-cards-with-details";

export default function TwoColumnTeamCardsWithDetailsDemo({
  variant,
}: {
  variant?: TwoColumnTeamCardsWithDetailsVariant;
}) {
  return (
    <TwoColumnTeamCardsWithDetails
      {...TwoColumnTeamCardsWithDetails.PreviewProps}
      variant={variant ?? TwoColumnTeamCardsWithDetails.PreviewProps.variant}
    />
  );
}
