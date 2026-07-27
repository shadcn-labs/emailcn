import {
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Heading,
  Text,
  Section,
  Row,
  Column,
  Link,
  Img,
} from "jsx-email";
import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

const colors = {
  border: "#e5e7eb",
  canvas: "#f1f5f9",
  dark: "#030712",
  light: "#f3f4f6",
  muted: "#4b5563",
  subtle: "#9ca3af",
  surface: "#fffffe",
  surfaceMuted: "#f9fafb",
  white: "#fffffe",
} as const;

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const tableStyle: CSSProperties = {
  borderCollapse: "separate",
  borderSpacing: 0,
  width: "100%",
};

const textBase: CSSProperties = {
  fontFamily,
  margin: 0,
};

interface InternalFaqItem {
  answer?: string;
  iconAlt?: string;
  iconSrc?: string;
  question: string;
}

const Question = ({ children }: { children: ReactNode }) => (
  <Heading
    style={{
      ...textBase,
      color: colors.dark,
      fontSize: "14px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
    as="h3"
  >
    {children}
  </Heading>
);

const Answer = ({
  children,
  marginTop = 8,
}: {
  children: ReactNode;
  marginTop?: number;
}) => (
  <Text
    style={{
      ...textBase,
      color: colors.muted,
      fontSize: "14px",
      fontWeight: 400,
      lineHeight: "22px",
      marginTop: `${marginTop}px`,
    }}
  >
    {children}
  </Text>
);

const NumberLabel = ({ index }: { index: number }) => (
  <span
    style={{
      ...textBase,
      color: colors.subtle,
      fontSize: "12px",
      fontWeight: 600,
      lineHeight: "20px",
    }}
  >
    {String(index + 1).padStart(2, "0")}
  </span>
);

const ToggleIcon = ({
  expanded = false,
  item,
}: {
  expanded?: boolean;
  item?: InternalFaqItem;
}) =>
  (() => {
    if (item?.iconSrc) {
      return (
        <Img
          alt={item.iconAlt ?? ""}
          height={20}
          src={item.iconSrc}
          width={20}
          style={{
            border: "none",
            display: "block",
            height: "20px",
            outline: "none",
            textDecoration: "none",
            width: "20px",
          }}
        />
      );
    }
    return (
      <span
        style={{
          ...textBase,
          border: `1px solid ${colors.border}`,
          borderRadius: "9999px",
          color: colors.dark,
          display: "inline-block",
          fontSize: "14px",
          fontWeight: 500,
          height: "20px",
          lineHeight: "18px",
          textAlign: "center",
          width: "20px",
        }}
      >
        {expanded ? "−" : "+"}
      </span>
    );
  })();

const FaqHeading = ({ children }: { children: ReactNode }) => (
  <>
    <Heading
      style={{
        ...textBase,
        color: colors.dark,
        fontSize: "28px",
        fontWeight: 600,
        lineHeight: "36px",
        textAlign: "center",
      }}
      as="h2"
    >
      {children}
    </Heading>
    <Section style={{ fontSize: 0, height: "32px", lineHeight: "32px" }}>
      &zwj;
    </Section>
  </>
);

const ExpandedNumbersContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={40}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 16px 20px 0",
              verticalAlign: "top",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

const OffsetAnswersContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width="38%"
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 24px 20px 0",
              verticalAlign: "top",
              width: "38%",
            }}
          >
            <Question>{item.question}</Question>
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0",
              verticalAlign: "top",
            }}
          >
            {item.answer ? <Answer marginTop={0}>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

const BoxedNumberedContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <Section
    style={{
      ...tableStyle,
      border: `1px solid ${colors.border}`,
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={48}
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px 0 20px 20px",
              verticalAlign: "top",
              width: "48px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: index === 0 ? undefined : `1px solid ${colors.border}`,
              padding: "20px",
              verticalAlign: "top",
            }}
          >
            <Question>{item.question}</Question>
            {item.answer ? <Answer>{item.answer}</Answer> : null}
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

const AlternatingBoxedContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <Section key={`${item.question}-${index}`}>
        <Section
          style={{
            ...tableStyle,
            backgroundColor:
              index % 2 === 0 ? colors.surfaceMuted : colors.light,
            borderRadius: "8px",
          }}
        >
          <Fragment>
            <Row>
              <Column
                width={48}
                style={{
                  padding: "20px 0 20px 20px",
                  verticalAlign: "top",
                  width: "48px",
                }}
              >
                <NumberLabel index={index} />
              </Column>
              <Column style={{ padding: "20px", verticalAlign: "top" }}>
                <Question>{item.question}</Question>
                {item.answer ? <Answer>{item.answer}</Answer> : null}
              </Column>
            </Row>
          </Fragment>
        </Section>
        {index < items.length - 1 ? (
          <Section style={{ height: "12px", lineHeight: "12px" }}>
            &zwj;
          </Section>
        ) : null}
      </Section>
    ))}
  </>
);

const CollapsedNumbersContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <Section style={tableStyle}>
    <Fragment>
      {items.map((item, index) => (
        <Row key={`${item.question}-${index}`}>
          <Column
            width={40}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 16px 16px 0",
              verticalAlign: "middle",
              width: "40px",
            }}
          >
            <NumberLabel index={index} />
          </Column>
          <Column
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 0",
              verticalAlign: "middle",
            }}
          >
            <Question>{item.question}</Question>
          </Column>
          <Column
            width={24}
            style={{
              borderTop: `1px solid ${colors.border}`,
              padding: "16px 0 16px 16px",
              textAlign: "right",
              verticalAlign: "middle",
              width: "24px",
            }}
          >
            <ToggleIcon />
          </Column>
        </Row>
      ))}
    </Fragment>
  </Section>
);

const CollapsedIconsContent = ({
  items,
}: {
  items: readonly InternalFaqItem[];
}) => (
  <>
    {items.map((item, index) => (
      <Section key={`${item.question}-${index}`}>
        <Section
          style={{
            ...tableStyle,
            backgroundColor: index === 0 ? colors.surfaceMuted : undefined,
            borderRadius: index === 0 ? "8px" : undefined,
          }}
        >
          <Fragment>
            <Row>
              <Column
                width={36}
                style={{
                  borderTop:
                    index > 1 ? `1px solid ${colors.border}` : undefined,
                  padding: "16px 16px 16px 0",
                  verticalAlign: "top",
                  width: "36px",
                }}
              >
                <ToggleIcon expanded={index === 0} item={item} />
              </Column>
              <Column
                style={{
                  borderTop:
                    index > 1 ? `1px solid ${colors.border}` : undefined,
                  padding: "16px 0",
                  verticalAlign: "top",
                }}
              >
                <Question>{item.question}</Question>
                {index === 0 && item.answer ? (
                  <Answer>{item.answer}</Answer>
                ) : null}
              </Column>
            </Row>
          </Fragment>
        </Section>
      </Section>
    ))}
  </>
);

const CollapsedCtaContent = ({
  ctaHref,
  ctaLabel,
  ctaText,
  items,
}: {
  ctaHref: string;
  ctaLabel: string;
  ctaText: string;
  items: readonly InternalFaqItem[];
}) => (
  <>
    <CollapsedNumbersContent items={items} />
    <Section style={{ height: "24px", lineHeight: "24px" }}>&zwj;</Section>
    <Section
      style={{
        ...tableStyle,
        backgroundColor: colors.surfaceMuted,
        borderRadius: "8px",
      }}
    >
      <Fragment>
        <Row>
          <Column style={{ padding: "16px 20px" }}>
            <span
              style={{
                ...textBase,
                color: colors.muted,
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              {ctaText}
            </span>
          </Column>
          <Column style={{ padding: "16px 20px", textAlign: "right" }}>
            <Link
              href={ctaHref}
              style={{
                ...textBase,
                color: colors.dark,
                fontSize: "14px",
                fontWeight: 600,
                lineHeight: "20px",
                textDecoration: "underline",
              }}
            >
              {ctaLabel}
            </Link>
          </Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const FaqEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style
        dangerouslySetInnerHTML={{
          __html: [
            "@media only screen and (max-width: 599px) {",
            "  .faq-content { padding-left: 24px !important; padding-right: 24px !important; }",
            "}",
          ].join("\n"),
        }}
      />
    </EmailHead>
    <Preview>{preview}</Preview>
    <Body style={{ backgroundColor: colors.canvas, fontFamily, margin: 0 }}>
      <Section style={{ ...tableStyle, backgroundColor: colors.canvas }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              className="faq-content"
              width={600}
              style={{
                backgroundColor: colors.surface,
                maxWidth: "100%",
                padding: "44px 64px",
                width: theme.containerWidth,
              }}
            >
              {children}
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </Body>
  </Html>
);

interface BoxedNumbered_BoxedFaqWithNumberedQuestionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
}

const BoxedNumbered_BoxedFaqWithNumberedQuestionsSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
}: Omit<BoxedNumbered_BoxedFaqWithNumberedQuestionsProps, "theme">) => {
  const items = [
    { answer: a1, question: q1 },
    { answer: a2, question: q2 },
  ];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <BoxedNumberedContent items={items} />
    </>
  );
};

const BoxedNumbered_BoxedFaqWithNumberedQuestions = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
}: BoxedNumbered_BoxedFaqWithNumberedQuestionsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <BoxedNumbered_BoxedFaqWithNumberedQuestionsSection
      a1={a1}
      a2={a2}
      heading={heading}
      q1={q1}
      q2={q2}
    />
  </FaqEmailShell>
);

BoxedNumbered_BoxedFaqWithNumberedQuestions.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs.",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  theme: defaultTheme,
} satisfies BoxedNumbered_BoxedFaqWithNumberedQuestionsProps;

const __BoxedNumbered = BoxedNumbered_BoxedFaqWithNumberedQuestions;

interface BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

const BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsSection =
  ({
    a1 = "This product helps you build beautiful emails quickly and easily.",
    a2 = "We offer flexible pricing plans to suit your needs.",
    a3 = "Yes, we offer customer support by email and live chat.",
    heading = "Frequently asked questions",
    q1 = "What is this product?",
    q2 = "How does pricing work?",
    q3 = "Is there customer support?",
  }: Omit<
    BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps,
    "theme"
  >) => {
    const items = [
      { answer: a1, question: q1 },
      { answer: a2, question: q2 },
      { answer: a3, question: q3 },
    ];
    return (
      <>
        {heading ? <FaqHeading>{heading}</FaqHeading> : null}
        <AlternatingBoxedContent items={items} />
      </>
    );
  };

const BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColors = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsSection
      a1={a1}
      a2={a2}
      a3={a3}
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
    />
  </FaqEmailShell>
);

BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColors.PreviewProps =
  {
    a1: "This product helps you build beautiful emails quickly and easily.",
    a2: "We offer flexible pricing plans to suit your needs.",
    a3: "Yes, we offer customer support by email and live chat.",
    heading: "Frequently asked questions",
    q1: "What is this product?",
    q2: "How does pricing work?",
    q3: "Is there customer support?",
    theme: defaultTheme,
  } satisfies BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps;

const __BoxedAlternating =
  BoxedAlternating_BoxedFaqWithNumbersAndAlternatingBackgroundColors;

interface CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  iconSrc1?: string;
  iconAlt1?: string;
  q2?: string;
  iconSrc2?: string;
  iconAlt2?: string;
  q3?: string;
  iconSrc3?: string;
  iconAlt3?: string;
}

const CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  heading = "Frequently asked questions",
  iconAlt1 = "",
  iconAlt2 = "",
  iconAlt3 = "",
  iconSrc1,
  iconSrc2,
  iconSrc3,
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<
  CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsProps,
  "theme"
>) => {
  const items = [
    { answer: a1, iconAlt: iconAlt1, iconSrc: iconSrc1, question: q1 },
    { iconAlt: iconAlt2, iconSrc: iconSrc2, question: q2 },
    { iconAlt: iconAlt3, iconSrc: iconSrc3, question: q3 },
  ];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <CollapsedIconsContent items={items} />
    </>
  );
};

const CollapsedIcons_CollapsedFaqWithExpandedSectionAndIcons = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  heading = "Frequently asked questions",
  iconAlt1 = "",
  iconAlt2 = "",
  iconAlt3 = "",
  iconSrc1,
  iconSrc2,
  iconSrc3,
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsSection
      a1={a1}
      heading={heading}
      iconAlt1={iconAlt1}
      iconAlt2={iconAlt2}
      iconAlt3={iconAlt3}
      iconSrc1={iconSrc1}
      iconSrc2={iconSrc2}
      iconSrc3={iconSrc3}
      q1={q1}
      q2={q2}
      q3={q3}
    />
  </FaqEmailShell>
);

CollapsedIcons_CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  heading: "Frequently asked questions",
  iconAlt1: "",
  iconAlt2: "",
  iconAlt3: "",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies CollapsedIcons_CollapsedFaqWithExpandedSectionAndIconsProps;

const __CollapsedIcons = CollapsedIcons_CollapsedFaqWithExpandedSectionAndIcons;

interface CollapsedCta_CollapsedFaqWithInlineCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaText?: string;
}

const CollapsedCta_CollapsedFaqWithInlineCtaSection = ({
  ctaHref = "#contact",
  ctaLabel = "Contact us",
  ctaText = "Still have questions?",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<CollapsedCta_CollapsedFaqWithInlineCtaProps, "theme">) => {
  const items = [{ question: q1 }, { question: q2 }, { question: q3 }];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <CollapsedCtaContent
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        ctaText={ctaText}
        items={items}
      />
    </>
  );
};

const CollapsedCta_CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  ctaHref = "#contact",
  ctaLabel = "Contact us",
  ctaText = "Still have questions?",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: CollapsedCta_CollapsedFaqWithInlineCtaProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedCta_CollapsedFaqWithInlineCtaSection
      ctaHref={ctaHref}
      ctaLabel={ctaLabel}
      ctaText={ctaText}
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
    />
  </FaqEmailShell>
);

CollapsedCta_CollapsedFaqWithInlineCta.PreviewProps = {
  ctaHref: "#contact",
  ctaLabel: "Contact us",
  ctaText: "Still have questions?",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies CollapsedCta_CollapsedFaqWithInlineCtaProps;

const __CollapsedCta = CollapsedCta_CollapsedFaqWithInlineCta;

interface CollapsedNumbers_CollapsedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
}

const CollapsedNumbers_CollapsedFaqWithNumbersSection = ({
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
}: Omit<CollapsedNumbers_CollapsedFaqWithNumbersProps, "theme">) => {
  const items = [
    { question: q1 },
    { question: q2 },
    { question: q3 },
    { question: q4 },
  ];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <CollapsedNumbersContent items={items} />
    </>
  );
};

const CollapsedNumbers_CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
}: CollapsedNumbers_CollapsedFaqWithNumbersProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedNumbers_CollapsedFaqWithNumbersSection
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
      q4={q4}
    />
  </FaqEmailShell>
);

CollapsedNumbers_CollapsedFaqWithNumbers.PreviewProps = {
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  q4: "Can I cancel anytime?",
  theme: defaultTheme,
} satisfies CollapsedNumbers_CollapsedFaqWithNumbersProps;

const __CollapsedNumbers = CollapsedNumbers_CollapsedFaqWithNumbers;

interface ExpandedNumbers_ExpandedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

const ExpandedNumbers_ExpandedFaqWithNumbersSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<ExpandedNumbers_ExpandedFaqWithNumbersProps, "theme">) => {
  const items = [
    { answer: a1, question: q1 },
    { answer: a2, question: q2 },
    { answer: a3, question: q3 },
  ];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <ExpandedNumbersContent items={items} />
    </>
  );
};

const ExpandedNumbers_ExpandedFaqWithNumbers = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: ExpandedNumbers_ExpandedFaqWithNumbersProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <ExpandedNumbers_ExpandedFaqWithNumbersSection
      a1={a1}
      a2={a2}
      a3={a3}
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
    />
  </FaqEmailShell>
);

ExpandedNumbers_ExpandedFaqWithNumbers.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs.",
  a3: "Yes, we offer customer support by email and live chat.",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies ExpandedNumbers_ExpandedFaqWithNumbersProps;

const __ExpandedNumbers = ExpandedNumbers_ExpandedFaqWithNumbers;

interface ExpandedOffset_ExpandedFaqWithOffsetAnswersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

const ExpandedOffset_ExpandedFaqWithOffsetAnswersSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<ExpandedOffset_ExpandedFaqWithOffsetAnswersProps, "theme">) => {
  const items = [
    { answer: a1, question: q1 },
    { answer: a2, question: q2 },
    { answer: a3, question: q3 },
  ];
  return (
    <>
      {heading ? <FaqHeading>{heading}</FaqHeading> : null}
      <OffsetAnswersContent items={items} />
    </>
  );
};

const ExpandedOffset_ExpandedFaqWithOffsetAnswers = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: ExpandedOffset_ExpandedFaqWithOffsetAnswersProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <ExpandedOffset_ExpandedFaqWithOffsetAnswersSection
      a1={a1}
      a2={a2}
      a3={a3}
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
    />
  </FaqEmailShell>
);

ExpandedOffset_ExpandedFaqWithOffsetAnswers.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs.",
  a3: "Yes, we offer customer support by email and live chat.",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies ExpandedOffset_ExpandedFaqWithOffsetAnswersProps;

const __ExpandedOffset = ExpandedOffset_ExpandedFaqWithOffsetAnswers;

export interface FaqItem {
  question: string;
  answer?: string;
  icon?: {
    alt?: string;
    src: string;
  };
}

export interface FaqAction {
  href: string;
  label: string;
  text?: string;
}

export interface FaqProps {
  theme?: Parameters<typeof __BoxedNumbered>[0]["theme"];
  heading?: string;
  items?: FaqItem[];
  layout?: "boxed" | "collapsed" | "expanded";
  marker?: "none" | "number" | "icon";
  alternating?: boolean;
  answerPosition?: "stacked" | "offset";
  action?: FaqAction;
}

const toFaqProps = (items: FaqItem[] | undefined) => {
  if (!items) {
    return {};
  }
  return Object.fromEntries(
    items.flatMap((item, index) => {
      const suffix = index + 1;
      return [
        [`q${suffix}`, item.question],
        [`a${suffix}`, item.answer],
        [`iconSrc${suffix}`, item.icon?.src],
        [`iconAlt${suffix}`, item.icon?.alt],
      ];
    })
  );
};

export const Faq = ({
  theme,
  heading,
  items,
  layout = "boxed",
  marker = "number",
  alternating = false,
  answerPosition = "stacked",
  action,
}: FaqProps) => {
  const props = {
    ...toFaqProps(items),
    ctaHref: action?.href,
    ctaLabel: action?.label,
    ctaText: action?.text,
    heading,
    theme,
  };
  if (layout === "collapsed") {
    if (marker === "icon") {
      return <__CollapsedIcons {...props} />;
    }
    if (action) {
      return <__CollapsedCta {...props} />;
    }
    return <__CollapsedNumbers {...props} />;
  }
  if (layout === "expanded") {
    return answerPosition === "offset" ? (
      <__ExpandedOffset {...props} />
    ) : (
      <__ExpandedNumbers {...props} />
    );
  }
  return alternating ? (
    <__BoxedAlternating {...props} />
  ) : (
    <__BoxedNumbered {...props} />
  );
};

Faq.PreviewProps = {
  alternating: false,
  answerPosition: "stacked",
  layout: "boxed",
  marker: "number",
} satisfies FaqProps;
