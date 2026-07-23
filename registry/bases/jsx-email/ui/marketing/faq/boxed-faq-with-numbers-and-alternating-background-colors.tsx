import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  AlternatingBoxedContent,
  FaqEmailShell,
  FaqHeading,
} from "@/registry/bases/jsx-email/ui/marketing/faq/faq-shared";

export interface BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
  q3?: string;
  a3?: string;
}

export const BoxedFaqWithNumbersAndAlternatingBackgroundColorsSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps, "theme">) => {
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

export const BoxedFaqWithNumbersAndAlternatingBackgroundColors = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  a3 = "Yes, we offer customer support by email and live chat.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <BoxedFaqWithNumbersAndAlternatingBackgroundColorsSection
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

BoxedFaqWithNumbersAndAlternatingBackgroundColors.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs.",
  a3: "Yes, we offer customer support by email and live chat.",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies BoxedFaqWithNumbersAndAlternatingBackgroundColorsProps;
