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

export type SimpleFooterWithSocialIconsVariant =
  | "left-aligned"
  | "centered"
  | "right-aligned";

export interface SimpleFooterSocial {
  href: string;
  iconSrc: string;
  label: string;
}

export interface SimpleFooterWithSocialIconsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: SimpleFooterSocial[];
  unsubscribeHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  mutedTextColor?: string;
  variant?: SimpleFooterWithSocialIconsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaults = {
  backgroundColor: "#fffffe",
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
  unsubscribeHref: "https://example.com/unsub",
};

type SectionProps = Omit<SimpleFooterWithSocialIconsProps, "theme">;
type ResolvedProps = typeof defaults &
  SectionProps & { variant: SimpleFooterWithSocialIconsVariant };

export const SimpleFooterWithSocialIconsSection = (props: SectionProps) => {
  const resolved = {
    ...defaults,
    ...props,
    variant: props.variant ?? "left-aligned",
  } as ResolvedProps;
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
                          style={{ maxWidth: "100%", verticalAlign: "middle" }}
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
                          fontFamily,
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
                          fontFamily,
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

export const SimpleFooterWithSocialIcons = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "left-aligned",
  ...props
}: SimpleFooterWithSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Simple footer with social icons</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <SimpleFooterWithSocialIconsSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

SimpleFooterWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies SimpleFooterWithSocialIconsProps;
