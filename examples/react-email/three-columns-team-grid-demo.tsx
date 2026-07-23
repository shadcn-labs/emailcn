import { ThreeColumnsTeamGrid } from "@/registry/bases/react-email/ui/marketing/team/3-columns-team-grid";
import type { ThreeColumnsTeamGridVariant } from "@/registry/bases/react-email/ui/marketing/team/3-columns-team-grid";

export default function ThreeColumnsTeamGridDemo({
  variant,
}: {
  variant?: ThreeColumnsTeamGridVariant;
}) {
  return (
    <ThreeColumnsTeamGrid
      {...ThreeColumnsTeamGrid.PreviewProps}
      variant={variant ?? ThreeColumnsTeamGrid.PreviewProps.variant}
    />
  );
}
