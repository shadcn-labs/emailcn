export type StudioCategory = "Marketing" | "Ecommerce" | "Elements";

export interface StudioCatalogItem {
  category: StudioCategory;
  description: string;
  family: string;
  previewHeight: number;
  slug: string;
  title: string;
}

export type StudioFramework = "react-email" | "mjml-react" | "jsx-email";
export type CanvasAlignment = "left" | "center" | "right";
export type PanelTab = "generate" | "layers" | "library";
export type StudioViewport = "desktop" | "mobile";
export type CatalogCategoryFilter = "All" | StudioCategory;

export interface CanvasBlock extends StudioCatalogItem {
  alignment: CanvasAlignment;
  background: string;
  borderColor: string;
  borderWidth: number;
  flipX: boolean;
  flipY: boolean;
  hidden: boolean;
  id: string;
  label: string;
  opacity: number;
  padding: number;
  radius: number;
  rotation: number;
  shadow: boolean;
}

export interface HistoryState {
  future: CanvasBlock[][];
  past: CanvasBlock[][];
  present: CanvasBlock[];
}

export type HistoryAction =
  | { blocks: CanvasBlock[]; type: "commit" | "load" }
  | { type: "redo" | "undo" };

export interface SavedStudio {
  blocks: CanvasBlock[];
  framework: StudioFramework;
  name: string;
  version: 2;
}

export interface RestoredStudio {
  blocks: CanvasBlock[] | null;
  framework: StudioFramework | null;
  name: string | null;
}

export interface ActiveDrag {
  block?: CanvasBlock;
  item?: StudioCatalogItem;
  type: "canvas" | "library";
}
