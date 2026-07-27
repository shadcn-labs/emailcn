import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Column,
  Heading,
  Text,
  Section,
  Link,
  Row,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type Feature_FeatureWithProductImageVariant = "image-left" | "image-right";

interface Feature_FeatureWithProductImageProps {
  theme?: EmailTheme;
  heading?: string;
  body?: string;
  imageSrc?: string;
  imageAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: Feature_FeatureWithProductImageVariant;
}

const Feature_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Feature_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .feature-product-stack {
        display: block !important;
        width: 100% !important;
      }

      .feature-product-image {
        width: 100% !important;
      }

      .feature-product-gap {
        line-height: 24px !important;
      }
    }
  `;

const Feature_defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Discover tools that make accepting payments faster, easier, and more reliable, wherever you serve customers.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Powering every payment.",
  headingColor: "#030712",
  imageAlt: "Product Image",
  imageSrc: "https://emailcn.vercel.app/api/email-assets/feature/feature-1.jpg",
  linkColor: "#4f46e5",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type Feature_SectionProps = Omit<Feature_FeatureWithProductImageProps, "theme">;

type Feature_ResolvedProps = typeof Feature_defaults & Feature_SectionProps;

const Feature_ProductImage = ({ props }: { props: Feature_ResolvedProps }) => (
  <Column
    className="feature-product-stack"
    style={{ verticalAlign: "top", width: "188px" }}
  >
    <Img
      alt={props.imageAlt}
      className="feature-product-image"
      src={props.imageSrc}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={188}
    />
  </Column>
);

const Feature_ProductCopy = ({ props }: { props: Feature_ResolvedProps }) => (
  <Column
    className="feature-product-stack"
    style={{ textAlign: "left", verticalAlign: "top" }}
  >
    <Heading
      style={{
        color: props.headingColor,
        fontFamily: Feature_fontFamily,
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "32px",
        margin: 0,
      }}
      as="h2"
    >
      {props.heading}
    </Heading>
    <Text
      style={{
        color: props.textColor,
        fontFamily: Feature_fontFamily,
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: "24px",
        margin: "16px 0 0",
      }}
    >
      {props.body}
    </Text>
    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
    <Section>
      <Link
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily: Feature_fontFamily,
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: 1,
          padding: "6px 0",
          textDecoration: "none",
        }}
      >
        <span style={{ marginRight: "8px" }}>{props.buttonLabel}</span>
        <span>
          <Img
            alt=""
            src={props.arrowIconSrc}
            style={{
              display: "inline",
              maxWidth: "100%",
              verticalAlign: "baseline",
            }}
            width={16}
          />
        </span>
      </Link>
    </Section>
  </Column>
);

const Feature_FeatureWithProductImageSection = (
  props: Feature_SectionProps
) => {
  const resolved = { ...Feature_defaults, ...props } as Feature_ResolvedProps;
  const imageLeft = (props.variant ?? "image-left") === "image-left";
  const image = <Feature_ProductImage props={resolved} />;
  const copy = <Feature_ProductCopy props={resolved} />;
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
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {imageLeft ? image : copy}
                          <Column
                            className="feature-product-stack feature-product-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </Column>
                          {imageLeft ? copy : image}
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

const Feature_FeatureWithProductImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "image-left",
  ...props
}: Feature_FeatureWithProductImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: Feature_responsiveStyles }} />
    </EmailHead>
    <Preview>Powering every payment.</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: Feature_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <Feature_FeatureWithProductImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

Feature_FeatureWithProductImage.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies Feature_FeatureWithProductImageProps;

const __Feature = Feature_FeatureWithProductImage;

export interface ImageFeatureProps {
  theme?: Parameters<typeof __Feature>[0]["theme"];
  heading?: string;
  body?: string;
  image?: {
    src: string;
    alt?: string;
  };
  action?: {
    href: string;
    label: string;
    iconSrc?: string;
  };
  placement?: "left" | "right";
}

export const ImageFeature = ({
  theme,
  heading,
  body,
  image,
  action,
  placement = "right",
}: ImageFeatureProps) => (
  <__Feature
    arrowIconSrc={action?.iconSrc}
    body={body}
    buttonHref={action?.href}
    buttonLabel={action?.label}
    heading={heading}
    imageAlt={image?.alt}
    imageSrc={image?.src}
    theme={theme}
    variant={`image-${placement}`}
  />
);

ImageFeature.PreviewProps = {
  placement: "right",
} satisfies ImageFeatureProps;
