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

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type CouponsWithCenteredTextVariant =
  | "impact"
  | "inline"
  | "impact-alt"
  | "impact-background";

export interface CouponsWithCenteredTextProps {
  theme?: EmailThemeTokens;
  overline?: string;
  discount?: string;
  code?: string;
  expiry?: string;
  description?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  codeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CouponsWithCenteredTextVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const CouponsWithCenteredTextSection = (
  props: Omit<CouponsWithCenteredTextProps, "theme">
) => {
  const {
    overline,
    discount,
    code,
    expiry,
    description,
    backgroundImageSrc,
    buttonLabel,
    buttonHref,
    backgroundColor,
    codeBackgroundColor,
    headingColor,
    textColor,
    buttonBackgroundColor,
    buttonColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    backgroundImageSrc:
      "https://emailcn.vercel.app/api/email-assets/coupons/pattern.png",
    buttonBackgroundColor: "#4f46e5",
    buttonColor: "#fffffe",
    buttonHref: "https://example.com",
    buttonLabel: "Shop now",
    code: "WINTER20OFF",
    codeBackgroundColor: "#f3f4f6",
    description:
      "Use code: WINTER20OFF at checkout, or click the link below to automatically apply the discount to your order.",
    discount: "20% OFF",
    expiry: "until 31/10/2025",
    headingColor: "#030712",
    overline: "Our biggest sale of the year",
    textColor: "#4b5563",
    variant: "impact",
    ...props,
  };

  const background = variant === "impact-background";
  const inline = variant === "inline";
  const alt = variant === "impact-alt";

  return (
    <MjmlSection
      backgroundColor={background ? "#111827" : backgroundColor}
      backgroundUrl={background ? backgroundImageSrc : undefined}
      padding="44px 24px"
    >
      <MjmlColumn padding="0">
        <MjmlText
          align="center"
          color={background ? "#fffffe" : headingColor}
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          padding="0"
          textTransform="uppercase"
        >
          {overline}
        </MjmlText>
        <MjmlSpacer height="24px" />
        <MjmlText
          align="center"
          color={background ? "#fffffe" : headingColor}
          fontFamily={fontFamily}
          fontSize={inline ? "36px" : "64px"}
          fontWeight="700"
          lineHeight={inline ? "44px" : "68px"}
          padding="0"
        >
          {inline ? `An extra ${discount}` : discount}
        </MjmlText>
        {alt ? (
          <MjmlText
            align="center"
            color={headingColor}
            fontFamily={fontFamily}
            fontSize="16px"
            lineHeight="24px"
            padding="12px 0 0"
          >
            {expiry}
          </MjmlText>
        ) : null}
        {!inline && !alt && !background ? (
          <MjmlText
            align="center"
            color={headingColor}
            containerBackgroundColor={codeBackgroundColor}
            fontFamily={fontFamily}
            fontSize="18px"
            fontWeight="600"
            lineHeight="24px"
            padding="12px 18px"
          >
            {code}
          </MjmlText>
        ) : null}
        <MjmlSpacer height="24px" />
        <MjmlText
          align="center"
          color={background ? "#f3f4f6" : textColor}
          fontFamily={fontFamily}
          fontSize="16px"
          lineHeight="24px"
          padding="0"
        >
          {description}
        </MjmlText>
        <MjmlSpacer height="44px" />
        <MjmlButton
          backgroundColor={buttonBackgroundColor}
          borderRadius="8px"
          color={buttonColor}
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="500"
          href={buttonHref}
          innerPadding="14px 20px"
          lineHeight="16px"
          padding="0"
        >
          {buttonLabel} →
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const CouponsWithCenteredText = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "impact",
  ...props
}: CouponsWithCenteredTextProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our biggest sale of the year</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <CouponsWithCenteredTextSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CouponsWithCenteredText.PreviewProps = {
  theme: defaultTheme,
  variant: "impact",
} satisfies CouponsWithCenteredTextProps;
