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

export interface FourColumnsGridProps {
  theme?: TailwindConfig;
  col1?: string;
  col2?: string;
  col3?: string;
  col4?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const FourColumnsGridSection = ({
  col1 = "Col 1",
  col2 = "Col 2",
  col3 = "Col 3",
  col4 = "Col 4",
  variant = "default",
}: Omit<FourColumnsGridProps, "theme">) => {
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
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col1}
          </Text>
        </Column>
        <Column style={{ width: "25%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col2}
          </Text>
        </Column>
        <Column style={{ width: "25%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col3}
          </Text>
        </Column>
        <Column style={{ width: "25%" }} className="align-top p-3">
          <Text className={`m-0 text-base text-foreground ${textAlign}`}>
            {col4}
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export const FourColumnsGrid = ({
  theme = defaultTheme,
  col1 = "Col 1",
  col2 = "Col 2",
  col3 = "Col 3",
  col4 = "Col 4",
  variant = "default",
}: FourColumnsGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>4 Column Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <FourColumnsGridSection
          col1={col1}
          col2={col2}
          col3={col3}
          col4={col4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

FourColumnsGrid.PreviewProps = {
  col1: "Product",
  col2: "Price",
  col3: "Quantity",
  col4: "Total",
  theme: defaultTheme,
  variant: "default",
} satisfies FourColumnsGridProps;
