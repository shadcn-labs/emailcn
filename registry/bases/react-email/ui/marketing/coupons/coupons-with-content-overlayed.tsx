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

export type CouponsWithContentOverlayedVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CouponsWithContentOverlayedProps {
  theme?: TailwindConfig;
  discount?: string;
  code?: string;
  description?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: CouponsWithContentOverlayedVariant;
}

export const CouponsWithContentOverlayedSection = ({
  discount = "30% OFF",
  code = "FLASH30",
  description = "Flash sale - limited time only",
  backgroundSrc = "https://static.photos/city/600x400/2",
  backgroundAlt = "",
  variant = "default",
}: Omit<CouponsWithContentOverlayedProps, "theme">) => {
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
        <Section className="relative overflow-hidden rounded-lg">
          <Img
            src={backgroundSrc}
            alt={backgroundAlt}
            width="600"
            height="400"
            className="w-full h-auto object-cover"
          />
          <Section className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-8 text-center">
            <Text className="m-0 mb-2 text-4xl font-bold text-white">
              {discount}
            </Text>
            <Text className="m-0 mb-4 text-lg text-white/80">
              {description}
            </Text>
            <Section className="inline-block rounded-md bg-white/20 px-8 py-3 backdrop-blur-sm">
              <Text className="m-0 text-xl font-mono font-bold tracking-widest text-white">
                {code}
              </Text>
            </Section>
          </Section>
        </Section>
      </Container>
    </Section>
  );
};

export const CouponsWithContentOverlayed = ({
  theme = defaultTheme,
  discount = "30% OFF",
  code = "FLASH30",
  description = "Flash sale - limited time only",
  backgroundSrc = "https://static.photos/city/600x400/3",
  backgroundAlt = "",
  variant = "default",
}: CouponsWithContentOverlayedProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{discount}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CouponsWithContentOverlayedSection
          backgroundAlt={backgroundAlt}
          backgroundSrc={backgroundSrc}
          code={code}
          description={description}
          discount={discount}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CouponsWithContentOverlayed.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://static.photos/city/600x400/4",
  code: "FLASH30",
  description: "Flash sale - limited time only",
  discount: "30% OFF",
  theme: defaultTheme,
  variant: "default",
} satisfies CouponsWithContentOverlayedProps;
