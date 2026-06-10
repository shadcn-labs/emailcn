/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import { Body, Head, Html, Img, Preview, Section, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type FullWidthImageVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthImageProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  variant?: FullWidthImageVariant;
}

export const FullWidthImageSection = ({
  imageSrc = "https://static.photos/nature/600x400/2",
  imageAlt = "",
  variant = "default",
}: Omit<FullWidthImageProps, "theme">) => {
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
    <Section className={`bg-background py-8 ${getVariantClass()}`}>
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="600"
          height="400"
          className="w-full h-auto rounded-lg object-cover"
        />
      </Section>
    </Section>
  );
};

export const FullWidthImage = ({
  theme = defaultTheme,
  imageSrc = "https://static.photos/nature/600x400/3",
  imageAlt = "",
  variant = "default",
}: FullWidthImageProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Image</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthImageSection
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthImage.PreviewProps = {
  imageAlt: "Full width image",
  imageSrc: "https://static.photos/nature/600x400/4",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageProps;
