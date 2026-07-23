import {
  Mjml,
  MjmlBody,
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

export type FullWidthImageWithOverlayVariant =
  | "default"
  | "top-padding"
  | "top-right"
  | "top-left"
  | "top-sides"
  | "right-padding"
  | "right-alt"
  | "bottom-padding"
  | "bottom-right"
  | "bottom-left"
  | "bottom-sides"
  | "left-padding"
  | "left-alt"
  | "sides-padding"
  | "sides-alt";

export interface FullWidthImageWithOverlayProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  heading?: string;
  subtext?: string;
  headingColor?: string;
  textColor?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImageWithOverlayVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const variantPadding: Record<FullWidthImageWithOverlayVariant, string> = {
  "bottom-left": "0 0 24px 24px",
  "bottom-padding": "0 0 24px",
  "bottom-right": "0 24px 24px 0",
  "bottom-sides": "0 24px 24px",
  default: "0",
  "left-alt": "0 0 0 24px",
  "left-padding": "0 0 0 24px",
  "right-alt": "0 24px 0 0",
  "right-padding": "0 24px 0 0",
  "sides-alt": "0 24px",
  "sides-padding": "0 24px",
  "top-left": "24px 0 0 24px",
  "top-padding": "24px 0 0",
  "top-right": "24px 24px 0 0",
  "top-sides": "24px 24px 0",
};

export const FullWidthImageWithOverlaySection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-2.jpg",
  heading = "Nike",
  subtext = "Shoes and accessories",
  headingColor = "#fffffe",
  textColor = "#fffffe",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImageWithOverlayProps, "theme">) => (
  <MjmlWrapper
    backgroundColor={spacerBackgroundColor}
    padding={variantPadding[variant]}
  >
    <MjmlSection
      backgroundColor="#000001"
      backgroundUrl={imageSrc}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      padding="0"
    >
      <MjmlColumn padding="0" verticalAlign="bottom">
        <MjmlSpacer height="292px" />
        <MjmlText
          color={headingColor}
          fontFamily={fontFamily}
          fontSize="24px"
          fontWeight="700"
          lineHeight="32px"
          padding="16px 16px 0"
        >
          {heading}
        </MjmlText>
        <MjmlText
          color={textColor}
          fontFamily={fontFamily}
          fontSize="20px"
          lineHeight="28px"
          padding="0 16px 16px"
        >
          {subtext}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  </MjmlWrapper>
);

export const FullWidthImageWithOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImageWithOverlayProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{props.heading ?? "Nike"}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <FullWidthImageWithOverlaySection {...props} variant={variant} />
    </MjmlBody>
  </Mjml>
);

FullWidthImageWithOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageWithOverlayProps;
