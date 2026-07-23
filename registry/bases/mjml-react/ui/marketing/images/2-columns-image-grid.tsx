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

export type TwoColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

export interface TwoColumnsImageGridProps {
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
  <div
    style={{
      backgroundImage: `url('${imageSrc}')`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      borderRadius: "4px",
      maxWidth: "100%",
    }}
  >
    <div
      className={portrait ? "two-grid-portrait-overlay-spacer" : undefined}
      style={{ lineHeight: portrait ? "304px" : "172px" }}
    >
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
    <a href={href}>
      <img
        alt={alt}
        src={src}
        style={{
          borderRadius: "4px",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
        width="264"
      />
    </a>
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "24px",
              width: "600px",
            }}
          >
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ width: "24px" }}>&zwj;</td>
                  <td className={stackClass} style={{ width: "264px" }}>
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
                  </td>
                  <td
                    className={`${stackClass} ${gapClass}`}
                    style={{ width: "24px" }}
                  >
                    &zwj;
                  </td>
                  <td className={stackClass} style={{ width: "264px" }}>
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
                  </td>
                  <td style={{ width: "24px" }}>&zwj;</td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const TwoColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: TwoColumnsImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Two columns image grid</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <TwoColumnsImageGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies TwoColumnsImageGridProps;
