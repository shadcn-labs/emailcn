import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerProps {
  theme?: TailwindConfig;
  label?: string;
}

export const DividerSection = ({ label }: Pick<DividerProps, "label">) => (
  <Section className="py-6">
    {label ? (
      <Text className="text-center text-sm text-foreground-muted">{label}</Text>
    ) : (
      <Section className="border-b border-border" />
    )}
  </Section>
);

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{label ?? "—"}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerSection label={label} />
      </Body>
    </Tailwind>
  </Html>
);

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;
