import { useDraggable } from "@dnd-kit/core";
import { Plus, Search } from "lucide-react";

import { SectionThumbnail } from "@/components/studio/section-thumbnail";
import { STUDIO_CATEGORY_FILTERS } from "@/constants/studio";
import { cn } from "@/lib/utils";
import type {
  ActiveDrag,
  CatalogCategoryFilter,
  StudioCatalogItem,
} from "@/types/studio";

const LibraryItem = ({
  item,
  onAdd,
}: {
  item: StudioCatalogItem;
  onAdd: (item: StudioCatalogItem) => void;
}) => {
  const { attributes, isDragging, listeners, setNodeRef } = useDraggable({
    data: { item, type: "library" satisfies ActiveDrag["type"] },
    id: `library:${item.slug}`,
  });

  return (
    <button
      className={cn(
        "group flex w-full cursor-grab items-center gap-2.5 rounded-lg border border-transparent p-1.5 text-left transition-colors hover:border-black/[.06] hover:bg-black/[.035] active:cursor-grabbing",
        isDragging && "opacity-35"
      )}
      data-library-slug={item.slug}
      onClick={() => onAdd(item)}
      ref={setNodeRef}
      type="button"
      {...attributes}
      {...listeners}
    >
      <SectionThumbnail item={item} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[12px] font-medium text-neutral-900">
          {item.title}
        </span>
        <span className="mt-0.5 block truncate text-[10px] text-neutral-500">
          {item.family}
        </span>
      </span>
      <Plus className="size-4 shrink-0 text-neutral-400 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

interface LibraryPanelProps {
  category: CatalogCategoryFilter;
  items: StudioCatalogItem[];
  onAdd: (item: StudioCatalogItem) => void;
  onCategoryChange: (category: CatalogCategoryFilter) => void;
  onQueryChange: (query: string) => void;
  query: string;
}

export const LibraryPanel = ({
  category,
  items,
  onAdd,
  onCategoryChange,
  onQueryChange,
  query,
}: LibraryPanelProps) => (
  <>
    <div className="shrink-0 border-t border-black/[.06] px-2.5 pb-2 pt-2.5">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400" />
        <input
          className="h-8 w-full rounded-md bg-black/[.04] pl-8 pr-2.5 text-[11px] outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-sky-500/30"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search 72 components"
          type="search"
          value={query}
        />
      </div>
      <div className="no-scrollbar mt-2 flex gap-1 overflow-x-auto">
        {STUDIO_CATEGORY_FILTERS.map((value) => (
          <button
            className={cn(
              "h-6 shrink-0 rounded-md px-2 text-[10px] font-medium text-neutral-500 hover:bg-black/[.05]",
              category === value &&
                "bg-sky-500/10 text-sky-600 hover:bg-sky-500/10"
            )}
            key={value}
            onClick={() => onCategoryChange(value)}
            type="button"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
    <div className="min-h-0 flex-1 overflow-y-auto border-t border-black/[.06] p-1">
      {items.map((item) => (
        <LibraryItem item={item} key={item.slug} onAdd={onAdd} />
      ))}
    </div>
  </>
);
