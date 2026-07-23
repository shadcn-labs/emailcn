import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { BentoImageGridSection } from "./bento-grid-layouts";
import type { BentoImageGridProps as BentoImageGridSectionProps } from "./bento-grid-layouts";
import { BentoEmailShell } from "./bento-grid-shared";

export type BentoImageGridProps = BentoImageGridSectionProps & {
  theme?: TailwindConfig;
};

export const BentoImageGrid = (props: BentoImageGridProps) => (
  <BentoEmailShell
    preview="Flexible bento image grid"
    theme={props.theme ?? defaultTheme}
  >
    <BentoImageGridSection {...props} />
  </BentoEmailShell>
);

BentoImageGrid.PreviewProps = {
  placement: "captions-top",
  style: "captions",
  theme: defaultTheme,
  variant: "alternating",
} satisfies BentoImageGridProps;
