import { SocialsWithTileLabels } from "@/registry/bases/jsx-email/ui/marketing/social/socials-with-tile-labels";

export default function SocialsWithStackedTileLabelsDemo() {
  return (
    <SocialsWithTileLabels
      {...SocialsWithTileLabels.PreviewProps}
      variant="stacked"
    />
  );
}
