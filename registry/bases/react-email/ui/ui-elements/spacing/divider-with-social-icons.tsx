/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface DividerWithSocialIconsProps {
  theme?: TailwindConfig;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithSocialIconsSection = ({
  variant = "default",
}: Omit<DividerWithSocialIconsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-6">
      <div className="flex items-center">
        <Hr className="flex-1 border-border" />
        <Text
          className={`mx-4 m-0 text-lg tracking-[8px] whitespace-nowrap ${textAlign}`}
        >
          {"\u24D0 \u24B6 \u24C8 \u24CE"}
        </Text>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithSocialIcons = ({
  theme = defaultTheme,
  variant = "default",
}: DividerWithSocialIconsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>—</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithSocialIconsSection variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithSocialIcons.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithSocialIconsProps;
