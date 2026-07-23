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

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

const clamp = (value: number) => Math.min(100, Math.max(0, value));

export const getContentVariant = (
  variant: ProgressBarPaddedVariant
): ProgressBarContentVariant =>
  variant.replace("-padded", "") as ProgressBarContentVariant;

export const isPaddedVariant = (variant: ProgressBarPaddedVariant) =>
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
