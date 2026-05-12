/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface OneColumnGridProps {
  theme?: TailwindConfig;
  content?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const OneColumnGridSection = ({
  content = "Full width content",
  variant = "default",
}: Omit<OneColumnGridProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        <Column style={{ width: "100%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {content}
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export const OneColumnGrid = ({
  theme = defaultTheme,
  content = "Full width content",
  variant = "default",
}: OneColumnGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>1 Column Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OneColumnGridSection content={content} variant={variant} />
      </Body>
    </Tailwind>
  </Html>
);

OneColumnGrid.PreviewProps = {
  content: "Single column full-width layout for headers or hero sections.",
  theme: defaultTheme,
  variant: "default",
} satisfies OneColumnGridProps;
