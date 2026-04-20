import { Section, Tailwind, Text } from "react-email";

import type { EmailTheme } from "@/registry/themes/default";
import { theme as defaultTheme } from "@/registry/themes/default";

export interface DividerProps {
  theme?: EmailTheme;
  label?: string;
}

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => (
  <Tailwind config={theme}>
    <Section className="py-6">
      {label ? (
        <Text className="text-center text-sm text-foreground-muted">
          {label}
        </Text>
      ) : (
        <Section className="border-b border-border" />
      )}
    </Section>
  </Tailwind>
);

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;

export default Divider;
