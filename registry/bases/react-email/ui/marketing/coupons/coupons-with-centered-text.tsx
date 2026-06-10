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
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CouponsWithCenteredTextVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponsWithCenteredTextProps {
  theme?: TailwindConfig;
  heading?: string;
  discount?: string;
  code?: string;
  description?: string;
  variant?: CouponsWithCenteredTextVariant;
}

export const CouponsWithCenteredTextSection = ({
  heading = "Your Coupon",
  discount = "15% OFF",
  code = "WELCOME15",
  description = "Welcome discount for new customers",
  variant = "default",
}: Omit<CouponsWithCenteredTextProps, "theme">) => {
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
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        {heading ? (
          <Text className="m-0 mb-4 text-lg font-medium text-foreground-muted">
            {heading}
          </Text>
        ) : null}
        <Text className="m-0 mb-4 text-4xl font-bold text-primary">
          {discount}
        </Text>
        <Text className="m-0 mb-2 text-base text-foreground-muted">
          {description}
        </Text>
        <Section className="mt-6 inline-block rounded-md bg-background-muted px-8 py-4">
          <Text className="m-0 text-xl font-mono font-bold tracking-widest text-foreground">
            {code}
          </Text>
        </Section>
      </Container>
    </Section>
  );
};

export const CouponsWithCenteredText = ({
  theme = defaultTheme,
  heading = "Your Coupon",
  discount = "15% OFF",
  code = "WELCOME15",
  description = "Welcome discount for new customers",
  variant = "default",
}: CouponsWithCenteredTextProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{discount}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CouponsWithCenteredTextSection
          code={code}
          description={description}
          discount={discount}
          heading={heading}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CouponsWithCenteredText.PreviewProps = {
  code: "WELCOME15",
  description: "Welcome discount for new customers",
  discount: "15% OFF",
  heading: "Your Coupon",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithCenteredTextProps;
