import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Img,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type Cta_CTAWithShiftedImagesVariant =
  | "flush-side-images"
  | "images-offset"
  | "images-offset-alt"
  | "collage";

interface Cta_CTAWithShiftedImagesProps {
  theme?: EmailTheme;
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

const Cta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Cta_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .cta-shifted-stack {
        display: block !important;
      }

      .cta-shifted-mobile-inline {
        display: inline !important;
      }

      .cta-shifted-mobile-table {
        display: table !important;
      }

      .cta-shifted-desktop-only,
      .cta-shifted-collage-edge {
        display: none !important;
      }

      .cta-shifted-full {
        width: 100% !important;
      }

      .cta-shifted-mobile-content {
        padding-top: 24px !important;
      }

      .cta-shifted-collage-row {
        margin-left: auto !important;
        margin-right: auto !important;
        width: auto !important;
      }
    }

    .cta-shifted-button:hover {
      background-color: #4338ca !important;
    }
  `;

const Cta_variantContent = {
  collage: {
    heading: "Be an Explorer",
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-1.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-2.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-3.jpg",
    imageSrc4:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-collage-4.jpg",
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
  "flush-side-images": {
    heading: "Join your team!",
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-split-avatars-1.png",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-split-avatars-2.png",
    imageSrc3: "",
    imageSrc4: "",
    subtext:
      "Your workspace is ready. Confirm your email to start collaborating, sharing, and building together, all in one place.",
  },
  "images-offset": {
    heading: "Be an Explorer",
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-1.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-2.jpg",
    imageSrc3: "",
    imageSrc4: "",
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
  "images-offset-alt": {
    heading: "Be an Explorer",
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-1.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-outwear-2.jpg",
    imageSrc3: "",
    imageSrc4: "",
    subtext:
      "Be part of a network that lives for the outdoors. Confirm your email to stay connected, get new gear updates, and access member rewards.",
  },
} satisfies Record<
  Cta_CTAWithShiftedImagesVariant,
  {
    heading: string;
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageSrc4: string;
    subtext: string;
  }
>;

const Cta_defaultSectionStyles = {
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
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type Cta_SectionProps = Omit<Cta_CTAWithShiftedImagesProps, "theme">;

type Cta_ResolvedProps = typeof Cta_defaultSectionStyles &
  (typeof Cta_variantContent)[Cta_CTAWithShiftedImagesVariant];

const Cta_CTAContent = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  subtext,
  textColor,
}: Cta_ResolvedProps) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ padding: "0 16px", textAlign: "center" }}>
          <Heading
            style={{
              color: headingColor,
              fontFamily: Cta_fontFamily,
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36px",
              margin: 0,
              textAlign: "center",
            }}
            as="h2"
          >
            {heading}
          </Heading>
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: textColor,
              fontFamily: Cta_fontFamily,
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {subtext}
          </Text>
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Link
            className="cta-shifted-button"
            href={ctaHref}
            style={{
              backgroundColor: buttonBackgroundColor,
              borderRadius: "8px",
              color: buttonTextColor,
              display: "inline-block",
              fontFamily: Cta_fontFamily,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              padding: "10px 22px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            {ctaLabel}
          </Link>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

interface Cta_ImageProps {
  alt: string;
  borderRadius?: string;
  className?: string;
  display?: "none";
  float?: "left" | "right";
  src: string;
  width: number;
}

const Cta_CTAImage = ({
  alt,
  borderRadius,
  className,
  display,
  float,
  src,
  width,
}: Cta_ImageProps) => (
  <Img
    alt={alt}
    className={className}
    src={src}
    style={{
      borderRadius,
      display,
      float,
      maxWidth: "100%",
      verticalAlign: "middle",
    }}
    width={width}
  />
);

const Cta_FlushSideImages = (props: Cta_ResolvedProps) => (
  <>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="cta-shifted-stack cta-shifted-full"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            <Cta_CTAImage
              alt={props.imageAlt1}
              src={props.imageSrc1}
              width={140}
            />
            <Cta_CTAImage
              alt={props.imageAlt2}
              className="cta-shifted-mobile-inline"
              display="none"
              float="right"
              src={props.imageSrc2}
              width={140}
            />
          </Column>
          <Column className="cta-shifted-stack cta-shifted-full cta-shifted-mobile-content">
            <Cta_CTAContent {...props} />
          </Column>
          <Column
            className="cta-shifted-desktop-only"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            <Cta_CTAImage
              alt={props.imageAlt2}
              src={props.imageSrc2}
              width={140}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const Cta_OffsetMobileImages = ({
  alternate,
  props,
}: {
  alternate: boolean;
  props: Cta_ResolvedProps;
}) => (
  <Section
    className="cta-shifted-mobile-table"
    style={{ display: "none", margin: "0 auto" }}
  >
    <Fragment>
      <Row>
        <Column
          style={{ paddingTop: alternate ? 0 : "88px", verticalAlign: "top" }}
        >
          <Cta_CTAImage
            alt={props.imageAlt1}
            borderRadius="4px"
            src={props.imageSrc1}
            width={140}
          />
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column
          style={{ paddingTop: alternate ? "88px" : 0, verticalAlign: "top" }}
        >
          <Cta_CTAImage
            alt={props.imageAlt2}
            borderRadius="4px"
            src={props.imageSrc2}
            width={140}
          />
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const Cta_OffsetImages = ({
  alternate,
  props,
}: {
  alternate: boolean;
  props: Cta_ResolvedProps;
}) => (
  <>
    <Cta_OffsetMobileImages alternate={alternate} props={props} />
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="cta-shifted-desktop-only"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            {alternate ? null : (
              <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            )}
            <Cta_CTAImage
              alt={props.imageAlt1}
              borderRadius="0 4px 4px 0"
              src={props.imageSrc1}
              width={140}
            />
          </Column>
          <Column className="cta-shifted-stack cta-shifted-full cta-shifted-mobile-content">
            <Cta_CTAContent {...props} />
          </Column>
          <Column
            className="cta-shifted-desktop-only"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            {alternate ? (
              <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            ) : null}
            <Cta_CTAImage
              alt={props.imageAlt2}
              borderRadius="4px 0 0 4px"
              src={props.imageSrc2}
              width={140}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const Cta_CollageImages = (props: Cta_ResolvedProps) => (
  <>
    <Section className="cta-shifted-collage-row" width="100%">
      <Fragment>
        <Row>
          <Column
            className="cta-shifted-collage-edge"
            style={{ width: "124px" }}
          >
            <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            <Cta_CTAImage
              alt={props.imageAlt1}
              borderRadius="0 4px 4px 0"
              src={props.imageSrc1}
              width={124}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column style={{ width: "140px" }}>
            <Cta_CTAImage
              alt={props.imageAlt2}
              borderRadius="4px"
              src={props.imageSrc2}
              width={140}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column style={{ width: "140px" }}>
            <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            <Cta_CTAImage
              alt={props.imageAlt3}
              borderRadius="4px"
              src={props.imageSrc3}
              width={140}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column
            className="cta-shifted-collage-edge"
            style={{ width: "124px" }}
          >
            <Cta_CTAImage
              alt={props.imageAlt4}
              borderRadius="4px 0 0 4px"
              src={props.imageSrc4}
              width={124}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Cta_CTAContent {...props} />
  </>
);

const Cta_VariantLayout = ({
  props,
  variant,
}: {
  props: Cta_ResolvedProps;
  variant: Cta_CTAWithShiftedImagesVariant;
}) => {
  if (variant === "flush-side-images") {
    return <Cta_FlushSideImages {...props} />;
  }
  if (variant === "images-offset") {
    return <Cta_OffsetImages alternate={false} props={props} />;
  }
  if (variant === "images-offset-alt") {
    return <Cta_OffsetImages alternate props={props} />;
  }
  return <Cta_CollageImages {...props} />;
};

const Cta_CTAWithShiftedImagesSection = (props: Cta_SectionProps) => {
  const variant = props.variant ?? "flush-side-images";
  const resolved = {
    ...Cta_defaultSectionStyles,
    ...Cta_variantContent[variant],
    ...props,
  } as Cta_ResolvedProps;
  const isOffset =
    variant === "images-offset" || variant === "images-offset-alt";
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              paddingTop: isOffset ? "44px" : 0,
              width: "600px",
            }}
          >
            <Cta_VariantLayout props={resolved} variant={variant} />
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const Cta_CTAWithShiftedImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush-side-images",
  ...props
}: Cta_CTAWithShiftedImagesProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: Cta_responsiveStyles }} />
    </EmailHead>
    <Preview>{props.heading ?? Cta_variantContent[variant].heading}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: Cta_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <Cta_CTAWithShiftedImagesSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
