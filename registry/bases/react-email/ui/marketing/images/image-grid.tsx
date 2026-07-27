import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
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
import { defaultTheme } from "@/registry/themes/react-email/default";

type TwoColumnGrid_TwoColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

interface TwoColumnGrid_TwoColumnsImageGridProps {
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
  variant?: TwoColumnGrid_TwoColumnsImageGridVariant;
}

const TwoColumnGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnGrid_responsiveStyles = `
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

const TwoColumnGrid_variantContent = {
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
  TwoColumnGrid_TwoColumnsImageGridVariant,
  {
    imageSrc1: string;
    imageSrc2: string;
    overlay: boolean;
    portrait: boolean;
  }
>;

const TwoColumnGrid_defaultSectionStyles = {
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

type TwoColumnGrid_SectionProps = Omit<
  TwoColumnGrid_TwoColumnsImageGridProps,
  "theme"
>;

type TwoColumnGrid_ResolvedProps = typeof TwoColumnGrid_defaultSectionStyles &
  (typeof TwoColumnGrid_variantContent)[TwoColumnGrid_TwoColumnsImageGridVariant];

const TwoColumnGrid_OverlayCard = ({
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
                fontFamily: TwoColumnGrid_fontFamily,
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
                fontFamily: TwoColumnGrid_fontFamily,
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

const TwoColumnGrid_GridItem = ({
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
    <TwoColumnGrid_OverlayCard
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

const TwoColumnGrid_TwoColumnsImageGridSection = (
  props: TwoColumnGrid_SectionProps
) => {
  const variant = props.variant ?? "square-images";
  const resolved = {
    ...TwoColumnGrid_defaultSectionStyles,
    ...TwoColumnGrid_variantContent[variant],
    ...props,
  } as TwoColumnGrid_ResolvedProps;
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
                    <TwoColumnGrid_GridItem
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
                    <TwoColumnGrid_GridItem
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

const TwoColumnGrid_TwoColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: TwoColumnGrid_TwoColumnsImageGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TwoColumnGrid_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Two columns image grid</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: TwoColumnGrid_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <TwoColumnGrid_TwoColumnsImageGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnGrid_TwoColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies TwoColumnGrid_TwoColumnsImageGridProps;

const __TwoColumnGrid = TwoColumnGrid_TwoColumnsImageGrid;

type ThreeColumnGrid_ThreeColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

interface ThreeColumnGrid_ThreeColumnsImageGridProps {
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
  imageSrc3?: string;
  imageAlt3?: string;
  imageHref3?: string;
  heading3?: string;
  subtext3?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnGrid_ThreeColumnsImageGridVariant;
}

const ThreeColumnGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ThreeColumnGrid_responsiveStyles = `
    @media only screen and (max-width: 430px) {
      .three-grid-plain-stack {
        display: block !important;
        width: 100% !important;
      }

      .three-grid-plain-gap {
        line-height: 24px !important;
      }
    }

    @media only screen and (max-width: 599px) {
      .three-grid-overlay-stack {
        display: block !important;
        width: 100% !important;
      }

      .three-grid-overlay-gap {
        line-height: 24px !important;
      }

      .three-grid-square-overlay-spacer {
        line-height: 256px !important;
      }

      .three-grid-portrait-overlay-spacer {
        line-height: 428px !important;
      }

      .three-grid-overlay-heading {
        font-size: 24px !important;
        line-height: 32px !important;
      }

      .three-grid-overlay-text {
        font-size: 20px !important;
        line-height: 28px !important;
      }
    }
  `;

const ThreeColumnGrid_squareImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-3.jpg",
] as const;

const ThreeColumnGrid_portraitImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-3.jpg",
] as const;

const ThreeColumnGrid_variantContent = {
  "portrait-images": {
    headings: ["Boarding Pass", "L’Atelier", "Cultivate"],
    imageSources: ThreeColumnGrid_portraitImages,
    overlay: false,
    portrait: true,
    subtexts: ["Smooth & Balanced", "Rich & Nutty", "Light & Bright"],
  },
  "portrait-overlay": {
    headings: ["Boarding Pass", "Cultivate", "L’Atelier"],
    imageSources: [
      ThreeColumnGrid_portraitImages[0],
      ThreeColumnGrid_portraitImages[2],
      ThreeColumnGrid_portraitImages[1],
    ],
    overlay: true,
    portrait: true,
    subtexts: ["Smooth & Balanced", "Light & Bright", "Rich & Nutty"],
  },
  "square-images": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: ThreeColumnGrid_squareImages,
    overlay: false,
    portrait: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
  "square-overlay": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: ThreeColumnGrid_squareImages,
    overlay: true,
    portrait: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
} satisfies Record<
  ThreeColumnGrid_ThreeColumnsImageGridVariant,
  {
    headings: readonly [string, string, string];
    imageSources: readonly [string, string, string];
    overlay: boolean;
    portrait: boolean;
    subtexts: readonly [string, string, string];
  }
>;

const ThreeColumnGrid_defaults = {
  backgroundColor: "#fffffe",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#fffffe",
};

type ThreeColumnGrid_SectionProps = Omit<
  ThreeColumnGrid_ThreeColumnsImageGridProps,
  "theme"
>;

type ThreeColumnGrid_ResolvedProps = typeof ThreeColumnGrid_defaults &
  (typeof ThreeColumnGrid_variantContent)[ThreeColumnGrid_ThreeColumnsImageGridVariant] &
  ThreeColumnGrid_SectionProps;

const ThreeColumnGrid_OverlayCard = ({
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
      className={
        portrait
          ? "three-grid-portrait-overlay-spacer"
          : "three-grid-square-overlay-spacer"
      }
      style={{ lineHeight: portrait ? "160px" : "76px" }}
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
              className="three-grid-overlay-heading"
              style={{
                color: headingColor,
                fontFamily: ThreeColumnGrid_fontFamily,
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              className="three-grid-overlay-text"
              style={{
                color: textColor,
                fontFamily: ThreeColumnGrid_fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
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

const ThreeColumnGrid_GridItem = ({
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
    <ThreeColumnGrid_OverlayCard
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
        width="168"
      />
    </Link>
  );

const ThreeColumnGrid_ThreeColumnsImageGridSection = (
  props: ThreeColumnGrid_SectionProps
) => {
  const variant = props.variant ?? "square-images";
  const variantDefaults = ThreeColumnGrid_variantContent[variant];
  const resolved = {
    ...ThreeColumnGrid_defaults,
    ...variantDefaults,
    heading1: variantDefaults.headings[0],
    heading2: variantDefaults.headings[1],
    heading3: variantDefaults.headings[2],
    imageSrc1: variantDefaults.imageSources[0],
    imageSrc2: variantDefaults.imageSources[1],
    imageSrc3: variantDefaults.imageSources[2],
    subtext1: variantDefaults.subtexts[0],
    subtext2: variantDefaults.subtexts[1],
    subtext3: variantDefaults.subtexts[2],
    ...props,
  } as ThreeColumnGrid_ResolvedProps;
  const stackClass = resolved.overlay
    ? "three-grid-overlay-stack"
    : "three-grid-plain-stack";
  const gapClass = resolved.overlay
    ? "three-grid-overlay-gap"
    : "three-grid-plain-gap";
  const items = [
    {
      alt: resolved.imageAlt1,
      heading: resolved.heading1 ?? variantDefaults.headings[0],
      href: resolved.imageHref1,
      src: resolved.imageSrc1 ?? variantDefaults.imageSources[0],
      subtext: resolved.subtext1 ?? variantDefaults.subtexts[0],
    },
    {
      alt: resolved.imageAlt2,
      heading: resolved.heading2 ?? variantDefaults.headings[1],
      href: resolved.imageHref2,
      src: resolved.imageSrc2 ?? variantDefaults.imageSources[1],
      subtext: resolved.subtext2 ?? variantDefaults.subtexts[1],
    },
    {
      alt: resolved.imageAlt3,
      heading: resolved.heading3 ?? variantDefaults.headings[2],
      href: resolved.imageHref3,
      src: resolved.imageSrc3 ?? variantDefaults.imageSources[2],
      subtext: resolved.subtext3 ?? variantDefaults.subtexts[2],
    },
  ];
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
                  {items.map((item, index) => (
                    <Fragment key={item.src}>
                      <Column className={stackClass} style={{ width: "168px" }}>
                        <ThreeColumnGrid_GridItem
                          {...item}
                          headingColor={resolved.headingColor}
                          overlay={resolved.overlay}
                          portrait={resolved.portrait}
                          textColor={resolved.textColor}
                        />
                      </Column>
                      <Column
                        className={
                          index < 2 ? `${stackClass} ${gapClass}` : undefined
                        }
                        style={{ width: "24px" }}
                      >
                        &zwj;
                      </Column>
                    </Fragment>
                  ))}
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

const ThreeColumnGrid_ThreeColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: ThreeColumnGrid_ThreeColumnsImageGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: ThreeColumnGrid_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Three columns image grid</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: ThreeColumnGrid_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <ThreeColumnGrid_ThreeColumnsImageGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

ThreeColumnGrid_ThreeColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies ThreeColumnGrid_ThreeColumnsImageGridProps;

const __ThreeColumnGrid = ThreeColumnGrid_ThreeColumnsImageGrid;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface ImageGridProps {
  theme?: Parameters<typeof __TwoColumnGrid>[0]["theme"];
  images?: GalleryImage[];
  columns?: 2 | 3;
  aspect?: "square" | "portrait";
  overlay?: boolean;
}

const imageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const ImageGrid = ({
  theme,
  images,
  columns = 2,
  aspect = "square",
  overlay = false,
}: ImageGridProps) => {
  const Component = columns === 3 ? __ThreeColumnGrid : __TwoColumnGrid;
  const [first, second, third] = images ?? [];
  const image1 = imageGridItem(first);
  const image2 = imageGridItem(second);
  const image3 = imageGridItem(third);
  return (
    <Component
      imageAlt1={image1.alt}
      imageHref1={image1.href}
      imageSrc1={image1.src}
      heading1={image1.heading}
      subtext1={image1.subtext}
      imageAlt2={image2.alt}
      imageHref2={image2.href}
      imageSrc2={image2.src}
      heading2={image2.heading}
      subtext2={image2.subtext}
      imageAlt3={image3.alt}
      imageHref3={image3.href}
      imageSrc3={image3.src}
      heading3={image3.heading}
      subtext3={image3.subtext}
      theme={theme}
      variant={`${aspect}-${overlay ? "overlay" : "images"}`}
    />
  );
};

ImageGrid.PreviewProps = {
  aspect: "square",
  columns: 2,
  overlay: false,
} satisfies ImageGridProps;
