/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface VerticalSpacerProps {
  theme?: EmailThemeTokens;
  height?: number;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const VerticalSpacerSection = ({ height }: { height: number }) => (
  <MjmlSection padding={`${height}px 0`}>
    <MjmlColumn />
  </MjmlSection>
);

export const VerticalSpacer = ({
  theme = defaultTheme,
  height = 24,
  variant = "default",
}: VerticalSpacerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>spacer</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <VerticalSpacerSection height={height} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

VerticalSpacer.PreviewProps = {
  height: 48,
  theme: defaultTheme,
  variant: "default",
} satisfies VerticalSpacerProps;
