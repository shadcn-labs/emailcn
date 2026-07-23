import { FeaturedBrandsLogoGrid } from "@/registry/bases/react-email/ui/marketing/logos/featured-brands-logo-grid";

const variants = {
  "boxed-center": { alignment: "center", tone: "boxed" },
  "boxed-left": { alignment: "left", tone: "boxed" },
  "boxed-right": { alignment: "right", tone: "boxed" },
  "outlined-center": { alignment: "center", tone: "outlined" },
  "outlined-left": { alignment: "left", tone: "outlined" },
  "outlined-right": { alignment: "right", tone: "outlined" },
} as const;

type FeaturedBrandsExampleVariant = keyof typeof variants;

export default function FeaturedBrandsLogoGridDemo({
  variant,
}: {
  variant?: FeaturedBrandsExampleVariant;
}) {
  const selected = variants[variant ?? "outlined-left"];
  return (
    <FeaturedBrandsLogoGrid
      {...FeaturedBrandsLogoGrid.PreviewProps}
      alignment={selected.alignment}
      tone={selected.tone}
    />
  );
}
