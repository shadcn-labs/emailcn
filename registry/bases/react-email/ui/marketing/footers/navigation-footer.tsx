import { Fragment } from "react";
import type { ReactNode } from "react";
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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/themes/react-email/default";

interface CenteredFooter_CenteredFooterLink {
  href: string;
  label: string;
}

interface CenteredFooter_CenteredFooterSocial extends CenteredFooter_CenteredFooterLink {
  iconSrc: string;
}

interface CenteredFooter_FooterCenteredWithMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: CenteredFooter_CenteredFooterLink[];
  socials?: CenteredFooter_CenteredFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const CenteredFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CenteredFooter_responsiveStyles =
  "@media only screen and (max-width: 599px) { .footer-centered-menu-break { display: none !important; } }";

const CenteredFooter_defaults = {
  backgroundColor: "#fffffe",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#9ca3af",
  unsubscribeHref: "https://example.com/unsub",
};

type CenteredFooter_SectionProps = Omit<
  CenteredFooter_FooterCenteredWithMenuAndSocialsProps,
  "theme"
>;

type CenteredFooter_ResolvedProps = typeof CenteredFooter_defaults &
  CenteredFooter_SectionProps;

const CenteredFooter_CenteredRow = ({ children }: { children: ReactNode }) => (
  <Section align="center" style={{ marginLeft: "auto", marginRight: "auto" }}>
    <Fragment>
      <Row>{children}</Row>
    </Fragment>
  </Section>
);

const CenteredFooter_FooterCenteredWithMenuAndSocialsSection = (
  props: CenteredFooter_SectionProps
) => {
  const resolved = {
    ...CenteredFooter_defaults,
    ...props,
  } as CenteredFooter_ResolvedProps;
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
            <Section style={{ textAlign: "center" }}>
              <Link href={resolved.logoHref}>
                <Img
                  alt={resolved.logoAlt}
                  src={resolved.logoSrc}
                  style={{ maxWidth: "100%", verticalAlign: "middle" }}
                  width={55}
                />
              </Link>
            </Section>
            <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
            <CenteredFooter_CenteredRow>
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
                      fontFamily: CenteredFooter_fontFamily,
                      fontSize: "14px",
                      lineHeight: "20px",
                      textDecoration: "none",
                    }}
                  >
                    {link.label}
                  </Link>
                </Column>
              ))}
            </CenteredFooter_CenteredRow>
            <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
            <CenteredFooter_CenteredRow>
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
                      style={{ maxWidth: "100%", verticalAlign: "middle" }}
                      width={20}
                    />
                  </Link>
                </Column>
              ))}
            </CenteredFooter_CenteredRow>
            <Section style={{ lineHeight: "64px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily: CenteredFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn
                      <br /> emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; |
                      &nbsp;75505 Paris
                    </Text>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily: CenteredFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      You're receiving this because you subscribed to updates.{" "}
                      <br className="footer-centered-menu-break" /> No longer
                      want to receive emails?{" "}
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

const CenteredFooter_FooterCenteredWithMenuAndSocials = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: CenteredFooter_FooterCenteredWithMenuAndSocialsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: CenteredFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer centered with menu and socials</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: CenteredFooter_fontFamily,
        margin: 0,
      }}
    >
      <CenteredFooter_FooterCenteredWithMenuAndSocialsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

CenteredFooter_FooterCenteredWithMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
} satisfies CenteredFooter_FooterCenteredWithMenuAndSocialsProps;

const __CenteredFooter = CenteredFooter_FooterCenteredWithMenuAndSocials;

type DividerMenuFooter_FooterWith2ColumnMenuAndDividerVariant =
  | "left-logo"
  | "right-logo";

interface DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps {
  theme?: TailwindConfig;
  variant?: DividerMenuFooter_FooterWith2ColumnMenuAndDividerVariant;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  headingColor?: string;
  legalColor?: string;
  unsubscribeHref?: string;
}

const DividerMenuFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const DividerMenuFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-divider-socials { float: none !important; margin-bottom: 44px !important; margin-left: 0 !important; }",
  "  .footer-divider-legal { display: table-footer-group !important; }",
  "  .footer-divider-social-cell { display: table-header-group !important; }",
  "}",
].join("\n");

const DividerMenuFooter_quickLinks = [
  ["About us", "https://example.com/about"],
  ["Shop", "https://example.com/shop"],
  ["FAQs", "https://example.com/faq"],
  ["Contact us", "https://example.com/contact"],
] as const;

const DividerMenuFooter_legalLinks = [
  ["Privacy Policy", "https://example.com/privacy"],
  ["Terms of Service", "https://example.com/terms"],
  ["Returns", "https://example.com/returns"],
] as const;

const DividerMenuFooter_socials = [
  ["Facebook", "https://facebook.com", "icon-facebook.png"],
  ["GitHub", "https://github.com", "icon-github.png"],
  ["LinkedIn", "https://linkedin.com", "icon-linkedin.png"],
  ["YouTube", "https://youtube.com", "icon-youtube.png"],
  ["X", "https://x.com", "icon-x.png"],
] as const;

const DividerMenuFooter_LinkColumn = ({
  heading,
  links,
  headingColor,
  textColor,
}: {
  heading: string;
  links: readonly (readonly [string, string])[];
  headingColor: string;
  textColor: string;
}) => (
  <Column
    style={{
      paddingRight: heading === "Quick Links" ? "64px" : 0,
      verticalAlign: "top",
    }}
  >
    <Text
      style={{
        color: headingColor,
        fontFamily: DividerMenuFooter_fontFamily,
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
            fontFamily: DividerMenuFooter_fontFamily,
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

const DividerMenuFooter_FooterWith2ColumnMenuAndDividerSection = ({
  variant = "left-logo",
  logoSrc = "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  logoAlt = "Maizzle",
  logoHref = "https://example.com",
  pageBackgroundColor = "#f1f5f9",
  backgroundColor = "#fffffe",
  dividerColor = "#d1d5db",
  textColor = "#6b7280",
  headingColor = "#030712",
  legalColor = "#9ca3af",
  unsubscribeHref = "https://example.com/unsub",
}: Omit<DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps, "theme">) => (
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
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        <Column style={{ verticalAlign: "top" }}>
                          <Section>
                            <Fragment>
                              <Row>
                                <DividerMenuFooter_LinkColumn
                                  heading="Quick Links"
                                  headingColor={headingColor}
                                  links={DividerMenuFooter_quickLinks}
                                  textColor={textColor}
                                />
                                <DividerMenuFooter_LinkColumn
                                  heading="Legal"
                                  headingColor={headingColor}
                                  links={DividerMenuFooter_legalLinks}
                                  textColor={textColor}
                                />
                              </Row>
                            </Fragment>
                          </Section>
                        </Column>
                      </Row>
                      <Row>
                        <Column>
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
                        </Column>
                      </Row>
                      <Row>
                        <Column
                          style={{
                            textAlign:
                              variant === "right-logo" ? "right" : "left",
                          }}
                        >
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
                        </Column>
                      </Row>
                      <Row>
                        <Column style={{ lineHeight: "24px" }}>&zwj;</Column>
                      </Row>
                      <Row>
                        <Column>
                          <Section
                            style={{ tableLayout: "fixed" }}
                            width="100%"
                          >
                            <Fragment>
                              <Row>
                                <Column className="footer-divider-legal">
                                  <Text
                                    style={{
                                      color: legalColor,
                                      fontFamily: DividerMenuFooter_fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    © 2026 emailcn. All rights reserved.
                                  </Text>
                                  <Text
                                    style={{
                                      color: legalColor,
                                      fontFamily: DividerMenuFooter_fontFamily,
                                      fontSize: "16px",
                                      lineHeight: "24px",
                                      margin: 0,
                                    }}
                                  >
                                    No longer want to receive emails?{" "}
                                    <Link
                                      href={unsubscribeHref}
                                      style={{
                                        color: legalColor,
                                        textDecoration: "underline",
                                      }}
                                    >
                                      Unsubscribe
                                    </Link>
                                  </Text>
                                </Column>
                                <Column
                                  className="footer-divider-social-cell"
                                  style={{
                                    paddingLeft: "44px",
                                    verticalAlign: "top",
                                  }}
                                >
                                  <Section
                                    align="right"
                                    className="footer-divider-socials"
                                    style={{
                                      float: "right",
                                      marginLeft: "auto",
                                    }}
                                  >
                                    <Fragment>
                                      <Row>
                                        {DividerMenuFooter_socials.map(
                                          ([label, href, icon], index) => (
                                            <Column
                                              key={label}
                                              style={
                                                index <
                                                DividerMenuFooter_socials.length -
                                                  1
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
                                </Column>
                              </Row>
                            </Fragment>
                          </Section>
                        </Column>
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

const DividerMenuFooter_FooterWith2ColumnMenuAndDivider = ({
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: DividerMenuFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with two-column menu and divider</Preview>
    <Body
      style={{
        backgroundColor: props.pageBackgroundColor ?? "#f1f5f9",
        fontFamily: DividerMenuFooter_fontFamily,
        margin: 0,
      }}
    >
      <DividerMenuFooter_FooterWith2ColumnMenuAndDividerSection
        {...props}
        variant={variant}
      />
    </Body>
  </Html>
);

DividerMenuFooter_FooterWith2ColumnMenuAndDivider.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies DividerMenuFooter_FooterWith2ColumnMenuAndDividerProps;

const __DividerMenuFooter = DividerMenuFooter_FooterWith2ColumnMenuAndDivider;

type TwoColumnFooter_FooterWith2ColumnMenuVariant = "left-logo" | "right-logo";

interface TwoColumnFooter_FooterWith2ColumnMenuLink {
  href: string;
  label: string;
}

interface TwoColumnFooter_FooterWith2ColumnMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: TwoColumnFooter_FooterWith2ColumnMenuLink[];
  connectLinks?: TwoColumnFooter_FooterWith2ColumnMenuLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: TwoColumnFooter_FooterWith2ColumnMenuVariant;
}

const TwoColumnFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TwoColumnFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-two-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-two-menu-logo { padding-bottom: 24px !important; text-align: left !important; }",
  "  .footer-two-menu-columns { float: none !important; margin: 0 !important; text-align: left !important; }",
  "}",
].join("\n");

const TwoColumnFooter_defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type TwoColumnFooter_SectionProps = Omit<
  TwoColumnFooter_FooterWith2ColumnMenuProps,
  "theme"
>;

type TwoColumnFooter_ResolvedProps = typeof TwoColumnFooter_defaults &
  TwoColumnFooter_SectionProps;

const TwoColumnFooter_MenuColumn = ({
  links,
  props,
  title,
}: {
  links: TwoColumnFooter_FooterWith2ColumnMenuLink[];
  props: TwoColumnFooter_ResolvedProps;
  title: string;
}) => (
  <Column
    style={{ padding: "0 24px", textAlign: "left", verticalAlign: "top" }}
  >
    <Text
      style={{
        color: props.headingColor,
        fontFamily: TwoColumnFooter_fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: "0 0 10px",
      }}
    >
      {title}
    </Text>
    {links.map((link) => (
      <Text key={link.href} style={{ margin: "0 0 8px" }}>
        <Link
          href={link.href}
          style={{
            color: props.textColor,
            fontFamily: TwoColumnFooter_fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            textDecoration: "none",
          }}
        >
          {link.label}
        </Link>
      </Text>
    ))}
  </Column>
);

const TwoColumnFooter_LogoCell = ({
  props,
}: {
  props: TwoColumnFooter_ResolvedProps;
}) => (
  <Column
    className="footer-two-menu-cell footer-two-menu-logo"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "41.666667%",
    }}
  >
    <Section width="100%">
      <Fragment>
        <Row>
          <Column style={{ padding: "0 24px 24px" }}>
            <Link href={props.logoHref}>
              <Img
                alt={props.logoAlt}
                src={props.logoSrc}
                style={{ maxWidth: "100%", verticalAlign: "middle" }}
                width={55}
              />
            </Link>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const TwoColumnFooter_MenusCell = ({
  props,
}: {
  props: TwoColumnFooter_ResolvedProps;
}) => (
  <Column className="footer-two-menu-cell" style={{ verticalAlign: "top" }}>
    <Section
      align={props.variant === "left-logo" ? "right" : "left"}
      className="footer-two-menu-columns"
      style={
        props.variant === "left-logo"
          ? { marginLeft: "auto" }
          : { marginRight: "auto" }
      }
    >
      <Fragment>
        <Row>
          <TwoColumnFooter_MenuColumn
            links={props.quickLinks}
            props={props}
            title="Quick Links"
          />
          <TwoColumnFooter_MenuColumn
            links={props.connectLinks}
            props={props}
            title="Connect"
          />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const TwoColumnFooter_FooterWith2ColumnMenuSection = (
  props: TwoColumnFooter_SectionProps
) => {
  const resolved = {
    ...TwoColumnFooter_defaults,
    ...props,
    variant: props.variant ?? "left-logo",
  } as TwoColumnFooter_ResolvedProps;
  const logo = <TwoColumnFooter_LogoCell props={resolved} />;
  const menus = <TwoColumnFooter_MenusCell props={resolved} />;
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
                  {resolved.variant === "left-logo" ? logo : menus}
                  {resolved.variant === "left-logo" ? menus : logo}
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Text
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily: TwoColumnFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {resolved.copyright}{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.textColor,
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

const TwoColumnFooter_FooterWith2ColumnMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: TwoColumnFooter_FooterWith2ColumnMenuProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: TwoColumnFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with 2-column menu</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TwoColumnFooter_fontFamily,
        margin: 0,
      }}
    >
      <TwoColumnFooter_FooterWith2ColumnMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

TwoColumnFooter_FooterWith2ColumnMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies TwoColumnFooter_FooterWith2ColumnMenuProps;

const __TwoColumnFooter = TwoColumnFooter_FooterWith2ColumnMenu;

type ThreeColumnFooter_FooterWith3ColMenuVariant = "left-logo" | "right-logo";

interface ThreeColumnFooter_FooterWith3ColMenuLink {
  href: string;
  label: string;
}

interface ThreeColumnFooter_FooterWith3ColMenuSocial extends ThreeColumnFooter_FooterWith3ColMenuLink {
  iconSrc: string;
}

interface ThreeColumnFooter_FooterWith3ColMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  quickLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  connectLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  legalLinks?: ThreeColumnFooter_FooterWith3ColMenuLink[];
  socials?: ThreeColumnFooter_FooterWith3ColMenuSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: ThreeColumnFooter_FooterWith3ColMenuVariant;
}

const ThreeColumnFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const ThreeColumnFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-three-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-three-menu-brand { padding-bottom: 44px !important; text-align: left !important; }",
  "  .footer-three-menu-break { display: none !important; }",
  "  .footer-three-menu-columns { float: none !important; margin: 0 !important; text-align: left !important; }",
  "  .footer-three-menu-column { padding-right: 20px !important; }",
  "}",
].join("\n");

const ThreeColumnFooter_defaults = {
  backgroundColor: "#fffffe",
  connectLinks: [
    { href: "https://facebook.com", label: "Facebook" },
    { href: "https://github.com", label: "GitHub" },
    { href: "https://linkedin.com", label: "LinkedIn" },
    { href: "https://youtube.com", label: "YouTube" },
    { href: "https://instagram.com", label: "Instagram" },
  ],
  headingColor: "#030712",
  legalLinks: [
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/terms", label: "Terms of Service" },
    { href: "https://example.com/returns", label: "Returns" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type ThreeColumnFooter_SectionProps = Omit<
  ThreeColumnFooter_FooterWith3ColMenuProps,
  "theme"
>;

type ThreeColumnFooter_ResolvedProps = typeof ThreeColumnFooter_defaults &
  ThreeColumnFooter_SectionProps;

const ThreeColumnFooter_MenuColumn = ({
  last = false,
  links,
  props,
  title,
}: {
  last?: boolean;
  links: ThreeColumnFooter_FooterWith3ColMenuLink[];
  props: ThreeColumnFooter_ResolvedProps;
  title: string;
}) => (
  <Column
    className={last ? undefined : "footer-three-menu-column"}
    style={{
      paddingRight: last ? undefined : "40px",
      textAlign: "left",
      verticalAlign: "top",
    }}
  >
    <Text
      style={{
        color: props.headingColor,
        fontFamily: ThreeColumnFooter_fontFamily,
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
        margin: "0 0 10px",
      }}
    >
      {title}
    </Text>
    {links.map((link) => (
      <Text key={link.href} style={{ margin: "0 0 8px" }}>
        <Link
          href={link.href}
          style={{
            color: props.textColor,
            fontFamily: ThreeColumnFooter_fontFamily,
            fontSize: "14px",
            lineHeight: "20px",
            textDecoration: "none",
          }}
        >
          {link.label}
        </Link>
      </Text>
    ))}
  </Column>
);

const ThreeColumnFooter_BrandCell = ({
  props,
}: {
  props: ThreeColumnFooter_ResolvedProps;
}) => (
  <Column
    className="footer-three-menu-cell footer-three-menu-brand"
    style={{
      textAlign: props.variant === "right-logo" ? "right" : "left",
      verticalAlign: "top",
      width: "33.333333%",
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
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.mutedTextColor,
        fontFamily: ThreeColumnFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn. <br className="footer-three-menu-break" /> All rights
      reserved.
    </Text>
  </Column>
);

const ThreeColumnFooter_MenusCell = ({
  props,
}: {
  props: ThreeColumnFooter_ResolvedProps;
}) => (
  <Column className="footer-three-menu-cell" style={{ verticalAlign: "top" }}>
    <Section
      align={props.variant === "left-logo" ? "right" : "left"}
      className="footer-three-menu-columns"
      style={
        props.variant === "left-logo"
          ? { marginLeft: "auto" }
          : { marginRight: "auto" }
      }
    >
      <Fragment>
        <Row>
          <ThreeColumnFooter_MenuColumn
            links={props.quickLinks}
            props={props}
            title="Quick Links"
          />
          <ThreeColumnFooter_MenuColumn
            links={props.connectLinks}
            props={props}
            title="Connect"
          />
          <ThreeColumnFooter_MenuColumn
            last
            links={props.legalLinks}
            props={props}
            title="Legal"
          />
        </Row>
      </Fragment>
    </Section>
  </Column>
);

const ThreeColumnFooter_FooterWith3ColMenuSection = (
  props: ThreeColumnFooter_SectionProps
) => {
  const resolved = {
    ...ThreeColumnFooter_defaults,
    ...props,
    variant: props.variant ?? "left-logo",
  } as ThreeColumnFooter_ResolvedProps;
  const brand = <ThreeColumnFooter_BrandCell props={resolved} />;
  const menus = <ThreeColumnFooter_MenusCell props={resolved} />;
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
                  <Column style={{ padding: "0 24px" }}>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {resolved.variant === "left-logo" ? brand : menus}
                          {resolved.variant === "left-logo" ? menus : brand}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Text
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily: ThreeColumnFooter_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      © 2026 emailcn. No longer want to receive emails?{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.textColor,
                          textDecoration: "underline",
                        }}
                      >
                        Unsubscribe
                      </Link>
                    </Text>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
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

const ThreeColumnFooter_FooterWith3ColMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: ThreeColumnFooter_FooterWith3ColMenuProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: ThreeColumnFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with 3-column menu</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: ThreeColumnFooter_fontFamily,
        margin: 0,
      }}
    >
      <ThreeColumnFooter_FooterWith3ColMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

ThreeColumnFooter_FooterWith3ColMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies ThreeColumnFooter_FooterWith3ColMenuProps;

const __ThreeColumnFooter = ThreeColumnFooter_FooterWith3ColMenu;

type FullMenuFooter_FooterWithFullMenuVariant = "oversized-logo" | "bordered";

interface FullMenuFooter_FullMenuFooterLink {
  href: string;
  label: string;
}

interface FullMenuFooter_FullMenuFooterSocial extends FullMenuFooter_FullMenuFooterLink {
  iconSrc: string;
}

interface FullMenuFooter_FooterWithFullMenuProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  assistanceText?: string;
  links?: FullMenuFooter_FullMenuFooterLink[];
  socials?: FullMenuFooter_FullMenuFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  dividerColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: FullMenuFooter_FooterWithFullMenuVariant;
}

const FullMenuFooter_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullMenuFooter_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-full-menu-item { display: inline-block !important; }",
  "  .footer-full-menu-break { display: none !important; }",
  "  .footer-full-menu-row { line-height: 32px !important; text-align: center !important; }",
  "}",
].join("\n");

const FullMenuFooter_defaults = {
  assistanceText:
    "If you have any questions or need assistance\nplease reply to this email.",
  backgroundColor: "#fffffe",
  dividerColor: "#d1d5db",
  links: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/blog", label: "Blog" },
    { href: "https://example.com/support", label: "Support" },
    { href: "https://example.com/privacy", label: "Privacy Policy" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  mutedTextColor: "#d1d5db",
  pageBackgroundColor: "#f1f5f9",
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type FullMenuFooter_SectionProps = Omit<
  FullMenuFooter_FooterWithFullMenuProps,
  "theme"
>;

type FullMenuFooter_ResolvedProps = typeof FullMenuFooter_defaults &
  FullMenuFooter_SectionProps & {
    logoSrc: string;
    variant: FullMenuFooter_FooterWithFullMenuVariant;
  };

const FullMenuFooter_Divider = ({
  props,
}: {
  props: FullMenuFooter_ResolvedProps;
}) => (
  <Section
    style={{
      backgroundColor: props.dividerColor,
      height: "1px",
      lineHeight: "1px",
      margin: "24px 0",
    }}
  >
    &zwj;
  </Section>
);

const FullMenuFooter_Menu = ({
  props,
}: {
  props: FullMenuFooter_ResolvedProps;
}) => (
  <Section
    align="center"
    className="footer-full-menu-row"
    style={{ marginLeft: "auto", marginRight: "auto" }}
  >
    <Fragment>
      <Row>
        {props.links.map((link) => (
          <Column
            className="footer-full-menu-item"
            key={link.href}
            style={{ padding: "0 12px" }}
          >
            <Link
              href={link.href}
              style={{
                color: props.textColor,
                fontFamily: FullMenuFooter_fontFamily,
                fontSize: "14px",
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
);

const FullMenuFooter_Socials = ({
  props,
}: {
  props: FullMenuFooter_ResolvedProps;
}) => (
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
);

const FullMenuFooter_Address = ({
  props,
}: {
  props: FullMenuFooter_ResolvedProps;
}) => (
  <Section style={{ textAlign: "center" }}>
    <Text
      style={{
        color: props.textColor,
        fontFamily: FullMenuFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      © 2026 emailcn
      <br /> emailcn&nbsp; | &nbsp;155 Bdv Saint Germain&nbsp; | &nbsp;75505
      Paris
    </Text>
    <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
    <Text
      style={{
        color: props.mutedTextColor,
        fontFamily: FullMenuFooter_fontFamily,
        fontSize: "16px",
        lineHeight: "24px",
        margin: 0,
      }}
    >
      We're sending you this because you subscribed.{" "}
      <br className="footer-full-menu-break" /> No longer want to receive
      emails?{" "}
      <Link
        href={props.unsubscribeHref}
        style={{ color: props.mutedTextColor, textDecoration: "underline" }}
      >
        Unsubscribe
      </Link>
    </Text>
  </Section>
);

const FullMenuFooter_FooterWithFullMenuSection = (
  props: FullMenuFooter_SectionProps
) => {
  const variant = props.variant ?? "oversized-logo";
  const resolved = {
    ...FullMenuFooter_defaults,
    ...props,
    logoSrc:
      props.logoSrc ??
      (variant === "bordered"
        ? "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png"
        : "https://emailcn.vercel.app/api/email-assets/maizzle-insignia-lg.png"),
    variant,
  } as FullMenuFooter_ResolvedProps;
  const bordered = variant === "bordered";
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
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Link href={resolved.logoHref}>
                      <Img
                        alt={resolved.logoAlt}
                        src={resolved.logoSrc}
                        style={{ maxWidth: "100%", verticalAlign: "middle" }}
                        width={bordered ? 88 : 197}
                      />
                    </Link>
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    {(() => {
                      if (bordered) {
                        return (
                          <>
                            <Text
                              style={{
                                color: resolved.textColor,
                                fontFamily: FullMenuFooter_fontFamily,
                                fontSize: "18px",
                                lineHeight: "28px",
                                margin: 0,
                              }}
                            >
                              {resolved.assistanceText
                                .split("\n")
                                .map((line, index) => (
                                  <span key={line}>
                                    {index > 0 ? (
                                      <br className="footer-full-menu-break" />
                                    ) : null}
                                    {line}
                                  </span>
                                ))}
                            </Text>
                            <FullMenuFooter_Divider props={resolved} />
                            <FullMenuFooter_Menu props={resolved} />
                            <FullMenuFooter_Divider props={resolved} />
                            <FullMenuFooter_Socials props={resolved} />
                            <Section style={{ lineHeight: "24px" }}>
                              &zwj;
                            </Section>
                          </>
                        );
                      }
                      return (
                        <>
                          <FullMenuFooter_Menu props={resolved} />
                          <Section style={{ lineHeight: "24px" }}>
                            &zwj;
                          </Section>
                          <FullMenuFooter_Socials props={resolved} />
                          <FullMenuFooter_Divider props={resolved} />
                        </>
                      );
                    })()}
                    <FullMenuFooter_Address props={resolved} />
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

const FullMenuFooter_FooterWithFullMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "oversized-logo",
  ...props
}: FullMenuFooter_FooterWithFullMenuProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: FullMenuFooter_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Footer with full menu</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: FullMenuFooter_fontFamily,
        margin: 0,
      }}
    >
      <FullMenuFooter_FooterWithFullMenuSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

FullMenuFooter_FooterWithFullMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "oversized-logo",
} satisfies FullMenuFooter_FooterWithFullMenuProps;

const __FullMenuFooter = FullMenuFooter_FooterWithFullMenu;

type TextMenuFooterBundle_FooterWithTextMenuAndSocialsVariant =
  | "left-logo"
  | "right-logo";

interface TextMenuFooterBundle_FooterLink {
  href: string;
  label: string;
}

interface TextMenuFooterBundle_FooterSocialLink extends TextMenuFooterBundle_FooterLink {
  iconSrc: string;
}

interface TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  description?: string;
  /** @deprecated Use `copyright` instead. */
  text?: string;
  quickLinks?: TextMenuFooterBundle_FooterLink[];
  socials?: TextMenuFooterBundle_FooterSocialLink[];
  copyright?: string;
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  variant?: TextMenuFooterBundle_FooterWithTextMenuAndSocialsVariant;
}

const TextMenuFooterBundle_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TextMenuFooterBundle_responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .footer-text-menu-cell { display: block !important; width: 100% !important; }",
  "  .footer-text-menu-copy { padding-bottom: 24px !important; text-align: left !important; }",
  "  .footer-text-menu-links { float: none !important; margin: 0 !important; text-align: left !important; }",
  "}",
].join("\n");

const TextMenuFooterBundle_defaults = {
  backgroundColor: "#fffffe",
  copyright: "© 2026 emailcn. No longer want to receive emails?",
  description:
    "Lorem ipsum dolor sit amet consectetur. Eget aenean sed sit sed in sapien. Vel auctor arcu nulla consectetur sed.",
  headingColor: "#030712",
  logoAlt: "Maizzle",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  quickLinks: [
    { href: "https://example.com/about", label: "About us" },
    { href: "https://example.com/shop", label: "Shop" },
    { href: "https://example.com/faq", label: "FAQs" },
    { href: "https://example.com/contact", label: "Contact us" },
  ],
  socials: [
    {
      href: "https://facebook.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-facebook.png",
      label: "Facebook",
    },
    {
      href: "https://github.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
      label: "GitHub",
    },
    {
      href: "https://linkedin.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
      label: "LinkedIn",
    },
    {
      href: "https://youtube.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-youtube.png",
      label: "YouTube",
    },
    {
      href: "https://x.com",
      iconSrc: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
      label: "X",
    },
  ],
  textColor: "#6b7280",
  unsubscribeHref: "https://example.com/unsub",
};

type TextMenuFooterBundle_SectionProps = Omit<
  TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps,
  "theme"
>;

type TextMenuFooterBundle_ResolvedProps = typeof TextMenuFooterBundle_defaults &
  TextMenuFooterBundle_SectionProps;

const TextMenuFooterBundle_BrandCopy = ({
  props,
}: {
  props: TextMenuFooterBundle_ResolvedProps;
}) => (
  <Section width="100%">
    <Fragment>
      <Row>
        <Column
          className="footer-text-menu-copy"
          style={{
            padding: "0 24px 24px",
            textAlign: props.variant === "right-logo" ? "right" : "left",
          }}
        >
          <Img
            alt={props.logoAlt}
            src={props.logoSrc}
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
            width={55}
          />
          <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
          <Text
            style={{
              color: props.textColor,
              fontFamily: TextMenuFooterBundle_fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
              margin: 0,
            }}
          >
            {props.description}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const TextMenuFooterBundle_QuickLinks = ({
  props,
}: {
  props: TextMenuFooterBundle_ResolvedProps;
}) => (
  <Section
    align={props.variant === "left-logo" ? "right" : "left"}
    className="footer-text-menu-links"
    style={
      props.variant === "left-logo"
        ? { marginLeft: "auto" }
        : { marginRight: "auto" }
    }
  >
    <Fragment>
      <Row>
        <Column style={{ padding: "0 24px", textAlign: "left" }}>
          <Text
            style={{
              color: props.headingColor,
              fontFamily: TextMenuFooterBundle_fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              margin: "0 0 10px",
            }}
          >
            Quick Links
          </Text>
          {props.quickLinks.map((link) => (
            <Text key={link.href} style={{ margin: "0 0 8px" }}>
              <Link
                href={link.href}
                style={{
                  color: props.textColor,
                  display: "block",
                  fontFamily: TextMenuFooterBundle_fontFamily,
                  fontSize: "14px",
                  lineHeight: "20px",
                  textDecoration: "none",
                }}
              >
                {link.label}
              </Link>
            </Text>
          ))}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection = (
  props: TextMenuFooterBundle_SectionProps
) => {
  const resolved = {
    ...TextMenuFooterBundle_defaults,
    ...props,
    copyright:
      props.copyright ?? props.text ?? TextMenuFooterBundle_defaults.copyright,
    variant: props.variant ?? "left-logo",
  } as TextMenuFooterBundle_ResolvedProps;
  const brandCell = (
    <Column
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "66.666667%" }}
    >
      <TextMenuFooterBundle_BrandCopy props={resolved} />
    </Column>
  );
  const linksCell = (
    <Column
      className="footer-text-menu-cell"
      style={{ verticalAlign: "top", width: "33.333333%" }}
    >
      <TextMenuFooterBundle_QuickLinks props={resolved} />
    </Column>
  );
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
                  {resolved.variant === "left-logo" ? brandCell : linksCell}
                  {resolved.variant === "left-logo" ? linksCell : brandCell}
                </Row>
              </Fragment>
            </Section>
            <Section style={{ lineHeight: "96px" }}>&zwj;</Section>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "left" }}>
                    <Text
                      style={{
                        color: resolved.headingColor,
                        fontFamily: TextMenuFooterBundle_fontFamily,
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        margin: "0 0 12px",
                      }}
                    >
                      Follow us
                    </Text>
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
                    <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
                    <Text
                      style={{
                        color: resolved.mutedTextColor,
                        fontFamily: TextMenuFooterBundle_fontFamily,
                        fontSize: "16px",
                        lineHeight: "24px",
                        margin: 0,
                      }}
                    >
                      {resolved.copyright}{" "}
                      <Link
                        href={resolved.unsubscribeHref}
                        style={{
                          color: resolved.textColor,
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

const TextMenuFooterBundle_FooterWithTextMenuAndSocials = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-logo",
  ...props
}: TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: TextMenuFooterBundle_responsiveStyles,
        }}
      />
    </EmailHead>
    <Preview>Footer with text, menu and socials</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: TextMenuFooterBundle_fontFamily,
        margin: 0,
      }}
    >
      <TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

TextMenuFooterBundle_FooterWithTextMenuAndSocials.PreviewProps = {
  theme: defaultTheme,
  variant: "left-logo",
} satisfies TextMenuFooterBundle_FooterWithTextMenuAndSocialsProps;

const __TextMenuFooterBundle = {
  Component: TextMenuFooterBundle_FooterWithTextMenuAndSocials,
  __NavigationFooterSection:
    TextMenuFooterBundle_FooterWithTextMenuAndSocialsSection,
};

const __TextMenuFooter = __TextMenuFooterBundle.Component;

const { __NavigationFooterSection } = __TextMenuFooterBundle;

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

export interface NavigationFooterProps {
  theme?: Parameters<typeof __TwoColumnFooter>[0]["theme"];
  brand?: FooterBrand;
  description?: string;
  menus?: FooterMenu[];
  socials?: FooterSocial[];
  legal?: FooterLegal;
  columns?: 1 | 2 | 3;
  alignment?: "left" | "center" | "right";
  logoPosition?: "left" | "right" | "top" | "bottom";
  divider?: boolean;
  oversizedLogo?: boolean;
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

const footerMenuLinks = (menu: FooterMenu | undefined) => menu?.links;

export const NavigationFooter = ({
  theme,
  brand,
  description,
  menus,
  socials,
  legal,
  columns = 2,
  alignment = "left",
  logoPosition = "left",
  divider = false,
  oversizedLogo = false,
}: NavigationFooterProps) => {
  const footerBrand = footerBrandValues(brand);
  const footerLegal = footerLegalValues(legal);
  const [quickMenu, connectMenu, legalMenu] = menus ?? [];
  const quickLinks = footerMenuLinks(quickMenu);
  const connectLinks = footerMenuLinks(connectMenu);
  const legalLinks = footerMenuLinks(legalMenu);
  const baseProps = {
    logoAlt: footerBrand.logoAlt,
    logoHref: footerBrand.logoHref,
    logoSrc: footerBrand.logoSrc,
    socials,
    theme,
    unsubscribeHref: footerLegal.unsubscribeHref,
  };
  if (oversizedLogo) {
    return (
      <__FullMenuFooter
        {...baseProps}
        links={menus?.flatMap(({ links }) => links)}
        variant="oversized-logo"
      />
    );
  }
  if (alignment === "center" && columns === 1) {
    return (
      <__CenteredFooter {...baseProps} links={quickLinks} socials={socials} />
    );
  }
  if (description) {
    return (
      <__TextMenuFooter
        {...baseProps}
        copyright={footerLegal.copyright}
        description={description}
        quickLinks={quickLinks}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  if (divider) {
    return (
      <__DividerMenuFooter
        {...baseProps}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  if (columns === 3) {
    return (
      <__ThreeColumnFooter
        {...baseProps}
        connectLinks={connectLinks}
        legalLinks={legalLinks}
        quickLinks={quickLinks}
        variant={logoPosition === "right" ? "right-logo" : "left-logo"}
      />
    );
  }
  return (
    <__TwoColumnFooter
      {...baseProps}
      connectLinks={connectLinks}
      copyright={footerLegal.copyright}
      quickLinks={quickLinks}
      variant={logoPosition === "right" ? "right-logo" : "left-logo"}
    />
  );
};

export const NavigationFooterSection = __NavigationFooterSection;

NavigationFooter.PreviewProps = {
  alignment: "left",
  columns: 2,
  divider: false,
  logoPosition: "left",
  oversizedLogo: false,
} satisfies NavigationFooterProps;
