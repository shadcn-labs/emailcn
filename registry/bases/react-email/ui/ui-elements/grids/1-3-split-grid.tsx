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

export interface OneThreeSplitGridProps {
  theme?: TailwindConfig;
  leftContent?: string;
  rightContent?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const OneThreeSplitGridSection = ({
  leftContent = "Sidebar",
  rightContent = "Main content area",
  variant = "default",
}: Omit<OneThreeSplitGridProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        <Column style={{ width: "25%" }} className="align-top p-3">
          <Text
            className={`m-0 text-base text-foreground ${variant === "slanted-left" ? "text-left" : textAlign}`}
          >
            {leftContent}
          </Text>
        </Column>
        <Column style={{ width: "75%" }} className="align-top p-3">
          <Text
            className={`m-0 text-base text-foreground ${variant === "slanted-right" ? "text-right" : textAlign}`}
          >
            {rightContent}
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export const OneThreeSplitGrid = ({
  theme = defaultTheme,
  leftContent = "Sidebar",
  rightContent = "Main content area",
  variant = "default",
}: OneThreeSplitGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>1-3 Split Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <OneThreeSplitGridSection
          leftContent={leftContent}
          rightContent={rightContent}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

OneThreeSplitGrid.PreviewProps = {
  leftContent: "Navigation sidebar links.",
  rightContent: "Primary content area with detailed information.",
  theme: defaultTheme,
  variant: "default",
} satisfies OneThreeSplitGridProps;
