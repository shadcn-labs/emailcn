import {
  Body,
  Head,
  Html,
  Preview,
  Link,
  Section,
  Row,
  Column,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderWithLogoAndBadgeAlignment = "left" | "center" | "right";

export interface HeaderWithLogoAndBadgeProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  badgeLabel?: string;
  message?: string;
  alignment?: HeaderWithLogoAndBadgeAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  badgeBackgroundColor?: string;
  badgeBorderColor?: string;
  badgeColor?: string;
  badgeTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .header-badge-stack { display: block !important; width: 100% !important; }",
  "  .header-badge-after { padding-top: 24px !important; }",
  "  .header-badge-before { padding-bottom: 24px !important; }",
  "  .header-badge-mobile-table { float: none !important; margin-left: 0 !important; }",
  "  .header-badge-mobile-logo { text-align: left !important; }",
  "}",
].join("\n");

const defaults = {
  backgroundColor: "#fffffe",
  badgeBackgroundColor: "#eff6ff",
  badgeBorderColor: "#dbeafe",
  badgeColor: "#2563eb",
  badgeLabel: "FREE SHIPPING",
  badgeTextColor: "#4b5563",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  message: "On orders over $65",
  pageBackgroundColor: "#f1f5f9",
};

type SectionProps = Omit<HeaderWithLogoAndBadgeProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const Logo = ({ props }: { props: ResolvedProps }) => (
  <Link href={props.logoHref}>
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={55}
    />
  </Link>
);

const Badge = ({
  align,
  props,
}: {
  align?: "center" | "right";
  props: ResolvedProps;
}) => {
  let tableStyle: { marginLeft: string; marginRight?: string } | undefined;
  if (align === "center") {
    tableStyle = { marginLeft: "auto", marginRight: "auto" };
  } else if (align === "right") {
    tableStyle = { marginLeft: "auto" };
  }

  return (
    <Section
      align={align}
      className={align === "center" ? undefined : "header-badge-mobile-table"}
      style={tableStyle}
    >
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: props.badgeBackgroundColor,
              borderRadius: "9999px",
              color: props.badgeColor,
              fontFamily,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "18px",
              padding: "4px",
              paddingRight: "8px",
            }}
          >
            <span
              style={{
                backgroundColor: props.backgroundColor,
                border: `1px solid ${props.badgeBorderColor}`,
                borderRadius: "9999px",
                boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                color: props.badgeTextColor,
                display: "inline-block",
                fontFamily,
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "16px",
                padding: "2px 8px",
              }}
            >
              {props.badgeLabel}
            </span>{" "}
            <span>{props.message}</span>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeaderWithLogoAndBadgeSection = (props: SectionProps) => {
  const alignment = props.alignment ?? "left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  let content;
  if (alignment === "center") {
    content = (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column>
              <Section style={{ textAlign: "center" }}>
                <Logo props={resolved} />
              </Section>
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              <Badge align="center" props={resolved} />
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  } else if (alignment === "right") {
    content = (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column className="header-badge-stack header-badge-before">
              <Badge props={resolved} />
            </Column>
            <Column
              className="header-badge-stack header-badge-mobile-logo"
              style={{ textAlign: "right", width: "55px" }}
            >
              <Logo props={resolved} />
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  } else {
    content = (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column className="header-badge-stack" style={{ width: "55px" }}>
              <Logo props={resolved} />
            </Column>
            <Column className="header-badge-stack header-badge-after">
              <Badge align="right" props={resolved} />
            </Column>
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
          <Column style={{ maxWidth: "100%", width: "600px" }}>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{
                      backgroundColor: resolved.backgroundColor,
                      padding: "24px",
                    }}
                  >
                    {content}
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

export const HeaderWithLogoAndBadge = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: HeaderWithLogoAndBadgeProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>FREE SHIPPING On orders over $65</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <HeaderWithLogoAndBadgeSection
        {...props}
        alignment={alignment}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

HeaderWithLogoAndBadge.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndBadgeProps;
