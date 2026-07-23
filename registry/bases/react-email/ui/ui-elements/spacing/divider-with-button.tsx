import { Link } from "react-email";
import type { TailwindConfig } from "react-email";

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import {
  DividerFrame,
  SpacingEmailShell,
  dividerButtonStyle,
} from "./divider-shared";
import type { DividerVariant } from "./divider-shared";

export interface DividerWithButtonProps {
  href?: string;
  label?: string;
  theme?: TailwindConfig;
  variant?: DividerVariant;
}

export const DividerWithButtonSection = ({
  href = "#",
  label = "View All",
  variant = "center",
}: Omit<DividerWithButtonProps, "theme">) => (
  <DividerFrame variant={variant}>
    <Link href={href} style={dividerButtonStyle}>
      {label}
    </Link>
  </DividerFrame>
);

export const DividerWithButton = ({
  href = "#",
  label = "View All",
  theme = defaultTheme,
  variant = "center",
}: DividerWithButtonProps) => (
  <SpacingEmailShell preview={label} theme={theme}>
    <DividerWithButtonSection href={href} label={label} variant={variant} />
  </SpacingEmailShell>
);

DividerWithButton.PreviewProps = {
  href: "https://example.com/shop",
  label: "Shop Now",
  theme: defaultTheme,
  variant: "center",
} satisfies DividerWithButtonProps;
