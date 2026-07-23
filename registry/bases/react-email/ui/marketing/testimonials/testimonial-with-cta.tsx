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
  Link,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TestimonialWithCtaVariant = "centered" | "split";

export interface TestimonialWithCtaProps {
  theme?: TailwindConfig;
  variant?: TestimonialWithCtaVariant;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
  quoteIconSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .testimonial-split-column { display: block !important; width: 100% !important; }",
  "  .testimonial-split-gap { display: block !important; line-height: 24px !important; width: 100% !important; }",
  "  .testimonial-centered-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .testimonial-centered-quote { font-size: 24px !important; line-height: 32px !important; }",
  "}",
].join("\n");

export const TestimonialWithCtaSection = ({
  variant = "centered",
  quote,
  author = "Jason Adam",
  role = "Director of Operations at Monarch",
  company = "Monarch",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-1.jpg",
  quoteIconSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/quote.png",
  ctaLabel = "Read Monarch's case study",
  ctaHref = "https://example.com",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
}: Omit<TestimonialWithCtaProps, "theme">) => {
  const centered = variant === "centered";
  const resolvedQuote =
    quote ??
    (centered
      ? "After redesigning our emails with emailcn, we saw an increase in engagement by 40%."
      : "After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.");

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
                  <Column
                    className={
                      centered ? "testimonial-centered-content" : undefined
                    }
                    style={{
                      padding: centered ? "0 44px" : "0 24px",
                      textAlign: centered ? "center" : "left",
                    }}
                  >
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {centered ? (
                      <Section style={{ textAlign: "center" }}>
                        <Img
                          alt=""
                          src={quoteIconSrc}
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
                          width={36}
                        />
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <Heading
                          className="testimonial-centered-quote"
                          style={{
                            color: "#030712",
                            fontFamily,
                            fontSize: "30px",
                            fontWeight: 600,
                            lineHeight: "36px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h2"
                        >
                          {resolvedQuote}
                        </Heading>
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
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
                        <Section style={{ lineHeight: "8px" }}>&zwj;</Section>
                        <Text
                          style={{
                            color: "#4b5563",
                            fontFamily,
                            fontSize: "16px",
                            fontWeight: 600,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {author}, <br /> {role}
                        </Text>
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <Text style={{ margin: 0, textAlign: "center" }}>
                          <Link
                            href={ctaHref}
                            style={{
                              color: "#4f46e5",
                              fontFamily,
                              fontSize: "16px",
                              fontWeight: 500,
                              lineHeight: "24px",
                              textDecoration: "none",
                            }}
                          >
                            {ctaLabel}
                          </Link>
                        </Text>
                      </Section>
                    ) : (
                      <Section width="100%">
                        <Fragment>
                          <Row>
                            <Column
                              className="testimonial-split-column"
                              style={{ verticalAlign: "top", width: "104px" }}
                            >
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
                              <Section style={{ lineHeight: "8px" }}>
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
                                <span style={{ color: "#4b5563" }}>
                                  {company}
                                </span>
                              </Text>
                            </Column>
                            <Column
                              className="testimonial-split-gap"
                              style={{ width: "44px" }}
                            >
                              &zwj;
                            </Column>
                            <Column className="testimonial-split-column">
                              <Img
                                alt=""
                                src={quoteIconSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={36}
                              />
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Heading
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "20px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                                as="h2"
                              >
                                {resolvedQuote}
                              </Heading>
                              <Section style={{ lineHeight: "24px" }}>
                                &zwj;
                              </Section>
                              <Link
                                href={ctaHref}
                                style={{
                                  color: "#4f46e5",
                                  fontFamily,
                                  fontSize: "16px",
                                  fontWeight: 500,
                                  lineHeight: "24px",
                                  textDecoration: "none",
                                }}
                              >
                                {ctaLabel}
                              </Link>
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

export const TestimonialWithCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: TestimonialWithCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Customer testimonial</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <TestimonialWithCtaSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

TestimonialWithCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies TestimonialWithCtaProps;
