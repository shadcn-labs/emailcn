import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Column,
  Heading,
  Text,
  Section,
  Link,
  Row,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FeatureWithProductImageVariant = "image-left" | "image-right";

export interface FeatureWithProductImageProps {
  theme?: TailwindConfig;
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
  variant?: FeatureWithProductImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
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

const defaults = {
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

type SectionProps = Omit<FeatureWithProductImageProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const ProductImage = ({ props }: { props: ResolvedProps }) => (
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

const ProductCopy = ({ props }: { props: ResolvedProps }) => (
  <Column
    className="feature-product-stack"
    style={{ textAlign: "left", verticalAlign: "top" }}
  >
    <Heading
      style={{
        color: props.headingColor,
        fontFamily,
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
        fontFamily,
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
          fontFamily,
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

export const FeatureWithProductImageSection = (props: SectionProps) => {
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const imageLeft = (props.variant ?? "image-left") === "image-left";
  const image = <ProductImage props={resolved} />;
  const copy = <ProductCopy props={resolved} />;

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

export const FeatureWithProductImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "image-left",
  ...props
}: FeatureWithProductImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Powering every payment.</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <FeatureWithProductImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

FeatureWithProductImage.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies FeatureWithProductImageProps;
