/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Hr, Html, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface LineDividerProps {
  theme?: TailwindConfig;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const LineDividerSection = ({}: Omit<LineDividerProps, "theme">) => (
  <Section className="py-6">
    <Hr className="border-border" />
  </Section>
);

export const LineDivider = ({
  theme = defaultTheme,
  variant = "default",
}: LineDividerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>—</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <LineDividerSection />
      </Body>
    </Tailwind>
  </Html>
);

LineDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies LineDividerProps;
