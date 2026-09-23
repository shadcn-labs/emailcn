"use client";

import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { toast } from "sonner";

import {
  STUDIO_ARTBOARD_WIDTH,
  STUDIO_MOBILE_ARTBOARD_WIDTH,
  STUDIO_STORAGE_KEY,
  STUDIO_STORAGE_VERSION,
} from "@/constants/studio";
import {
  createStarterBlocks,
  getNextSelectedId,
  insertBlock,
  removeBlockById,
  updateBlockById,
} from "@/lib/studio/blocks";
import {
  createDesignManifest,
  createInstallCommands,
  createStudioFilename,
} from "@/lib/studio/export";
import { createGeneratedBlocks } from "@/lib/studio/generate";
import {
  createHistoryState,
  historyReducer,
  parseSavedStudio,
} from "@/lib/studio/history";
import type {
  CanvasBlock,
  CatalogCategoryFilter,
  PanelTab,
  SavedStudio,
  StudioCatalogItem,
  StudioFramework,
  StudioViewport,
} from "@/types/studio";

const isEditableTarget = (target: EventTarget | null) => {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  return (
    target.isContentEditable ||
    target.tagName === "INPUT" ||
    target.tagName === "SELECT" ||
    target.tagName === "TEXTAREA"
  );
};

export const useStudioController = (catalog: StudioCatalogItem[]) => {
  const starterBlocks = useMemo(() => createStarterBlocks(catalog), [catalog]);
  const [history, dispatch] = useReducer(
    historyReducer,
    createHistoryState(starterBlocks)
  );
  const [category, setCategory] = useState<CatalogCategoryFilter>("All");
  const [framework, setFramework] = useState<StudioFramework>("react-email");
  const [generatePrompt, setGeneratePrompt] = useState("");
  const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(true);
  const [name, setName] = useState("Field notes");
  const [panelTab, setPanelTab] = useState<PanelTab>("layers");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(
    starterBlocks[1]?.id ?? starterBlocks[0]?.id ?? null
  );
  const [viewport, setViewport] = useState<StudioViewport>("desktop");
  const [zoom, setZoom] = useState(54);

  const blocks = history.present;
  const selectedBlock = blocks.find((block) => block.id === selectedId) ?? null;
  const selectedIndex = blocks.findIndex((block) => block.id === selectedId);
  const canvasWidth =
    viewport === "desktop"
      ? STUDIO_ARTBOARD_WIDTH
      : STUDIO_MOBILE_ARTBOARD_WIDTH;

  const filteredCatalog = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return catalog.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        (!normalizedQuery ||
          `${item.title} ${item.family} ${item.description}`
            .toLowerCase()
            .includes(normalizedQuery))
    );
  }, [catalog, category, query]);

  const designManifest = useMemo(
    () => createDesignManifest(blocks, framework, name),
    [blocks, framework, name]
  );

  const installCommands = useMemo(
    () => createInstallCommands(blocks, framework),
    [blocks, framework]
  );

  const artboardHeight = useMemo(
    () =>
      blocks
        .filter((block) => !block.hidden)
        .reduce(
          (total, block) => total + block.previewHeight + block.padding * 2,
          0
        ),
    [blocks]
  );

  const commitBlocks = useCallback((nextBlocks: CanvasBlock[]) => {
    dispatch({ blocks: nextBlocks, type: "commit" });
  }, []);

  const updateBlock = useCallback(
    (id: string, patch: Partial<CanvasBlock>) => {
      commitBlocks(updateBlockById(blocks, id, patch));
    },
    [blocks, commitBlocks]
  );

  const addItem = useCallback(
    (item: StudioCatalogItem, index = blocks.length) => {
      const inserted = insertBlock(blocks, item, index);
      commitBlocks(inserted.blocks);
      setSelectedId(inserted.block.id);
      setPanelTab("layers");
    },
    [blocks, commitBlocks]
  );

  const removeBlock = useCallback(
    (id: string) => {
      const index = blocks.findIndex((block) => block.id === id);
      const nextBlocks = removeBlockById(blocks, id);
      commitBlocks(nextBlocks);
      setSelectedId(getNextSelectedId(nextBlocks, index));
    },
    [blocks, commitBlocks]
  );

  const resetStudio = useCallback(() => {
    const nextBlocks = starterBlocks.map((block) => ({ ...block }));
    commitBlocks(nextBlocks);
    setSelectedId(nextBlocks[1]?.id ?? nextBlocks[0]?.id ?? null);
    setName("Field notes");
    toast.success("Starter restored");
  }, [commitBlocks, starterBlocks]);

  const generateComposition = useCallback(() => {
    const generated = createGeneratedBlocks(generatePrompt, catalog);
    if (generated.length === 0) {
      toast.error("No matching components found");
      return;
    }
    commitBlocks(generated);
    setSelectedId(generated[0]?.id ?? null);
    setPanelTab("layers");
    toast.success("A new composition is ready");
  }, [catalog, commitBlocks, generatePrompt]);

  const exportManifest = useCallback(() => {
    const blob = new Blob([designManifest], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = createStudioFilename(name);
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
    toast.success("Studio file exported");
  }, [designManifest, name]);

  const copyText = useCallback(async (value: string, message: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast.success(message);
    } catch {
      toast.error("Clipboard access is unavailable");
    }
  }, []);

  const openLibrary = useCallback((nextQuery?: string) => {
    setIsLeftPanelOpen(true);
    setPanelTab("library");
    if (nextQuery !== undefined) {
      setCategory("All");
      setQuery(nextQuery);
    }
  }, []);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STUDIO_STORAGE_KEY);
      if (raw) {
        const restored = parseSavedStudio(raw, catalog);
        if (restored?.blocks) {
          dispatch({ blocks: restored.blocks, type: "load" });
          setSelectedId(restored.blocks[0]?.id ?? null);
        }
        if (restored?.framework) {
          setFramework(restored.framework);
        }
        if (restored?.name) {
          setName(restored.name);
        }
      }
    } catch {
      localStorage.removeItem(STUDIO_STORAGE_KEY);
    } finally {
      setIsReady(true);
    }
  }, [catalog]);

  useEffect(() => {
    if (!isReady) {
      return;
    }
    const saved: SavedStudio = {
      blocks,
      framework,
      name,
      version: STUDIO_STORAGE_VERSION,
    };
    localStorage.setItem(STUDIO_STORAGE_KEY, JSON.stringify(saved));
  }, [blocks, framework, isReady, name]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const commandKey = event.metaKey || event.ctrlKey;
      if (commandKey && event.key.toLowerCase() === "z") {
        event.preventDefault();
        dispatch({ type: event.shiftKey ? "redo" : "undo" });
        return;
      }
      if (commandKey && event.key.toLowerCase() === "y") {
        event.preventDefault();
        dispatch({ type: "redo" });
        return;
      }
      if (
        selectedId &&
        (event.key === "Backspace" || event.key === "Delete") &&
        !isEditableTarget(event.target)
      ) {
        event.preventDefault();
        removeBlock(selectedId);
      }
      if (event.key === "Escape" && isPreviewOpen) {
        setIsPreviewOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPreviewOpen, removeBlock, selectedId]);

  return {
    addItem,
    artboardHeight,
    blocks,
    canvasWidth,
    category,
    commitBlocks,
    copyText,
    designManifest,
    dispatch,
    exportManifest,
    filteredCatalog,
    framework,
    generateComposition,
    generatePrompt,
    history,
    installCommands,
    isLeftPanelOpen,
    isPreviewOpen,
    isRightPanelOpen,
    name,
    openLibrary,
    panelTab,
    query,
    removeBlock,
    resetStudio,
    selectedBlock,
    selectedId,
    selectedIndex,
    setCategory,
    setFramework,
    setGeneratePrompt,
    setIsLeftPanelOpen,
    setIsPreviewOpen,
    setIsRightPanelOpen,
    setName,
    setPanelTab,
    setQuery,
    setSelectedId,
    setViewport,
    setZoom,
    updateBlock,
    viewport,
    zoom,
  };
};

export type StudioController = ReturnType<typeof useStudioController>;
