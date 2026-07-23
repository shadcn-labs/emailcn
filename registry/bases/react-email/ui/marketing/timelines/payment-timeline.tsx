import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type PaymentTimelineVariant = "3-steps" | "4-steps";

export interface PaymentTimelineProps {
  theme?: TailwindConfig;
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

const getDateAlignment = (
  index: number,
  length: number
): "center" | "left" | "right" => {
  if (index === 0) {
    return "left";
  }
  return index === length - 1 ? "right" : "center";
};

const Dot = ({ checked, dark }: { checked?: boolean; dark: boolean }) => (
  <Section
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
      <Img
        alt=""
        src="https://emailcn.vercel.app/api/email-assets/timelines/icon-check-white.png"
        style={{ marginBottom: "1px" }}
        width="8"
      />
    ) : (
      <>&zwj;</>
    )}
  </Section>
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
                      <Section
                        className="payment-timeline-desktop"
                        style={{ tableLayout: "fixed", width: "100%" }}
                      >
                        <Fragment>
                          <Row>
                            {dates.map((date, index) => (
                              <Column key={date}>
                                <Section style={{ width: "100%" }}>
                                  <Fragment>
                                    <Row>
                                      <Column>
                                        {index === 0 ? null : (
                                          <Section
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
                                          </Section>
                                        )}
                                      </Column>
                                      <Column style={{ width: "16px" }}>
                                        <Dot
                                          checked={index === 0}
                                          dark={index <= 1}
                                        />
                                      </Column>
                                      <Column>
                                        {index === dates.length - 1 ? null : (
                                          <Section
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
                                          </Section>
                                        )}
                                      </Column>
                                    </Row>
                                  </Fragment>
                                </Section>
                              </Column>
                            ))}
                          </Row>
                          <Row>
                            <Column
                              colSpan={dates.length}
                              style={{ lineHeight: "8px" }}
                            >
                              &zwj;
                            </Column>
                          </Row>
                          <Row>
                            {dates.map((date, index) => (
                              <Column
                                key={date}
                                style={{
                                  textAlign: getDateAlignment(
                                    index,
                                    dates.length
                                  ),
                                  verticalAlign: "top",
                                }}
                              >
                                <Text
                                  style={{
                                    ...textStyle,
                                    color: "#030712",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    lineHeight: "16px",
                                  }}
                                >
                                  {date}
                                </Text>
                                <Text
                                  style={{
                                    ...textStyle,
                                    color: "#4b5563",
                                    fontSize: "10px",
                                    lineHeight: "16px",
                                  }}
                                >
                                  {amount}
                                </Text>
                              </Column>
                            ))}
                          </Row>
                        </Fragment>
                      </Section>
                      <Section className="payment-timeline-mobile">
                        {dates.map((date, index) => (
                          <Section key={date} style={{ display: "flex" }}>
                            <Section>
                              <Section style={{ margin: "2px 0" }}>
                                <Dot checked={index === 0} dark={index <= 1} />
                              </Section>
                              {index === dates.length - 1 ? null : (
                                <Section
                                  style={{
                                    backgroundColor:
                                      index === 0 ? "#030712" : "#d1d5db",
                                    height: "48px",
                                    margin: "0 auto",
                                    width: "1px",
                                  }}
                                />
                              )}
                            </Section>
                            <Section style={{ paddingLeft: "8px" }}>
                              <Text
                                style={{
                                  ...textStyle,
                                  color: "#030712",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  lineHeight: "16px",
                                }}
                              >
                                {date}
                              </Text>
                              <Text
                                style={{
                                  ...textStyle,
                                  color: "#4b5563",
                                  fontSize: "10px",
                                  lineHeight: "16px",
                                }}
                              >
                                {amount}
                              </Text>
                            </Section>
                          </Section>
                        ))}
                      </Section>
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
};

export const PaymentTimeline = ({
  theme = defaultTheme,
  ...props
}: PaymentTimelineProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Payment timeline</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <PaymentTimelineSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

PaymentTimeline.PreviewProps = {
  theme: defaultTheme,
  variant: "3-steps",
} satisfies PaymentTimelineProps;
