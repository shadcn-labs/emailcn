import { CollectionStats } from "@/registry/bases/mjml-react/components/marketing/stats/collection-stats";
import { defaultTheme } from "@/registry/themes/default";

export default function CollectionStatsDemo() {
  return (
    <CollectionStats
      appearance="accent"
      featured={{ label: "Customer retention", value: "92%" }}
      items={[
        { label: "Faster onboarding", value: "3.2×" },
        { label: "More conversions", value: "41%" },
        { label: "Saved each week", value: "18h" },
      ]}
      layout="bento"
      reverse
      theme={{ ...defaultTheme, containerWidth: "640px" }}
    />
  );
}
