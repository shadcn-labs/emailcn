"use client";

import { Vibrate, VibrateOff } from "lucide-react";
import { motion } from "motion/react";
import type { JSX } from "react";
import { useSyncExternalStore } from "react";

const HapticsOption = ({
  icon,
  value,
  isActive,
  onClick,
}: {
  icon: JSX.Element;
  value: string;
  isActive?: boolean;
  onClick: (value: boolean) => void;
}) => (
  <button
    data-active={isActive}
    className="relative flex size-8 items-center justify-center rounded-full text-muted-foreground transition-[color] hover:text-foreground data-[active=true]:text-foreground [&_svg]:size-4"
    role="radio"
    aria-checked={isActive}
    aria-label={`Switch to ${value} haptics`}
    onClick={() => onClick(value === "on")}
  >
    {icon}

    {isActive && (
      <motion.span
        layoutId="haptics-option"
        transition={{ bounce: 0.3, duration: 0.6, type: "spring" }}
        className="absolute inset-0 rounded-full border"
      />
    )}
  </button>
);

const HAPTICS_OPTIONS = [
  {
    icon: <Vibrate />,
    value: "on",
  },
  {
    icon: <VibrateOff />,
    value: "off",
  },
];

const HapticsSwitcher = ({
  value,
  onValueChange,
}: {
  value: boolean;
  onValueChange: (value: boolean) => void;
}) => {
  const isMounted = useSyncExternalStore(
    Function.prototype as () => () => void,
    () => true,
    () => false
  );

  if (!isMounted) {
    return <div className="flex h-8 w-20" />;
  }

  return (
    <motion.div
      key={String(isMounted)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="inline-flex items-center overflow-clip rounded-full bg-background inset-ring-1 inset-ring-border"
      role="radiogroup"
    >
      {HAPTICS_OPTIONS.map((option) => (
        <HapticsOption
          key={option.value}
          icon={option.icon}
          value={option.value}
          isActive={option.value === "on" ? value : !value}
          onClick={onValueChange}
        />
      ))}
    </motion.div>
  );
};

export { HapticsSwitcher };
