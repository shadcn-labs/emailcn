import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  CollapsedCtaContent,
  FaqEmailShell,
  FaqHeading,
} from "@/registry/bases/jsx-email/ui/marketing/faq/faq-shared";

export interface CollapsedFaqWithInlineCtaProps {
  theme?: EmailThemeTokens;
  heading?: string;
  q1?: string;
  q2?: string;
  q3?: string;
  ctaHref?: string;
  ctaLabel?: string;
  ctaText?: string;
}

export const CollapsedFaqWithInlineCtaSection = ({
  ctaHref = "#contact",
  ctaLabel = "Contact us",
  ctaText = "Still have questions?",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: Omit<CollapsedFaqWithInlineCtaProps, "theme">) => {
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

export const CollapsedFaqWithInlineCta = ({
  theme = defaultTheme,
  ctaHref = "#contact",
  ctaLabel = "Contact us",
  ctaText = "Still have questions?",
  heading = "Frequently asked questions",
  q1 = "What is this product?",
  q2 = "How does pricing work?",
  q3 = "Is there customer support?",
}: CollapsedFaqWithInlineCtaProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedFaqWithInlineCtaSection
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

CollapsedFaqWithInlineCta.PreviewProps = {
  ctaHref: "#contact",
  ctaLabel: "Contact us",
  ctaText: "Still have questions?",
  heading: "Frequently asked questions",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies CollapsedFaqWithInlineCtaProps;
