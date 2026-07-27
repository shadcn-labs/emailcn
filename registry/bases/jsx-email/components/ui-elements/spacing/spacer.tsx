import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Section,
} from "jsx-email";
import type { ReactNode } from "react";

import { EmailTailwind } from "@/components/email/email-tailwind";
import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

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
  theme: EmailThemeTokens;
}) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>{preview}</Preview>
    <EmailTailwind theme={theme}>
      <Body className="bg-bg m-0">
        <Container className="mx-auto max-w-email">{children}</Container>
      </Body>
    </EmailTailwind>
  </Html>
);

interface Spacer_VerticalSpacerProps {
  height?: number;
  theme?: EmailThemeTokens;
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
