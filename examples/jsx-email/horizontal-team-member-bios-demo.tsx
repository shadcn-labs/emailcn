import { HorizontalTeamMemberBios } from "@/registry/bases/jsx-email/ui/marketing/team/horizontal-team-member-bios";
import type { HorizontalTeamMemberBiosVariant } from "@/registry/bases/jsx-email/ui/marketing/team/horizontal-team-member-bios";

export default function HorizontalTeamMemberBiosDemo({
  variant,
}: {
  variant?: HorizontalTeamMemberBiosVariant;
}) {
  return (
    <HorizontalTeamMemberBios
      {...HorizontalTeamMemberBios.PreviewProps}
      variant={variant ?? HorizontalTeamMemberBios.PreviewProps.variant}
    />
  );
}
