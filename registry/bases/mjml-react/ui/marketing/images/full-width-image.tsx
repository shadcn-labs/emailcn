import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type FullWidthImageVariant =
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

export interface FullWidthImageProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImageVariant;
}

const variantPadding: Record<FullWidthImageVariant, string> = {
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

export const FullWidthImageSection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  imageAlt = "",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImageProps, "theme">) => (
  <MjmlSection
    backgroundColor={spacerBackgroundColor}
    padding={variantPadding[variant]}
  >
    <MjmlColumn padding="0">
      <MjmlImage alt={imageAlt} padding="0" src={imageSrc} width="600px" />
    </MjmlColumn>
  </MjmlSection>
);

export const FullWidthImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Full width image</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <FullWidthImageSection {...props} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageProps;
