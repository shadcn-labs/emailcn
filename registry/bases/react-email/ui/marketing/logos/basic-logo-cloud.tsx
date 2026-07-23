import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type BasicLogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full";

export interface BasicLogoCloudProps {
  theme?: TailwindConfig;
  title?: string;
  description?: string;
  logos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: BasicLogoCloudVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .basic-logo-item {
      display: inline-block !important;
      padding: 0 12px 12px !important;
    }
    .basic-logo-gap {
      display: none !important;
      width: 24px !important;
    }
    .basic-logo-description-gap { line-height: 20px !important; }
  }
`;

const defaultLogos = [
  {
    alt: "Stripe",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
    width: 57,
  },
  {
    alt: "Apple Pay",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-apple-pay.png",
    width: 60,
  },
  {
    alt: "Mastercard",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mastercard.png",
    width: 40,
  },
  {
    alt: "Visa",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-visa.png",
    width: 50,
  },
  {
    alt: "Klarna",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-klarna.png",
    width: 70,
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type SectionProps = Omit<BasicLogoCloudProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

export const BasicLogoCloudSection = (props: SectionProps) => {
  const variant = props.variant ?? "full";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const logos = resolved.logos.slice(0, 5);
  const showTitle = variant === "with-title" || variant === "full";
  const showDescription = variant === "with-description" || variant === "full";

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
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {showTitle ? (
                      <>
                        <Heading
                          style={{
                            color: resolved.titleColor,
                            fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h3"
                        >
                          {resolved.title}
                        </Heading>
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      </>
                    ) : null}
                    <Section align="center" style={{ margin: "0 auto" }}>
                      <Fragment>
                        <Row>
                          {logos.map((logo, index) => (
                            <Fragment key={logo.alt + logo.src}>
                              {index > 0 ? (
                                <Column
                                  className="basic-logo-gap"
                                  style={{ width: "36px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              <Column
                                className="basic-logo-item"
                                style={{ textAlign: "center" }}
                              >
                                <Img
                                  alt={logo.alt}
                                  src={logo.src}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={logo.width}
                                />
                              </Column>
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <>
                        <Section
                          className="basic-logo-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
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
                          {resolved.description}
                        </Text>
                      </>
                    ) : null}
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

export const BasicLogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "full",
  ...props
}: BasicLogoCloudProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Supported payment services</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <BasicLogoCloudSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

BasicLogoCloud.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies BasicLogoCloudProps;
