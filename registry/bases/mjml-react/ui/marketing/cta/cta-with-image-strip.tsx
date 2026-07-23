import {
  MjmlColumn,
  MjmlGroup,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export type CTAWithImageStripVariant =
  | "boxed-right"
  | "boxed-left"
  | "full-right"
  | "full-left";

export interface CTAWithImageStripProps {
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
  variant?: CTAWithImageStripVariant;
}

const sharedAssets = {
  imageSrc2: "https://emailcn.vercel.app/api/email-assets/cta/strip-2.jpg",
  imageSrc4: "https://emailcn.vercel.app/api/email-assets/cta/strip-4.jpg",
  imageSrc5: "https://emailcn.vercel.app/api/email-assets/cta/strip-5.jpg",
};
const variantAssets = {
  "boxed-left": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    ...sharedAssets,
  },
  "boxed-right": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    ...sharedAssets,
  },
  "full-left": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    ...sharedAssets,
  },
  "full-right": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    ...sharedAssets,
  },
} as const;

export const CTAWithImageStripSection = (
  props: Omit<CTAWithImageStripProps, "theme">
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
    variant: "boxed-right" as CTAWithImageStripVariant,
    ...props,
  };

  const assets = variantAssets[variant];
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

export const CTAWithImageStrip = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithImageStripProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Join the Adventure"
    theme={theme}
  >
    <CTAWithImageStripSection {...props} />
  </CTAEmailShell>
);

CTAWithImageStrip.PreviewProps = {
  theme: defaultTheme,
  variant: "boxed-right",
} satisfies CTAWithImageStripProps;
