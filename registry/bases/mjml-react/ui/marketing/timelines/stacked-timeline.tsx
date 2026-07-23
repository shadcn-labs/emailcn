import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type StackedTimelineVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "completed-left"
  | "completed-right"
  | "accent-left"
  | "accent-right";

export type StackedTimelineLayout = "line" | "boxed";

export interface StackedTimelineProps {
  theme?: EmailThemeTokens;
  variant?: StackedTimelineVariant;
  layout?: StackedTimelineLayout;
  index?: string;
  label?: string;
  title?: string;
  description?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const resolveStackedTimelineStyles = ({
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

export const StackedTimelineSection = (
  props: Omit<StackedTimelineProps, "theme">
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
  const styles = resolveStackedTimelineStyles({
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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

export const StackedTimeline = ({
  theme = defaultTheme,
  ...props
}: StackedTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Total distance</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <StackedTimelineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

StackedTimeline.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies StackedTimelineProps;
