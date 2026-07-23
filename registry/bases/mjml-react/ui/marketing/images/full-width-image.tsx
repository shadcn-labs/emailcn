/* eslint-disable @next/next/no-img-element */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

export const FullWidthImageSection = ({
  imageSrc = "https://assets.mailviews.com/images/components/image-grids/full-width.jpg",
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
                    <td>
                      <img
                        alt={imageAlt}
                        src={imageSrc}
                        style={{ maxWidth: "100%", verticalAlign: "middle" }}
                        width={imageWidth}
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
              <img
                alt={imageAlt}
                src={imageSrc}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width="600"
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

export const FullWidthImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthImageProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Full width image</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <FullWidthImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthImage.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageProps;
