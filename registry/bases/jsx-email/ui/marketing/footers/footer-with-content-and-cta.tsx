import { Body, Head, Html, Preview } from "jsx-email";
/* eslint-disable next/no-img-element */
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type FooterWithContentAndCtaVariant =
  | "centered"
  | "left-aligned"
  | "right-aligned";

export interface FooterWithContentAndCtaProps {
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
  variant?: FooterWithContentAndCtaVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaults = {
  backgroundColor: "#fffffe",
  buttonColor: "#4f46e5",
  buttonTextColor: "#fffffe",
  ctaHref: "https://example.com",
  ctaLabel: "Visit website",
  heading: "Start sending professionally\ndesigned emails today",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc:
    "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  subtext:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
  updatePreferencesHref: "https://example.com/update",
};

type SectionProps = Omit<FooterWithContentAndCtaProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & { variant: FooterWithContentAndCtaVariant };

const Multiline = ({ text }: { text: string }) =>
  text.split("\n").map((line, index) => (
    <Fragment key={line}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));

export const FooterWithContentAndCtaSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "centered",
  } as ResolvedProps;
  const textAlign = {
    centered: "center",
    "left-aligned": "left",
    "right-aligned": "right",
  }[resolved.variant] as "center" | "left" | "right";

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
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
                  <td style={{ padding: "44px 24px 24px", textAlign }}>
                    <p
                      style={{
                        color: resolved.headingColor,
                        fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                      }}
                    >
                      <Multiline text={resolved.heading} />
                    </p>
                    <div style={{ lineHeight: "28px" }}>&zwj;</div>
                    <p
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {resolved.subtext}
                    </p>
                    <div style={{ lineHeight: "28px" }}>&zwj;</div>
                    <div>
                      <a
                        href={resolved.ctaHref}
                        style={{
                          backgroundColor: resolved.buttonColor,
                          borderRadius: "8px",
                          color: resolved.buttonTextColor,
                          display: "inline-block",
                          fontFamily,
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
                          <img
                            alt=""
                            src="https://assets.mailviews.com/images/components/icon-arrow-right.png"
                            style={{
                              maxWidth: "100%",
                              verticalAlign: "baseline",
                            }}
                            width={12}
                          />
                        </span>
                      </a>
                    </div>
                    <div style={{ lineHeight: "96px" }}>&zwj;</div>
                    <img
                      alt={resolved.logoAlt}
                      src={resolved.logoSrc}
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={55}
                    />
                    <div style={{ lineHeight: "36px" }}>&zwj;</div>
                    <p
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 Mailviews. All rights reserved.
                      <br />
                      <br />
                      Want to change how you receive these emails?
                      <br />
                      You can{" "}
                      <a
                        href={resolved.updatePreferencesHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        update your preferences
                      </a>{" "}
                      or{" "}
                      <a
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
                          textDecoration: "underline",
                        }}
                      >
                        unsubscribe from this list.
                      </a>
                    </p>
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

export const FooterWithContentAndCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: FooterWithContentAndCtaProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{props.heading ?? defaults.heading.replaceAll("\n", " ")}</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <FooterWithContentAndCtaSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FooterWithContentAndCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies FooterWithContentAndCtaProps;
