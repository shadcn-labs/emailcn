import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Column,
  Section,
  Row,
  Heading,
  Text,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FullWidthImageWithOverlayVariant =
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

export interface FullWidthImageWithOverlayProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  heading?: string;
  subtext?: string;
  headingColor?: string;
  textColor?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImageWithOverlayVariant;
}

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .full-image-side-block {
      line-height: 64px !important;
    }

    .full-overlay-copy-spacer {
      line-height: 144px !important;
    }
  }
`;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const variantLayout = {
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
  FullWidthImageWithOverlayVariant,
  {
    bottom: boolean;
    side: "left" | "right" | null;
    sideAlignment: "top" | "bottom" | null;
    sides: boolean;
    top: boolean;
  }
>;

const SideSpacer = ({
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

const OverlayImage = ({
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
      style={{ lineHeight: "292px" }}
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

export const FullWidthImageWithOverlaySection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width-2.jpg",
  heading = "Nike",
  subtext = "Shoes and accessories",
  headingColor = "#fffffe",
  textColor = "#fffffe",
  pageBackgroundColor = "#f1f5f9",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImageWithOverlayProps, "theme">) => {
  const layout = variantLayout[variant];
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
            {sideCount > 0 && layout.sideAlignment ? (
              <Section width="100%">
                <Fragment>
                  <Row>
                    {hasLeft ? (
                      <SideSpacer
                        alignment={layout.sideAlignment}
                        pageBackgroundColor={pageBackgroundColor}
                        spacerBackgroundColor={spacerBackgroundColor}
                      />
                    ) : null}
                    <Column style={{ width: `${imageWidth}px` }}>
                      <OverlayImage
                        heading={heading}
                        headingColor={headingColor}
                        imageSrc={imageSrc}
                        subtext={subtext}
                        textColor={textColor}
                      />
                    </Column>
                    {hasRight ? (
                      <SideSpacer
                        alignment={layout.sideAlignment}
                        pageBackgroundColor={pageBackgroundColor}
                        spacerBackgroundColor={spacerBackgroundColor}
                      />
                    ) : null}
                  </Row>
                </Fragment>
              </Section>
            ) : (
              <OverlayImage
                heading={heading}
                headingColor={headingColor}
                imageSrc={imageSrc}
                subtext={subtext}
                textColor={textColor}
              />
            )}
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

export const FullWidthImageWithOverlay = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImageWithOverlayProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? "Nike"}</Preview>
    <Body style={{ backgroundColor: pageBackgroundColor, margin: 0 }}>
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <FullWidthImageWithOverlaySection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FullWidthImageWithOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageWithOverlayProps;
