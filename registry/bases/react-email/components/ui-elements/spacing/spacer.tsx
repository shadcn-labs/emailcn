import type { ReactNode } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

const dividerColors = {
  border: "#e5e7eb",
  muted: "#6b7280",
  mutedBackground: "#f3f4f6",
  surface: "#ffffff",
  text: "#111827",
  white: "#ffffff",
} as const;

const VerticalSpacerSection = ({ height = 24 }: { height?: number }) => (
  <Section
    style={{ fontSize: 0, height: `${height}px`, lineHeight: `${height}px` }}
  >
    &zwj;
  </Section>
);

const SpacingEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
}) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>{preview}</Preview>
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: dividerColors.surface }} className="m-0">
        <Container className="mx-auto max-w-[600px]">{children}</Container>
      </Body>
    </Tailwind>
  </Html>
);

interface Spacer_VerticalSpacerProps {
  height?: number;
  theme?: TailwindConfig;
}

const Spacer_VerticalSpacer = ({
  height = 24,
  theme = defaultTheme,
}: Spacer_VerticalSpacerProps) => (
  <SpacingEmailShell preview="Vertical spacer" theme={theme}>
    <VerticalSpacerSection height={height} />
  </SpacingEmailShell>
);

Spacer_VerticalSpacer.PreviewProps = {
  height: 48,
  theme: defaultTheme,
} satisfies Spacer_VerticalSpacerProps;

const __Spacer = Spacer_VerticalSpacer;

export interface SpacerProps {
  theme?: Parameters<typeof __Spacer>[0]["theme"];
  height?: number;
}

export const Spacer = (props: SpacerProps) => <__Spacer {...props} />;

Spacer.PreviewProps = {
  height: 64,
} satisfies SpacerProps;
