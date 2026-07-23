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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
        {variant === "default" ? null : (
          <MjmlButton
            align="left"
            backgroundColor={dark ? "#312e81" : "#eef2ff"}
            borderRadius="9999px"
            color={dark ? "#c7d2fe" : "#4f46e5"}
            fontFamily={fontFamily}
            fontSize="12px"
            fontWeight="600"
            innerPadding="3px 8px"
            padding="0"
          >
            {badge}
          </MjmlButton>
        )}
        <MjmlText
          color={dark ? "#9ca3af" : "#6b7280"}
          fontFamily={fontFamily}
          fontSize="13px"
          lineHeight="18px"
          padding={variant === "default" ? "0" : "12px 0 0"}
        >
          {date}
        </MjmlText>
        <MjmlText
          color={dark ? "#fffffe" : "#030712"}
          fontFamily={fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="8px 0 0"
        >
          {variant === "with-accent" ? `✓ ${title}` : title}
        </MjmlText>
        <MjmlText
          color={dark ? "#d1d5db" : "#4b5563"}
          fontFamily={fontFamily}
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

export const CardsTimeline = ({
  theme = defaultTheme,
  ...props
}: CardsTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <CardsTimelineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CardsTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CardsTimelineProps;
