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
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export type FullWidthTestimonialVariant = "default" | "overlapping-avatar";

export interface FullWidthTestimonialProps {
  theme?: EmailThemeTokens;
  variant?: FullWidthTestimonialVariant;
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .full-testimonial-card { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

export const FullWidthTestimonialSection = ({
  variant = "default",
  quote = "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”",
  author = "Ella Roustek",
  role = "Operations Manager",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-2.jpg",
  logoSrc,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f8fafc",
}: Omit<FullWidthTestimonialProps, "theme">) => {
  const overlapping = variant === "overlapping-avatar";
  const resolvedLogoSrc =
    logoSrc ??
    (overlapping
      ? "https://emailcn.vercel.app/api/email-assets/testimonials/logo-accentic.png"
      : "https://emailcn.vercel.app/api/email-assets/testimonials/logo-monarch.png");

  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {overlapping ? (
                      <Section width="100%">
                        <Fragment>
                          <Row>
                            <Column
                              className="full-testimonial-card"
                              style={{
                                backgroundColor: cardBackgroundColor,
                                borderRadius: "8px",
                                padding: "48px 44px 24px",
                              }}
                            >
                              <Heading
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                                as="h2"
                              >
                                {quote}
                              </Heading>
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Img
                                alt=""
                                src={resolvedLogoSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={106}
                              />
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Text
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  lineHeight: "24px",
                                  margin: 0,
                                }}
                              >
                                {author}, <br />{" "}
                                <span style={{ color: "#4b5563" }}>{role}</span>
                              </Text>
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Section style={{ maxHeight: "8px" }}>
                                <Img
                                  alt=""
                                  src={avatarSrc}
                                  style={{
                                    borderRadius: "9999px",
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={64}
                                />
                              </Section>
                            </Column>
                          </Row>
                        </Fragment>
                      </Section>
                    ) : (
                      <Section width="100%">
                        <Fragment>
                          <Row>
                            <Column>
                              <Img
                                alt=""
                                src={resolvedLogoSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={145}
                              />
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Heading
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "18px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                                as="h2"
                              >
                                {quote}
                              </Heading>
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Section>
                                <Fragment>
                                  <Row>
                                    <Column style={{ width: "64px" }}>
                                      <Img
                                        alt=""
                                        src={avatarSrc}
                                        style={{
                                          borderRadius: "9999px",
                                          maxWidth: "100%",
                                          verticalAlign: "middle",
                                        }}
                                        width={64}
                                      />
                                    </Column>
                                    <Column style={{ width: "12px" }}>
                                      &zwj;
                                    </Column>
                                    <Column>
                                      <Text
                                        style={{
                                          color: "#030712",
                                          fontFamily,
                                          fontSize: "16px",
                                          fontWeight: 600,
                                          lineHeight: "24px",
                                          margin: 0,
                                        }}
                                      >
                                        {author}, <br />{" "}
                                        <span style={{ color: "#4b5563" }}>
                                          {role}
                                        </span>
                                      </Text>
                                    </Column>
                                  </Row>
                                </Fragment>
                              </Section>
                            </Column>
                          </Row>
                        </Fragment>
                      </Section>
                    )}
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

export const FullWidthTestimonial = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthTestimonialProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Customer testimonial</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FullWidthTestimonialSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FullWidthTestimonial.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonialProps;
