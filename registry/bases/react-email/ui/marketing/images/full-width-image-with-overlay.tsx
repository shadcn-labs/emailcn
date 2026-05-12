/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
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

export type FullWidthImageWithOverlayVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface FullWidthImageWithOverlayProps {
  theme?: TailwindConfig;
  imageSrc?: string;
  imageAlt?: string;
  overlayText?: string;
  variant?: FullWidthImageWithOverlayVariant;
}

export const FullWidthImageWithOverlaySection = ({
  imageSrc = "https://via.placeholder.com/600x400/1a1a2e/ffffff",
  imageAlt = "",
  overlayText = "Hero Title",
  variant = "default",
}: Omit<FullWidthImageWithOverlayProps, "theme">) => {
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
      <Section
        className={`relative max-w-container mx-auto ${getUnskewClass()}`}
      >
        <Img
          src={imageSrc}
          alt={imageAlt}
          width="600"
          height="400"
          className="w-full h-auto rounded-lg object-cover"
        />
        {overlayText ? (
          <Section className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
            <Text className="m-0 text-center text-2xl font-bold text-white">
              {overlayText}
            </Text>
          </Section>
        ) : null}
      </Section>
    </Section>
  );
};

export const FullWidthImageWithOverlay = ({
  theme = defaultTheme,
  imageSrc = "https://via.placeholder.com/600x400/1a1a2e/ffffff",
  imageAlt = "",
  overlayText = "Hero Title",
  variant = "default",
}: FullWidthImageWithOverlayProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{overlayText}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FullWidthImageWithOverlaySection
          imageAlt={imageAlt}
          imageSrc={imageSrc}
          overlayText={overlayText}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FullWidthImageWithOverlay.PreviewProps = {
  imageAlt: "Hero image",
  imageSrc: "https://via.placeholder.com/600x400/1a1a2e/ffffff",
  overlayText: "Hero Title",
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthImageWithOverlayProps;
