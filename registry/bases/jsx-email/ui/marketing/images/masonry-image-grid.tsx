import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

type TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

interface TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps {
  theme?: EmailThemeTokens;
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
  variant?: TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesVariant;
}

const TwoColumnMasonryThree_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnMasonryThree_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .masonry-three-stack {
        display: block !important;
        width: 100% !important;
      }

      .masonry-three-gap {
        line-height: 24px !important;
      }

      .masonry-three-landscape-spacer {
        line-height: 176px !important;
      }

      .masonry-three-portrait-spacer {
        line-height: 384px !important;
      }
    }
  `;

const TwoColumnMasonryThree_defaultSectionStyles = {
  backgroundColor: "#fffffe",
  heading1: "White Glass",
  heading2: "Flow White",
  heading3: "Hydra Blue",
  headingColor: "#fffffe",
  imageAlt1: "",
  imageAlt2: "",
  imageAlt3: "",
  imageHref1: "https://example.com",
  imageHref2: "https://example.com",
  imageHref3: "https://example.com",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-5.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-6.jpg",
  imageSrc3:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-4.jpg",
  pageBackgroundColor: "#f1f5f9",
  subtext1: "Eco-Friendly",
  subtext2: "Sport & Travel",
  subtext3: "Insulated Steel",
  textColor: "#fffffe",
};

type TwoColumnMasonryThree_SectionProps = Omit<
  TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps,
  "theme"
>;

type TwoColumnMasonryThree_ResolvedProps =
  typeof TwoColumnMasonryThree_defaultSectionStyles &
    TwoColumnMasonryThree_SectionProps;

const TwoColumnMasonryThree_OverlayCard = ({
  heading,
  headingColor,
  imageSrc,
  portrait = false,
  subtext,
  textColor,
}: {
  heading: string;
  headingColor: string;
  imageSrc: string;
  portrait?: boolean;
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
          ? "masonry-three-portrait-spacer"
          : "masonry-three-landscape-spacer"
      }
      style={{ lineHeight: portrait ? "316px" : "106px" }}
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
                fontFamily: TwoColumnMasonryThree_fontFamily,
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "28px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              style={{
                color: textColor,
                fontFamily: TwoColumnMasonryThree_fontFamily,
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

const TwoColumnMasonryThree_PlainImage = ({
  alt,
  href,
  src,
}: {
  alt: string;
  href: string;
  src: string;
}) => (
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

const TwoColumnMasonryThree_StackedColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnMasonryThree_ResolvedProps;
}) => (
  <>
    {overlay ? (
      <TwoColumnMasonryThree_OverlayCard
        heading={props.heading1}
        headingColor={props.headingColor}
        imageSrc={props.imageSrc1}
        subtext={props.subtext1}
        textColor={props.textColor}
      />
    ) : (
      <TwoColumnMasonryThree_PlainImage
        alt={props.imageAlt1}
        href={props.imageHref1}
        src={props.imageSrc1}
      />
    )}
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    {overlay ? (
      <TwoColumnMasonryThree_OverlayCard
        heading={props.heading2}
        headingColor={props.headingColor}
        imageSrc={props.imageSrc2}
        subtext={props.subtext2}
        textColor={props.textColor}
      />
    ) : (
      <TwoColumnMasonryThree_PlainImage
        alt={props.imageAlt2}
        href={props.imageHref2}
        src={props.imageSrc2}
      />
    )}
  </>
);

const TwoColumnMasonryThree_PortraitColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnMasonryThree_ResolvedProps;
}) =>
  overlay ? (
    <TwoColumnMasonryThree_OverlayCard
      heading={props.heading3}
      headingColor={props.headingColor}
      imageSrc={props.imageSrc3}
      portrait
      subtext={props.subtext3}
      textColor={props.textColor}
    />
  ) : (
    <TwoColumnMasonryThree_PlainImage
      alt={props.imageAlt3}
      href={props.imageHref3}
      src={props.imageSrc3}
    />
  );

const TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesSection = (
  props: TwoColumnMasonryThree_SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = {
    ...TwoColumnMasonryThree_defaultSectionStyles,
    ...props,
  } as TwoColumnMasonryThree_ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
  const stacked = (
    <TwoColumnMasonryThree_StackedColumn overlay={overlay} props={resolved} />
  );
  const portrait = (
    <TwoColumnMasonryThree_PortraitColumn overlay={overlay} props={resolved} />
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
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column
                    className="masonry-three-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    {stackedLeft ? stacked : portrait}
                  </Column>
                  <Column
                    className="masonry-three-stack masonry-three-gap"
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </Column>
                  <Column
                    className="masonry-three-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    {stackedLeft ? portrait : stacked}
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

const TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: TwoColumnMasonryThree_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Two columns masonry image grid with three images</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TwoColumnMasonryThree_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3ImagesProps;

const __TwoColumnMasonryThree =
  TwoColumnMasonryThree_TwoColumnsMasonryImageGridWith3Images;

type TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-reverse"
  | "stacked-right-reverse"
  | "stacked-left-overlay"
  | "stacked-right-overlay"
  | "stacked-left-overlay-reverse"
  | "stacked-right-overlay-reverse";

interface TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  landscapeImageSrc1?: string;
  landscapeImageAlt1?: string;
  landscapeImageHref1?: string;
  landscapeHeading1?: string;
  landscapeSubtext1?: string;
  landscapeImageSrc2?: string;
  landscapeImageAlt2?: string;
  landscapeImageHref2?: string;
  landscapeHeading2?: string;
  landscapeSubtext2?: string;
  portraitImageSrc?: string;
  portraitImageAlt?: string;
  portraitImageHref?: string;
  portraitHeading?: string;
  portraitSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesVariant;
}

const TwoColumnMasonryFour_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnMasonryFour_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .masonry-four-stack {
        display: block !important;
        width: 100% !important;
      }

      .masonry-four-gap {
        line-height: 24px !important;
      }

      .masonry-four-landscape-spacer {
        line-height: 176px !important;
      }

      .masonry-four-tall-spacer {
        line-height: 384px !important;
      }

      .masonry-four-small-heading {
        font-size: 24px !important;
        line-height: 32px !important;
      }

      .masonry-four-small-text {
        font-size: 20px !important;
        line-height: 28px !important;
      }
    }
  `;

const TwoColumnMasonryFour_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Nemora",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-3.jpg",
  featureSubtext: "Pants and shirts",
  headingColor: "#fffffe",
  landscapeHeading1: "Reckless",
  landscapeHeading2: "Nike",
  landscapeImageAlt1: "",
  landscapeImageAlt2: "",
  landscapeImageHref1: "https://example.com",
  landscapeImageHref2: "https://example.com",
  landscapeImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape.jpg",
  landscapeImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-landscape-2.jpg",
  landscapeSubtext1: "Accessories",
  landscapeSubtext2: "Shoes and accessories",
  pageBackgroundColor: "#f1f5f9",
  portraitHeading: "Omakase",
  portraitImageAlt: "",
  portraitImageHref: "https://example.com",
  portraitImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/2-col-portrait-3.jpg",
  portraitSubtext: "T-shirts and sweats",
  textColor: "#fffffe",
};

type TwoColumnMasonryFour_SectionProps = Omit<
  TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps,
  "theme"
>;

type TwoColumnMasonryFour_ResolvedProps = typeof TwoColumnMasonryFour_defaults &
  TwoColumnMasonryFour_SectionProps;

const TwoColumnMasonryFour_PlainImage = ({
  alt,
  href,
  src,
  width,
}: {
  alt: string;
  href: string;
  src: string;
  width: number;
}) => (
  <Link href={href}>
    <Img
      alt={alt}
      src={src}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={width}
    />
  </Link>
);

const TwoColumnMasonryFour_OverlayCard = ({
  feature = false,
  heading,
  headingColor,
  imageSrc,
  portrait = false,
  subtext,
  textColor,
}: {
  feature?: boolean;
  heading: string;
  headingColor: string;
  imageSrc: string;
  portrait?: boolean;
  subtext: string;
  textColor: string;
}) => {
  let spacer = "106px";
  let spacerClass = "masonry-four-landscape-spacer";
  if (feature) {
    spacer = "304px";
    spacerClass = "masonry-four-tall-spacer";
  } else if (portrait) {
    spacer = "316px";
    spacerClass = "masonry-four-tall-spacer";
  }
  return (
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
      <Section className={spacerClass} style={{ lineHeight: spacer }}>
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
                className={feature ? undefined : "masonry-four-small-heading"}
                style={{
                  color: headingColor,
                  fontFamily: TwoColumnMasonryFour_fontFamily,
                  fontSize: feature ? "24px" : "20px",
                  fontWeight: 700,
                  lineHeight: feature ? "32px" : "28px",
                  margin: 0,
                }}
                as="h4"
              >
                {heading}
              </Heading>
              <Text
                className={feature ? undefined : "masonry-four-small-text"}
                style={{
                  color: textColor,
                  fontFamily: TwoColumnMasonryFour_fontFamily,
                  fontSize: feature ? "20px" : "14px",
                  lineHeight: feature ? "28px" : "20px",
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
};

const TwoColumnMasonryFour_FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnMasonryFour_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
          {overlay ? (
            <TwoColumnMasonryFour_OverlayCard
              feature
              heading={props.featureHeading}
              headingColor={props.headingColor}
              imageSrc={props.featureImageSrc}
              subtext={props.featureSubtext}
              textColor={props.textColor}
            />
          ) : (
            <TwoColumnMasonryFour_PlainImage
              alt={props.featureImageAlt}
              href={props.featureImageHref}
              src={props.featureImageSrc}
              width={552}
            />
          )}
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const TwoColumnMasonryFour_LandscapeStack = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnMasonryFour_ResolvedProps;
}) => (
  <>
    {overlay ? (
      <TwoColumnMasonryFour_OverlayCard
        heading={props.landscapeHeading1}
        headingColor={props.headingColor}
        imageSrc={props.landscapeImageSrc1}
        subtext={props.landscapeSubtext1}
        textColor={props.textColor}
      />
    ) : (
      <TwoColumnMasonryFour_PlainImage
        alt={props.landscapeImageAlt1}
        href={props.landscapeImageHref1}
        src={props.landscapeImageSrc1}
        width={264}
      />
    )}
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    {overlay ? (
      <TwoColumnMasonryFour_OverlayCard
        heading={props.landscapeHeading2}
        headingColor={props.headingColor}
        imageSrc={props.landscapeImageSrc2}
        subtext={props.landscapeSubtext2}
        textColor={props.textColor}
      />
    ) : (
      <TwoColumnMasonryFour_PlainImage
        alt={props.landscapeImageAlt2}
        href={props.landscapeImageHref2}
        src={props.landscapeImageSrc2}
        width={264}
      />
    )}
  </>
);

const TwoColumnMasonryFour_PortraitCard = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: TwoColumnMasonryFour_ResolvedProps;
}) =>
  overlay ? (
    <TwoColumnMasonryFour_OverlayCard
      heading={props.portraitHeading}
      headingColor={props.headingColor}
      imageSrc={props.portraitImageSrc}
      portrait
      subtext={props.portraitSubtext}
      textColor={props.textColor}
    />
  ) : (
    <TwoColumnMasonryFour_PlainImage
      alt={props.portraitImageAlt}
      href={props.portraitImageHref}
      src={props.portraitImageSrc}
      width={264}
    />
  );

const TwoColumnMasonryFour_MasonryRow = ({
  overlay,
  props,
  stackedLeft,
}: {
  overlay: boolean;
  props: TwoColumnMasonryFour_ResolvedProps;
  stackedLeft: boolean;
}) => {
  const landscape = (
    <TwoColumnMasonryFour_LandscapeStack overlay={overlay} props={props} />
  );
  const portrait = (
    <TwoColumnMasonryFour_PortraitCard overlay={overlay} props={props} />
  );
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column
            className="masonry-four-stack"
            style={{ verticalAlign: "top", width: "264px" }}
          >
            {stackedLeft ? landscape : portrait}
          </Column>
          <Column
            className="masonry-four-stack masonry-four-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <Column
            className="masonry-four-stack"
            style={{ verticalAlign: "top", width: "264px" }}
          >
            {stackedLeft ? portrait : landscape}
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesSection = (
  props: TwoColumnMasonryFour_SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = {
    ...TwoColumnMasonryFour_defaults,
    ...props,
  } as TwoColumnMasonryFour_ResolvedProps;
  const overlay = variant.includes("overlay");
  const reverse = variant.endsWith("reverse");
  const stackedLeft = variant.startsWith("stacked-left");
  const feature = (
    <TwoColumnMasonryFour_FeatureRow overlay={overlay} props={resolved} />
  );
  const masonry = (
    <TwoColumnMasonryFour_MasonryRow
      overlay={overlay}
      props={resolved}
      stackedLeft={stackedLeft}
    />
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
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            {reverse ? masonry : feature}
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            {reverse ? feature : masonry}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: TwoColumnMasonryFour_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Two columns masonry image grid with four images</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TwoColumnMasonryFour_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4ImagesProps;

const __TwoColumnMasonryFour =
  TwoColumnMasonryFour_TwoColumnsMasonryImageGridWith4Images;

type ThreeColumnMasonry_ThreeColumnsMasonryImageGridVariant =
  | "stacked-left"
  | "stacked-right"
  | "stacked-left-overlay"
  | "stacked-right-overlay";

interface ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps {
  theme?: EmailThemeTokens;
  stackImageSrc1?: string;
  stackImageAlt1?: string;
  stackImageHref1?: string;
  stackHeading1?: string;
  stackSubtext1?: string;
  stackImageSrc2?: string;
  stackImageAlt2?: string;
  stackImageHref2?: string;
  stackHeading2?: string;
  stackSubtext2?: string;
  wideImageSrc?: string;
  wideImageAlt?: string;
  wideImageHref?: string;
  wideHeading?: string;
  wideSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnMasonry_ThreeColumnsMasonryImageGridVariant;
}

const ThreeColumnMasonry_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ThreeColumnMasonry_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .three-masonry-stack {
        display: block !important;
        width: 100% !important;
      }

      .three-masonry-gap {
        line-height: 24px !important;
      }

      .three-masonry-overlay-spacer {
        line-height: 296px !important;
      }

      .three-masonry-heading {
        font-size: 24px !important;
        line-height: 32px !important;
      }

      .three-masonry-text {
        font-size: 20px !important;
        line-height: 28px !important;
      }
    }
  `;

const ThreeColumnMasonry_defaults = {
  backgroundColor: "#fffffe",
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  stackHeading1: "Gunkan Duo",
  stackHeading2: "Hamachi",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack.jpg",
  stackImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-2.jpg",
  stackSubtext1: "Ikura / Citrus Zest",
  stackSubtext2: "Yellowtail / Herb Dressing",
  textColor: "#fffffe",
  wideHeading: "Nigiri Selection",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry.jpg",
  wideSubtext: "Premium Cuts / Seasonal Fish",
};

type ThreeColumnMasonry_SectionProps = Omit<
  ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps,
  "theme"
>;

type ThreeColumnMasonry_ResolvedProps = typeof ThreeColumnMasonry_defaults &
  ThreeColumnMasonry_SectionProps;

const ThreeColumnMasonry_PlainImage = ({
  alt,
  href,
  src,
  width,
}: {
  alt: string;
  href: string;
  src: string;
  width: number;
}) => (
  <Link href={href}>
    <Img
      alt={alt}
      src={src}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={width}
    />
  </Link>
);

const ThreeColumnMasonry_OverlayCard = ({
  heading,
  headingColor,
  imageSrc,
  spacer,
  subtext,
  textColor,
}: {
  heading: string;
  headingColor: string;
  imageSrc: string;
  spacer: string;
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
      className="three-masonry-overlay-spacer"
      style={{ lineHeight: spacer }}
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
              className="three-masonry-heading"
              style={{
                color: headingColor,
                fontFamily: ThreeColumnMasonry_fontFamily,
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: "28px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              className="three-masonry-text"
              style={{
                color: textColor,
                fontFamily: ThreeColumnMasonry_fontFamily,
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

const ThreeColumnMasonry_StackedColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnMasonry_ResolvedProps;
}) => (
  <>
    {overlay ? (
      <ThreeColumnMasonry_OverlayCard
        heading={props.stackHeading1}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc1}
        spacer="106px"
        subtext={props.stackSubtext1}
        textColor={props.textColor}
      />
    ) : (
      <ThreeColumnMasonry_PlainImage
        alt={props.stackImageAlt1}
        href={props.stackImageHref1}
        src={props.stackImageSrc1}
        width={168}
      />
    )}
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    {overlay ? (
      <ThreeColumnMasonry_OverlayCard
        heading={props.stackHeading2}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc2}
        spacer="86px"
        subtext={props.stackSubtext2}
        textColor={props.textColor}
      />
    ) : (
      <ThreeColumnMasonry_PlainImage
        alt={props.stackImageAlt2}
        href={props.stackImageHref2}
        src={props.stackImageSrc2}
        width={168}
      />
    )}
  </>
);

const ThreeColumnMasonry_WideColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnMasonry_ResolvedProps;
}) =>
  overlay ? (
    <ThreeColumnMasonry_OverlayCard
      heading={props.wideHeading}
      headingColor={props.headingColor}
      imageSrc={props.wideImageSrc}
      spacer="316px"
      subtext={props.wideSubtext}
      textColor={props.textColor}
    />
  ) : (
    <ThreeColumnMasonry_PlainImage
      alt={props.wideImageAlt}
      href={props.wideImageHref}
      src={props.wideImageSrc}
      width={360}
    />
  );

const ThreeColumnMasonry_ThreeColumnsMasonryImageGridSection = (
  props: ThreeColumnMasonry_SectionProps
) => {
  const variant = props.variant ?? "stacked-left";
  const resolved = {
    ...ThreeColumnMasonry_defaults,
    ...props,
  } as ThreeColumnMasonry_ResolvedProps;
  const overlay = variant.endsWith("overlay");
  const stackedLeft = variant.startsWith("stacked-left");
  const stack = (
    <ThreeColumnMasonry_StackedColumn overlay={overlay} props={resolved} />
  );
  const wide = (
    <ThreeColumnMasonry_WideColumn overlay={overlay} props={resolved} />
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
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ width: "24px" }}>&zwj;</Column>
                  <Column
                    className="three-masonry-stack"
                    style={{
                      verticalAlign: "top",
                      width: stackedLeft ? "168px" : "360px",
                    }}
                  >
                    {stackedLeft ? stack : wide}
                  </Column>
                  <Column
                    className="three-masonry-stack three-masonry-gap"
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </Column>
                  <Column
                    className="three-masonry-stack"
                    style={{
                      verticalAlign: "top",
                      width: stackedLeft ? "360px" : "168px",
                    }}
                  >
                    {stackedLeft ? wide : stack}
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

const ThreeColumnMasonry_ThreeColumnsMasonryImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "stacked-left",
  ...props
}: ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: ThreeColumnMasonry_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Three columns masonry image grid</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: ThreeColumnMasonry_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <ThreeColumnMasonry_ThreeColumnsMasonryImageGridSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

ThreeColumnMasonry_ThreeColumnsMasonryImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked-left",
} satisfies ThreeColumnMasonry_ThreeColumnsMasonryImageGridProps;

const __ThreeColumnMasonry = ThreeColumnMasonry_ThreeColumnsMasonryImageGrid;

type ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant =
    | "stacked-left"
    | "stacked-right"
    | "stacked-left-reverse"
    | "stacked-right-reverse"
    | "stacked-left-overlay"
    | "stacked-right-overlay"
    | "stacked-left-overlay-reverse"
    | "stacked-right-overlay-reverse";

interface ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps {
  theme?: EmailThemeTokens;
  featureImageSrc?: string;
  featureImageAlt?: string;
  featureImageHref?: string;
  featureHeading?: string;
  featureSubtext?: string;
  stackImageSrc1?: string;
  stackImageAlt1?: string;
  stackImageHref1?: string;
  stackHeading1?: string;
  stackSubtext1?: string;
  stackImageSrc2?: string;
  stackImageAlt2?: string;
  stackImageHref2?: string;
  stackHeading2?: string;
  stackSubtext2?: string;
  wideImageSrc?: string;
  wideImageAlt?: string;
  wideImageHref?: string;
  wideHeading?: string;
  wideSubtext?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  variant?: ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureVariant;
}

const ThreeColumnMasonryFeature_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ThreeColumnMasonryFeature_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .three-masonry-feature-stack {
        display: block !important;
        width: 100% !important;
      }

      .three-masonry-feature-gap {
        line-height: 24px !important;
      }

      .three-masonry-feature-overlay-spacer {
        line-height: 160px !important;
      }

      .three-masonry-feature-small-spacer {
        line-height: 296px !important;
      }

      .three-masonry-feature-small-heading {
        font-size: 24px !important;
        line-height: 32px !important;
      }

      .three-masonry-feature-small-text {
        font-size: 20px !important;
        line-height: 28px !important;
      }
    }
  `;

const ThreeColumnMasonryFeature_defaults = {
  backgroundColor: "#fffffe",
  featureHeading: "Slope Lines",
  featureImageAlt: "",
  featureImageHref: "https://example.com",
  featureImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-5.jpg",
  featureSubtext: "Optical Ski Illustration",
  headingColor: "#fffffe",
  pageBackgroundColor: "#f1f5f9",
  stackHeading1: "Bold",
  stackHeading2: "Wave",
  stackImageAlt1: "",
  stackImageAlt2: "",
  stackImageHref1: "https://example.com",
  stackImageHref2: "https://example.com",
  stackImageSrc1:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-3.jpg",
  stackImageSrc2:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-stack-4.jpg",
  stackSubtext1: "Typography",
  stackSubtext2: "Fluid form",
  textColor: "#fffffe",
  wideHeading: "Mod Blocks",
  wideImageAlt: "",
  wideImageHref: "https://example.com",
  wideImageSrc:
    "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-masonry-2.jpg",
  wideSubtext: "Monochrome Geometric Pattern",
};

type ThreeColumnMasonryFeature_SectionProps = Omit<
  ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps,
  "theme"
>;

type ThreeColumnMasonryFeature_ResolvedProps =
  typeof ThreeColumnMasonryFeature_defaults &
    ThreeColumnMasonryFeature_SectionProps;

const ThreeColumnMasonryFeature_PlainImage = ({
  alt,
  href,
  src,
  width,
}: {
  alt: string;
  href: string;
  src: string;
  width: number;
}) => (
  <Link href={href}>
    <Img
      alt={alt}
      src={src}
      style={{
        borderRadius: "4px",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={width}
    />
  </Link>
);

const ThreeColumnMasonryFeature_OverlayCard = ({
  feature = false,
  heading,
  headingColor,
  imageSrc,
  spacer,
  subtext,
  textColor,
}: {
  feature?: boolean;
  heading: string;
  headingColor: string;
  imageSrc: string;
  spacer: string;
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
        feature
          ? "three-masonry-feature-overlay-spacer"
          : "three-masonry-feature-small-spacer"
      }
      style={{ lineHeight: spacer }}
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
              className={
                feature ? undefined : "three-masonry-feature-small-heading"
              }
              style={{
                color: headingColor,
                fontFamily: ThreeColumnMasonryFeature_fontFamily,
                fontSize: feature ? "24px" : "20px",
                fontWeight: 700,
                lineHeight: feature ? "32px" : "28px",
                margin: 0,
              }}
              as="h4"
            >
              {heading}
            </Heading>
            <Text
              className={
                feature ? undefined : "three-masonry-feature-small-text"
              }
              style={{
                color: textColor,
                fontFamily: ThreeColumnMasonryFeature_fontFamily,
                fontSize: feature ? "20px" : "14px",
                lineHeight: feature ? "28px" : "20px",
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

const ThreeColumnMasonryFeature_FeatureRow = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnMasonryFeature_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
          {overlay ? (
            <ThreeColumnMasonryFeature_OverlayCard
              feature
              heading={props.featureHeading}
              headingColor={props.headingColor}
              imageSrc={props.featureImageSrc}
              spacer="304px"
              subtext={props.featureSubtext}
              textColor={props.textColor}
            />
          ) : (
            <ThreeColumnMasonryFeature_PlainImage
              alt={props.featureImageAlt}
              href={props.featureImageHref}
              src={props.featureImageSrc}
              width={552}
            />
          )}
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
      </Row>
    </Fragment>
  </Section>
);

const ThreeColumnMasonryFeature_StackedColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnMasonryFeature_ResolvedProps;
}) => (
  <>
    {overlay ? (
      <ThreeColumnMasonryFeature_OverlayCard
        heading={props.stackHeading1}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc1}
        spacer="106px"
        subtext={props.stackSubtext1}
        textColor={props.textColor}
      />
    ) : (
      <ThreeColumnMasonryFeature_PlainImage
        alt={props.stackImageAlt1}
        href={props.stackImageHref1}
        src={props.stackImageSrc1}
        width={168}
      />
    )}
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    {overlay ? (
      <ThreeColumnMasonryFeature_OverlayCard
        heading={props.stackHeading2}
        headingColor={props.headingColor}
        imageSrc={props.stackImageSrc2}
        spacer="106px"
        subtext={props.stackSubtext2}
        textColor={props.textColor}
      />
    ) : (
      <ThreeColumnMasonryFeature_PlainImage
        alt={props.stackImageAlt2}
        href={props.stackImageHref2}
        src={props.stackImageSrc2}
        width={168}
      />
    )}
  </>
);

const ThreeColumnMasonryFeature_WideColumn = ({
  overlay,
  props,
}: {
  overlay: boolean;
  props: ThreeColumnMasonryFeature_ResolvedProps;
}) =>
  overlay ? (
    <ThreeColumnMasonryFeature_OverlayCard
      heading={props.wideHeading}
      headingColor={props.headingColor}
      imageSrc={props.wideImageSrc}
      spacer="316px"
      subtext={props.wideSubtext}
      textColor={props.textColor}
    />
  ) : (
    <ThreeColumnMasonryFeature_PlainImage
      alt={props.wideImageAlt}
      href={props.wideImageHref}
      src={props.wideImageSrc}
      width={360}
    />
  );

const ThreeColumnMasonryFeature_MasonryRow = ({
  equalColumns,
  overlay,
  props,
  stackedLeft,
}: {
  equalColumns: boolean;
  overlay: boolean;
  props: ThreeColumnMasonryFeature_ResolvedProps;
  stackedLeft: boolean;
}) => {
  const stack = (
    <ThreeColumnMasonryFeature_StackedColumn overlay={overlay} props={props} />
  );
  const wide = (
    <ThreeColumnMasonryFeature_WideColumn overlay={overlay} props={props} />
  );
  const stackWidth = equalColumns ? "264px" : "168px";
  const wideWidth = equalColumns ? "264px" : "360px";
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ width: "24px" }}>&zwj;</Column>
          <Column
            className="three-masonry-feature-stack"
            style={{
              verticalAlign: "top",
              width: stackedLeft ? stackWidth : wideWidth,
            }}
          >
            {stackedLeft ? stack : wide}
          </Column>
          <Column
            className="three-masonry-feature-stack three-masonry-feature-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <Column
            className="three-masonry-feature-stack"
            style={{
              verticalAlign: "top",
              width: stackedLeft ? wideWidth : stackWidth,
            }}
          >
            {stackedLeft ? wide : stack}
          </Column>
          <Column style={{ width: "24px" }}>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureSection =
  (props: ThreeColumnMasonryFeature_SectionProps) => {
    const variant = props.variant ?? "stacked-left";
    const resolved = {
      ...ThreeColumnMasonryFeature_defaults,
      ...props,
    } as ThreeColumnMasonryFeature_ResolvedProps;
    const overlay = variant.includes("overlay");
    const reverse = variant.endsWith("reverse");
    const stackedLeft = variant.startsWith("stacked-left");
    const equalColumns = overlay && variant !== "stacked-left-overlay";
    const feature = (
      <ThreeColumnMasonryFeature_FeatureRow
        overlay={overlay}
        props={resolved}
      />
    );
    const masonry = (
      <ThreeColumnMasonryFeature_MasonryRow
        equalColumns={equalColumns}
        overlay={overlay}
        props={resolved}
        stackedLeft={stackedLeft}
      />
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
                paddingBottom: "24px",
                width: "600px",
              }}
            >
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              {reverse ? masonry : feature}
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              {reverse ? feature : masonry}
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    );
  };

const ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature =
  ({
    pageBackgroundColor = "#f1f5f9",
    theme = defaultTheme,
    variant = "stacked-left",
    ...props
  }: ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps) => (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{
            __html: ThreeColumnMasonryFeature_responsiveStyles,
          }}
        />
      </EmailHead>
      <Preview>
        Three columns masonry image grid with full width feature
      </Preview>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: ThreeColumnMasonryFeature_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: theme.containerWidth,
            width: theme.containerWidth,
          }}
        >
          <ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Html>
  );

ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature.PreviewProps =
  {
    theme: defaultTheme,
    variant: "stacked-left",
  } satisfies ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeatureProps;

const __ThreeColumnMasonryFeature =
  ThreeColumnMasonryFeature_ThreeColumnsMasonryImageGridWithFullWidthFeature;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface MasonryImageGridProps {
  theme?: Parameters<typeof __TwoColumnMasonryThree>[0]["theme"];
  images?: GalleryImage[];
  feature?: GalleryImage;
  columns?: 2 | 3;
  stackPosition?: "left" | "right";
  reverse?: boolean;
  overlay?: boolean;
}

const masonryImageGridItem = (image: GalleryImage | undefined) => ({
  alt: image?.alt,
  heading: image?.heading,
  href: image?.href,
  src: image?.src,
  subtext: image?.subtext,
});

export const MasonryImageGrid = ({
  theme,
  images,
  feature,
  columns = 2,
  stackPosition = "left",
  reverse = false,
  overlay = false,
}: MasonryImageGridProps) => {
  const suffix = `${overlay ? "-overlay" : ""}${reverse ? "-reverse" : ""}`;
  const variant = `stacked-${stackPosition}${suffix}`;
  const [first, second, third] = images ?? [];
  const image1 = masonryImageGridItem(first);
  const image2 = masonryImageGridItem(second);
  const image3 = masonryImageGridItem(third);
  if (feature && columns === 3) {
    return (
      <__ThreeColumnMasonryFeature
        featureHeading={feature.heading}
        featureImageAlt={feature.alt}
        featureImageHref={feature.href}
        featureImageSrc={feature.src}
        featureSubtext={feature.subtext}
        stackHeading1={image1.heading}
        stackHeading2={image2.heading}
        stackImageAlt1={image1.alt}
        stackImageAlt2={image2.alt}
        stackImageHref1={image1.href}
        stackImageHref2={image2.href}
        stackImageSrc1={image1.src}
        stackImageSrc2={image2.src}
        stackSubtext1={image1.subtext}
        stackSubtext2={image2.subtext}
        theme={theme}
        variant={
          variant as Parameters<
            typeof __ThreeColumnMasonryFeature
          >[0]["variant"]
        }
        wideHeading={image3.heading}
        wideImageAlt={image3.alt}
        wideImageHref={image3.href}
        wideImageSrc={image3.src}
        wideSubtext={image3.subtext}
      />
    );
  }
  if (feature) {
    return (
      <__TwoColumnMasonryFour
        featureHeading={feature.heading}
        featureImageAlt={feature.alt}
        featureImageHref={feature.href}
        featureImageSrc={feature.src}
        featureSubtext={feature.subtext}
        landscapeHeading1={image1.heading}
        landscapeHeading2={image2.heading}
        landscapeImageAlt1={image1.alt}
        landscapeImageAlt2={image2.alt}
        landscapeImageHref1={image1.href}
        landscapeImageHref2={image2.href}
        landscapeImageSrc1={image1.src}
        landscapeImageSrc2={image2.src}
        landscapeSubtext1={image1.subtext}
        landscapeSubtext2={image2.subtext}
        portraitHeading={image3.heading}
        portraitImageAlt={image3.alt}
        portraitImageHref={image3.href}
        portraitImageSrc={image3.src}
        portraitSubtext={image3.subtext}
        theme={theme}
        variant={
          variant as Parameters<typeof __TwoColumnMasonryFour>[0]["variant"]
        }
      />
    );
  }
  if (columns === 3) {
    return (
      <__ThreeColumnMasonry
        stackHeading1={image1.heading}
        stackHeading2={image2.heading}
        stackImageAlt1={image1.alt}
        stackImageAlt2={image2.alt}
        stackImageHref1={image1.href}
        stackImageHref2={image2.href}
        stackImageSrc1={image1.src}
        stackImageSrc2={image2.src}
        stackSubtext1={image1.subtext}
        stackSubtext2={image2.subtext}
        theme={theme}
        variant={
          variant.replace("-reverse", "") as Parameters<
            typeof __ThreeColumnMasonry
          >[0]["variant"]
        }
        wideHeading={image3.heading}
        wideImageAlt={image3.alt}
        wideImageHref={image3.href}
        wideImageSrc={image3.src}
        wideSubtext={image3.subtext}
      />
    );
  }
  return (
    <__TwoColumnMasonryThree
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
      variant={
        variant.replace("-reverse", "") as Parameters<
          typeof __TwoColumnMasonryThree
        >[0]["variant"]
      }
    />
  );
};

MasonryImageGrid.PreviewProps = {
  columns: 2,
  overlay: false,
  reverse: false,
  stackPosition: "left",
} satisfies MasonryImageGridProps;
