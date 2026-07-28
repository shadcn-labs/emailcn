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
  MjmlSection,
  MjmlTable,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

const resolveDefaultProps = <Defaults extends object, Props extends object>(
  defaults: Defaults,
  props: Props
) => {
  const supplied = props as Record<string, unknown>;
  const fallbackEntries = Object.entries(defaults).map(([key, value]) => [
    key,
    supplied[key] === undefined ? value : supplied[key],
  ]);

  return {
    ...defaults,
    ...props,
    ...Object.fromEntries(fallbackEntries),
  } as Defaults & Props;
};

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
  heading: ReactNode;
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

const FeatureProductImage = ({
  alt,
  src,
  width,
}: {
  alt: string;
  src: string;
  width: number;
}) => (
  <img
    alt={alt}
    src={src}
    style={{
      borderRadius: "4px",
      display: "inline-block",
      maxWidth: "100%",
      verticalAlign: "middle",
    }}
    width={width}
  />
);

type Feature_FeatureWithMultipleProductImagesVariant =
  | "logo-left"
  | "logo-right"
  | "images-left"
  | "images-right";

interface Feature_FeatureWithMultipleProductImagesProps {
  theme?: EmailTheme;
  heading?: string;
  body?: string;
  largeImageSrc?: string;
  largeImageAlt?: string;
  middleImageSrc?: string;
  middleImageAlt?: string;
  smallImageSrc?: string;
  smallImageAlt?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: Feature_FeatureWithMultipleProductImagesVariant;
}

const Feature_FeatureWithMultipleProductImagesSection = (
  props: Omit<Feature_FeatureWithMultipleProductImagesProps, "theme">
) => {
  const {
    backgroundColor,
    body,
    buttonHref,
    buttonLabel,
    heading,
    headingColor,
    largeImageAlt,
    largeImageSrc,
    linkColor,
    logoAlt,
    logoSrc,
    middleImageAlt,
    middleImageSrc,
    smallImageAlt,
    smallImageSrc,
    textColor,
    variant,
  } = resolveDefaultProps(
    {
      backgroundColor: "#fffffe",
      buttonHref: "https://example.com",
      buttonLabel: "Discover more",
      headingColor: "#030712",
      largeImageAlt: "Product Image 1",
      linkColor: "#4f46e5",
      logoAlt: "Visa",
      logoSrc: emailAsset("logos/logo-visa.png"),
      middleImageAlt: "Product Image 2",
      smallImageAlt: "Product Image 3",
      textColor: "#4b5563",
      variant: "logo-left" as Feature_FeatureWithMultipleProductImagesVariant,
    },
    props
  );
  const logoVariant = variant.startsWith("logo-");
  const artworkRight = variant.endsWith("-right");
  const resolved = logoVariant
    ? {
        body:
          body ??
          "Accepting cards should be quick, secure, and seamless. Discover our tools that simplify every transaction.",
        heading: heading ?? "Built for the journey ahead.",
        large: largeImageSrc ?? emailAsset("feature/feature-2-lg.jpg"),
        middle: middleImageSrc ?? emailAsset("feature/feature-2-sm.jpg"),
        small: smallImageSrc ?? emailAsset("feature/feature-2-sm.jpg"),
      }
    : {
        body:
          body ??
          "Explore durable layers that balance insulation, breathability, and all-day comfort.",
        heading: heading ?? "Outdoor essentials redefined.",
        large: largeImageSrc ?? emailAsset("feature/feature-2-lg-2.jpg"),
        middle: middleImageSrc ?? emailAsset("feature/feature-2-md.jpg"),
        small: smallImageSrc ?? emailAsset("feature/feature-2-sm-2.jpg"),
      };
  const artwork = (
    <MjmlColumn padding="0" verticalAlign="top" width="256px">
      <MjmlTable cellpadding="0" cellspacing="0" padding="0" width="100%">
        {logoVariant ? (
          <>
            <tr>
              <td style={{ verticalAlign: "bottom", width: "144px" }}>
                <FeatureProductImage
                  alt={largeImageAlt}
                  src={resolved.large}
                  width={144}
                />
              </td>
              <td style={{ width: "16px" }}>&nbsp;</td>
              <td
                style={{
                  backgroundColor: "#f3f4f6",
                  borderRadius: "4px",
                  height: "96px",
                  textAlign: "center",
                  verticalAlign: "middle",
                  width: "96px",
                }}
              >
                <FeatureProductImage alt={logoAlt} src={logoSrc} width={50} />
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ height: "16px", lineHeight: "16px" }}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td colSpan={3} style={{ textAlign: "center" }}>
                <FeatureProductImage
                  alt={smallImageAlt}
                  src={resolved.small}
                  width={112}
                />
              </td>
            </tr>
          </>
        ) : (
          <tr>
            <td style={{ textAlign: "right", width: "144px" }}>
              <FeatureProductImage
                alt={largeImageAlt}
                src={resolved.large}
                width={144}
              />
              <div style={{ height: "16px", lineHeight: "16px" }}>&nbsp;</div>
              <FeatureProductImage
                alt={middleImageAlt}
                src={resolved.middle}
                width={112}
              />
            </td>
            <td style={{ width: "16px" }}>&nbsp;</td>
            <td
              style={{
                textAlign: "center",
                verticalAlign: "middle",
                width: "96px",
              }}
            >
              <FeatureProductImage
                alt={smallImageAlt}
                src={resolved.small}
                width={112}
              />
            </td>
          </tr>
        )}
      </MjmlTable>
    </MjmlColumn>
  );
  const copy = (
    <MjmlColumn
      padding="0"
      verticalAlign={logoVariant ? "top" : "middle"}
      width="252px"
    >
      <FeatureCopy
        body={resolved.body}
        buttonHref={buttonHref}
        buttonLabel={buttonLabel}
        heading={
          logoVariant && resolved.heading === "Built for the journey ahead." ? (
            <>
              Built for the <br /> journey ahead.
            </>
          ) : (
            resolved.heading
          )
        }
        headingColor={headingColor}
        linkColor={linkColor}
        textColor={textColor}
      />
    </MjmlColumn>
  );
  const gap = (
    <MjmlColumn padding="0" width="44px">
      <MjmlText padding="0">&nbsp;</MjmlText>
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      {artworkRight ? copy : artwork}
      {gap}
      {artworkRight ? artwork : copy}
    </MjmlSection>
  );
};

const Feature_FeatureWithMultipleProductImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Feature_FeatureWithMultipleProductImagesProps) => (
  <FeatureEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Built for the journey ahead"
    theme={theme}
  >
    <Feature_FeatureWithMultipleProductImagesSection {...props} />
  </FeatureEmailShell>
);

Feature_FeatureWithMultipleProductImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-left",
} satisfies Feature_FeatureWithMultipleProductImagesProps;

const __Feature = Feature_FeatureWithMultipleProductImages;

export interface ProductImagesFeatureProps {
  theme?: Parameters<typeof __Feature>[0]["theme"];
  heading?: string;
  body?: string;
  images?: {
    src: string;
    alt?: string;
  }[];
  logo?: {
    src: string;
    alt?: string;
  };
  action?: {
    href: string;
    label: string;
    iconSrc?: string;
  };
  placement?: "left" | "right";
  presentation?: "images" | "logo";
}

const productImagesFeatureValues = ({
  action,
  images,
  logo,
}: Pick<ProductImagesFeatureProps, "action" | "images" | "logo">) => ({
  arrowIconSrc: action?.iconSrc,
  buttonHref: action?.href,
  buttonLabel: action?.label,
  largeImageAlt: images?.[0]?.alt,
  largeImageSrc: images?.[0]?.src,
  logoAlt: logo?.alt,
  logoSrc: logo?.src,
  middleImageAlt: images?.[1]?.alt,
  middleImageSrc: images?.[1]?.src,
  smallImageAlt: images?.[2]?.alt,
  smallImageSrc: images?.[2]?.src,
});

export const ProductImagesFeature = ({
  theme,
  heading,
  body,
  images,
  logo,
  action,
  placement = "right",
  presentation = "images",
}: ProductImagesFeatureProps) => {
  const values = {
    ...productImagesFeatureValues({ action, images, logo }),
    body,
    heading,
    theme,
  };

  return (
    <__Feature
      {...values}
      variant={
        presentation === "logo" ? `logo-${placement}` : `images-${placement}`
      }
    />
  );
};

ProductImagesFeature.PreviewProps = {
  placement: "right",
  presentation: "images",
} satisfies ProductImagesFeatureProps;
