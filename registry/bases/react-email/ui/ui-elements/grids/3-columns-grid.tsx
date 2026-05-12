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

export interface ThreeColumnsGridProps {
  theme?: TailwindConfig;
  col1?: string;
  col2?: string;
  col3?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ThreeColumnsGridSection = ({
  col1 = "Column 1",
  col2 = "Column 2",
  col3 = "Column 3",
  variant = "default",
}: Omit<ThreeColumnsGridProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        <Column style={{ width: "33.33%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col1}
          </Text>
        </Column>
        <Column style={{ width: "33.33%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col2}
          </Text>
        </Column>
        <Column style={{ width: "33.33%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col3}
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export const ThreeColumnsGrid = ({
  theme = defaultTheme,
  col1 = "Column 1",
  col2 = "Column 2",
  col3 = "Column 3",
  variant = "default",
}: ThreeColumnsGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>3 Column Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ThreeColumnsGridSection
          col1={col1}
          col2={col2}
          col3={col3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

ThreeColumnsGrid.PreviewProps = {
  col1: "Feature one",
  col2: "Feature two",
  col3: "Feature three",
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsGridProps;
