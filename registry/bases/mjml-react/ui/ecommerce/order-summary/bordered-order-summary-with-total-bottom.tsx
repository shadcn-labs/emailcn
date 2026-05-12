/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
  MjmlDivider,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export interface BorderedOrderSummaryTotalBottomProps {
  theme?: EmailThemeTokens;
  items?: { name: string; price: string; quantity: number }[];
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const BorderedOrderSummaryTotalBottomSection = ({
  items,
  subtotal,
  shipping,
  tax,
  total,
  theme,
}: {
  items: NonNullable<BorderedOrderSummaryTotalBottomProps["items"]>;
  subtotal?: string;
  shipping?: string;
  tax?: string;
  total?: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlWrapper
    border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingBase ?? "16px"}
  >
    <MjmlSection
      padding="0 0 12px"
      borderBottom={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
    >
      <MjmlColumn>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
        >
          Item
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="100px">
        <MjmlText
          align="right"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
        >
          Price
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    {items.map((item, i) => (
      <MjmlSection
        key={i}
        padding="16px 0"
        borderBottom={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
      >
        <MjmlColumn>
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
          >
            {item.name}
            <br />
            <span
              style={{
                color: theme.colorTextMuted,
                fontSize: theme.fontSizeSm ?? "12px",
              }}
            >
              Qty: {item.quantity}
            </span>
          </MjmlText>
        </MjmlColumn>
        <MjmlColumn width="100px">
          <MjmlText
            align="right"
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeBase ?? "14px"}
          >
            {item.price}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    ))}
    <MjmlSection padding="16px 0 0">
      <MjmlColumn>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          Subtotal
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="100px">
        <MjmlText
          align="right"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {subtotal}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="8px 0 0">
      <MjmlColumn>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          Shipping
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="100px">
        <MjmlText
          align="right"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {shipping}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="8px 0 0">
      <MjmlColumn>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          Tax
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="100px">
        <MjmlText
          align="right"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {tax}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlDivider borderColor={theme.colorBorder} />
    <MjmlSection padding="16px 0 0">
      <MjmlColumn>
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          fontWeight={theme.fontWeightBold ?? "700"}
        >
          Total
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn width="100px">
        <MjmlText
          align="right"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          fontWeight={theme.fontWeightBold ?? "700"}
        >
          {total}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
  </MjmlWrapper>
);

export const BorderedOrderSummaryTotalBottom = ({
  theme = defaultTheme,
  items = [{ name: "Item", price: "$29.00", quantity: 1 }],
  subtotal = "$29.00",
  shipping = "$0.00",
  tax = "$0.00",
  total = "$29.00",
  variant = "default",
}: BorderedOrderSummaryTotalBottomProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>order-summary</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <BorderedOrderSummaryTotalBottomSection
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          tax={tax}
          total={total}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

BorderedOrderSummaryTotalBottom.PreviewProps = {
  items: [
    { name: "Desk Lamp", price: "$59.00", quantity: 2 },
    { name: "Notebook Set", price: "$24.00", quantity: 1 },
  ],
  shipping: "$8.00",
  subtotal: "$142.00",
  tax: "$11.36",
  theme: defaultTheme,
  total: "$161.36",
  variant: "default",
} satisfies BorderedOrderSummaryTotalBottomProps;
