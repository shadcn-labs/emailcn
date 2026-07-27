import {
  Section,
  Row,
  Column,
  Link,
  Text,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { EmailTailwind } from "@/components/email/email-tailwind";
import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

type OrderSummaryAlignment = "left" | "right" | "centered" | "justified";

type BoxedOrderSummaryVariant =
  | "left-aligned"
  | "left-filled"
  | "right-aligned"
  | "right-filled"
  | "centered"
  | "centered-filled"
  | "justified"
  | "justified-filled";

type BorderedOrderSummaryVariant =
  | "left-aligned"
  | "right-aligned"
  | "centered"
  | "justified";

type BorderedCardOrderSummaryVariant =
  | "bottom-left"
  | "bottom-right"
  | "bottom-centered"
  | "bottom-justified"
  | "top-left"
  | "top-right"
  | "top-centered"
  | "top-justified";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 430px) {
    .order-detail-column { display: block !important; width: 100% !important; }
    .order-detail-gap { line-height: 44px !important; }
  }
`;

const textStyle = { fontFamily, margin: 0 } as const;

const EmailShell = ({ children }: { children: ReactNode }) => (
  <>
    <style>{responsiveStyles}</style>
    <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: "#fffffe",
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    {children}
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const Divider = ({ margin = 24 }: { margin?: number }) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column>
          <Section
            style={{
              backgroundColor: "#d1d5db",
              height: "1px",
              lineHeight: "1px",
              margin: `${margin}px 0`,
            }}
          >
            &zwj;
          </Section>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const CardMethod = () => (
  <Section>
    <Fragment>
      <Row>
        <Column>
          <Img
            alt=""
            src="https://emailcn.vercel.app/api/email-assets/icon-card-visa.png"
            style={{ maxWidth: "100%", verticalAlign: "middle" }}
            width="40"
          />
        </Column>
        <Column style={{ width: "8px" }}>&zwj;</Column>
        <Column
          style={{
            color: "#4b5563",
            fontFamily,
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
          }}
        >
          ****6754
        </Column>
        <Column style={{ width: "8px" }}>&zwj;</Column>
        <Column>|</Column>
        <Column style={{ width: "8px" }}>&zwj;</Column>
        <Column>
          <Link
            href="https://example.com"
            style={{
              color: "#4f46e5",
              fontFamily,
              fontSize: "14px",
              lineHeight: "20px",
              textDecoration: "none",
            }}
          >
            Change
          </Link>
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const PaymentMethod = ({
  amount,
  centered = false,
}: {
  amount?: string;
  centered?: boolean;
}) => {
  if (!amount) {
    return <CardMethod />;
  }
  return (
    <Section
      align={centered ? "center" : undefined}
      style={{
        margin: centered ? "0 auto" : undefined,
        width: centered ? undefined : "100%",
      }}
    >
      <Fragment>
        <Row>
          <Column>
            <CardMethod />
          </Column>
          {centered ? (
            <Column
              style={{
                fontFamily,
                fontSize: "12px",
                lineHeight: "16px",
                padding: "0 12px",
              }}
            >
              |
            </Column>
          ) : null}
          <Column
            style={{
              color: "#4b5563",
              fontFamily,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16px",
              textAlign: "right",
            }}
          >
            {amount}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const alignmentStyles = (alignment: OrderSummaryAlignment) => {
  if (alignment === "left") {
    return {
      amountAlign: "left" as const,
      amountWidth: undefined,
      labelAlign: "left" as const,
      labelWidth: "96px",
    };
  }
  if (alignment === "right") {
    return {
      amountAlign: "right" as const,
      amountWidth: "96px",
      labelAlign: "right" as const,
      labelWidth: undefined,
    };
  }
  if (alignment === "centered") {
    return {
      amountAlign: "left" as const,
      amountWidth: "50%",
      labelAlign: "right" as const,
      labelWidth: "50%",
    };
  }
  return {
    amountAlign: "right" as const,
    amountWidth: "50%",
    labelAlign: "left" as const,
    labelWidth: "50%",
  };
};

const SummaryRow = ({
  amount,
  alignment,
  label,
  padded,
  topPadded = false,
}: {
  amount: string;
  alignment: OrderSummaryAlignment;
  label: string;
  padded: boolean;
  topPadded?: boolean;
}) => {
  const styles = alignmentStyles(alignment);
  return (
    <Row>
      <Column
        style={{
          paddingLeft: padded ? "12px" : undefined,
          paddingTop: topPadded ? "12px" : undefined,
          textAlign: styles.labelAlign,
          width: styles.labelWidth,
        }}
      >
        {label}
      </Column>
      <Column style={{ width: "16px" }}>&zwj;</Column>
      <Column
        style={{
          paddingRight: padded ? "12px" : undefined,
          paddingTop: topPadded ? "12px" : undefined,
          textAlign: styles.amountAlign,
          width: styles.amountWidth,
        }}
      >
        {amount}
      </Column>
    </Row>
  );
};

const TotalRow = ({
  alignment,
  boxed,
  connected,
  large,
  position,
}: {
  alignment: OrderSummaryAlignment;
  boxed: boolean;
  connected: boolean;
  large: boolean;
  position: "top" | "bottom";
}) => {
  const styles = alignmentStyles(alignment);
  if (boxed && position === "top") {
    return (
      <Row>
        <Column
          style={{
            backgroundColor: "#f3f4f6",
            borderBottomLeftRadius: connected ? undefined : "4px",
            borderTopLeftRadius: "4px",
            color: "#4f46e5",
            fontWeight: 600,
            padding: "12px",
            textAlign: styles.labelAlign,
            width: styles.labelWidth,
          }}
        >
          Total
        </Column>
        <Column style={{ backgroundColor: "#f3f4f6", width: "16px" }}>
          &zwj;
        </Column>
        <Column
          style={{
            backgroundColor: "#f3f4f6",
            borderBottomRightRadius: connected ? undefined : "4px",
            borderTopRightRadius: "4px",
            color: "#4f46e5",
            fontWeight: 600,
            paddingRight: "12px",
            textAlign: styles.amountAlign,
            width: styles.amountWidth,
          }}
        >
          $35.98
        </Column>
      </Row>
    );
  }
  return (() => {
    if (boxed) {
      return (
        <Row>
          <Column
            colSpan={3}
            style={{
              backgroundColor: "#f3f4f6",
              borderBottomLeftRadius: "4px",
              borderBottomRightRadius: "4px",
              borderTopLeftRadius: connected ? undefined : "4px",
              borderTopRightRadius: connected ? undefined : "4px",
              padding: "12px",
            }}
          >
            <Section
              style={{
                color: "#4f46e5",
                fontWeight: 600,
                tableLayout: "fixed",
                width: "100%",
              }}
            >
              <Fragment>
                <SummaryRow
                  alignment={alignment}
                  amount="$35.98"
                  label="Total"
                  padded={false}
                />
              </Fragment>
            </Section>
          </Column>
        </Row>
      );
    }
    return (
      <Row>
        <Column
          style={{
            color: "#4f46e5",
            fontSize: large ? "24px" : "16px",
            fontWeight: 600,
            lineHeight: large ? "32px" : "24px",
            textAlign: styles.labelAlign,
            width: styles.labelWidth,
          }}
        >
          Total
        </Column>
        <Column style={{ width: "16px" }}>&zwj;</Column>
        <Column
          style={{
            color: "#4f46e5",
            fontSize: large ? "24px" : "16px",
            fontWeight: 600,
            lineHeight: large ? "32px" : "24px",
            textAlign: styles.amountAlign,
            width: styles.amountWidth,
          }}
        >
          $35.98
        </Column>
      </Row>
    );
  })();
};

interface TableSectionProps {
  alignment: OrderSummaryAlignment;
  cardDetails?: boolean;
  filled?: boolean;
  surface: "boxed" | "bordered";
  totalPosition: "top" | "bottom";
}

const OrderSummaryTableSection = ({
  alignment,
  cardDetails = false,
  filled = false,
  surface,
  totalPosition,
}: TableSectionProps) => {
  const boxed = surface === "boxed";
  const summaryRows = (
    <>
      <SummaryRow
        alignment={alignment}
        amount="$29.99"
        label="Subtotal"
        padded={boxed}
        topPadded={boxed && filled && totalPosition === "bottom"}
      />
      <Row>
        <Column colSpan={3} style={{ lineHeight: "16px" }}>
          &zwj;
        </Column>
      </Row>
      <SummaryRow
        alignment={alignment}
        amount="$5.99"
        label="Tax"
        padded={boxed}
      />
      <Row>
        <Column colSpan={3} style={{ lineHeight: "16px" }}>
          &zwj;
        </Column>
      </Row>
      <SummaryRow
        alignment={alignment}
        amount="FREE"
        label="Shipping"
        padded={boxed}
      />
    </>
  );
  return (
    <EmailShell>
      <Section
        style={{
          backgroundColor: boxed && filled ? "#f9fafb" : undefined,
          borderRadius: boxed && filled ? "4px" : undefined,
          color: "#4b5563",
          fontFamily,
          fontSize: "16px",
          fontWeight: 500,
          lineHeight: "24px",
          tableLayout: "fixed",
          width: "100%",
        }}
      >
        <Fragment>
          {(() => {
            if (totalPosition === "top") {
              return (
                <>
                  <TotalRow
                    alignment={alignment}
                    boxed={boxed}
                    connected={filled}
                    large={cardDetails && !boxed}
                    position="top"
                  />
                  {boxed ? (
                    <Row>
                      <Column colSpan={3} style={{ lineHeight: "16px" }}>
                        &zwj;
                      </Column>
                    </Row>
                  ) : (
                    <Row>
                      <Column colSpan={3}>
                        <Divider />
                      </Column>
                    </Row>
                  )}
                </>
              );
            }
            return null;
          })()}
          {summaryRows}
          {(() => {
            if (totalPosition === "bottom") {
              return (
                <>
                  {boxed ? (
                    <Row>
                      <Column colSpan={3} style={{ lineHeight: "16px" }}>
                        &zwj;
                      </Column>
                    </Row>
                  ) : (
                    <Row>
                      <Column colSpan={3}>
                        <Divider />
                      </Column>
                    </Row>
                  )}
                  <TotalRow
                    alignment={alignment}
                    boxed={boxed}
                    connected={filled}
                    large={cardDetails && !boxed}
                    position="bottom"
                  />
                </>
              );
            }
            return null;
          })()}
          {(() => {
            if (cardDetails) {
              return (
                <Row>
                  <Column
                    colSpan={3}
                    style={{
                      backgroundColor: boxed ? "#fffffe" : undefined,
                      padding: boxed ? "0 12px" : 0,
                    }}
                  >
                    {boxed ? (
                      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                    ) : (
                      <Divider margin={16} />
                    )}
                    <Text
                      style={{
                        ...textStyle,
                        color: "#030712",
                        fontSize: "14px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        marginBottom: "8px",
                        textAlign:
                          alignment === "centered" ? "center" : undefined,
                      }}
                    >
                      Amount charged
                    </Text>
                    <PaymentMethod
                      amount="$35.98"
                      centered={alignment === "centered"}
                    />
                  </Column>
                </Row>
              );
            }
            return null;
          })()}
        </Fragment>
      </Section>
    </EmailShell>
  );
};

interface BorderedCard_BorderedOrderSummaryCardDetailsProps {
  theme?: EmailThemeTokens;
  variant?: BorderedCardOrderSummaryVariant;
}

const BorderedCard_getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BorderedCard_BorderedOrderSummaryCardDetailsSection = ({
  variant = "bottom-left",
}: Omit<BorderedCard_BorderedOrderSummaryCardDetailsProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BorderedCard_getAlignment(variant)}
    cardDetails={true}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={variant.startsWith("top") ? "top" : "bottom"}
  />
);

const BorderedCard_BorderedOrderSummaryCardDetails = ({
  theme = defaultTheme,
  ...props
}: BorderedCard_BorderedOrderSummaryCardDetailsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BorderedCard_BorderedOrderSummaryCardDetailsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BorderedCard_BorderedOrderSummaryCardDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "bottom-left",
} satisfies BorderedCard_BorderedOrderSummaryCardDetailsProps;

const __BorderedCard = BorderedCard_BorderedOrderSummaryCardDetails;

interface BorderedBottom_BorderedOrderSummaryTotalBottomProps {
  theme?: EmailThemeTokens;
  variant?: BorderedOrderSummaryVariant;
}

const BorderedBottom_getAlignment = (
  variant: string
): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BorderedBottom_BorderedOrderSummaryTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<BorderedBottom_BorderedOrderSummaryTotalBottomProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BorderedBottom_getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={"bottom"}
  />
);

const BorderedBottom_BorderedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  ...props
}: BorderedBottom_BorderedOrderSummaryTotalBottomProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BorderedBottom_BorderedOrderSummaryTotalBottomSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BorderedBottom_BorderedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedBottom_BorderedOrderSummaryTotalBottomProps;

const __BorderedBottom = BorderedBottom_BorderedOrderSummaryTotalBottom;

interface BorderedTop_BorderedOrderSummaryTotalTopProps {
  theme?: EmailThemeTokens;
  variant?: BorderedOrderSummaryVariant;
}

const BorderedTop_getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BorderedTop_BorderedOrderSummaryTotalTopSection = ({
  variant = "left-aligned",
}: Omit<BorderedTop_BorderedOrderSummaryTotalTopProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BorderedTop_getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="bordered"
    totalPosition={"top"}
  />
);

const BorderedTop_BorderedOrderSummaryTotalTop = ({
  theme = defaultTheme,
  ...props
}: BorderedTop_BorderedOrderSummaryTotalTopProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BorderedTop_BorderedOrderSummaryTotalTopSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BorderedTop_BorderedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedTop_BorderedOrderSummaryTotalTopProps;

const __BorderedTop = BorderedTop_BorderedOrderSummaryTotalTop;

interface BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps {
  theme?: EmailThemeTokens;
  variant?: BoxedOrderSummaryVariant;
}

const BoxedCardBottom_getAlignment = (
  variant: string
): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<
  BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps,
  "theme"
>) => (
  <OrderSummaryTableSection
    alignment={BoxedCardBottom_getAlignment(variant)}
    cardDetails={true}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"bottom"}
  />
);

const BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottom = ({
  theme = defaultTheme,
  ...props
}: BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomSection
          {...props}
        />
      </Body>
    </EmailTailwind>
  </Html>
);

BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps;

const __BoxedCardBottom =
  BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottom;

interface BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps {
  theme?: EmailThemeTokens;
  variant?: BoxedOrderSummaryVariant;
}

const BoxedCardTop_getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopSection = ({
  variant = "left-aligned",
}: Omit<BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BoxedCardTop_getAlignment(variant)}
    cardDetails={true}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"top"}
  />
);

const BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTop = ({
  theme = defaultTheme,
  ...props
}: BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps;

const __BoxedCardTop = BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTop;

interface BoxedBottom_BoxedOrderSummaryTotalBottomProps {
  theme?: EmailThemeTokens;
  variant?: BoxedOrderSummaryVariant;
}

const BoxedBottom_getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BoxedBottom_BoxedOrderSummaryTotalBottomSection = ({
  variant = "left-aligned",
}: Omit<BoxedBottom_BoxedOrderSummaryTotalBottomProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BoxedBottom_getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"bottom"}
  />
);

const BoxedBottom_BoxedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  ...props
}: BoxedBottom_BoxedOrderSummaryTotalBottomProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BoxedBottom_BoxedOrderSummaryTotalBottomSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BoxedBottom_BoxedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedBottom_BoxedOrderSummaryTotalBottomProps;

const __BoxedBottom = BoxedBottom_BoxedOrderSummaryTotalBottom;

interface BoxedTop_BoxedOrderSummaryTotalTopProps {
  theme?: EmailThemeTokens;
  variant?: BoxedOrderSummaryVariant;
}

const BoxedTop_getAlignment = (variant: string): OrderSummaryAlignment => {
  if (variant.includes("right")) {
    return "right";
  }
  if (variant.includes("centered")) {
    return "centered";
  }
  if (variant.includes("justified")) {
    return "justified";
  }
  return "left";
};

const BoxedTop_BoxedOrderSummaryTotalTopSection = ({
  variant = "left-aligned",
}: Omit<BoxedTop_BoxedOrderSummaryTotalTopProps, "theme">) => (
  <OrderSummaryTableSection
    alignment={BoxedTop_getAlignment(variant)}
    cardDetails={false}
    filled={variant.endsWith("filled")}
    surface="boxed"
    totalPosition={"top"}
  />
);

const BoxedTop_BoxedOrderSummaryTotalTop = ({
  theme = defaultTheme,
  ...props
}: BoxedTop_BoxedOrderSummaryTotalTopProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order summary</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <BoxedTop_BoxedOrderSummaryTotalTopSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
);

BoxedTop_BoxedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedTop_BoxedOrderSummaryTotalTopProps;

const __BoxedTop = BoxedTop_BoxedOrderSummaryTotalTop;

export interface OrderSummaryTableProps {
  theme?: Parameters<typeof __BorderedBottom>[0]["theme"];
  alignment?: "left" | "center" | "right" | "justified";
  appearance?: "bordered" | "boxed";
  filled?: boolean;
  totalPosition?: "top" | "bottom";
  cardDetails?: boolean;
}

const boxedVariant = ({
  alignment,
  filled,
}: Required<Pick<OrderSummaryTableProps, "alignment" | "filled">>) => {
  if (alignment === "center") {
    return filled ? "centered-filled" : "centered";
  }
  if (alignment === "justified") {
    return filled ? "justified-filled" : "justified";
  }
  return `${alignment}-${filled ? "filled" : "aligned"}` as const;
};

const borderedVariant = (
  alignment: NonNullable<OrderSummaryTableProps["alignment"]>
) => {
  if (alignment === "center") {
    return "centered" as const;
  }
  return alignment === "justified"
    ? "justified"
    : (`${alignment}-aligned` as const);
};

const borderedCardVariant = (
  totalPosition: NonNullable<OrderSummaryTableProps["totalPosition"]>,
  alignment: NonNullable<OrderSummaryTableProps["alignment"]>
) => {
  const normalized = alignment === "center" ? "centered" : alignment;
  return `${totalPosition}-${normalized}` as const;
};

export const OrderSummaryTable = ({
  theme,
  alignment = "left",
  appearance = "bordered",
  filled = false,
  totalPosition = "bottom",
  cardDetails = false,
}: OrderSummaryTableProps) => {
  if (appearance === "bordered") {
    if (cardDetails) {
      return (
        <__BorderedCard
          theme={theme}
          variant={borderedCardVariant(totalPosition, alignment)}
        />
      );
    }
    const Component =
      totalPosition === "top" ? __BorderedTop : __BorderedBottom;
    return <Component theme={theme} variant={borderedVariant(alignment)} />;
  }
  const variant = boxedVariant({ alignment, filled });
  if (cardDetails) {
    const Component =
      totalPosition === "top" ? __BoxedCardTop : __BoxedCardBottom;
    return <Component theme={theme} variant={variant} />;
  }
  const Component = totalPosition === "top" ? __BoxedTop : __BoxedBottom;
  return <Component theme={theme} variant={variant} />;
};

OrderSummaryTable.PreviewProps = {
  alignment: "left",
  appearance: "bordered",
  filled: false,
  totalPosition: "bottom",
} satisfies OrderSummaryTableProps;
