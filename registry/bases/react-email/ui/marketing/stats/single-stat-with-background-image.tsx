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

export type SingleStatWithBackgroundImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface SingleStatWithBackgroundImageProps {
  theme?: TailwindConfig;
  stat?: string;
  statLabel?: string;
  backgroundSrc?: string;
  backgroundAlt?: string;
  variant?: SingleStatWithBackgroundImageVariant;
}

export const SingleStatWithBackgroundImageSection = ({
  stat = "10,000+",
  statLabel = "Happy Customers",
  backgroundSrc = "https://static.photos/city/600x300/2",
  backgroundAlt = "",
  variant = "default",
}: Omit<SingleStatWithBackgroundImageProps, "theme">) => {
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
            height="300"
            className="w-full h-auto object-cover"
          />
          <Section className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
            <Text className="m-0 text-4xl font-bold text-white">{stat}</Text>
            {statLabel ? (
              <Text className="mt-2 mb-0 text-lg text-white/80">
                {statLabel}
              </Text>
            ) : null}
          </Section>
        </Section>
      </Container>
    </Section>
  );
};

export const SingleStatWithBackgroundImage = ({
  theme = defaultTheme,
  stat = "10,000+",
  statLabel = "Happy Customers",
  backgroundSrc = "https://static.photos/city/600x300/3",
  backgroundAlt = "",
  variant = "default",
}: SingleStatWithBackgroundImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{stat}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <SingleStatWithBackgroundImageSection
          backgroundAlt={backgroundAlt}
          backgroundSrc={backgroundSrc}
          stat={stat}
          statLabel={statLabel}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

SingleStatWithBackgroundImage.PreviewProps = {
  backgroundAlt: "Background",
  backgroundSrc: "https://static.photos/city/600x300/4",
  stat: "10,000+",
  statLabel: "Happy Customers",
  theme: defaultTheme,
  variant: "default",
} satisfies SingleStatWithBackgroundImageProps;
