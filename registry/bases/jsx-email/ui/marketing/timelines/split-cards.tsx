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
import type { ReactNode } from "react";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type SplitCardsVariant =
  | "muted"
  | "muted-reverse"
  | "boxed"
  | "boxed-reverse"
  | "accent"
  | "accent-reverse"
  | "image-top"
  | "image-top-reverse"
  | "image-bottom"
  | "image-bottom-reverse";

export interface SplitCardsProps {
  theme?: EmailThemeTokens;
  variant?: SplitCardsVariant;
  index?: string;
  label?: string;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .split-card-column { display: block !important; width: 100% !important; }
    .split-card-meta { display: table-header-group !important; width: 100% !important; }
    .split-card-copy { display: table-footer-group !important; width: 100% !important; }
    .split-card-mobile-space { display: block !important; line-height: 16px !important; }
  }
`;

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

const SplitShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {children}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const SplitMeta = ({ index, label }: { index: string; label: string }) => (
  <Column
    className="split-card-column split-card-meta"
    style={{ padding: "16px 0", verticalAlign: "top", width: "112px" }}
  >
    <Section>
      <Text
        style={{
          ...textStyle,
          color: "#030712",
          fontSize: "60px",
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        {index}
      </Text>
      <Text
        style={{
          ...textStyle,
          color: "#9ca3af",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
        }}
      >
        {label}
      </Text>
    </Section>
  </Column>
);

interface EventCardProps {
  badge: string;
  date: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  title: string;
  variant: SplitCardsVariant;
}

const EventCard = ({
  badge,
  date,
  description,
  imageAlt,
  imageSrc,
  title,
  variant,
}: EventCardProps) => {
  const muted = variant.startsWith("muted");
  const boxed = variant.startsWith("boxed");
  const accent = variant.startsWith("accent");
  const imageTop = variant.startsWith("image-top");
  const imageBottom = variant.startsWith("image-bottom");
  const dark = accent || imageTop || imageBottom;
  let cardBackgroundColor: string | undefined;
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (boxed) {
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
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: cardBackgroundColor,
              borderRadius: muted ? undefined : "8px",
              padding: muted ? 0 : "16px",
            }}
          >
            {imageTop ? (
              <>
                {image}
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
              </>
            ) : null}
            {muted ? (
              <Text
                style={{
                  ...textStyle,
                  color: "#374151",
                  fontSize: "12px",
                  lineHeight: "16px",
                }}
              >
                {date}
              </Text>
            ) : (
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
                                  backgroundColor: "#6ee7b7",
                                  borderRadius: "9999px",
                                  height: "12px",
                                  lineHeight: accent ? "10px" : "12px",
                                  textAlign: "center",
                                  width: "12px",
                                }}
                              >
                                {accent ? (
                                  <Img
                                    alt=""
                                    src="https://emailcn.vercel.app/api/email-assets/timelines/icon-check.png"
                                    style={{ marginBottom: "1px" }}
                                    width="8"
                                  />
                                ) : (
                                  <>&zwj;</>
                                )}
                              </Section>
                            </Column>
                            <Column style={{ width: "8px" }}>&zwj;</Column>
                            <Column>
                              <Text
                                style={{
                                  ...textStyle,
                                  color: dark ? "#e5e7eb" : "#374151",
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
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            )}
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
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                {image}
              </>
            ) : null}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const SplitCardsSection = ({
  badge = "Today",
  date = "Monday",
  description = "Description of event",
  imageAlt = "Placeholder image",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/timelines/cards.jpg",
  index = "01",
  label = "Miles traveled",
  title = "Miles traveled",
  variant = "muted",
}: Omit<SplitCardsProps, "theme">) => {
  const reverse = variant.endsWith("-reverse");
  const muted = variant.startsWith("muted");
  const meta = <SplitMeta index={index} label={label} />;
  const copy = (
    <Column
      className="split-card-column split-card-copy"
      style={{ padding: "16px", verticalAlign: "top" }}
    >
      <EventCard
        badge={badge}
        date={date}
        description={description}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        title={title}
        variant={variant}
      />
    </Column>
  );

  return (
    <SplitShell>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column
              style={{
                padding: muted && !reverse ? "0 24px" : "16px 24px",
              }}
            >
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    {reverse ? copy : meta}
                    {reverse ? meta : copy}
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </SplitShell>
  );
};

export const SplitCards = ({
  theme: _theme = defaultTheme,
  ...props
}: SplitCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Miles traveled</Preview>
    <Body style={{ margin: 0 }}>
      <SplitCardsSection {...props} />
    </Body>
  </Html>
);

SplitCards.PreviewProps = {
  theme: defaultTheme,
  variant: "muted",
} satisfies SplitCardsProps;
