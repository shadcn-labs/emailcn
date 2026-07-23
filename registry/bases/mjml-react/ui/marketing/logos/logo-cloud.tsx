import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
/* eslint-disable next/no-img-element */
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type LogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";
export type LogoCloudTone = "boxed" | "outlined";

export interface LogoCloudProps {
  theme?: EmailThemeTokens;
  title?: string;
  description?: string;
  logos?: { alt: string; src: string; width: number }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: LogoCloudVariant;
  tone?: LogoCloudTone;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .logo-cloud-item {
      display: inline-block !important;
      margin: 0 8px 16px !important;
    }
    .logo-cloud-gap { display: none !important; }
    .logo-cloud-description-gap { line-height: 20px !important; }
    .logo-cloud-flush-item {
      border: 1px solid #d1d5db !important;
      border-radius: 4px !important;
    }
  }
`;

const defaultLogos = [
  {
    alt: "Stripe",
    src: "https://assets.mailviews.com/images/components/logos/logo-stripe.png",
    width: 57,
  },
  {
    alt: "Apple Pay",
    src: "https://assets.mailviews.com/images/components/logos/logo-apple-pay.png",
    width: 60,
  },
  {
    alt: "Mastercard",
    src: "https://assets.mailviews.com/images/components/logos/logo-mastercard.png",
    width: 40,
  },
  {
    alt: "Visa",
    src: "https://assets.mailviews.com/images/components/logos/logo-visa.png",
    width: 50,
  },
  {
    alt: "Klarna",
    src: "https://assets.mailviews.com/images/components/logos/logo-klarna.png",
    width: 70,
  },
];

const defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type SectionProps = Omit<LogoCloudProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;
type Logo = (typeof defaultLogos)[number];

const LogoItem = ({
  flush,
  index,
  logo,
  props,
  tone,
}: {
  flush: boolean;
  index: number;
  logo: Logo;
  props: ResolvedProps;
  tone: LogoCloudTone;
}) => {
  const edgeWidth = index === 0 || index === 4 ? "100px" : "112px";
  const outlinedFlush = tone === "outlined" && flush;
  return (
    <td
      className={
        outlinedFlush
          ? "logo-cloud-item logo-cloud-flush-item"
          : "logo-cloud-item"
      }
      style={{
        backgroundColor:
          tone === "boxed" ? props.boxBackgroundColor : undefined,
        border:
          tone === "outlined" ? `1px solid ${props.borderColor}` : undefined,
        borderLeftWidth: outlinedFlush && index === 0 ? 0 : undefined,
        borderRadius: tone === "outlined" ? "4px" : undefined,
        borderRightWidth: outlinedFlush && index === 4 ? 0 : undefined,
        lineHeight: "64px",
        textAlign: "center",
        width: flush ? edgeWidth : "112px",
      }}
    >
      <img
        alt={logo.alt}
        src={logo.src}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={logo.width}
      />
    </td>
  );
};

const LogoRow = ({
  flush = false,
  logos,
  props,
  tone,
}: {
  flush?: boolean;
  logos: Logo[];
  props: ResolvedProps;
  tone: LogoCloudTone;
}) => (
  <table
    align={flush ? undefined : "center"}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={flush ? { width: "100%" } : { margin: "0 auto" }}
  >
    <tbody>
      <tr>
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {index > 0 ? (
              <td className="logo-cloud-gap" style={{ width: "16px" }}>
                &zwj;
              </td>
            ) : null}
            <LogoItem
              flush={flush}
              index={index}
              logo={logo}
              props={props}
              tone={tone}
            />
          </Fragment>
        ))}
      </tr>
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

export const LogoCloudSection = (props: SectionProps) => {
  const variant = props.variant ?? "full";
  const tone = props.tone ?? "boxed";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const logos = resolved.logos.slice(0, 5) as Logo[];
  const flush = variant === "flush";
  const showTitle =
    variant === "with-title" || variant === "full" || variant === "flush";
  const showDescription =
    variant === "with-description" || variant === "full" || variant === "flush";

  const logoRows = flush ? (
    <LogoRow flush logos={logos} props={resolved} tone={tone} />
  ) : (
    <>
      <LogoRow logos={logos.slice(0, 3)} props={resolved} tone={tone} />
      <div className="logo-cloud-gap" style={{ lineHeight: "16px" }}>
        &zwj;
      </div>
      <LogoRow logos={logos.slice(3, 5)} props={resolved} tone={tone} />
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
                      {showTitle ? (
                        <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      ) : (
                        <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      )}
                      {logoRows}
                    </td>
                  </tr>
                  {showDescription ? (
                    <tr>
                      <td style={{ padding: "0 24px" }}>
                        <div
                          className="logo-cloud-description-gap"
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
                      {logoRows}
                      {showDescription ? (
                        <>
                          <div
                            className="logo-cloud-description-gap"
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

export const LogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  variant = "full",
  ...props
}: LogoCloudProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Supported payment services</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <LogoCloudSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            tone={tone}
            variant={variant}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogoCloud.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
  variant: "full",
} satisfies LogoCloudProps;
