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

export interface TwoColumnsGridProps {
  theme?: TailwindConfig;
  leftContent?: string;
  rightContent?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const TwoColumnsGridSection = ({
  leftContent = "Left column",
  rightContent = "Right column",
  variant = "default",
}: Omit<TwoColumnsGridProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="py-12">
      <Row>
        <Column style={{ width: "50%" }} className="align-top p-3">
          <Text
            className={`m-0 text-base text-foreground ${variant === "slanted-left" ? "text-left" : textAlign}`}
          >
            {leftContent}
          </Text>
        </Column>
        <Column style={{ width: "50%" }} className="align-top p-3">
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

export const TwoColumnsGrid = ({
  theme = defaultTheme,
  leftContent = "Left column",
  rightContent = "Right column",
  variant = "default",
}: TwoColumnsGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>2 Column Grid</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsGridSection
          leftContent={leftContent}
          rightContent={rightContent}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsGrid.PreviewProps = {
  leftContent: "Feature one description with key benefits.",
  rightContent: "Feature two description with key benefits.",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsGridProps;
