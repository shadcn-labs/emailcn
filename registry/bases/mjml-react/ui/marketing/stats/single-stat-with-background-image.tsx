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

export type SingleStatWithBackgroundImageVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

export interface SingleStatWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  variant?: SingleStatWithBackgroundImageVariant;
  eyebrow?: string;
  label?: string;
  value?: string;
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  eyebrowColor?: string;
  labelColor?: string;
  valueColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const valueColors: Record<SingleStatWithBackgroundImageVariant, string> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

export const SingleStatWithBackgroundImageSection = ({
  backgroundImageSrc = "https://emailcn.vercel.app/api/email-assets/stats/single-stat.jpg",
  eyebrow = "Mapped trails",
  eyebrowColor = "#d1d5db",
  label = "Tracked by active users",
  labelColor = "#fffffe",
  value = "3,120km",
  valueColor,
  variant = "centered",
}: Omit<SingleStatWithBackgroundImageProps, "theme">) => {
  const centered = variant === "centered";
  const bottom = variant.startsWith("bottom-");
  let align: "center" | "left" | "right" = "left";
  if (centered) {
    align = "center";
  } else if (variant.endsWith("-right")) {
    align = "right";
  }
  let topSpacer = "24px";
  let bottomSpacer = "185px";
  if (centered) {
    topSpacer = "104px";
    bottomSpacer = "104px";
  } else if (bottom) {
    topSpacer = "185px";
    bottomSpacer = "24px";
  }

  return (
    <MjmlSection
      backgroundColor="#000001"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundUrl={backgroundImageSrc}
      borderRadius="8px"
      padding="0 24px"
    >
      <MjmlColumn padding="0">
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
        <MjmlText
          align={align}
          color={valueColor ?? valueColors[variant]}
          fontFamily={fontFamily}
          fontSize="72px"
          fontWeight="500"
          lineHeight="80px"
          padding="12px 0 0"
        >
          {value}
        </MjmlText>
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

export const SingleStatWithBackgroundImage = ({
  backgroundColor = "#fffffe",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SingleStatWithBackgroundImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Single activity statistic</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper backgroundColor={backgroundColor} padding="44px 24px">
        <SingleStatWithBackgroundImageSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SingleStatWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies SingleStatWithBackgroundImageProps;
