import { FeaturedBrandsLogoGrid } from "@/registry/bases/mjml-react/ui/marketing/logos/featured-brands-logo-grid";

const variants = {
  "boxed-center": { alignment: "center", tone: "boxed" },
  "boxed-left": { alignment: "left", tone: "boxed" },
  "boxed-right": { alignment: "right", tone: "boxed" },
  "outlined-center": { alignment: "center", tone: "outlined" },
  "outlined-left": { alignment: "left", tone: "outlined" },
  "outlined-right": { alignment: "right", tone: "outlined" },
} as const;

export default function FeaturedBrandsLogoGridVariantBoxedRightExampleDemo() {
  const selected = variants["boxed-right"];
  return (
    <FeaturedBrandsLogoGrid
      {...FeaturedBrandsLogoGrid.PreviewProps}
      alignment={selected.alignment}
      tone={selected.tone}
    />
  );
}
