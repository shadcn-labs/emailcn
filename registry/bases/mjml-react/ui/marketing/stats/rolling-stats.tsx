import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type RollingStatsVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

export interface RollingStatsProps {
  theme?: EmailThemeTokens;
  variant?: RollingStatsVariant;
  eyebrow?: string;
  label?: string;
  values?: [string, string, string];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  panelBackgroundColor?: string;
  eyebrowColor?: string;
  labelColor?: string;
  firstValueColor?: string;
  secondValueColor?: string;
  accentColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const accentColors: Record<RollingStatsVariant, string> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

export const RollingStatsSection = ({
  accentColor,
  backgroundColor = "#fffffe",
  eyebrow = "Mapped trails",
  eyebrowColor = "#9ca3af",
  firstValueColor = "#262626",
  label = "Tracked by active users",
  labelColor = "#fffffe",
  panelBackgroundColor = "#030712",
  secondValueColor = "#737373",
  values,
  variant = "centered",
}: Omit<RollingStatsProps, "theme">) => {
  const centered = variant === "centered";
  const bottom = variant.startsWith("bottom-");
  let align: "center" | "left" | "right" = "left";
  if (centered) {
    align = "center";
  } else if (variant.endsWith("-right")) {
    align = "right";
  }
  let topSpacer = "24px";
  let bottomSpacer = "92px";
  if (centered) {
    topSpacer = "58px";
    bottomSpacer = "58px";
  } else if (bottom) {
    topSpacer = "92px";
    bottomSpacer = "24px";
  }
  const resolvedValues =
    values ??
    (centered
      ? (["3,117km", "3,118km", "3,119km"] as const)
      : (["14,598", "14,599", "14,600"] as const));

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn
        backgroundColor={panelBackgroundColor}
        borderRadius="8px"
        padding="0 24px"
      >
        <MjmlSpacer height={topSpacer} />
        <MjmlText
          align={align}
          color={eyebrowColor}
          fontFamily={fontFamily}
          fontSize="14px"
          fontWeight="600"
          lineHeight="20px"
          padding="0"
          textTransform="uppercase"
        >
          {eyebrow}
        </MjmlText>
        {[
          firstValueColor,
          secondValueColor,
          accentColor ?? accentColors[variant],
        ].map((color, index) => (
          <MjmlText
            align={align}
            color={color}
            fontFamily={fontFamily}
            fontSize="72px"
            fontWeight="500"
            key={`${resolvedValues[index]}-${index}`}
            lineHeight="56px"
            padding={index === 0 ? "12px 0 0" : "0"}
          >
            {resolvedValues[index]}
          </MjmlText>
        ))}
        <MjmlText
          align={align}
          color={labelColor}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="16px 0 0"
        >
          {label}
        </MjmlText>
        <MjmlSpacer height={bottomSpacer} />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const RollingStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: RollingStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Rolling activity statistics</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <RollingStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

RollingStats.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies RollingStatsProps;
