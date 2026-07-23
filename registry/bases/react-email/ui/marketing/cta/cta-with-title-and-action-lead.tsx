/* eslint-disable @next/next/no-img-element */
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CTAWithTitleAndActionLeadVariant =
  | "title-and-lead"
  | "secondary-button"
  | "minimal";

export interface CTAWithTitleAndActionLeadProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  signoff?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonBackgroundColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  variant?: CTAWithTitleAndActionLeadVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const arrowSrc =
  "https://assets.mailviews.com/images/components/icon-arrow-right.png";

const responsiveStyles = `
  @media only screen and (max-width: 430px) {
    .cta-title-action-cell {
      display: block !important;
    }

    .cta-title-action-gap {
      line-height: 24px !important;
    }
  }

  .cta-title-action-primary:hover {
    background-color: #4338ca !important;
  }

  .cta-title-action-secondary:hover {
    background-color: #f9fafb !important;
  }
`;

type SectionProps = Omit<CTAWithTitleAndActionLeadProps, "theme">;

const defaultSectionProps = {
  backgroundColor: "#fffffe",
  ctaHref: "https://example.com/",
  heading: "Confirm your email",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  primaryButtonBackgroundColor: "#4f46e5",
  primaryButtonTextColor: "#f8fafc",
  secondaryButtonBackgroundColor: "#fffffe",
  secondaryButtonBorderColor: "#d1d5db",
  secondaryButtonTextColor: "#4b5563",
  secondaryCtaHref: "https://example.com/",
  secondaryCtaLabel: "Learn more",
  signoff: "Thank you, the Mailviews Team",
  subtext:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  textColor: "#4b5563",
  variant: "title-and-lead",
} satisfies SectionProps;

export const CTAWithTitleAndActionLeadSection = (props: SectionProps) => {
  const {
    backgroundColor,
    ctaHref,
    ctaLabel,
    heading,
    headingColor,
    pageBackgroundColor,
    primaryButtonBackgroundColor,
    primaryButtonTextColor,
    secondaryButtonBackgroundColor,
    secondaryButtonBorderColor,
    secondaryButtonTextColor,
    secondaryCtaHref,
    secondaryCtaLabel,
    signoff,
    subtext,
    textColor,
    variant,
  } = { ...defaultSectionProps, ...props };
  const resolvedCtaLabel =
    ctaLabel ??
    (variant === "title-and-lead" ? "Activate account" : "Shop now");

  const primaryButton = (
    <a
      className="cta-title-action-primary"
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
      <span style={{ marginRight: variant === "minimal" ? "8px" : 0 }}>
        {resolvedCtaLabel}
      </span>
      {variant === "minimal" ? (
        <img
          alt=""
          src={arrowSrc}
          style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          width="12"
        />
      ) : null}
    </a>
  );

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
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
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
                  <td style={{ padding: "0 24px", textAlign: "center" }}>
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    {variant === "minimal" ? (
                      <>
                        {primaryButton}
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <p
                          style={{
                            color: headingColor,
                            fontFamily,
                            fontSize: "14px",
                            fontWeight: 600,
                            lineHeight: "20px",
                            margin: 0,
                          }}
                        >
                          {signoff}
                        </p>
                      </>
                    ) : (
                      <>
                        <h2
                          style={{
                            color: headingColor,
                            fontFamily,
                            fontSize: "30px",
                            fontWeight: 500,
                            lineHeight: "36px",
                            margin: 0,
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
                          }}
                        >
                          {subtext}
                        </p>
                        <div style={{ lineHeight: "36px" }}>&zwj;</div>
                        {variant === "title-and-lead" ? (
                          primaryButton
                        ) : (
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
                                <td className="cta-title-action-cell">
                                  {primaryButton}
                                </td>
                                <td
                                  className="cta-title-action-cell cta-title-action-gap"
                                  style={{ width: "24px" }}
                                >
                                  &zwj;
                                </td>
                                <td className="cta-title-action-cell">
                                  <a
                                    className="cta-title-action-secondary"
                                    href={secondaryCtaHref}
                                    style={{
                                      backgroundColor:
                                        secondaryButtonBackgroundColor,
                                      border: `1px solid ${secondaryButtonBorderColor}`,
                                      borderRadius: "8px",
                                      color: secondaryButtonTextColor,
                                      display: "inline-block",
                                      fontFamily,
                                      fontSize: "16px",
                                      fontWeight: 600,
                                      lineHeight: "24px",
                                      padding: "10px 22px",
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
                        )}
                      </>
                    )}
                  </td>
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

export const CTAWithTitleAndActionLead = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "title-and-lead",
  ...props
}: CTAWithTitleAndActionLeadProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>
      {variant === "minimal"
        ? (props.signoff ?? "Shop now")
        : (props.heading ?? "Confirm your email")}
    </Preview>
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <CTAWithTitleAndActionLeadSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

CTAWithTitleAndActionLead.PreviewProps = {
  theme: defaultTheme,
  variant: "title-and-lead",
} satisfies CTAWithTitleAndActionLeadProps;
