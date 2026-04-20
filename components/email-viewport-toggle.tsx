"use client";

import { Monitor, Smartphone, Tablet } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export type EmailViewport = "desktop" | "tablet" | "mobile";

interface EmailViewportToggleProps {
  value: EmailViewport;
  onValueChange: (next: EmailViewport) => void;
  className?: string;
}

export const EmailViewportToggle = ({
  value,
  onValueChange,
  className,
}: EmailViewportToggleProps) => (
  <div className={className}>
    <ToggleGroup
      type="single"
      value={value}
      onValueChange={(next) => {
        if (next) {
          onValueChange(next as EmailViewport);
        }
      }}
      className="h-8 gap-1 rounded-md border p-[3px] *:data-[slot=toggle-group-item]:size-6! *:data-[slot=toggle-group-item]:rounded-sm!"
    >
      <ToggleGroupItem title="Desktop" value="desktop">
        <Monitor className="size-3.5" />
      </ToggleGroupItem>
      <ToggleGroupItem title="Tablet" value="tablet">
        <Tablet className="size-3.5" />
      </ToggleGroupItem>
      <ToggleGroupItem title="Mobile" value="mobile">
        <Smartphone className="size-3.5" />
      </ToggleGroupItem>
    </ToggleGroup>
  </div>
);
