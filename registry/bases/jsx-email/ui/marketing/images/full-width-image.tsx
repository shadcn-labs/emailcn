import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Column,
  Section,
  Row,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FullWidthImageVariant =
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

export interface FullWidthImageProps {
  theme?: EmailThemeTokens;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  spacerBackgroundColor?: string;
  variant?: FullWidthImageVariant;
}

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .full-image-side-block {
      line-height: 64px !important;
    }
  }
`;

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
  FullWidthImageVariant,
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

export const FullWidthImageSection = ({
  imageSrc = "https://emailcn.vercel.app/api/email-assets/image-grids/full-width.jpg",
  imageAlt = "",
  pageBackgroundColor = "#f1f5f9",
  spacerBackgroundColor = "#fffffe",
  variant = "default",
}: Omit<FullWidthImageProps, "theme">) => {
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
                    <Column>
                      <Img
                        alt={imageAlt}
                        src={imageSrc}
                        style={{ maxWidth: "100%", verticalAlign: "middle" }}
                        width={imageWidth}
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
              <Img
                alt={imageAlt}
                src={imageSrc}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width="600"
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

export const FullWidthImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Full width image</Preview>
    <Body style={{ backgroundColor: pageBackgroundColor, margin: 0 }}>
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <FullWidthImageSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

FullWidthImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageProps;
