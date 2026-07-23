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

export type LogosGridTone = "boxed" | "outlined" | "bordered";

export interface LogosGridProps {
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
  tone?: LogosGridTone;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .logos-grid-item {
      display: inline-block !important;
      margin: 0 8px 16px !important;
    }
    .logos-grid-gap { display: none !important; }
    .logos-grid-description-gap { line-height: 20px !important; }
  }
  @media only screen and (max-width: 430px) {
    .logos-grid-bordered-item { display: block !important; width: 100% !important; }
    .logos-grid-divider {
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
    alt: "Google Pay",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-google-pay.png",
    width: 60,
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
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type SectionProps = Omit<LogosGridProps, "theme">;
type ResolvedProps = typeof defaults & SectionProps;
type Logo = (typeof defaultLogos)[number];

const GridItem = ({
  bordered,
  logo,
  props,
  tone,
}: {
  bordered: boolean;
  logo: Logo;
  props: ResolvedProps;
  tone: LogosGridTone;
}) => (
  <td
    className={bordered ? "logos-grid-bordered-item" : "logos-grid-item"}
    style={{
      backgroundColor: tone === "boxed" ? props.boxBackgroundColor : undefined,
      border:
        tone === "outlined" ? `1px solid ${props.borderColor}` : undefined,
      borderRadius: tone === "outlined" ? "4px" : undefined,
      lineHeight: "64px",
      textAlign: "center",
      width: "112px",
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

const Divider = ({ color }: { color: string }) => (
  <td
    className="logos-grid-divider"
    style={{ backgroundColor: color, width: "1px" }}
  >
    &zwj;
  </td>
);

const CardRow = ({
  logos,
  props,
  tone,
}: {
  logos: Logo[];
  props: ResolvedProps;
  tone: LogosGridTone;
}) => (
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
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {index > 0 ? (
              <td className="logos-grid-gap" style={{ width: "16px" }}>
                &zwj;
              </td>
            ) : null}
            <GridItem bordered={false} logo={logo} props={props} tone={tone} />
          </Fragment>
        ))}
      </tr>
    </tbody>
  </table>
);

const BorderedRows = ({
  logos,
  props,
}: {
  logos: Logo[];
  props: ResolvedProps;
}) => (
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
              {index > 0 ? <Divider color={props.borderColor} /> : null}
              <GridItem bordered logo={logo} props={props} tone="bordered" />
            </Fragment>
          ))}
        </tr>
        <tr>
          <td
            className="logos-grid-divider"
            colSpan={5}
            style={{ backgroundColor: props.borderColor, lineHeight: "1px" }}
          >
            &zwj;
          </td>
        </tr>
      </tbody>
    </table>
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
          {logos.slice(3, 6).map((logo, index) => (
            <Fragment key={logo.alt + logo.src}>
              {index > 0 ? <Divider color={props.borderColor} /> : null}
              <GridItem bordered logo={logo} props={props} tone="bordered" />
            </Fragment>
          ))}
        </tr>
      </tbody>
    </table>
  </>
);

export const LogosGridSection = (props: SectionProps) => {
  const tone = props.tone ?? "boxed";
  const resolved = { ...defaults, ...props } as ResolvedProps;
  const logos = resolved.logos.slice(0, 6) as Logo[];
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
                    <h3
                      style={{
                        color: resolved.titleColor,
                        fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.title}
                    </h3>
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    {tone === "bordered" ? (
                      <BorderedRows logos={logos} props={resolved} />
                    ) : (
                      <>
                        <CardRow
                          logos={logos.slice(0, 3)}
                          props={resolved}
                          tone={tone}
                        />
                        <div
                          className="logos-grid-gap"
                          style={{ lineHeight: "16px" }}
                        >
                          &zwj;
                        </div>
                        <CardRow
                          logos={logos.slice(3, 6)}
                          props={resolved}
                          tone={tone}
                        />
                      </>
                    )}
                    <div
                      className="logos-grid-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </div>
                    <p
                      style={{
                        color: resolved.textColor,
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.description}
                    </p>
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

export const LogosGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  ...props
}: LogosGridProps) => (
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
          <LogosGridSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            tone={tone}
          />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosGrid.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
} satisfies LogosGridProps;
