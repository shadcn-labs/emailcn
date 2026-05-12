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

export interface DividerWithIconProps {
  theme?: TailwindConfig;
  icon?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const DividerWithIconSection = ({
  icon = "\u2728",
  variant = "default",
}: Omit<DividerWithIconProps, "theme">) => {
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
        <Text className={`mx-4 m-0 text-lg whitespace-nowrap ${textAlign}`}>
          {icon}
        </Text>
        <Hr className="flex-1 border-border" />
      </div>
    </Section>
  );
};

export const DividerWithIcon = ({
  theme = defaultTheme,
  icon = "\u2728",
  variant = "default",
}: DividerWithIconProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>—</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <DividerWithIconSection icon={icon} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

DividerWithIcon.PreviewProps = {
  icon: "\u2728",
  theme: defaultTheme,
  variant: "default",
} satisfies DividerWithIconProps;
