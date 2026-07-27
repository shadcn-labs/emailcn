import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FeatureEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailTheme;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const FeatureCopy = ({
  align = "left",
  body,
  buttonHref,
  buttonLabel,
  heading,
  headingColor,
  linkColor,
  textColor,
}: {
  align?: "center" | "left" | "right";
  body: string;
  buttonHref: string;
  buttonLabel: string;
  heading: string;
  headingColor: string;
  linkColor: string;
  textColor: string;
}) => (
  <>
    {heading ? (
      <MjmlText
        align={align}
        color={headingColor}
        fontFamily={fontFamily}
        fontSize="24px"
        fontWeight="600"
        lineHeight="32px"
        padding="0"
      >
        {heading}
      </MjmlText>
    ) : null}
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding={heading ? "16px 0 0" : "0"}
    >
      {body}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor="transparent"
      color={linkColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={buttonHref}
      innerPadding="6px 0"
      padding="16px 0 0"
    >
      {buttonLabel} →
    </MjmlButton>
  </>
);

type TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right";

interface TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps {
  theme?: EmailTheme;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesVariant;
}

const TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesSection = ({
  backgroundColor = "#fffffe",
  body = "Premium footwear, outerwear, and lifestyle pieces chosen for quality, comfort, and everyday performance.",
  buttonHref = "https://example.com",
  buttonLabel = "Discover more",
  heading = "Discover the Monarch Collection.",
  headingColor = "#030712",
  imageSrc1 = emailAsset("feature/stripes-bg-1.jpg"),
  imageSrc2 = emailAsset("feature/stripes-bg-2.jpg"),
  linkColor = "#4f46e5",
  logoAlt = "Monarch",
  logoSrc = emailAsset("feature/logo-stripes-1.png"),
  textColor = "#4b5563",
  variant = "logo-top-left",
}: Omit<
  TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps,
  "theme"
>) => {
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const copy = (
    <MjmlColumn padding="0 12px" verticalAlign="top" width="48%">
      {logoAfter ? null : (
        <>
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
          <MjmlSpacer height="24px" />
        </>
      )}
      <FeatureCopy
        body={body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={heading}
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
      {logoAfter ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );
  const images = [
    <MjmlColumn key="feature-double-1" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc1}
        width="132px"
      />
    </MjmlColumn>,
    <MjmlColumn key="feature-double-2" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={contentRight ? emailAsset("feature/stripes-bg-3.jpg") : imageSrc2}
        width="132px"
      />
    </MjmlColumn>,
  ];
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 12px">
      {contentRight ? images : copy}
      {contentRight ? copy : images}
    </MjmlSection>
  );
};

const TallFeatureSplit_FeatureWithDoubleTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Discover the Monarch Collection"
    theme={theme}
  >
    <TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesSection {...props} />
  </FeatureEmailShell>
);

TallFeatureSplit_FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps;

const __TallFeatureSplit =
  TallFeatureSplit_FeatureWithDoubleTallBackgroundImages;

type TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "logo-top-left"
  | "logo-top-right";

interface TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps {
  theme?: EmailTheme;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

const TallFeatureFull_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesSection = ({
  backgroundColor = "#fffffe",
  body = "Discover clinically proven formulas designed to target concerns with precision and clarity.",
  buttonHref = "https://example.com",
  buttonLabel = "Discover more",
  heading = "Science-led skincare essentials.",
  headingColor = "#030712",
  imageSrc1 = emailAsset("feature/stripes-bg-4.jpg"),
  imageSrc2 = emailAsset("feature/stripes-bg-5.jpg"),
  linkColor = "#4f46e5",
  logoAlt = "Monarch",
  logoSrc = emailAsset("feature/logo-stripes-2.png"),
  textColor = "#4b5563",
  variant = "logo-bottom-left",
}: Omit<
  TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps,
  "theme"
>) => {
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const content = (
    <MjmlColumn padding="0 12px" verticalAlign="top" width="48%">
      {logoAfter ? null : (
        <>
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
          <MjmlSpacer height="24px" />
        </>
      )}
      <FeatureCopy
        body={body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading=""
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
      {logoAfter ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlImage
            align="left"
            alt={logoAlt}
            padding="0"
            src={logoSrc}
            width="139px"
          />
        </>
      ) : null}
    </MjmlColumn>
  );
  const images = [
    <MjmlColumn key="feature-full-1" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc1}
        width="132px"
      />
    </MjmlColumn>,
    <MjmlColumn key="feature-full-2" padding="0 8px" width="26%">
      <MjmlImage
        alt=""
        borderRadius="4px"
        padding="0"
        src={imageSrc2}
        width="132px"
      />
    </MjmlColumn>,
  ];
  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 12px">
        <MjmlColumn padding="0">
          <MjmlText
            color={headingColor}
            fontFamily={TallFeatureFull_fontFamily}
            fontSize="24px"
            fontWeight="600"
            lineHeight="32px"
            padding="0"
          >
            {heading}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="12px 12px 44px">
        {contentRight ? images : content}
        {contentRight ? content : images}
      </MjmlSection>
    </>
  );
};

const TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Science-led skincare essentials"
    theme={theme}
  >
    <TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesSection
      {...props}
    />
  </FeatureEmailShell>
);

TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-bottom-left",
} satisfies TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps;

const __TallFeatureFull =
  TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages;

export interface TallBackgroundImagesFeatureProps {
  theme?: Parameters<typeof __TallFeatureSplit>[0]["theme"];
  heading?: string;
  body?: string;
  images?: [
    {
      src: string;
      alt?: string;
    },
    {
      src: string;
      alt?: string;
    },
  ];
  logo?: {
    src: string;
    alt?: string;
  };
  action?: {
    href: string;
    label: string;
    iconSrc?: string;
  };
  logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  titleWidth?: "split" | "full";
}

export const TallBackgroundImagesFeature = ({
  theme,
  heading,
  body,
  images,
  logo,
  action,
  logoPosition = "top-left",
  titleWidth = "split",
}: TallBackgroundImagesFeatureProps) => {
  const Component =
    titleWidth === "full" ? __TallFeatureFull : __TallFeatureSplit;
  return (
    <Component
      arrowIconSrc={action?.iconSrc}
      body={body}
      buttonHref={action?.href}
      buttonLabel={action?.label}
      heading={heading}
      imageSrc1={images?.[0]?.src}
      imageSrc2={images?.[1]?.src}
      logoAlt={logo?.alt}
      logoSrc={logo?.src}
      theme={theme}
      variant={`logo-${logoPosition}`}
    />
  );
};

TallBackgroundImagesFeature.PreviewProps = {
  logoPosition: "top-left",
  titleWidth: "split",
} satisfies TallBackgroundImagesFeatureProps;
