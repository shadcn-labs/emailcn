import {
  Body,
  Head,
  Html,
  Preview,
  Link,
  Text,
  Section,
  Row,
  Column,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderWithLogoVariant = "minimal" | "with-text";
export type HeaderWithLogoAlignment = "left" | "center" | "right";

export interface HeaderWithLogoProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  text?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeaderWithLogoVariant;
  alignment?: HeaderWithLogoAlignment;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .header-logo-text-stack { display: block !important; width: 100% !important; }",
  "  .header-logo-text-left-logo { padding-bottom: 24px !important; }",
  "  .header-logo-text-right-row { display: table !important; width: 100% !important; }",
  "  .header-logo-text-right-copy-cell { display: table-footer-group !important; width: 100% !important; }",
  "  .header-logo-text-right-logo { display: table-header-group !important; text-align: right !important; width: 100% !important; }",
  "  .header-logo-text-right-copy { padding-top: 24px !important; text-align: right !important; }",
  "}",
].join("\n");

const defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  pageBackgroundColor: "#f1f5f9",
  text: "Medium, rare, but mostly well-done\nHTML email components.",
  textColor: "#030712",
};

type SectionProps = Omit<HeaderWithLogoProps, "theme">;
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

const Copy = ({
  centered = false,
  props,
}: {
  centered?: boolean;
  props: ResolvedProps;
}) => (
  <Text
    style={{
      color: props.textColor,
      fontFamily,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      margin: 0,
      textAlign: centered ? "center" : undefined,
    }}
  >
    {centered
      ? props.text.split("\n").map((line, index) => (
          <Fragment key={line}>
            {index > 0 ? <br /> : null}
            {line}
          </Fragment>
        ))
      : props.text.replaceAll("\n", " ")}
  </Text>
);

const WithText = ({
  alignment,
  props,
}: {
  alignment: HeaderWithLogoAlignment;
  props: ResolvedProps;
}) => {
  if (alignment === "center") {
    return (
      <Section width="100%">
        <Fragment>
          <Row>
            <Column>
              <Section style={{ textAlign: "center" }}>
                <Logo props={props} />
              </Section>
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              <Copy centered props={props} />
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  if (alignment === "right") {
    return (
      <Section className="header-logo-text-right-row" width="100%">
        <Fragment>
          <Row>
            <Column
              className="header-logo-text-right-copy-cell"
              style={{ width: "50%" }}
            >
              <Section className="header-logo-text-right-copy">
                <Copy props={props} />
              </Section>
            </Column>
            <Column
              className="header-logo-text-right-logo"
              style={{ textAlign: "right", width: "50%" }}
            >
              <Logo props={props} />
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  return (
    <Section width="100%">
      <Fragment>
        <Row>
          <Column
            className="header-logo-text-stack header-logo-text-left-logo"
            style={{ width: "50%" }}
          >
            <Logo props={props} />
          </Column>
          <Column className="header-logo-text-stack" style={{ width: "50%" }}>
            <Copy props={props} />
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeaderWithLogoSection = (props: SectionProps) => {
  const alignment = props.alignment ?? "center";
  const variant = props.variant ?? "minimal";
  const resolved = { ...defaults, ...props } as ResolvedProps;
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
                      textAlign: variant === "minimal" ? alignment : undefined,
                    }}
                  >
                    {variant === "minimal" ? (
                      <Logo props={resolved} />
                    ) : (
                      <WithText alignment={alignment} props={resolved} />
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
};

export const HeaderWithLogo = ({
  alignment = "center",
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "minimal",
  ...props
}: HeaderWithLogoProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Medium, rare, but mostly well-done HTML email components.</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <HeaderWithLogoSection
        {...props}
        alignment={alignment}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

HeaderWithLogo.PreviewProps = {
  alignment: "center",
  theme: defaultTheme,
  variant: "minimal",
} satisfies HeaderWithLogoProps;
