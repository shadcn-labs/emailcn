"use client";

import { DndContext } from "@dnd-kit/core";
import { X } from "lucide-react";

import { Canvas } from "@/components/studio/canvas";
import { DragOverlay } from "@/components/studio/drag-overlay";
import { Header } from "@/components/studio/header";
import { IconButton } from "@/components/studio/icon-button";
import { Inspector } from "@/components/studio/inspector";
import { LeftPanel } from "@/components/studio/left-panel";
import { Panel } from "@/components/studio/panel";
import { Preview } from "@/components/studio/preview";
import { Toolbar } from "@/components/studio/toolbar";
import { STUDIO_DND_CONTEXT_ID } from "@/constants/studio";
import { useStudioController } from "@/hooks/use-studio-controller";
import { useStudioDnd } from "@/hooks/use-studio-dnd";
import { cn } from "@/lib/utils";
import type { StudioCatalogItem } from "@/types/studio";

export const EmailStudio = ({ catalog }: { catalog: StudioCatalogItem[] }) => {
  const studio = useStudioController(catalog);
  const dnd = useStudioDnd({
    addItem: studio.addItem,
    blocks: studio.blocks,
    commitBlocks: studio.commitBlocks,
  });

  return (
    <DndContext
      collisionDetection={dnd.collisionDetection}
      id={STUDIO_DND_CONTEXT_ID}
      onDragCancel={dnd.handleDragCancel}
      onDragEnd={dnd.handleDragEnd}
      onDragStart={dnd.handleDragStart}
      sensors={dnd.sensors}
    >
      <div className="relative h-full min-w-0 overflow-hidden bg-[#f4f4f3] font-sans text-neutral-950">
        <Header
          framework={studio.framework}
          name={studio.name}
          onCopyInstallCommands={() =>
            studio.copyText(studio.installCommands, "Install commands copied")
          }
          onCopyManifest={() =>
            studio.copyText(studio.designManifest, "Manifest copied")
          }
          onExport={studio.exportManifest}
          onFrameworkChange={studio.setFramework}
          onNameChange={studio.setName}
          onOpenInspector={() => studio.setIsRightPanelOpen(true)}
          onOpenLibrary={() => studio.openLibrary()}
          onOpenPreview={() => studio.setIsPreviewOpen(true)}
          onReset={studio.resetStudio}
        />

        <LeftPanel
          blocks={studio.blocks}
          category={studio.category}
          generatePrompt={studio.generatePrompt}
          isOpen={studio.isLeftPanelOpen}
          items={studio.filteredCatalog}
          name={studio.name}
          onAdd={studio.addItem}
          onCategoryChange={studio.setCategory}
          onClose={() => studio.setIsLeftPanelOpen(false)}
          onGenerate={studio.generateComposition}
          onPromptChange={studio.setGeneratePrompt}
          onQueryChange={studio.setQuery}
          onSelect={studio.setSelectedId}
          onTabChange={studio.setPanelTab}
          onUpdate={studio.updateBlock}
          query={studio.query}
          selectedId={studio.selectedId}
          tab={studio.panelTab}
        />

        <section className="absolute inset-0 min-w-0 overflow-hidden">
          <div className="h-full overflow-auto overscroll-contain bg-[#f4f4f3]">
            <div className="flex min-h-full min-w-max items-start justify-center px-16 pb-36 pt-20">
              <div
                className="relative"
                style={{
                  height:
                    Math.max(680, studio.artboardHeight) * (studio.zoom / 100),
                  width: studio.canvasWidth * (studio.zoom / 100),
                }}
              >
                <div
                  className="absolute left-1/2 top-0 origin-top"
                  style={{
                    transform: `translateX(-50%) scale(${studio.zoom / 100})`,
                    width: studio.canvasWidth,
                  }}
                >
                  <div
                    className={cn(
                      "transition-[width] duration-300 ease-[cubic-bezier(.22,1,.36,1)]",
                      studio.viewport === "mobile" &&
                        "mx-auto overflow-hidden bg-white"
                    )}
                    style={{ width: studio.canvasWidth }}
                  >
                    <Canvas
                      blocks={studio.blocks}
                      canvasWidth={studio.canvasWidth}
                      onSelect={studio.setSelectedId}
                      selectedId={studio.selectedId}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Toolbar
            canRedo={studio.history.future.length > 0}
            canUndo={studio.history.past.length > 0}
            isLeftPanelOpen={studio.isLeftPanelOpen}
            isRightPanelOpen={studio.isRightPanelOpen}
            onOpenLibrary={studio.openLibrary}
            onRedo={() => studio.dispatch({ type: "redo" })}
            onToggleLeftPanel={() => studio.setIsLeftPanelOpen((open) => !open)}
            onToggleRightPanel={() =>
              studio.setIsRightPanelOpen((open) => !open)
            }
            onUndo={() => studio.dispatch({ type: "undo" })}
            onViewportChange={studio.setViewport}
            onZoomChange={studio.setZoom}
            viewport={studio.viewport}
            zoom={studio.zoom}
          />
        </section>

        {studio.isRightPanelOpen ? (
          <aside className="pointer-events-none absolute right-2.5 top-2.5 z-50">
            <Panel
              actions={
                <IconButton
                  className="size-7 rounded-md"
                  label="Close inspector"
                  onClick={() => studio.setIsRightPanelOpen(false)}
                >
                  <X className="size-3.5" />
                </IconButton>
              }
              title="Controls"
            >
              <div className="flex h-10 shrink-0 items-center border-b border-black/[.06] px-3">
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-neutral-800">
                    {studio.selectedBlock?.label ?? "No layer selected"}
                  </p>
                  <p className="mt-0.5 truncate text-[9px] text-neutral-400">
                    {studio.selectedBlock?.family ??
                      "Select a layer on the canvas"}
                  </p>
                </div>
              </div>
              <Inspector
                block={studio.selectedBlock}
                index={studio.selectedIndex}
                onDelete={() =>
                  studio.selectedBlock &&
                  studio.removeBlock(studio.selectedBlock.id)
                }
                onUpdate={(patch) =>
                  studio.selectedBlock &&
                  studio.updateBlock(studio.selectedBlock.id, patch)
                }
              />
            </Panel>
          </aside>
        ) : null}

        {studio.isPreviewOpen ? (
          <Preview
            blocks={studio.blocks}
            name={studio.name}
            onClose={() => studio.setIsPreviewOpen(false)}
          />
        ) : null}
      </div>

      <DragOverlay activeDrag={dnd.activeDrag} />
    </DndContext>
  );
};
