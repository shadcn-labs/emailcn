import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Heading as EmailHeading,
  Text,
  Row,
  Column,
} from "jsx-email";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type ProgressBarContentVariant =
  | "minimal"
  | "with-title"
  | "with-text"
  | "text-top";

export type ProgressBarPaddedVariant =
  | ProgressBarContentVariant
  | "minimal-padded"
  | "with-title-padded"
  | "with-text-padded"
  | "text-top-padded";

export type ProgressBarColumnsVariant = Exclude<
  ProgressBarPaddedVariant,
  "minimal" | "minimal-padded"
>;

export interface ProgressBarItem {
  color?: string;
  description?: string;
  title: string;
  value: number;
}

const colors = {
  canvas: "#f1f5f9",
  dark: "#030712",
  label: "#4b5563",
  muted: "#6b7280",
  surface: "#fffffe",
  track: "#f3f4f6",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const tableStyle: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
};

const textBase: CSSProperties = {
  fontFamily,
  margin: 0,
};

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const getContentVariant = (
  variant: ProgressBarPaddedVariant
): ProgressBarContentVariant =>
  variant.replace("-padded", "") as ProgressBarContentVariant;

export const isPaddedVariant = (variant: ProgressBarPaddedVariant) =>
  variant.endsWith("-padded");

const Spacer = ({ height }: { height: number }) => (
  <Section
    style={{
      fontSize: 0,
      height: `${height}px`,
      lineHeight: `${height}px`,
    }}
  >
    &zwj;
  </Section>
);

const Heading = ({ children }: { children: ReactNode }) => (
  <EmailHeading
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
    as="h3"
  >
    {children}
  </EmailHeading>
);

const Description = ({
  children,
  marginBottom = 0,
  marginTop = 0,
}: {
  children: ReactNode;
  marginBottom?: number;
  marginTop?: number;
}) => (
  <Text
    style={{
      ...textBase,
      color: colors.muted,
      fontSize: "12px",
      lineHeight: "16px",
      marginBottom: `${marginBottom}px`,
      marginTop: `${marginTop}px`,
    }}
  >
    {children}
  </Text>
);

const ProgressTrack = ({
  color = "#2dd4bf",
  value,
}: Pick<ProgressBarItem, "color" | "value">) => {
  const progress = clamp(value);

  return (
    <Section style={{ ...tableStyle, tableLayout: "fixed" }}>
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: colors.track,
              borderRadius: "9999px",
              height: "8px",
              lineHeight: "8px",
            }}
          >
            <Section
              style={{
                borderCollapse: "separate",
                borderSpacing: 0,
                width: `${progress}%`,
              }}
            >
              <Fragment>
                <Row>
                  <Column
                    style={{
                      backgroundColor: color,
                      borderRadius: "9999px",
                      height: "8px",
                      lineHeight: "8px",
                    }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column
            width={40}
            style={{
              height: "8px",
              lineHeight: "8px",
              paddingLeft: "8px",
              textAlign: "right",
              width: "40px",
            }}
          >
            <span
              style={{
                ...textBase,
                color: colors.dark,
                fontSize: "12px",
              }}
            >
              {progress}%
            </span>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const ItemContent = ({
  item,
  variant,
}: {
  item: ProgressBarItem;
  variant: Exclude<ProgressBarContentVariant, "minimal">;
}) => (
  <>
    <Heading>{item.title}</Heading>
    {variant === "text-top" && item.description ? (
      <Description marginTop={14}>{item.description}</Description>
    ) : null}
    <Spacer height={14} />
    <ProgressTrack color={item.color} value={item.value} />
    {variant === "with-text" && item.description ? (
      <Description marginTop={14}>{item.description}</Description>
    ) : null}
  </>
);

export const FullWidthProgressContent = ({
  description,
  title,
  value,
  variant,
}: {
  description: string;
  title: string;
  value: number;
  variant: ProgressBarContentVariant;
}) => (
  <>
    {variant === "minimal" ? (
      <>
        <Spacer height={14} />
        <ProgressTrack value={value} />
      </>
    ) : (
      <ItemContent item={{ description, title, value }} variant={variant} />
    )}
  </>
);

export const ProgressBarColumnsContent = ({
  items,
  variant,
}: {
  items: readonly [ProgressBarItem, ProgressBarItem];
  variant: ProgressBarColumnsVariant;
}) => {
  const contentVariant = getContentVariant(variant) as Exclude<
    ProgressBarContentVariant,
    "minimal"
  >;

  return (
    <Section style={tableStyle}>
      <Fragment>
        <Row>
          <Column className="progress-column" style={{ verticalAlign: "top" }}>
            <ItemContent item={items[0]} variant={contentVariant} />
          </Column>
          <Column
            className="progress-column-gap"
            width={44}
            style={{ fontSize: 0, lineHeight: "1px", width: "44px" }}
          >
            &zwj;
          </Column>
          <Column className="progress-column" style={{ verticalAlign: "top" }}>
            <ItemContent item={items[1]} variant={contentVariant} />
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const GroupHeading = ({ children }: { children: ReactNode }) => (
  <EmailHeading
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "18px",
      fontWeight: 700,
      lineHeight: "28px",
      marginBottom: "24px",
    }}
    as="h3"
  >
    {children}
  </EmailHeading>
);

const GroupItem = ({ item }: { item: ProgressBarItem }) => (
  <>
    <EmailHeading
      style={{
        ...textBase,
        color: colors.label,
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
        marginBottom: "10px",
      }}
      as="h3"
    >
      {item.title}
    </EmailHeading>
    <ProgressTrack color={item.color} value={item.value} />
  </>
);

export const ProgressBarGroupContent = ({
  description,
  items,
  title,
  variant,
}: {
  description: string;
  items: readonly ProgressBarItem[];
  title: string;
  variant: ProgressBarPaddedVariant;
}) => {
  const contentVariant = getContentVariant(variant);

  return (
    <>
      {contentVariant === "minimal" ? null : (
        <GroupHeading>{title}</GroupHeading>
      )}
      {contentVariant === "text-top" ? (
        <Description marginBottom={24}>{description}</Description>
      ) : null}
      {items.map((item, index) => (
        <Section key={`${item.title}-${index}`}>
          <GroupItem item={item} />
          {index < items.length - 1 ? <Spacer height={24} /> : null}
        </Section>
      ))}
      {contentVariant === "with-text" ? (
        <Description marginTop={24}>{description}</Description>
      ) : null}
    </>
  );
};

export const ProgressEmailShell = ({
  children,
  horizontalPadding,
  preview,
  theme,
  topSpacer,
}: {
  children: ReactNode;
  horizontalPadding: 24 | 64;
  preview: string;
  theme: EmailThemeTokens;
  topSpacer: 30 | 44;
}) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media only screen and (max-width: 430px) {
              .progress-column { display: block !important; width: 100% !important; }
              .progress-column-gap { display: block !important; width: 100% !important; line-height: 44px !important; }
            }
          `,
        }}
      />
    </Head>
    <Preview>{preview}</Preview>
    <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
      <Section style={{ ...tableStyle, backgroundColor: colors.canvas }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              width={600}
              style={{
                backgroundColor: colors.surface,
                maxWidth: "100%",
                paddingBottom: "44px",
                width: theme.containerWidth,
              }}
            >
              <Section style={tableStyle}>
                <Fragment>
                  <Row>
                    <Column>
                      <Spacer height={topSpacer} />
                      <Section style={tableStyle}>
                        <Fragment>
                          <Row>
                            <Column
                              style={{
                                paddingLeft: `${horizontalPadding}px`,
                                paddingRight: `${horizontalPadding}px`,
                              }}
                            >
                              {children}
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
    </Body>
  </Html>
);
