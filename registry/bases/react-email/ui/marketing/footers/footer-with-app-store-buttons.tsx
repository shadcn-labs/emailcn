import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FooterWithAppStoreButtonsVariant =
  | "centered"
  | "two-columns"
  | "with-title";

export interface FooterWithAppStoreButtonsProps {
  theme?: TailwindConfig;
  variant?: FooterWithAppStoreButtonsVariant;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-app-column { display: block !important; width: 100% !important; }",
  "  .footer-app-column-gap { line-height: 44px !important; }",
  "  .footer-app-break { display: none !important; }",
  "}",
].join("\n");

const AppButtons = ({ centered = true }: { centered?: boolean }) => (
  <Section
    align={centered ? "center" : undefined}
    style={centered ? { marginLeft: "auto", marginRight: "auto" } : undefined}
  >
    <Fragment>
      <Row>
        <Column>
          <Link href="https://www.apple.com/app-store/">
            <Img
              alt="Download on the App Store"
              src="https://emailcn.vercel.app/api/email-assets/badge-app-store.png"
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              width={120}
            />
          </Link>
        </Column>
        <Column style={{ width: "24px" }}>&zwj;</Column>
        <Column>
          <Link href="https://play.google.com/store/apps">
            <Img
              alt="Get it on Google Play"
              src="https://emailcn.vercel.app/api/email-assets/badge-google-play.png"
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              width={135}
            />
          </Link>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const AddressAndLegal = ({
  align,
  mutedTextColor,
  textColor,
  unsubscribeHref,
}: {
  align: "center" | "left";
  mutedTextColor: string;
  textColor: string;
  unsubscribeHref: string;
}) => (
  <Section style={{ textAlign: align }}>
    <Text
      style={{
        color: textColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn
      <br /> emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505
      Paris
    </Text>
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Text
      style={{
        color: mutedTextColor,
        fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      You're receiving this because you subscribed to updates.{" "}
      <br className="footer-app-break" /> No longer want to receive emails?{" "}
      <Link
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

export const FooterWithAppStoreButtonsSection = ({
  variant = "centered",
  title = "Get the app",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  textColor = "#6b7280",
  headingColor = "#030712",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<FooterWithAppStoreButtonsProps, "theme">) => (
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
                <Column style={{ padding: "0 24px" }}>
                  {variant === "two-columns" ? (
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          <Column
                            className="footer-app-column"
                            style={{
                              textAlign: "left",
                              verticalAlign: "top",
                              width: "50%",
                            }}
                          >
                            <Text
                              style={{
                                color: headingColor,
                                fontFamily,
                                fontSize: "16px",
                                fontWeight: 600,
                                lineHeight: "24px",
                                margin: 0,
                              }}
                            >
                              {title}
                            </Text>
                            <Section style={{ lineHeight: "24px" }}>
                              &zwj;
                            </Section>
                            <AppButtons centered={false} />
                          </Column>
                          <Column
                            className="footer-app-column footer-app-column-gap"
                            style={{ width: "44px" }}
                          >
                            &zwj;
                          </Column>
                          <Column
                            className="footer-app-column"
                            style={{ verticalAlign: "top", width: "50%" }}
                          >
                            <AddressAndLegal
                              align="left"
                              mutedTextColor={mutedTextColor}
                              textColor={textColor}
                              unsubscribeHref={unsubscribeHref}
                            />
                          </Column>
                        </Row>
                      </Fragment>
                    </Section>
                  ) : (
                    <Section style={{ textAlign: "center" }}>
                      <Text
                        style={{
                          color: headingColor,
                          fontFamily,
                          fontSize: variant === "with-title" ? "30px" : "16px",
                          fontWeight: variant === "with-title" ? 500 : 600,
                          lineHeight:
                            variant === "with-title" ? "36px" : "24px",
                          margin: 0,
                        }}
                      >
                        {title}
                      </Text>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <AppButtons />
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      <AddressAndLegal
                        align="center"
                        mutedTextColor={mutedTextColor}
                        textColor={textColor}
                        unsubscribeHref={unsubscribeHref}
                      />
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

export const FooterWithAppStoreButtons = ({
  theme: _theme = defaultTheme,
  variant = "centered",
  ...props
}: FooterWithAppStoreButtonsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Footer with app-store buttons</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily,
        margin: 0,
      }}
    >
      <FooterWithAppStoreButtonsSection {...props} variant={variant} />
    </Body>
  </Html>
);

FooterWithAppStoreButtons.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies FooterWithAppStoreButtonsProps;
