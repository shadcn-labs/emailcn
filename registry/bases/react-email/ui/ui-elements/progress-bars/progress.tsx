import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Heading,
  Text,
  Row,
  Column,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/themes/react-email/default";

type ProgressBarContentVariant =
  | "minimal"
  | "with-title"
  | "with-text"
  | "text-top";

type ProgressBarPaddedVariant =
  | ProgressBarContentVariant
  | "minimal-padded"
  | "with-title-padded"
  | "with-text-padded"
  | "text-top-padded";

type ProgressBarColumnsVariant = Exclude<
  ProgressBarPaddedVariant,
  "minimal" | "minimal-padded"
>;

interface ProgressBarItem {
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

const getContentVariant = (
  variant: ProgressBarPaddedVariant
): ProgressBarContentVariant =>
  variant.replace("-padded", "") as ProgressBarContentVariant;

const isPaddedVariant = (variant: ProgressBarPaddedVariant) =>
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

const FullWidthProgressContent = ({
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

const ProgressBarColumnsContent = ({
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
  <Heading
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
  </Heading>
);

const GroupItem = ({ item }: { item: ProgressBarItem }) => (
  <>
    <Heading
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
    </Heading>
    <ProgressTrack color={item.color} value={item.value} />
  </>
);

const ProgressBarGroupContent = ({
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

const ProgressEmailShell = ({
  children,
  horizontalPadding,
  preview,
  theme,
  topSpacer,
}: {
  children: ReactNode;
  horizontalPadding: 24 | 64;
  preview: string;
  theme: TailwindConfig;
  topSpacer: 30 | 44;
}) => (
  <Html>
    <EmailHead>
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
    </EmailHead>
    <Preview>{preview}</Preview>
    <Tailwind config={theme}>
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
                  width: "600px",
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
    </Tailwind>
  </Html>
);

interface ProgressFull_FullWidthProgressBarProps {
  description?: string;
  theme?: TailwindConfig;
  title?: string;
  value?: number;
  variant?: ProgressBarContentVariant;
}

const ProgressFull_defaultDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

const ProgressFull_FullWidthProgressBarSection = ({
  description = ProgressFull_defaultDescription,
  title = "FlowSync",
  value,
  variant = "text-top",
}: Omit<ProgressFull_FullWidthProgressBarProps, "theme">) => (
  <FullWidthProgressContent
    description={description}
    title={title}
    value={value ?? (variant === "text-top" ? 42 : 33)}
    variant={variant}
  />
);

const ProgressFull_FullWidthProgressBar = ({
  description = ProgressFull_defaultDescription,
  theme = defaultTheme,
  title = "FlowSync",
  value,
  variant = "text-top",
}: ProgressFull_FullWidthProgressBarProps) => (
  <ProgressEmailShell
    horizontalPadding={64}
    preview="Full width progress bar"
    theme={theme}
    topSpacer={30}
  >
    <ProgressFull_FullWidthProgressBarSection
      description={description}
      title={title}
      value={value}
      variant={variant}
    />
  </ProgressEmailShell>
);

ProgressFull_FullWidthProgressBar.PreviewProps = {
  description: ProgressFull_defaultDescription,
  theme: defaultTheme,
  title: "FlowSync",
  variant: "text-top",
} satisfies ProgressFull_FullWidthProgressBarProps;

const __ProgressFull = ProgressFull_FullWidthProgressBar;

interface ProgressGroup_ProgressBarGroupProps {
  description?: string;
  items?: readonly ProgressBarItem[];
  theme?: TailwindConfig;
  title?: string;
  variant?: ProgressBarPaddedVariant;
}

const ProgressGroup_defaultDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

const ProgressGroup_defaultItems = [
  { color: "#2dd4bf", title: "Ease of use", value: 75 },
  { color: "#fda4af", title: "Cost", value: 50 },
  { color: "#818cf8", title: "Integrations", value: 80 },
] as const satisfies readonly ProgressBarItem[];

const ProgressGroup_ProgressBarGroupSection = ({
  description = ProgressGroup_defaultDescription,
  items = ProgressGroup_defaultItems,
  title = "FlowSync",
  variant = "text-top",
}: Omit<ProgressGroup_ProgressBarGroupProps, "theme">) => (
  <ProgressBarGroupContent
    description={description}
    items={items}
    title={title}
    variant={variant}
  />
);

const ProgressGroup_ProgressBarGroup = ({
  description = ProgressGroup_defaultDescription,
  items = ProgressGroup_defaultItems,
  theme = defaultTheme,
  title = "FlowSync",
  variant = "text-top",
}: ProgressGroup_ProgressBarGroupProps) => (
  <ProgressEmailShell
    horizontalPadding={isPaddedVariant(variant) ? 64 : 24}
    preview="Progress bar group"
    theme={theme}
    topSpacer={44}
  >
    <ProgressGroup_ProgressBarGroupSection
      description={description}
      items={items}
      title={title}
      variant={variant}
    />
  </ProgressEmailShell>
);

ProgressGroup_ProgressBarGroup.PreviewProps = {
  description: ProgressGroup_defaultDescription,
  items: ProgressGroup_defaultItems,
  theme: defaultTheme,
  title: "FlowSync",
  variant: "text-top",
} satisfies ProgressGroup_ProgressBarGroupProps;

const __ProgressGroup = ProgressGroup_ProgressBarGroup;

interface ProgressColumns_ProgressBarColumnsProps {
  items?: readonly [ProgressBarItem, ProgressBarItem];
  theme?: TailwindConfig;
  variant?: ProgressBarColumnsVariant;
}

const ProgressColumns_flowSyncDescription =
  "Automate your workflows across tools with no code required. From CRM syncs to AI-powered triggers, FlowSync keeps your operations moving seamlessly.";

const ProgressColumns_insightDescription =
  "Turn raw data into instant clarity. InsightIQ combines analytics, AI summaries, and interactive reporting to help teams make better decisions faster.";

const ProgressColumns_getDefaultItems = (
  variant: ProgressBarColumnsVariant
): readonly [ProgressBarItem, ProgressBarItem] => {
  const textTop = getContentVariant(variant) === "text-top";
  return [
    {
      color: "#2dd4bf",
      description: ProgressColumns_flowSyncDescription,
      title: "FlowSync",
      value: 33,
    },
    {
      color: "#818cf8",
      description: textTop
        ? ProgressColumns_flowSyncDescription
        : ProgressColumns_insightDescription,
      title: "InsightIQ",
      value: 50,
    },
  ];
};

const ProgressColumns_ProgressBarColumnsSection = ({
  items,
  variant = "with-text",
}: Omit<ProgressColumns_ProgressBarColumnsProps, "theme">) => (
  <ProgressBarColumnsContent
    items={items ?? ProgressColumns_getDefaultItems(variant)}
    variant={variant}
  />
);

const ProgressColumns_ProgressBarColumns = ({
  items,
  theme = defaultTheme,
  variant = "with-text",
}: ProgressColumns_ProgressBarColumnsProps) => (
  <ProgressEmailShell
    horizontalPadding={isPaddedVariant(variant) ? 64 : 24}
    preview="Progress bar columns"
    theme={theme}
    topSpacer={30}
  >
    <ProgressColumns_ProgressBarColumnsSection
      items={items}
      variant={variant}
    />
  </ProgressEmailShell>
);

ProgressColumns_ProgressBarColumns.PreviewProps = {
  theme: defaultTheme,
  variant: "with-text",
} satisfies ProgressColumns_ProgressBarColumnsProps;

const __ProgressColumns = ProgressColumns_ProgressBarColumns;

export interface ProgressItem {
  title?: string;
  description?: string;
  value: number;
  color?: string;
}

export interface ProgressProps {
  theme?: Parameters<typeof __ProgressFull>[0]["theme"];
  items?: ProgressItem[];
  layout?: "single" | "group" | "columns";
  padding?: "none" | "padded";
  content?: "minimal" | "title" | "description" | "text-top";
}

const progressVariant = ({
  content,
  padding,
}: Required<Pick<ProgressProps, "content" | "padding">>) => {
  const base = {
    description: "with-text",
    minimal: "minimal",
    "text-top": "text-top",
    title: "with-title",
  }[content];
  return `${base}${padding === "padded" ? "-padded" : ""}`;
};

export const Progress = ({
  theme,
  items,
  layout = "single",
  padding = "none",
  content = "minimal",
}: ProgressProps) => {
  const variant = progressVariant({ content, padding });
  if (layout === "columns") {
    return (
      <__ProgressColumns
        items={
          items && items.length >= 2
            ? [
                { ...items[0], title: items[0].title ?? "" },
                { ...items[1], title: items[1].title ?? "" },
              ]
            : undefined
        }
        theme={theme}
        variant={variant as Parameters<typeof __ProgressColumns>[0]["variant"]}
      />
    );
  }
  if (layout === "group") {
    return (
      <__ProgressGroup
        items={items?.map((item) => ({
          ...item,
          title: item.title ?? "",
        }))}
        theme={theme}
        variant={variant as Parameters<typeof __ProgressGroup>[0]["variant"]}
      />
    );
  }
  const [item] = items ?? [];
  return (
    <__ProgressFull
      description={item?.description}
      theme={theme}
      title={item?.title}
      value={item?.value}
      variant={
        (variant.replace("-padded", "") || "minimal") as Parameters<
          typeof __ProgressFull
        >[0]["variant"]
      }
    />
  );
};

Progress.PreviewProps = {
  content: "minimal",
  layout: "single",
  padding: "none",
} satisfies ProgressProps;
