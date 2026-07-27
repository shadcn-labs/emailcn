import {
  MjmlColumn,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

type BillingTopVariant =
  | "basic"
  | "bordered"
  | "basic-with-payment"
  | "bordered-with-payment"
  | "basic-with-notes"
  | "bordered-with-notes"
  | "basic-full-details"
  | "bordered-full-details";

type BillingInlineVariant =
  | "basic"
  | "bordered"
  | "basic-with-notes"
  | "bordered-with-notes";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const orderSummaryResponsiveStyles = "";

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

const BillingDetailsSection = ({
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

interface BillingInline_OrderSummaryBillingInlineProps {
  theme?: EmailThemeTokens;
  variant?: BillingInlineVariant;
}

const BillingInline_OrderSummaryBillingInlineSection = ({
  variant = "basic",
}: Omit<BillingInline_OrderSummaryBillingInlineProps, "theme">) => (
  <BillingDetailsSection layout="inline" variant={variant} />
);

const BillingInline_OrderSummaryBillingInline = ({
  theme = defaultTheme,
  ...props
}: BillingInline_OrderSummaryBillingInlineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BillingInline_OrderSummaryBillingInlineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BillingInline_OrderSummaryBillingInline.PreviewProps = {
  theme: defaultTheme,
  variant: "basic",
} satisfies BillingInline_OrderSummaryBillingInlineProps;

const __BillingInline = BillingInline_OrderSummaryBillingInline;

interface BillingTop_OrderSummaryBillingTopProps {
  theme?: EmailThemeTokens;
  variant?: BillingTopVariant;
}

const BillingTop_OrderSummaryBillingTopSection = ({
  variant = "basic-with-payment",
}: Omit<BillingTop_OrderSummaryBillingTopProps, "theme">) => (
  <BillingDetailsSection layout="top" variant={variant} />
);

const BillingTop_OrderSummaryBillingTop = ({
  theme = defaultTheme,
  ...props
}: BillingTop_OrderSummaryBillingTopProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Order details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{orderSummaryResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <BillingTop_OrderSummaryBillingTopSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BillingTop_OrderSummaryBillingTop.PreviewProps = {
  theme: defaultTheme,
  variant: "basic-with-payment",
} satisfies BillingTop_OrderSummaryBillingTopProps;

const __BillingTop = BillingTop_OrderSummaryBillingTop;

export interface BillingOrderSummaryProps {
  theme?: Parameters<typeof __BillingTop>[0]["theme"];
  payment?: boolean;
  notes?: boolean;
  billingPosition?: "top" | "inline";
  appearance?: "plain" | "bordered";
}

const billingVariant = ({
  appearance,
  billingPosition,
  notes,
  payment,
}: Pick<
  BillingOrderSummaryProps,
  "appearance" | "billingPosition" | "notes" | "payment"
>) => {
  const prefix = appearance === "bordered" ? "bordered" : "basic";
  if (billingPosition === "inline") {
    return notes ? `${prefix}-with-notes` : prefix;
  }
  if (notes && payment) {
    return `${prefix}-full-details`;
  }
  if (notes) {
    return `${prefix}-with-notes`;
  }
  return payment ? `${prefix}-with-payment` : prefix;
};

export const BillingOrderSummary = ({
  theme,
  payment,
  notes,
  billingPosition = "top",
  appearance = "plain",
}: BillingOrderSummaryProps) => {
  const variant = billingVariant({
    appearance,
    billingPosition,
    notes,
    payment,
  });
  return billingPosition === "inline" ? (
    <__BillingInline
      theme={theme}
      variant={variant as Parameters<typeof __BillingInline>[0]["variant"]}
    />
  ) : (
    <__BillingTop
      theme={theme}
      variant={variant as Parameters<typeof __BillingTop>[0]["variant"]}
    />
  );
};

BillingOrderSummary.PreviewProps = {
  appearance: "plain",
  billingPosition: "top",
} satisfies BillingOrderSummaryProps;
