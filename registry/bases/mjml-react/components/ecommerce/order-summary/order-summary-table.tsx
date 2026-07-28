import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlStyle,
  MjmlTable,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { CSSProperties, ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

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

const orderSummaryResponsiveStyles = `
  .order-summary-full-table > table { width: 100% !important; }
`;

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

const GapRow = ({ height = 16 }: { height?: number }) => (
  <tr>
    <td
      colSpan={3}
      style={{
        fontSize: "0",
        height: `${height}px`,
        lineHeight: `${height}px`,
      }}
    >
      &zwj;
    </td>
  </tr>
);

const SummaryRow = ({
  alignment,
  amount,
  backgroundColor,
  label,
  padded,
  total,
}: {
  alignment: OrderSummaryAlignment;
  amount: string;
  backgroundColor?: string;
  label: string;
  padded: boolean;
  total?: boolean;
}) => {
  const styles = alignmentStyles(alignment);
  const sharedStyle: CSSProperties = {
    backgroundColor,
    color: total ? "#4f46e5" : "#4b5563",
    fontFamily,
    fontSize: "16px",
    fontWeight: total ? 600 : 500,
    lineHeight: "24px",
  };

  return (
    <tr>
      <td
        style={{
          ...sharedStyle,
          paddingLeft: padded ? "12px" : undefined,
          paddingTop: padded ? "12px" : undefined,
          textAlign: styles.labelAlign,
          width: styles.labelWidth,
        }}
      >
        {label}
      </td>
      <td
        style={{
          ...sharedStyle,
          paddingTop: padded ? "12px" : undefined,
          width: "16px",
        }}
      >
        &zwj;
      </td>
      <td
        style={{
          ...sharedStyle,
          paddingRight: padded ? "12px" : undefined,
          paddingTop: padded ? "12px" : undefined,
          textAlign: styles.amountAlign,
          width: styles.amountWidth,
        }}
      >
        {amount}
      </td>
    </tr>
  );
};

const DividerRow = ({ margin = 24 }: { margin?: number }) => (
  <tr>
    <td colSpan={3}>
      <div
        style={{
          borderTop: "1px solid #d1d5db",
          fontSize: "0",
          lineHeight: "1px",
          margin: `${margin}px 0`,
        }}
      >
        &zwj;
      </div>
    </td>
  </tr>
);

const PaymentMethod = ({ alignment }: { alignment: OrderSummaryAlignment }) => (
  <table
    cellPadding="0"
    cellSpacing="0"
    role="presentation"
    style={{
      margin: alignment === "centered" ? "0 auto" : undefined,
      width: alignment === "centered" ? "auto" : "100%",
    }}
  >
    <tbody>
      <tr>
        <td style={{ width: "40px" }}>
          <img
            alt=""
            src={emailAsset("icon-card-visa.png")}
            style={{ display: "block" }}
            width="40"
          />
        </td>
        <td style={{ width: "8px" }}>&zwj;</td>
        <td
          style={{
            color: "#4b5563",
            fontFamily,
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "16px",
            whiteSpace: "nowrap",
          }}
        >
          ****6754
        </td>
        <td style={{ width: "8px" }}>&zwj;</td>
        <td style={{ fontFamily, fontSize: "12px", lineHeight: "16px" }}>|</td>
        <td style={{ width: "8px" }}>&zwj;</td>
        <td>
          <a
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
          </a>
        </td>
        {alignment === "centered" ? (
          <>
            <td style={{ padding: "0 12px" }}>|</td>
            <td
              style={{
                color: "#4b5563",
                fontFamily,
                fontSize: "12px",
                fontWeight: 500,
                lineHeight: "16px",
                whiteSpace: "nowrap",
              }}
            >
              $35.98
            </td>
          </>
        ) : (
          <td
            style={{
              color: "#4b5563",
              fontFamily,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16px",
              textAlign: "right",
              whiteSpace: "nowrap",
              width: "100%",
            }}
          >
            $35.98
          </td>
        )}
      </tr>
    </tbody>
  </table>
);

const CardDetailsRow = ({
  alignment,
  boxed,
}: {
  alignment: OrderSummaryAlignment;
  boxed: boolean;
}) => (
  <tr>
    <td
      colSpan={3}
      style={{
        backgroundColor: boxed ? "#fffffe" : undefined,
        padding: boxed ? "0 12px" : 0,
      }}
    >
      {boxed ? <div style={{ height: "16px" }}>&zwj;</div> : null}
      <div
        style={{
          color: "#030712",
          fontFamily,
          fontSize: "14px",
          fontWeight: 600,
          lineHeight: "20px",
          marginBottom: "8px",
          textAlign: alignment === "centered" ? "center" : undefined,
        }}
      >
        Amount charged
      </div>
      <PaymentMethod alignment={alignment} />
    </td>
  </tr>
);

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
  const totalBackground = boxed ? "#f3f4f6" : undefined;
  const summaryBackground = boxed && filled ? "#f9fafb" : undefined;
  const total = (
    <SummaryRow
      alignment={alignment}
      amount="$35.98"
      backgroundColor={totalBackground}
      label="Total"
      padded={boxed}
      total
    />
  );

  const summaryRows: ReactNode = (
    <>
      <SummaryRow
        alignment={alignment}
        amount="$29.99"
        backgroundColor={summaryBackground}
        label="Subtotal"
        padded={boxed && filled && totalPosition === "bottom"}
      />
      <GapRow />
      <SummaryRow
        alignment={alignment}
        amount="$5.99"
        backgroundColor={summaryBackground}
        label="Tax"
        padded={false}
      />
      <GapRow />
      <SummaryRow
        alignment={alignment}
        amount="FREE"
        backgroundColor={summaryBackground}
        label="Shipping"
        padded={false}
      />
    </>
  );

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      <MjmlColumn padding="0" width="552px">
        <MjmlTable
          cellpadding="0"
          cellspacing="0"
          cssClass="order-summary-full-table"
          padding="0"
          role="presentation"
          tableLayout="fixed"
          width="100%"
        >
          <tbody>
            {totalPosition === "top" ? (
              <>
                {total}
                {boxed ? <GapRow /> : <DividerRow />}
              </>
            ) : null}
            {summaryRows}
            {totalPosition === "bottom" ? (
              <>
                {boxed ? <GapRow /> : <DividerRow />}
                {total}
              </>
            ) : null}
            {cardDetails ? (
              <>
                {boxed ? null : <DividerRow margin={16} />}
                <CardDetailsRow alignment={alignment} boxed={boxed} />
              </>
            ) : null}
          </tbody>
        </MjmlTable>
      </MjmlColumn>
    </MjmlSection>
  );
};

interface BorderedCard_BorderedOrderSummaryCardDetailsProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BorderedCard_BorderedOrderSummaryCardDetailsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedCard_BorderedOrderSummaryCardDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "bottom-left",
} satisfies BorderedCard_BorderedOrderSummaryCardDetailsProps;

const __BorderedCard = BorderedCard_BorderedOrderSummaryCardDetails;

interface BorderedBottom_BorderedOrderSummaryTotalBottomProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BorderedBottom_BorderedOrderSummaryTotalBottomSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedBottom_BorderedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedBottom_BorderedOrderSummaryTotalBottomProps;

const __BorderedBottom = BorderedBottom_BorderedOrderSummaryTotalBottom;

interface BorderedTop_BorderedOrderSummaryTotalTopProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BorderedTop_BorderedOrderSummaryTotalTopSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedTop_BorderedOrderSummaryTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BorderedTop_BorderedOrderSummaryTotalTopProps;

const __BorderedTop = BorderedTop_BorderedOrderSummaryTotalTop;

interface BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomSection
          {...props}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottomProps;

const __BoxedCardBottom =
  BoxedCardBottom_BoxedOrderSummaryCardDetailsTotalBottom;

interface BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTop.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTopProps;

const __BoxedCardTop = BoxedCardTop_BoxedOrderSummaryCardDetailsTotalTop;

interface BoxedBottom_BoxedOrderSummaryTotalBottomProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BoxedBottom_BoxedOrderSummaryTotalBottomSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BoxedBottom_BoxedOrderSummaryTotalBottom.PreviewProps = {
  theme: defaultTheme,
  variant: "left-aligned",
} satisfies BoxedBottom_BoxedOrderSummaryTotalBottomProps;

const __BoxedBottom = BoxedBottom_BoxedOrderSummaryTotalBottom;

interface BoxedTop_BoxedOrderSummaryTotalTopProps {
  theme?: EmailTheme;
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
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order summary</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BoxedTop_BoxedOrderSummaryTotalTopSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
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
