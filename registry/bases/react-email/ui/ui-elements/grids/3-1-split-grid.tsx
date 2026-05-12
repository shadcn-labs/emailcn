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

export interface ThreeOneSplitGridProps {
  theme?: TailwindConfig;
  leftContent?: string;
  rightContent?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ThreeOneSplitGridSection = ({
  leftContent = "Main content",
  rightContent = "Sidebar",
  variant = "default",
}: Omit<ThreeOneSplitGridProps, "theme">) => (
  <Section className="py-12">
    <Row>
      <Column style={{ width: "75%" }} className="align-top p-3">
        <Text
          className={`m-0 text-base text-foreground ${variant === "slanted-left" ? "text-left" : "text-center"}`}
        >
          {leftContent}
        </Text>
      </Column>
      <Column style={{ width: "25%" }} className="align-top p-3">
        <Text
          className={`m-0 text-base text-foreground ${variant === "slanted-right" ? "text-right" : "text-center"}`}
        >
          {rightContent}
        </Text>
      </Column>
    </Row>
  </Section>
);

export const ThreeOneSplitGrid = ({
  theme = defaultTheme,
  leftContent = "Main content",
  rightContent = "Sidebar",
  variant = "default",
}: ThreeOneSplitGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>3-1 Split Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ThreeOneSplitGridSection
          leftContent={leftContent}
          rightContent={rightContent}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ThreeOneSplitGrid.PreviewProps = {
  leftContent: "Main article content with rich details and media.",
  rightContent: "Sidebar with related links and highlights.",
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeOneSplitGridProps;
