/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface LineDividerProps {
  theme?: EmailThemeTokens;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const LineDividerSection = ({ theme }: { theme: EmailThemeTokens }) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn>
      <MjmlDivider borderColor={theme.colorBorder} />
    </MjmlColumn>
  </MjmlSection>
);

export const LineDivider = ({
  theme = defaultTheme,
  variant = "default",
}: LineDividerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <LineDividerSection theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LineDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies LineDividerProps;
