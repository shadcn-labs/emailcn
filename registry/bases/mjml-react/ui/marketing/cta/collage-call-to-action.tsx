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
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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

type Cta_CTAWithShiftedImagesVariant =
  | "flush-side-images"
  | "images-offset"
  | "images-offset-alt"
  | "collage";

interface Cta_CTAWithShiftedImagesProps {
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
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: Cta_CTAWithShiftedImagesVariant;
}

const Cta_variantContent = {
  collage: {
    heading: "Be an Explorer",
    images: [
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-1.jpg",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-2.jpg",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-3.jpg",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-4.jpg",
    ],
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
  "flush-side-images": {
    heading: "Join your team!",
    images: [
      "https://emailcn.vercel.app/api/email-assets/cta/cta-split-avatars-1.png",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-split-avatars-2.png",
      "",
      "",
    ],
    subtext:
      "Your workspace is ready. Confirm your email to start collaborating, sharing, and building together, all in one place.",
  },
  "images-offset": {
    heading: "Be an Explorer",
    images: [
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-1.jpg",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-2.jpg",
      "",
      "",
    ],
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
  "images-offset-alt": {
    heading: "Be an Explorer",
    images: [
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-1.jpg",
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-2.jpg",
      "",
      "",
    ],
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
} as const;

const Cta_CTAWithShiftedImagesSection = (
  props: Omit<Cta_CTAWithShiftedImagesProps, "theme">
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
    imageSrc1,
    imageSrc2,
    imageSrc3,
    imageSrc4,
    subtext,
    textColor,
    variant,
  } = {
    backgroundColor: "#fffffe",
    buttonBackgroundColor: "#4f46e5",
    buttonTextColor: "#f8fafc",
    ctaHref: "https://example.com/",
    ctaLabel: "Confirm your email",
    headingColor: "#030712",
    imageAlt1: "",
    imageAlt2: "",
    imageAlt3: "",
    imageAlt4: "",
    textColor: "#4b5563",
    variant: "flush-side-images" as Cta_CTAWithShiftedImagesVariant,
    ...props,
  };
  const preset = Cta_variantContent[variant];
  const images = [
    { alt: imageAlt1, src: imageSrc1 ?? preset.images[0] },
    { alt: imageAlt2, src: imageSrc2 ?? preset.images[1] },
    { alt: imageAlt3, src: imageSrc3 ?? preset.images[2] },
    { alt: imageAlt4, src: imageSrc4 ?? preset.images[3] },
  ].filter((image) => image.src);
  const copy = (
    <MjmlColumn padding="24px" verticalAlign="middle" width="52%">
      <CTACopy
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        heading={heading ?? preset.heading}
        headingColor={headingColor}
        primaryButtonBackgroundColor={buttonBackgroundColor}
        primaryButtonTextColor={buttonTextColor}
        subtext={subtext ?? preset.subtext}
        textColor={textColor}
      />
    </MjmlColumn>
  );
  if (variant === "collage") {
    return (
      <>
        <MjmlSection backgroundColor={backgroundColor} padding="0 12px 12px">
          {images.map((image, index) => (
            <MjmlColumn
              key={`${image.src}-${index}`}
              padding="0 6px"
              width="25%"
            >
              <MjmlImage
                alt={image.alt}
                borderRadius="4px"
                padding="0"
                src={image.src}
                width="132px"
              />
            </MjmlColumn>
          ))}
        </MjmlSection>
        <MjmlSection backgroundColor={backgroundColor} padding="12px 64px 44px">
          {copy}
        </MjmlSection>
      </>
    );
  }
  const alternate = variant === "images-offset-alt";
  const first = (
    <MjmlColumn
      padding={alternate ? "64px 8px 0 0" : "0 8px 64px 0"}
      verticalAlign="middle"
      width="24%"
    >
      <MjmlImage
        alt={images[0]?.alt ?? ""}
        borderRadius="4px"
        padding="0"
        src={images[0]?.src ?? ""}
        width="120px"
      />
    </MjmlColumn>
  );
  const second = (
    <MjmlColumn
      padding={alternate ? "0 0 64px 8px" : "64px 0 0 8px"}
      verticalAlign="middle"
      width="24%"
    >
      <MjmlImage
        alt={images[1]?.alt ?? ""}
        borderRadius="4px"
        padding="0"
        src={images[1]?.src ?? ""}
        width="120px"
      />
    </MjmlColumn>
  );
  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 0">
      {first}
      {copy}
      {second}
    </MjmlSection>
  );
};

const Cta_CTAWithShiftedImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Cta_CTAWithShiftedImagesProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Call to action"
    theme={theme}
  >
    <Cta_CTAWithShiftedImagesSection {...props} />
  </CTAEmailShell>
);

Cta_CTAWithShiftedImages.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-side-images",
} satisfies Cta_CTAWithShiftedImagesProps;

const __Cta = Cta_CTAWithShiftedImages;

export interface CollageCallToActionProps {
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
  treatment?: "offset" | "shifted" | "side" | "collage";
}

export const CollageCallToAction = ({
  theme,
  heading,
  description,
  action,
  images,
  treatment = "side",
}: CollageCallToActionProps) => {
  const variant = {
    collage: "collage",
    offset: "images-offset",
    shifted: "images-offset-alt",
    side: "flush-side-images",
  }[treatment];
  return (
    <__Cta
      ctaHref={action?.href}
      ctaLabel={action?.label}
      heading={heading}
      imageAlt1={images?.[0]?.alt}
      imageAlt2={images?.[1]?.alt}
      imageAlt3={images?.[2]?.alt}
      imageAlt4={images?.[3]?.alt}
      imageSrc1={images?.[0]?.src}
      imageSrc2={images?.[1]?.src}
      imageSrc3={images?.[2]?.src}
      imageSrc4={images?.[3]?.src}
      subtext={description}
      theme={theme}
      variant={variant as Parameters<typeof __Cta>[0]["variant"]}
    />
  );
};

CollageCallToAction.PreviewProps = {
  treatment: "side",
} satisfies CollageCallToActionProps;
