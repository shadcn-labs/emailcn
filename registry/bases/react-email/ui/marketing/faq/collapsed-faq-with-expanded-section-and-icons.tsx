/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CollapsedFaqWithExpandedSectionAndIconsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CollapsedFaqWithExpandedSectionAndIconsProps {
  theme?: TailwindConfig;
  heading?: string;
  iconSrc1?: string;
  iconAlt1?: string;
  q1?: string;
  a1?: string;
  iconSrc2?: string;
  iconAlt2?: string;
  q2?: string;
  iconSrc3?: string;
  iconAlt3?: string;
  q3?: string;
  variant?: CollapsedFaqWithExpandedSectionAndIconsVariant;
}

export const CollapsedFaqWithExpandedSectionAndIconsSection = ({
  heading = "FAQ",
  iconSrc1 = "https://via.placeholder.com/20x20",
  iconAlt1 = "",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  iconSrc2 = "https://via.placeholder.com/20x20",
  iconAlt2 = "",
  q2 = "How does pricing work?",
  iconSrc3 = "https://via.placeholder.com/20x20",
  iconAlt3 = "",
  q3 = "Is there customer support?",
  variant = "default",
}: Omit<CollapsedFaqWithExpandedSectionAndIconsProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container className={`mx-auto max-w-container ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Section className="mb-6 rounded-lg bg-background-muted p-4">
          <Section className="mb-2">
            <Img
              src={iconSrc1}
              alt={iconAlt1}
              width="20"
              height="20"
              className="inline-block mr-2 h-auto object-contain"
            />
            <Text className="m-0 inline-block text-sm font-bold text-foreground">
              {q1}
            </Text>
          </Section>
          <Text className="m-0 ml-8 text-sm leading-relaxed text-foreground-muted">
            {a1}
          </Text>
        </Section>
        <Section className="mb-4">
          <Img
            src={iconSrc2}
            alt={iconAlt2}
            width="20"
            height="20"
            className="inline-block mr-2 h-auto object-contain"
          />
          <Text className="m-0 inline-block text-sm font-medium text-foreground">
            {q2}
          </Text>
        </Section>
        <Section>
          <Img
            src={iconSrc3}
            alt={iconAlt3}
            width="20"
            height="20"
            className="inline-block mr-2 h-auto object-contain"
          />
          <Text className="m-0 inline-block text-sm font-medium text-foreground">
            {q3}
          </Text>
        </Section>
      </Container>
    </Section>
  );
};

export const CollapsedFaqWithExpandedSectionAndIcons = ({
  theme = defaultTheme,
  heading = "FAQ",
  iconSrc1 = "https://via.placeholder.com/20x20",
  iconAlt1 = "",
  q1 = "What is this product?",
  a1 = "This product helps you build beautiful emails.",
  iconSrc2 = "https://via.placeholder.com/20x20",
  iconAlt2 = "",
  q2 = "How does pricing work?",
  iconSrc3 = "https://via.placeholder.com/20x20",
  iconAlt3 = "",
  q3 = "Is there customer support?",
  variant = "default",
}: CollapsedFaqWithExpandedSectionAndIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
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
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CollapsedFaqWithExpandedSectionAndIcons.PreviewProps = {
  a1: "This product helps you build beautiful emails quickly and easily.",
  heading: "FAQ",
  iconAlt1: "Q",
  iconAlt2: "Q",
  iconAlt3: "Q",
  iconSrc1: "https://via.placeholder.com/20x20",
  iconSrc2: "https://via.placeholder.com/20x20",
  iconSrc3: "https://via.placeholder.com/20x20",
  q1: "What is this product?",
  q2: "How does pricing work?",
  q3: "Is there customer support?",
  theme: defaultTheme,
  variant: "default",
} satisfies CollapsedFaqWithExpandedSectionAndIconsProps;
