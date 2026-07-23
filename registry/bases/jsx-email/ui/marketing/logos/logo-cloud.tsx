import {
  Body,
  Head,
  Html,
  Preview,
  Column,
  Section,
  Row,
  Heading,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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
    <Column
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
      <Img
        alt={logo.alt}
        src={logo.src}
        style={{ maxWidth: "100%", verticalAlign: "middle" }}
        width={logo.width}
      />
    </Column>
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
  <Section
    align={flush ? undefined : "center"}
    style={flush ? { width: "100%" } : { margin: "0 auto" }}
  >
    <Fragment>
      <Row>
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {index > 0 ? (
              <Column className="logo-cloud-gap" style={{ width: "16px" }}>
                &zwj;
              </Column>
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
      </Row>
    </Fragment>
  </Section>
);

const Title = ({ props }: { props: ResolvedProps }) => (
  <Heading
    style={{
      color: props.titleColor,
      fontFamily,
      fontSize: "20px",
      fontWeight: 600,
      lineHeight: "28px",
      margin: 0,
      textAlign: "center",
    }}
    as="h3"
  >
    {props.title}
  </Heading>
);

const Description = ({ props }: { props: ResolvedProps }) => (
  <Text
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
  </Text>
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
      <Section className="logo-cloud-gap" style={{ lineHeight: "16px" }}>
        &zwj;
      </Section>
      <LogoRow logos={logos.slice(3, 5)} props={resolved} tone={tone} />
    </>
  );

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
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            {flush ? (
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column style={{ padding: "0 24px" }}>
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      {showTitle ? <Title props={resolved} /> : null}
                    </Column>
                  </Row>
                  <Row>
                    <Column>
                      {showTitle ? (
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      ) : (
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      )}
                      {logoRows}
                    </Column>
                  </Row>
                  {showDescription ? (
                    <Row>
                      <Column style={{ padding: "0 24px" }}>
                        <Section
                          className="logo-cloud-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
                        <Description props={resolved} />
                      </Column>
                    </Row>
                  ) : null}
                </Fragment>
              </Section>
            ) : (
              <Section width="100%">
                <Fragment>
                  <Row>
                    <Column style={{ padding: "0 24px", textAlign: "center" }}>
                      <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      {showTitle ? (
                        <>
                          <Title props={resolved} />
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                        </>
                      ) : null}
                      {logoRows}
                      {showDescription ? (
                        <>
                          <Section
                            className="logo-cloud-description-gap"
                            style={{ lineHeight: "36px" }}
                          >
                            &zwj;
                          </Section>
                          <Description props={resolved} />
                        </>
                      ) : null}
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            )}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

export const LogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  tone = "boxed",
  variant = "full",
  ...props
}: LogoCloudProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>Supported payment services</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <LogoCloudSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        tone={tone}
        variant={variant}
      />
    </Body>
  </Html>
);

LogoCloud.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
  variant: "full",
} satisfies LogoCloudProps;
