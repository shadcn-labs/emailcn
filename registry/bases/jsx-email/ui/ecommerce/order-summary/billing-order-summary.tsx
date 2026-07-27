import {
  Section,
  Row,
  Column,
  Link,
  Text,
  Heading,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "jsx-email";
import { Fragment } from "react";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

      {(() => {
        if (notes) {
          return (
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
          );
        }
        return null;
      })()}
    </EmailShell>
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
  theme: _theme = defaultTheme,
  ...props
}: BillingInline_OrderSummaryBillingInlineProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order details</Preview>
    <Body style={{ margin: 0 }}>
      <BillingInline_OrderSummaryBillingInlineSection {...props} />
    </Body>
  </Html>
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
  theme: _theme = defaultTheme,
  ...props
}: BillingTop_OrderSummaryBillingTopProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Order details</Preview>
    <Body style={{ margin: 0 }}>
      <BillingTop_OrderSummaryBillingTopSection {...props} />
    </Body>
  </Html>
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
