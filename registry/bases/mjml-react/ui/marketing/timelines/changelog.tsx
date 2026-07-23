import {
  Mjml,
  MjmlBody,
  MjmlButton,
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

export type ChangelogVariant =
  | "muted-left"
  | "muted-right"
  | "basic-left"
  | "basic-right"
  | "accent-left"
  | "accent-right";

export type ChangelogLayout = "line" | "boxed";

export interface ChangelogProps {
  theme?: EmailThemeTokens;
  variant?: ChangelogVariant;
  layout?: ChangelogLayout;
  version?: string;
  date?: string;
  category?: string;
  title?: string;
  description?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const resolveChangelogAlignment = (right: boolean) =>
  right
    ? ({ content: "right", meta: "left" } as const)
    : ({ content: "left", meta: "right" } as const);

export const ChangelogSection = (props: Omit<ChangelogProps, "theme">) => {
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
  const alignment = resolveChangelogAlignment(right);
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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

export const Changelog = ({
  theme = defaultTheme,
  ...props
}: ChangelogProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Refined layouts</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <ChangelogSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Changelog.PreviewProps = {
  layout: "line",
  theme: defaultTheme,
  variant: "muted-left",
} satisfies ChangelogProps;
