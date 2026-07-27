import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Link,
  Section,
  Row,
  Column,
  Text,
  Heading,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

type CtaBundle_CTAWithTitleAndActionLeadVariant =
  | "title-and-lead"
  | "secondary-button"
  | "minimal";

interface CtaBundle_CTAWithTitleAndActionLeadProps {
  theme?: EmailTheme;
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
  variant?: CtaBundle_CTAWithTitleAndActionLeadVariant;
}

const CtaBundle_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CtaBundle_arrowSrc =
  "https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png";

const CtaBundle_responsiveStyles = `
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

type CtaBundle_SectionProps = Omit<
  CtaBundle_CTAWithTitleAndActionLeadProps,
  "theme"
>;

const CtaBundle_defaultSectionProps = {
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
  signoff: "Thank you, the emailcn Team",
  subtext:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  textColor: "#4b5563",
  variant: "title-and-lead",
} satisfies CtaBundle_SectionProps;

const CtaBundle_CTAWithTitleAndActionLeadSection = (
  props: CtaBundle_SectionProps
) => {
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
  } = { ...CtaBundle_defaultSectionProps, ...props };
  const resolvedCtaLabel =
    ctaLabel ??
    (variant === "title-and-lead" ? "Activate account" : "Shop now");
  const primaryButton = (
    <Link
      className="cta-title-action-primary"
      href={ctaHref}
      style={{
        backgroundColor: primaryButtonBackgroundColor,
        borderRadius: "8px",
        color: primaryButtonTextColor,
        display: "inline-block",
        fontFamily: CtaBundle_fontFamily,
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
        <Img
          alt=""
          src={CtaBundle_arrowSrc}
          style={{ maxWidth: "100%", verticalAlign: "baseline" }}
          width="12"
        />
      ) : null}
    </Link>
  );
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
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {(() => {
                      if (variant === "minimal") {
                        return (
                          <>
                            {primaryButton}
                            <Section style={{ lineHeight: "24px" }}>
                              &zwj;
                            </Section>
                            <Text
                              style={{
                                color: headingColor,
                                fontFamily: CtaBundle_fontFamily,
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "20px",
                                margin: 0,
                              }}
                            >
                              {signoff}
                            </Text>
                          </>
                        );
                      }
                      return (
                        <>
                          <Heading
                            style={{
                              color: headingColor,
                              fontFamily: CtaBundle_fontFamily,
                              fontSize: "30px",
                              fontWeight: 500,
                              lineHeight: "36px",
                              margin: 0,
                            }}
                            as="h2"
                          >
                            {heading}
                          </Heading>
                          <Section style={{ lineHeight: "24px" }}>
                            &zwj;
                          </Section>
                          <Text
                            style={{
                              color: textColor,
                              fontFamily: CtaBundle_fontFamily,
                              fontSize: "16px",
                              fontWeight: 300,
                              lineHeight: "24px",
                              margin: 0,
                            }}
                          >
                            {subtext}
                          </Text>
                          <Section style={{ lineHeight: "36px" }}>
                            &zwj;
                          </Section>
                          {variant === "title-and-lead" ? (
                            primaryButton
                          ) : (
                            <Section align="center" style={{ margin: "auto" }}>
                              <Fragment>
                                <Row>
                                  <Column className="cta-title-action-cell">
                                    {primaryButton}
                                  </Column>
                                  <Column
                                    className="cta-title-action-cell cta-title-action-gap"
                                    style={{ width: "24px" }}
                                  >
                                    &zwj;
                                  </Column>
                                  <Column className="cta-title-action-cell">
                                    <Link
                                      className="cta-title-action-secondary"
                                      href={secondaryCtaHref}
                                      style={{
                                        backgroundColor:
                                          secondaryButtonBackgroundColor,
                                        border: `1px solid ${secondaryButtonBorderColor}`,
                                        borderRadius: "8px",
                                        color: secondaryButtonTextColor,
                                        display: "inline-block",
                                        fontFamily: CtaBundle_fontFamily,
                                        fontSize: "16px",
                                        fontWeight: 600,
                                        lineHeight: "24px",
                                        padding: "10px 22px",
                                        textAlign: "center",
                                        textDecoration: "none",
                                      }}
                                    >
                                      {secondaryCtaLabel}
                                    </Link>
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                          )}
                        </>
                      );
                    })()}
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

const CtaBundle_CTAWithTitleAndActionLead = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "title-and-lead",
  ...props
}: CtaBundle_CTAWithTitleAndActionLeadProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: CtaBundle_responsiveStyles }} />
    </EmailHead>
    <Preview>
      {variant === "minimal"
        ? (props.signoff ?? "Shop now")
        : (props.heading ?? "Confirm your email")}
    </Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: CtaBundle_fontFamily,
        }}
        className="text-fg m-0"
      >
        <Container className="mx-auto max-w-[600px] w-[600px]">
          <CtaBundle_CTAWithTitleAndActionLeadSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

CtaBundle_CTAWithTitleAndActionLead.PreviewProps = {
  theme: defaultTheme,
  variant: "title-and-lead",
} satisfies CtaBundle_CTAWithTitleAndActionLeadProps;

const __CtaBundle = {
  Component: CtaBundle_CTAWithTitleAndActionLead,
  __CallToActionSection: CtaBundle_CTAWithTitleAndActionLeadSection,
};

const __Cta = __CtaBundle.Component;

const { __CallToActionSection } = __CtaBundle;

export interface CallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  signoff?: string;
  actions?: {
    href: string;
    label: string;
  }[];
}

export const CallToAction = ({
  theme,
  heading,
  description,
  signoff,
  actions,
}: CallToActionProps) => (
  <__Cta
    ctaHref={actions?.[0]?.href}
    ctaLabel={actions?.[0]?.label}
    heading={heading}
    secondaryCtaHref={actions?.[1]?.href}
    secondaryCtaLabel={actions?.[1]?.label}
    signoff={signoff}
    subtext={description}
    theme={theme}
    variant={(() => {
      if (actions && actions.length > 1) {
        return "secondary-button";
      }
      if (signoff) {
        return "title-and-lead";
      }
      return "minimal";
    })()}
  />
);

export const CallToActionSection = __CallToActionSection;

CallToAction.PreviewProps = {} satisfies CallToActionProps;
