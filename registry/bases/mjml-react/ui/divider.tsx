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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface DividerProps {
  theme?: EmailThemeTokens;
  label?: string;
}

const DividerSection = ({
  label,
  theme,
}: {
  label?: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
    <MjmlColumn>
      {label ? (
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
        >
          {label}
        </MjmlText>
      ) : (
        <MjmlDivider borderColor={theme.colorBorder} />
      )}
    </MjmlColumn>
  </MjmlSection>
);

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>divider</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <DividerSection label={label} theme={theme} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;
