import type { Metadata } from "next";

import { EmailStudio } from "@/components/studio/editor";
import registry from "@/registry.json";
import type { StudioCatalogItem } from "@/types/studio";

export const metadata: Metadata = {
  description:
    "Build production-ready emails visually with every EmailCN component.",
  title: "Email Studio",
};

interface RegistryItem {
  categories?: string[];
  description?: string;
  files?: { path: string }[];
  name: string;
  title?: string;
  type?: string;
}

const CATEGORY_LABELS: Record<string, StudioCatalogItem["category"]> = {
  ecommerce: "Ecommerce",
  marketing: "Marketing",
  "ui-elements": "Elements",
};

const FAMILY_LABELS: Record<string, string> = {
  avatars: "Avatars",
  "bento-grids": "Bento grids",
  blog: "Blog",
  buttons: "Buttons",
  "category-previews": "Category previews",
  containers: "Containers",
  content: "Content",
  coupons: "Coupons",
  cta: "Call to action",
  "data-tables": "Data tables",
  faq: "FAQ",
  feature: "Features",
  footers: "Footers",
  grids: "Grids",
  headers: "Headers",
  hero: "Hero",
  images: "Images",
  logos: "Logos",
  "order-summary": "Order summary",
  pills: "Pills",
  pricing: "Pricing",
  "product-detail": "Product detail",
  "product-lists": "Product lists",
  "progress-bars": "Progress bars",
  reviews: "Reviews",
  "shopping-cart": "Shopping cart",
  social: "Social",
  spacing: "Spacing",
  stats: "Stats",
  team: "Team",
  testimonials: "Testimonials",
  timelines: "Timelines",
};

const getPreviewHeight = (family: string, category: string) => {
  if (family === "headers") {
    return 150;
  }
  if (family === "footers" || family === "social") {
    return 230;
  }
  if (family === "hero" || family === "product-detail") {
    return 360;
  }
  if (
    family === "bento-grids" ||
    family === "blog" ||
    family === "images" ||
    family === "product-lists"
  ) {
    return 320;
  }
  if (category === "ui-elements") {
    return family === "spacing" ? 96 : 160;
  }
  return 260;
};

const getCatalog = (): StudioCatalogItem[] => {
  const items = (registry.items as RegistryItem[])
    .filter(
      (item) =>
        item.type === "registry:component" &&
        item.name.startsWith("react-email/") &&
        item.categories?.includes("email-component")
    )
    .map((item) => {
      const sourcePath =
        item.files?.find((file) => file.path.includes("/components/"))?.path ??
        "";
      const componentPath = sourcePath.split("/components/")[1] ?? "";
      const [rawCategory = "marketing", rawFamily = "content"] =
        componentPath.split("/");
      const slug = item.name.split("/")[1] ?? item.name;

      return {
        category: CATEGORY_LABELS[rawCategory] ?? "Marketing",
        description: item.description ?? `${item.title} email component`,
        family: FAMILY_LABELS[rawFamily] ?? rawFamily,
        previewHeight: getPreviewHeight(rawFamily, rawCategory),
        slug,
        title: item.title ?? slug,
      } satisfies StudioCatalogItem;
    });

  const categoryOrder: Record<StudioCatalogItem["category"], number> = {
    Ecommerce: 1,
    Elements: 2,
    Marketing: 0,
  };

  return items.toSorted(
    (a, b) =>
      categoryOrder[a.category] - categoryOrder[b.category] ||
      a.family.localeCompare(b.family) ||
      a.title.localeCompare(b.title)
  );
};

export default function StudioPage() {
  return <EmailStudio catalog={getCatalog()} />;
}
