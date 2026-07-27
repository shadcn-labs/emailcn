import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Link,
} from "jsx-email";
import { Fragment } from "react";

import { EmailTailwind } from "@/components/email/email-tailwind";
import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

type BackgroundCta_CTAWithBackgroundImageVariant = "flush" | "boxed" | "padded";

interface BackgroundCta_CTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  emphasis?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  variant?: BackgroundCta_CTAWithBackgroundImageVariant;
}

const BackgroundCta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BackgroundCta_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .cta-background-action-cell {
        display: block !important;
      }

      .cta-background-action-gap {
        line-height: 24px !important;
      }
    }

    @media only screen and (max-width: 430px) {
      .cta-background-side {
        width: 24px !important;
      }

      .cta-background-flush-space {
        line-height: 80px !important;
      }

      .cta-background-boxed-space {
        line-height: 44px !important;
      }

      .cta-background-padded-space {
        line-height: 64px !important;
      }
    }

    .cta-background-primary:hover {
      background-color: #4338ca !important;
    }
  `;

const BackgroundCta_variantContent = {
  boxed: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-2.jpg",
    ctaLabel: "Sign up now",
    emphasis: "",
    heading: "Your upgrade starts here!",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Step into the next generation of innovation. Sleek design, pro-level performance, and features that keep you ahead of the curve.",
  },
  flush: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-1.jpg",
    ctaLabel: "Shop gear now",
    emphasis: "",
    heading: "Ready for your next summit?",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Gear up with performance equipment built for the climb. From durable packs to weatherproof layers, everything you need to take on the wild with confidence.",
  },
  padded: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-3.jpg",
    ctaLabel: "Plan your trip",
    emphasis: "Book your next getaway and enjoy 20% off with code.",
    heading: "Your island escape awaits!",
    secondaryCtaLabel: "View packages",
    subtext:
      "Experience paradise your way, crystal waters, white sands, and unforgettable moments.",
  },
} satisfies Record<
  BackgroundCta_CTAWithBackgroundImageVariant,
  {
    backgroundSrc: string;
    ctaLabel: string;
    emphasis: string;
    heading: string;
    secondaryCtaLabel: string;
    subtext: string;
  }
>;

const BackgroundCta_defaultSectionStyles = {
  backgroundColor: "#fffffe",
  ctaHref: "https://example.com/",
  headingColor: "#fffffe",
  overlayColor: "rgba(3, 7, 18, 0.5)",
  pageBackgroundColor: "#f1f5f9",
  primaryButtonBackgroundColor: "#4f46e5",
  primaryButtonTextColor: "#f8fafc",
  secondaryButtonBorderColor: "#d1d5db",
  secondaryButtonTextColor: "#fffffe",
  secondaryCtaHref: "https://example.com/",
  textColor: "#fffffe",
};

const BackgroundCta_variantSpacing = {
  boxed: { className: "cta-background-boxed-space", height: 64 },
  flush: { className: "cta-background-flush-space", height: 91 },
  padded: { className: "cta-background-padded-space", height: 72 },
} satisfies Record<
  BackgroundCta_CTAWithBackgroundImageVariant,
  {
    className: string;
    height: number;
  }
>;

type BackgroundCta_SectionProps = Omit<
  BackgroundCta_CTAWithBackgroundImageProps,
  "theme"
>;

interface BackgroundCta_ContentProps {
  ctaHref: string;
  ctaLabel: string;
  emphasis: string;
  heading: string;
  headingColor: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  secondaryButtonBorderColor: string;
  secondaryButtonTextColor: string;
  secondaryCtaHref: string;
  secondaryCtaLabel: string;
  spaceClassName: string;
  spaceHeight: number;
  subtext: string;
  textColor: string;
}

const BackgroundCta_CTAContent = ({
  ctaHref,
  ctaLabel,
  emphasis,
  heading,
  headingColor,
  primaryButtonBackgroundColor,
  primaryButtonTextColor,
  secondaryButtonBorderColor,
  secondaryButtonTextColor,
  secondaryCtaHref,
  secondaryCtaLabel,
  spaceClassName,
  spaceHeight,
  subtext,
  textColor,
}: BackgroundCta_ContentProps) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column className="cta-background-side" style={{ width: "64px" }}>
          &zwj;
        </Column>
        <Column style={{ textAlign: "center" }}>
          <Section
            className={spaceClassName}
            style={{ lineHeight: `${spaceHeight}px` }}
          >
            &zwj;
          </Section>
          <Heading
            style={{
              color: headingColor,
              fontFamily: BackgroundCta_fontFamily,
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36px",
              margin: 0,
              textAlign: "center",
            }}
            as="h2"
          >
            {heading}
          </Heading>
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: textColor,
              fontFamily: BackgroundCta_fontFamily,
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: "24px",
              margin: 0,
              textAlign: "center",
            }}
          >
            {subtext}
            {emphasis ? (
              <>
                {" "}
                <span style={{ fontWeight: 700 }}>{emphasis}</span>
              </>
            ) : null}
          </Text>
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Section align="center" style={{ margin: "auto" }}>
            <Fragment>
              <Row>
                <Column className="cta-background-action-cell">
                  <Link
                    className="cta-background-primary"
                    href={ctaHref}
                    style={{
                      backgroundColor: primaryButtonBackgroundColor,
                      borderRadius: "8px",
                      color: primaryButtonTextColor,
                      display: "inline-block",
                      fontFamily: BackgroundCta_fontFamily,
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      padding: "10px 22px",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    {ctaLabel}
                  </Link>
                </Column>
                <Column
                  className="cta-background-action-cell cta-background-action-gap"
                  style={{ width: "24px" }}
                >
                  &zwj;
                </Column>
                <Column className="cta-background-action-cell">
                  <Link
                    href={secondaryCtaHref}
                    style={{
                      backgroundColor: "transparent",
                      border: `1px solid ${secondaryButtonBorderColor}`,
                      borderRadius: "8px",
                      color: secondaryButtonTextColor,
                      display: "inline-block",
                      fontFamily: BackgroundCta_fontFamily,
                      fontSize: "16px",
                      fontWeight: 600,
                      lineHeight: "24px",
                      padding: "9px 22px",
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
          <Section
            className={spaceClassName}
            style={{ lineHeight: `${spaceHeight}px` }}
          >
            &zwj;
          </Section>
        </Column>
        <Column className="cta-background-side" style={{ width: "64px" }}>
          &zwj;
        </Column>
      </Row>
    </Fragment>
  </Section>
);

interface BackgroundCta_VariantFrameProps extends BackgroundCta_ContentProps {
  backgroundSrc: string;
  overlayColor: string;
  variant: BackgroundCta_CTAWithBackgroundImageVariant;
}

const BackgroundCta_VariantFrame = ({
  backgroundSrc,
  overlayColor,
  variant,
  ...contentProps
}: BackgroundCta_VariantFrameProps) => {
  const content = <BackgroundCta_CTAContent {...contentProps} />;
  const backgroundStyle = {
    backgroundImage: `url('${backgroundSrc}')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  if (variant === "flush") {
    return (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column style={backgroundStyle}>
              <Section style={{ backgroundColor: overlayColor }} width="100%">
                <Fragment>
                  <Row>
                    <Column>{content}</Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  if (variant === "boxed") {
    return (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column style={backgroundStyle}>
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column style={{ width: "24px" }}>&zwj;</Column>
                    <Column
                      style={{
                        backgroundColor: overlayColor,
                        borderRadius: "4px",
                      }}
                    >
                      {content}
                    </Column>
                    <Column style={{ width: "24px" }}>&zwj;</Column>
                  </Row>
                </Fragment>
              </Section>
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  return (
    <>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      <Section width="100%">
        <Fragment>
          <Row>
            <Column style={{ width: "24px" }}>&zwj;</Column>
            <Column style={{ ...backgroundStyle, borderRadius: "4px" }}>
              <Section
                style={{ backgroundColor: overlayColor, borderRadius: "4px" }}
                width="100%"
              >
                <Fragment>
                  <Row>
                    <Column>{content}</Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column style={{ width: "24px" }}>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    </>
  );
};

const BackgroundCta_CTAWithBackgroundImageSection = (
  props: BackgroundCta_SectionProps
) => {
  const variant = props.variant ?? "flush";
  const resolved = {
    ...BackgroundCta_defaultSectionStyles,
    ...BackgroundCta_variantContent[variant],
    ...props,
  };
  const spacing = BackgroundCta_variantSpacing[variant];
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
              width: "600px",
            }}
          >
            <BackgroundCta_VariantFrame
              backgroundSrc={resolved.backgroundSrc}
              ctaHref={resolved.ctaHref}
              ctaLabel={resolved.ctaLabel}
              emphasis={resolved.emphasis}
              heading={resolved.heading}
              headingColor={resolved.headingColor}
              overlayColor={resolved.overlayColor}
              primaryButtonBackgroundColor={
                resolved.primaryButtonBackgroundColor
              }
              primaryButtonTextColor={resolved.primaryButtonTextColor}
              secondaryButtonBorderColor={resolved.secondaryButtonBorderColor}
              secondaryButtonTextColor={resolved.secondaryButtonTextColor}
              secondaryCtaHref={resolved.secondaryCtaHref}
              secondaryCtaLabel={resolved.secondaryCtaLabel}
              spaceClassName={spacing.className}
              spaceHeight={spacing.height}
              subtext={resolved.subtext}
              textColor={resolved.textColor}
              variant={variant}
            />
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const BackgroundCta_CTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush",
  ...props
}: BackgroundCta_CTAWithBackgroundImageProps) => {
  const previewHeading =
    props.heading ?? BackgroundCta_variantContent[variant].heading;
  return (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style
          dangerouslySetInnerHTML={{ __html: BackgroundCta_responsiveStyles }}
        />
      </EmailHead>
      <Preview>{previewHeading}</Preview>
      <EmailTailwind theme={theme}>
        <Body
          style={{
            backgroundColor: pageBackgroundColor,
          }}
          className="font-sans m-0"
        >
          <Container className="mx-auto max-w-[600px] w-[600px]">
            <BackgroundCta_CTAWithBackgroundImageSection
              {...props}
              pageBackgroundColor={pageBackgroundColor}
              variant={variant}
            />
          </Container>
        </Body>
      </EmailTailwind>
    </Html>
  );
};

BackgroundCta_CTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush",
} satisfies BackgroundCta_CTAWithBackgroundImageProps;

const __BackgroundCta = BackgroundCta_CTAWithBackgroundImage;

type BoxedBackgroundCta_BoxedCTAWithBackgroundImageVariant =
  | "flush-light"
  | "padded-light"
  | "flush-dark"
  | "padded-dark";

interface BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: BoxedBackgroundCta_BoxedCTAWithBackgroundImageVariant;
}

const BoxedBackgroundCta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BoxedBackgroundCta_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .boxed-cta-background-side {
        width: 24px !important;
      }
    }

    .boxed-cta-background-button:hover {
      background-color: #4338ca !important;
    }
  `;

const BoxedBackgroundCta_variantStyles = {
  "flush-dark": {
    backgroundColor: "#030712",
    cardBackgroundColor: "#030712",
    headingColor: "#fffffe",
    padded: false,
    textColor: "#d1d5db",
  },
  "flush-light": {
    backgroundColor: "#fffffe",
    cardBackgroundColor: "#fffffe",
    headingColor: "#030712",
    padded: false,
    textColor: "#4b5563",
  },
  "padded-dark": {
    backgroundColor: "#030712",
    cardBackgroundColor: "#030712",
    headingColor: "#fffffe",
    padded: true,
    textColor: "#d1d5db",
  },
  "padded-light": {
    backgroundColor: "#fffffe",
    cardBackgroundColor: "#fffffe",
    headingColor: "#030712",
    padded: true,
    textColor: "#4b5563",
  },
} satisfies Record<
  BoxedBackgroundCta_BoxedCTAWithBackgroundImageVariant,
  {
    backgroundColor: string;
    cardBackgroundColor: string;
    headingColor: string;
    padded: boolean;
    textColor: string;
  }
>;

const BoxedBackgroundCta_defaultSectionStyles = {
  backgroundImageSrc:
    "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-glow.png",
  buttonBackgroundColor: "#4f46e5",
  buttonTextColor: "#f8fafc",
  ctaHref: "https://example.com/",
  ctaLabel: "Activate account",
  heading: "Welcome to Your Workspace",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Your account is ready. Confirm your email to activate access, connect your tools, and start building smarter with our platform.",
};

type BoxedBackgroundCta_SectionProps = Omit<
  BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps,
  "theme"
>;

const BoxedBackgroundCta_BoxedCTAWithBackgroundImageSection = (
  props: BoxedBackgroundCta_SectionProps
) => {
  const variant = props.variant ?? "flush-light";
  const resolved = {
    ...BoxedBackgroundCta_defaultSectionStyles,
    ...BoxedBackgroundCta_variantStyles[variant],
    ...props,
  };
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
              backgroundImage: `url('${resolved.backgroundImageSrc}')`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              maxWidth: "100%",
              paddingBottom: resolved.padded ? "80px" : 0,
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    className="boxed-cta-background-side"
                    style={{ width: "44px" }}
                  >
                    &zwj;
                  </Column>
                  <Column>
                    <Section style={{ lineHeight: "80px" }}>&zwj;</Section>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          <Column
                            style={{
                              backgroundColor: resolved.cardBackgroundColor,
                              borderRadius: "4px",
                              padding: "0 44px",
                              textAlign: "center",
                            }}
                          >
                            <Section style={{ lineHeight: "44px" }}>
                              &zwj;
                            </Section>
                            <Heading
                              style={{
                                color: resolved.headingColor,
                                fontFamily: BoxedBackgroundCta_fontFamily,
                                fontSize: "24px",
                                fontWeight: 600,
                                lineHeight: "32px",
                                margin: 0,
                                textAlign: "center",
                              }}
                              as="h2"
                            >
                              {resolved.heading}
                            </Heading>
                            <Section style={{ lineHeight: "16px" }}>
                              &zwj;
                            </Section>
                            <Text
                              style={{
                                color: resolved.textColor,
                                fontFamily: BoxedBackgroundCta_fontFamily,
                                fontSize: "16px",
                                fontWeight: 300,
                                lineHeight: "24px",
                                margin: 0,
                                textAlign: "center",
                              }}
                            >
                              {resolved.subtext}
                            </Text>
                            <Section style={{ lineHeight: "36px" }}>
                              &zwj;
                            </Section>
                            <Link
                              className="boxed-cta-background-button"
                              href={resolved.ctaHref}
                              style={{
                                backgroundColor: resolved.buttonBackgroundColor,
                                borderRadius: "8px",
                                color: resolved.buttonTextColor,
                                display: "inline-block",
                                fontFamily: BoxedBackgroundCta_fontFamily,
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
                            {resolved.padded ? (
                              <Section style={{ lineHeight: "44px" }}>
                                &zwj;
                              </Section>
                            ) : null}
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                  <Column
                    className="boxed-cta-background-side"
                    style={{ width: "44px" }}
                  >
                    &zwj;
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

const BoxedBackgroundCta_BoxedCTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush-light",
  ...props
}: BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: BoxedBackgroundCta_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>
      {props.heading ?? BoxedBackgroundCta_defaultSectionStyles.heading}
    </Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: BoxedBackgroundCta_fontFamily,
        }}
        className="m-0"
      >
        <Container
          style={{
            width: theme.containerWidth,
          }}
          className="mx-auto max-w-email"
        >
          <BoxedBackgroundCta_BoxedCTAWithBackgroundImageSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

BoxedBackgroundCta_BoxedCTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-light",
} satisfies BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps;

const __BoxedBackgroundCta = BoxedBackgroundCta_BoxedCTAWithBackgroundImage;

export interface BackgroundCallToActionProps {
  theme?: Parameters<typeof __BackgroundCta>[0]["theme"];
  heading?: string;
  description?: string;
  emphasis?: string;
  actions?: {
    href: string;
    label: string;
  }[];
  backgroundImage?: {
    src: string;
    alt?: string;
  };
  width?: "flush" | "boxed" | "padded";
  contentCard?: boolean;
  appearance?: "light" | "dark";
}

export const BackgroundCallToAction = ({
  theme,
  heading,
  description,
  emphasis,
  actions,
  backgroundImage,
  width = "flush",
  contentCard = false,
  appearance = "light",
}: BackgroundCallToActionProps) =>
  (() => {
    if (contentCard) {
      return (
        <__BoxedBackgroundCta
          backgroundImageSrc={backgroundImage?.src}
          ctaHref={actions?.[0]?.href}
          ctaLabel={actions?.[0]?.label}
          heading={heading}
          subtext={description}
          theme={theme}
          variant={`${width === "padded" ? "padded" : "flush"}-${appearance}`}
        />
      );
    }
    return (
      <__BackgroundCta
        backgroundSrc={backgroundImage?.src}
        ctaHref={actions?.[0]?.href}
        ctaLabel={actions?.[0]?.label}
        emphasis={emphasis}
        heading={heading}
        secondaryCtaHref={actions?.[1]?.href}
        secondaryCtaLabel={actions?.[1]?.label}
        subtext={description}
        theme={theme}
        variant={width}
      />
    );
  })();

BackgroundCallToAction.PreviewProps = {
  appearance: "light",
  contentCard: false,
  width: "flush",
} satisfies BackgroundCallToActionProps;
