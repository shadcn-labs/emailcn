import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CollapsedIconsContent,
  FaqEmailShell,
  FaqHeading,
} from "@/registry/bases/mjml-react/ui/marketing/faq/faq-shared";

export interface CollapsedFaqWithExpandedSectionAndIconsProps {
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

export const CollapsedFaqWithExpandedSectionAndIconsSection = ({
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
}: Omit<CollapsedFaqWithExpandedSectionAndIconsProps, "theme">) => {
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

export const CollapsedFaqWithExpandedSectionAndIcons = ({
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
}: CollapsedFaqWithExpandedSectionAndIconsProps) => (
  <FaqEmailShell preview={heading} theme={theme}>
    <CollapsedFaqWithExpandedSectionAndIconsSection
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

CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  heading: "Frequently asked questions",
  iconAlt1: "",
  iconAlt2: "",
  iconAlt3: "",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
} satisfies CollapsedFaqWithExpandedSectionAndIconsProps;
