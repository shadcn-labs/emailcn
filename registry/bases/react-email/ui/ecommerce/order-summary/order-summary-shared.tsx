import type { ReactNode } from "react";
import { Fragment } from "react";
import { Section, Row, Column, Link, Text, Heading, Img } from "react-email";

export type OrderSummaryAlignment = "left" | "right" | "centered" | "justified";

export type BoxedOrderSummaryVariant =
  | "left-aligned"
  | "left-filled"
  | "right-aligned"
  | "right-filled"
  | "centered"
  | "centered-filled"
  | "justified"
  | "justified-filled";

export type BorderedOrderSummaryVariant =
  | "left-aligned"
  | "right-aligned"
  | "centered"
  | "justified";

export type BorderedCardOrderSummaryVariant =
  | "bottom-left"
  | "bottom-right"
  | "bottom-centered"
  | "bottom-justified"
  | "top-left"
  | "top-right"
  | "top-centered"
  | "top-justified";

export type BillingTopVariant =
  | "basic"
  | "bordered"
  | "basic-with-payment"
  | "bordered-with-payment"
  | "basic-with-notes"
  | "bordered-with-notes"
  | "basic-full-details"
  | "bordered-full-details";

export type BillingInlineVariant =
  | "basic"
  | "bordered"
  | "basic-with-notes"
  | "bordered-with-notes";

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

  return boxed ? (
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
  ) : (
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
};

interface TableSectionProps {
  alignment: OrderSummaryAlignment;
  cardDetails?: boolean;
  filled?: boolean;
  surface: "boxed" | "bordered";
  totalPosition: "top" | "bottom";
}

export const OrderSummaryTableSection = ({
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
          {totalPosition === "top" ? (
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
          ) : null}
          {summaryRows}
          {totalPosition === "bottom" ? (
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
          ) : null}
          {cardDetails ? (
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
                    textAlign: alignment === "centered" ? "center" : undefined,
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
          ) : null}
        </Fragment>
      </Section>
    </EmailShell>
  );
};

const DetailText = ({ children }: { children: ReactNode }) => (
  <Text
    style={{
      ...textStyle,
      color: "#4b5563",
      fontSize: "16px",
      lineHeight: "24px",
    }}
  >
    {children}
  </Text>
);

const DetailBlock = ({
  children,
  gap = 0,
  title,
}: {
  children?: ReactNode;
  gap?: number;
  title: string;
}) => (
  <>
    <Heading
      style={{
        ...textStyle,
        color: "#030712",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
      as="h3"
    >
      {title}
    </Heading>
    {gap > 0 ? (
      <Section style={{ lineHeight: `${gap}px` }}>&zwj;</Section>
    ) : null}
    {children}
  </>
);

const TwoColumnDetails = ({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) => (
  <Section style={{ width: "100%" }}>
    <Fragment>
      <Row>
        <Column
          className="order-detail-column"
          style={{ verticalAlign: "top", width: "254px" }}
        >
          {left}
        </Column>
        <Column
          className="order-detail-column order-detail-gap"
          style={{ width: "44px" }}
        >
          &zwj;
        </Column>
        <Column
          className="order-detail-column"
          style={{ verticalAlign: "top", width: "254px" }}
        >
          {right}
        </Column>
      </Row>
    </Fragment>
  </Section>
);

const AddressColumns = () => (
  <TwoColumnDetails
    left={
      <DetailBlock title="Billing address">
        <DetailText>
          1234 Maplewood Drive
          <br /> Springfield,
          <br /> IL 62704
        </DetailText>
      </DetailBlock>
    }
    right={
      <DetailBlock title="Shipping address">
        <DetailText>
          782 Oceanview Avenue
          <br /> Santa Monica,
          <br /> CA 90401
        </DetailText>
      </DetailBlock>
    }
  />
);

const FedExShipping = () => (
  <>
    <Section>
      <Img
        alt="FedEx"
        src="https://emailcn.vercel.app/api/email-assets/order-summary/logo-fedex.png"
        width="78"
      />
    </Section>
    <DetailText>Takes up to 2 working days</DetailText>
  </>
);

const DhlShipping = () => (
  <DetailText>
    DHL
    <br /> Takes up to 2 working days
  </DetailText>
);

const NotesText = ({ splitLine = false }: { splitLine?: boolean }) => (
  <DetailText>
    Ring buzzer for Apt 3B, or call when outside.
    {splitLine ? <br /> : " "}
    Elevator is on the left.
  </DetailText>
);

const SectionGap = ({ bordered }: { bordered: boolean }) =>
  bordered ? (
    <Divider />
  ) : (
    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
  );

const ShippingDetails = ({
  bordered,
  layout,
  notes,
}: {
  bordered: boolean;
  layout: "top" | "inline";
  notes: boolean;
}) => {
  if (layout === "inline") {
    return (
      <TwoColumnDetails
        left={
          <DetailBlock title="Shipping method">
            {bordered ? <FedExShipping /> : <DhlShipping />}
          </DetailBlock>
        }
        right={
          <DetailBlock gap={8} title="Payment method">
            <PaymentMethod />
          </DetailBlock>
        }
      />
    );
  }
  if (bordered) {
    return (
      <TwoColumnDetails
        left={<DetailBlock title="Shipping method" />}
        right={notes ? <DhlShipping /> : <FedExShipping />}
      />
    );
  }
  return (
    <DetailBlock title="Shipping method">
      <DhlShipping />
    </DetailBlock>
  );
};

export const BillingDetailsSection = ({
  layout,
  variant,
}: {
  layout: "top" | "inline";
  variant: BillingTopVariant | BillingInlineVariant;
}) => {
  const bordered = variant.startsWith("bordered");
  const notes = variant.includes("notes") || variant.includes("full-details");
  const payment =
    layout === "top" &&
    (variant.includes("with-payment") || variant.includes("full-details"));

  return (
    <EmailShell>
      {payment ? (
        <>
          <DetailBlock gap={8} title="Payment method">
            <PaymentMethod />
          </DetailBlock>
          <SectionGap bordered={bordered} />
        </>
      ) : null}

      <AddressColumns />
      <SectionGap bordered={bordered} />

      <ShippingDetails bordered={bordered} layout={layout} notes={notes} />

      {notes ? (
        <>
          <SectionGap bordered={bordered} />
          {bordered ? (
            <TwoColumnDetails
              left={<DetailBlock title="Additional notes" />}
              right={<NotesText />}
            />
          ) : (
            <DetailBlock title="Additional notes">
              <NotesText splitLine={true} />
            </DetailBlock>
          )}
        </>
      ) : null}
    </EmailShell>
  );
};

export { responsiveStyles as orderSummaryResponsiveStyles };
