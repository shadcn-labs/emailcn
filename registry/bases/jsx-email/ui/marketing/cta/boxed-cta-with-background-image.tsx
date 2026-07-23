import {
  Body,
  Container,
  Head,
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

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type BoxedCTAWithBackgroundImageVariant =
  | "flush-light"
  | "padded-light"
  | "flush-dark"
  | "padded-dark";

export interface BoxedCTAWithBackgroundImageProps {
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
  variant?: BoxedCTAWithBackgroundImageVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .boxed-cta-background-side {
      width: 24px !important;
    }
  }

  .boxed-cta-background-button:hover {
    background-color: #4338ca !important;
  }
`;

const variantStyles = {
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
  BoxedCTAWithBackgroundImageVariant,
  {
    backgroundColor: string;
    cardBackgroundColor: string;
    headingColor: string;
    padded: boolean;
    textColor: string;
  }
>;

const defaultSectionStyles = {
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

type SectionProps = Omit<BoxedCTAWithBackgroundImageProps, "theme">;

export const BoxedCTAWithBackgroundImageSection = (props: SectionProps) => {
  const variant = props.variant ?? "flush-light";
  const resolved = {
    ...defaultSectionStyles,
    ...variantStyles[variant],
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
                                fontFamily,
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

export const BoxedCTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "flush-light",
  ...props
}: BoxedCTAWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? defaultSectionStyles.heading}</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <Container
        style={{
          margin: "0 auto",
          maxWidth: theme.containerWidth,
          width: theme.containerWidth,
        }}
      >
        <BoxedCTAWithBackgroundImageSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

BoxedCTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-light",
} satisfies BoxedCTAWithBackgroundImageProps;
