/* eslint-disable next/no-img-element */
import { Fragment } from "react";
import { Body, Head, Html, Preview } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeaderWithLogoAndSocialIconsAlignment = "left" | "center" | "right";

export interface HeaderSocialLink {
  alt: string;
  href: string;
  src: string;
}

export interface HeaderWithLogoAndSocialIconsProps {
  theme?: TailwindConfig;
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
    src: "https://assets.mailviews.com/images/components/icon-github.png",
  },
  {
    alt: "LinkedIn",
    href: "https://linkedin.com",
    src: "https://assets.mailviews.com/images/components/icon-linkedin.png",
  },
  {
    alt: "X",
    href: "https://x.com",
    src: "https://assets.mailviews.com/images/components/icon-x.png",
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc:
    "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  pageBackgroundColor: "#f1f5f9",
  socials: defaultSocials,
};

type SectionProps = Omit<HeaderWithLogoAndSocialIconsProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;

const Logo = ({ props }: { props: ResolvedProps }) => (
  <a href={props.logoHref}>
    <img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={55}
    />
  </a>
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
    <table
      align={align}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={tableStyle}
    >
      <tbody>
        <tr>
          {props.socials.slice(0, 3).map((social, index) => (
            <Fragment key={social.alt + social.href}>
              {index > 0 ? <td style={{ width: "24px" }}>&zwj;</td> : null}
              <td>
                <a href={social.href}>
                  <img
                    alt={social.alt}
                    src={social.src}
                    style={{ maxWidth: "100%", verticalAlign: "middle" }}
                    width={20}
                  />
                </a>
              </td>
            </Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export const HeaderWithLogoAndSocialIconsSection = (props: SectionProps) => {
  const alignment = props.alignment ?? "left";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  let content;
  if (alignment === "center") {
    content = (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <div style={{ textAlign: "center" }}>
                <Logo props={resolved} />
              </div>
              <div style={{ lineHeight: "24px" }}>&zwj;</div>
              <Socials align="center" props={resolved} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else if (alignment === "right") {
    content = (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <Socials props={resolved} />
            </td>
            <td style={{ textAlign: "right", width: "55px" }}>
              <Logo props={resolved} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  } else {
    content = (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        width="100%"
      >
        <tbody>
          <tr>
            <td style={{ width: "55px" }}>
              <Logo props={resolved} />
            </td>
            <td>
              <Socials align="right" props={resolved} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

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
          <td style={{ maxWidth: "100%", width: "600px" }}>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: resolved.backgroundColor,
                      padding: "24px",
                    }}
                  >
                    {content}
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
