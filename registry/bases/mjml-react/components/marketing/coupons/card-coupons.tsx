import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlTable,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type CardCouponsVariant =
  | "with-name"
  | "with-pattern"
  | "with-overlay"
  | "with-background-image"
  | "background-image-header";

export interface CardCouponsProps {
  theme?: EmailTheme;
  heading?: string;
  recipient?: string;
  code?: string;
  description?: string;
  logoSrc?: string;
  logoAlt?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  codeBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CardCouponsVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const sharedDefaults = {
  arrowIconSrc: emailAsset("icon-arrow-right.png"),
  backgroundColor: "#fffffe",
  buttonBackgroundColor: "#4f46e5",
  buttonColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Shop now",
  cardBackgroundColor: "#1f2937",
  code: "WINTER20OFF",
  codeBackgroundColor: "#f3f4f6",
  description:
    "Use code: WINTER20OFF at checkout, or click the link below to automatically apply the discount to your order.",
  headingColor: "#fffffe",
  logoAlt: "emailcn",
  mutedTextColor: "#9ca3af",
  pageBackgroundColor: "#f1f5f9",
  recipient: "Jenna Adams",
  textColor: "#4b5563",
};

const variantDefaults: Record<CardCouponsVariant, Partial<CardCouponsProps>> = {
  "background-image-header": {
    backgroundImageSrc: emailAsset("coupons/bg-image-3.jpg"),
    code: "JFY20OFF",
    heading: "Just for you - 20% OFF",
    logoSrc: emailAsset("emailcn-insignia-mono-light.png"),
  },
  "with-background-image": {
    backgroundImageSrc: emailAsset("coupons/bg-image-2.jpg"),
    heading: "An extra 20% OFF",
    logoSrc: emailAsset("emailcn-insignia-mono-light.png"),
  },
  "with-name": {
    cardBackgroundColor: "#030712",
    heading: "Just for you - 20% OFF",
    logoSrc: emailAsset("emailcn-insignia-mono-light.png"),
  },
  "with-overlay": {
    backgroundImageSrc: emailAsset("coupons/bg-image-1.jpg"),
    cardBackgroundColor: "#030712",
    heading: "An extra 20% OFF",
    logoSrc: emailAsset("emailcn-insignia-mono-light.png"),
  },
  "with-pattern": {
    backgroundImageSrc: emailAsset("coupons/pattern.png"),
    heading: "An extra 20% OFF",
    logoSrc: emailAsset("emailcn-insignia-mono-light.png"),
  },
};

type SectionProps = Omit<CardCouponsProps, "theme">;

type ResolvedProps = typeof sharedDefaults & SectionProps;

const resolveProps = (props: SectionProps): ResolvedProps => {
  const variant = props.variant ?? "with-overlay";
  return {
    ...sharedDefaults,
    ...variantDefaults[variant],
    ...props,
    variant,
  } as ResolvedProps;
};

const Logo = ({
  props,
  width = 100,
}: {
  props: ResolvedProps;
  width?: number;
}) => (
  <MjmlImage
    align="center"
    alt={props.logoAlt}
    padding="0"
    src={props.logoSrc}
    width={`${width}px`}
  />
);

const OfferHeading = ({ props }: { props: ResolvedProps }) => (
  <MjmlText
    align="center"
    color={props.headingColor}
    fontFamily={fontFamily}
    fontSize="24px"
    fontWeight="600"
    lineHeight="32px"
    padding="0"
  >
    {props.heading}
  </MjmlText>
);

const CodeBox = ({
  dark = false,
  props,
  white = false,
}: {
  dark?: boolean;
  props: ResolvedProps;
  white?: boolean;
}) => {
  let backgroundColor = props.codeBackgroundColor;
  let color = "#030712";
  let border = "none";

  if (white) {
    backgroundColor = "#fffffe";
  } else if (dark) {
    backgroundColor = props.cardBackgroundColor;
    color = props.headingColor;
    border = "1px solid #374151";
  }

  return (
    <MjmlButton
      backgroundColor={backgroundColor}
      border={border}
      borderRadius="8px"
      color={color}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="400"
      innerPadding="8px 16px"
      lineHeight="24px"
      padding="0"
    >
      {props.code}
    </MjmlButton>
  );
};

const NameCard = ({ props }: { props: ResolvedProps }) => (
  <MjmlSection padding="0 100px">
    <MjmlColumn
      backgroundColor={props.cardBackgroundColor}
      borderRadius="8px"
      padding="44px 10px"
      width="400px"
    >
      <Logo props={props} />
      <MjmlSpacer height="36px" />
      <OfferHeading props={props} />
      <MjmlSpacer height="16px" />
      <MjmlText
        align="center"
        color={props.mutedTextColor}
        fontFamily={fontFamily}
        fontSize="16px"
        lineHeight="24px"
        padding="0"
      >
        {props.recipient}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

const StandardCardContent = ({
  codeStyle,
  props,
}: {
  codeStyle: "dark" | "white";
  props: ResolvedProps;
}) => (
  <>
    <Logo props={props} />
    <MjmlSpacer height="36px" />
    <OfferHeading props={props} />
    <MjmlSpacer height="16px" />
    <CodeBox
      dark={codeStyle === "dark"}
      props={props}
      white={codeStyle === "white"}
    />
  </>
);

const BackgroundCard = ({
  props,
  variant,
}: {
  props: ResolvedProps;
  variant: Exclude<CardCouponsVariant, "with-name">;
}) => {
  if (variant === "background-image-header") {
    return (
      <MjmlSection padding="0 100px">
        <MjmlColumn
          borderRadius="8px"
          cssClass="coupon-card-background"
          padding="12px 10px 28px"
          width="400px"
        >
          <MjmlTable padding="0" width="100%">
            <tr>
              <td style={{ textAlign: "left", verticalAlign: "middle" }}>
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  style={{
                    border: 0,
                    display: "block",
                    height: "auto",
                    width: "44px",
                  }}
                  width="44"
                />
              </td>
              <td
                style={{
                  color: props.headingColor,
                  fontFamily,
                  fontSize: "16px",
                  lineHeight: "24px",
                  textAlign: "right",
                  verticalAlign: "middle",
                }}
              >
                {props.recipient}
              </td>
            </tr>
          </MjmlTable>
          <MjmlSpacer height="72px" />
          <OfferHeading props={props} />
          <MjmlSpacer height="16px" />
          <CodeBox props={props} white />
        </MjmlColumn>
      </MjmlSection>
    );
  }

  const isOverlay = variant === "with-overlay";
  const codeStyle =
    variant === "with-overlay" || variant === "with-pattern" ? "dark" : "white";

  return (
    <MjmlSection padding="0 100px">
      <MjmlColumn
        borderRadius="8px"
        cssClass="coupon-card-background"
        innerBackgroundColor={isOverlay ? "rgba(3, 7, 18, 0.6)" : undefined}
        innerBorderRadius={isOverlay ? "4px" : undefined}
        padding={isOverlay ? "12px 10px" : "28px 10px"}
        width="400px"
      >
        {isOverlay ? <MjmlSpacer height="28px" /> : null}
        <StandardCardContent codeStyle={codeStyle} props={props} />
        {isOverlay ? <MjmlSpacer height="28px" /> : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

const Description = ({ props }: { props: ResolvedProps }) => (
  <MjmlSection padding="0 44px">
    <MjmlColumn padding="0">
      <MjmlText
        align="center"
        color={props.textColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="300"
        lineHeight="24px"
        padding="0"
      >
        Use code: <strong>{props.code}</strong> at checkout, or click the link
        below to automatically apply the discount to your order.
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

const CouponButton = ({ props }: { props: ResolvedProps }) => (
  <MjmlSection padding="0">
    <MjmlColumn padding="0">
      <MjmlButton
        backgroundColor={props.buttonBackgroundColor}
        borderRadius="8px"
        color={props.buttonColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={props.buttonHref}
        innerPadding="14px 20px"
        lineHeight="16px"
        padding="0"
      >
        {props.buttonLabel} →
      </MjmlButton>
    </MjmlColumn>
  </MjmlSection>
);

export const CardCouponsSection = (props: SectionProps) => {
  const resolved = resolveProps(props);
  const variant = resolved.variant ?? "with-overlay";
  const showDescription =
    variant === "with-name" ||
    variant === "with-pattern" ||
    variant === "with-overlay";

  return (
    <MjmlWrapper backgroundColor={resolved.backgroundColor} padding="44px 0">
      {variant === "with-name" ? (
        <NameCard props={resolved} />
      ) : (
        <BackgroundCard props={resolved} variant={variant} />
      )}

      {showDescription ? (
        <>
          <MjmlSpacer height="24px" />
          <Description props={resolved} />
        </>
      ) : null}

      {variant === "with-name" ? (
        <>
          <MjmlSpacer height="24px" />
          <MjmlSection padding="0">
            <MjmlColumn padding="0">
              <CodeBox props={resolved} />
            </MjmlColumn>
          </MjmlSection>
        </>
      ) : null}

      <MjmlSpacer height="44px" />
      <CouponButton props={resolved} />
    </MjmlWrapper>
  );
};

export const CardCoupons = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "with-overlay",
  ...props
}: CardCouponsProps) => {
  const resolved = resolveProps({
    ...props,
    pageBackgroundColor,
    variant,
  });
  const backgroundImageSrc = (resolved.backgroundImageSrc ?? "").replaceAll(
    "'",
    "%27"
  );

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>An extra 20% OFF</MjmlPreview>
        <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
        <MjmlStyle inline>
          {`
            .coupon-card-background > table {
              background-color: ${resolved.cardBackgroundColor} !important;
              background-image: url('${backgroundImageSrc}') !important;
              background-position: center !important;
              background-repeat: no-repeat !important;
              background-size: cover !important;
              border-radius: 8px !important;
            }
          `}
        </MjmlStyle>
      </MjmlHead>
      <MjmlBody
        backgroundColor={pageBackgroundColor}
        width={theme.containerWidth}
      >
        <CardCouponsSection {...resolved} />
      </MjmlBody>
    </Mjml>
  );
};

CardCoupons.PreviewProps = {
  theme: defaultTheme,
  variant: "with-overlay",
} satisfies CardCouponsProps;
