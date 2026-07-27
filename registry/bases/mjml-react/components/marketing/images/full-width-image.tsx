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
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type FullWidthImage_FullWidthImageVariant =
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

interface FullWidthImage_FullWidthImageProps {
  theme?: EmailTheme;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImage_FullWidthImageVariant;
}

const FullWidthImage_variantPadding: Record<
  FullWidthImage_FullWidthImageVariant,
  string
> = {
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

const FullWidthImage_FullWidthImageSection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  imageAlt = "",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImage_FullWidthImageProps, "theme">) => (
  <MjmlSection
    backgroundColor={spacerBackgroundColor}
    padding={FullWidthImage_variantPadding[variant]}
  >
    <MjmlColumn padding="0">
      <MjmlImage alt={imageAlt} padding="0" src={imageSrc} width="600px" />
    </MjmlColumn>
  </MjmlSection>
);

const FullWidthImage_FullWidthImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImage_FullWidthImageProps) => (
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
        <FullWidthImage_FullWidthImageSection {...props} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthImage_FullWidthImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImage_FullWidthImageProps;

const __FullWidthImage = FullWidthImage_FullWidthImage;

type FullWidthOverlay_FullWidthImageWithOverlayVariant =
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

interface FullWidthOverlay_FullWidthImageWithOverlayProps {
  theme?: EmailTheme;
  imageSrc?: string;
  heading?: string;
  subtext?: string;
  headingColor?: string;
  textColor?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthOverlay_FullWidthImageWithOverlayVariant;
}

const FullWidthOverlay_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullWidthOverlay_variantPadding: Record<
  FullWidthOverlay_FullWidthImageWithOverlayVariant,
  string
> = {
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

const FullWidthOverlay_FullWidthImageWithOverlaySection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-2.jpg",
  heading = "Nike",
  subtext = "Shoes and accessories",
  headingColor = "#fffffe",
  textColor = "#fffffe",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthOverlay_FullWidthImageWithOverlayProps, "theme">) => (
  <MjmlWrapper
    backgroundColor={spacerBackgroundColor}
    padding={FullWidthOverlay_variantPadding[variant]}
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
          fontFamily={FullWidthOverlay_fontFamily}
          fontSize="24px"
          fontWeight="700"
          lineHeight="32px"
          padding="16px 16px 0"
        >
          {heading}
        </MjmlText>
        <MjmlText
          color={textColor}
          fontFamily={FullWidthOverlay_fontFamily}
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

const FullWidthOverlay_FullWidthImageWithOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthOverlay_FullWidthImageWithOverlayProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{props.heading ?? "Nike"}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <FullWidthOverlay_FullWidthImageWithOverlaySection
        {...props}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

FullWidthOverlay_FullWidthImageWithOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthOverlay_FullWidthImageWithOverlayProps;

const __FullWidthOverlay = FullWidthOverlay_FullWidthImageWithOverlay;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface FullWidthImageProps {
  theme?: Parameters<typeof __FullWidthImage>[0]["theme"];
  image?: GalleryImage;
  overlay?: boolean;
  frame?: "none" | "top" | "right" | "bottom" | "left" | "sides";
  frameStyle?: "padding" | "split" | "alternate";
}

const fullWidthVariant = ({
  frame,
  frameStyle,
}: Required<Pick<FullWidthImageProps, "frame" | "frameStyle">>) => {
  if (frame === "none") {
    return "default" as const;
  }
  if (frameStyle === "padding") {
    return `${frame}-padding` as const;
  }
  if (frame === "top" || frame === "bottom") {
    return `${frame}-${frameStyle === "alternate" ? "right" : "left"}` as const;
  }
  return `${frame}-${frameStyle === "alternate" ? "alt" : "padding"}` as const;
};

export const FullWidthImage = ({
  theme,
  image,
  overlay = false,
  frame = "none",
  frameStyle = "padding",
}: FullWidthImageProps) => {
  const variant = fullWidthVariant({ frame, frameStyle });
  return overlay ? (
    <__FullWidthOverlay
      heading={image?.heading}
      imageSrc={image?.src}
      subtext={image?.subtext}
      theme={theme}
      variant={variant}
    />
  ) : (
    <__FullWidthImage
      imageAlt={image?.alt}
      imageSrc={image?.src}
      theme={theme}
      variant={variant}
    />
  );
};

FullWidthImage.PreviewProps = {
  frame: "none",
  frameStyle: "padding",
  overlay: false,
} satisfies FullWidthImageProps;
