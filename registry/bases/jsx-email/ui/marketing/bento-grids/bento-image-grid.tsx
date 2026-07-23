import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

import { BentoImageGridSection } from "./bento-grid-layouts";
import type { BentoImageGridProps as BentoImageGridSectionProps } from "./bento-grid-layouts";
import { BentoEmailShell } from "./bento-grid-shared";

export type BentoImageGridProps = BentoImageGridSectionProps & {
  theme?: EmailThemeTokens;
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
