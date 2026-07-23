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

export type HeaderWithLogoAndFinanceStatsAlignment =
  | "left"
  | "center"
  | "right";

export interface HeaderFinanceStat {
  alt: string;
  change: string;
  label: string;
  positive: boolean;
  src: string;
}

export interface HeaderWithLogoAndFinanceStatsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  stats?: HeaderFinanceStat[];
  alignment?: HeaderWithLogoAndFinanceStatsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = [
  "@media only screen and (max-width: 599px) {",
  "  .header-finance-stack { display: block !important; width: 100% !important; }",
  "  .header-finance-after { padding-top: 24px !important; }",
  "  .header-finance-before { padding-bottom: 24px !important; }",
  "  .header-finance-mobile-table { float: none !important; margin-left: 0 !important; }",
  "  .header-finance-mobile-logo { text-align: left !important; }",
  "  .header-finance-item { display: inline-block !important; }",
  "}",
  "@media only screen and (max-width: 430px) {",
  "  .header-finance-item { line-height: 32px !important; }",
  "  .header-finance-centered .header-finance-item { margin-left: 6px !important; margin-right: 6px !important; }",
  "}",
].join("\n");

const defaultStats: HeaderFinanceStat[] = [
  {
    alt: "BTC",
    change: "+23.5%",
    label: "BTC",
    positive: true,
    src: "https://emailcn.vercel.app/api/email-assets/btc-logo.png",
  },
  {
    alt: "ETH",
    change: "-13.2%",
    label: "ETH",
    positive: false,
    src: "https://emailcn.vercel.app/api/email-assets/eth-logo.png",
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  pageBackgroundColor: "#f1f5f9",
  stats: defaultStats,
};

type SectionProps = Omit<HeaderWithLogoAndFinanceStatsProps, "theme">;
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

const FinanceStats = ({
  align,
  centered = false,
  props,
}: {
  align?: "center" | "right";
  centered?: boolean;
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
      className={
        centered ? "header-finance-centered" : "header-finance-mobile-table"
      }
      role="presentation"
      style={tableStyle}
    >
      <tbody>
        <tr>
          <td
            style={{
              fontFamily,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {props.stats.slice(0, 2).map((stat, index) => (
              <span
                className="header-finance-item"
                key={stat.label + stat.change}
                style={{ marginRight: index === 0 ? "12px" : undefined }}
              >
                <img
                  alt={stat.alt}
                  src={stat.src}
                  style={{
                    marginRight: "6px",
                    maxWidth: "100%",
                    verticalAlign: "text-bottom",
                  }}
                  width={20}
                />
                <span style={{ marginRight: "8px" }}>{stat.label}</span>
                <span
                  style={{
                    backgroundColor: stat.positive ? "#dcfce7" : "#fee2e2",
                    border: "1px solid",
                    borderColor: stat.positive ? "#bbf7d0" : "#fecaca",
                    borderRadius: "9999px",
                    boxShadow: "0 1px 2px 0 rgba(0,0,0,0.05)",
                    color: stat.positive ? "#16a34a" : "#dc2626",
                    display: "inline-block",
                    fontFamily,
                    fontSize: "12px",
                    fontWeight: 500,
                    lineHeight: "16px",
                    padding: "2px 8px",
                  }}
                >
                  {stat.change}
                </span>
              </span>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeaderWithLogoAndFinanceStatsSection = (props: SectionProps) => {
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
              <FinanceStats align="center" centered props={resolved} />
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
            <td className="header-finance-stack header-finance-before">
              <FinanceStats props={resolved} />
            </td>
            <td
              className="header-finance-stack header-finance-mobile-logo"
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
            <td className="header-finance-stack" style={{ width: "55px" }}>
              <Logo props={resolved} />
            </td>
            <td className="header-finance-stack header-finance-after">
              <FinanceStats align="right" props={resolved} />
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

export const HeaderWithLogoAndFinanceStats = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithLogoAndFinanceStatsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>BTC +23.5% ETH -13.2%</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <HeaderWithLogoAndFinanceStatsSection
            {...props}
            alignment={alignment}
            pageBackgroundColor={pageBackgroundColor}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HeaderWithLogoAndFinanceStats.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
} satisfies HeaderWithLogoAndFinanceStatsProps;
