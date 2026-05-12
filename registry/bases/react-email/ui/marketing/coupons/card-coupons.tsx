/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
  Hr,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CardCouponsVariant = "default" | "slanted-left" | "slanted-right";

export interface CardCouponsProps {
  theme?: TailwindConfig;
  heading?: string;
  discount?: string;
  code?: string;
  description?: string;
  expiry?: string;
  variant?: CardCouponsVariant;
}

export const CardCouponsSection = ({
  heading = "Special Offer",
  discount = "20% OFF",
  code = "SAVE20",
  description = "On your first purchase",
  expiry = "Expires in 7 days",
  variant = "default",
}: Omit<CardCouponsProps, "theme">) => {
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
        <Section className="rounded-lg border-2 border-dashed border-border bg-background-muted p-8 text-center">
          {heading ? (
            <Text className="m-0 mb-4 text-lg font-medium text-foreground-muted">
              {heading}
            </Text>
          ) : null}
          <Text className="m-0 mb-4 text-4xl font-bold text-primary">
            {discount}
          </Text>
          <Text className="m-0 mb-6 text-xl font-mono font-bold tracking-widest text-foreground">
            {code}
          </Text>
          <Text className="m-0 mb-2 text-base text-foreground-muted">
            {description}
          </Text>
          <Hr className="border-border my-4" />
          {expiry ? (
            <Text className="m-0 text-sm text-foreground-subtle">{expiry}</Text>
          ) : null}
        </Section>
      </Container>
    </Section>
  );
};

export const CardCoupons = ({
  theme = defaultTheme,
  heading = "Special Offer",
  discount = "20% OFF",
  code = "SAVE20",
  description = "On your first purchase",
  expiry = "Expires in 7 days",
  variant = "default",
}: CardCouponsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{discount}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CardCouponsSection
          code={code}
          description={description}
          discount={discount}
          expiry={expiry}
          heading={heading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CardCoupons.PreviewProps = {
  code: "SAVE20",
  description: "On your first purchase",
  discount: "20% OFF",
  expiry: "Expires in 7 days",
  heading: "Special Offer",
  theme: defaultTheme,
  variant: "default",
} satisfies CardCouponsProps;
