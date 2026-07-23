import { ThreeColumnsTeamGrid } from "@/registry/bases/mjml-react/ui/marketing/team/3-columns-team-grid";
import type { ThreeColumnsTeamGridVariant } from "@/registry/bases/mjml-react/ui/marketing/team/3-columns-team-grid";

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
