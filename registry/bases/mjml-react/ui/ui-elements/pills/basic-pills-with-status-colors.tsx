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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type PillStatusVariant =
  | "default"
  | "success"
  | "warning"
  | "danger"
  | "info";

export interface BasicPillsStatusColorsProps {
  theme?: EmailThemeTokens;
  pills?: { label: string; variant: PillStatusVariant }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const pillColors = (v: PillStatusVariant, theme: EmailThemeTokens) => {
  switch (v) {
    case "success": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorSuccess ?? "#10b981",
        text: theme.colorSuccess ?? "#10b981",
      };
    }
    case "warning": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorWarning ?? "#f59e0b",
        text: theme.colorWarning ?? "#f59e0b",
      };
    }
    case "danger": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorDanger ?? "#ef4444",
        text: theme.colorDanger ?? "#ef4444",
      };
    }
    case "info": {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorPrimary,
        text: theme.colorPrimary,
      };
    }
    default: {
      return {
        bg: theme.colorBackgroundMuted,
        border: theme.colorBorder ?? "#e5e7eb",
        text: theme.colorTextMuted,
      };
    }
  }
};

const BasicPillsStatusColorsSection = ({
  pills,
  theme,
  variant,
}: {
  pills: NonNullable<BasicPillsStatusColorsProps["pills"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<BasicPillsStatusColorsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "2Fourpx"} 0`}>
      {pills.map((pill) => {
        const c = pillColors(pill.variant, theme);
        return (
          <MjmlColumn key={pill.label} padding="Fourpx">
            <MjmlSection
              backgroundColor={c.bg}
              border={`1px solid ${c.border}`}
              borderRadius={theme.borderRadius}
              padding="Fourpx 12px"
            >
              <MjmlColumn>
                <MjmlText
                  align={alignText}
                  color={c.text}
                  fontFamily={theme.fontFamily}
                  fontSize={theme.fontSizeSm ?? "12px"}
                  fontWeight={theme.fontWeightMedium ?? "500"}
                  padding="0"
                >
                  {pill.label}
                </MjmlText>
              </MjmlColumn>
            </MjmlSection>
          </MjmlColumn>
        );
      })}
    </MjmlSection>
  );
};

export const BasicPillsStatusColors = ({
  theme = defaultTheme,
  pills = [
    { label: "Active", variant: "success" as PillStatusVariant },
    { label: "Pending", variant: "warning" as PillStatusVariant },
  ],
  variant = "default",
}: BasicPillsStatusColorsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>pills</MjmlPreview>
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
        <BasicPillsStatusColorsSection
          pills={pills}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BasicPillsStatusColors.PreviewProps = {
  pills: [
    { label: "Active", variant: "success" },
    { label: "Pending", variant: "warning" },
    { label: "Cancelled", variant: "danger" },
    { label: "New", variant: "info" },
    { label: "Draft", variant: "default" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies BasicPillsStatusColorsProps;
