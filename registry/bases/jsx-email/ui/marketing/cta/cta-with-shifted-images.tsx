import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
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

const variantContent = {
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
  CTAWithShiftedImagesVariant,
  {
    heading: string;
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageSrc4: string;
    subtext: string;
  }
>;

const defaultSectionStyles = {
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

type SectionProps = Omit<CTAWithShiftedImagesProps, "theme">;
type ResolvedProps = typeof defaultSectionStyles &
  (typeof variantContent)[CTAWithShiftedImagesVariant];

const CTAContent = ({
  buttonBackgroundColor,
  buttonTextColor,
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  subtext,
  textColor,
}: ResolvedProps) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ padding: "0 16px", textAlign: "center" }}>
          <Heading
            style={{
              color: headingColor,
              fontFamily,
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
              fontFamily,
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
              fontFamily,
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

interface ImageProps {
  alt: string;
  borderRadius?: string;
  className?: string;
  display?: "none";
  float?: "left" | "right";
  src: string;
  width: number;
}

const CTAImage = ({
  alt,
  borderRadius,
  className,
  display,
  float,
  src,
  width,
}: ImageProps) => (
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

const FlushSideImages = (props: ResolvedProps) => (
  <>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="cta-shifted-stack cta-shifted-full"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            <CTAImage alt={props.imageAlt1} src={props.imageSrc1} width={140} />
            <CTAImage
              alt={props.imageAlt2}
              className="cta-shifted-mobile-inline"
              display="none"
              float="right"
              src={props.imageSrc2}
              width={140}
            />
          </Column>
          <Column className="cta-shifted-stack cta-shifted-full cta-shifted-mobile-content">
            <CTAContent {...props} />
          </Column>
          <Column
            className="cta-shifted-desktop-only"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            <CTAImage alt={props.imageAlt2} src={props.imageSrc2} width={140} />
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const OffsetMobileImages = ({
  alternate,
  props,
}: {
  alternate: boolean;
  props: ResolvedProps;
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
          <CTAImage
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
          <CTAImage
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

const OffsetImages = ({
  alternate,
  props,
}: {
  alternate: boolean;
  props: ResolvedProps;
}) => (
  <>
    <OffsetMobileImages alternate={alternate} props={props} />
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
            <CTAImage
              alt={props.imageAlt1}
              borderRadius="0 4px 4px 0"
              src={props.imageSrc1}
              width={140}
            />
          </Column>
          <Column className="cta-shifted-stack cta-shifted-full cta-shifted-mobile-content">
            <CTAContent {...props} />
          </Column>
          <Column
            className="cta-shifted-desktop-only"
            style={{ verticalAlign: "top", width: "140px" }}
          >
            {alternate ? (
              <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            ) : null}
            <CTAImage
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

const CollageImages = (props: ResolvedProps) => (
  <>
    <Section className="cta-shifted-collage-row" width="100%">
      <Fragment>
        <Row>
          <Column
            className="cta-shifted-collage-edge"
            style={{ width: "124px" }}
          >
            <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            <CTAImage
              alt={props.imageAlt1}
              borderRadius="0 4px 4px 0"
              src={props.imageSrc1}
              width={124}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column style={{ width: "140px" }}>
            <CTAImage
              alt={props.imageAlt2}
              borderRadius="4px"
              src={props.imageSrc2}
              width={140}
            />
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column style={{ width: "140px" }}>
            <Section style={{ lineHeight: "88px" }}>&zwj;</Section>
            <CTAImage
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
            <CTAImage
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
    <CTAContent {...props} />
  </>
);

const VariantLayout = ({
  props,
  variant,
}: {
  props: ResolvedProps;
  variant: CTAWithShiftedImagesVariant;
}) => {
  if (variant === "flush-side-images") {
    return <FlushSideImages {...props} />;
  }

  if (variant === "images-offset") {
    return <OffsetImages alternate={false} props={props} />;
  }

  if (variant === "images-offset-alt") {
    return <OffsetImages alternate props={props} />;
  }

  return <CollageImages {...props} />;
};

export const CTAWithShiftedImagesSection = (props: SectionProps) => {
  const variant = props.variant ?? "flush-side-images";
  const resolved = {
    ...defaultSectionStyles,
    ...variantContent[variant],
    ...props,
  } as ResolvedProps;
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
            <VariantLayout props={resolved} variant={variant} />
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const CTAWithShiftedImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush-side-images",
  ...props
}: CTAWithShiftedImagesProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? variantContent[variant].heading}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CTAWithShiftedImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

CTAWithShiftedImages.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-side-images",
} satisfies CTAWithShiftedImagesProps;
