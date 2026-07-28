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

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { emailAsset } from "@/registry/email-assets";
import { defaultTheme } from "@/registry/themes/default";

export type PaymentTimelineVariant = "3-steps" | "4-steps";

export interface PaymentTimelineProps {
  theme?: EmailTheme;
  variant?: PaymentTimelineVariant;
  amount?: string;
  firstDate?: string;
  secondDate?: string;
  thirdDate?: string;
  fourthDate?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const paymentTimelineStyles = `
  .payment-timeline-table > table { width: 100% !important; }
`;

const getDateAlignment = (
  index: number,
  length: number
): "center" | "left" | "right" => {
  if (index === 0) {
    return "left";
  }
  return index === length - 1 ? "right" : "center";
};

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
      <MjmlColumn padding="0" width="552px">
        <MjmlTable
          cellpadding="0"
          cellspacing="0"
          cssClass="payment-timeline-table"
          padding="0"
          role="presentation"
          tableLayout="fixed"
          width="100%"
        >
          <tbody>
            <tr>
              {dates.flatMap((date, index) => [
                index > 0 ? (
                  <td key={`${date}-line`}>
                    <div
                      style={{
                        borderTop: `1px solid ${
                          index === 1 ? "#030712" : "#d1d5db"
                        }`,
                        fontSize: "0",
                        lineHeight: "1px",
                      }}
                    >
                      &zwj;
                    </div>
                  </td>
                ) : null,
                <td key={date} style={{ width: "12px" }}>
                  <div
                    style={{
                      backgroundColor: index <= 1 ? "#030712" : "#d1d5db",
                      borderRadius: "9999px",
                      height: "12px",
                      lineHeight: "12px",
                      textAlign: "center",
                      width: "12px",
                    }}
                  >
                    {index === 0 ? (
                      <img
                        alt=""
                        src={emailAsset("timelines/icon-check-white.png")}
                        style={{
                          display: "inline-block",
                          verticalAlign: "middle",
                        }}
                        width="8"
                      />
                    ) : (
                      <>&zwj;</>
                    )}
                  </div>
                </td>,
              ])}
            </tr>
          </tbody>
        </MjmlTable>
        <MjmlTable
          cellpadding="0"
          cellspacing="0"
          cssClass="payment-timeline-table"
          padding="8px 0 0"
          role="presentation"
          tableLayout="fixed"
          width="100%"
        >
          <tbody>
            <tr>
              {dates.map((date, index) => (
                <td
                  key={date}
                  style={{
                    color: "#030712",
                    fontFamily,
                    fontSize: "12px",
                    fontWeight: 600,
                    lineHeight: "16px",
                    textAlign: getDateAlignment(index, dates.length),
                    verticalAlign: "top",
                    width: `${100 / dates.length}%`,
                  }}
                >
                  {date}
                  <br />
                  <span
                    style={{
                      color: "#4b5563",
                      fontSize: "10px",
                      fontWeight: 400,
                    }}
                  >
                    {amount}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </MjmlTable>
      </MjmlColumn>
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
      <MjmlStyle>{paymentTimelineStyles}</MjmlStyle>
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
