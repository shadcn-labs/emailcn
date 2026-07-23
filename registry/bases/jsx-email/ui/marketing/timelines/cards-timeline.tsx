import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CardsTimelineVariant =
  | "default"
  | "with-badge"
  | "with-accent"
  | "image-top"
  | "image-bottom";

export interface CardsTimelineProps {
  theme?: EmailThemeTokens;
  variant?: CardsTimelineVariant;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

export const CardsTimelineSection = (
  props: Omit<CardsTimelineProps, "theme">
) => {
  const { badge, date, description, imageAlt, imageSrc, title, variant } = {
    badge: "Today",
    date: "Monday",
    description: "Description of event",
    imageAlt: "One workspace. Every team.",
    imageSrc: "https://emailcn.vercel.app/api/email-assets/timelines/cards.jpg",
    title: "Miles traveled",
    variant: "default",
    ...props,
  };

  const dark =
    variant === "with-accent" ||
    variant === "image-top" ||
    variant === "image-bottom";
  const withBadge = variant !== "default";
  const withCheck = variant === "with-accent";
  const imageTop = variant === "image-top";
  const imageBottom = variant === "image-bottom";
  let cardBackgroundColor = "#fffffe";
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (variant === "with-badge") {
    cardBackgroundColor = "#f9fafb";
  }

  const image = (
    <Img
      alt={imageAlt}
      src={imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width="536"
    />
  );

  return (
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              padding: variant === "default" ? 0 : "16px 0",
              width: "600px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 16px" }}>
                    <Section style={{ width: "100%" }}>
                      <Fragment>
                        <Row>
                          <Column
                            style={{
                              backgroundColor: cardBackgroundColor,
                              borderRadius:
                                variant === "default" ? undefined : "8px",
                              padding: "16px",
                            }}
                          >
                            {imageTop ? (
                              <>
                                {image}
                                <Section style={{ lineHeight: "16px" }}>
                                  &zwj;
                                </Section>
                              </>
                            ) : null}
                            <Section style={{ width: "100%" }}>
                              <Fragment>
                                <Row>
                                  <Column>
                                    <Section>
                                      <Fragment>
                                        <Row>
                                          <Column>
                                            <Section
                                              style={{
                                                backgroundColor:
                                                  variant === "default"
                                                    ? "#fcd34d"
                                                    : "#6ee7b7",
                                                borderRadius: "9999px",
                                                height: "12px",
                                                lineHeight: withCheck
                                                  ? "10px"
                                                  : "12px",
                                                textAlign: "center",
                                                width: "12px",
                                              }}
                                            >
                                              {withCheck ? (
                                                <Img
                                                  alt=""
                                                  src="https://emailcn.vercel.app/api/email-assets/timelines/icon-check.png"
                                                  style={{
                                                    marginBottom: "1px",
                                                  }}
                                                  width="8"
                                                />
                                              ) : (
                                                <>&zwj;</>
                                              )}
                                            </Section>
                                          </Column>
                                          <Column style={{ width: "8px" }}>
                                            &zwj;
                                          </Column>
                                          <Column>
                                            <Text
                                              style={{
                                                ...textStyle,
                                                color: dark
                                                  ? "#e5e7eb"
                                                  : "#374151",
                                                fontSize: "12px",
                                                lineHeight: "16px",
                                              }}
                                            >
                                              {date}
                                            </Text>
                                          </Column>
                                        </Row>
                                      </Fragment>
                                    </Section>
                                  </Column>
                                  <Column style={{ textAlign: "right" }}>
                                    {withBadge ? (
                                      <span
                                        style={{
                                          backgroundColor: "#eef2ff",
                                          border: "1px solid #c7d2fe",
                                          borderRadius: "9999px",
                                          color: "#4f46e5",
                                          display: "inline-block",
                                          fontFamily,
                                          fontSize: "12px",
                                          fontWeight: 500,
                                          lineHeight: "16px",
                                          padding: "1px 8px",
                                        }}
                                      >
                                        {badge}
                                      </span>
                                    ) : null}
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                            <Text
                              style={{
                                ...textStyle,
                                color: dark ? "#fffffe" : "#030712",
                                fontSize: "18px",
                                fontWeight: 600,
                                lineHeight: "28px",
                                marginTop: "4px",
                              }}
                            >
                              {title}
                            </Text>
                            <Text
                              style={{
                                ...textStyle,
                                color: dark ? "#d1d5db" : "#4b5563",
                                fontSize: "16px",
                                lineHeight: "24px",
                                marginTop: "4px",
                              }}
                            >
                              {description}
                            </Text>
                            {imageBottom ? (
                              <>
                                <Section style={{ lineHeight: "16px" }}>
                                  &zwj;
                                </Section>
                                {image}
                              </>
                            ) : null}
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
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

export const CardsTimeline = ({
  theme: _theme = defaultTheme,
  ...props
}: CardsTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Miles traveled</Preview>
    <Body style={{ margin: 0 }}>
      <CardsTimelineSection {...props} />
    </Body>
  </Html>
);

CardsTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimelineProps;
