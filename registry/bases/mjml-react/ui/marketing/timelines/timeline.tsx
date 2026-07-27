import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/theme-default";

type CardsTimeline_CardsTimelineVariant =
  | "default"
  | "with-badge"
  | "with-accent"
  | "image-top"
  | "image-bottom";

interface CardsTimeline_CardsTimelineProps {
  theme?: EmailThemeTokens;
  variant?: CardsTimeline_CardsTimelineVariant;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const CardsTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CardsTimeline_CardsTimelineSection = (
  props: Omit<CardsTimeline_CardsTimelineProps, "theme">
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
  let cardBackgroundColor = "#fffffe";
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (variant === "with-badge") {
    cardBackgroundColor = "#f9fafb";
  }
  const image = (
    <MjmlImage
      alt={imageAlt}
      borderRadius="4px"
      padding="0"
      src={imageSrc}
      width="536px"
    />
  );
  return (
    <MjmlSection backgroundColor="#fffffe" padding="16px">
      <MjmlColumn
        backgroundColor={cardBackgroundColor}
        borderRadius={variant === "default" ? "0" : "8px"}
        padding="16px"
      >
        {variant === "image-top" ? (
          <>
            {image}
            <MjmlSpacer height="16px" />
          </>
        ) : null}
        {(() => {
          if (variant === "default") {
            return null;
          }
          return (
            <MjmlButton
              align="left"
              backgroundColor={dark ? "#312e81" : "#eef2ff"}
              borderRadius="9999px"
              color={dark ? "#c7d2fe" : "#4f46e5"}
              fontFamily={CardsTimeline_fontFamily}
              fontSize="12px"
              fontWeight="600"
              innerPadding="3px 8px"
              padding="0"
            >
              {badge}
            </MjmlButton>
          );
        })()}
        <MjmlText
          color={dark ? "#9ca3af" : "#6b7280"}
          fontFamily={CardsTimeline_fontFamily}
          fontSize="13px"
          lineHeight="18px"
          padding={variant === "default" ? "0" : "12px 0 0"}
        >
          {date}
        </MjmlText>
        <MjmlText
          color={dark ? "#fffffe" : "#030712"}
          fontFamily={CardsTimeline_fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="8px 0 0"
        >
          {variant === "with-accent" ? `✓ ${title}` : title}
        </MjmlText>
        <MjmlText
          color={dark ? "#d1d5db" : "#4b5563"}
          fontFamily={CardsTimeline_fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="8px 0 0"
        >
          {description}
        </MjmlText>
        {variant === "image-bottom" ? (
          <>
            <MjmlSpacer height="16px" />
            {image}
          </>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

const CardsTimeline_CardsTimeline = ({
  theme = defaultTheme,
  ...props
}: CardsTimeline_CardsTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <CardsTimeline_CardsTimelineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CardsTimeline_CardsTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimeline_CardsTimelineProps;

const __CardsTimeline = CardsTimeline_CardsTimeline;

type Changelog_ChangelogVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "accent-left"
  | "accent-right";

type Changelog_ChangelogLayout = "line" | "boxed";

interface Changelog_ChangelogProps {
  theme?: EmailThemeTokens;
  variant?: Changelog_ChangelogVariant;
  layout?: Changelog_ChangelogLayout;
  version?: string;
  date?: string;
  category?: string;
  title?: string;
  description?: string;
}

const Changelog_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Changelog_resolveChangelogAlignment = (right: boolean) =>
  right
    ? ({ content: "right", meta: "left" } as const)
    : ({ content: "left", meta: "right" } as const);

const Changelog_ChangelogSection = (
  props: Omit<Changelog_ChangelogProps, "theme">
) => {
  const { category, date, description, layout, title, variant, version } = {
    category: "Refactoring",
    date: "19 Jan",
    description:
      "Introduced a new timeline pattern to clearly represent ordered states and progression, improving clarity across step-based and time-based flows.",
    layout: "line",
    title: "Refined layouts",
    variant: "muted-left",
    version: "v1.0.9",
    ...props,
  };
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent = variant.startsWith("accent");
  const alignment = Changelog_resolveChangelogAlignment(right);
  const borderColor = accent ? "#4f46e5" : "#d1d5db";
  let contentPadding = right ? "0 24px 0 0" : "0 0 0 24px";
  let titleColor = "#030712";
  if (layout === "boxed") {
    contentPadding = "24px";
  }
  if (accent) {
    titleColor = "#4f46e5";
  } else if (muted) {
    titleColor = "#6b7280";
  }
  const meta = (
    <MjmlColumn
      padding={right ? "0 0 0 16px" : "0 16px 0 0"}
      verticalAlign="top"
      width="28%"
    >
      <MjmlButton
        align={alignment.meta}
        backgroundColor={muted ? "#f9fafb" : "#eef2ff"}
        border={`1px solid ${muted ? "#d1d5db" : "#a5b4fc"}`}
        borderRadius="9999px"
        color={muted ? "#4b5563" : "#4f46e5"}
        fontFamily={Changelog_fontFamily}
        fontSize="12px"
        fontWeight="500"
        innerPadding="2px 8px"
        padding="0"
      >
        {version}
      </MjmlButton>
      <MjmlText
        align={alignment.meta}
        color="#030712"
        fontFamily={Changelog_fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="8px 0 0"
      >
        {date}
      </MjmlText>
      <MjmlText
        align={alignment.meta}
        color="#9ca3af"
        fontFamily={Changelog_fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding="0"
      >
        {category}
      </MjmlText>
    </MjmlColumn>
  );
  const content = (
    <MjmlColumn
      backgroundColor={layout === "boxed" ? "#f9fafb" : undefined}
      borderLeft={right ? undefined : `2px solid ${borderColor}`}
      borderRadius={layout === "boxed" ? "8px" : "0"}
      borderRight={right ? `2px solid ${borderColor}` : undefined}
      padding={contentPadding}
      verticalAlign="top"
      width="72%"
    >
      <MjmlText
        align={alignment.content}
        color={titleColor}
        fontFamily={Changelog_fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {title}
      </MjmlText>
      <MjmlText
        align={alignment.content}
        color="#4b5563"
        fontFamily={Changelog_fontFamily}
        fontSize="16px"
        lineHeight="24px"
        padding="12px 0 0"
      >
        {description}
      </MjmlText>
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor="#fffffe" padding="24px">
      {right ? content : meta}
      {right ? meta : content}
    </MjmlSection>
  );
};

const Changelog_Changelog = ({
  theme = defaultTheme,
  ...props
}: Changelog_ChangelogProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Refined layouts</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <Changelog_ChangelogSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Changelog_Changelog.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies Changelog_ChangelogProps;

const __Changelog = Changelog_Changelog;

type SplitTimeline_SplitCardsVariant =
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

interface SplitTimeline_SplitCardsProps {
  theme?: EmailThemeTokens;
  variant?: SplitTimeline_SplitCardsVariant;
  index?: string;
  label?: string;
  date?: string;
  badge?: string;
  title?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const SplitTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SplitTimeline_SplitCardsSection = (
  props: Omit<SplitTimeline_SplitCardsProps, "theme">
) => {
  const {
    badge,
    date,
    description,
    imageAlt,
    imageSrc,
    index,
    label,
    title,
    variant,
  } = {
    badge: "Today",
    date: "Monday",
    description: "Description of event",
    imageAlt: "Placeholder image",
    imageSrc: "https://emailcn.vercel.app/api/email-assets/timelines/cards.jpg",
    index: "01",
    label: "Miles traveled",
    title: "Miles traveled",
    variant: "muted",
    ...props,
  };
  const reverse = variant.endsWith("-reverse");
  const accent = variant.startsWith("accent");
  const imageTop = variant.startsWith("image-top");
  const imageBottom = variant.startsWith("image-bottom");
  const dark = accent || imageTop || imageBottom;
  let cardBackgroundColor = "#fffffe";
  if (dark) {
    cardBackgroundColor = "#030712";
  } else if (variant.startsWith("boxed")) {
    cardBackgroundColor = "#f9fafb";
  }
  const meta = (
    <MjmlColumn
      padding={reverse ? "16px 0 16px 16px" : "16px 16px 16px 0"}
      verticalAlign="top"
      width="24%"
    >
      <MjmlText
        align={reverse ? "left" : "right"}
        color="#030712"
        fontFamily={SplitTimeline_fontFamily}
        fontSize="60px"
        fontWeight="600"
        lineHeight="64px"
        padding="0"
      >
        {index}
      </MjmlText>
      <MjmlText
        align={reverse ? "left" : "right"}
        color="#9ca3af"
        fontFamily={SplitTimeline_fontFamily}
        fontSize="12px"
        fontWeight="600"
        lineHeight="16px"
        padding="0"
      >
        {label}
      </MjmlText>
    </MjmlColumn>
  );
  const image = (
    <MjmlImage
      alt={imageAlt}
      borderRadius="4px"
      padding="0"
      src={imageSrc}
      width="392px"
    />
  );
  const card = (
    <MjmlColumn
      backgroundColor={cardBackgroundColor}
      borderRadius={variant.startsWith("muted") ? "0" : "8px"}
      padding="16px"
      verticalAlign="top"
      width="76%"
    >
      {imageTop ? (
        <>
          {image}
          <MjmlSpacer height="16px" />
        </>
      ) : null}
      <MjmlButton
        align="left"
        backgroundColor={dark ? "#312e81" : "#eef2ff"}
        borderRadius="9999px"
        color={dark ? "#c7d2fe" : "#4f46e5"}
        fontFamily={SplitTimeline_fontFamily}
        fontSize="12px"
        fontWeight="600"
        innerPadding="3px 8px"
        padding="0"
      >
        {badge}
      </MjmlButton>
      <MjmlText
        color={dark ? "#9ca3af" : "#6b7280"}
        fontFamily={SplitTimeline_fontFamily}
        fontSize="13px"
        lineHeight="18px"
        padding="8px 0 0"
      >
        {date}
      </MjmlText>
      <MjmlText
        color={dark ? "#fffffe" : "#030712"}
        fontFamily={SplitTimeline_fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="8px 0 0"
      >
        {title}
      </MjmlText>
      <MjmlText
        color={dark ? "#d1d5db" : "#4b5563"}
        fontFamily={SplitTimeline_fontFamily}
        fontSize="16px"
        lineHeight="24px"
        padding="4px 0 0"
      >
        {description}
      </MjmlText>
      {imageBottom ? (
        <>
          <MjmlSpacer height="16px" />
          {image}
        </>
      ) : null}
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor="#fffffe" padding="16px 24px">
      {reverse ? card : meta}
      {reverse ? meta : card}
    </MjmlSection>
  );
};

const SplitTimeline_SplitCards = ({
  theme = defaultTheme,
  ...props
}: SplitTimeline_SplitCardsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <SplitTimeline_SplitCardsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SplitTimeline_SplitCards.PreviewProps = {
  theme: defaultTheme,
  variant: "muted",
} satisfies SplitTimeline_SplitCardsProps;

const __SplitTimeline = SplitTimeline_SplitCards;

type StackedTimeline_StackedTimelineVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "completed-left"
  | "completed-right"
  | "accent-left"
  | "accent-right";

type StackedTimeline_StackedTimelineLayout = "line" | "boxed";

interface StackedTimeline_StackedTimelineProps {
  theme?: EmailThemeTokens;
  variant?: StackedTimeline_StackedTimelineVariant;
  layout?: StackedTimeline_StackedTimelineLayout;
  index?: string;
  label?: string;
  title?: string;
  description?: string;
}

const StackedTimeline_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const StackedTimeline_resolveStackedTimelineStyles = ({
  accent,
  boxed,
  muted,
  right,
}: {
  accent: boolean;
  boxed: boolean;
  muted: boolean;
  right: boolean;
}) => {
  const borderColor = accent ? "#4f46e5" : "#d1d5db";
  let backgroundColor: string | undefined;
  let contentPadding = right ? "0 24px 0 0" : "0 0 0 24px";
  let titleColor = "#030712";
  if (boxed) {
    backgroundColor = accent ? "#030712" : "#f9fafb";
    contentPadding = "24px";
  }
  if (boxed && accent) {
    titleColor = "#fffffe";
  } else if (accent) {
    titleColor = "#4f46e5";
  } else if (muted) {
    titleColor = "#6b7280";
  }
  return {
    backgroundColor,
    borderLeft: right ? undefined : `2px solid ${borderColor}`,
    borderRight: right ? `2px solid ${borderColor}` : undefined,
    contentAlign: right ? "right" : "left",
    contentPadding,
    descriptionColor: boxed && accent ? "#d1d5db" : "#4b5563",
    metaAlign: right ? "left" : "right",
    metaPadding: right ? "0 0 0 16px" : "0 16px 0 0",
    titleColor,
  } as const;
};

const StackedTimeline_StackedTimelineSection = (
  props: Omit<StackedTimeline_StackedTimelineProps, "theme">
) => {
  const { description, index, label, layout, title, variant } = {
    description:
      "Every mile tells a story. Each step forward adds to the journey, shaping the path ahead and marking progress along the way.",
    layout: "line",
    title: "Total distance",
    variant: "muted-left",
    ...props,
  };
  const boxed = layout === "boxed";
  const right = variant.endsWith("-right");
  const muted = variant.startsWith("muted");
  const accent =
    variant.startsWith("completed") || variant.startsWith("accent");
  const resolvedIndex = index ?? (boxed ? "A" : "01");
  const resolvedLabel = label ?? (boxed ? "Cargo number" : "Miles traveled");
  const styles = StackedTimeline_resolveStackedTimelineStyles({
    accent,
    boxed,
    muted,
    right,
  });
  const meta = (
    <MjmlColumn padding={styles.metaPadding} verticalAlign="top" width="28%">
      <MjmlText
        align={styles.metaAlign}
        color={muted ? "#9ca3af" : "#030712"}
        fontFamily={StackedTimeline_fontFamily}
        fontSize="60px"
        fontWeight="600"
        lineHeight="64px"
        padding="0"
      >
        {resolvedIndex}
      </MjmlText>
      <MjmlText
        align={styles.metaAlign}
        color="#9ca3af"
        fontFamily={StackedTimeline_fontFamily}
        fontSize="12px"
        fontWeight="600"
        lineHeight="16px"
        padding="0"
      >
        {resolvedLabel}
      </MjmlText>
    </MjmlColumn>
  );
  const content = (
    <MjmlColumn
      backgroundColor={styles.backgroundColor}
      borderLeft={styles.borderLeft}
      borderRadius={boxed ? "8px" : "0"}
      borderRight={styles.borderRight}
      padding={styles.contentPadding}
      verticalAlign="top"
      width="72%"
    >
      <MjmlText
        align={styles.contentAlign}
        color={styles.titleColor}
        fontFamily={StackedTimeline_fontFamily}
        fontSize="20px"
        fontWeight="600"
        lineHeight="28px"
        padding="0"
      >
        {variant.startsWith("completed") ? `✓ ${title}` : title}
      </MjmlText>
      <MjmlText
        align={styles.contentAlign}
        color={styles.descriptionColor}
        fontFamily={StackedTimeline_fontFamily}
        fontSize="16px"
        lineHeight="24px"
        padding="12px 0 0"
      >
        {description}
      </MjmlText>
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor="#fffffe" padding="24px">
      {right ? content : meta}
      {right ? meta : content}
    </MjmlSection>
  );
};

const StackedTimeline_StackedTimeline = ({
  theme = defaultTheme,
  ...props
}: StackedTimeline_StackedTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Total distance</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <StackedTimeline_StackedTimelineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedTimeline_StackedTimeline.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies StackedTimeline_StackedTimelineProps;

const __StackedTimeline = StackedTimeline_StackedTimeline;

export interface TimelineItem {
  index?: string;
  label?: string;
  date?: string;
  version?: string;
  category?: string;
  badge?: string;
  title: string;
  description?: string;
  image?: {
    src: string;
    alt?: string;
  };
  completed?: boolean;
}

export interface TimelineProps {
  theme?: Parameters<typeof __Changelog>[0]["theme"];
  items?: TimelineItem[];
  layout?: "line" | "boxed" | "cards" | "split";
  alignment?: "left" | "right";
  appearance?: "muted" | "basic" | "accent";
  reverse?: boolean;
}

const timelineVariant = ({
  alignment,
  appearance,
}: Required<Pick<TimelineProps, "alignment" | "appearance">>) =>
  `${appearance}-${alignment}` as const;

const timelineItemValues = (item: TimelineItem | undefined) => {
  const {
    badge,
    category,
    date,
    description,
    image,
    index,
    label,
    title,
    version,
  } = item ?? {};
  return {
    badge,
    category,
    date,
    description,
    imageAlt: image?.alt,
    imageSrc: image?.src,
    index,
    label,
    title,
    version,
  };
};

export const Timeline = ({
  theme,
  items,
  layout = "line",
  alignment = "left",
  appearance = "basic",
  reverse = false,
}: TimelineProps) => {
  const [item] = items ?? [];
  const props = { ...timelineItemValues(item), theme };
  if (layout === "cards") {
    const variant = (() => {
      if (item?.image) {
        if (reverse) {
          return "image-bottom";
        }
        return "image-top";
      }
      if (item?.badge) {
        return "with-badge";
      }
      if (appearance === "accent") {
        return "with-accent";
      }
      return "default";
    })();
    return <__CardsTimeline {...props} variant={variant} />;
  }
  if (layout === "split") {
    const base = (() => {
      if (item?.image) {
        return "image-top";
      }
      if (appearance === "basic") {
        return "boxed";
      }
      return appearance;
    })();
    const variant = `${base}${reverse ? "-reverse" : ""}`;
    return (
      <__SplitTimeline
        {...props}
        variant={variant as Parameters<typeof __SplitTimeline>[0]["variant"]}
      />
    );
  }
  if (item?.version || item?.category) {
    return (
      <__Changelog
        {...props}
        layout={layout}
        variant={timelineVariant({ alignment, appearance })}
      />
    );
  }
  const variant = item?.completed
    ? `completed-${alignment}`
    : timelineVariant({ alignment, appearance });
  return (
    <__StackedTimeline
      {...props}
      layout={layout}
      variant={variant as Parameters<typeof __StackedTimeline>[0]["variant"]}
    />
  );
};

Timeline.PreviewProps = {
  alignment: "left",
  appearance: "basic",
  layout: "line",
  reverse: false,
} satisfies TimelineProps;
