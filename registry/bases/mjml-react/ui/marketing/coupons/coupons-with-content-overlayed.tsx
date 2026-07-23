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

export type CouponsWithContentOverlayedVariant =
  | "split"
  | "centered"
  | "code-bottom";

export interface CouponsWithContentOverlayedProps {
  theme?: EmailThemeTokens;
  overline?: string;
  discount?: string;
  code?: string;
  expiry?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  headingColor?: string;
  codeBackgroundColor?: string;
  codeColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CouponsWithContentOverlayedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const backgrounds: Record<CouponsWithContentOverlayedVariant, string> = {
  centered:
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-6.jpg",
  "code-bottom":
    "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-4.jpg",
  split: "https://emailcn.vercel.app/api/email-assets/coupons/bg-image-5.jpg",
};

export const CouponsWithContentOverlayedSection = ({
  overline = "Our biggest sale of the year",
  discount = "20% OFF",
  code = "WINTER20OFF",
  expiry = "until 31/10/2025",
  backgroundImageSrc,
  buttonLabel = "Shop now",
  buttonHref = "https://example.com",
  headingColor = "#fffffe",
  codeBackgroundColor = "#fffffe",
  codeColor = "#030712",
  buttonBackgroundColor = "#030712",
  buttonColor = "#fffffe",
  variant = "code-bottom",
}: Omit<CouponsWithContentOverlayedProps, "theme">) => (
  <MjmlSection
    backgroundColor="#374151"
    backgroundUrl={backgroundImageSrc ?? backgrounds[variant]}
    padding="44px 24px"
  >
    <MjmlColumn padding="0">
      <MjmlText
        align="center"
        color={headingColor}
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
        color={headingColor}
        fontFamily={fontFamily}
        fontSize={variant === "split" ? "36px" : "64px"}
        fontWeight="700"
        lineHeight={variant === "split" ? "44px" : "68px"}
        padding="0"
      >
        {discount}
      </MjmlText>
      <MjmlText
        align="center"
        color={codeColor}
        containerBackgroundColor={codeBackgroundColor}
        fontFamily={fontFamily}
        fontSize="18px"
        fontWeight="600"
        lineHeight="24px"
        padding="12px 18px"
      >
        {variant === "centered" ? expiry : code}
      </MjmlText>
      <MjmlSpacer height={variant === "centered" ? "182px" : "44px"} />
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

export const CouponsWithContentOverlayed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "code-bottom",
  ...props
}: CouponsWithContentOverlayedProps) => (
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
        <CouponsWithContentOverlayedSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

CouponsWithContentOverlayed.PreviewProps = {
  theme: defaultTheme,
  variant: "code-bottom",
} satisfies CouponsWithContentOverlayedProps;
