import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type SingleStatWithBackgroundImageVariant =
  | "centered"
  | "top-left"
  | "bottom-left"
  | "top-right"
  | "bottom-right";

export interface SingleStatWithBackgroundImageProps {
  theme?: TailwindConfig;
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

const defaults = {
  backgroundColor: "#fffffe",
  backgroundImageSrc:
    "https://emailcn.vercel.app/api/email-assets/stats/single-stat.jpg",
  eyebrow: "Mapped trails",
  eyebrowColor: "#d1d5db",
  label: "Tracked by active users",
  labelColor: "#fffffe",
  overlayColor: "rgba(0,0,1,0.25)",
  pageBackgroundColor: "#f1f5f9",
  value: "3,120km",
};

const valueColors: Record<SingleStatWithBackgroundImageVariant, string> = {
  "bottom-left": "#c7d2fe",
  "bottom-right": "#a7f3d0",
  centered: "#e9d5ff",
  "top-left": "#fde68a",
  "top-right": "#fecdd3",
};

type SectionProps = Omit<SingleStatWithBackgroundImageProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps & { valueColor: string };

export const SingleStatWithBackgroundImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "centered";
  const resolved = {
    ...defaults,
    valueColor: valueColors[variant],
    ...props,
  } as ResolvedProps;
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
                                          fontFamily,
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
                                          fontFamily,
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
                                          fontFamily,
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

export const SingleStatWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "centered",
  ...props
}: SingleStatWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>3,120km mapped trails</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <SingleStatWithBackgroundImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

SingleStatWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies SingleStatWithBackgroundImageProps;
