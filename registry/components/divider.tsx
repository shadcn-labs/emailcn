import { Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

export interface DividerProps {
  theme?: EmailTheme;
  label?: string;
}

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => {
  const style = {
    label: {
      color: theme.colorTextMuted,
      fontSize: theme.fontSizeSm,
      textAlign: "center" as const,
    },
    line: {
      borderBottom: `1px solid ${theme.colorBorder}`,
    },
    section: {
      padding: `${theme.spacingBase} 0`,
    },
  };

  return (
    <Section style={style.section}>
      {label ? <Text style={style.label}>{label}</Text> : <Section style={style.line} />}
    </Section>
  );
};

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;

export default Divider;
