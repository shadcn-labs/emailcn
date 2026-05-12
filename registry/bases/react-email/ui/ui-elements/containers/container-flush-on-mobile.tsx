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

export interface ContainerFlushMobileProps {
  theme?: TailwindConfig;
  children?: React.ReactNode;
  maxWidth?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const ContainerFlushMobileSection = ({
  children,
  maxWidth = "600px",
  variant = "default",
}: Omit<ContainerFlushMobileProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className="mobile:px-0">
      <Container style={{ maxWidth }} className={`mx-auto ${textAlign}`}>
        {children}
      </Container>
    </Section>
  );
};

export const ContainerFlushMobile = ({
  theme = defaultTheme,
  children,
  maxWidth = "600px",
  variant = "default",
}: ContainerFlushMobileProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Flush Container</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ContainerFlushMobileSection maxWidth={maxWidth} variant={variant}>
          {children}
        </ContainerFlushMobileSection>
      </Body>
    </Tailwind>
  </Html>
);

ContainerFlushMobile.PreviewProps = {
  children: undefined,
  maxWidth: "600px",
  theme: defaultTheme,
  variant: "default",
} satisfies ContainerFlushMobileProps;
