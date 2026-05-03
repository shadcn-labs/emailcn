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

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

export interface DividerProps {
  theme?: EmailTheme;
  label?: string;
}

const DividerSection = ({
  label,
  t,
}: {
  label?: string;
  t: ResolvedEmailTheme;
}) => (
  <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
    <MjmlColumn>
      {label ? (
        <MjmlText
          align="center"
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.sm ?? "12px"}
        >
          {label}
        </MjmlText>
      ) : (
        <MjmlDivider borderColor={t.colors.border} />
      )}
    </MjmlColumn>
  </MjmlSection>
);

export const Divider = ({ theme = defaultTheme, label }: DividerProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>divider</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <DividerSection label={label} t={t} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

Divider.PreviewProps = {
  label: "— or —",
  theme: defaultTheme,
} satisfies DividerProps;
