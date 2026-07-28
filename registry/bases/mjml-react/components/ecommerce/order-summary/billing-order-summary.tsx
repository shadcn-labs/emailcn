import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlTable,
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

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

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

const orderSummaryResponsiveStyles = `
  .billing-payment-table > table { width: auto !important; }
`;

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
    {gap > 0 ? <MjmlSpacer height={`${gap}px`} /> : null}
    {children}
  </>
);

const DetailText = ({ children }: { children: ReactNode }) => (
  <MjmlText
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="16px"
    lineHeight="24px"
    padding="0"
  >
    {children}
  </MjmlText>
);

const TextDetailBlock = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <MjmlText
    color="#4b5563"
    fontFamily={fontFamily}
    fontSize="16px"
    lineHeight="24px"
    padding="0"
  >
    <span
      style={{
        color: "#030712",
        display: "block",
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
      }}
    >
      {title}
    </span>
    <span style={{ display: "block" }}>{children}</span>
  </MjmlText>
);

const CardMethod = () => (
  <MjmlTable
    align="left"
    cellpadding="0"
    cellspacing="0"
    cssClass="billing-payment-table"
    padding="0"
    role="presentation"
    width="auto"
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
        <td style={{ fontSize: "12px", lineHeight: "16px" }}>|</td>
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
      </tr>
    </tbody>
  </MjmlTable>
);

const SectionGap = ({ bordered }: { bordered: boolean }) => (
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    <MjmlColumn padding="0" width="552px">
      {bordered ? (
        <MjmlDivider borderColor="#d1d5db" borderWidth="1px" padding="24px 0" />
      ) : (
        <MjmlSpacer height="44px" />
      )}
    </MjmlColumn>
  </MjmlSection>
);

const AddressColumns = ({ top }: { top: boolean }) => (
  <MjmlSection
    backgroundColor="#fffffe"
    padding={top ? "44px 24px 0" : "0 24px"}
  >
    <MjmlColumn padding="0" verticalAlign="top" width="254px">
      <TextDetailBlock title="Billing address">
        1234 Maplewood Drive
        <br /> Springfield,
        <br /> IL 62704
      </TextDetailBlock>
    </MjmlColumn>
    <MjmlColumn padding="0" width="44px" />
    <MjmlColumn padding="0" verticalAlign="top" width="254px">
      <TextDetailBlock title="Shipping address">
        782 Oceanview Avenue
        <br /> Santa Monica,
        <br /> CA 90401
      </TextDetailBlock>
    </MjmlColumn>
  </MjmlSection>
);

const ShippingContent = ({ bordered }: { bordered: boolean }) =>
  bordered ? (
    <>
      <MjmlImage
        align="left"
        alt="FedEx"
        padding="0"
        src={emailAsset("order-summary/logo-fedex.png")}
        width="78px"
      />
      <DetailText>Takes up to 2 working days</DetailText>
    </>
  ) : (
    <DetailText>
      DHL
      <br /> Takes up to 2 working days
    </DetailText>
  );

const ShippingColumns = ({
  bordered,
  layout,
}: {
  bordered: boolean;
  layout: "top" | "inline";
}) => {
  if (layout === "inline") {
    return (
      <>
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          {bordered ? (
            <DetailBlock title="Shipping method">
              <ShippingContent bordered />
            </DetailBlock>
          ) : (
            <TextDetailBlock title="Shipping method">
              DHL
              <br /> Takes up to 2 working days
            </TextDetailBlock>
          )}
        </MjmlColumn>
        <MjmlColumn padding="0" width="44px" />
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          <DetailBlock gap={8} title="Payment method">
            <CardMethod />
          </DetailBlock>
        </MjmlColumn>
      </>
    );
  }

  if (bordered) {
    return (
      <>
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          <DetailBlock title="Shipping method" />
        </MjmlColumn>
        <MjmlColumn padding="0" width="44px" />
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          <ShippingContent bordered />
        </MjmlColumn>
      </>
    );
  }

  return (
    <MjmlColumn padding="0" width="552px">
      <TextDetailBlock title="Shipping method">
        DHL
        <br /> Takes up to 2 working days
      </TextDetailBlock>
    </MjmlColumn>
  );
};

const ShippingDetails = ({
  bordered,
  layout,
}: {
  bordered: boolean;
  layout: "top" | "inline";
}) => (
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    <ShippingColumns bordered={bordered} layout={layout} />
  </MjmlSection>
);

const Notes = ({ bordered }: { bordered: boolean }) => (
  <MjmlSection backgroundColor="#fffffe" padding="0 24px">
    {bordered ? (
      <>
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          <DetailBlock title="Additional notes" />
        </MjmlColumn>
        <MjmlColumn padding="0" width="44px" />
        <MjmlColumn padding="0" verticalAlign="top" width="254px">
          <DetailText>
            Ring buzzer for Apt 3B, or call when outside. Elevator is on the
            left.
          </DetailText>
        </MjmlColumn>
      </>
    ) : (
      <MjmlColumn padding="0" width="552px">
        <TextDetailBlock title="Additional notes">
          Ring buzzer for Apt 3B, or call when outside.
          <br /> Elevator is on the left.
        </TextDetailBlock>
      </MjmlColumn>
    )}
  </MjmlSection>
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
  return (
    <>
      {payment ? (
        <MjmlSection backgroundColor="#fffffe" padding="44px 24px 0">
          <MjmlColumn padding="0" width="552px">
            <DetailBlock gap={8} title="Payment method">
              <CardMethod />
            </DetailBlock>
          </MjmlColumn>
        </MjmlSection>
      ) : null}
      {payment ? <SectionGap bordered={bordered} /> : null}
      <AddressColumns top={!payment} />
      <SectionGap bordered={bordered} />
      <ShippingDetails bordered={bordered} layout={layout} />
      {notes ? (
        <>
          <SectionGap bordered={bordered} />
          <Notes bordered={bordered} />
        </>
      ) : null}
      <MjmlSection backgroundColor="#fffffe" padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="44px" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

interface BillingInline_OrderSummaryBillingInlineProps {
  theme?: EmailTheme;
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
  theme?: EmailTheme;
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
