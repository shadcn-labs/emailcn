import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TwoColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

export interface TwoColumnsImageGridProps {
  theme?: TailwindConfig;
  imageSrc1?: string;
  imageAlt1?: string;
  imageHref1?: string;
  heading1?: string;
  subtext1?: string;
  imageSrc2?: string;
  imageAlt2?: string;
  imageHref2?: string;
  heading2?: string;
  subtext2?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnsImageGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 430px) {
    .two-grid-plain-stack {
      display: block !important;
      width: 100% !important;
    }

    .two-grid-plain-gap {
      line-height: 24px !important;
    }
  }

  @media only screen and (max-width: 599px) {
    .two-grid-overlay-stack {
      display: block !important;
      width: 100% !important;
    }

    .two-grid-overlay-gap {
      line-height: 24px !important;
    }

    .two-grid-portrait-overlay-spacer {
      line-height: 384px !important;
    }
  }
`;

const variantContent = {
  "portrait-images": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-2.jpg",
    overlay: false,
    portrait: true,
  },
  "portrait-overlay": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-2.jpg",
    overlay: true,
    portrait: true,
  },
  "square-images": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square-2.jpg",
    overlay: false,
    portrait: false,
  },
  "square-overlay": {
    imageSrc1:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square.jpg",
    imageSrc2:
      "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-square-2.jpg",
    overlay: true,
    portrait: false,
  },
} satisfies Record<
  TwoColumnsImageGridVariant,
  { imageSrc1: string; imageSrc2: string; overlay: boolean; portrait: boolean }
>;

const defaultSectionStyles = {
  backgroundColor: "#fffffe",
  heading1: "The Ordinary.",
  heading2: "Fleurs.7",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  pageBackgroundColor: "#f1f5f9",
  subtext1: "Salicylic Serum",
  subtext2: "Moisturizing Mist",
  textColor: "#fffffe",
};

type SectionProps = Omit<TwoColumnsImageGridProps, "theme">;
type ResolvedProps = typeof defaultSectionStyles &
  (typeof variantContent)[TwoColumnsImageGridVariant];

const OverlayCard = ({
  heading,
  headingColor,
  imageSrc,
  portrait,
  subtext,
  textColor,
}: {
  heading: string;
  headingColor: string;
  imageSrc: string;
  portrait: boolean;
  subtext: string;
  textColor: string;
}) => (
  <Section
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  >
    <Section
      className={portrait ? "two-grid-portrait-overlay-spacer" : undefined}
      style={{ lineHeight: portrait ? "304px" : "172px" }}
    >
      &zwj;
    </Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              background: "linear-gradient(to bottom, transparent, #000001)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <Heading
              style={{
                color: headingColor,
                fontFamily,
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              style={{
                color: textColor,
                fontFamily,
                fontSize: "20px",
                lineHeight: "28px",
                margin: 0,
              }}
            >
              {subtext}
            </Text>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Section>
);

const GridItem = ({
  alt,
  heading,
  headingColor,
  href,
  overlay,
  portrait,
  src,
  subtext,
  textColor,
}: {
  alt: string;
  heading: string;
  headingColor: string;
  href: string;
  overlay: boolean;
  portrait: boolean;
  src: string;
  subtext: string;
  textColor: string;
}) =>
  overlay ? (
    <OverlayCard
      heading={heading}
      headingColor={headingColor}
      imageSrc={src}
      portrait={portrait}
      subtext={subtext}
      textColor={textColor}
    />
  ) : (
    <Link href={href}>
      <Img
        alt={alt}
        src={src}
        style={{
          borderRadius: "4px",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
        width="264"
      />
    </Link>
  );

export const TwoColumnsImageGridSection = (props: SectionProps) => {
  const variant = props.variant ?? "square-images";
  const resolved = {
    ...defaultSectionStyles,
    ...variantContent[variant],
    ...props,
  } as ResolvedProps;
  const stackClass = resolved.overlay
    ? "two-grid-overlay-stack"
    : "two-grid-plain-stack";
  const gapClass = resolved.overlay
    ? "two-grid-overlay-gap"
    : "two-grid-plain-gap";

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
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column className={stackClass} style={{ width: "264px" }}>
                    <GridItem
                      alt={resolved.imageAlt1}
                      heading={resolved.heading1}
                      headingColor={resolved.headingColor}
                      href={resolved.imageHref1}
                      overlay={resolved.overlay}
                      portrait={resolved.portrait}
                      src={resolved.imageSrc1}
                      subtext={resolved.subtext1}
                      textColor={resolved.textColor}
                    />
                  </Column>
                  <Column
                    className={`${stackClass} ${gapClass}`}
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </Column>
                  <Column className={stackClass} style={{ width: "264px" }}>
                    <GridItem
                      alt={resolved.imageAlt2}
                      heading={resolved.heading2}
                      headingColor={resolved.headingColor}
                      href={resolved.imageHref2}
                      overlay={resolved.overlay}
                      portrait={resolved.portrait}
                      src={resolved.imageSrc2}
                      subtext={resolved.subtext2}
                      textColor={resolved.textColor}
                    />
                  </Column>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
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

export const TwoColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: TwoColumnsImageGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Two columns image grid</Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <TwoColumnsImageGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies TwoColumnsImageGridProps;
