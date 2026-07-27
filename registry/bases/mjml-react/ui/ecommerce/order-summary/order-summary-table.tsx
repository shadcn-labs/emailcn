import {
  MjmlButton,
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlText,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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

const orderSummaryResponsiveStyles = "";

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

const OrderSummaryTableSection = ({
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
        {(() => {
          if (cardDetails) {
            return (
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
            );
          }
          return null;
        })()}
      </MjmlColumn>
    </MjmlSection>
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
