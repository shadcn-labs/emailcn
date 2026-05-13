/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ContainerGuttersMobileProps {
  theme?: TailwindConfig;
  children?: React.ReactNode;
  maxWidth?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ContainerGuttersMobileSection = ({
  children,
  maxWidth = "600px",
  variant = "default",
}: Omit<ContainerGuttersMobileProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="px-4">
      <Container style={{ maxWidth }} className={`mx-auto ${textAlign}`}>
        {children}
      </Container>
    </Section>
  );
};

export const ContainerGuttersMobile = ({
  theme = defaultTheme,
  children,
  maxWidth = "600px",
  variant = "default",
}: ContainerGuttersMobileProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Gutters Container</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ContainerGuttersMobileSection maxWidth={maxWidth} variant={variant}>
          {children}
        </ContainerGuttersMobileSection>
      </Body>
    </Tailwind>
  </Html>
);

ContainerGuttersMobile.PreviewProps = {
  children: undefined,
  maxWidth: "600px",
  theme: defaultTheme,
  variant: "default",
} satisfies ContainerGuttersMobileProps;
