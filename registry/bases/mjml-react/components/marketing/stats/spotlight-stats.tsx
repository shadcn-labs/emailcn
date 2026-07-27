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

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type RollingStats_RollingStatsVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

interface RollingStats_RollingStatsProps {
  theme?: EmailTheme;
  variant?: RollingStats_RollingStatsVariant;
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

const RollingStats_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const RollingStats_accentColors: Record<
  RollingStats_RollingStatsVariant,
  string
> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

const RollingStats_RollingStatsSection = ({
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
}: Omit<RollingStats_RollingStatsProps, "theme">) => {
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
          fontFamily={RollingStats_fontFamily}
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
          accentColor ?? RollingStats_accentColors[variant],
        ].map((color, index) => (
          <MjmlText
            align={align}
            color={color}
            fontFamily={RollingStats_fontFamily}
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
          fontFamily={RollingStats_fontFamily}
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

const RollingStats_RollingStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: RollingStats_RollingStatsProps) => (
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
        <RollingStats_RollingStatsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

RollingStats_RollingStats.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies RollingStats_RollingStatsProps;

const __RollingStats = RollingStats_RollingStats;

type SingleStat_SingleStatWithBackgroundImageVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

interface SingleStat_SingleStatWithBackgroundImageProps {
  theme?: EmailTheme;
  variant?: SingleStat_SingleStatWithBackgroundImageVariant;
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

const SingleStat_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SingleStat_valueColors: Record<
  SingleStat_SingleStatWithBackgroundImageVariant,
  string
> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

const SingleStat_SingleStatWithBackgroundImageSection = ({
  backgroundImageSrc = emailAsset("stats/single-stat.jpg"),
  eyebrow = "Mapped trails",
  eyebrowColor = "#d1d5db",
  label = "Tracked by active users",
  labelColor = "#fffffe",
  value = "3,120km",
  valueColor,
  variant = "centered",
}: Omit<SingleStat_SingleStatWithBackgroundImageProps, "theme">) => {
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
          fontFamily={SingleStat_fontFamily}
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
          color={valueColor ?? SingleStat_valueColors[variant]}
          fontFamily={SingleStat_fontFamily}
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
          fontFamily={SingleStat_fontFamily}
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

const SingleStat_SingleStatWithBackgroundImage = ({
  backgroundColor = "#fffffe",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: SingleStat_SingleStatWithBackgroundImageProps) => (
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
        <SingleStat_SingleStatWithBackgroundImageSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SingleStat_SingleStatWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies SingleStat_SingleStatWithBackgroundImageProps;

const __SingleStat = SingleStat_SingleStatWithBackgroundImage;

export interface SpotlightStatsProps {
  theme?: Parameters<typeof __RollingStats>[0]["theme"];
  eyebrow?: string;
  label?: string;
  values?: string[];
  position?:
    | "center"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  backgroundImage?: {
    src: string;
    alt?: string;
  };
}

const spotlightStatsDefinedProps = <Props extends object>(props: Props) =>
  Object.fromEntries(
    Object.entries(props).filter(([, value]) => value !== undefined)
  ) as Partial<Props>;

export const SpotlightStats = ({
  theme,
  eyebrow,
  label,
  values,
  position = "center",
  backgroundImage,
}: SpotlightStatsProps) => {
  const variant = position === "center" ? "centered" : position;
  const contentProps = spotlightStatsDefinedProps({ eyebrow, label, theme });
  if (backgroundImage) {
    return (
      <__SingleStat
        backgroundImageSrc={backgroundImage.src}
        variant={variant}
        {...contentProps}
        {...spotlightStatsDefinedProps({ value: values?.[0] })}
      />
    );
  }
  return (
    <__RollingStats
      variant={variant}
      {...contentProps}
      {...spotlightStatsDefinedProps({
        values:
          values && values.length >= 3
            ? [values[0], values[1], values[2]]
            : undefined,
      })}
    />
  );
};

SpotlightStats.PreviewProps = {
  position: "center",
} satisfies SpotlightStatsProps;
