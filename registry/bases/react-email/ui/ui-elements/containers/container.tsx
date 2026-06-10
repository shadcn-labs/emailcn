/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Container as EmailContainer,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export interface ContainerProps {
  theme?: TailwindConfig;
  children?: React.ReactNode;
  maxWidth?: string;
  mobile?: "gutters" | "flush";
  align?: "left" | "center" | "right";
}

export const ContainerSection = ({
  children,
  maxWidth = "600px",
  mobile = "gutters",
  align = "center",
}: Omit<ContainerProps, "theme">) => {
  const alignClass =
    align === "left"
      ? "text-left"
      : align === "right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={mobile === "flush" ? "px-0" : "px-4"}>
      <EmailContainer style={{ maxWidth }} className={`mx-auto ${alignClass}`}>
        {children}
      </EmailContainer>
    </Section>
  );
};

export const Container = ({
  theme = defaultTheme,
  children,
  maxWidth = "600px",
  mobile = "gutters",
  align = "center",
}: ContainerProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Container</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ContainerSection maxWidth={maxWidth} mobile={mobile} align={align}>
          {children}
        </ContainerSection>
      </Body>
    </Tailwind>
  </Html>
);

Container.PreviewProps = {
  align: "center",
  children: undefined,
  maxWidth: "600px",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies ContainerProps;
