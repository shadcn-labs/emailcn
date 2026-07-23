import { CTAWithTeamAvatars } from "@/registry/bases/mjml-react/ui/marketing/cta/cta-with-team-avatars";
import type { CTAWithTeamAvatarsVariant } from "@/registry/bases/mjml-react/ui/marketing/cta/cta-with-team-avatars";

export default function CTAWithTeamAvatarsDemo({
  variant,
}: {
  variant?: CTAWithTeamAvatarsVariant;
}) {
  return (
    <CTAWithTeamAvatars
      {...CTAWithTeamAvatars.PreviewProps}
      variant={variant ?? CTAWithTeamAvatars.PreviewProps.variant}
    />
  );
}
