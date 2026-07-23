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
  <a href={props.logoHref}>
    <img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={55}
    />
  </a>
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
    <table
      align={align}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      className={align === "center" ? undefined : "header-badge-mobile-table"}
      role="presentation"
      style={tableStyle}
    >
      <tbody>
        <tr>
          <td
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
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeaderWithLogoAndBadgeSection = (props: SectionProps) => {
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
              <Badge align="center" props={resolved} />
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
            <td className="header-badge-stack header-badge-before">
              <Badge props={resolved} />
            </td>
            <td
              className="header-badge-stack header-badge-mobile-logo"
              style={{ textAlign: "right", width: "55px" }}
            >
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
            <td className="header-badge-stack" style={{ width: "55px" }}>
              <Logo props={resolved} />
            </td>
            <td className="header-badge-stack header-badge-after">
              <Badge align="right" props={resolved} />
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

export const HeaderWithLogoAndBadge = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndBadgeProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>FREE SHIPPING On orders over $65</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <HeaderWithLogoAndBadgeSection
            {...props}
            alignment={alignment}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndBadge.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndBadgeProps;
