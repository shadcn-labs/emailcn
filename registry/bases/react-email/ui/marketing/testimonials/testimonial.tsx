import { Fragment } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Img,
  Link,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
type FullWidthTestimonial_FullWidthTestimonialVariant =
  | "default"
  | "overlapping-avatar";
interface FullWidthTestimonial_FullWidthTestimonialProps {
  theme?: TailwindConfig;
  variant?: FullWidthTestimonial_FullWidthTestimonialVariant;
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}
const FullWidthTestimonial_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const FullWidthTestimonial_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .full-testimonial-card { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");
const FullWidthTestimonial_FullWidthTestimonialSection = ({
  variant = "default",
  quote = "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”",
  author = "Ella Roustek",
  role = "Operations Manager",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-2.jpg",
  logoSrc,
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f8fafc",
}: Omit<FullWidthTestimonial_FullWidthTestimonialProps, "theme">) => {
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
                                  fontFamily: FullWidthTestimonial_fontFamily,
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
                                  fontFamily: FullWidthTestimonial_fontFamily,
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
                                  fontFamily: FullWidthTestimonial_fontFamily,
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
                                          fontFamily:
                                            FullWidthTestimonial_fontFamily,
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
const FullWidthTestimonial_FullWidthTestimonial = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthTestimonial_FullWidthTestimonialProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: FullWidthTestimonial_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Customer testimonial</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: FullWidthTestimonial_fontFamily,
        margin: 0,
      }}
    >
      <FullWidthTestimonial_FullWidthTestimonialSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);
FullWidthTestimonial_FullWidthTestimonial.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonial_FullWidthTestimonialProps;
const __FullWidthTestimonial = FullWidthTestimonial_FullWidthTestimonial;
type TestimonialCta_TestimonialWithCtaVariant = "centered" | "split";
interface TestimonialCta_TestimonialWithCtaProps {
  theme?: TailwindConfig;
  variant?: TestimonialCta_TestimonialWithCtaVariant;
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
const TestimonialCta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const TestimonialCta_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .testimonial-split-column { display: block !important; width: 100% !important; }",
  "  .testimonial-split-gap { display: block !important; line-height: 24px !important; width: 100% !important; }",
  "  .testimonial-centered-content { padding-left: 24px !important; padding-right: 24px !important; }",
  "  .testimonial-centered-quote { font-size: 24px !important; line-height: 32px !important; }",
  "}",
].join("\n");
const TestimonialCta_TestimonialWithCtaSection = ({
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
}: Omit<TestimonialCta_TestimonialWithCtaProps, "theme">) => {
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
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "middle",
                          }}
                          width={36}
                        />
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <Heading
                          className="testimonial-centered-quote"
                          style={{
                            color: "#030712",
                            fontFamily: TestimonialCta_fontFamily,
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
                            fontFamily: TestimonialCta_fontFamily,
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
                              fontFamily: TestimonialCta_fontFamily,
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
                                  fontFamily: TestimonialCta_fontFamily,
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
                                  fontFamily: TestimonialCta_fontFamily,
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
                                  fontFamily: TestimonialCta_fontFamily,
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
const TestimonialCta_TestimonialWithCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: TestimonialCta_TestimonialWithCtaProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TestimonialCta_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Customer testimonial</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TestimonialCta_fontFamily,
        margin: 0,
      }}
    >
      <TestimonialCta_TestimonialWithCtaSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);
TestimonialCta_TestimonialWithCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies TestimonialCta_TestimonialWithCtaProps;
const __TestimonialCta = TestimonialCta_TestimonialWithCta;
export interface TestimonialProps {
  theme?: Parameters<typeof __FullWidthTestimonial>[0]["theme"];
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatar?: {
    src: string;
    alt?: string;
  };
  logo?: {
    src: string;
    alt?: string;
  };
  layout?: "full-width" | "centered" | "split";
  avatarTreatment?: "inline" | "overlapping";
  action?: {
    href: string;
    label: string;
  };
}
export const Testimonial = ({
  theme,
  quote,
  author,
  role,
  company,
  avatar,
  logo,
  layout = "full-width",
  avatarTreatment = "inline",
  action,
}: TestimonialProps) =>
  (() => {
    if (layout === "full-width") {
      return (
        <__FullWidthTestimonial
          author={author}
          avatarSrc={avatar?.src}
          logoSrc={logo?.src}
          quote={quote}
          role={role}
          theme={theme}
          variant={
            avatarTreatment === "overlapping" ? "overlapping-avatar" : "default"
          }
        />
      );
    }
    return (
      <__TestimonialCta
        author={author}
        avatarSrc={avatar?.src}
        company={company}
        ctaHref={action?.href}
        ctaLabel={action?.label}
        quote={quote}
        role={role}
        theme={theme}
        variant={layout}
      />
    );
  })();
Testimonial.PreviewProps = {
  avatarTreatment: "inline",
  layout: "full-width",
} satisfies TestimonialProps;
