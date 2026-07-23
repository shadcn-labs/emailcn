import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export type CTAWithShiftedImagesVariant =
  | "flush-side-images"
  | "images-offset"
  | "images-offset-alt"
  | "collage";

export interface CTAWithShiftedImagesProps {
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
  variant?: CTAWithShiftedImagesVariant;
}

const variantContent = {
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

export const CTAWithShiftedImagesSection = (
  props: Omit<CTAWithShiftedImagesProps, "theme">
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
    variant: "flush-side-images" as CTAWithShiftedImagesVariant,
    ...props,
  };

  const preset = variantContent[variant];
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

export const CTAWithShiftedImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithShiftedImagesProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Call to action"
    theme={theme}
  >
    <CTAWithShiftedImagesSection {...props} />
  </CTAEmailShell>
);

CTAWithShiftedImages.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-side-images",
} satisfies CTAWithShiftedImagesProps;
