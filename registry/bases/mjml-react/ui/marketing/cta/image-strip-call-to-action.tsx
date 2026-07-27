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
  MjmlGroup,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const CTAEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
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
const CTACopy = ({
  align = "center",
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  primaryButtonBackgroundColor,
  primaryButtonTextColor,
  secondaryButtonBorderColor = "#d1d5db",
  secondaryButtonTextColor = "#4b5563",
  secondaryCtaHref,
  secondaryCtaLabel,
  subtext,
  textColor,
}: {
  align?: "center" | "left" | "right";
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  headingColor: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonTextColor?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  subtext: string;
  textColor: string;
}) => (
  <>
    <MjmlText
      align={align}
      color={headingColor}
      fontFamily={fontFamily}
      fontSize="30px"
      fontWeight="600"
      lineHeight="36px"
      padding="0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="20px 0 0"
    >
      {subtext}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor={primaryButtonBackgroundColor}
      borderRadius="8px"
      color={primaryButtonTextColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={ctaHref}
      innerPadding="10px 22px"
      lineHeight="24px"
      padding="28px 0 0"
    >
      {ctaLabel}
    </MjmlButton>
    {secondaryCtaLabel ? (
      <MjmlButton
        align={align}
        backgroundColor="transparent"
        border={`1px solid ${secondaryButtonBorderColor}`}
        borderRadius="8px"
        color={secondaryButtonTextColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={secondaryCtaHref}
        innerPadding="9px 21px"
        lineHeight="24px"
        padding="12px 0 0"
      >
        {secondaryCtaLabel}
      </MjmlButton>
    ) : null}
  </>
);
type Cta_CTAWithImageStripVariant =
  | "boxed-right"
  | "boxed-left"
  | "full-right"
  | "full-left";
interface Cta_CTAWithImageStripProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc1?: string;
  imageAlt1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageSrc3?: string;
  imageAlt3?: string;
  imageSrc4?: string;
  imageAlt4?: string;
  imageSrc5?: string;
  imageAlt5?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  stripBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: Cta_CTAWithImageStripVariant;
}
const Cta_sharedAssets = {
  imageSrc2: "https://emailcn.vercel.app/api/email-assets/cta/strip-2.jpg",
  imageSrc4: "https://emailcn.vercel.app/api/email-assets/cta/strip-4.jpg",
  imageSrc5: "https://emailcn.vercel.app/api/email-assets/cta/strip-5.jpg",
};
const Cta_variantAssets = {
  "boxed-left": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    ...Cta_sharedAssets,
  },
  "boxed-right": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    ...Cta_sharedAssets,
  },
  "full-left": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    ...Cta_sharedAssets,
  },
  "full-right": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    ...Cta_sharedAssets,
  },
} as const;
const Cta_CTAWithImageStripSection = (
  props: Omit<Cta_CTAWithImageStripProps, "theme">
) => {
  const {
    backgroundColor,
    buttonBackgroundColor,
    buttonTextColor,
    ctaHref,
    ctaLabel,
    heading,
    headingColor,
    imageAlt1,
    imageAlt2,
    imageAlt3,
    imageAlt4,
    imageAlt5,
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    imageSrc5,
    subtext,
    textColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#f8fafc",
    ctaHref: "https://example.com/",
    ctaLabel: "Sign up today",
    heading: "Join the Adventure",
    headingColor: "#030712",
    imageAlt1: "",
    imageAlt2: "",
    imageAlt3: "",
    imageAlt4: "",
    imageAlt5: "",
    subtext:
      "Join a community built for explorers. Sign up today and get early access to new collections, gear guides, and exclusive offers made for the outdoors.",
    textColor: "#4b5563",
    variant: "boxed-right" as Cta_CTAWithImageStripVariant,
    ...props,
  };
  const assets = Cta_variantAssets[variant];
  const boxed = variant.startsWith("boxed");
  const left = variant.endsWith("left");
  const images = [
    { alt: imageAlt1, src: imageSrc1 ?? assets.imageSrc1 },
    { alt: imageAlt2, src: imageSrc2 ?? assets.imageSrc2 },
    { alt: imageAlt3, src: imageSrc3 ?? assets.imageSrc3 },
    { alt: imageAlt4, src: imageSrc4 ?? assets.imageSrc4 },
    { alt: imageAlt5, src: imageSrc5 ?? assets.imageSrc5 },
  ];
  const strip = (
    <MjmlGroup width={boxed ? "52%" : "56%"}>
      {[images.slice(0, 3), images.slice(3, 5)].map((column, columnIndex) => (
        <MjmlColumn key={`strip-column-${columnIndex}`} padding="0 6px">
          {column.map((image, index) => (
            <Fragment key={`${image.src}-${index}`}>
              <MjmlImage
                alt={image.alt}
                borderRadius="4px"
                padding="0"
                src={image.src}
                width="128px"
              />
              {index < column.length - 1 ? <MjmlSpacer height="12px" /> : null}
            </Fragment>
          ))}
        </MjmlColumn>
      ))}
    </MjmlGroup>
  );
  const copy = (
    <MjmlColumn
      padding={left ? "24px 0 24px 32px" : "24px 32px 24px 0"}
      verticalAlign="middle"
      width={boxed ? "48%" : "44%"}
    >
      <CTACopy
        align="left"
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        heading={heading}
        headingColor={headingColor}
        primaryButtonBackgroundColor={buttonBackgroundColor}
        primaryButtonTextColor={buttonTextColor}
        subtext={subtext}
        textColor={textColor}
      />
    </MjmlColumn>
  );
  return (
    <MjmlSection
      backgroundColor={backgroundColor}
      padding={boxed ? "24px" : "0"}
    >
      {left ? strip : copy}
      {left ? copy : strip}
    </MjmlSection>
  );
};
const Cta_CTAWithImageStrip = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Cta_CTAWithImageStripProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Join the Adventure"
    theme={theme}
  >
    <Cta_CTAWithImageStripSection {...props} />
  </CTAEmailShell>
);
Cta_CTAWithImageStrip.PreviewProps = {
  theme: defaultTheme,
  variant: "boxed-right",
} satisfies Cta_CTAWithImageStripProps;
const __Cta = Cta_CTAWithImageStrip;
export interface ImageStripCallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
  images?: {
    src: string;
    alt?: string;
  }[];
  placement?: "left" | "right";
  width?: "boxed" | "full";
}
const imageStripItem = (
  image:
    | {
        src: string;
        alt?: string;
      }
    | undefined
) => ({
  alt: image?.alt,
  src: image?.src,
});
export const ImageStripCallToAction = ({
  theme,
  heading,
  description,
  action,
  images,
  placement = "right",
  width = "boxed",
}: ImageStripCallToActionProps) => {
  const { href: ctaHref, label: ctaLabel } = action ?? {};
  const [first, second, third, fourth, fifth] = images ?? [];
  const image1 = imageStripItem(first);
  const image2 = imageStripItem(second);
  const image3 = imageStripItem(third);
  const image4 = imageStripItem(fourth);
  const image5 = imageStripItem(fifth);
  return (
    <__Cta
      ctaHref={ctaHref}
      ctaLabel={ctaLabel}
      heading={heading}
      imageAlt1={image1.alt}
      imageAlt2={image2.alt}
      imageAlt3={image3.alt}
      imageAlt4={image4.alt}
      imageAlt5={image5.alt}
      imageSrc1={image1.src}
      imageSrc2={image2.src}
      imageSrc3={image3.src}
      imageSrc4={image4.src}
      imageSrc5={image5.src}
      subtext={description}
      theme={theme}
      variant={`${width}-${placement}`}
    />
  );
};
ImageStripCallToAction.PreviewProps = {
  placement: "right",
  width: "boxed",
} satisfies ImageStripCallToActionProps;
