import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

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

export const orderSummaryResponsiveStyles = "";

const alignmentFor = (
  alignment: OrderSummaryAlignment
): "center" | "left" | "right" => {
  if (alignment === "centered") {
    return "center";
  }
  return alignment === "right" ? "right" : "left";
};

const SummaryLine = ({
  alignment,
  amount,
  label,
  total = false,
}: {
  alignment: OrderSummaryAlignment;
  amount: string;
  label: string;
  total?: boolean;
}) => (
  <MjmlText
    align={alignmentFor(alignment)}
    color={total ? "#4f46e5" : "#4b5563"}
    fontFamily={fontFamily}
    fontSize={total ? "24px" : "16px"}
    fontWeight={total ? "600" : "500"}
    lineHeight={total ? "32px" : "24px"}
    padding="0 0 16px"
  >
    {label} {alignment === "justified" ? "—" : "·"} {amount}
  </MjmlText>
);

const PaymentMethod = () => (
  <>
    <MjmlImage
      align="left"
      alt="Visa"
      padding="0"
      src="https://emailcn.vercel.app/api/email-assets/icon-card-visa.png"
      width="40px"
    />
    <MjmlText
      color="#4b5563"
      fontFamily={fontFamily}
      fontSize="12px"
      fontWeight="500"
      lineHeight="16px"
      padding="8px 0 0"
    >
      Visa ····6754
    </MjmlText>
    <MjmlButton
      align="left"
      backgroundColor="transparent"
      color="#4f46e5"
      fontFamily={fontFamily}
      fontSize="14px"
      href="https://example.com"
      innerPadding="0"
      lineHeight="20px"
      padding="4px 0 0"
    >
      Change
    </MjmlButton>
  </>
);

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
  const total = (
    <SummaryLine alignment={alignment} amount="$35.98" label="Total" total />
  );

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      <MjmlColumn
        backgroundColor={boxed && filled ? "#f9fafb" : "#fffffe"}
        border={boxed ? undefined : "1px solid #d1d5db"}
        borderRadius="4px"
        padding={boxed ? "20px" : "20px 24px"}
      >
        {totalPosition === "top" ? (
          <>
            {total}
            <MjmlDivider
              borderColor="#d1d5db"
              borderWidth="1px"
              padding="8px 0 24px"
            />
          </>
        ) : null}
        <SummaryLine alignment={alignment} amount="$29.99" label="Subtotal" />
        <SummaryLine alignment={alignment} amount="$5.99" label="Tax" />
        <SummaryLine alignment={alignment} amount="FREE" label="Shipping" />
        {totalPosition === "bottom" ? (
          <>
            <MjmlDivider
              borderColor="#d1d5db"
              borderWidth="1px"
              padding="8px 0 24px"
            />
            {total}
          </>
        ) : null}
        {cardDetails ? (
          <>
            <MjmlDivider
              borderColor="#d1d5db"
              borderWidth="1px"
              padding="8px 0 16px"
            />
            <MjmlText
              align={alignment === "centered" ? "center" : "left"}
              color="#030712"
              fontFamily={fontFamily}
              fontSize="14px"
              fontWeight="600"
              lineHeight="20px"
              padding="0 0 8px"
            >
              Amount charged
            </MjmlText>
            <PaymentMethod />
          </>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

const DetailBlock = ({
  children,
  title,
}: {
  children?: ReactNode;
  title: string;
}) => (
  <>
    <MjmlText
      color="#030712"
      fontFamily={fontFamily}
      fontSize="14px"
      fontWeight="600"
      lineHeight="20px"
      padding="0 0 8px"
    >
      {title}
    </MjmlText>
    <MjmlText
      color="#4b5563"
      fontFamily={fontFamily}
      fontSize="16px"
      lineHeight="24px"
      padding="0"
    >
      {children}
    </MjmlText>
  </>
);

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
  const columnBorder = bordered ? "1px solid #d1d5db" : undefined;

  return (
    <>
      {payment ? (
        <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
          <MjmlColumn border={columnBorder} padding="20px">
            <DetailBlock title="Payment method">Visa ····6754</DetailBlock>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      <MjmlSection
        backgroundColor="#fffffe"
        padding={payment ? "24px 24px 0" : "44px 24px 0"}
      >
        <MjmlColumn
          border={columnBorder}
          padding="20px"
          verticalAlign="top"
          width="50%"
        >
          <DetailBlock title="Billing address">
            1234 Maplewood Drive, Springfield, IL 62704
          </DetailBlock>
        </MjmlColumn>
        <MjmlColumn
          border={columnBorder}
          padding="20px"
          verticalAlign="top"
          width="50%"
        >
          <DetailBlock title="Shipping address">
            782 Oceanview Avenue, Santa Monica, CA 90401
          </DetailBlock>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor="#fffffe" padding="24px 24px 0">
        <MjmlColumn
          border={columnBorder}
          padding="20px"
          verticalAlign="top"
          width={layout === "inline" ? "50%" : "100%"}
        >
          <DetailBlock title="Shipping method">
            {bordered ? "FedEx" : "DHL"} · Takes up to 2 working days
          </DetailBlock>
        </MjmlColumn>
        {layout === "inline" ? (
          <MjmlColumn
            border={columnBorder}
            padding="20px"
            verticalAlign="top"
            width="50%"
          >
            <DetailBlock title="Payment method">Visa ····6754</DetailBlock>
          </MjmlColumn>
        ) : null}
      </MjmlSection>
      {notes ? (
        <MjmlSection backgroundColor="#fffffe" padding="24px">
          <MjmlColumn border={columnBorder} padding="20px">
            <DetailBlock title="Additional notes">
              Ring buzzer for Apt 3B, or call when outside. Elevator is on the
              left.
            </DetailBlock>
          </MjmlColumn>
        </MjmlSection>
      ) : (
        <MjmlSection backgroundColor="#fffffe" padding="0">
          <MjmlColumn padding="0">
            <MjmlSpacer height="44px" />
          </MjmlColumn>
        </MjmlSection>
      )}
    </>
  );
};
