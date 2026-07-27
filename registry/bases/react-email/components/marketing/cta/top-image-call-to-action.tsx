import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
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

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

interface Cta_CTAWithTopLargeImageProps {
  theme?: EmailTheme;
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

const Cta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const Cta_responsiveStyles = `
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

type Cta_SectionProps = Omit<Cta_CTAWithTopLargeImageProps, "theme">;

const Cta_defaultSectionProps = {
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#f8fafc",
  ctaHref: "https://example.com/",
  ctaLabel: "Activate & Save",
  heading: "Built for the journey ahead.",
  headingColor: "#030712",
  imageAlt: "",
  imageSrc: emailAsset("cta/cta-with-image-1.jpg"),
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "You’re one step away from exploring our latest outdoor essentials. Confirm your email to complete your setup and get 10% off your first order.",
  textColor: "#4b5563",
} satisfies Cta_SectionProps;

const Cta_CTAWithTopLargeImageSection = (props: Cta_SectionProps) => {
  const resolved = { ...Cta_defaultSectionProps, ...props };
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
                        fontFamily: Cta_fontFamily,
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
                        fontFamily: Cta_fontFamily,
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
                        fontFamily: Cta_fontFamily,
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

const Cta_CTAWithTopLargeImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Cta_CTAWithTopLargeImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: Cta_responsiveStyles }} />
    </EmailHead>
    <Preview>{props.heading ?? Cta_defaultSectionProps.heading}</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: Cta_fontFamily,
        }}
        className="m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <Cta_CTAWithTopLargeImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

Cta_CTAWithTopLargeImage.PreviewProps = {
  theme: defaultTheme,
} satisfies Cta_CTAWithTopLargeImageProps;

const __Cta = Cta_CTAWithTopLargeImage;

export interface TopImageCallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  action?: {
    href: string;
    label: string;
  };
  image?: {
    src: string;
    alt?: string;
  };
}

export const TopImageCallToAction = ({
  theme,
  heading,
  description,
  action,
  image,
}: TopImageCallToActionProps) => (
  <__Cta
    ctaHref={action?.href}
    ctaLabel={action?.label}
    heading={heading}
    imageAlt={image?.alt}
    imageSrc={image?.src}
    subtext={description}
    theme={theme}
  />
);

TopImageCallToAction.PreviewProps = {} satisfies TopImageCallToActionProps;
