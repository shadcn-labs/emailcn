import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlDivider,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type PaymentTimelineVariant = "3-steps" | "4-steps";

export interface PaymentTimelineProps {
  theme?: EmailThemeTokens;
  variant?: PaymentTimelineVariant;
  amount?: string;
  firstDate?: string;
  secondDate?: string;
  thirdDate?: string;
  fourthDate?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const PaymentTimelineSection = ({
  amount = "$9.99",
  firstDate = "Paid: 17/11",
  fourthDate = "17/02",
  secondDate = "17/12",
  thirdDate = "17/01",
  variant = "3-steps",
}: Omit<PaymentTimelineProps, "theme">) => {
  const dates =
    variant === "4-steps"
      ? [firstDate, secondDate, thirdDate, fourthDate]
      : [firstDate, secondDate, thirdDate];

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {dates.map((date, index) => (
        <MjmlColumn
          key={`${date}-${index}`}
          padding="0 4px"
          verticalAlign="top"
          width={`${100 / dates.length}%`}
        >
          <MjmlText
            align="center"
            color={index === 0 ? "#fffffe" : "#9ca3af"}
            containerBackgroundColor={index === 0 ? "#030712" : "#e5e7eb"}
            fontFamily={fontFamily}
            fontSize="10px"
            fontWeight="700"
            lineHeight="20px"
            padding="0"
          >
            {index === 0 ? "✓" : index + 1}
          </MjmlText>
          <MjmlDivider
            borderColor={index <= 1 ? "#030712" : "#d1d5db"}
            borderWidth="1px"
            padding="10px 0"
          />
          <MjmlText
            align="center"
            color="#4b5563"
            fontFamily={fontFamily}
            fontSize="12px"
            lineHeight="18px"
            padding="0"
          >
            {date}
          </MjmlText>
          <MjmlText
            align="center"
            color="#030712"
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="4px 0 0"
          >
            {amount}
          </MjmlText>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const PaymentTimeline = ({
  theme = defaultTheme,
  ...props
}: PaymentTimelineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Payment timeline</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <PaymentTimelineSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

PaymentTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "3-steps",
} satisfies PaymentTimelineProps;
