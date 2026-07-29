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
        "group flex w-full cursor-grab items-center gap-3 rounded-xl border border-transparent p-2 text-left transition-colors hover:border-neutral-200 hover:bg-neutral-50 active:cursor-grabbing",
        isDragging && "opacity-35"
      )}
      onClick={() => onAdd(item)}
      ref={setNodeRef}
      type="button"
      {...attributes}
      {...listeners}
    >
      <SectionThumbnail item={item} />
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[13px] font-medium text-neutral-900">
          {item.title}
        </span>
        <span className="mt-0.5 block truncate text-[11px] text-neutral-500">
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
    <div className="px-5 pb-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-neutral-400" />
        <input
          className="h-10 w-full rounded-xl bg-neutral-100 pl-9 pr-3 text-[12px] outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300"
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Search 72 components"
          type="search"
          value={query}
        />
      </div>
      <div className="no-scrollbar mt-3 flex gap-1 overflow-x-auto">
        {STUDIO_CATEGORY_FILTERS.map((value) => (
          <button
            className={cn(
              "h-7 shrink-0 rounded-lg px-2.5 text-[10px] font-medium text-neutral-500 hover:bg-neutral-100",
              category === value &&
                "bg-neutral-950 text-white hover:bg-neutral-950"
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
    <div className="min-h-0 flex-1 overflow-y-auto px-3 pb-5">
      {items.map((item) => (
        <LibraryItem item={item} key={item.slug} onAdd={onAdd} />
      ))}
    </div>
  </>
);
