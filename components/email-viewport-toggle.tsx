"use client";

import { Fullscreen, Monitor, Smartphone } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useIsMobile } from "@/hooks/use-mobile";
import type { EmailViewport } from "@/hooks/use-viewport-toggle";
import { useViewportToggle } from "@/hooks/use-viewport-toggle";

interface EmailViewportToggleProps {
  className?: string;
  onViewportChange?: (viewport: EmailViewport) => void;
  viewUrl?: string;
}

export const EmailViewportToggle = ({
  className,
  onViewportChange,
  viewUrl,
}: EmailViewportToggleProps) => {
  const [viewport, setViewport] = useViewportToggle();
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  const handleViewportChange = (next: string) => {
    if (!next) {
      onViewportChange?.(viewport);
      return;
    }

    const nextViewport = next as EmailViewport;
    setViewport(nextViewport);
    onViewportChange?.(nextViewport);
  };

  return (
    <div className={className}>
      <ToggleGroup
        aria-label="Email preview controls"
        className="h-8 gap-1 rounded-md border p-[3px] *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
        onValueChange={handleViewportChange}
        type="single"
        value={viewport}
      >
        <ToggleGroupItem title="Desktop" value="desktop">
          <Monitor className="size-3.5" />
        </ToggleGroupItem>
        <ToggleGroupItem title="Mobile" value="mobile">
          <Smartphone className="size-3.5" />
        </ToggleGroupItem>
        {viewUrl ? (
          <>
            <Separator className="h-4!" orientation="vertical" />
            <Button
              asChild
              className="size-6 rounded-sm p-0"
              size="icon"
              title="Open preview in new tab"
              variant="ghost"
            >
              <Link href={viewUrl} rel="noreferrer" target="_blank">
                <Fullscreen className="size-3.5" />
                <span className="sr-only">Open preview in new tab</span>
              </Link>
            </Button>
          </>
        ) : null}
      </ToggleGroup>
    </div>
  );
};
