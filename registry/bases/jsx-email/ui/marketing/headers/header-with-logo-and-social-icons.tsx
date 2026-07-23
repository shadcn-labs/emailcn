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

export type HeaderWithLogoAndSocialIconsAlignment = "left" | "center" | "right";

export interface HeaderSocialLink {
  alt: string;
  href: string;
  src: string;
}

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  socials?: HeaderSocialLink[];
  alignment?: HeaderWithLogoAndSocialIconsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const defaultSocials: HeaderSocialLink[] = [
  {
    alt: "GitHub",
    href: "https://github.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-github.png",
  },
  {
    alt: "LinkedIn",
    href: "https://linkedin.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-linkedin.png",
  },
  {
    alt: "X",
    href: "https://x.com",
    src: "https://emailcn.vercel.app/api/email-assets/icon-x.png",
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  pageBackgroundColor: "#f1f5f9",
  socials: defaultSocials,
};

type SectionProps = Omit<HeaderWithLogoAndSocialIconsProps, "theme">;
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

const Socials = ({
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
    <Section align={align} style={tableStyle}>
      <Fragment>
        <Row>
          {props.socials.slice(0, 3).map((social, index) => (
            <Fragment key={social.alt + social.href}>
              {index > 0 ? (
                <Column style={{ width: "24px" }}>&zwj;</Column>
              ) : null}
              <Column>
                <Link href={social.href}>
                  <Img
                    alt={social.alt}
                    src={social.src}
                    style={{ maxWidth: "100%", verticalAlign: "middle" }}
                    width={20}
                  />
                </Link>
              </Column>
            </Fragment>
          ))}
        </Row>
      </Fragment>
    </Section>
  );
};

export const HeaderWithLogoAndSocialIconsSection = (props: SectionProps) => {
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
              <Socials align="center" props={resolved} />
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
            <Column>
              <Socials props={resolved} />
            </Column>
            <Column style={{ textAlign: "right", width: "55px" }}>
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
            <Column style={{ width: "55px" }}>
              <Logo props={resolved} />
            </Column>
            <Column>
              <Socials align="right" props={resolved} />
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

export const HeaderWithLogoAndSocialIcons = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: HeaderWithLogoAndSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Maizzle on GitHub, LinkedIn, and X</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <HeaderWithLogoAndSocialIconsSection
        {...props}
        alignment={alignment}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

HeaderWithLogoAndSocialIcons.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndSocialIconsProps;
