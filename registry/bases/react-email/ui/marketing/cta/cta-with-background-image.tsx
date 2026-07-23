import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CTAWithBackgroundImageVariant = "flush" | "boxed" | "padded";

export interface CTAWithBackgroundImageProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  emphasis?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  variant?: CTAWithBackgroundImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .cta-background-action-cell {
      display: block !important;
    }

    .cta-background-action-gap {
      line-height: 24px !important;
    }
  }

  @media only screen and (max-width: 430px) {
    .cta-background-side {
      width: 24px !important;
    }

    .cta-background-flush-space {
      line-height: 80px !important;
    }

    .cta-background-boxed-space {
      line-height: 44px !important;
    }

    .cta-background-padded-space {
      line-height: 64px !important;
    }
  }

  .cta-background-primary:hover {
    background-color: #4338ca !important;
  }
`;

const variantContent = {
  boxed: {
    backgroundSrc:
      "https://assets.mailviews.com/images/components/cta/cta-bg-2.jpg",
    ctaLabel: "Sign up now",
    emphasis: "",
    heading: "Your upgrade starts here!",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Step into the next generation of innovation. Sleek design, pro-level performance, and features that keep you ahead of the curve.",
  },
  flush: {
    backgroundSrc:
      "https://assets.mailviews.com/images/components/cta/cta-bg-1.jpg",
    ctaLabel: "Shop gear now",
    emphasis: "",
    heading: "Ready for your next summit?",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Gear up with performance equipment built for the climb. From durable packs to weatherproof layers, everything you need to take on the wild with confidence.",
  },
  padded: {
    backgroundSrc:
      "https://assets.mailviews.com/images/components/cta/cta-bg-3.jpg",
    ctaLabel: "Plan your trip",
    emphasis: "Book your next getaway and enjoy 20% off with code.",
    heading: "Your island escape awaits!",
    secondaryCtaLabel: "View packages",
    subtext:
      "Experience paradise your way, crystal waters, white sands, and unforgettable moments.",
  },
} satisfies Record<
  CTAWithBackgroundImageVariant,
  {
    backgroundSrc: string;
    ctaLabel: string;
    emphasis: string;
    heading: string;
    secondaryCtaLabel: string;
    subtext: string;
  }
>;

const defaultSectionStyles = {
  backgroundColor: "#fffffe",
  ctaHref: "https://example.com/",
  headingColor: "#fffffe",
  overlayColor: "rgba(3, 7, 18, 0.5)",
  pageBackgroundColor: "#f1f5f9",
  primaryButtonBackgroundColor: "#4f46e5",
  primaryButtonTextColor: "#f8fafc",
  secondaryButtonBorderColor: "#d1d5db",
  secondaryButtonTextColor: "#fffffe",
  secondaryCtaHref: "https://example.com/",
  textColor: "#fffffe",
};

const variantSpacing = {
  boxed: { className: "cta-background-boxed-space", height: 64 },
  flush: { className: "cta-background-flush-space", height: 91 },
  padded: { className: "cta-background-padded-space", height: 72 },
} satisfies Record<
  CTAWithBackgroundImageVariant,
  { className: string; height: number }
>;

type SectionProps = Omit<CTAWithBackgroundImageProps, "theme">;

interface ContentProps {
  ctaHref: string;
  ctaLabel: string;
  emphasis: string;
  heading: string;
  headingColor: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  secondaryButtonBorderColor: string;
  secondaryButtonTextColor: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  spaceClassName: string;
  spaceHeight: number;
  subtext: string;
  textColor: string;
}

const CTAContent = ({
  ctaHref,
  ctaLabel,
  emphasis,
  heading,
  headingColor,
  primaryButtonBackgroundColor,
  primaryButtonTextColor,
  secondaryButtonBorderColor,
  secondaryButtonTextColor,
  secondaryCtaHref,
  secondaryCtaLabel,
  spaceClassName,
  spaceHeight,
  subtext,
  textColor,
}: ContentProps) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td className="cta-background-side" style={{ width: "64px" }}>
          &zwj;
        </td>
        <td style={{ textAlign: "center" }}>
          <div
            className={spaceClassName}
            style={{ lineHeight: `${spaceHeight}px` }}
          >
            &zwj;
          </div>
          <h2
            style={{
              color: headingColor,
              fontFamily,
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {heading}
          </h2>
          <div style={{ lineHeight: "24px" }}>&zwj;</div>
          <p
            style={{
              color: textColor,
              fontFamily,
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {subtext}
            {emphasis ? (
              <>
                {" "}
                <span style={{ fontWeight: 700 }}>{emphasis}</span>
              </>
            ) : null}
          </p>
          <div style={{ lineHeight: "36px" }}>&zwj;</div>
          <table
            align="center"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{ margin: "auto" }}
          >
            <tbody>
              <tr>
                <td className="cta-background-action-cell">
                  <a
                    className="cta-background-primary"
                    href={ctaHref}
                    style={{
                      backgroundColor: primaryButtonBackgroundColor,
                      borderRadius: "8px",
                      color: primaryButtonTextColor,
                      display: "inline-block",
                      fontFamily,
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      padding: "10px 22px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    {ctaLabel}
                  </a>
                </td>
                <td
                  className="cta-background-action-cell cta-background-action-gap"
                  style={{ width: "24px" }}
                >
                  &zwj;
                </td>
                <td className="cta-background-action-cell">
                  <a
                    href={secondaryCtaHref}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${secondaryButtonBorderColor}`,
                      borderRadius: "8px",
                      color: secondaryButtonTextColor,
                      display: "inline-block",
                      fontFamily,
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      padding: "9px 22px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    {secondaryCtaLabel}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className={spaceClassName}
            style={{ lineHeight: `${spaceHeight}px` }}
          >
            &zwj;
          </div>
        </td>
        <td className="cta-background-side" style={{ width: "64px" }}>
          &zwj;
        </td>
      </tr>
    </tbody>
  </table>
);

interface VariantFrameProps extends ContentProps {
  backgroundSrc: string;
  overlayColor: string;
  variant: CTAWithBackgroundImageVariant;
}

const VariantFrame = ({
  backgroundSrc,
  overlayColor,
  variant,
  ...contentProps
}: VariantFrameProps) => {
  const content = <CTAContent {...contentProps} />;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundSrc}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  if (variant === "flush") {
    return (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td style={backgroundStyle}>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ backgroundColor: overlayColor }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>{content}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (variant === "boxed") {
    return (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td style={backgroundStyle}>
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
                    <td
                      style={{
                        backgroundColor: overlayColor,
                        borderRadius: "4px",
                      }}
                    >
                      {content}
                    </td>
                    <td style={{ width: "24px" }}>&zwj;</td>
                  </tr>
                </tbody>
              </table>
              <div style={{ lineHeight: "24px" }}>&zwj;</div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <>
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
            <td style={{ ...backgroundStyle, borderRadius: "4px" }}>
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ backgroundColor: overlayColor, borderRadius: "4px" }}
                width="100%"
              >
                <tbody>
                  <tr>
                    <td>{content}</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td style={{ width: "24px" }}>&zwj;</td>
          </tr>
        </tbody>
      </table>
      <div style={{ lineHeight: "24px" }}>&zwj;</div>
    </>
  );
};

export const CTAWithBackgroundImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "flush";
  const resolved = {
    ...defaultSectionStyles,
    ...variantContent[variant],
    ...props,
  };
  const spacing = variantSpacing[variant];

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
              width: "600px",
            }}
          >
            <VariantFrame
              backgroundSrc={resolved.backgroundSrc}
              ctaHref={resolved.ctaHref}
              ctaLabel={resolved.ctaLabel}
              emphasis={resolved.emphasis}
              heading={resolved.heading}
              headingColor={resolved.headingColor}
              overlayColor={resolved.overlayColor}
              primaryButtonBackgroundColor={
                resolved.primaryButtonBackgroundColor
              }
              primaryButtonTextColor={resolved.primaryButtonTextColor}
              secondaryButtonBorderColor={resolved.secondaryButtonBorderColor}
              secondaryButtonTextColor={resolved.secondaryButtonTextColor}
              secondaryCtaHref={resolved.secondaryCtaHref}
              secondaryCtaLabel={resolved.secondaryCtaLabel}
              spaceClassName={spacing.className}
              spaceHeight={spacing.height}
              subtext={resolved.subtext}
              textColor={resolved.textColor}
              variant={variant}
            />
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const CTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush",
  ...props
}: CTAWithBackgroundImageProps) => {
  const previewHeading = props.heading ?? variantContent[variant].heading;

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
      </Head>
      <Preview>{previewHeading}</Preview>
      <Tailwind config={theme}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
            fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
          >
            <CTAWithBackgroundImageSection
              {...props}
              pageBackgroundColor={pageBackgroundColor}
              variant={variant}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

CTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush",
} satisfies CTAWithBackgroundImageProps;
