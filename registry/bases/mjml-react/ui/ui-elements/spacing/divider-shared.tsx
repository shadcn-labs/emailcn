import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type DividerVariant = "center" | "left" | "right";

export const dividerColors = {
  border: "#e5e7eb",
  muted: "#6b7280",
  mutedBackground: "#f3f4f6",
  surface: "#ffffff",
  text: "#111827",
  white: "#ffffff",
} as const;

export const dividerFontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';

const columnWidths: Record<
  DividerVariant,
  { content: string; left: string; right: string }
> = {
  center: { content: "34%", left: "33%", right: "33%" },
  left: { content: "30%", left: "0%", right: "70%" },
  right: { content: "30%", left: "70%", right: "0%" },
};

const RuleColumn = ({ width }: { width: string }) => (
  <MjmlColumn padding="0" verticalAlign="middle" width={width}>
    <MjmlDivider
      borderColor={dividerColors.border}
      borderStyle="solid"
      borderWidth="1px"
      padding="0"
      width="100%"
    />
  </MjmlColumn>
);

export const DividerFrame = ({
  children,
  variant = "center",
}: {
  children: ReactNode;
  variant?: DividerVariant;
}) => {
  const widths = columnWidths[variant];

  return (
    <MjmlSection padding="24px 0">
      {variant === "left" ? null : <RuleColumn width={widths.left} />}
      <MjmlColumn
        padding={variant === "left" ? "0 16px 0 0" : "0 16px"}
        verticalAlign="middle"
        width={widths.content}
      >
        {children}
      </MjmlColumn>
      {variant === "right" ? null : <RuleColumn width={widths.right} />}
    </MjmlSection>
  );
};

export const LineDividerSection = () => (
  <MjmlSection padding="24px 0">
    <MjmlColumn padding="0">
      <MjmlDivider
        borderColor={dividerColors.border}
        borderStyle="solid"
        borderWidth="1px"
        padding="0"
        width="100%"
      />
    </MjmlColumn>
  </MjmlSection>
);

export const VerticalSpacerSection = ({ height = 24 }: { height?: number }) => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <MjmlSpacer height={`${height}px`} padding="0" />
    </MjmlColumn>
  </MjmlSection>
);

export const SpacingEmailShell = ({
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
