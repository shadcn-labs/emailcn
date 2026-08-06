import type { StudioCatalogItem } from "@/types/studio";

export const SectionThumbnail = ({ item }: { item: StudioCatalogItem }) => {
  const isHeader = item.family === "Headers";
  const isHero = item.family === "Hero";
  const isFooter = item.family === "Footers";
  const isCommerce = item.category === "Ecommerce";
  const isElement = item.category === "Elements";

  return (
    <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-md border border-black/[.08] bg-white p-1.5 shadow-sm">
      {isHeader ? (
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="size-2 rounded-sm bg-neutral-950" />
            <span className="h-1 w-7 rounded bg-neutral-200" />
          </div>
          <span className="h-px w-full bg-neutral-100" />
        </div>
      ) : null}
      {isHero ? (
        <div className="flex h-full flex-col items-center justify-center rounded bg-neutral-950">
          <span className="h-1.5 w-9 rounded bg-white" />
          <span className="mt-1 h-1 w-7 rounded bg-white/35" />
          <span className="mt-1.5 h-2 w-4 rounded-sm bg-white" />
        </div>
      ) : null}
      {isFooter ? (
        <div className="flex h-full flex-col justify-end gap-1">
          <div className="flex gap-1">
            <span className="size-2 rounded-full bg-neutral-900" />
            <span className="size-2 rounded-full bg-neutral-200" />
          </div>
          <span className="h-1 w-full rounded bg-neutral-100" />
          <span className="h-1 w-2/3 rounded bg-neutral-100" />
        </div>
      ) : null}
      {isCommerce && !isHero ? (
        <div className="grid h-full grid-cols-2 gap-1.5">
          <span className="rounded bg-neutral-100" />
          <div className="flex flex-col justify-center gap-1">
            <span className="h-1 rounded bg-neutral-900" />
            <span className="h-1 w-4/5 rounded bg-neutral-200" />
            <span className="h-2 w-5 rounded-sm bg-neutral-900" />
          </div>
        </div>
      ) : null}
      {isElement ? (
        <div className="flex h-full items-center justify-center">
          <span className="rounded bg-neutral-950 px-2 py-1 text-[5px] font-semibold text-white">
            {item.family === "Spacing" ? "—" : "Button"}
          </span>
        </div>
      ) : null}
      {!isHeader && !isHero && !isFooter && !isCommerce && !isElement ? (
        <div className="flex h-full flex-col justify-center gap-1.5">
          <span className="h-1.5 w-4/5 rounded bg-neutral-950" />
          <span className="h-1 w-full rounded bg-neutral-200" />
          <span className="h-1 w-3/4 rounded bg-neutral-100" />
          <span className="h-2 w-6 rounded-sm bg-neutral-950" />
        </div>
      ) : null}
    </div>
  );
};
