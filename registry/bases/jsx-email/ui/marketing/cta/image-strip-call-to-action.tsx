import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Heading,
  Text,
  Link,
  Column,
  Row,
  Img,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactElement } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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

const Cta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Cta_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .cta-strip-inner {
        margin-left: auto !important;
        margin-right: auto !important;
        width: auto !important;
      }

      .cta-strip-stack {
        display: block !important;
        width: 100% !important;
      }

      .cta-strip-outer-content {
        padding: 0 !important;
      }

      .cta-strip-copy {
        padding-left: 24px !important;
        padding-right: 24px !important;
        text-align: center !important;
      }

      .cta-strip-gap {
        line-height: 20px !important;
      }
    }

    .cta-strip-button:hover {
      background-color: #4338ca !important;
    }
  `;

const Cta_sharedStripAssets = {
  imageSrc2: "https://emailcn.vercel.app/api/email-assets/cta/strip-2.jpg",
  imageSrc4: "https://emailcn.vercel.app/api/email-assets/cta/strip-4.jpg",
  imageSrc5: "https://emailcn.vercel.app/api/email-assets/cta/strip-5.jpg",
};

const Cta_variantContent = {
  "boxed-left": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    stripBackgroundColor: "#030712",
    ...Cta_sharedStripAssets,
  },
  "boxed-right": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-1.jpg",
    imageSrc3:
      "https://emailcn.vercel.app/api/email-assets/cta/strip-cut-2.jpg",
    stripBackgroundColor: "#e5e7eb",
    ...Cta_sharedStripAssets,
  },
  "full-left": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    stripBackgroundColor: "#fffffe",
    ...Cta_sharedStripAssets,
  },
  "full-right": {
    imageSrc1: "https://emailcn.vercel.app/api/email-assets/cta/strip-1.jpg",
    imageSrc3: "https://emailcn.vercel.app/api/email-assets/cta/strip-3.jpg",
    stripBackgroundColor: "#fffffe",
    ...Cta_sharedStripAssets,
  },
} satisfies Record<
  Cta_CTAWithImageStripVariant,
  {
    imageSrc1: string;
    imageSrc2: string;
    imageSrc3: string;
    imageSrc4: string;
    imageSrc5: string;
    stripBackgroundColor: string;
  }
>;

const Cta_defaultSectionStyles = {
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
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Join a community built for explorers. Sign up today and get early access to new collections, gear guides, and exclusive offers made for the outdoors.",
  textColor: "#4b5563",
};

type Cta_SectionProps = Omit<Cta_CTAWithImageStripProps, "theme">;

type Cta_ResolvedProps = typeof Cta_defaultSectionStyles &
  (typeof Cta_variantContent)[Cta_CTAWithImageStripVariant];

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
  <Section className="cta-strip-copy">
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Heading
      style={{
        color: headingColor,
        fontFamily: Cta_fontFamily,
        fontSize: "24px",
        fontWeight: 500,
        lineHeight: "32px",
        margin: 0,
      }}
      as="h2"
    >
      {heading}
    </Heading>
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Text
      style={{
        color: textColor,
        fontFamily: Cta_fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {subtext}
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Link
      className="cta-strip-button"
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
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
  </Section>
);

const Cta_StripImage = ({
  alt,
  borderRadius = "4px",
  src,
}: {
  alt: string;
  borderRadius?: string;
  src: string;
}) => (
  <Img
    alt={alt}
    src={src}
    style={{ borderRadius, maxWidth: "100%", verticalAlign: "middle" }}
    width="116"
  />
);

const Cta_ImageColumn = ({
  children,
  firstOffset = false,
}: {
  children: ReactElement<{
    src: string;
  }>[];
  firstOffset?: boolean;
}) => (
  <Column style={{ verticalAlign: "middle" }}>
    {children.map((child, index) => (
      <Section
        key={child.props.src}
        style={{ marginTop: index === 0 && !firstOffset ? 0 : "24px" }}
      >
        {child}
      </Section>
    ))}
  </Column>
);

const Cta_ImageStrip = ({
  boxed,
  left,
  props,
}: {
  boxed: boolean;
  left: boolean;
  props: Cta_ResolvedProps;
}) => (
  <Column
    className="cta-strip-stack"
    style={{
      backgroundColor: props.stripBackgroundColor,
      width: boxed ? "304px" : undefined,
    }}
  >
    <Section className="cta-strip-inner" width="100%">
      <Fragment>
        <Row>
          {boxed || left ? (
            <Column style={{ width: "24px" }}>&zwj;</Column>
          ) : null}
          <Cta_ImageColumn firstOffset={!boxed}>
            <Cta_StripImage
              alt={props.imageAlt1}
              borderRadius={boxed ? "0 0 4px 4px" : "4px"}
              src={props.imageSrc1}
            />
            <Cta_StripImage alt={props.imageAlt2} src={props.imageSrc2} />
            <Cta_StripImage
              alt={props.imageAlt3}
              borderRadius={boxed ? "4px 4px 0 0" : "4px"}
              src={props.imageSrc3}
            />
          </Cta_ImageColumn>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Cta_ImageColumn>
            <Cta_StripImage alt={props.imageAlt4} src={props.imageSrc4} />
            <Cta_StripImage alt={props.imageAlt5} src={props.imageSrc5} />
          </Cta_ImageColumn>
          {boxed || !left ? (
            <Column style={{ width: "24px" }}>&zwj;</Column>
          ) : null}
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const Cta_CTAWithImageStripSection = (props: Cta_SectionProps) => {
  const variant = props.variant ?? "boxed-right";
  const resolved = {
    ...Cta_defaultSectionStyles,
    ...Cta_variantContent[variant],
    ...props,
  } as Cta_ResolvedProps;
  const boxed = variant.startsWith("boxed");
  const left = variant.endsWith("left");
  const contentCell = (
    <Column
      className="cta-strip-stack"
      style={{
        textAlign: "left",
        verticalAlign: "middle",
        width: boxed ? "228px" : "252px",
      }}
    >
      <Cta_CTAContent {...resolved} />
    </Column>
  );
  const stripCell = (
    <Cta_ImageStrip boxed={boxed} left={left} props={resolved} />
  );
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
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="cta-strip-outer-content"
                    style={{
                      paddingLeft: left ? 0 : "24px",
                      paddingRight: left ? "24px" : 0,
                    }}
                  >
                    <Section>
                      <Fragment>
                        <Row>
                          {left ? stripCell : contentCell}
                          <Column
                            className="cta-strip-stack cta-strip-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </Column>
                          {left ? contentCell : stripCell}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const Cta_CTAWithImageStrip = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "boxed-right",
  ...props
}: Cta_CTAWithImageStripProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: Cta_responsiveStyles }} />
    </EmailHead>
    <Preview>{props.heading ?? Cta_defaultSectionStyles.heading}</Preview>
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
        <Cta_CTAWithImageStripSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
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
