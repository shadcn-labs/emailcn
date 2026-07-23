/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

export type TestimonialWithCtaVariant = "centered" | "split";

export interface TestimonialWithCtaProps {
  theme?: EmailThemeTokens;
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
                  <td
                    className={
                      centered ? "testimonial-centered-content" : undefined
                    }
                    style={{
                      padding: centered ? "0 44px" : "0 24px",
                      textAlign: centered ? "center" : "left",
                    }}
                  >
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    {centered ? (
                      <div style={{ textAlign: "center" }}>
                        <img
                          alt=""
                          src={quoteIconSrc}
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
                          width={36}
                        />
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <h2
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
                        >
                          {resolvedQuote}
                        </h2>
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <img
                          alt=""
                          src={avatarSrc}
                          style={{
                            borderRadius: "9999px",
                            maxWidth: "100%",
                            verticalAlign: "middle",
                          }}
                          width={64}
                        />
                        <div style={{ lineHeight: "8px" }}>&zwj;</div>
                        <p
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
                        </p>
                        <div style={{ lineHeight: "24px" }}>&zwj;</div>
                        <p style={{ margin: 0, textAlign: "center" }}>
                          <a
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
                          </a>
                        </p>
                      </div>
                    ) : (
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
                              className="testimonial-split-column"
                              style={{ verticalAlign: "top", width: "104px" }}
                            >
                              <img
                                alt=""
                                src={avatarSrc}
                                style={{
                                  borderRadius: "9999px",
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={64}
                              />
                              <div style={{ lineHeight: "8px" }}>&zwj;</div>
                              <p
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
                              </p>
                            </td>
                            <td
                              className="testimonial-split-gap"
                              style={{ width: "44px" }}
                            >
                              &zwj;
                            </td>
                            <td className="testimonial-split-column">
                              <img
                                alt=""
                                src={quoteIconSrc}
                                style={{
                                  maxWidth: "100%",
                                  verticalAlign: "middle",
                                }}
                                width={36}
                              />
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <h2
                                style={{
                                  color: "#030712",
                                  fontFamily,
                                  fontSize: "20px",
                                  fontWeight: 600,
                                  lineHeight: "28px",
                                  margin: 0,
                                }}
                              >
                                {resolvedQuote}
                              </h2>
                              <div style={{ lineHeight: "24px" }}>&zwj;</div>
                              <a
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
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
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
