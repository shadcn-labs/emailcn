import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Heading,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/definitions/default";

type BasicLogoCloud_BasicLogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full";

interface BasicLogoCloud_BasicLogoCloudProps {
  theme?: EmailTheme;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: BasicLogoCloud_BasicLogoCloudVariant;
}

const BasicLogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BasicLogoCloud_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .basic-logo-item {
        display: inline-block !important;
        padding: 0 12px 12px !important;
      }
      .basic-logo-gap {
        display: none !important;
        width: 24px !important;
      }
      .basic-logo-description-gap { line-height: 20px !important; }
    }
  `;

const BasicLogoCloud_defaultLogos = [
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

const BasicLogoCloud_defaults = {
  backgroundColor: "#fffffe",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: BasicLogoCloud_defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type BasicLogoCloud_SectionProps = Omit<
  BasicLogoCloud_BasicLogoCloudProps,
  "theme"
>;

type BasicLogoCloud_ResolvedProps = typeof BasicLogoCloud_defaults &
  BasicLogoCloud_SectionProps;

const BasicLogoCloud_BasicLogoCloudSection = (
  props: BasicLogoCloud_SectionProps
) => {
  const variant = props.variant ?? "full";
  const resolved = {
    ...BasicLogoCloud_defaults,
    ...props,
  } as BasicLogoCloud_ResolvedProps;
  const logos = resolved.logos.slice(0, 5);
  const showTitle = variant === "with-title" || variant === "full";
  const showDescription = variant === "with-description" || variant === "full";
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
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {showTitle ? (
                      <>
                        <Heading
                          style={{
                            color: resolved.titleColor,
                            fontFamily: BasicLogoCloud_fontFamily,
                            fontSize: "20px",
                            fontWeight: 600,
                            lineHeight: "28px",
                            margin: 0,
                            textAlign: "center",
                          }}
                          as="h3"
                        >
                          {resolved.title}
                        </Heading>
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                      </>
                    ) : null}
                    <Section align="center" style={{ margin: "0 auto" }}>
                      <Fragment>
                        <Row>
                          {logos.map((logo, index) => (
                            <Fragment key={logo.alt + logo.src}>
                              {index > 0 ? (
                                <Column
                                  className="basic-logo-gap"
                                  style={{ width: "36px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              <Column
                                className="basic-logo-item"
                                style={{ textAlign: "center" }}
                              >
                                <Img
                                  alt={logo.alt}
                                  src={logo.src}
                                  style={{
                                    maxWidth: "100%",
                                    verticalAlign: "middle",
                                  }}
                                  width={logo.width}
                                />
                              </Column>
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    {showDescription ? (
                      <>
                        <Section
                          className="basic-logo-description-gap"
                          style={{ lineHeight: "36px" }}
                        >
                          &zwj;
                        </Section>
                        <Text
                          style={{
                            color: resolved.textColor,
                            fontFamily: BasicLogoCloud_fontFamily,
                            fontSize: "16px",
                            fontWeight: 300,
                            lineHeight: "24px",
                            margin: 0,
                            textAlign: "center",
                          }}
                        >
                          {resolved.description}
                        </Text>
                      </>
                    ) : null}
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

const BasicLogoCloud_BasicLogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full",
  ...props
}: BasicLogoCloud_BasicLogoCloudProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: BasicLogoCloud_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Supported payment services</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: BasicLogoCloud_fontFamily,
        }}
        className="m-0"
      >
        <BasicLogoCloud_BasicLogoCloudSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

BasicLogoCloud_BasicLogoCloud.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies BasicLogoCloud_BasicLogoCloudProps;

const __BasicLogoCloud = BasicLogoCloud_BasicLogoCloud;

type FeaturedLogoGrid_FeaturedBrandsLogoGridTone = "outlined" | "boxed";

type FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment =
  | "left"
  | "center"
  | "right";

interface FeaturedLogoGrid_FeaturedBrandsLogoGridProps {
  theme?: EmailTheme;
  title?: string;
  description?: string;
  featuredLogo?: {
    alt: string;
    src: string;
    width: number;
  };
  supportingLogos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: FeaturedLogoGrid_FeaturedBrandsLogoGridTone;
  alignment?: FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment;
}

const FeaturedLogoGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FeaturedLogoGrid_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .featured-logo-stack { display: block !important; width: 100% !important; }
      .featured-logo-small-column { display: flex !important; width: 100% !important; }
      .featured-logo-small-card { width: 50% !important; }
      .featured-logo-small-gap { width: 16px !important; }
      .featured-logo-large { line-height: 128px !important; }
      .featured-logo-description-gap { line-height: 20px !important; }
    }
  `;

const FeaturedLogoGrid_defaults = {
  alignment: "left" as FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment,
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  featuredLogo: {
    alt: "Monarch",
    src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-1.png",
    width: 167,
  },
  pageBackgroundColor: "#f1f5f9",
  supportingLogos: [
    {
      alt: "Accentic",
      src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-2.png",
      width: 71,
    },
    {
      alt: "Amada",
      src: "https://emailcn.vercel.app/api/email-assets/logos/logo-mock-3.png",
      width: 78,
    },
  ],
  textColor: "#4b5563",
  title: "Brands we support",
  titleColor: "#030712",
  tone: "outlined" as FeaturedLogoGrid_FeaturedBrandsLogoGridTone,
};

type FeaturedLogoGrid_SectionProps = Omit<
  FeaturedLogoGrid_FeaturedBrandsLogoGridProps,
  "theme"
>;

type FeaturedLogoGrid_ResolvedProps = typeof FeaturedLogoGrid_defaults &
  FeaturedLogoGrid_SectionProps;

type FeaturedLogoGrid_ColumnKind = "large" | "first" | "second";

const FeaturedLogoGrid_getCardStyle = (
  props: FeaturedLogoGrid_ResolvedProps,
  tone: FeaturedLogoGrid_FeaturedBrandsLogoGridTone
) => ({
  backgroundColor: tone === "boxed" ? props.boxBackgroundColor : undefined,
  border: tone === "outlined" ? `1px solid ${props.borderColor}` : undefined,
  borderRadius: "4px",
  textAlign: "center" as const,
});

const FeaturedLogoGrid_LargeCard = ({
  props,
  tone,
}: {
  props: FeaturedLogoGrid_ResolvedProps;
  tone: FeaturedLogoGrid_FeaturedBrandsLogoGridTone;
}) => (
  <Column
    className="featured-logo-stack featured-logo-large"
    style={{
      ...FeaturedLogoGrid_getCardStyle(props, tone),
      lineHeight: "64px",
      verticalAlign: "middle",
      width: "240px",
    }}
  >
    <Img
      alt={props.featuredLogo.alt}
      src={props.featuredLogo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={props.featuredLogo.width}
    />
  </Column>
);

const FeaturedLogoGrid_SmallCard = ({
  logo,
  props,
  tone,
}: {
  logo: (typeof FeaturedLogoGrid_defaults.supportingLogos)[number];
  props: FeaturedLogoGrid_ResolvedProps;
  tone: FeaturedLogoGrid_FeaturedBrandsLogoGridTone;
}) => (
  <Section
    className="featured-logo-small-card"
    style={{
      ...FeaturedLogoGrid_getCardStyle(props, tone),
      lineHeight: "64px",
    }}
  >
    <Img
      alt={logo.alt}
      src={logo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={logo.width}
    />
  </Section>
);

const FeaturedLogoGrid_SmallColumn = ({
  reversed,
  props,
  tone,
}: {
  reversed: boolean;
  props: FeaturedLogoGrid_ResolvedProps;
  tone: FeaturedLogoGrid_FeaturedBrandsLogoGridTone;
}) => {
  const first = reversed ? props.supportingLogos[1] : props.supportingLogos[0];
  const second = reversed ? props.supportingLogos[0] : props.supportingLogos[1];
  return (
    <Column className="featured-logo-small-column" style={{ width: "112px" }}>
      <FeaturedLogoGrid_SmallCard logo={first} props={props} tone={tone} />
      <Section
        className="featured-logo-small-gap"
        style={{ lineHeight: "16px" }}
      >
        &zwj;
      </Section>
      <FeaturedLogoGrid_SmallCard logo={second} props={props} tone={tone} />
    </Column>
  );
};

const FeaturedLogoGrid_columnOrders: Record<
  FeaturedLogoGrid_FeaturedBrandsLogoGridAlignment,
  FeaturedLogoGrid_ColumnKind[]
> = {
  center: ["first", "large", "second"],
  left: ["large", "first", "second"],
  right: ["first", "second", "large"],
};

const FeaturedLogoGrid_FeaturedBrandsLogoGridSection = (
  props: FeaturedLogoGrid_SectionProps
) => {
  const resolved = {
    ...FeaturedLogoGrid_defaults,
    ...props,
  } as FeaturedLogoGrid_ResolvedProps;
  const { tone } = resolved;
  const order = FeaturedLogoGrid_columnOrders[resolved.alignment];
  const renderColumn = (kind: FeaturedLogoGrid_ColumnKind) => {
    if (kind === "large") {
      return <FeaturedLogoGrid_LargeCard props={resolved} tone={tone} />;
    }
    return (
      <FeaturedLogoGrid_SmallColumn
        props={resolved}
        reversed={kind === "second"}
        tone={tone}
      />
    );
  };
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
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Heading
                      style={{
                        color: resolved.titleColor,
                        fontFamily: FeaturedLogoGrid_fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                      as="h3"
                    >
                      {resolved.title}
                    </Heading>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {order.map((kind, index) => (
                            <Fragment key={kind}>
                              {index > 0 ? (
                                <Column
                                  className="featured-logo-stack"
                                  style={{ width: "16px" }}
                                >
                                  &zwj;
                                </Column>
                              ) : null}
                              {renderColumn(kind)}
                            </Fragment>
                          ))}
                        </Row>
                      </Fragment>
                    </Section>
                    <Section
                      className="featured-logo-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </Section>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily: FeaturedLogoGrid_fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.description}
                    </Text>
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

const FeaturedLogoGrid_FeaturedBrandsLogoGrid = ({
  alignment = "left",
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "outlined",
  ...props
}: FeaturedLogoGrid_FeaturedBrandsLogoGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: FeaturedLogoGrid_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Brands we support</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: FeaturedLogoGrid_fontFamily,
        }}
        className="m-0"
      >
        <FeaturedLogoGrid_FeaturedBrandsLogoGridSection
          {...props}
          alignment={alignment}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

FeaturedLogoGrid_FeaturedBrandsLogoGrid.PreviewProps = {
  alignment: "left",
  theme: defaultTheme,
  tone: "outlined",
} satisfies FeaturedLogoGrid_FeaturedBrandsLogoGridProps;

const __FeaturedLogoGrid = FeaturedLogoGrid_FeaturedBrandsLogoGrid;

type BorderedLogoCloud_LogoCloudWithBordersVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";

interface BorderedLogoCloud_LogoCloudWithBordersProps {
  theme?: EmailTheme;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: BorderedLogoCloud_LogoCloudWithBordersVariant;
}

const BorderedLogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const BorderedLogoCloud_responsiveStyles = `
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

const BorderedLogoCloud_defaultLogos = [
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

const BorderedLogoCloud_defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: BorderedLogoCloud_defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type BorderedLogoCloud_SectionProps = Omit<
  BorderedLogoCloud_LogoCloudWithBordersProps,
  "theme"
>;

type BorderedLogoCloud_ResolvedProps = typeof BorderedLogoCloud_defaults &
  BorderedLogoCloud_SectionProps;

type BorderedLogoCloud_Logo = (typeof BorderedLogoCloud_defaultLogos)[number];

const BorderedLogoCloud_LogoItem = ({
  className,
  logo,
  width,
}: {
  className: string;
  logo: BorderedLogoCloud_Logo;
  width: string;
}) => (
  <Column
    className={className}
    style={{ lineHeight: "64px", textAlign: "center", width }}
  >
    <Img
      alt={logo.alt}
      src={logo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={logo.width}
    />
  </Column>
);

const BorderedLogoCloud_Divider = ({
  className,
  color,
}: {
  className: string;
  color: string;
}) => (
  <Column
    className={className}
    style={{ backgroundColor: color, width: "1px" }}
  >
    &zwj;
  </Column>
);

const BorderedLogoCloud_LogoRow = ({
  flush = false,
  logos,
  props,
}: {
  flush?: boolean;
  logos: BorderedLogoCloud_Logo[];
  props: BorderedLogoCloud_ResolvedProps;
}) => (
  <Section
    align={flush ? undefined : "center"}
    className={flush ? "border-logo-flush-table" : undefined}
    style={flush ? { width: "100%" } : { margin: "0 auto" }}
  >
    <Fragment>
      <Row>
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {(() => {
              if (index > 0) {
                return (
                  <BorderedLogoCloud_Divider
                    className={
                      flush
                        ? "border-logo-flush-divider"
                        : "border-logo-divider"
                    }
                    color={props.borderColor}
                  />
                );
              }
              return null;
            })()}
            <BorderedLogoCloud_LogoItem
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
      </Row>
      {flush ? (
        <Row>
          <Column
            className="border-logo-flush-bottom"
            colSpan={9}
            style={{
              backgroundColor: props.borderColor,
              lineHeight: "1px",
            }}
          >
            &zwj;
          </Column>
        </Row>
      ) : null}
    </Fragment>
  </Section>
);

const BorderedLogoCloud_Title = ({
  props,
}: {
  props: BorderedLogoCloud_ResolvedProps;
}) => (
  <Heading
    style={{
      color: props.titleColor,
      fontFamily: BorderedLogoCloud_fontFamily,
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

const BorderedLogoCloud_Description = ({
  props,
}: {
  props: BorderedLogoCloud_ResolvedProps;
}) => (
  <Text
    style={{
      color: props.textColor,
      fontFamily: BorderedLogoCloud_fontFamily,
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

const BorderedLogoCloud_LogoCloudWithBordersSection = (
  props: BorderedLogoCloud_SectionProps
) => {
  const variant = props.variant ?? "full";
  const resolved = {
    ...BorderedLogoCloud_defaults,
    ...props,
  } as BorderedLogoCloud_ResolvedProps;
  const logos = resolved.logos.slice(0, 5) as BorderedLogoCloud_Logo[];
  const flush = variant === "flush";
  const showTitle = variant === "with-title" || variant === "full" || flush;
  const showDescription =
    variant === "with-description" || variant === "full" || flush;
  const rows = (() => {
    if (flush) {
      return <BorderedLogoCloud_LogoRow flush logos={logos} props={resolved} />;
    }
    return (
      <>
        <Section align="center" style={{ margin: "0 auto" }}>
          <Fragment>
            <Row>
              {logos.slice(0, 3).map((logo, index) => (
                <Fragment key={logo.alt + logo.src}>
                  {index > 0 ? (
                    <BorderedLogoCloud_Divider
                      className="border-logo-divider"
                      color={resolved.borderColor}
                    />
                  ) : null}
                  <BorderedLogoCloud_LogoItem
                    className="border-logo-item"
                    logo={logo}
                    width="112px"
                  />
                </Fragment>
              ))}
            </Row>
            <Row>
              <Column
                className="border-logo-divider"
                colSpan={5}
                style={{
                  backgroundColor: resolved.borderColor,
                  lineHeight: "1px",
                }}
              >
                &zwj;
              </Column>
            </Row>
          </Fragment>
        </Section>
        <BorderedLogoCloud_LogoRow logos={logos.slice(3, 5)} props={resolved} />
      </>
    );
  })();
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
            {(() => {
              if (flush) {
                return (
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        <Column style={{ padding: "0 24px" }}>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                          {showTitle ? (
                            <BorderedLogoCloud_Title props={resolved} />
                          ) : null}
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                          {rows}
                        </Column>
                      </Row>
                      {showDescription ? (
                        <Row>
                          <Column style={{ padding: "0 24px" }}>
                            <Section
                              className="border-logo-description-gap"
                              style={{ lineHeight: "36px" }}
                            >
                              &zwj;
                            </Section>
                            <BorderedLogoCloud_Description props={resolved} />
                          </Column>
                        </Row>
                      ) : null}
                    </Fragment>
                  </Section>
                );
              }
              return (
                <Section width="100%">
                  <Fragment>
                    <Row>
                      <Column
                        style={{ padding: "0 24px", textAlign: "center" }}
                      >
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                        {showTitle ? (
                          <>
                            <BorderedLogoCloud_Title props={resolved} />
                            <Section style={{ lineHeight: "44px" }}>
                              &zwj;
                            </Section>
                          </>
                        ) : null}
                        {rows}
                        {showDescription ? (
                          <>
                            <Section
                              className="border-logo-description-gap"
                              style={{ lineHeight: "36px" }}
                            >
                              &zwj;
                            </Section>
                            <BorderedLogoCloud_Description props={resolved} />
                          </>
                        ) : null}
                      </Column>
                    </Row>
                  </Fragment>
                </Section>
              );
            })()}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const BorderedLogoCloud_LogoCloudWithBorders = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "full",
  ...props
}: BorderedLogoCloud_LogoCloudWithBordersProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{ __html: BorderedLogoCloud_responsiveStyles }}
      />
    </EmailHead>
    <Preview>Supported payment services</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: BorderedLogoCloud_fontFamily,
        }}
        className="m-0"
      >
        <BorderedLogoCloud_LogoCloudWithBordersSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

BorderedLogoCloud_LogoCloudWithBorders.PreviewProps = {
  theme: defaultTheme,
  variant: "full",
} satisfies BorderedLogoCloud_LogoCloudWithBordersProps;

const __BorderedLogoCloud = BorderedLogoCloud_LogoCloudWithBorders;

type LogoCloud_LogoCloudVariant =
  | "minimal"
  | "with-title"
  | "with-description"
  | "full"
  | "flush";

type LogoCloud_LogoCloudTone = "boxed" | "outlined";

interface LogoCloud_LogoCloudProps {
  theme?: EmailTheme;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  variant?: LogoCloud_LogoCloudVariant;
  tone?: LogoCloud_LogoCloudTone;
}

const LogoCloud_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LogoCloud_responsiveStyles = `
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

const LogoCloud_defaultLogos = [
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

const LogoCloud_defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: LogoCloud_defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type LogoCloud_SectionProps = Omit<LogoCloud_LogoCloudProps, "theme">;

type LogoCloud_ResolvedProps = typeof LogoCloud_defaults &
  LogoCloud_SectionProps;

type LogoCloud_Logo = (typeof LogoCloud_defaultLogos)[number];

const LogoCloud_LogoItem = ({
  flush,
  index,
  logo,
  props,
  tone,
}: {
  flush: boolean;
  index: number;
  logo: LogoCloud_Logo;
  props: LogoCloud_ResolvedProps;
  tone: LogoCloud_LogoCloudTone;
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

const LogoCloud_LogoRow = ({
  flush = false,
  logos,
  props,
  tone,
}: {
  flush?: boolean;
  logos: LogoCloud_Logo[];
  props: LogoCloud_ResolvedProps;
  tone: LogoCloud_LogoCloudTone;
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
            <LogoCloud_LogoItem
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

const LogoCloud_Title = ({ props }: { props: LogoCloud_ResolvedProps }) => (
  <Heading
    style={{
      color: props.titleColor,
      fontFamily: LogoCloud_fontFamily,
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

const LogoCloud_Description = ({
  props,
}: {
  props: LogoCloud_ResolvedProps;
}) => (
  <Text
    style={{
      color: props.textColor,
      fontFamily: LogoCloud_fontFamily,
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

const LogoCloud_LogoCloudSection = (props: LogoCloud_SectionProps) => {
  const variant = props.variant ?? "full";
  const tone = props.tone ?? "boxed";
  const resolved = {
    ...LogoCloud_defaults,
    ...props,
  } as LogoCloud_ResolvedProps;
  const logos = resolved.logos.slice(0, 5) as LogoCloud_Logo[];
  const flush = variant === "flush";
  const showTitle =
    variant === "with-title" || variant === "full" || variant === "flush";
  const showDescription =
    variant === "with-description" || variant === "full" || variant === "flush";
  const logoRows = flush ? (
    <LogoCloud_LogoRow flush logos={logos} props={resolved} tone={tone} />
  ) : (
    <>
      <LogoCloud_LogoRow
        logos={logos.slice(0, 3)}
        props={resolved}
        tone={tone}
      />
      <Section className="logo-cloud-gap" style={{ lineHeight: "16px" }}>
        &zwj;
      </Section>
      <LogoCloud_LogoRow
        logos={logos.slice(3, 5)}
        props={resolved}
        tone={tone}
      />
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
            {(() => {
              if (flush) {
                return (
                  <Section width="100%">
                    <Fragment>
                      <Row>
                        <Column style={{ padding: "0 24px" }}>
                          <Section style={{ lineHeight: "44px" }}>
                            &zwj;
                          </Section>
                          {showTitle ? (
                            <LogoCloud_Title props={resolved} />
                          ) : null}
                        </Column>
                      </Row>
                      <Row>
                        <Column>
                          {showTitle ? (
                            <Section style={{ lineHeight: "44px" }}>
                              &zwj;
                            </Section>
                          ) : (
                            <Section style={{ lineHeight: "44px" }}>
                              &zwj;
                            </Section>
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
                            <LogoCloud_Description props={resolved} />
                          </Column>
                        </Row>
                      ) : null}
                    </Fragment>
                  </Section>
                );
              }
              return (
                <Section width="100%">
                  <Fragment>
                    <Row>
                      <Column
                        style={{ padding: "0 24px", textAlign: "center" }}
                      >
                        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                        {showTitle ? (
                          <>
                            <LogoCloud_Title props={resolved} />
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
                            <LogoCloud_Description props={resolved} />
                          </>
                        ) : null}
                      </Column>
                    </Row>
                  </Fragment>
                </Section>
              );
            })()}
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const LogoCloud_LogoCloud = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  variant = "full",
  ...props
}: LogoCloud_LogoCloudProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: LogoCloud_responsiveStyles }} />
    </EmailHead>
    <Preview>Supported payment services</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: LogoCloud_fontFamily,
        }}
        className="m-0"
      >
        <LogoCloud_LogoCloudSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
          variant={variant}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

LogoCloud_LogoCloud.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
  variant: "full",
} satisfies LogoCloud_LogoCloudProps;

const __LogoCloud = LogoCloud_LogoCloud;

type LogosGrid_LogosGridTone = "boxed" | "outlined" | "bordered";

interface LogosGrid_LogosGridProps {
  theme?: EmailTheme;
  title?: string;
  description?: string;
  logos?: {
    alt: string;
    src: string;
    width: number;
  }[];
  pageBackgroundColor?: string;
  backgroundColor?: string;
  boxBackgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  tone?: LogosGrid_LogosGridTone;
}

const LogosGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const LogosGrid_responsiveStyles = `
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

const LogosGrid_defaultLogos = [
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

const LogosGrid_defaults = {
  backgroundColor: "#fffffe",
  borderColor: "#d1d5db",
  boxBackgroundColor: "#f3f4f6",
  description:
    "We created a personal account for you. Please confirm your e-mail address and use our service to the maximum",
  logos: LogosGrid_defaultLogos,
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
  title: "Supported payment services",
  titleColor: "#030712",
};

type LogosGrid_SectionProps = Omit<LogosGrid_LogosGridProps, "theme">;

type LogosGrid_ResolvedProps = typeof LogosGrid_defaults &
  LogosGrid_SectionProps;

type LogosGrid_Logo = (typeof LogosGrid_defaultLogos)[number];

const LogosGrid_GridItem = ({
  bordered,
  logo,
  props,
  tone,
}: {
  bordered: boolean;
  logo: LogosGrid_Logo;
  props: LogosGrid_ResolvedProps;
  tone: LogosGrid_LogosGridTone;
}) => (
  <Column
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
    <Img
      alt={logo.alt}
      src={logo.src}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={logo.width}
    />
  </Column>
);

const LogosGrid_Divider = ({ color }: { color: string }) => (
  <Column
    className="logos-grid-divider"
    style={{ backgroundColor: color, width: "1px" }}
  >
    &zwj;
  </Column>
);

const LogosGrid_CardRow = ({
  logos,
  props,
  tone,
}: {
  logos: LogosGrid_Logo[];
  props: LogosGrid_ResolvedProps;
  tone: LogosGrid_LogosGridTone;
}) => (
  <Section align="center" style={{ margin: "0 auto" }}>
    <Fragment>
      <Row>
        {logos.map((logo, index) => (
          <Fragment key={logo.alt + logo.src}>
            {index > 0 ? (
              <Column className="logos-grid-gap" style={{ width: "16px" }}>
                &zwj;
              </Column>
            ) : null}
            <LogosGrid_GridItem
              bordered={false}
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

const LogosGrid_BorderedRows = ({
  logos,
  props,
}: {
  logos: LogosGrid_Logo[];
  props: LogosGrid_ResolvedProps;
}) => (
  <>
    <Section align="center" style={{ margin: "0 auto" }}>
      <Fragment>
        <Row>
          {logos.slice(0, 3).map((logo, index) => (
            <Fragment key={logo.alt + logo.src}>
              {index > 0 ? (
                <LogosGrid_Divider color={props.borderColor} />
              ) : null}
              <LogosGrid_GridItem
                bordered
                logo={logo}
                props={props}
                tone="bordered"
              />
            </Fragment>
          ))}
        </Row>
        <Row>
          <Column
            className="logos-grid-divider"
            colSpan={5}
            style={{ backgroundColor: props.borderColor, lineHeight: "1px" }}
          >
            &zwj;
          </Column>
        </Row>
      </Fragment>
    </Section>
    <Section align="center" style={{ margin: "0 auto" }}>
      <Fragment>
        <Row>
          {logos.slice(3, 6).map((logo, index) => (
            <Fragment key={logo.alt + logo.src}>
              {index > 0 ? (
                <LogosGrid_Divider color={props.borderColor} />
              ) : null}
              <LogosGrid_GridItem
                bordered
                logo={logo}
                props={props}
                tone="bordered"
              />
            </Fragment>
          ))}
        </Row>
      </Fragment>
    </Section>
  </>
);

const LogosGrid_LogosGridSection = (props: LogosGrid_SectionProps) => {
  const tone = props.tone ?? "boxed";
  const resolved = {
    ...LogosGrid_defaults,
    ...props,
  } as LogosGrid_ResolvedProps;
  const logos = resolved.logos.slice(0, 6) as LogosGrid_Logo[];
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
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Heading
                      style={{
                        color: resolved.titleColor,
                        fontFamily: LogosGrid_fontFamily,
                        fontSize: "20px",
                        fontWeight: 600,
                        lineHeight: "28px",
                        margin: 0,
                        textAlign: "center",
                      }}
                      as="h3"
                    >
                      {resolved.title}
                    </Heading>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {tone === "bordered" ? (
                      <LogosGrid_BorderedRows logos={logos} props={resolved} />
                    ) : (
                      <>
                        <LogosGrid_CardRow
                          logos={logos.slice(0, 3)}
                          props={resolved}
                          tone={tone}
                        />
                        <Section
                          className="logos-grid-gap"
                          style={{ lineHeight: "16px" }}
                        >
                          &zwj;
                        </Section>
                        <LogosGrid_CardRow
                          logos={logos.slice(3, 6)}
                          props={resolved}
                          tone={tone}
                        />
                      </>
                    )}
                    <Section
                      className="logos-grid-description-gap"
                      style={{ lineHeight: "36px" }}
                    >
                      &zwj;
                    </Section>
                    <Text
                      style={{
                        color: resolved.textColor,
                        fontFamily: LogosGrid_fontFamily,
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {resolved.description}
                    </Text>
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

const LogosGrid_LogosGrid = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  tone = "boxed",
  ...props
}: LogosGrid_LogosGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: LogosGrid_responsiveStyles }} />
    </EmailHead>
    <Preview>Supported payment services</Preview>
    <EmailTailwind theme={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: LogosGrid_fontFamily,
        }}
        className="m-0"
      >
        <LogosGrid_LogosGridSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          tone={tone}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

LogosGrid_LogosGrid.PreviewProps = {
  theme: defaultTheme,
  tone: "boxed",
} satisfies LogosGrid_LogosGridProps;

const __LogosGrid = LogosGrid_LogosGrid;

export interface LogoItem {
  alt: string;
  src: string;
  width: number;
}

export interface LogoCloudProps {
  theme?: Parameters<typeof __BasicLogoCloud>[0]["theme"];
  title?: string;
  description?: string;
  logos?: LogoItem[];
  layout?: "cloud" | "grid" | "featured";
  appearance?: "plain" | "boxed" | "outlined" | "bordered";
  alignment?: "left" | "center" | "right";
  featuredIndex?: number;
}

const contentVariant = ({
  title,
  description,
}: Pick<LogoCloudProps, "title" | "description">) => {
  if (title && description) {
    return "full" as const;
  }
  if (title) {
    return "with-title" as const;
  }
  return description ? ("with-description" as const) : "minimal";
};

export const LogoCloud = ({
  theme,
  title,
  description,
  logos,
  layout = "cloud",
  appearance = "plain",
  alignment = "center",
  featuredIndex = 0,
}: LogoCloudProps) => {
  const resolvedAppearance = appearance;
  if (layout === "featured") {
    return (
      <__FeaturedLogoGrid
        alignment={alignment}
        description={description}
        featuredLogo={logos?.[featuredIndex]}
        supportingLogos={logos?.filter((_, index) => index !== featuredIndex)}
        theme={theme}
        title={title}
        tone={resolvedAppearance === "boxed" ? "boxed" : "outlined"}
      />
    );
  }
  if (layout === "grid") {
    return (
      <__LogosGrid
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        tone={(() => {
          if (resolvedAppearance === "bordered") {
            return "bordered";
          }
          if (resolvedAppearance === "outlined") {
            return "outlined";
          }
          return "boxed";
        })()}
      />
    );
  }
  const variant = contentVariant({ description, title });
  if (resolvedAppearance === "plain") {
    return (
      <__BasicLogoCloud
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        variant={variant}
      />
    );
  }
  if (resolvedAppearance === "bordered") {
    return (
      <__BorderedLogoCloud
        description={description}
        logos={logos}
        theme={theme}
        title={title}
        variant={variant}
      />
    );
  }
  return (
    <__LogoCloud
      description={description}
      logos={logos}
      theme={theme}
      title={title}
      tone={resolvedAppearance === "outlined" ? "outlined" : "boxed"}
      variant={variant}
    />
  );
};

LogoCloud.PreviewProps = {
  alignment: "center",
  appearance: "plain",
  layout: "cloud",
} satisfies LogoCloudProps;
