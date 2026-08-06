"use client";

import { Volume2, VolumeX } from "lucide-react";

import { useFeedback } from "@/hooks/use-feedback";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const SOUND_OPTIONS = [
  { icon: Volume2, label: "on", value: true },
  { icon: VolumeX, label: "off", value: false },
] as const;

const SoundSwitcher = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  const isMounted = useMounted();
  const feedbackOn = useFeedback({ sound: "toggleOn" });
  const feedbackOff = useFeedback({ sound: "toggleOff" });

  if (!isMounted) {
    return <div className="flex h-8 w-20" />;
  }

  const activeIndex = value ? 0 : 1;

  return (
    <div
      className="relative inline-flex items-center rounded-full bg-background inset-ring-1 inset-ring-border"
      role="radiogroup"
      aria-label="Sound"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-8 rounded-full border transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {SOUND_OPTIONS.map((option) => {
        const Icon = option.icon;
        const isActive = value === option.value;

        return (
          <button
            key={option.label}
            type="button"
            data-active={isActive}
            className={cn(
              "relative z-10 flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground data-[active=true]:text-foreground [&_svg]:size-4"
            )}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch sound ${option.label}`}
            onClick={() => {
              if (option.value) {
                feedbackOn();
              } else {
                feedbackOff();
              }
              onValueChange(option.value);
            }}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
};

export { SoundSwitcher };
