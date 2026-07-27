import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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

const clamp = (value: number) => Math.min(100, Math.max(0, value));

const getContentVariant = (
  variant: ProgressBarPaddedVariant
): ProgressBarContentVariant =>
  variant.replace("-padded", "") as ProgressBarContentVariant;

const isPaddedVariant = (variant: ProgressBarPaddedVariant) =>
  variant.endsWith("-padded");

const Heading = ({
  children,
  color = colors.dark,
  size = 14,
}: {
  children: ReactNode;
  color?: string;
  size?: 14 | 18;
}) => (
  <MjmlText
    color={color}
    fontFamily={fontFamily}
    fontSize={`${size}px`}
    fontWeight={size === 18 ? "700" : "600"}
    lineHeight={size === 18 ? "28px" : "20px"}
    padding="0"
  >
    {children}
  </MjmlText>
);

const Description = ({ children }: { children: ReactNode }) => (
  <MjmlText
    color={colors.muted}
    fontFamily={fontFamily}
    fontSize="12px"
    lineHeight="16px"
    padding="0"
  >
    {children}
  </MjmlText>
);

const ProgressTrack = ({
  color = "#2dd4bf",
  value,
}: Pick<ProgressBarItem, "color" | "value">) => {
  const progress = clamp(value);
  return (
    <>
      <MjmlText
        align="right"
        color={colors.dark}
        fontFamily={fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding="0 0 6px"
      >
        {progress}%
      </MjmlText>
      <MjmlButton
        align="left"
        backgroundColor={color}
        borderRadius="9999px"
        containerBackgroundColor={colors.track}
        innerPadding="4px 0"
        lineHeight="0"
        padding="0"
        width={`${Math.max(progress, 1)}%`}
      >
        &zwj;
      </MjmlButton>
    </>
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
      <>
        <MjmlSpacer height="14px" />
        <Description>{item.description}</Description>
      </>
    ) : null}
    <MjmlSpacer height="14px" />
    <ProgressTrack color={item.color} value={item.value} />
    {variant === "with-text" && item.description ? (
      <>
        <MjmlSpacer height="14px" />
        <Description>{item.description}</Description>
      </>
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
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      {variant === "minimal" ? (
        <ProgressTrack value={value} />
      ) : (
        <ItemContent item={{ description, title, value }} variant={variant} />
      )}
    </MjmlColumn>
  </MjmlSection>
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
    <MjmlSection padding="0">
      {items.map((item, index) => (
        <MjmlColumn
          key={`${item.title}-${index}`}
          padding={index === 0 ? "0 22px 0 0" : "0 0 0 22px"}
          verticalAlign="top"
          width="50%"
        >
          <ItemContent item={item} variant={contentVariant} />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

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
        <MjmlSection padding="0 0 24px">
          <MjmlColumn padding="0">
            <Heading size={18}>{title}</Heading>
          </MjmlColumn>
        </MjmlSection>
      )}
      {contentVariant === "text-top" ? (
        <MjmlSection padding="0 0 24px">
          <MjmlColumn padding="0">
            <Description>{description}</Description>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      {items.map((item, index) => (
        <Fragment key={`${item.title}-${index}`}>
          <MjmlSection padding="0">
            <MjmlColumn padding="0">
              <Heading color={colors.label}>{item.title}</Heading>
              <MjmlSpacer height="10px" />
              <ProgressTrack color={item.color} value={item.value} />
            </MjmlColumn>
          </MjmlSection>
          {index < items.length - 1 ? (
            <MjmlSection padding="0">
              <MjmlColumn padding="0">
                <MjmlSpacer height="24px" />
              </MjmlColumn>
            </MjmlSection>
          ) : null}
        </Fragment>
      ))}
      {contentVariant === "with-text" ? (
        <MjmlSection padding="24px 0 0">
          <MjmlColumn padding="0">
            <Description>{description}</Description>
          </MjmlColumn>
        </MjmlSection>
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
  theme: EmailThemeTokens;
  topSpacer: 30 | 44;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor={colors.canvas} width={theme.containerWidth}>
      <MjmlWrapper
        backgroundColor={colors.surface}
        padding={`${topSpacer}px ${horizontalPadding}px 44px`}
      >
        {children}
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

interface ProgressFull_FullWidthProgressBarProps {
  description?: string;
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
  theme?: EmailThemeTokens;
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
