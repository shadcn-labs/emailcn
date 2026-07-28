import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Text,
  Section,
  Row,
  Column,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

const resolveDefaultProps = <Defaults extends object, Props extends object>(
  defaults: Defaults,
  props: Props
) => {
  const supplied = props as Record<string, unknown>;
  const fallbackEntries = Object.entries(defaults).map(([key, value]) => [
    key,
    supplied[key] === undefined ? value : supplied[key],
  ]);

  return {
    ...defaults,
    ...props,
    ...Object.fromEntries(fallbackEntries),
  } as Defaults & Props;
};

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

const RollingStats_defaults = {
  backgroundColor: "#fffffe",
  eyebrow: "Mapped trails",
  eyebrowColor: "#9ca3af",
  firstValueColor: "#262626",
  label: "Tracked by active users",
  labelColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  panelBackgroundColor: "#030712",
  secondValueColor: "#737373",
};

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

type RollingStats_SectionProps = Omit<RollingStats_RollingStatsProps, "theme">;

type RollingStats_ResolvedProps = typeof RollingStats_defaults &
  RollingStats_SectionProps & {
    accentColor: string;
    values: [string, string, string];
  };

const RollingStats_RollingStatsSection = (props: RollingStats_SectionProps) => {
  const variant = props.variant ?? "centered";
  const centered = variant === "centered";
  const bottom = variant.startsWith("bottom-");
  const resolved = resolveDefaultProps(
    {
      ...RollingStats_defaults,
      accentColor: RollingStats_accentColors[variant],
      values: centered
        ? (["3,117km", "3,118km", "3,119km"] as [string, string, string])
        : (["14,598", "14,599", "14,600"] as [string, string, string]),
    },
    props
  ) as RollingStats_ResolvedProps;
  let align: "center" | "left" | "right" = "left";
  let topSpace = "24px";
  let bottomSpace = "92px";
  if (centered) {
    align = "center";
    topSpace = "58px";
    bottomSpace = "58px";
  } else {
    if (variant.endsWith("-right")) {
      align = "right";
    }
    if (bottom) {
      topSpace = "92px";
      bottomSpace = "24px";
    }
  }
  const value = (text: string, color: string, first: boolean) => (
    <Text
      style={{
        color,
        fontFamily: RollingStats_fontFamily,
        fontSize: "72px",
        fontWeight: 500,
        lineHeight: "56px",
        margin: first ? "12px 0 0" : 0,
        textAlign: align,
      }}
    >
      {text}
    </Text>
  );
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column
                    style={{
                      backgroundColor: resolved.panelBackgroundColor,
                      borderRadius: "8px",
                      padding: "0 24px",
                    }}
                  >
                    <Section style={{ lineHeight: topSpace }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.eyebrowColor,
                        fontFamily: RollingStats_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: align,
                      }}
                    >
                      {resolved.eyebrow}
                    </Text>
                    <Text
                      style={{
                        color: resolved.labelColor,
                        fontFamily: RollingStats_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: align,
                      }}
                    >
                      {resolved.label}
                    </Text>
                    {value(resolved.values[0], resolved.firstValueColor, true)}
                    {value(
                      resolved.values[1],
                      resolved.secondValueColor,
                      false
                    )}
                    {value(resolved.values[2], resolved.accentColor, false)}
                    <Section style={{ lineHeight: bottomSpace }}>&zwj;</Section>
                  </Column>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const RollingStats_RollingStats = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "centered",
  ...props
}: RollingStats_RollingStatsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>3,119km mapped trails</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: RollingStats_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <RollingStats_RollingStatsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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

const SingleStat_defaults = {
  backgroundColor: "#fffffe",
  backgroundImageSrc: emailAsset("stats/single-stat.jpg"),
  eyebrow: "Mapped trails",
  eyebrowColor: "#d1d5db",
  label: "Tracked by active users",
  labelColor: "#fffffe",
  overlayColor: "rgba(0,0,1,0.25)",
  pageBackgroundColor: "#f1f5f9",
  value: "3,120km",
};

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

type SingleStat_SectionProps = Omit<
  SingleStat_SingleStatWithBackgroundImageProps,
  "theme"
>;

type SingleStat_ResolvedProps = typeof SingleStat_defaults &
  SingleStat_SectionProps & {
    valueColor: string;
  };

const SingleStat_SingleStatWithBackgroundImageSection = (
  props: SingleStat_SectionProps
) => {
  const variant = props.variant ?? "centered";
  const resolved = resolveDefaultProps(
    {
      ...SingleStat_defaults,
      valueColor: SingleStat_valueColors[variant],
    },
    props
  ) as SingleStat_ResolvedProps;
  const centered = variant === "centered";
  const bottom = variant.startsWith("bottom-");
  let align: "center" | "left" | "right" = "left";
  let topSpace = "24px";
  let bottomSpace = "185px";
  if (centered) {
    align = "center";
    topSpace = "104px";
    bottomSpace = "104px";
  } else {
    if (variant.endsWith("-right")) {
      align = "right";
    }
    if (bottom) {
      topSpace = "185px";
      bottomSpace = "24px";
    }
  }
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              textAlign: "left",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Section
                      style={{
                        backgroundImage: `url('${resolved.backgroundImageSrc}')`,
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        borderRadius: "8px",
                      }}
                      width="100%"
                    >
                      <Fragment>
                        <Row>
                          <Column>
                            <Section
                              style={{
                                backgroundColor: resolved.overlayColor,
                                borderRadius: "8px",
                              }}
                            >
                              <Section width="100%">
                                <Fragment>
                                  <Row>
                                    <Column style={{ width: "24px" }}>
                                      &zwj;
                                    </Column>
                                    <Column>
                                      <Section style={{ lineHeight: topSpace }}>
                                        &zwj;
                                      </Section>
                                      <Text
                                        style={{
                                          color: resolved.eyebrowColor,
                                          fontFamily: SingleStat_fontFamily,
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          margin: 0,
                                          textAlign: align,
                                        }}
                                      >
                                        {resolved.eyebrow}
                                      </Text>
                                      <Text
                                        style={{
                                          color: resolved.labelColor,
                                          fontFamily: SingleStat_fontFamily,
                                          fontSize: "16px",
                                          lineHeight: "24px",
                                          margin: 0,
                                          textAlign: align,
                                        }}
                                      >
                                        {resolved.label}
                                      </Text>
                                      <Text
                                        style={{
                                          color: resolved.valueColor,
                                          fontFamily: SingleStat_fontFamily,
                                          fontSize: "72px",
                                          fontWeight: 500,
                                          lineHeight: "normal",
                                          margin: 0,
                                          textAlign: align,
                                        }}
                                      >
                                        {resolved.value}
                                      </Text>
                                      <Section
                                        style={{ lineHeight: bottomSpace }}
                                      >
                                        &zwj;
                                      </Section>
                                    </Column>
                                    <Column style={{ width: "24px" }}>
                                      &zwj;
                                    </Column>
                                  </Row>
                                </Fragment>
                              </Section>
                            </Section>
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const SingleStat_SingleStatWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "centered",
  ...props
}: SingleStat_SingleStatWithBackgroundImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>3,120km mapped trails</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SingleStat_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <SingleStat_SingleStatWithBackgroundImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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

export const SpotlightStats = ({
  theme,
  eyebrow,
  label,
  values,
  position = "center",
  backgroundImage,
}: SpotlightStatsProps) => {
  const variant = position === "center" ? "centered" : position;
  const contentProps = { eyebrow, label, theme };
  if (backgroundImage) {
    return (
      <__SingleStat
        backgroundImageSrc={backgroundImage.src}
        variant={variant}
        value={values?.[0]}
        {...contentProps}
      />
    );
  }
  return (
    <__RollingStats
      variant={variant}
      {...contentProps}
      values={
        values && values.length >= 3
          ? [values[0], values[1], values[2]]
          : undefined
      }
    />
  );
};

SpotlightStats.PreviewProps = {
  position: "center",
} satisfies SpotlightStatsProps;
