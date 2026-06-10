/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Html, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface VerticalSpacerProps {
  theme?: TailwindConfig;
  height?: number;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const VerticalSpacerSection = ({
  height = 24,
}: Omit<VerticalSpacerProps, "theme">) => (
  <div style={{ fontSize: 1, height, lineHeight: `${height}px` }}>&nbsp;</div>
);

export const VerticalSpacer = ({
  theme = defaultTheme,
  height = 24,
  variant = "default",
}: VerticalSpacerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Spacer</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <VerticalSpacerSection height={height} />
      </Body>
    </Tailwind>
  </Html>
);

VerticalSpacer.PreviewProps = {
  height: 48,
  theme: defaultTheme,
  variant: "default",
} satisfies VerticalSpacerProps;
