import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

const VerticalSpacerSection = ({ height = 24 }: { height?: number }) => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <MjmlSpacer height={`${height}px`} padding="0" />
    </MjmlColumn>
  </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
