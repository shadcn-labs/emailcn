import { MjmlDivider, MjmlSection, MjmlText } from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface DividerProps {
  theme?: EmailTheme;
  label?: string;
}

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => {
  const t = resolveEmailTheme(theme);

  return (
    <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
      {label ? (
        <MjmlText
          align="center"
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.sm ?? "12px"}
        >
          {label}
        </MjmlText>
      ) : (
        <MjmlDivider borderColor={t.colors.border} />
      )}
    </MjmlSection>
  );
};

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;

export default Divider;
