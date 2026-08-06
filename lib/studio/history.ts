import { STUDIO_FRAMEWORKS, STUDIO_STORAGE_VERSION } from "@/constants/studio";
import { createBlock } from "@/lib/studio/blocks";
import type {
  CanvasAlignment,
  CanvasBlock,
  HistoryAction,
  HistoryState,
  RestoredStudio,
  StudioCatalogItem,
  StudioFramework,
} from "@/types/studio";

const HISTORY_LIMIT = 50;

export const createHistoryState = (blocks: CanvasBlock[]): HistoryState => ({
  future: [],
  past: [],
  present: blocks,
});

export const historyReducer = (
  state: HistoryState,
  action: HistoryAction
): HistoryState => {
  if (action.type === "load") {
    return createHistoryState(action.blocks);
  }
  if (action.type === "commit") {
    return {
      future: [],
      past: [...state.past.slice(-(HISTORY_LIMIT - 1)), state.present],
      present: action.blocks,
    };
  }
  if (action.type === "undo") {
    const previous = state.past.at(-1);
    if (!previous) {
      return state;
    }
    return {
      future: [state.present, ...state.future],
      past: state.past.slice(0, -1),
      present: previous,
    };
  }
  const [next] = state.future;
  if (!next) {
    return state;
  }
  return {
    future: state.future.slice(1),
    past: [...state.past, state.present],
    present: next,
  };
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const getString = (value: unknown, fallback: string): string =>
  typeof value === "string" ? value : fallback;

const getNumber = (value: unknown, fallback: number): number =>
  typeof value === "number" && Number.isFinite(value) ? value : fallback;

const getBoolean = (value: unknown, fallback: boolean): boolean =>
  typeof value === "boolean" ? value : fallback;

const getAlignment = (
  value: unknown,
  fallback: CanvasAlignment
): CanvasAlignment =>
  value === "left" || value === "center" || value === "right"
    ? value
    : fallback;

const restoreBlock = (
  value: unknown,
  catalogBySlug: Map<string, StudioCatalogItem>
): CanvasBlock | null => {
  if (
    !isRecord(value) ||
    typeof value.id !== "string" ||
    typeof value.slug !== "string"
  ) {
    return null;
  }
  const item = catalogBySlug.get(value.slug);
  if (!item) {
    return null;
  }
  const fallback = createBlock(item, value.id);
  return {
    ...fallback,
    alignment: getAlignment(value.alignment, fallback.alignment),
    background: getString(value.background, fallback.background),
    borderColor: getString(value.borderColor, fallback.borderColor),
    borderWidth: getNumber(value.borderWidth, fallback.borderWidth),
    flipX: getBoolean(value.flipX, fallback.flipX),
    flipY: getBoolean(value.flipY, fallback.flipY),
    hidden: getBoolean(value.hidden, fallback.hidden),
    label: getString(value.label, fallback.label),
    opacity: getNumber(value.opacity, fallback.opacity),
    padding: getNumber(value.padding, fallback.padding),
    radius: getNumber(value.radius, fallback.radius),
    rotation: getNumber(value.rotation, fallback.rotation),
    shadow: getBoolean(value.shadow, fallback.shadow),
  };
};

const isFramework = (value: unknown): value is StudioFramework =>
  STUDIO_FRAMEWORKS.some(({ id }) => id === value);

export const parseSavedStudio = (
  raw: string,
  catalog: StudioCatalogItem[]
): RestoredStudio | null => {
  const value: unknown = JSON.parse(raw);
  if (!isRecord(value) || value.version !== STUDIO_STORAGE_VERSION) {
    return null;
  }
  const catalogBySlug = new Map(catalog.map((item) => [item.slug, item]));
  return {
    blocks: Array.isArray(value.blocks)
      ? value.blocks.flatMap((block) => {
          const restored = restoreBlock(block, catalogBySlug);
          return restored ? [restored] : [];
        })
      : null,
    framework: isFramework(value.framework) ? value.framework : null,
    name:
      typeof value.name === "string" && value.name.trim() ? value.name : null,
  };
};
