/* eslint-disable @next/next/no-img-element */
import { Body, Container, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface CTAWithTopLargeImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .cta-top-image-content {
      padding-left: 24px !important;
      padding-right: 24px !important;
    }
  }

  .cta-top-image-button:hover {
    background-color: #4338ca !important;
  }
`;

type SectionProps = Omit<CTAWithTopLargeImageProps, "theme">;

const defaultSectionProps = {
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#f8fafc",
  ctaHref: "https://example.com/",
  ctaLabel: "Activate & Save",
  heading: "Built for the journey ahead.",
  headingColor: "#030712",
  imageAlt: "",
  imageSrc:
    "https://assets.mailviews.com/images/components/cta/cta-with-image-1.jpg",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "You’re one step away from exploring our latest outdoor essentials. Confirm your email to complete your setup and get 10% off your first order.",
  textColor: "#4b5563",
} satisfies SectionProps;

export const CTAWithTopLargeImageSection = (props: SectionProps) => {
  const resolved = { ...defaultSectionProps, ...props };

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
                  <td
                    className="cta-top-image-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    <img
                      alt={resolved.imageAlt}
                      src={resolved.imageSrc}
                      style={{
                        borderRadius: "4px",
                        maxWidth: "100%",
                        verticalAlign: "middle",
                      }}
                      width="472"
                    />
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <h2
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "30px",
                        fontWeight: 500,
                        lineHeight: "36px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.heading}
                    </h2>
                    <div style={{ lineHeight: "24px" }}>&zwj;</div>
                    <p
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.subtext}
                    </p>
                    <div style={{ lineHeight: "36px" }}>&zwj;</div>
                    <a
                      className="cta-top-image-button"
                      href={resolved.ctaHref}
                      style={{
                        backgroundColor: resolved.buttonBackgroundColor,
                        borderRadius: "8px",
                        color: resolved.buttonTextColor,
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
                      {resolved.ctaLabel}
                    </a>
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

export const CTAWithTopLargeImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithTopLargeImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? defaultSectionProps.heading}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CTAWithTopLargeImageSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </Container>
    </Body>
  </Html>
);

CTAWithTopLargeImage.PreviewProps = {
  theme: defaultTheme,
} satisfies CTAWithTopLargeImageProps;
