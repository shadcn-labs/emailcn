import { X } from "lucide-react";

import { GeneratePanel } from "@/components/studio/generate-panel";
import { IconButton } from "@/components/studio/icon-button";
import { LayersPanel } from "@/components/studio/layers-panel";
import { LibraryPanel } from "@/components/studio/library-panel";
import { cn } from "@/lib/utils";
import type {
  CanvasBlock,
  CatalogCategoryFilter,
  PanelTab,
  StudioCatalogItem,
} from "@/types/studio";

interface LeftPanelProps {
  blocks: CanvasBlock[];
  category: CatalogCategoryFilter;
  generatePrompt: string;
  isOpen: boolean;
  items: StudioCatalogItem[];
  name: string;
  onAdd: (item: StudioCatalogItem) => void;
  onCategoryChange: (category: CatalogCategoryFilter) => void;
  onClose: () => void;
  onGenerate: () => void;
  onPromptChange: (prompt: string) => void;
  onQueryChange: (query: string) => void;
  onSelect: (id: string) => void;
  onTabChange: (tab: PanelTab) => void;
  onUpdate: (id: string, patch: Partial<CanvasBlock>) => void;
  query: string;
  selectedId: string | null;
  tab: PanelTab;
}

const PANEL_TABS: { label: string; value: PanelTab }[] = [
  { label: "Layers", value: "layers" },
  { label: "Library", value: "library" },
  { label: "Generate", value: "generate" },
];

export const LeftPanel = ({
  blocks,
  category,
  generatePrompt,
  isOpen,
  items,
  name,
  onAdd,
  onCategoryChange,
  onClose,
  onGenerate,
  onPromptChange,
  onQueryChange,
  onSelect,
  onTabChange,
  onUpdate,
  query,
  selectedId,
  tab,
}: LeftPanelProps) => (
  <aside
    className={cn(
      "z-30 flex w-[292px] shrink-0 flex-col border-r border-neutral-200 bg-white max-md:absolute max-md:inset-y-0 max-md:left-0 max-md:shadow-2xl",
      !isOpen && "hidden"
    )}
  >
    <div className="p-5 pb-3">
      <div className="grid grid-cols-3 rounded-xl bg-neutral-100 p-1">
        {PANEL_TABS.map(({ label, value }) => (
          <button
            className={cn(
              "h-9 rounded-lg text-[12px] font-medium text-neutral-500 transition-colors",
              tab === value &&
                "bg-white text-neutral-950 shadow-[0_1px_4px_rgba(0,0,0,.08)]"
            )}
            key={value}
            onClick={() => onTabChange(value)}
            type="button"
          >
            {label}
          </button>
        ))}
      </div>
    </div>

    <div className="absolute right-2 top-2 md:hidden">
      <IconButton label="Close panel" onClick={onClose}>
        <X className="size-4" />
      </IconButton>
    </div>

    {tab === "layers" ? (
      <LayersPanel
        blocks={blocks}
        name={name}
        onSelect={onSelect}
        onUpdate={onUpdate}
        selectedId={selectedId}
      />
    ) : null}

    {tab === "library" ? (
      <LibraryPanel
        category={category}
        items={items}
        onAdd={onAdd}
        onCategoryChange={onCategoryChange}
        onQueryChange={onQueryChange}
        query={query}
      />
    ) : null}

    {tab === "generate" ? (
      <GeneratePanel
        onGenerate={onGenerate}
        onPromptChange={onPromptChange}
        prompt={generatePrompt}
      />
    ) : null}
  </aside>
);
