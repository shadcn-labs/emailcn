import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

import { BentoProductGridSection } from "./bento-grid-layouts";
import type { BentoProductGridProps as BentoProductGridSectionProps } from "./bento-grid-layouts";
import { BentoEmailShell } from "./bento-grid-shared";

export type BentoProductGridProps = BentoProductGridSectionProps & {
  theme?: EmailThemeTokens;
};

export const BentoProductGrid = (props: BentoProductGridProps) => (
  <BentoEmailShell
    preview="Flexible bento product grid"
    theme={props.theme ?? defaultTheme}
  >
    <BentoProductGridSection {...props} />
  </BentoEmailShell>
);

BentoProductGrid.PreviewProps = {
  placement: "normal",
  style: "full",
  theme: defaultTheme,
  variant: "two-row-three-column",
} satisfies BentoProductGridProps;
