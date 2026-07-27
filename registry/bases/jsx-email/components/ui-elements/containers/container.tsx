import {
  Section,
  Text,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "jsx-email";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type ContainerMobile = "flush" | "gutters";

const containerResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .container-mobile-gutters {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }
  }
`;

const ContainerSection = ({
  align = "center",
  children,
  content,
  maxWidth = "600px",
  mobile = "gutters",
}: {
  align?: "center" | "left" | "right";
  children?: ReactNode;
  content?: ReactNode;
  maxWidth?: string;
  mobile?: ContainerMobile;
}) => {
  const label =
    children ??
    content ??
    (mobile === "flush" ? "Flush on mobile" : "With gutters on mobile");
  return (
    <>
      <Section style={{ height: "100px" }} />
      <Section
        className={
          mobile === "gutters" ? "container-mobile-gutters" : undefined
        }
        style={{
          backgroundColor: "#fffffe",
          marginLeft: "auto",
          marginRight: "auto",
          maxWidth,
        }}
      >
        <Section style={{ paddingBottom: "48px", paddingTop: "48px" }}>
          <Section style={{ paddingBottom: "16px", paddingTop: "16px" }}>
            <Text
              style={{
                color: "#030712",
                fontFamily:
                  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "24px",
                margin: 0,
                textAlign: align,
              }}
            >
              {label}
            </Text>
          </Section>
        </Section>
      </Section>
      <Section style={{ height: "100px" }} />
    </>
  );
};

interface Container_ContainerProps {
  align?: "center" | "left" | "right";
  children?: ReactNode;
  content?: ReactNode;
  maxWidth?: string;
  mobile?: ContainerMobile;
  theme?: EmailTheme;
}

const Container_Container = ({
  theme = defaultTheme,
  ...props
}: Container_ContainerProps) => {
  const mobile = props.mobile ?? "gutters";
  return (
    <Html>
      <EmailHead>
        <DefaultFonts />
        <style>{containerResponsiveStyles}</style>
      </EmailHead>
      <Preview>
        {mobile === "flush" ? "Flush on mobile" : "With gutters on mobile"}
      </Preview>
      <EmailTailwind theme={theme}>
        <Body className="m-0">
          <ContainerSection {...props} mobile={mobile} />
        </Body>
      </EmailTailwind>
    </Html>
  );
};

Container_Container.PreviewProps = {
  align: "center",
  maxWidth: "600px",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies Container_ContainerProps;

const __Container = Container_Container;

export interface ContainerProps {
  theme?: Parameters<typeof __Container>[0]["theme"];
  children?: Parameters<typeof __Container>[0]["children"];
  maxWidth?: string;
  align?: "left" | "center" | "right";
  mobile?: "flush" | "gutters";
}

export const Container = (props: ContainerProps) => <__Container {...props} />;

Container.PreviewProps = {
  mobile: "gutters",
} satisfies ContainerProps;
