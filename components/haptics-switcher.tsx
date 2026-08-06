"use client";

import { Vibrate, VibrateOff } from "lucide-react";

import { useFeedback } from "@/hooks/use-feedback";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";

const HAPTICS_OPTIONS = [
  { icon: Vibrate, label: "on", value: true },
  { icon: VibrateOff, label: "off", value: false },
] as const;

const HapticsSwitcher = ({
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
      aria-label="Haptics"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 size-8 rounded-full border transition-transform duration-200 ease-out"
        style={{ transform: `translateX(${activeIndex * 100}%)` }}
      />
      {HAPTICS_OPTIONS.map((option) => {
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
            aria-label={`Switch haptics ${option.label}`}
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

export { HapticsSwitcher };
