import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Img,
  Preview,
  Column,
  Section,
  Row,
  Heading,
  Text,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

type FullWidthImage_FullWidthImageVariant =
  | "default"
  | "top-padding"
  | "top-right"
  | "top-left"
  | "top-sides"
  | "right-padding"
  | "right-alt"
  | "bottom-padding"
  | "bottom-right"
  | "bottom-left"
  | "bottom-sides"
  | "left-padding"
  | "left-alt"
  | "sides-padding"
  | "sides-alt";

interface FullWidthImage_FullWidthImageProps {
  theme?: EmailTheme;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImage_FullWidthImageVariant;
}

const FullWidthImage_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .full-image-side-block {
        line-height: 64px !important;
      }
    }
  `;

const FullWidthImage_variantLayout = {
  "bottom-left": {
    bottom: true,
    side: "left",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "bottom-padding": {
    bottom: true,
    side: null,
    sideAlignment: null,
    sides: false,
    top: false,
  },
  "bottom-right": {
    bottom: true,
    side: "right",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "bottom-sides": {
    bottom: true,
    side: null,
    sideAlignment: "top",
    sides: true,
    top: false,
  },
  default: {
    bottom: false,
    side: null,
    sideAlignment: null,
    sides: false,
    top: false,
  },
  "left-alt": {
    bottom: false,
    side: "left",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "left-padding": {
    bottom: false,
    side: "left",
    sideAlignment: "bottom",
    sides: false,
    top: false,
  },
  "right-alt": {
    bottom: false,
    side: "right",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "right-padding": {
    bottom: false,
    side: "right",
    sideAlignment: "bottom",
    sides: false,
    top: false,
  },
  "sides-alt": {
    bottom: false,
    side: null,
    sideAlignment: "top",
    sides: true,
    top: false,
  },
  "sides-padding": {
    bottom: false,
    side: null,
    sideAlignment: "bottom",
    sides: true,
    top: false,
  },
  "top-left": {
    bottom: false,
    side: "left",
    sideAlignment: "bottom",
    sides: false,
    top: true,
  },
  "top-padding": {
    bottom: false,
    side: null,
    sideAlignment: null,
    sides: false,
    top: true,
  },
  "top-right": {
    bottom: false,
    side: "right",
    sideAlignment: "bottom",
    sides: false,
    top: true,
  },
  "top-sides": {
    bottom: false,
    side: null,
    sideAlignment: "bottom",
    sides: true,
    top: true,
  },
} as const satisfies Record<
  FullWidthImage_FullWidthImageVariant,
  {
    bottom: boolean;
    side: "left" | "right" | null;
    sideAlignment: "top" | "bottom" | null;
    sides: boolean;
    top: boolean;
  }
>;

const FullWidthImage_SideSpacer = ({
  alignment,
  pageBackgroundColor,
  spacerBackgroundColor,
}: {
  alignment: "top" | "bottom";
  pageBackgroundColor: string;
  spacerBackgroundColor: string;
}) => (
  <Column
    style={{
      backgroundColor: spacerBackgroundColor,
      verticalAlign: alignment,
      width: "24px",
    }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="full-image-side-block"
            style={{
              backgroundColor: pageBackgroundColor,
              lineHeight: "128px",
            }}
          >
            &zwj;
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const FullWidthImage_FullWidthImageSection = ({
  imageSrc = emailAsset("image-grids/full-width.jpg"),
  imageAlt = "",
  pageBackgroundColor = "#f1f5f9",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImage_FullWidthImageProps, "theme">) => {
  const layout = FullWidthImage_variantLayout[variant];
  let sideCount = 0;
  if (layout.sides) {
    sideCount = 2;
  } else if (layout.side) {
    sideCount = 1;
  }
  const imageWidth = 600 - sideCount * 24;
  const hasLeft = layout.sides || layout.side === "left";
  const hasRight = layout.sides || layout.side === "right";
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: pageBackgroundColor,
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {layout.top ? (
              <Section
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </Section>
            ) : null}
            {(() => {
              if (sideCount > 0 && layout.sideAlignment) {
                return (
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        {hasLeft ? (
                          <FullWidthImage_SideSpacer
                            alignment={layout.sideAlignment}
                            pageBackgroundColor={pageBackgroundColor}
                            spacerBackgroundColor={spacerBackgroundColor}
                          />
                        ) : null}
                        <Column>
                          <Img
                            alt={imageAlt}
                            src={imageSrc}
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "middle",
                            }}
                            width={imageWidth}
                          />
                        </Column>
                        {hasRight ? (
                          <FullWidthImage_SideSpacer
                            alignment={layout.sideAlignment}
                            pageBackgroundColor={pageBackgroundColor}
                            spacerBackgroundColor={spacerBackgroundColor}
                          />
                        ) : null}
                      </Row>
                    </Fragment>
                  </Section>
                );
              }
              return (
                <Img
                  alt={imageAlt}
                  src={imageSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width="600"
                />
              );
            })()}
            {layout.bottom ? (
              <Section
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </Section>
            ) : null}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const FullWidthImage_FullWidthImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImage_FullWidthImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: FullWidthImage_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Full width image</Preview>
    <EmailTailwind theme={theme}>
      <Body style={{ backgroundColor: pageBackgroundColor }} className="m-0">
        <Container
          style={{
            width: theme.containerWidth,
          }}
          className="mx-auto max-w-email"
        >
          <FullWidthImage_FullWidthImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

FullWidthImage_FullWidthImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImage_FullWidthImageProps;

const __FullWidthImage = FullWidthImage_FullWidthImage;

type FullWidthOverlay_FullWidthImageWithOverlayVariant =
  | "default"
  | "top-padding"
  | "top-right"
  | "top-left"
  | "top-sides"
  | "right-padding"
  | "right-alt"
  | "bottom-padding"
  | "bottom-right"
  | "bottom-left"
  | "bottom-sides"
  | "left-padding"
  | "left-alt"
  | "sides-padding"
  | "sides-alt";

interface FullWidthOverlay_FullWidthImageWithOverlayProps {
  theme?: EmailTheme;
  imageSrc?: string;
  heading?: string;
  subtext?: string;
  headingColor?: string;
  textColor?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthOverlay_FullWidthImageWithOverlayVariant;
}

const FullWidthOverlay_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .full-image-side-block {
        line-height: 64px !important;
      }

      .full-overlay-copy-spacer {
        line-height: 144px !important;
      }
    }
  `;

const FullWidthOverlay_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullWidthOverlay_variantLayout = {
  "bottom-left": {
    bottom: true,
    side: "left",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "bottom-padding": {
    bottom: true,
    side: null,
    sideAlignment: null,
    sides: false,
    top: false,
  },
  "bottom-right": {
    bottom: true,
    side: "right",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "bottom-sides": {
    bottom: true,
    side: null,
    sideAlignment: "top",
    sides: true,
    top: false,
  },
  default: {
    bottom: false,
    side: null,
    sideAlignment: null,
    sides: false,
    top: false,
  },
  "left-alt": {
    bottom: false,
    side: "left",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "left-padding": {
    bottom: false,
    side: "left",
    sideAlignment: "bottom",
    sides: false,
    top: false,
  },
  "right-alt": {
    bottom: false,
    side: "right",
    sideAlignment: "top",
    sides: false,
    top: false,
  },
  "right-padding": {
    bottom: false,
    side: "right",
    sideAlignment: "bottom",
    sides: false,
    top: false,
  },
  "sides-alt": {
    bottom: false,
    side: null,
    sideAlignment: "top",
    sides: true,
    top: false,
  },
  "sides-padding": {
    bottom: false,
    side: null,
    sideAlignment: "bottom",
    sides: true,
    top: false,
  },
  "top-left": {
    bottom: false,
    side: "left",
    sideAlignment: "bottom",
    sides: false,
    top: true,
  },
  "top-padding": {
    bottom: false,
    side: null,
    sideAlignment: null,
    sides: false,
    top: true,
  },
  "top-right": {
    bottom: false,
    side: "right",
    sideAlignment: "bottom",
    sides: false,
    top: true,
  },
  "top-sides": {
    bottom: false,
    side: null,
    sideAlignment: "bottom",
    sides: true,
    top: true,
  },
} as const satisfies Record<
  FullWidthOverlay_FullWidthImageWithOverlayVariant,
  {
    bottom: boolean;
    side: "left" | "right" | null;
    sideAlignment: "top" | "bottom" | null;
    sides: boolean;
    top: boolean;
  }
>;

const FullWidthOverlay_SideSpacer = ({
  alignment,
  pageBackgroundColor,
  spacerBackgroundColor,
}: {
  alignment: "top" | "bottom";
  pageBackgroundColor: string;
  spacerBackgroundColor: string;
}) => (
  <Column
    style={{
      backgroundColor: spacerBackgroundColor,
      verticalAlign: alignment,
      width: "24px",
    }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="full-image-side-block"
            style={{
              backgroundColor: pageBackgroundColor,
              lineHeight: "128px",
            }}
          >
            &zwj;
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const FullWidthOverlay_OverlayImage = ({
  heading,
  headingColor,
  imageSrc,
  subtext,
  textColor,
}: {
  heading: string;
  headingColor: string;
  imageSrc: string;
  subtext: string;
  textColor: string;
}) => (
  <Section
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: "100%",
    }}
  >
    <Section
      className="full-overlay-copy-spacer"
      style={{ fontSize: 0, lineHeight: "292px" }}
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
                fontFamily: FullWidthOverlay_fontFamily,
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
                fontFamily: FullWidthOverlay_fontFamily,
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

const FullWidthOverlay_FullWidthImageWithOverlaySection = ({
  imageSrc = emailAsset("image-grids/full-width-2.jpg"),
  heading = "Nike",
  subtext = "Shoes and accessories",
  headingColor = "#fffffe",
  textColor = "#fffffe",
  pageBackgroundColor = "#f1f5f9",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthOverlay_FullWidthImageWithOverlayProps, "theme">) => {
  const layout = FullWidthOverlay_variantLayout[variant];
  let sideCount = 0;
  if (layout.sides) {
    sideCount = 2;
  } else if (layout.side) {
    sideCount = 1;
  }
  const imageWidth = 600 - sideCount * 24;
  const hasLeft = layout.sides || layout.side === "left";
  const hasRight = layout.sides || layout.side === "right";
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: pageBackgroundColor,
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {layout.top ? (
              <Section
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </Section>
            ) : null}
            {(() => {
              if (sideCount > 0 && layout.sideAlignment) {
                return (
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        {hasLeft ? (
                          <FullWidthOverlay_SideSpacer
                            alignment={layout.sideAlignment}
                            pageBackgroundColor={pageBackgroundColor}
                            spacerBackgroundColor={spacerBackgroundColor}
                          />
                        ) : null}
                        <Column style={{ width: `${imageWidth}px` }}>
                          <FullWidthOverlay_OverlayImage
                            heading={heading}
                            headingColor={headingColor}
                            imageSrc={imageSrc}
                            subtext={subtext}
                            textColor={textColor}
                          />
                        </Column>
                        {hasRight ? (
                          <FullWidthOverlay_SideSpacer
                            alignment={layout.sideAlignment}
                            pageBackgroundColor={pageBackgroundColor}
                            spacerBackgroundColor={spacerBackgroundColor}
                          />
                        ) : null}
                      </Row>
                    </Fragment>
                  </Section>
                );
              }
              return (
                <FullWidthOverlay_OverlayImage
                  heading={heading}
                  headingColor={headingColor}
                  imageSrc={imageSrc}
                  subtext={subtext}
                  textColor={textColor}
                />
              );
            })()}
            {layout.bottom ? (
              <Section
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </Section>
            ) : null}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const FullWidthOverlay_FullWidthImageWithOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthOverlay_FullWidthImageWithOverlayProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: FullWidthOverlay_responsiveStyles }}
      />
    </EmailHead>
    <Preview>{props.heading ?? "Nike"}</Preview>
    <EmailTailwind theme={theme}>
      <Body style={{ backgroundColor: pageBackgroundColor }} className="m-0">
        <Container
          style={{
            width: theme.containerWidth,
          }}
          className="mx-auto max-w-email"
        >
          <FullWidthOverlay_FullWidthImageWithOverlaySection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

FullWidthOverlay_FullWidthImageWithOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthOverlay_FullWidthImageWithOverlayProps;

const __FullWidthOverlay = FullWidthOverlay_FullWidthImageWithOverlay;

export interface GalleryImage {
  src: string;
  alt?: string;
  href?: string;
  heading?: string;
  subtext?: string;
}

export interface FullWidthImageProps {
  theme?: Parameters<typeof __FullWidthImage>[0]["theme"];
  image?: GalleryImage;
  overlay?: boolean;
  frame?: "none" | "top" | "right" | "bottom" | "left" | "sides";
  frameStyle?: "padding" | "split" | "alternate" | "sides";
}

const fullWidthVariant = ({
  frame,
  frameStyle,
}: Required<Pick<FullWidthImageProps, "frame" | "frameStyle">>) => {
  if (frame === "none") {
    return "default" as const;
  }
  if (frameStyle === "padding") {
    return `${frame}-padding` as const;
  }
  if (frameStyle === "sides" && (frame === "top" || frame === "bottom")) {
    return `${frame}-sides` as const;
  }
  if (frame === "top" || frame === "bottom") {
    return `${frame}-${frameStyle === "alternate" ? "right" : "left"}` as const;
  }
  return `${frame}-${frameStyle === "alternate" ? "alt" : "padding"}` as const;
};

export const FullWidthImage = ({
  theme,
  image,
  overlay = false,
  frame = "none",
  frameStyle = "padding",
}: FullWidthImageProps) => {
  const variant = fullWidthVariant({ frame, frameStyle });
  return overlay ? (
    <__FullWidthOverlay
      heading={image?.heading}
      imageSrc={image?.src}
      subtext={image?.subtext}
      theme={theme}
      variant={variant}
    />
  ) : (
    <__FullWidthImage
      imageAlt={image?.alt}
      imageSrc={image?.src}
      theme={theme}
      variant={variant}
    />
  );
};

FullWidthImage.PreviewProps = {
  frame: "none",
  frameStyle: "padding",
  overlay: false,
} satisfies FullWidthImageProps;
