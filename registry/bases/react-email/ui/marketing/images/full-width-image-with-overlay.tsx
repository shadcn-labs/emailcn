import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

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
  theme?: TailwindConfig;
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
  <td
    style={{
      backgroundColor: spacerBackgroundColor,
      verticalAlign: alignment,
      width: "24px",
    }}
  >
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td
            className="full-image-side-block"
            style={{
              backgroundColor: pageBackgroundColor,
              lineHeight: "128px",
            }}
          >
            &zwj;
          </td>
        </tr>
      </tbody>
    </table>
  </td>
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
  <div
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxWidth: "100%",
    }}
  >
    <div className="full-overlay-copy-spacer" style={{ lineHeight: "292px" }}>
      &zwj;
    </div>
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td
            style={{
              background: "linear-gradient(to bottom, transparent, #000001)",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              padding: "16px",
              textAlign: "left",
            }}
          >
            <h4
              style={{
                color: headingColor,
                fontFamily,
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "32px",
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <p
              style={{
                color: textColor,
                fontFamily,
                fontSize: "20px",
                lineHeight: "28px",
                margin: 0,
              }}
            >
              {subtext}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);

export const FullWidthImageWithOverlaySection = ({
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width-2.jpg",
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: pageBackgroundColor,
              maxWidth: "100%",
              width: "600px",
            }}
          >
            {layout.top ? (
              <div
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </div>
            ) : null}
            {sideCount > 0 && layout.sideAlignment ? (
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    {hasLeft ? (
                      <SideSpacer
                        alignment={layout.sideAlignment}
                        pageBackgroundColor={pageBackgroundColor}
                        spacerBackgroundColor={spacerBackgroundColor}
                      />
                    ) : null}
                    <td style={{ width: `${imageWidth}px` }}>
                      <OverlayImage
                        heading={heading}
                        headingColor={headingColor}
                        imageSrc={imageSrc}
                        subtext={subtext}
                        textColor={textColor}
                      />
                    </td>
                    {hasRight ? (
                      <SideSpacer
                        alignment={layout.sideAlignment}
                        pageBackgroundColor={pageBackgroundColor}
                        spacerBackgroundColor={spacerBackgroundColor}
                      />
                    ) : null}
                  </tr>
                </tbody>
              </table>
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
              <div
                style={{
                  backgroundColor: spacerBackgroundColor,
                  lineHeight: "24px",
                }}
              >
                &zwj;
              </div>
            ) : null}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
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
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: pageBackgroundColor, margin: 0 }}>
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <FullWidthImageWithOverlaySection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

FullWidthImageWithOverlay.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageWithOverlayProps;
