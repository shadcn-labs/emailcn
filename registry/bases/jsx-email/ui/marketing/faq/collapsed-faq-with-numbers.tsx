import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  CollapsedNumbersContent,
  FaqEmailShell,
  FaqHeading,
} from "@/registry/bases/jsx-email/ui/marketing/faq/faq-shared";

export interface CollapsedFaqWithNumbersProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  q4?: string;
}

export const CollapsedFaqWithNumbersSection = ({
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
}: Omit<CollapsedFaqWithNumbersProps, "theme">) => {
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

export const CollapsedFaqWithNumbers = ({
  theme = defaultTheme,
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
  q4 = "Can I cancel anytime?",
}: CollapsedFaqWithNumbersProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedFaqWithNumbersSection
      heading={heading}
      q1={q1}
      q2={q2}
      q3={q3}
      q4={q4}
    />
  </FaqEmailShell>
);

CollapsedFaqWithNumbers.PreviewProps = {
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  q4: "Can I cancel anytime?",
  theme: defaultTheme,
} satisfies CollapsedFaqWithNumbersProps;
