import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Section,
  Heading,
  Text,
  Link,
  Column,
  Row,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

type TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesVariant =
  | "logo-top-right"
  | "logo-top-left"
  | "logo-bottom-left"
  | "logo-bottom-right";

interface TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesVariant;
}

const TallFeatureSplit_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TallFeatureSplit_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .feature-double-stack {
        display: block !important;
        width: 100% !important;
      }

      .feature-double-gap {
        line-height: 24px !important;
      }
    }

    @media only screen and (max-width: 430px) {
      .feature-double-image-stack {
        display: block !important;
        width: 100% !important;
      }

      .feature-double-image-gap {
        line-height: 24px !important;
      }
    }
  `;

const TallFeatureSplit_defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Premium footwear, outerwear, and lifestyle pieces chosen for quality, comfort, and everyday performance.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Discover the Monarch Collection.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-1.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-2.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#030712",
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-1.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type TallFeatureSplit_SectionProps = Omit<
  TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps,
  "theme"
>;

type TallFeatureSplit_ResolvedProps = typeof TallFeatureSplit_defaults &
  TallFeatureSplit_SectionProps;

const TallFeatureSplit_LogoPanel = ({
  props,
}: {
  props: TallFeatureSplit_ResolvedProps;
}) => (
  <Section
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "205px",
      textAlign: "center",
    }}
  >
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{
        display: "inline",
        maxWidth: "100%",
        verticalAlign: "middle",
      }}
      width={139}
    />
  </Section>
);

const TallFeatureSplit_FeatureCopy = ({
  props,
}: {
  props: TallFeatureSplit_ResolvedProps;
}) => (
  <>
    <Heading
      style={{
        color: props.headingColor,
        fontFamily: TallFeatureSplit_fontFamily,
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "28px",
        margin: 0,
      }}
      as="h2"
    >
      {props.heading}
    </Heading>
    <Text
      style={{
        color: props.textColor,
        fontFamily: TallFeatureSplit_fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: "12px 0 0",
      }}
    >
      {props.body}
    </Text>
    <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
    <Section>
      <Link
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily: TallFeatureSplit_fontFamily,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          padding: 0,
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
  </>
);

const TallFeatureSplit_ContentColumn = ({
  logoAfter,
  props,
}: {
  logoAfter: boolean;
  props: TallFeatureSplit_ResolvedProps;
}) => (
  <Column
    className="feature-double-stack"
    style={{ textAlign: "left", verticalAlign: "top", width: "204px" }}
  >
    {logoAfter ? null : (
      <Section style={{ marginBottom: "24px" }}>
        <TallFeatureSplit_LogoPanel props={props} />
      </Section>
    )}
    <TallFeatureSplit_FeatureCopy props={props} />
    {logoAfter ? (
      <Section style={{ marginTop: "24px" }}>
        <TallFeatureSplit_LogoPanel props={props} />
      </Section>
    ) : null}
  </Column>
);

const TallFeatureSplit_BackgroundCard = ({
  imageSrc,
  props,
}: {
  imageSrc: string;
  props: TallFeatureSplit_ResolvedProps;
}) => (
  <Column
    className="feature-double-image-stack"
    style={{
      backgroundColor: props.imageBackgroundColor,
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      textAlign: "center",
      width: "150px",
    }}
  >
    <Section style={{ lineHeight: "410px" }}>&zwj;</Section>
  </Column>
);

const TallFeatureSplit_ImagesColumn = ({
  props,
}: {
  props: TallFeatureSplit_ResolvedProps;
}) => (
  <Column
    className="feature-double-stack"
    style={{ verticalAlign: "top", width: "324px" }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <TallFeatureSplit_BackgroundCard
            imageSrc={props.imageSrc1}
            props={props}
          />
          <Column
            className="feature-double-image-stack feature-double-image-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <TallFeatureSplit_BackgroundCard
            imageSrc={props.imageSrc2}
            props={props}
          />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesSection = (
  props: TallFeatureSplit_SectionProps
) => {
  const variant = props.variant ?? "logo-top-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = {
    ...TallFeatureSplit_defaults,
    ...(contentRight
      ? {
          imageSrc2:
            "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-3.jpg",
        }
      : {}),
    ...props,
  } as TallFeatureSplit_ResolvedProps;
  const content = (
    <TallFeatureSplit_ContentColumn logoAfter={logoAfter} props={resolved} />
  );
  const images = <TallFeatureSplit_ImagesColumn props={resolved} />;
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
                          {contentRight ? images : content}
                          <Column
                            className="feature-double-stack feature-double-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </Column>
                          {contentRight ? content : images}
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

const TallFeatureSplit_FeatureWithDoubleTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "logo-top-left",
  ...props
}: TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TallFeatureSplit_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Discover the Monarch Collection.</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TallFeatureSplit_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TallFeatureSplit_FeatureWithDoubleTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-top-left",
} satisfies TallFeatureSplit_FeatureWithDoubleTallBackgroundImagesProps;

const __TallFeatureSplit =
  TallFeatureSplit_FeatureWithDoubleTallBackgroundImages;

type TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesVariant =
  | "logo-bottom-left"
  | "logo-bottom-right"
  | "logo-top-left"
  | "logo-top-right";

interface TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps {
  theme?: EmailThemeTokens;
  heading?: string;
  body?: string;
  imageSrc1?: string;
  imageSrc2?: string;
  logoSrc?: string;
  logoAlt?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  imageBackgroundColor?: string;
  logoBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  linkColor?: string;
  variant?: TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesVariant;
}

const TallFeatureFull_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TallFeatureFull_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .feature-full-stack { display: block !important; width: 100% !important; }
      .feature-full-gap { line-height: 24px !important; }
    }

    @media only screen and (max-width: 430px) {
      .feature-full-image-stack { display: block !important; width: 100% !important; }
      .feature-full-image-gap { line-height: 24px !important; }
    }
  `;

const TallFeatureFull_defaults = {
  arrowIconSrc:
    "https://emailcn.vercel.app/api/email-assets/icon-arrow-right-brand.png",
  backgroundColor: "#fffffe",
  body: "Discover clinically proven formulas designed to target concerns with precision and clarity.",
  buttonHref: "https://example.com",
  buttonLabel: "Discover more",
  heading: "Science-led skincare essentials.",
  headingColor: "#030712",
  imageBackgroundColor: "#f3f4f6",
  imageSrc1:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-4.jpg",
  imageSrc2:
    "https://emailcn.vercel.app/api/email-assets/feature/stripes-bg-5.jpg",
  linkColor: "#4f46e5",
  logoAlt: "Monarch",
  logoBackgroundColor: "#f3f4f6",
  logoSrc:
    "https://emailcn.vercel.app/api/email-assets/feature/logo-stripes-2.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type TallFeatureFull_SectionProps = Omit<
  TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps,
  "theme"
>;

type TallFeatureFull_ResolvedProps = typeof TallFeatureFull_defaults &
  TallFeatureFull_SectionProps;

const TallFeatureFull_LogoPanel = ({
  props,
}: {
  props: TallFeatureFull_ResolvedProps;
}) => (
  <Section
    style={{
      backgroundColor: props.logoBackgroundColor,
      borderRadius: "4px",
      lineHeight: "144px",
      textAlign: "center",
    }}
  >
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ display: "inline", maxWidth: "100%", verticalAlign: "middle" }}
      width={139}
    />
  </Section>
);

const TallFeatureFull_FeatureCopy = ({
  props,
}: {
  props: TallFeatureFull_ResolvedProps;
}) => (
  <>
    <Text
      style={{
        color: props.textColor,
        fontFamily: TallFeatureFull_fontFamily,
        fontSize: "14px",
        fontWeight: 300,
        lineHeight: "20px",
        margin: 0,
      }}
    >
      {props.body}
    </Text>
    <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
    <Section>
      <Link
        href={props.buttonHref}
        style={{
          borderRadius: "8px",
          color: props.linkColor,
          display: "inline-block",
          fontFamily: TallFeatureFull_fontFamily,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          padding: 0,
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
  </>
);

const TallFeatureFull_ContentColumn = ({
  logoAfter,
  props,
}: {
  logoAfter: boolean;
  props: TallFeatureFull_ResolvedProps;
}) => (
  <Column
    className="feature-full-stack"
    style={{ textAlign: "left", verticalAlign: "top", width: "204px" }}
  >
    {logoAfter ? null : (
      <Section style={{ marginBottom: "24px" }}>
        <TallFeatureFull_LogoPanel props={props} />
      </Section>
    )}
    <TallFeatureFull_FeatureCopy props={props} />
    {logoAfter ? (
      <Section style={{ marginTop: "24px" }}>
        <TallFeatureFull_LogoPanel props={props} />
      </Section>
    ) : null}
  </Column>
);

const TallFeatureFull_BackgroundCard = ({
  imageSrc,
  props,
}: {
  imageSrc: string;
  props: TallFeatureFull_ResolvedProps;
}) => (
  <Column
    className="feature-full-image-stack"
    style={{
      backgroundColor: props.imageBackgroundColor,
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      textAlign: "center",
      width: "150px",
    }}
  >
    <Section style={{ lineHeight: "280px" }}>&zwj;</Section>
  </Column>
);

const TallFeatureFull_ImagesColumn = ({
  props,
}: {
  props: TallFeatureFull_ResolvedProps;
}) => (
  <Column
    className="feature-full-stack"
    style={{ verticalAlign: "top", width: "324px" }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <TallFeatureFull_BackgroundCard
            imageSrc={props.imageSrc1}
            props={props}
          />
          <Column
            className="feature-full-image-stack feature-full-image-gap"
            style={{ width: "24px" }}
          >
            &zwj;
          </Column>
          <TallFeatureFull_BackgroundCard
            imageSrc={props.imageSrc2}
            props={props}
          />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesSection = (
  props: TallFeatureFull_SectionProps
) => {
  const variant = props.variant ?? "logo-bottom-left";
  const contentRight = variant.endsWith("-right");
  const logoAfter = variant.startsWith("logo-bottom-");
  const resolved = {
    ...TallFeatureFull_defaults,
    ...props,
  } as TallFeatureFull_ResolvedProps;
  const content = (
    <TallFeatureFull_ContentColumn logoAfter={logoAfter} props={resolved} />
  );
  const images = <TallFeatureFull_ImagesColumn props={resolved} />;
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
                    <Heading
                      style={{
                        color: resolved.headingColor,
                        fontFamily: TallFeatureFull_fontFamily,
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "32px",
                        margin: "0 0 24px",
                      }}
                      as="h2"
                    >
                      {resolved.heading}
                    </Heading>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {contentRight ? images : content}
                          <Column
                            className="feature-full-stack feature-full-gap"
                            style={{ width: "24px" }}
                          >
                            &zwj;
                          </Column>
                          {contentRight ? content : images}
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

const TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "logo-bottom-left",
  ...props
}: TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TallFeatureFull_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Science-led skincare essentials.</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TallFeatureFull_fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages.PreviewProps = {
  theme: defaultTheme,
  variant: "logo-bottom-left",
} satisfies TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImagesProps;

const __TallFeatureFull =
  TallFeatureFull_FeatureWithFullTitleAndTallBackgroundImages;

export interface TallBackgroundImagesFeatureProps {
  theme?: Parameters<typeof __TallFeatureSplit>[0]["theme"];
  heading?: string;
  body?: string;
  images?: [
    {
      src: string;
      alt?: string;
    },
    {
      src: string;
      alt?: string;
    },
  ];
  logo?: {
    src: string;
    alt?: string;
  };
  action?: {
    href: string;
    label: string;
    iconSrc?: string;
  };
  logoPosition?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  titleWidth?: "split" | "full";
}

export const TallBackgroundImagesFeature = ({
  theme,
  heading,
  body,
  images,
  logo,
  action,
  logoPosition = "top-left",
  titleWidth = "split",
}: TallBackgroundImagesFeatureProps) => {
  const Component =
    titleWidth === "full" ? __TallFeatureFull : __TallFeatureSplit;
  return (
    <Component
      arrowIconSrc={action?.iconSrc}
      body={body}
      buttonHref={action?.href}
      buttonLabel={action?.label}
      heading={heading}
      imageSrc1={images?.[0]?.src}
      imageSrc2={images?.[1]?.src}
      logoAlt={logo?.alt}
      logoSrc={logo?.src}
      theme={theme}
      variant={`logo-${logoPosition}`}
    />
  );
};

TallBackgroundImagesFeature.PreviewProps = {
  logoPosition: "top-left",
  titleWidth: "split",
} satisfies TallBackgroundImagesFeatureProps;
