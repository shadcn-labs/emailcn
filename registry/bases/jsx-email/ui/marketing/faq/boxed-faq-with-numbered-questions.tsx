import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  BoxedNumberedContent,
  FaqEmailShell,
  FaqHeading,
} from "@/registry/bases/jsx-email/ui/marketing/faq/faq-shared";

export interface BoxedFaqWithNumberedQuestionsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  a1?: string;
  q2?: string;
  a2?: string;
}

export const BoxedFaqWithNumberedQuestionsSection = ({
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
}: Omit<BoxedFaqWithNumberedQuestionsProps, "theme">) => {
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

export const BoxedFaqWithNumberedQuestions = ({
  theme = defaultTheme,
  a1 = "This product helps you build beautiful emails quickly and easily.",
  a2 = "We offer flexible pricing plans to suit your needs.",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
}: BoxedFaqWithNumberedQuestionsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <BoxedFaqWithNumberedQuestionsSection
      a1={a1}
      a2={a2}
      heading={heading}
      q1={q1}
      q2={q2}
    />
  </FaqEmailShell>
);

BoxedFaqWithNumberedQuestions.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  a2: "We offer flexible pricing plans to suit your needs.",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  theme: defaultTheme,
} satisfies BoxedFaqWithNumberedQuestionsProps;
