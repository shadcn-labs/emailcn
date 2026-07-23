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
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type ThreeColumnsImageGridVariant =
  | "square-images"
  | "portrait-images"
  | "square-overlay"
  | "portrait-overlay";

export interface ThreeColumnsImageGridProps {
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
  variant?: ThreeColumnsImageGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
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

const squareImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-square-3.jpg",
] as const;

const portraitImages = [
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/image-grids/3-col-portrait-3.jpg",
] as const;

const variantContent = {
  "portrait-images": {
    headings: ["Boarding Pass", "L’Atelier", "Cultivate"],
    imageSources: portraitImages,
    overlay: false,
    portrait: true,
    subtexts: ["Smooth & Balanced", "Rich & Nutty", "Light & Bright"],
  },
  "portrait-overlay": {
    headings: ["Boarding Pass", "Cultivate", "L’Atelier"],
    imageSources: [portraitImages[0], portraitImages[2], portraitImages[1]],
    overlay: true,
    portrait: true,
    subtexts: ["Smooth & Balanced", "Light & Bright", "Rich & Nutty"],
  },
  "square-images": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: squareImages,
    overlay: false,
    portrait: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
  "square-overlay": {
    headings: ["Aqua Retreat", "Ocean Spa", "Sand Stroll"],
    imageSources: squareImages,
    overlay: true,
    portrait: false,
    subtexts: ["Private pools", "Relax & restore", "Beach freedom"],
  },
} satisfies Record<
  ThreeColumnsImageGridVariant,
  {
    headings: readonly [string, string, string];
    imageSources: readonly [string, string, string];
    overlay: boolean;
    portrait: boolean;
    subtexts: readonly [string, string, string];
  }
>;

const defaults = {
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

type SectionProps = Omit<ThreeColumnsImageGridProps, "theme">;
type ResolvedProps = typeof defaults &
  (typeof variantContent)[ThreeColumnsImageGridVariant] &
  SectionProps;

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
      className={
        portrait
          ? "three-grid-portrait-overlay-spacer"
          : "three-grid-square-overlay-spacer"
      }
      style={{ lineHeight: portrait ? "160px" : "76px" }}
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
              className="three-grid-overlay-heading"
              style={{
                color: headingColor,
                fontFamily,
                fontSize: "16px",
                fontWeight: 700,
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {heading}
            </h4>
            <p
              className="three-grid-overlay-text"
              style={{
                color: textColor,
                fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
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
        width="168"
      />
    </a>
  );

export const ThreeColumnsImageGridSection = (props: SectionProps) => {
  const variant = props.variant ?? "square-images";
  const variantDefaults = variantContent[variant];
  const resolved = {
    ...defaults,
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
  } as ResolvedProps;
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
                  {items.map((item, index) => (
                    <Fragment key={item.src}>
                      <td className={stackClass} style={{ width: "168px" }}>
                        <GridItem
                          {...item}
                          headingColor={resolved.headingColor}
                          overlay={resolved.overlay}
                          portrait={resolved.portrait}
                          textColor={resolved.textColor}
                        />
                      </td>
                      <td
                        className={
                          index < 2 ? `${stackClass} ${gapClass}` : undefined
                        }
                        style={{ width: "24px" }}
                      >
                        &zwj;
                      </td>
                    </Fragment>
                  ))}
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

export const ThreeColumnsImageGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "square-images",
  ...props
}: ThreeColumnsImageGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Three columns image grid</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <ThreeColumnsImageGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

ThreeColumnsImageGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "square-images",
} satisfies ThreeColumnsImageGridProps;
