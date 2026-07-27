import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Text,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

type ContentCtaFooter_FooterWithContentAndCtaVariant =
  | "centered"
  | "left-aligned"
  | "right-aligned";

interface ContentCtaFooter_FooterWithContentAndCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  updatePreferencesHref?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  variant?: ContentCtaFooter_FooterWithContentAndCtaVariant;
}

const ContentCtaFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ContentCtaFooter_defaults = {
  backgroundColor: "#fffffe",
  buttonColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Visit website",
  heading: "Start sending professionally\ndesigned emails today",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
  updatePreferencesHref: "https://example.com/update",
};

type ContentCtaFooter_SectionProps = Omit<
  ContentCtaFooter_FooterWithContentAndCtaProps,
  "theme"
>;

type ContentCtaFooter_ResolvedProps = typeof ContentCtaFooter_defaults &
  ContentCtaFooter_SectionProps & {
    variant: ContentCtaFooter_FooterWithContentAndCtaVariant;
  };

const ContentCtaFooter_Multiline = ({ text }: { text: string }) =>
  text.split("\n").map((line, index) => (
    <Fragment key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));

const ContentCtaFooter_FooterWithContentAndCtaSection = (
  props: ContentCtaFooter_SectionProps
) => {
  const resolved = {
    ...ContentCtaFooter_defaults,
    ...props,
    variant: props.variant ?? "centered",
  } as ContentCtaFooter_ResolvedProps;
  const textAlign = {
    centered: "center",
    "left-aligned": "left",
    "right-aligned": "right",
  }[resolved.variant] as "center" | "left" | "right";
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
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "44px 24px 24px", textAlign }}>
                    <Text
                      style={{
                        color: resolved.headingColor,
                        fontFamily: ContentCtaFooter_fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                      }}
                    >
                      <ContentCtaFooter_Multiline text={resolved.heading} />
                    </Text>
                    <Section style={{ lineHeight: "28px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily: ContentCtaFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {resolved.subtext}
                    </Text>
                    <Section style={{ lineHeight: "28px" }}>&zwj;</Section>
                    <Section>
                      <Link
                        href={resolved.ctaHref}
                        style={{
                          backgroundColor: resolved.buttonColor,
                          borderRadius: "8px",
                          color: resolved.buttonTextColor,
                          display: "inline-block",
                          fontFamily: ContentCtaFooter_fontFamily,
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: 1,
                          padding: "14px 48px",
                          textDecoration: "none",
                        }}
                      >
                        <span
                          style={{ marginRight: "8px", msoTextRaise: "14px" }}
                        >
                          {resolved.ctaLabel}
                        </span>
                        <span style={{ msoTextRaise: "14px" }}>
                          <Img
                            alt=""
                            src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "baseline",
                            }}
                            width={12}
                          />
                        </span>
                      </Link>
                    </Section>
                    <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
                    <Img
                      alt={resolved.logoAlt}
                      src={resolved.logoSrc}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={55}
                    />
                    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily: ContentCtaFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn. All rights reserved.
                      <br />
                      <br />
                      Want to change how you receive these emails?
                      <br />
                      You can{" "}
                      <Link
                        href={resolved.updatePreferencesHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        update your preferences
                      </Link>{" "}
                      or{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        unsubscribe from this list.
                      </Link>
                    </Text>
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

const ContentCtaFooter_FooterWithContentAndCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: ContentCtaFooter_FooterWithContentAndCtaProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>
      {props.heading ?? ContentCtaFooter_defaults.heading.replaceAll("\n", " ")}
    </Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: ContentCtaFooter_fontFamily,
        margin: 0,
      }}
    >
      <ContentCtaFooter_FooterWithContentAndCtaSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

ContentCtaFooter_FooterWithContentAndCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies ContentCtaFooter_FooterWithContentAndCtaProps;

const __ContentCtaFooter = ContentCtaFooter_FooterWithContentAndCta;

interface LargeTitleFooter_FooterWithLargeTitleAndButtonsProps {
  theme?: EmailThemeTokens;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  dividerColor?: string;
  unsubscribeHref?: string;
}

const LargeTitleFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LargeTitleFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-large-button-cell { display: block !important; margin-left: auto !important; margin-right: auto !important; max-width: 260px !important; width: 100% !important; }",
  "  .footer-large-button-gap { display: block !important; line-height: 24px !important; }",
  "  .footer-large-break { display: none !important; }",
  "}",
].join("\n");

const LargeTitleFooter_FooterWithLargeTitleAndButtonsSection = ({
  title = "Start sending professionally\ndesigned emails today",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  dividerColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<LargeTitleFooter_FooterWithLargeTitleAndButtonsProps, "theme">) => (
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor,
            maxWidth: "100%",
            padding: "44px 0 24px",
            width: "600px",
          }}
        >
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ padding: "0 24px", textAlign: "center" }}>
                  <Link href="https://example.com">
                    <Img
                      alt="Maizzle"
                      src="https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={64}
                    />
                  </Link>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: "#030712",
                      fontFamily: LargeTitleFooter_fontFamily,
                      fontSize: "30px",
                      fontWeight: 500,
                      lineHeight: "36px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    {title.split("\n").map((line, index) => (
                      <span key={line}>
                        {index > 0 ? <br /> : null}
                        {line}
                      </span>
                    ))}
                  </Text>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Section
                    align="center"
                    style={{ marginLeft: "auto", marginRight: "auto" }}
                  >
                    <Fragment>
                      <Row>
                        <Column
                          className="footer-large-button-cell"
                          style={{ width: "188px" }}
                        >
                          <Section style={{ textAlign: "center" }}>
                            <Link
                              href="https://example.com/shop"
                              style={{
                                backgroundColor: primaryColor,
                                borderRadius: "8px",
                                color: "#f8fafc",
                                display: "block",
                                fontFamily: LargeTitleFooter_fontFamily,
                                fontSize: "16px",
                                fontWeight: 500,
                                lineHeight: 1,
                                padding: "16px 24px",
                                textAlign: "center",
                                textDecoration: "none",
                              }}
                            >
                              Shop with us
                            </Link>
                          </Section>
                        </Column>
                        <Column
                          className="footer-large-button-gap"
                          style={{ width: "16px" }}
                        >
                          &zwj;
                        </Column>
                        <Column
                          className="footer-large-button-cell"
                          style={{ width: "188px" }}
                        >
                          <Section style={{ textAlign: "center" }}>
                            <Link
                              href="https://example.com/follow"
                              style={{
                                backgroundColor,
                                border: `1px solid ${dividerColor}`,
                                borderRadius: "8px",
                                color: "#4b5563",
                                display: "block",
                                fontFamily: LargeTitleFooter_fontFamily,
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: 1,
                                padding: "16px 24px",
                                textAlign: "center",
                                textDecoration: "none",
                              }}
                            >
                              Follow us
                            </Link>
                          </Section>
                        </Column>
                      </Row>
                    </Fragment>
                  </Section>
                  <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: textColor,
                      fontFamily: LargeTitleFooter_fontFamily,
                      fontSize: "18px",
                      lineHeight: "28px",
                      margin: "1em 0",
                      textAlign: "center",
                    }}
                  >
                    If you have any questions or need assistance{" "}
                    <br className="footer-large-break" />
                    please reply to this email.
                  </Text>
                  <Section
                    style={{
                      backgroundColor: dividerColor,
                      height: "1px",
                      lineHeight: "1px",
                      margin: "24px 0",
                    }}
                  >
                    &zwj;
                  </Section>
                  <Text
                    style={{
                      color: mutedTextColor,
                      fontFamily: LargeTitleFooter_fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    © 2026 emailcn. All rights reserved.
                  </Text>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: mutedTextColor,
                      fontFamily: LargeTitleFooter_fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                      textAlign: "center",
                    }}
                  >
                    You're receiving this because you subscribed to updates.{" "}
                    <br className="footer-large-break" /> No longer want to
                    receive emails?{" "}
                    <Link
                      href={unsubscribeHref}
                      style={{
                        color: mutedTextColor,
                        textDecoration: "underline",
                      }}
                    >
                      Unsubscribe
                    </Link>
                  </Text>
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

const LargeTitleFooter_FooterWithLargeTitleAndButtons = ({
  theme: _theme = defaultTheme,
  ...props
}: LargeTitleFooter_FooterWithLargeTitleAndButtonsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: LargeTitleFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with large title and buttons</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily: LargeTitleFooter_fontFamily,
        margin: 0,
      }}
    >
      <LargeTitleFooter_FooterWithLargeTitleAndButtonsSection {...props} />
    </Body>
  </Html>
);

LargeTitleFooter_FooterWithLargeTitleAndButtons.PreviewProps = {
  theme: defaultTheme,
} satisfies LargeTitleFooter_FooterWithLargeTitleAndButtonsProps;

const __LargeTitleFooter = LargeTitleFooter_FooterWithLargeTitleAndButtons;

interface FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps {
  theme?: EmailThemeTokens;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  ctaHref?: string;
  ctaText?: string;
  unsubscribeHref?: string;
}

const FullWidthCtaFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullWidthCtaFooter_responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-full-cta-break { display: none !important; } }";

const FullWidthCtaFooter_links = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const FullWidthCtaFooter_socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const FullWidthCtaFooter_Divider = ({ color }: { color: string }) => (
  <Section
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </Section>
);

const FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaSection = ({
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  ctaHref = "https://example.com/contact",
  ctaText = "Got questions? We're here to help.",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps, "theme">) => (
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor,
            maxWidth: "100%",
            padding: "44px 0 24px",
            width: "600px",
          }}
        >
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ padding: "0 24px", textAlign: "left" }}>
                  <Section>
                    <Fragment>
                      <Row>
                        {FullWidthCtaFooter_links.map(
                          ([label, href], index) => (
                            <Column
                              key={href}
                              style={
                                index < FullWidthCtaFooter_links.length - 1
                                  ? { paddingRight: "24px" }
                                  : undefined
                              }
                            >
                              <Link
                                href={href}
                                style={{
                                  color: textColor,
                                  fontFamily: FullWidthCtaFooter_fontFamily,
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  textDecoration: "none",
                                }}
                              >
                                {label}
                              </Link>
                            </Column>
                          )
                        )}
                      </Row>
                    </Fragment>
                  </Section>
                  <FullWidthCtaFooter_Divider color={dividerColor} />
                  <Section>
                    <Link
                      href={ctaHref}
                      style={{
                        color: textColor,
                        display: "block",
                        fontFamily: FullWidthCtaFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        textDecoration: "none",
                      }}
                    >
                      <span>{ctaText}</span>
                      <Img
                        alt="→"
                        src="https://emailcn.vercel.app/api/email-assets/icon-chevron-right.png"
                        style={{
                          float: "right",
                          maxWidth: "100%",
                          verticalAlign: "middle",
                        }}
                        width={20}
                      />
                    </Link>
                  </Section>
                  <FullWidthCtaFooter_Divider color={dividerColor} />
                  <Section>
                    <Fragment>
                      <Row>
                        {FullWidthCtaFooter_socials.map(
                          ([label, href, icon], index) => (
                            <Column
                              key={label}
                              style={
                                index < FullWidthCtaFooter_socials.length - 1
                                  ? { paddingRight: "24px" }
                                  : undefined
                              }
                            >
                              <Link href={href}>
                                <Img
                                  alt={label}
                                  src={`https://emailcn.vercel.app/api/email-assets/${icon}`}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={20}
                                />
                              </Link>
                            </Column>
                          )
                        )}
                      </Row>
                    </Fragment>
                  </Section>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: subduedTextColor,
                      fontFamily: FullWidthCtaFooter_fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                    }}
                  >
                    © 2026 emailcn. All rights reserved.
                  </Text>
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                  <Text
                    style={{
                      color: mutedTextColor,
                      fontFamily: FullWidthCtaFooter_fontFamily,
                      fontSize: "16px",
                      lineHeight: "24px",
                      margin: 0,
                    }}
                  >
                    You're receiving this because you subscribed to updates.{" "}
                    <br className="footer-full-cta-break" /> No longer want to
                    receive emails?{" "}
                    <Link
                      href={unsubscribeHref}
                      style={{
                        color: mutedTextColor,
                        textDecoration: "underline",
                      }}
                    >
                      Unsubscribe
                    </Link>
                  </Text>
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

const FullWidthCtaFooter_FooterWithMenuAndFullWidthCta = ({
  theme: _theme = defaultTheme,
  ...props
}: FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: FullWidthCtaFooter_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Footer with menu and full-width CTA</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily: FullWidthCtaFooter_fontFamily,
        margin: 0,
      }}
    >
      <FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaSection {...props} />
    </Body>
  </Html>
);

FullWidthCtaFooter_FooterWithMenuAndFullWidthCta.PreviewProps = {
  theme: defaultTheme,
} satisfies FullWidthCtaFooter_FooterWithMenuAndFullWidthCtaProps;

const __FullWidthCtaFooter = FullWidthCtaFooter_FooterWithMenuAndFullWidthCta;

type OverlapFooter_FooterWithOverlappedCtaVariant =
  | "content"
  | "2-column-menu"
  | "3-column-menu"
  | "centered-content"
  | "centered-menu"
  | "address"
  | "centered-socials";

type OverlapFooter_FooterOverlappedLogoPosition = "left" | "right";

interface OverlapFooter_FooterWithOverlappedCtaProps {
  theme?: EmailThemeTokens;
  variant?: OverlapFooter_FooterWithOverlappedCtaVariant;
  logoPosition?: OverlapFooter_FooterOverlappedLogoPosition;
  backgroundImageSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const OverlapFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const OverlapFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-overlap-column { display: block !important; width: 100% !important; }",
  "  .footer-overlap-column-right { float: none !important; margin-left: 0 !important; padding-top: 24px !important; text-align: left !important; }",
  "  .footer-overlap-break { display: none !important; }",
  "  .footer-overlap-hero { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

const OverlapFooter_copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";

const OverlapFooter_quickLinks = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const OverlapFooter_connectLinks = [
  ["Facebook", "https://facebook.com"],
  ["GitHub", "https://github.com"],
  ["LinkedIn", "https://linkedin.com"],
  ["YouTube", "https://youtube.com"],
] as const;

const OverlapFooter_legalLinks = [
  ["Privacy Policy", "https://example.com/privacy"],
  ["Terms of Service", "https://example.com/terms"],
  ["Returns", "https://example.com/returns"],
] as const;

const OverlapFooter_socialIcons = [
  ["Facebook", "https://facebook.com", "facebook"],
  ["GitHub", "https://github.com", "github"],
  ["LinkedIn", "https://linkedin.com", "linkedin"],
  ["YouTube", "https://youtube.com", "youtube"],
  ["X", "https://x.com", "x"],
] as const;

const OverlapFooter_Logo = ({
  logoSrc,
  width = 64,
}: {
  logoSrc: string;
  width?: number;
}) => (
  <Link href="https://example.com">
    <Img
      alt="Maizzle"
      src={logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={width}
    />
  </Link>
);

const OverlapFooter_LinkColumn = ({
  heading,
  links,
  textColor,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
  textColor: string;
}) => (
  <Column
    style={{ padding: "0 24px", textAlign: "left", verticalAlign: "top" }}
  >
    <Text
      style={{
        color: "#030712",
        fontFamily: OverlapFooter_fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: "0 0 10px",
      }}
    >
      {heading}
    </Text>
    {links.map(([label, href]) => (
      <Text key={href} style={{ margin: "0 0 8px" }}>
        <Link
          href={href}
          style={{
            color: textColor,
            display: "block",
            fontFamily: OverlapFooter_fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            textDecoration: "none",
          }}
        >
          {label}
        </Link>
      </Text>
    ))}
  </Column>
);

const OverlapFooter_Socials = () => (
  <Section>
    <Fragment>
      <Row>
        {OverlapFooter_socialIcons.map(([label, href, icon], index) => (
          <Column
            key={label}
            style={
              index < OverlapFooter_socialIcons.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <Link href={href}>
              <Img
                alt={label}
                src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}.png`}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width={20}
              />
            </Link>
          </Column>
        ))}
      </Row>
    </Fragment>
  </Section>
);

const OverlapFooter_ShortLegal = ({
  centered = false,
  textColor,
  unsubscribeHref,
}: {
  centered?: boolean;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <Text
    style={{
      color: textColor,
      fontFamily: OverlapFooter_fontFamily,
      fontSize: "16px",
      lineHeight: "24px",
      margin: 0,
      textAlign: centered ? "center" : "left",
    }}
  >
    © 2026 emailcn. No longer want to receive emails?{" "}
    <Link
      href={unsubscribeHref}
      style={{ color: textColor, textDecoration: "underline" }}
    >
      Unsubscribe
    </Link>
  </Text>
);

const OverlapFooter_AddressLegal = ({
  centered = true,
  mutedTextColor,
  textColor,
  unsubscribeHref,
}: {
  centered?: boolean;
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <Section style={{ textAlign: centered ? "center" : "left" }}>
    <Text
      style={{
        color: textColor,
        fontFamily: OverlapFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn
      <br />
      emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505 Paris
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: mutedTextColor,
        fontFamily: OverlapFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      We're sending you this because you subscribed.{" "}
      <br className="footer-overlap-break" /> No longer want to receive emails?{" "}
      <Link
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

const OverlapFooter_OverlappedHero = ({
  backgroundImageSrc,
  primaryColor,
}: {
  backgroundImageSrc: string;
  primaryColor: string;
}) => (
  <>
    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              borderRadius: "12px 12px 0 0",
            }}
          >
            <Section
              style={{
                backgroundImage: `url('${backgroundImageSrc}')`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "12px",
              }}
            >
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column
                      className="footer-overlap-hero"
                      style={{ padding: "0 44px", textAlign: "center" }}
                    >
                      <Section style={{ lineHeight: "124px" }}>&zwj;</Section>
                      <Text
                        style={{
                          color: "#fffffe",
                          fontFamily: OverlapFooter_fontFamily,
                          fontSize: "24px",
                          fontWeight: 600,
                          lineHeight: "32px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        Start sending professionally{" "}
                        <br className="footer-overlap-break" />
                        designed emails today
                      </Text>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <Text
                        style={{
                          color: "#d1d5db",
                          fontFamily: OverlapFooter_fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {OverlapFooter_copy}
                      </Text>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <Link
                        href="https://example.com"
                        style={{
                          backgroundColor: primaryColor,
                          borderRadius: "8px",
                          color: "#fffffe",
                          display: "inline-block",
                          fontFamily: OverlapFooter_fontFamily,
                          fontSize: "16px",
                          fontWeight: 500,
                          lineHeight: 1,
                          padding: "14px 20px",
                          textDecoration: "none",
                        }}
                      >
                        Visit website&nbsp;&nbsp;
                        <Img
                          alt=""
                          src="https://emailcn.vercel.app/api/email-assets/icon-arrow-right.png"
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width={12}
                        />
                      </Link>
                      <Section style={{ lineHeight: "124px" }}>&zwj;</Section>
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Section>
          </Column>
          <Column
            style={{
              backgroundColor: "#f1f5f9",
              verticalAlign: "bottom",
              width: "24px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{ backgroundColor: "#fffffe", lineHeight: "40px" }}
                  >
                    &zwj;
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const OverlapFooter_SideLayout = ({
  columns,
  logoPosition,
  logoSrc,
  textColor,
}: {
  columns: 1 | 2 | 3;
  logoPosition: OverlapFooter_FooterOverlappedLogoPosition;
  logoSrc: string;
  textColor: string;
}) => {
  const intro = (
    <Column
      className="footer-overlap-column"
      style={{
        padding: "0 24px",
        textAlign: "left",
        verticalAlign: "top",
        width: columns === 1 ? "66.666667%" : "33.333333%",
      }}
    >
      <OverlapFooter_Logo logoSrc={logoSrc} />
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      {columns === 1 ? (
        <Text
          style={{
            color: textColor,
            fontFamily: OverlapFooter_fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {OverlapFooter_copy}
        </Text>
      ) : null}
    </Column>
  );
  const menus = (
    <Column
      className="footer-overlap-column footer-overlap-column-right"
      style={{ textAlign: "right", verticalAlign: "top" }}
    >
      <Section align="right" style={{ marginLeft: "auto" }}>
        <Fragment>
          <Row>
            <OverlapFooter_LinkColumn
              heading="Quick Links"
              links={OverlapFooter_quickLinks}
              textColor={textColor}
            />
            {columns >= 2 ? (
              <OverlapFooter_LinkColumn
                heading="Connect"
                links={OverlapFooter_connectLinks}
                textColor={textColor}
              />
            ) : null}
            {columns === 3 ? (
              <OverlapFooter_LinkColumn
                heading="Legal"
                links={OverlapFooter_legalLinks}
                textColor={textColor}
              />
            ) : null}
          </Row>
        </Fragment>
      </Section>
    </Column>
  );
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          {logoPosition === "left" ? intro : menus}
          {logoPosition === "left" ? menus : intro}
        </Row>
      </Fragment>
    </Section>
  );
};

const OverlapFooter_FooterContent = ({
  variant,
  logoPosition,
  logoSrc,
  textColor,
  mutedTextColor,
  unsubscribeHref,
}: {
  variant: OverlapFooter_FooterWithOverlappedCtaVariant;
  logoPosition: OverlapFooter_FooterOverlappedLogoPosition;
  logoSrc: string;
  textColor: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}): ReactNode => {
  if (variant === "content") {
    return (
      <>
        <OverlapFooter_SideLayout
          columns={1}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px", textAlign: "left" }}>
          <Text
            style={{
              color: "#030712",
              fontFamily: OverlapFooter_fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              margin: "0 0 12px",
            }}
          >
            Follow us
          </Text>
          <OverlapFooter_Socials />
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <OverlapFooter_ShortLegal
            textColor={textColor}
            unsubscribeHref={unsubscribeHref}
          />
        </Section>
      </>
    );
  }
  if (variant === "2-column-menu") {
    return (
      <>
        <OverlapFooter_SideLayout
          columns={2}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <OverlapFooter_ShortLegal
            textColor={textColor}
            unsubscribeHref={unsubscribeHref}
          />
        </Section>
      </>
    );
  }
  if (variant === "3-column-menu") {
    return (
      <>
        <OverlapFooter_SideLayout
          columns={3}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <OverlapFooter_ShortLegal
            textColor={textColor}
            unsubscribeHref={unsubscribeHref}
          />
        </Section>
      </>
    );
  }
  if (variant === "centered-content") {
    return (
      <Section style={{ padding: "0 48px", textAlign: "center" }}>
        <OverlapFooter_Logo logoSrc={logoSrc} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Text
          style={{
            color: "#030712",
            fontFamily: OverlapFooter_fontFamily,
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: "32px",
            margin: 0,
          }}
        >
          Start sending professionally
          <br />
          designed emails today
        </Text>
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
        <Text
          style={{
            color: textColor,
            fontFamily: OverlapFooter_fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          {OverlapFooter_copy}
        </Text>
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Text
          style={{
            color: mutedTextColor,
            fontFamily: OverlapFooter_fontFamily,
            fontSize: "16px",
            lineHeight: "24px",
            margin: 0,
          }}
        >
          © 2026 emailcn. All rights reserved.
          <br />
          Want to change how you receive these emails?
          <br />
          You can update your preferences or unsubscribe from this list.
        </Text>
      </Section>
    );
  }
  if (variant === "centered-menu") {
    return (
      <Section style={{ padding: "0 24px", textAlign: "center" }}>
        <OverlapFooter_Logo logoSrc={logoSrc} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section
          align="center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Fragment>
            <Row>
              {OverlapFooter_quickLinks.slice(1).map(([label, href], index) => (
                <Column
                  key={href}
                  style={index < 2 ? { paddingRight: "24px" } : undefined}
                >
                  <Link
                    href={href}
                    style={{
                      color: textColor,
                      fontFamily: OverlapFooter_fontFamily,
                      fontSize: "14px",
                      lineHeight: "20px",
                      textDecoration: "none",
                    }}
                  >
                    {label}
                  </Link>
                </Column>
              ))}
            </Row>
          </Fragment>
        </Section>
        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
        <Section
          align="center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Fragment>
            <Row>
              <Column>
                <OverlapFooter_Socials />
              </Column>
            </Row>
          </Fragment>
        </Section>
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <OverlapFooter_AddressLegal
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  if (variant === "address") {
    return (
      <Section
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <OverlapFooter_Logo logoSrc={logoSrc} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <OverlapFooter_AddressLegal
          centered={false}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  return (
    <Section style={{ padding: "0 24px", textAlign: "center" }}>
      <Text
        style={{
          color: "#030712",
          fontFamily: OverlapFooter_fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: "0 0 12px",
        }}
      >
        Follow us
      </Text>
      <Section
        align="center"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Fragment>
          <Row>
            <Column>
              <OverlapFooter_Socials />
            </Column>
          </Row>
        </Fragment>
      </Section>
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <OverlapFooter_AddressLegal
        mutedTextColor={mutedTextColor}
        textColor={textColor}
        unsubscribeHref={unsubscribeHref}
      />
    </Section>
  );
};

const OverlapFooter_FooterWithOverlappedCtaSection = ({
  variant = "content",
  logoPosition = "left",
  backgroundImageSrc = "https://emailcn.vercel.app/api/email-assets/footers/bg-image-3.jpg",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<OverlapFooter_FooterWithOverlappedCtaProps, "theme">) => (
  <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
    <Fragment>
      <Row>
        <Column>&zwj;</Column>
        <Column
          style={{
            backgroundColor: pageBackgroundColor,
            maxWidth: "100%",
            width: "600px",
          }}
        >
          <OverlapFooter_OverlappedHero
            backgroundImageSrc={backgroundImageSrc}
            primaryColor={primaryColor}
          />
          <Section width="100%">
            <Fragment>
              <Row>
                <Column style={{ backgroundColor }}>
                  <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                  <OverlapFooter_FooterContent
                    logoPosition={logoPosition}
                    logoSrc={logoSrc}
                    mutedTextColor={mutedTextColor}
                    textColor={textColor}
                    unsubscribeHref={unsubscribeHref}
                    variant={variant}
                  />
                  <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
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

const OverlapFooter_FooterWithOverlappedCta = ({
  theme: _theme = defaultTheme,
  variant = "content",
  logoPosition = "left",
  ...props
}: OverlapFooter_FooterWithOverlappedCtaProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: OverlapFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with overlapped CTA</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily: OverlapFooter_fontFamily,
        margin: 0,
      }}
    >
      <OverlapFooter_FooterWithOverlappedCtaSection
        {...props}
        logoPosition={logoPosition}
        variant={variant}
      />
    </Body>
  </Html>
);

OverlapFooter_FooterWithOverlappedCta.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "content",
} satisfies OverlapFooter_FooterWithOverlappedCtaProps;

const __OverlapFooter = OverlapFooter_FooterWithOverlappedCta;

export interface FooterBrand {
  logo: {
    src: string;
    alt?: string;
  };
  href?: string;
}

export interface FooterLegal {
  copyright?: string;
  text?: string;
  unsubscribeHref?: string;
  preferencesHref?: string;
}

export interface PromotionFooterProps {
  theme?: Parameters<typeof __ContentCtaFooter>[0]["theme"];
  brand?: FooterBrand;
  heading?: string;
  description?: string;
  actions?: {
    href: string;
    label: string;
  }[];
  legal?: FooterLegal;
  placement?: "inline" | "full-width" | "overlap" | "large-title";
  menuColumns?: 0 | 2 | 3;
  alignment?: "left" | "center" | "right";
  backgroundImage?: {
    src: string;
    alt?: string;
  };
}

const footerBrandValues = (brand: FooterBrand | undefined) => {
  const { href, logo } = brand ?? {};
  return {
    logoAlt: logo?.alt,
    logoHref: href,
    logoSrc: logo?.src,
  };
};

const footerLegalValues = (legal: FooterLegal | undefined) => ({
  copyright: legal?.copyright,
  preferencesHref: legal?.preferencesHref,
  text: legal?.text,
  unsubscribeHref: legal?.unsubscribeHref,
});

const promotionActionValues = (
  action:
    | {
        href: string;
        label: string;
      }
    | undefined
) => ({
  href: action?.href,
  label: action?.label,
});

const promotionOverlapVariant = (
  menuColumns: NonNullable<PromotionFooterProps["menuColumns"]>,
  alignment: NonNullable<PromotionFooterProps["alignment"]>
): Parameters<typeof __OverlapFooter>[0]["variant"] => {
  if (menuColumns === 3) {
    return "3-column-menu";
  }
  if (menuColumns === 2) {
    return "2-column-menu";
  }
  if (alignment === "center") {
    return "centered-content";
  }
  return "content";
};

const promotionAlignmentVariant = (
  alignment: NonNullable<PromotionFooterProps["alignment"]>
): Parameters<typeof __ContentCtaFooter>[0]["variant"] => {
  if (alignment === "left") {
    return "left-aligned";
  }
  if (alignment === "right") {
    return "right-aligned";
  }
  return "centered";
};

export const PromotionFooter = ({
  theme,
  brand,
  heading,
  description,
  actions,
  legal,
  placement = "inline",
  menuColumns = 0,
  alignment = "center",
  backgroundImage,
}: PromotionFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  const [firstAction] = actions ?? [];
  const action = promotionActionValues(firstAction);
  const backgroundImageSrc = backgroundImage?.src;
  if (placement === "overlap") {
    const variant = promotionOverlapVariant(menuColumns, alignment);
    return (
      <__OverlapFooter
        backgroundImageSrc={backgroundImageSrc}
        logoSrc={footerBrand.logoSrc}
        theme={theme}
        unsubscribeHref={footerLegal.unsubscribeHref}
        variant={variant}
      />
    );
  }
  if (placement === "full-width") {
    return (
      <__FullWidthCtaFooter
        ctaHref={action.href}
        ctaText={action.label}
        theme={theme}
        unsubscribeHref={footerLegal.unsubscribeHref}
      />
    );
  }
  if (placement === "large-title") {
    return (
      <__LargeTitleFooter
        theme={theme}
        title={heading}
        unsubscribeHref={footerLegal.unsubscribeHref}
      />
    );
  }
  return (
    <__ContentCtaFooter
      ctaHref={action.href}
      ctaLabel={action.label}
      heading={heading}
      logoAlt={footerBrand.logoAlt}
      logoSrc={footerBrand.logoSrc}
      subtext={description}
      theme={theme}
      unsubscribeHref={footerLegal.unsubscribeHref}
      updatePreferencesHref={footerLegal.preferencesHref}
      variant={promotionAlignmentVariant(alignment)}
    />
  );
};

PromotionFooter.PreviewProps = {
  alignment: "center",
  menuColumns: 0,
  placement: "inline",
} satisfies PromotionFooterProps;
