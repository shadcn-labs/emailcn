/* eslint-disable next/no-img-element */
import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlWrapper,
  MjmlStyle,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type HeaderWithLogoAndMenuVariant =
  | "menu-right"
  | "menu-left"
  | "menu-around"
  | "stacked-left"
  | "stacked-center"
  | "stacked-right";

export interface HeaderMenuLink {
  href: string;
  label: string;
}

export interface HeaderWithLogoAndMenuProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  links?: HeaderMenuLink[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  textColor?: string;
  variant?: HeaderWithLogoAndMenuVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .header-menu-stack { display: block !important; width: 100% !important; }",
  "  .header-menu-right-links { padding: 24px 0 0 !important; text-align: left !important; }",
  "  .header-menu-right-link { margin-left: 0 !important; margin-right: 24px !important; }",
  "  .header-menu-left-row { display: table !important; width: 100% !important; }",
  "  .header-menu-left-links { display: table-footer-group !important; text-align: right !important; }",
  "  .header-menu-left-logo { display: table-header-group !important; text-align: right !important; }",
  "  .header-menu-left-links-inner { padding-top: 24px !important; }",
  "  .header-menu-around-row { display: table !important; width: 100% !important; }",
  "  .header-menu-around-desktop { display: none !important; }",
  "  .header-menu-around-logo { display: table-header-group !important; width: 100% !important; }",
  "  .header-menu-around-mobile { display: block !important; padding-top: 24px !important; width: 100% !important; }",
  "}",
].join("\n");

const defaultLinks: HeaderMenuLink[] = [
  { href: "https://example.com", label: "Home" },
  { href: "https://example.com/about", label: "About us" },
  { href: "https://example.com/shop", label: "Shop" },
  { href: "https://example.com/faq", label: "FAQs" },
  { href: "https://example.com/returns", label: "Returns" },
  { href: "https://example.com/contact", label: "Contact us" },
];

const defaults = {
  backgroundColor: "#fffffe",
  links: defaultLinks,
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc:
    "https://assets.mailviews.com/images/components/maizzle-insignia.png",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#6b7280",
};

type SectionProps = Omit<HeaderWithLogoAndMenuProps, "theme">;
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

const MenuLinks = ({
  links,
  margin,
  props,
  responsiveClassName,
}: {
  links: HeaderMenuLink[];
  margin: "left" | "right" | "around";
  props: ResolvedProps;
  responsiveClassName?: string;
}) => (
  <>
    {links.map((link, index) => {
      let marginLeft: string | undefined;
      let marginRight: string | undefined;
      if (margin === "left" && index > 0) {
        marginLeft = "24px";
      }
      if (margin === "right") {
        marginRight = "24px";
      }
      if (margin === "around") {
        marginLeft = "12px";
        marginRight = "12px";
      }
      return (
        <a
          className={responsiveClassName}
          href={link.href}
          key={link.href + link.label}
          style={{
            color: props.textColor,
            display: "inline-block",
            fontFamily,
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: "32px",
            marginLeft,
            marginRight,
            textDecoration: "none",
          }}
        >
          {link.label}
        </a>
      );
    })}
  </>
);

const MenuRight = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td className="header-menu-stack" style={{ width: "55px" }}>
          <Logo props={props} />
        </td>
        <td
          className="header-menu-stack header-menu-right-links"
          style={{
            fontSize: 0,
            paddingLeft: "24px",
            textAlign: "right",
          }}
        >
          <MenuLinks
            links={props.links}
            margin="left"
            props={props}
            responsiveClassName="header-menu-right-link"
          />
        </td>
      </tr>
    </tbody>
  </table>
);

const MenuLeft = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="header-menu-left-row"
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td
          className="header-menu-left-links"
          style={{ paddingRight: "24px", textAlign: "left" }}
        >
          <div className="header-menu-left-links-inner" style={{ fontSize: 0 }}>
            <MenuLinks links={props.links} margin="left" props={props} />
          </div>
        </td>
        <td
          className="header-menu-left-logo"
          style={{ textAlign: "right", width: "55px" }}
        >
          <Logo props={props} />
        </td>
      </tr>
    </tbody>
  </table>
);

const MenuAround = ({ props }: { props: ResolvedProps }) => (
  <table
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className="header-menu-around-row"
    role="presentation"
    width="100%"
  >
    <tbody>
      <tr>
        <td
          className="header-menu-around-desktop"
          style={{ fontSize: 0, textAlign: "left" }}
        >
          <MenuLinks
            links={props.links.slice(0, 3)}
            margin="left"
            props={props}
          />
        </td>
        <td
          className="header-menu-around-logo"
          style={{ textAlign: "center", width: "55px" }}
        >
          <Logo props={props} />
        </td>
        <td
          className="header-menu-around-mobile"
          style={{ display: "none", fontSize: 0, textAlign: "center" }}
        >
          <MenuLinks links={props.links} margin="around" props={props} />
        </td>
        <td
          className="header-menu-around-desktop"
          style={{ fontSize: 0, textAlign: "right" }}
        >
          <MenuLinks
            links={props.links.slice(3, 6)}
            margin="left"
            props={props}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

const StackedMenu = ({
  alignment,
  props,
}: {
  alignment: "left" | "center" | "right";
  props: ResolvedProps;
}) => {
  let margin: "left" | "right" | "around" = "left";
  if (alignment === "left") {
    margin = "right";
  } else if (alignment === "center") {
    margin = "around";
  }

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      width="100%"
    >
      <tbody>
        <tr>
          <td style={{ textAlign: alignment }}>
            <div>
              <Logo props={props} />
            </div>
            <div style={{ lineHeight: "24px" }}>&zwj;</div>
            <div style={{ fontSize: 0 }}>
              <MenuLinks links={props.links} margin={margin} props={props} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeaderWithLogoAndMenuSection = (props: SectionProps) => {
  const variant = props.variant ?? "menu-right";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  let content;
  if (variant === "menu-left") {
    content = <MenuLeft props={resolved} />;
  } else if (variant === "menu-around") {
    content = <MenuAround props={resolved} />;
  } else if (variant.startsWith("stacked-")) {
    content = (
      <StackedMenu
        alignment={
          variant.replace("stacked-", "") as "left" | "center" | "right"
        }
        props={resolved}
      />
    );
  } else {
    content = <MenuRight props={resolved} />;
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

export const HeaderWithLogoAndMenu = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "menu-right",
  ...props
}: HeaderWithLogoAndMenuProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Home About us Shop FAQs Returns Contact us</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <HeaderWithLogoAndMenuSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndMenu.PreviewProps = {
  theme: defaultTheme,
  variant: "menu-right",
} satisfies HeaderWithLogoAndMenuProps;
