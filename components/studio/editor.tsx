"use client";

import { DndContext } from "@dnd-kit/core";
import { X } from "lucide-react";

import { Canvas } from "@/components/studio/canvas";
import { DragOverlay } from "@/components/studio/drag-overlay";
import { Header } from "@/components/studio/header";
import { IconButton } from "@/components/studio/icon-button";
import { Inspector } from "@/components/studio/inspector";
import { LeftPanel } from "@/components/studio/left-panel";
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
      <div className="flex h-full min-w-0 flex-col bg-white font-sans text-neutral-950">
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

        <div className="relative flex min-h-0 flex-1">
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

          <section className="relative min-w-0 flex-1 overflow-hidden bg-[#f5f5f5]">
            <div className="h-full overflow-auto">
              <div className="flex min-h-full min-w-max items-start justify-center px-24 pb-40 pt-24">
                <div
                  className="relative"
                  style={{
                    height:
                      Math.max(680, studio.artboardHeight) *
                      (studio.zoom / 100),
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
              onOpenInspector={() =>
                studio.setIsRightPanelOpen((open) => !open)
              }
              onOpenLibrary={studio.openLibrary}
              onRedo={() => studio.dispatch({ type: "redo" })}
              onUndo={() => studio.dispatch({ type: "undo" })}
              onViewportChange={studio.setViewport}
              onZoomChange={studio.setZoom}
              viewport={studio.viewport}
              zoom={studio.zoom}
            />
          </section>

          <aside
            className={cn(
              "z-30 flex w-[302px] shrink-0 flex-col border-l border-neutral-200 bg-white max-lg:absolute max-lg:inset-y-0 max-lg:right-0 max-lg:shadow-2xl",
              !studio.isRightPanelOpen && "hidden"
            )}
          >
            <div className="flex h-14 shrink-0 items-center border-b border-neutral-200 px-5">
              <div className="min-w-0">
                <p className="truncate text-[12px] font-semibold text-neutral-900">
                  {studio.selectedBlock?.label ?? "Inspector"}
                </p>
                <p className="mt-0.5 text-[9px] text-neutral-400">
                  {studio.selectedBlock?.family ?? "No layer selected"}
                </p>
              </div>
              <IconButton
                className="ml-auto"
                label="Close inspector"
                onClick={() => studio.setIsRightPanelOpen(false)}
              >
                <X className="size-4" />
              </IconButton>
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
          </aside>
        </div>

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
