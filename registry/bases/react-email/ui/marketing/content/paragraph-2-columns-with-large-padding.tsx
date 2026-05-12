/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
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

export type Paragraph2ColumnsWithLargePaddingVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface Paragraph2ColumnsWithLargePaddingProps {
  theme?: TailwindConfig;
  column1?: string;
  column2?: string;
  variant?: Paragraph2ColumnsWithLargePaddingVariant;
}

export const Paragraph2ColumnsWithLargePaddingSection = ({
  column1 = "This is the first column of a two-column paragraph layout with large padding.",
  column2 = "This is the second column of a two-column paragraph layout with large padding.",
  variant = "default",
}: Omit<Paragraph2ColumnsWithLargePaddingProps, "theme">) => {
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
        <Row>
          <Column className="w-1/2 pr-4 align-top">
            <Text className="m-0 text-base leading-relaxed text-foreground-muted">
              {column1}
            </Text>
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Text className="m-0 text-base leading-relaxed text-foreground-muted">
              {column2}
            </Text>
          </Column>
        </Row>
      </Container>
    </Section>
  );
};

export const Paragraph2ColumnsWithLargePadding = ({
  theme = defaultTheme,
  column1 = "This is the first column of a two-column paragraph layout with large padding.",
  column2 = "This is the second column of a two-column paragraph layout with large padding.",
  variant = "default",
}: Paragraph2ColumnsWithLargePaddingProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Columns</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <Paragraph2ColumnsWithLargePaddingSection
          column1={column1}
          column2={column2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

Paragraph2ColumnsWithLargePadding.PreviewProps = {
  column1:
    "This is the first column of a two-column paragraph layout with large padding.",
  column2:
    "This is the second column of a two-column paragraph layout with large padding.",
  theme: defaultTheme,
  variant: "default",
} satisfies Paragraph2ColumnsWithLargePaddingProps;
