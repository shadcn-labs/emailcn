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
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type MilestoneStatsVariant = "default" | "boxed" | "accent";

export interface MilestoneStatsProps {
  theme?: EmailThemeTokens;
  variant?: MilestoneStatsVariant;
  heading?: string;
  value?: string;
  unit?: string;
  currentLevel?: string;
  nextLevel?: string;
  remaining?: string;
  progress?: number;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  progressTrackColor?: string;
  progressColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const MilestoneStatsSection = (
  props: Omit<MilestoneStatsProps, "theme">
) => {
  const {
    backgroundColor,
    cardBackgroundColor,
    currentLevel,
    heading,
    headingColor,
    mutedTextColor,
    nextLevel,
    progress,
    progressColor,
    progressTrackColor,
    remaining,
    textColor,
    unit,
    value,
    variant,
  } = {
    backgroundColor: "#fffffe",
    cardBackgroundColor: "#f9fafb",
    currentLevel: "SILVER",
    heading: "Miles traveled",
    headingColor: "#030712",
    mutedTextColor: "#9ca3af",
    nextLevel: "GOLD",
    progress: 90,
    progressColor: "#030712",
    progressTrackColor: "#e5e7eb",
    remaining: "1,315 miles",
    textColor: "#4b5563",
    unit: "miles",
    value: "5,685",
    variant: "default",
    ...props,
  };

  const accent = variant === "accent";
  let panel = backgroundColor;
  if (accent) {
    panel = "#030712";
  } else if (variant === "boxed") {
    panel = cardBackgroundColor;
  }
  const primary = accent ? "#fffffe" : headingColor;

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn
        backgroundColor={panel}
        borderRadius={variant === "default" ? "0" : "8px"}
        padding={variant === "default" ? "0" : "24px"}
      >
        <MjmlText
          align="center"
          color={primary}
          fontFamily={fontFamily}
          fontSize="18px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {heading}
        </MjmlText>
        <MjmlText
          align="center"
          color={accent ? "#fde68a" : headingColor}
          fontFamily={fontFamily}
          fontSize="48px"
          fontWeight="600"
          lineHeight="56px"
          padding="8px 0 0"
        >
          {value} {unit}
        </MjmlText>
        <MjmlSpacer height="24px" />
        <MjmlText
          color={mutedTextColor}
          fontFamily={fontFamily}
          fontSize="14px"
          fontWeight="600"
          lineHeight="20px"
          padding="0"
        >
          {currentLevel}　　　　　　　　　　　　　　　　　{nextLevel}
        </MjmlText>
        <MjmlDivider
          borderColor={progressTrackColor}
          borderWidth="8px"
          padding="8px 0 0"
        />
        <MjmlDivider
          align="left"
          borderColor={accent ? "#fde68a" : progressColor}
          borderWidth="8px"
          padding="0"
          width={`${Math.min(100, Math.max(0, progress))}%`}
        />
        <MjmlText
          align="center"
          color={accent ? "#d1d5db" : textColor}
          fontFamily={fontFamily}
          fontSize="14px"
          lineHeight="20px"
          padding="16px 0 0"
        >
          You’re {remaining} from Gold status
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const MilestoneStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: MilestoneStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>5,685 miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MilestoneStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

MilestoneStats.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies MilestoneStatsProps;
