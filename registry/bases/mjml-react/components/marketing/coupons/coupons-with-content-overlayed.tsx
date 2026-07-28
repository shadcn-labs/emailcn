import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type CouponsWithContentOverlayedVariant =
  | "split"
  | "centered"
  | "code-bottom";

export interface CouponsWithContentOverlayedProps {
  theme?: EmailTheme;
  overline?: string;
  discount?: string;
  code?: string;
  expiry?: string;
  backgroundImageSrc?: string;
  buttonLabel?: string;
  buttonHref?: string;
  arrowIconSrc?: string;
  pageBackgroundColor?: string;
  headingColor?: string;
  codeBackgroundColor?: string;
  codeColor?: string;
  buttonBackgroundColor?: string;
  buttonColor?: string;
  variant?: CouponsWithContentOverlayedVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const sharedDefaults = {
  arrowIconSrc: emailAsset("icon-arrow-right.png"),
  buttonBackgroundColor: "#030712",
  buttonColor: "#fffffe",
  buttonHref: "https://example.com",
  buttonLabel: "Shop now",
  code: "WINTER20OFF",
  codeBackgroundColor: "#fffffe",
  codeColor: "#030712",
  discount: "20% OFF",
  expiry: "until 31/10/2025",
  headingColor: "#fffffe",
  overline: "Our biggest sale of the year",
  pageBackgroundColor: "#f1f5f9",
};

const backgrounds: Record<CouponsWithContentOverlayedVariant, string> = {
  centered: emailAsset("coupons/bg-image-6.jpg"),
  "code-bottom": emailAsset("coupons/bg-image-4.jpg"),
  split: emailAsset("coupons/bg-image-5.jpg"),
};

type SectionProps = Omit<CouponsWithContentOverlayedProps, "theme">;

type ResolvedProps = typeof sharedDefaults & SectionProps;

const resolveProps = (props: SectionProps): ResolvedProps => {
  const variant = props.variant ?? "code-bottom";

  return {
    ...sharedDefaults,
    backgroundImageSrc: backgrounds[variant],
    ...props,
    variant,
  } as ResolvedProps;
};

const Overline = ({
  centered,
  props,
}: {
  centered: boolean;
  props: ResolvedProps;
}) => (
  <MjmlText
    align="center"
    color={centered ? "#030712" : props.headingColor}
    fontFamily={fontFamily}
    fontSize="16px"
    fontWeight={centered ? "500" : undefined}
    lineHeight="24px"
    padding="0"
    textTransform="uppercase"
  >
    {!centered && props.overline === sharedDefaults.overline ? (
      <>
        Our <strong>biggest sale</strong> of the year
      </>
    ) : (
      props.overline
    )}
  </MjmlText>
);

const DiscountHeading = ({
  centered,
  props,
  split,
}: {
  centered: boolean;
  props: ResolvedProps;
  split: boolean;
}) => (
  <MjmlText
    align="center"
    color={centered ? "#030712" : props.headingColor}
    fontFamily={fontFamily}
    fontSize={split ? "48px" : "96px"}
    fontWeight="500"
    lineHeight={split ? "59px" : "116px"}
    padding="0"
  >
    {(() => {
      if (split) {
        return props.discount === sharedDefaults.discount
          ? "An extra 20% OFF"
          : props.discount;
      }
      if (centered && props.discount === sharedDefaults.discount) {
        return (
          <>
            20% <span style={{ fontWeight: 100 }}>OFF</span>
          </>
        );
      }
      return props.discount;
    })()}
  </MjmlText>
);

const CodeBlock = ({ props }: { props: ResolvedProps }) => (
  <>
    <MjmlSpacer height="24px" />
    <MjmlText
      align="center"
      color={props.headingColor}
      fontFamily={fontFamily}
      fontSize="16px"
      lineHeight="24px"
      padding="0"
      textTransform="uppercase"
    >
      Your code:
    </MjmlText>
    <MjmlSpacer height="12px" />
    <MjmlText
      align="left"
      color={props.codeColor}
      containerBackgroundColor={props.codeBackgroundColor}
      fontFamily={fontFamily}
      fontSize="16px"
      lineHeight="24px"
      padding="8px 16px"
    >
      {props.code}
    </MjmlText>
  </>
);

const CouponButton = ({ props }: { props: ResolvedProps }) => (
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
);

export const CouponsWithContentOverlayedSection = (props: SectionProps) => {
  const resolved = resolveProps(props);
  const variant = resolved.variant ?? "code-bottom";
  const centered = variant === "centered";
  const split = variant === "split";

  let topSpace = "216px";
  if (centered) {
    topSpace = "182px";
  } else if (split) {
    topSpace = "44px";
  }

  let contentSpace = "44px";
  if (centered) {
    contentSpace = "24px";
  } else if (split) {
    contentSpace = "318px";
  }

  return (
    <MjmlSection
      backgroundColor="#374151"
      backgroundPosition="center"
      backgroundUrl={resolved.backgroundImageSrc}
      padding="0"
    >
      <MjmlColumn padding="0">
        <MjmlSpacer height={topSpace} />
        <Overline centered={centered} props={resolved} />
        <DiscountHeading centered={centered} props={resolved} split={split} />

        {centered ? (
          <MjmlText
            align="center"
            color="#030712"
            fontFamily={fontFamily}
            fontSize="16px"
            lineHeight="24px"
            padding="0"
          >
            {resolved.expiry}
          </MjmlText>
        ) : (
          <CodeBlock props={resolved} />
        )}

        <MjmlSpacer height={contentSpace} />
        <CouponButton props={resolved} />
        <MjmlSpacer height={centered ? "182px" : "44px"} />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const CouponsWithContentOverlayed = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "code-bottom",
  ...props
}: CouponsWithContentOverlayedProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Our biggest sale of the year</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <CouponsWithContentOverlayedSection
        {...props}
        pageBackgroundColor={pageBackgroundColor}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

CouponsWithContentOverlayed.PreviewProps = {
  theme: defaultTheme,
  variant: "code-bottom",
} satisfies CouponsWithContentOverlayedProps;
