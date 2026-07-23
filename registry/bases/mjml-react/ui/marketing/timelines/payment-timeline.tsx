import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
/* eslint-disable @next/next/no-img-element, complexity, no-nested-ternary */

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

const responsiveStyles = `
  .payment-timeline-mobile { display: none; }
  @media only screen and (max-width: 430px) {
    .payment-timeline-desktop { display: none !important; }
    .payment-timeline-mobile { display: block !important; }
  }
`;

const textStyle = {
  fontFamily,
  margin: 0,
} as const;

const Dot = ({ checked, dark }: { checked?: boolean; dark: boolean }) => (
  <div
    style={{
      backgroundColor: dark ? "#030712" : "#d1d5db",
      borderRadius: "9999px",
      height: "12px",
      lineHeight: checked ? "10px" : "12px",
      margin: "0 auto",
      textAlign: "center",
      width: "12px",
    }}
  >
    {checked ? (
      <img
        alt=""
        src="https://assets.mailviews.com/images/components/timelines/icon-check-white.png"
        style={{ marginBottom: "1px" }}
        width="8"
      />
    ) : (
      <>&zwj;</>
    )}
  </div>
);

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
    <>
      <style>{responsiveStyles}</style>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ backgroundColor: "#f1f5f9", width: "100%" }}
      >
        <tbody>
          <tr>
            <td>&zwj;</td>
            <td
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                paddingBottom: "44px",
                width: "600px",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "0 24px" }}>
                      <div style={{ lineHeight: "44px" }}>&zwj;</div>
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        className="payment-timeline-desktop"
                        role="presentation"
                        style={{ tableLayout: "fixed", width: "100%" }}
                      >
                        <tbody>
                          <tr>
                            {dates.map((date, index) => (
                              <td key={date}>
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  role="presentation"
                                  style={{ width: "100%" }}
                                >
                                  <tbody>
                                    <tr>
                                      <td>
                                        {index === 0 ? null : (
                                          <div
                                            style={{
                                              backgroundColor:
                                                index <= 1
                                                  ? "#030712"
                                                  : "#d1d5db",
                                              height: "1px",
                                              lineHeight: "1px",
                                            }}
                                          >
                                            &zwj;
                                          </div>
                                        )}
                                      </td>
                                      <td style={{ width: "16px" }}>
                                        <Dot
                                          checked={index === 0}
                                          dark={index <= 1}
                                        />
                                      </td>
                                      <td>
                                        {index === dates.length - 1 ? null : (
                                          <div
                                            style={{
                                              backgroundColor:
                                                index === 0
                                                  ? "#030712"
                                                  : "#d1d5db",
                                              height: "1px",
                                              lineHeight: "1px",
                                            }}
                                          >
                                            &zwj;
                                          </div>
                                        )}
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            ))}
                          </tr>
                          <tr>
                            <td
                              colSpan={dates.length}
                              style={{ lineHeight: "8px" }}
                            >
                              &zwj;
                            </td>
                          </tr>
                          <tr>
                            {dates.map((date, index) => (
                              <td
                                key={date}
                                style={{
                                  textAlign:
                                    index === 0
                                      ? "left"
                                      : index === dates.length - 1
                                        ? "right"
                                        : "center",
                                  verticalAlign: "top",
                                }}
                              >
                                <p
                                  style={{
                                    ...textStyle,
                                    color: "#030712",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    lineHeight: "16px",
                                  }}
                                >
                                  {date}
                                </p>
                                <p
                                  style={{
                                    ...textStyle,
                                    color: "#4b5563",
                                    fontSize: "10px",
                                    lineHeight: "16px",
                                  }}
                                >
                                  {amount}
                                </p>
                              </td>
                            ))}
                          </tr>
                        </tbody>
                      </table>
                      <div className="payment-timeline-mobile">
                        {dates.map((date, index) => (
                          <div key={date} style={{ display: "flex" }}>
                            <div>
                              <div style={{ margin: "2px 0" }}>
                                <Dot checked={index === 0} dark={index <= 1} />
                              </div>
                              {index === dates.length - 1 ? null : (
                                <div
                                  style={{
                                    backgroundColor:
                                      index === 0 ? "#030712" : "#d1d5db",
                                    height: "48px",
                                    margin: "0 auto",
                                    width: "1px",
                                  }}
                                />
                              )}
                            </div>
                            <div style={{ paddingLeft: "8px" }}>
                              <p
                                style={{
                                  ...textStyle,
                                  color: "#030712",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  lineHeight: "16px",
                                }}
                              >
                                {date}
                              </p>
                              <p
                                style={{
                                  ...textStyle,
                                  color: "#4b5563",
                                  fontSize: "10px",
                                  lineHeight: "16px",
                                }}
                              >
                                {amount}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>&zwj;</td>
          </tr>
        </tbody>
      </table>
    </>
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
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <div style={{ textAlign: "left" }}>
            <PaymentTimelineSection {...props} />
          </div>
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

PaymentTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "3-steps",
} satisfies PaymentTimelineProps;
