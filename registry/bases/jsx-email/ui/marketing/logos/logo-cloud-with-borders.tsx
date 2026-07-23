import { Body, Head, Html, Preview } from "jsx-email";
/* eslint-disable next/no-img-element */
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type LogoCloudWithBordersVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";

export interface LogoCloudWithBordersProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: LogoCloudWithBordersVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .border-logo-flush-table { margin: 0 auto !important; }
    .border-logo-flush-item { display: block !important; width: 100% !important; }
    .border-logo-flush-divider {
      display: block !important;
      line-height: 1px !important;
      width: 100% !important;
    }
    .border-logo-flush-bottom { display: none !important; }
    .border-logo-description-gap { line-height: 20px !important; }
  }
  @media only screen and (max-width: 430px) {
    .border-logo-item { display: block !important; width: 100% !important; }
    .border-logo-divider {
      display: block !important;
      line-height: 1px !important;
      width: 100% !important;
    }
  }
`;

const defaultLogos = [
  {
    alt: "Stripe",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-stripe.png",
    width: 57,
  },
  {
    alt: "Apple Pay",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-apple-pay.png",
    width: 60,
  },
  {
    alt: "Mastercard",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mastercard.png",
    width: 40,
  },
  {
    alt: "Visa",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-visa.png",
    width: 50,
  },
  {
    alt: "Klarna",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-klarna.png",
    width: 70,
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type SectionProps = Omit<LogoCloudWithBordersProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;
type Logo = (typeof defaultLogos)[number];

const LogoItem = ({
  className,
  logo,
  width,
}: {
  className: string;
  logo: Logo;
  width: string;
}) => (
  <td
    className={className}
    style={{ lineHeight: "64px", textAlign: "center", width }}
  >
    <img
      alt={logo.alt}
      src={logo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={logo.width}
    />
  </td>
);

const Divider = ({
  className,
  color,
}: {
  className: string;
  color: string;
}) => (
  <td className={className} style={{ backgroundColor: color, width: "1px" }}>
    &zwj;
  </td>
);

const LogoRow = ({
  flush = false,
  logos,
  props,
}: {
  flush?: boolean;
  logos: Logo[];
  props: ResolvedProps;
}) => (
  <table
    align={flush ? undefined : "center"}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    className={flush ? "border-logo-flush-table" : undefined}
    role="presentation"
    style={flush ? { width: "100%" } : { margin: "0 auto" }}
  >
    <tbody>
      <tr>
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {index > 0 ? (
              <Divider
                className={
                  flush ? "border-logo-flush-divider" : "border-logo-divider"
                }
                color={props.borderColor}
              />
            ) : null}
            <LogoItem
              className={flush ? "border-logo-flush-item" : "border-logo-item"}
              logo={logo}
              width={
                flush && (index === 0 || index === logos.length - 1)
                  ? "132px"
                  : "112px"
              }
            />
          </Fragment>
        ))}
      </tr>
      {flush ? (
        <tr>
          <td
            className="border-logo-flush-bottom"
            colSpan={9}
            style={{
              backgroundColor: props.borderColor,
              lineHeight: "1px",
            }}
          >
            &zwj;
          </td>
        </tr>
      ) : null}
    </tbody>
  </table>
);

const Title = ({ props }: { props: ResolvedProps }) => (
  <h3
    style={{
      color: props.titleColor,
      fontFamily,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      margin: 0,
      textAlign: "center",
    }}
  >
    {props.title}
  </h3>
);

const Description = ({ props }: { props: ResolvedProps }) => (
  <p
    style={{
      color: props.textColor,
      fontFamily,
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
      margin: 0,
      textAlign: "center",
    }}
  >
    {props.description}
  </p>
);

export const LogoCloudWithBordersSection = (props: SectionProps) => {
  const variant = props.variant ?? "full";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const logos = resolved.logos.slice(0, 5) as Logo[];
  const flush = variant === "flush";
  const showTitle = variant === "with-title" || variant === "full" || flush;
  const showDescription =
    variant === "with-description" || variant === "full" || flush;

  const rows = flush ? (
    <LogoRow flush logos={logos} props={resolved} />
  ) : (
    <>
      <table
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ margin: "0 auto" }}
      >
        <tbody>
          <tr>
            {logos.slice(0, 3).map((logo, index) => (
              <Fragment key={logo.alt + logo.src}>
                {index > 0 ? (
                  <Divider
                    className="border-logo-divider"
                    color={resolved.borderColor}
                  />
                ) : null}
                <LogoItem
                  className="border-logo-item"
                  logo={logo}
                  width="112px"
                />
              </Fragment>
            ))}
          </tr>
          <tr>
            <td
              className="border-logo-divider"
              colSpan={5}
              style={{
                backgroundColor: resolved.borderColor,
                lineHeight: "1px",
              }}
            >
              &zwj;
            </td>
          </tr>
        </tbody>
      </table>
      <LogoRow logos={logos.slice(3, 5)} props={resolved} />
    </>
  );

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
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            {flush ? (
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0 24px" }}>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      {showTitle ? <Title props={resolved} /> : null}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      {rows}
                    </td>
                  </tr>
                  {showDescription ? (
                    <tr>
                      <td style={{ padding: "0 24px" }}>
                        <div
                          className="border-logo-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </div>
                        <Description props={resolved} />
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            ) : (
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                width="100%"
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0 24px", textAlign: "center" }}>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      {showTitle ? (
                        <>
                          <Title props={resolved} />
                          <div style={{ lineHeight: "44px" }}>&zwj;</div>
                        </>
                      ) : null}
                      {rows}
                      {showDescription ? (
                        <>
                          <div
                            className="border-logo-description-gap"
                            style={{ lineHeight: "36px" }}
                          >
                            &zwj;
                          </div>
                          <Description props={resolved} />
                        </>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </table>
            )}
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const LogoCloudWithBorders = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  variant = "full",
  ...props
}: LogoCloudWithBordersProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Supported payment services</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <LogoCloudWithBordersSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </Body>
  </Html>
);

LogoCloudWithBorders.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies LogoCloudWithBordersProps;
