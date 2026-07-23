import { Fragment } from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface CTAWithTopLargeImageProps {
  theme?: TailwindConfig;
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
    "https://emailcn.vercel.app/api/email-assets/cta/cta-with-image-1.jpg",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "You’re one step away from exploring our latest outdoor essentials. Confirm your email to complete your setup and get 10% off your first order.",
  textColor: "#4b5563",
} satisfies SectionProps;

export const CTAWithTopLargeImageSection = (props: SectionProps) => {
  const resolved = { ...defaultSectionProps, ...props };

  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="cta-top-image-content"
                    style={{ padding: "0 64px", textAlign: "center" }}
                  >
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Img
                      alt={resolved.imageAlt}
                      src={resolved.imageSrc}
                      style={{
                        borderRadius: "4px",
                        maxWidth: "100%",
                        verticalAlign: "middle",
                      }}
                      width="472"
                    />
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Heading
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "30px",
                        fontWeight: 500,
                        lineHeight: "36px",
                        margin: 0,
                        textAlign: "center",
                      }}
                      as="h2"
                    >
                      {resolved.heading}
                    </Heading>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
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
                    </Text>
                    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                    <Link
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
                    </Link>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
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
    </Tailwind>
  </Html>
);

CTAWithTopLargeImage.PreviewProps = {
  theme: defaultTheme,
} satisfies CTAWithTopLargeImageProps;
