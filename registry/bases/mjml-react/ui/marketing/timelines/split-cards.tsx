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

export const SplitCardsSection = (props: Omit<SplitCardsProps, "theme">) => {
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
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
        fontFamily={fontFamily}
        fontSize="12px"
        fontWeight="600"
        innerPadding="3px 8px"
        padding="0"
      >
        {badge}
      </MjmlButton>
      <MjmlText
        color={dark ? "#9ca3af" : "#6b7280"}
        fontFamily={fontFamily}
        fontSize="13px"
        lineHeight="18px"
        padding="8px 0 0"
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
        {title}
      </MjmlText>
      <MjmlText
        color={dark ? "#d1d5db" : "#4b5563"}
        fontFamily={fontFamily}
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

export const SplitCards = ({
  theme = defaultTheme,
  ...props
}: SplitCardsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Miles traveled</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <SplitCardsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

SplitCards.PreviewProps = {
  theme: defaultTheme,
  variant: "muted",
} satisfies SplitCardsProps;
