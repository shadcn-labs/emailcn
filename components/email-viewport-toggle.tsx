"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useMediaQuery } from "@/hooks/use-media-query";
import { useIsMobile } from "@/hooks/use-mobile";
import type { EmailViewport } from "@/hooks/use-viewport-toggle";
import { useViewportToggle } from "@/hooks/use-viewport-toggle";

export const EmailViewportToggle = ({ className }: { className?: string }) => {
  const [viewport, setViewport] = useViewportToggle();
  const isMobile = useIsMobile();
  const isTabletOrSmaller = useMediaQuery("(max-width: 1023px)");

  if (isMobile) {
    return null;
  }

  const available = isTabletOrSmaller
    ? ["desktop", "mobile"]
    : ["desktop", "tablet", "mobile"];

  return (
    <div className={className}>
      <ToggleGroup
        type="single"
        value={viewport}
        onValueChange={(next) => setViewport(next as EmailViewport)}
        className="h-8 gap-1 rounded-md border p-[3px] *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
      >
        {available.includes("desktop") && (
          <ToggleGroupItem title="Desktop" value="desktop">
            <Monitor className="size-3.5" />
          </ToggleGroupItem>
        )}
        {available.includes("tablet") && (
          <ToggleGroupItem title="Tablet" value="tablet">
            <Tablet className="size-3.5" />
          </ToggleGroupItem>
        )}
        {available.includes("mobile") && (
          <ToggleGroupItem title="Mobile" value="mobile">
            <Smartphone className="size-3.5" />
          </ToggleGroupItem>
        )}
      </ToggleGroup>
    </div>
  );
};
