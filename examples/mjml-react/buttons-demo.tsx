import type { ComponentProps } from "react";

import { Buttons } from "@/registry/bases/mjml-react/ui/ui-elements/buttons/buttons";

export default function ButtonsDemo({
  variant,
}: {
  variant?: ComponentProps<typeof Buttons>["variant"];
}) {
  return <Buttons {...Buttons.PreviewProps} variant={variant} />;
}
