import { Fragment } from "react";
import type { ReactNode, CSSProperties } from "react";
import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Text,
  Img,
  Tailwind,
} from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { createEmailTailwindConfig } from "@/registry/bases/react-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/react-email/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

const resolveDefaultProps = <Defaults extends object, Props extends object>(
  defaults: Defaults,
  props: Props
) => {
  const supplied = props as Record<string, unknown>;
  const fallbackEntries = Object.entries(defaults).map(([key, value]) => [
    key,
    supplied[key] === undefined ? value : supplied[key],
  ]);

  return {
    ...defaults,
    ...props,
    ...Object.fromEntries(fallbackEntries),
  } as Defaults & Props;
};

type AppStoreFooter_FooterWithAppStoreButtonsVariant =
  | "centered"
  | "two-columns"
  | "with-title";

interface AppStoreFooter_FooterWithAppStoreButtonsProps {
  theme?: EmailTheme;
  variant?: AppStoreFooter_FooterWithAppStoreButtonsVariant;
  title?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  headingColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const AppStoreFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const AppStoreFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-app-column { display: block !important; width: 100% !important; }",
  "  .footer-app-column-gap { line-height: 44px !important; }",
  "  .footer-app-break { display: none !important; }",
  "}",
].join("\n");

const AppStoreFooter_AppButtons = ({
  centered = true,
}: {
  centered?: boolean;
}) => (
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
              src={emailAsset("badge-app-store.png")}
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
              src={emailAsset("badge-google-play.png")}
              style={{ maxWidth: "100%", verticalAlign: "middle" }}
              width={135}
            />
          </Link>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const AppStoreFooter_AddressAndLegal = ({
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
        fontFamily: AppStoreFooter_fontFamily,
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
        fontFamily: AppStoreFooter_fontFamily,
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

const AppStoreFooter_FooterWithAppStoreButtonsSection = ({
  variant = "centered",
  title = "Get the app",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  textColor = "#6b7280",
  headingColor = "#030712",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<AppStoreFooter_FooterWithAppStoreButtonsProps, "theme">) => (
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
                  {(() => {
                    if (variant === "two-columns") {
                      return (
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
                                    fontFamily: AppStoreFooter_fontFamily,
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
                                <AppStoreFooter_AppButtons centered={false} />
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
                                <AppStoreFooter_AddressAndLegal
                                  align="left"
                                  mutedTextColor={mutedTextColor}
                                  textColor={textColor}
                                  unsubscribeHref={unsubscribeHref}
                                />
                              </Column>
                            </Row>
                          </Fragment>
                        </Section>
                      );
                    }
                    return (
                      <Section style={{ textAlign: "center" }}>
                        <Text
                          style={{
                            color: headingColor,
                            fontFamily: AppStoreFooter_fontFamily,
                            fontSize:
                              variant === "with-title" ? "30px" : "16px",
                            fontWeight: variant === "with-title" ? 500 : 600,
                            lineHeight:
                              variant === "with-title" ? "36px" : "24px",
                            margin: 0,
                          }}
                        >
                          {title}
                        </Text>
                        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                        <AppStoreFooter_AppButtons />
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                        <AppStoreFooter_AddressAndLegal
                          align="center"
                          mutedTextColor={mutedTextColor}
                          textColor={textColor}
                          unsubscribeHref={unsubscribeHref}
                        />
                      </Section>
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

const AppStoreFooter_FooterWithAppStoreButtons = ({
  theme = defaultTheme,
  variant = "centered",
  ...props
}: AppStoreFooter_FooterWithAppStoreButtonsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: AppStoreFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with app-store buttons</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
          fontFamily: AppStoreFooter_fontFamily,
        }}
        className="m-0"
      >
        <AppStoreFooter_FooterWithAppStoreButtonsSection
          {...props}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

AppStoreFooter_FooterWithAppStoreButtons.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies AppStoreFooter_FooterWithAppStoreButtonsProps;

const __AppStoreFooter = AppStoreFooter_FooterWithAppStoreButtons;

type BackgroundFooter_FooterWithBackgroundImageVariant =
  | "bottom-image-content"
  | "bottom-image-2-column-menu"
  | "bottom-image-3-column-menu"
  | "bottom-image-centered"
  | "top-image-content"
  | "top-image-3-column-menu"
  | "top-image-address"
  | "top-image-centered"
  | "top-image-logo-bottom";

type BackgroundFooter_FooterBackgroundLogoPosition = "left" | "right";

interface BackgroundFooter_FooterWithBackgroundImageProps {
  theme?: EmailTheme;
  variant?: BackgroundFooter_FooterWithBackgroundImageVariant;
  logoPosition?: BackgroundFooter_FooterBackgroundLogoPosition;
  bottomImageSrc?: string;
  topImageSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  primaryColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const BackgroundFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BackgroundFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-bg-column { display: block !important; width: 100% !important; }",
  "  .footer-bg-column-right { float: none !important; margin-left: 0 !important; padding-top: 24px !important; text-align: left !important; }",
  "  .footer-bg-break { display: none !important; }",
  "  .footer-bg-hero { padding-left: 24px !important; padding-right: 24px !important; }",
  "}",
].join("\n");

const BackgroundFooter_copy =
  "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.";

const BackgroundFooter_quickLinks = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const BackgroundFooter_connectLinks = [
  ["Facebook", "https://facebook.com"],
  ["GitHub", "https://github.com"],
  ["LinkedIn", "https://linkedin.com"],
  ["YouTube", "https://youtube.com"],
  ["Instagram", "https://instagram.com"],
] as const;

const BackgroundFooter_legalLinks = [
  ["Privacy Policy", "https://example.com/privacy"],
  ["Terms of Service", "https://example.com/terms"],
  ["Returns", "https://example.com/returns"],
] as const;

const BackgroundFooter_socialIcons = [
  ["Facebook", "https://facebook.com", "facebook"],
  ["GitHub", "https://github.com", "github"],
  ["LinkedIn", "https://linkedin.com", "linkedin"],
  ["YouTube", "https://youtube.com", "youtube"],
  ["X", "https://x.com", "x"],
] as const;

const BackgroundFooter_Logo = ({
  logoSrc,
  width = 55,
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

const BackgroundFooter_LinkColumn = ({
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
        fontFamily: BackgroundFooter_fontFamily,
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
            fontFamily: BackgroundFooter_fontFamily,
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

const BackgroundFooter_Socials = ({ dark = false }: { dark?: boolean }) => (
  <Section>
    <Fragment>
      <Row>
        {BackgroundFooter_socialIcons.map(([label, href, icon], index) => (
          <Column
            key={label}
            style={
              index < BackgroundFooter_socialIcons.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <Link href={href}>
              <Img
                alt={label}
                src={emailAsset(`icon-${icon}${dark ? "-dark" : ""}.png`)}
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

const BackgroundFooter_ShortLegal = ({
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
      fontFamily: BackgroundFooter_fontFamily,
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

const BackgroundFooter_AddressLegal = ({
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
        fontFamily: BackgroundFooter_fontFamily,
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
        fontFamily: BackgroundFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      You're receiving this because you subscribed to updates.{" "}
      <br className="footer-bg-break" /> No longer want to receive emails?{" "}
      <Link
        href={unsubscribeHref}
        style={{ color: mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

const BackgroundFooter_CenteredMenu = ({
  textColor,
}: {
  textColor: string;
}) => (
  <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
    <Fragment>
      <Row>
        {BackgroundFooter_quickLinks.map(([label, href], index) => (
          <Column
            key={href}
            style={
              index < BackgroundFooter_quickLinks.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <Link
              href={href}
              style={{
                color: textColor,
                fontFamily: BackgroundFooter_fontFamily,
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
);

const BackgroundFooter_ImageCta = ({
  imageSrc,
  mode,
  primaryColor,
  showSocialIcons = true,
  textColor,
  unsubscribeHref,
}: {
  imageSrc: string;
  mode: "bottom" | "top" | "bottom-centered";
  primaryColor: string;
  showSocialIcons?: boolean;
  textColor: string;
  unsubscribeHref: string;
}) => {
  const top = mode === "top";
  return (
    <Section
      style={{
        backgroundImage: `url('${imageSrc}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Section width="100%">
        <Fragment>
          <Row>
            <Column
              className="footer-bg-hero"
              style={{
                padding: top ? "0 44px" : "0 24px",
                textAlign: "center",
              }}
            >
              <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
              <Text
                style={{
                  color: "#030712",
                  fontFamily: BackgroundFooter_fontFamily,
                  fontSize: "24px",
                  fontWeight: 600,
                  lineHeight: "32px",
                  margin: 0,
                  textAlign: "center",
                }}
              >
                Start sending professionally <br className="footer-bg-break" />
                designed emails today
              </Text>
              {(() => {
                if (top) {
                  return (
                    <>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <Text
                        style={{
                          color: "#030712",
                          fontFamily: BackgroundFooter_fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                          textAlign: "center",
                        }}
                      >
                        {BackgroundFooter_copy}
                      </Text>
                      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                      <Link
                        href="https://example.com"
                        style={{
                          backgroundColor: primaryColor,
                          borderRadius: "8px",
                          color: "#fffffe",
                          display: "inline-block",
                          fontFamily: BackgroundFooter_fontFamily,
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
                          src={emailAsset("icon-arrow-right.png")}
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            verticalAlign: "baseline",
                          }}
                          width={12}
                        />
                      </Link>
                      <Section style={{ lineHeight: "120px" }}>&zwj;</Section>
                    </>
                  );
                }
                return (
                  <>
                    {(() => {
                      if (mode === "bottom-centered") {
                        return null;
                      }
                      return (
                        <>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                          <Text
                            style={{
                              color: "#030712",
                              fontFamily: BackgroundFooter_fontFamily,
                              fontSize: "16px",
                              fontWeight: 600,
                              lineHeight: "24px",
                              margin: "0 0 12px",
                              textAlign: "center",
                            }}
                          >
                            Follow us
                          </Text>
                          {showSocialIcons ? (
                            <Section
                              align="center"
                              style={{
                                marginLeft: "auto",
                                marginRight: "auto",
                              }}
                            >
                              <Fragment>
                                <Row>
                                  <Column>
                                    <BackgroundFooter_Socials dark />
                                  </Column>
                                </Row>
                              </Fragment>
                            </Section>
                          ) : null}
                        </>
                      );
                    })()}
                    <Section
                      style={{
                        lineHeight:
                          mode === "bottom-centered" ? "44px" : "24px",
                      }}
                    >
                      &zwj;
                    </Section>
                    <BackgroundFooter_ShortLegal
                      centered
                      textColor={textColor}
                      unsubscribeHref={unsubscribeHref}
                    />
                    <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
                  </>
                );
              })()}
            </Column>
          </Row>
        </Fragment>
      </Section>
    </Section>
  );
};

const BackgroundFooter_SideContent = ({
  columns,
  logoPosition,
  logoSrc,
  textColor,
}: {
  columns: 1 | 2 | 3;
  logoPosition: BackgroundFooter_FooterBackgroundLogoPosition;
  logoSrc: string;
  textColor: string;
}) => {
  const intro = (
    <Column
      className="footer-bg-column"
      style={{
        padding: "0 24px",
        textAlign: "left",
        verticalAlign: "top",
        width: columns === 1 ? "66.666667%" : "41.666667%",
      }}
    >
      <BackgroundFooter_Logo logoSrc={logoSrc} />
      {columns === 1 ? (
        <>
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: textColor,
              fontFamily: BackgroundFooter_fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            {BackgroundFooter_copy}
          </Text>
        </>
      ) : null}
    </Column>
  );
  const menus = (
    <Column
      className="footer-bg-column footer-bg-column-right"
      style={{ textAlign: "right", verticalAlign: "top" }}
    >
      <Section align="right" style={{ marginLeft: "auto" }}>
        <Fragment>
          <Row>
            <BackgroundFooter_LinkColumn
              heading="Quick Links"
              links={BackgroundFooter_quickLinks}
              textColor={textColor}
            />
            {columns >= 2 ? (
              <BackgroundFooter_LinkColumn
                heading="Connect"
                links={BackgroundFooter_connectLinks}
                textColor={textColor}
              />
            ) : null}
            {columns === 3 ? (
              <BackgroundFooter_LinkColumn
                heading="Legal"
                links={BackgroundFooter_legalLinks}
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

const BackgroundFooter_TopImageFooterContent = ({
  variant,
  logoPosition,
  logoSrc,
  textColor,
  mutedTextColor,
  unsubscribeHref,
}: {
  variant: BackgroundFooter_FooterWithBackgroundImageVariant;
  logoPosition: BackgroundFooter_FooterBackgroundLogoPosition;
  logoSrc: string;
  textColor: string;
  mutedTextColor: string;
  unsubscribeHref: string;
}) => {
  if (variant === "top-image-content") {
    return (
      <>
        <BackgroundFooter_SideContent
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
              fontFamily: BackgroundFooter_fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              margin: "0 0 12px",
            }}
          >
            Follow us
          </Text>
          <BackgroundFooter_Socials />
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <BackgroundFooter_ShortLegal
            textColor="#9ca3af"
            unsubscribeHref={unsubscribeHref}
          />
        </Section>
      </>
    );
  }
  if (variant === "top-image-3-column-menu") {
    return (
      <>
        <BackgroundFooter_SideContent
          columns={3}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <Section style={{ padding: "0 24px" }}>
          <BackgroundFooter_ShortLegal
            textColor="#9ca3af"
            unsubscribeHref={unsubscribeHref}
          />
        </Section>
      </>
    );
  }
  if (variant === "top-image-address") {
    return (
      <Section
        style={{
          padding: "0 24px",
          textAlign: logoPosition === "right" ? "right" : "left",
        }}
      >
        <BackgroundFooter_Logo logoSrc={logoSrc} width={64} />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <BackgroundFooter_AddressLegal
          centered={false}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  if (variant === "top-image-centered") {
    return (
      <Section style={{ padding: "0 24px", textAlign: "center" }}>
        <Text
          style={{
            color: "#030712",
            fontFamily: BackgroundFooter_fontFamily,
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
                <BackgroundFooter_Socials />
              </Column>
            </Row>
          </Fragment>
        </Section>
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <BackgroundFooter_AddressLegal
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </Section>
    );
  }
  return (
    <Section style={{ padding: "0 24px", textAlign: "center" }}>
      <BackgroundFooter_CenteredMenu textColor={textColor} />
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <BackgroundFooter_AddressLegal
        mutedTextColor={mutedTextColor}
        textColor={textColor}
        unsubscribeHref={unsubscribeHref}
      />
      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
      <BackgroundFooter_Logo logoSrc={logoSrc} width={64} />
    </Section>
  );
};

const BackgroundFooter_FooterWithBackgroundImageSection = ({
  variant = "bottom-image-content",
  logoPosition = "left",
  bottomImageSrc = emailAsset("footers/bg-image-1.jpg"),
  topImageSrc = emailAsset("footers/bg-image-2.jpg"),
  logoSrc = emailAsset("maizzle-insignia.png"),
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  primaryColor = "#4f46e5",
  textColor = "#6b7280",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<BackgroundFooter_FooterWithBackgroundImageProps, "theme">) => {
  const topImage = variant.startsWith("top-image");
  let columns: 1 | 2 | 3 = 1;
  if (variant === "bottom-image-2-column-menu") {
    columns = 2;
  }
  if (variant === "bottom-image-3-column-menu") {
    columns = 3;
  }
  let content: ReactNode;
  if (topImage) {
    content = (
      <>
        <BackgroundFooter_ImageCta
          imageSrc={topImageSrc}
          mode="top"
          primaryColor={primaryColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        <BackgroundFooter_TopImageFooterContent
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          mutedTextColor={mutedTextColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
          variant={variant}
        />
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      </>
    );
  } else if (variant === "bottom-image-centered") {
    content = (
      <>
        <Section style={{ padding: "0 24px", textAlign: "center" }}>
          <BackgroundFooter_Logo logoSrc={logoSrc} width={64} />
          <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
          <BackgroundFooter_CenteredMenu textColor={textColor} />
          <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
          <Section
            align="center"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <Fragment>
              <Row>
                <Column>
                  <BackgroundFooter_Socials />
                </Column>
              </Row>
            </Fragment>
          </Section>
        </Section>
        <BackgroundFooter_ImageCta
          imageSrc={bottomImageSrc}
          mode="bottom-centered"
          primaryColor={primaryColor}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </>
    );
  } else {
    content = (
      <>
        <BackgroundFooter_SideContent
          columns={columns}
          logoPosition={logoPosition}
          logoSrc={logoSrc}
          textColor={textColor}
        />
        <BackgroundFooter_ImageCta
          imageSrc={bottomImageSrc}
          mode="bottom"
          primaryColor={primaryColor}
          showSocialIcons={variant !== "bottom-image-2-column-menu"}
          textColor={textColor}
          unsubscribeHref={unsubscribeHref}
        />
      </>
    );
  }
  return (
    <Section style={{ backgroundColor: pageBackgroundColor }} width="100%">
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor,
              maxWidth: "100%",
              paddingTop: topImage ? 0 : "44px",
              width: "600px",
            }}
          >
            {content}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const BackgroundFooter_FooterWithBackgroundImage = ({
  theme = defaultTheme,
  variant = "bottom-image-content",
  logoPosition = "left",
  ...props
}: BackgroundFooter_FooterWithBackgroundImageProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: BackgroundFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with background image</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
          fontFamily: BackgroundFooter_fontFamily,
        }}
        className="m-0"
      >
        <BackgroundFooter_FooterWithBackgroundImageSection
          {...props}
          logoPosition={logoPosition}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

BackgroundFooter_FooterWithBackgroundImage.PreviewProps = {
  logoPosition: "left",
  theme: defaultTheme,
  variant: "bottom-image-content",
} satisfies BackgroundFooter_FooterWithBackgroundImageProps;

const __BackgroundFooter = BackgroundFooter_FooterWithBackgroundImage;

type LocationsFooter_FooterWithCompanyLocationsVariant = "stacked" | "grid";

interface LocationsFooter_CompanyLocation {
  address: string;
  name: string;
}

interface LocationsFooter_FooterWithCompanyLocationsProps {
  theme?: EmailTheme;
  variant?: LocationsFooter_FooterWithCompanyLocationsVariant;
  locations?: LocationsFooter_CompanyLocation[];
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  strongTextColor?: string;
  subduedTextColor?: string;
  mutedTextColor?: string;
  unsubscribeHref?: string;
}

const LocationsFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LocationsFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-locations-grid-cell { display: block !important; width: 100% !important; }",
  "  .footer-locations-grid-gap { display: none !important; }",
  "  .footer-locations-grid-cell-spaced { padding-bottom: 44px !important; }",
  "  .footer-locations-break { display: none !important; }",
  "}",
].join("\n");

const LocationsFooter_stackedLocations: LocationsFooter_CompanyLocation[] = [
  {
    address: "Gas Company Tower\n555 W 5th St, Los Angeles, CA 90013",
    name: "Downtown Los Angeles, CA",
  },
  {
    address: "One World Trade Center\n285 Fulton St, New York, NY 10007",
    name: "Downtown New York, NY",
  },
  {
    address:
      "Willis Tower (formerly Sears Tower)\n233 S Wacker Dr, Chicago, IL 60606",
    name: "Downtown Chicago, IL",
  },
];

const LocationsFooter_gridLocations: LocationsFooter_CompanyLocation[] = [
  ...LocationsFooter_stackedLocations,
  {
    address: "Salesforce Tower\n415 Mission St, San Francisco, CA 94105",
    name: "Downtown San Francisco, CA",
  },
];

const LocationsFooter_menu = [
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const LocationsFooter_socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const LocationsFooter_LineBreaks = ({ text }: { text: string }) => (
  <>
    {text.split("\n").map((line, index) => (
      <span key={`${line}-${index}`}>
        {index > 0 ? <br /> : null}
        {line}
      </span>
    ))}
  </>
);

const LocationsFooter_Divider = ({
  color,
  style,
}: {
  color: string;
  style?: CSSProperties;
}) => (
  <Section
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
      ...style,
    }}
  >
    &zwj;
  </Section>
);

const LocationsFooter_SocialLinks = () => (
  <Section>
    <Fragment>
      <Row>
        {LocationsFooter_socials.map(([label, href, icon], index) => (
          <Column
            key={label}
            style={
              index < LocationsFooter_socials.length - 1
                ? { paddingRight: "24px" }
                : undefined
            }
          >
            <Link href={href}>
              <Img
                alt={label}
                src={emailAsset(`${icon}`)}
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

const LocationsFooter_FooterWithCompanyLocationsSection = ({
  variant = "stacked",
  locations,
  logoSrc = emailAsset("maizzle-insignia.png"),
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  strongTextColor = "#030712",
  subduedTextColor = "#9ca3af",
  mutedTextColor = "#d1d5db",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<LocationsFooter_FooterWithCompanyLocationsProps, "theme">) => {
  const items =
    locations ??
    (variant === "grid"
      ? LocationsFooter_gridLocations
      : LocationsFooter_stackedLocations);
  return (
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
                    <Section style={{ textAlign: "center" }}>
                      <Link href={logoHref}>
                        <Img
                          alt={logoAlt}
                          src={logoSrc}
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "middle",
                          }}
                          width={64}
                        />
                      </Link>
                    </Section>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Section
                      align="center"
                      style={{ marginLeft: "auto", marginRight: "auto" }}
                    >
                      <Fragment>
                        <Row>
                          {LocationsFooter_menu.map((link, index) => (
                            <Column
                              key={link.href}
                              style={
                                index < LocationsFooter_menu.length - 1
                                  ? { paddingRight: "24px" }
                                  : undefined
                              }
                            >
                              <Link
                                href={link.href}
                                style={{
                                  color: textColor,
                                  fontFamily: LocationsFooter_fontFamily,
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  textDecoration: "none",
                                }}
                              >
                                {link.label}
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <LocationsFooter_Divider color={dividerColor} />
                    {(() => {
                      if (variant === "stacked") {
                        return (
                          <Section
                            style={{ margin: "24px 0", textAlign: "center" }}
                          >
                            <Text
                              style={{
                                color: strongTextColor,
                                fontFamily: LocationsFooter_fontFamily,
                                fontSize: "20px",
                                fontWeight: 600,
                                lineHeight: "28px",
                                margin: 0,
                              }}
                            >
                              Locations
                            </Text>
                            {items.map((location) => (
                              <Section
                                key={location.name}
                                style={{
                                  color: textColor,
                                  fontFamily: LocationsFooter_fontFamily,
                                  fontSize: "16px",
                                  lineHeight: "24px",
                                  textAlign: "center",
                                }}
                              >
                                <Section style={{ lineHeight: "44px" }}>
                                  &zwj;
                                </Section>
                                <Text
                                  style={{
                                    color: strongTextColor,
                                    fontWeight: 600,
                                    margin: 0,
                                  }}
                                >
                                  {location.name}
                                </Text>
                                <Text style={{ margin: 0 }}>
                                  <LocationsFooter_LineBreaks
                                    text={location.address}
                                  />
                                </Text>
                              </Section>
                            ))}
                          </Section>
                        );
                      }
                      return (
                        <Section
                          style={{ margin: "24px 0", textAlign: "left" }}
                        >
                          <Text
                            style={{
                              color: strongTextColor,
                              fontFamily: LocationsFooter_fontFamily,
                              fontSize: "20px",
                              fontWeight: 600,
                              lineHeight: "28px",
                              margin: "44px 0",
                            }}
                          >
                            Locations
                          </Text>
                          <Section
                            style={{ tableLayout: "fixed" }}
                            width="100%"
                          >
                            <Fragment>
                              {[0, 2].map((start, rowIndex) => (
                                <Row key={start}>
                                  {[start, start + 1].map(
                                    (itemIndex, columnIndex) => {
                                      const location = items[itemIndex];
                                      return (
                                        <Fragment
                                          key={location?.name ?? itemIndex}
                                        >
                                          {columnIndex > 0 ? (
                                            <Column
                                              className="footer-locations-grid-gap"
                                              style={{ width: "44px" }}
                                            >
                                              &zwj;
                                            </Column>
                                          ) : null}
                                          <Column
                                            className={`footer-locations-grid-cell ${rowIndex === 0 ? "footer-locations-grid-cell-spaced" : ""}`}
                                            style={{
                                              color: textColor,
                                              fontFamily:
                                                LocationsFooter_fontFamily,
                                              fontSize: "16px",
                                              lineHeight: "24px",
                                              verticalAlign: "top",
                                              width: "50%",
                                            }}
                                          >
                                            {location ? (
                                              <>
                                                <Text
                                                  style={{
                                                    color: strongTextColor,
                                                    fontWeight: 600,
                                                    margin: "0 0 16px",
                                                  }}
                                                >
                                                  {location.name}
                                                </Text>
                                                <Text style={{ margin: 0 }}>
                                                  <LocationsFooter_LineBreaks
                                                    text={location.address}
                                                  />
                                                </Text>
                                              </>
                                            ) : null}
                                          </Column>
                                        </Fragment>
                                      );
                                    }
                                  )}
                                </Row>
                              ))}
                            </Fragment>
                          </Section>
                        </Section>
                      );
                    })()}
                    <LocationsFooter_Divider
                      color={dividerColor}
                      style={
                        variant === "grid"
                          ? { margin: "44px 0 24px" }
                          : undefined
                      }
                    />
                    <LocationsFooter_SocialLinks />
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: subduedTextColor,
                        fontFamily: LocationsFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: variant === "stacked" ? "center" : "left",
                      }}
                    >
                      © 2026 emailcn. All rights reserved.
                    </Text>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: mutedTextColor,
                        fontFamily: LocationsFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: variant === "stacked" ? "center" : "left",
                      }}
                    >
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-locations-break" /> No longer want
                      to receive emails?{" "}
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
};

const LocationsFooter_FooterWithCompanyLocations = ({
  theme = defaultTheme,
  variant = "stacked",
  ...props
}: LocationsFooter_FooterWithCompanyLocationsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: LocationsFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with company locations</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
          fontFamily: LocationsFooter_fontFamily,
        }}
        className="m-0"
      >
        <LocationsFooter_FooterWithCompanyLocationsSection
          {...props}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

LocationsFooter_FooterWithCompanyLocations.PreviewProps = {
  theme: defaultTheme,
  variant: "stacked",
} satisfies LocationsFooter_FooterWithCompanyLocationsProps;

const __LocationsFooter = LocationsFooter_FooterWithCompanyLocations;

interface LegalFooter_LegalFooterLink {
  href: string;
  label: string;
}

interface LegalFooter_LegalFooterSocial extends LegalFooter_LegalFooterLink {
  iconSrc: string;
}

interface LegalFooter_FooterWithLegalTextProps {
  theme?: EmailTheme;
  legalText?: string;
  links?: LegalFooter_LegalFooterLink[];
  socials?: LegalFooter_LegalFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  copyrightColor?: string;
  mutedTextColor?: string;
}

const LegalFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LegalFooter_responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-legal-break { display: none !important; } }";

const LegalFooter_defaults = {
  backgroundColor: "#fffffe",
  copyrightColor: "#9ca3af",
  dividerColor: "#d1d5db",
  legalText:
    "The information provided in this email is for general informational purposes only. It is not intended as professional advice and should not be considered as a substitute for consulting with qualified professionals. The author/publisher makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the information contained herein. Any reliance you place on such information is strictly at your own risk.\n\nIn no event will the author/publisher be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this information.\n\nThrough this email, you are able to link to other websites that are not under the control of the author/publisher. The author/publisher has no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: emailAsset("icon-facebook.png"),
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: emailAsset("icon-github.png"),
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: emailAsset("icon-linkedin.png"),
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: emailAsset("icon-youtube.png"),
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: emailAsset("icon-x.png"),
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type LegalFooter_SectionProps = Omit<
  LegalFooter_FooterWithLegalTextProps,
  "theme"
>;

type LegalFooter_ResolvedProps = typeof LegalFooter_defaults &
  LegalFooter_SectionProps;

const LegalFooter_Divider = ({
  color,
  margin,
}: {
  color: string;
  margin: string;
}) => (
  <Section
    style={{
      backgroundColor: color,
      height: "1px",
      lineHeight: "1px",
      margin,
    }}
  >
    &zwj;
  </Section>
);

const LegalFooter_FooterWithLegalTextSection = (
  props: LegalFooter_SectionProps
) => {
  const resolved = resolveDefaultProps(
    LegalFooter_defaults,
    props
  ) as LegalFooter_ResolvedProps;
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
              padding: "44px 0 24px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <LegalFooter_Divider
                      color={resolved.dividerColor}
                      margin="0 0 36px"
                    />
                    <Section>
                      <Fragment>
                        <Row>
                          {resolved.links.map((link, index) => (
                            <Column
                              key={link.href}
                              style={
                                index === resolved.links.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <Link
                                href={link.href}
                                style={{
                                  color: resolved.textColor,
                                  fontFamily: LegalFooter_fontFamily,
                                  fontSize: "14px",
                                  fontWeight: 500,
                                  lineHeight: "20px",
                                  textDecoration: "none",
                                }}
                              >
                                {link.label}
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
                    <Section>
                      <Fragment>
                        <Row>
                          {resolved.socials.map((social, index) => (
                            <Column
                              key={social.href}
                              style={
                                index === resolved.socials.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <Link href={social.href}>
                                <Img
                                  alt={social.label}
                                  src={social.iconSrc}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={20}
                                />
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <LegalFooter_Divider
                      color={resolved.dividerColor}
                      margin="36px 0 24px"
                    />
                    <Section style={{ margin: "24px 0" }}>
                      <Text
                        style={{
                          color: resolved.textColor,
                          fontFamily: LegalFooter_fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                        }}
                      >
                        {resolved.legalText
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <Fragment key={paragraph}>
                              {index > 0 ? (
                                <>
                                  <br />
                                  <br />
                                </>
                              ) : null}
                              {paragraph}
                            </Fragment>
                          ))}
                      </Text>
                    </Section>
                    <Text
                      style={{
                        color: resolved.copyrightColor,
                        fontFamily: LegalFooter_fontFamily,
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
                        color: resolved.mutedTextColor,
                        fontFamily: LegalFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-legal-break" /> No longer want to
                      receive emails?{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.mutedTextColor,
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
};

const LegalFooter_FooterWithLegalText = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: LegalFooter_FooterWithLegalTextProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: LegalFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with legal text</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: LegalFooter_fontFamily,
        }}
        className="m-0"
      >
        <LegalFooter_FooterWithLegalTextSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
        />
      </Body>
    </Tailwind>
  </Html>
);

LegalFooter_FooterWithLegalText.PreviewProps = {
  theme: defaultTheme,
} satisfies LegalFooter_FooterWithLegalTextProps;

const __LegalFooter = LegalFooter_FooterWithLegalText;

type AddressFooter_FooterWithSocialIconsAndAddressVariant =
  | "left-logo"
  | "right-logo"
  | "centered";

interface AddressFooter_FooterAddressSocial {
  href: string;
  iconSrc: string;
  label: string;
}

interface AddressFooter_FooterWithSocialIconsAndAddressProps {
  theme?: EmailTheme;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: AddressFooter_FooterAddressSocial[];
  address?: string;
  legalText?: string;
  centeredLegalText?: string;
  title?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: AddressFooter_FooterWithSocialIconsAndAddressVariant;
}

const AddressFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const AddressFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-address-cell { display: block !important; width: 100% !important; }",
  "  .footer-address-gap { line-height: 96px !important; }",
  "  .footer-address-logo { text-align: left !important; }",
  "  .footer-address-break { display: none !important; }",
  "}",
].join("\n");

const AddressFooter_defaults = {
  address: "© 2026 emailcn\nemailcn  |  155 Bdv Saint Germain  |  75505 Paris",
  backgroundColor: "#fffffe",
  centeredLegalText: "You're receiving this because you subscribed to updates.",
  legalText: "We're sending you this because you subscribed.",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: emailAsset("maizzle-insignia.png"),
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: emailAsset("icon-facebook.png"),
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: emailAsset("icon-github.png"),
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: emailAsset("icon-linkedin.png"),
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: emailAsset("icon-youtube.png"),
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: emailAsset("icon-x.png"),
      label: "X",
    },
  ],
  textColor: "#6b7280",
  title: "Follow us",
  unsubscribeHref: "https://example.com/unsub",
};

type AddressFooter_SectionProps = Omit<
  AddressFooter_FooterWithSocialIconsAndAddressProps,
  "theme"
>;

type AddressFooter_ResolvedProps = typeof AddressFooter_defaults &
  AddressFooter_SectionProps;

const AddressFooter_LogoCell = ({
  props,
}: {
  props: AddressFooter_ResolvedProps;
}) => (
  <Column
    className="footer-address-cell footer-address-logo"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "55px",
    }}
  >
    <Link href={props.logoHref}>
      <Img
        alt={props.logoAlt}
        src={props.logoSrc}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={55}
      />
    </Link>
  </Column>
);

const AddressFooter_ContentCell = ({
  props,
}: {
  props: AddressFooter_ResolvedProps;
}) => (
  <Column
    className="footer-address-cell"
    style={{ textAlign: "left", verticalAlign: "top" }}
  >
    <Section>
      <Fragment>
        <Row>
          {props.socials.map((social, index) => (
            <Column
              key={social.href}
              style={
                index === props.socials.length - 1
                  ? undefined
                  : { paddingRight: "24px" }
              }
            >
              <Link href={social.href}>
                <Img
                  alt={social.label}
                  src={social.iconSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width={20}
                />
              </Link>
            </Column>
          ))}
        </Row>
      </Fragment>
    </Section>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.textColor,
        fontFamily: AddressFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {props.address.split("\n").map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.mutedTextColor,
        fontFamily: AddressFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      {props.legalText}
      <br /> No longer want to receive emails?{" "}
      <Link
        href={props.unsubscribeHref}
        style={{ color: props.mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Column>
);

const AddressFooter_CenteredContent = ({
  props,
}: {
  props: AddressFooter_ResolvedProps;
}) => (
  <>
    <Text
      style={{
        color: "#030712",
        fontFamily: AddressFooter_fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: 0,
        textAlign: "center",
      }}
    >
      {props.title}
    </Text>
    <Section style={{ lineHeight: "12px" }}>&zwj;</Section>
    <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
      <Fragment>
        <Row>
          {props.socials.map((social, index) => (
            <Column
              key={social.href}
              style={
                index === props.socials.length - 1
                  ? undefined
                  : { paddingRight: "24px" }
              }
            >
              <Link href={social.href}>
                <Img
                  alt={social.label}
                  src={social.iconSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width={20}
                />
              </Link>
            </Column>
          ))}
        </Row>
      </Fragment>
    </Section>
    <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "0 24px", textAlign: "center" }}>
            <Text
              style={{
                color: "#9ca3af",
                fontFamily: AddressFooter_fontFamily,
                fontSize: "16px",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {props.address.split("\n").map((line, index) => (
                <span key={line}>
                  {index > 0 ? <br /> : null}
                  {line}
                </span>
              ))}
            </Text>
            <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
            <Text
              style={{
                color: props.mutedTextColor,
                fontFamily: AddressFooter_fontFamily,
                fontSize: "16px",
                lineHeight: "24px",
                margin: 0,
              }}
            >
              {props.centeredLegalText} <br className="footer-address-break" />
              No longer want to receive emails?{" "}
              <Link
                href={props.unsubscribeHref}
                style={{
                  color: props.mutedTextColor,
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
  </>
);

const AddressFooter_FooterWithSocialIconsAndAddressSection = (
  props: AddressFooter_SectionProps
) => {
  const resolved = {
    ...resolveDefaultProps(AddressFooter_defaults, props),
    variant: props.variant ?? "left-logo",
  } as AddressFooter_ResolvedProps;
  const logo = <AddressFooter_LogoCell props={resolved} />;
  const gap = (
    <Column
      className="footer-address-cell footer-address-gap"
      style={{ width: "96px" }}
    >
      &zwj;
    </Column>
  );
  const content = <AddressFooter_ContentCell props={resolved} />;
  if (resolved.variant === "centered") {
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
                padding: "44px 0 24px",
                width: "600px",
              }}
            >
              <AddressFooter_CenteredContent props={resolved} />
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
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
                  <Column
                    style={{ padding: "44px 24px", verticalAlign: "top" }}
                  >
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {resolved.variant === "left-logo" ? logo : content}
                          {gap}
                          {resolved.variant === "left-logo" ? content : logo}
                        </Row>
                      </Fragment>
                    </Section>
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

const AddressFooter_FooterWithSocialIconsAndAddress = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-logo",
  ...props
}: AddressFooter_FooterWithSocialIconsAndAddressProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: AddressFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with social icons and address</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: AddressFooter_fontFamily,
        }}
        className="m-0"
      >
        <AddressFooter_FooterWithSocialIconsAndAddressSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

AddressFooter_FooterWithSocialIconsAndAddress.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies AddressFooter_FooterWithSocialIconsAndAddressProps;

const __AddressFooter = AddressFooter_FooterWithSocialIconsAndAddress;

type SimpleSocialFooter_SimpleFooterWithSocialIconsVariant =
  | "left-aligned"
  | "centered"
  | "right-aligned";

interface SimpleSocialFooter_SimpleFooterSocial {
  href: string;
  iconSrc: string;
  label: string;
}

interface SimpleSocialFooter_SimpleFooterWithSocialIconsProps {
  theme?: EmailTheme;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: SimpleSocialFooter_SimpleFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  mutedTextColor?: string;
  variant?: SimpleSocialFooter_SimpleFooterWithSocialIconsVariant;
}

const SimpleSocialFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const SimpleSocialFooter_defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: emailAsset("maizzle-insignia.png"),
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: emailAsset("icon-facebook.png"),
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: emailAsset("icon-github.png"),
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: emailAsset("icon-linkedin.png"),
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: emailAsset("icon-youtube.png"),
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: emailAsset("icon-x.png"),
      label: "X",
    },
  ],
  unsubscribeHref: "https://example.com/unsub",
};

type SimpleSocialFooter_SectionProps = Omit<
  SimpleSocialFooter_SimpleFooterWithSocialIconsProps,
  "theme"
>;

type SimpleSocialFooter_ResolvedProps = typeof SimpleSocialFooter_defaults &
  SimpleSocialFooter_SectionProps & {
    variant: SimpleSocialFooter_SimpleFooterWithSocialIconsVariant;
  };

const SimpleSocialFooter_SimpleFooterWithSocialIconsSection = (
  props: SimpleSocialFooter_SectionProps
) => {
  const resolved = {
    ...resolveDefaultProps(SimpleSocialFooter_defaults, props),
    variant: props.variant ?? "left-aligned",
  } as SimpleSocialFooter_ResolvedProps;
  const textAlign = {
    centered: "center",
    "left-aligned": "left",
    "right-aligned": "right",
  }[resolved.variant] as "center" | "left" | "right";
  const tableAlign = {
    centered: "center",
    "left-aligned": undefined,
    "right-aligned": "right",
  }[resolved.variant] as "center" | "right" | undefined;
  const tableStyle = {
    centered: { marginLeft: "auto", marginRight: "auto" },
    "left-aligned": undefined,
    "right-aligned": { marginLeft: "auto" },
  }[resolved.variant];
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
              padding: "44px 0 24px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign }}>
                    <Section>
                      <Link href={resolved.logoHref}>
                        <Img
                          alt={resolved.logoAlt}
                          src={resolved.logoSrc}
                          style={{
                            maxWidth: "100%",
                            verticalAlign: "middle",
                          }}
                          width={64}
                        />
                      </Link>
                    </Section>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Section align={tableAlign} style={tableStyle}>
                      <Fragment>
                        <Row>
                          {resolved.socials.map((social, index) => (
                            <Column
                              key={social.href}
                              style={
                                index === resolved.socials.length - 1
                                  ? undefined
                                  : { paddingRight: "24px" }
                              }
                            >
                              <Link href={social.href}>
                                <Img
                                  alt={social.label}
                                  src={social.iconSrc}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={20}
                                />
                              </Link>
                            </Column>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Section>
                      <Text
                        style={{
                          color: resolved.mutedTextColor,
                          fontFamily: SimpleSocialFooter_fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: "0 0 8px",
                        }}
                      >
                        © 2026 emailcn. All rights reserved.
                      </Text>
                      <Text
                        style={{
                          color: resolved.mutedTextColor,
                          fontFamily: SimpleSocialFooter_fontFamily,
                          fontSize: "16px",
                          lineHeight: "24px",
                          margin: 0,
                        }}
                      >
                        No longer want to receive emails?{" "}
                        <Link
                          href={resolved.unsubscribeHref}
                          style={{
                            color: resolved.mutedTextColor,
                            textDecoration: "underline",
                          }}
                        >
                          Unsubscribe
                        </Link>
                      </Text>
                    </Section>
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

const SimpleSocialFooter_SimpleFooterWithSocialIcons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "left-aligned",
  ...props
}: SimpleSocialFooter_SimpleFooterWithSocialIconsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Simple footer with social icons</Preview>
    <Tailwind config={createEmailTailwindConfig(theme)}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: SimpleSocialFooter_fontFamily,
        }}
        className="m-0"
      >
        <SimpleSocialFooter_SimpleFooterWithSocialIconsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SimpleSocialFooter_SimpleFooterWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies SimpleSocialFooter_SimpleFooterWithSocialIconsProps;

const __SimpleSocialFooter = SimpleSocialFooter_SimpleFooterWithSocialIcons;

export interface FooterBrand {
  logo: {
    src: string;
    alt?: string;
  };
  href?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterMenu {
  heading?: string;
  links: FooterLink[];
}

export interface FooterSocial extends FooterLink {
  iconSrc: string;
}

export interface FooterLegal {
  copyright?: string;
  text?: string;
  unsubscribeHref?: string;
  preferencesHref?: string;
}

export interface FooterLocation {
  name: string;
  address: string;
}

export interface UtilityFooterProps {
  theme?: Parameters<typeof __SimpleSocialFooter>[0]["theme"];
  brand?: FooterBrand;
  socials?: FooterSocial[];
  legal?: FooterLegal;
  content?: "socials" | "address" | "legal" | "locations" | "app-stores";
  locations?: FooterLocation[];
  address?: string;
  title?: string;
  alignment?: "left" | "center" | "right";
  columns?: 1 | 2;
  logoPosition?: "left" | "right";
  backgroundImage?: {
    src: string;
    alt?: string;
    position?: "top" | "bottom";
  };
  variant?:
    | Parameters<typeof __AppStoreFooter>[0]["variant"]
    | Parameters<typeof __BackgroundFooter>[0]["variant"]
    | Parameters<typeof __LocationsFooter>[0]["variant"]
    | Parameters<typeof __AddressFooter>[0]["variant"]
    | Parameters<typeof __SimpleSocialFooter>[0]["variant"];
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

const utilityAppStoreVariant = (
  title: string | undefined,
  columns: NonNullable<UtilityFooterProps["columns"]>
): Parameters<typeof __AppStoreFooter>[0]["variant"] => {
  if (title) {
    return "with-title";
  }
  if (columns === 2) {
    return "two-columns";
  }
  return "centered";
};

const utilityAddressVariant = (
  alignment: NonNullable<UtilityFooterProps["alignment"]>
): Parameters<typeof __AddressFooter>[0]["variant"] => {
  if (alignment === "center") {
    return "centered";
  }
  if (alignment === "right") {
    return "right-logo";
  }
  return "left-logo";
};

const utilitySocialVariant = (
  alignment: NonNullable<UtilityFooterProps["alignment"]>
): Parameters<typeof __SimpleSocialFooter>[0]["variant"] => {
  if (alignment === "left") {
    return "left-aligned";
  }
  if (alignment === "right") {
    return "right-aligned";
  }
  return "centered";
};

export const UtilityFooter = ({
  theme,
  brand,
  socials,
  legal,
  content = "socials",
  locations,
  address,
  title,
  alignment = "center",
  columns = 1,
  logoPosition = "left",
  backgroundImage,
  variant: variantOverride,
}: UtilityFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  const baseProps = {
    theme,
    unsubscribeHref: footerLegal.unsubscribeHref,
  };
  if (backgroundImage) {
    return (
      <__BackgroundFooter
        {...baseProps}
        bottomImageSrc={
          backgroundImage.position === "bottom"
            ? backgroundImage.src
            : undefined
        }
        logoSrc={footerBrand.logoSrc}
        logoPosition={logoPosition}
        topImageSrc={
          backgroundImage.position === "bottom"
            ? undefined
            : backgroundImage.src
        }
        variant={
          (variantOverride ??
            (backgroundImage.position === "bottom"
              ? "bottom-image-content"
              : "top-image-content")) as Parameters<
            typeof __BackgroundFooter
          >[0]["variant"]
        }
      />
    );
  }
  if (content === "locations") {
    return (
      <__LocationsFooter
        {...baseProps}
        locations={locations}
        logoAlt={footerBrand.logoAlt}
        logoHref={footerBrand.logoHref}
        logoSrc={footerBrand.logoSrc}
        variant={
          (variantOverride ??
            (columns === 2 ? "grid" : "stacked")) as Parameters<
            typeof __LocationsFooter
          >[0]["variant"]
        }
      />
    );
  }
  if (content === "app-stores") {
    return (
      <__AppStoreFooter
        {...baseProps}
        title={title}
        variant={
          (variantOverride ??
            utilityAppStoreVariant(title, columns)) as Parameters<
            typeof __AppStoreFooter
          >[0]["variant"]
        }
      />
    );
  }
  if (content === "legal") {
    return (
      <__LegalFooter
        {...baseProps}
        legalText={footerLegal.text}
        socials={socials}
      />
    );
  }
  if (content === "address") {
    return (
      <__AddressFooter
        {...baseProps}
        address={address}
        legalText={footerLegal.text}
        logoAlt={footerBrand.logoAlt}
        logoHref={footerBrand.logoHref}
        logoSrc={footerBrand.logoSrc}
        socials={socials}
        title={title}
        variant={
          (variantOverride ?? utilityAddressVariant(alignment)) as Parameters<
            typeof __AddressFooter
          >[0]["variant"]
        }
      />
    );
  }
  return (
    <__SimpleSocialFooter
      {...baseProps}
      logoAlt={footerBrand.logoAlt}
      logoHref={footerBrand.logoHref}
      logoSrc={footerBrand.logoSrc}
      socials={socials}
      variant={
        (variantOverride ?? utilitySocialVariant(alignment)) as Parameters<
          typeof __SimpleSocialFooter
        >[0]["variant"]
      }
    />
  );
};

UtilityFooter.PreviewProps = {
  alignment: "center",
  columns: 1,
  content: "socials",
  logoPosition: "left",
} satisfies UtilityFooterProps;
