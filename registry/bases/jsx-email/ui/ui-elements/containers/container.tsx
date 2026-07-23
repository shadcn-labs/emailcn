import { Body, Head, Html, Preview } from "jsx-email";
import type { ReactNode } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";
import {
  containerResponsiveStyles,
  ContainerSection,
} from "@/registry/bases/jsx-email/ui/ui-elements/containers/container-shared";
import type { ContainerMobile } from "@/registry/bases/jsx-email/ui/ui-elements/containers/container-shared";

export interface ContainerProps {
  align?: "center" | "left" | "right";
  children?: ReactNode;
  content?: ReactNode;
  maxWidth?: string;
  mobile?: ContainerMobile;
  theme?: EmailThemeTokens;
}

export { ContainerSection };

export const Container = ({
  theme: _theme = defaultTheme,
  ...props
}: ContainerProps) => {
  const mobile = props.mobile ?? "gutters";

  return (
    <Html>
      <Head>
        <DefaultFonts />
        <style>{containerResponsiveStyles}</style>
      </Head>
      <Preview>
        {mobile === "flush" ? "Flush on mobile" : "With gutters on mobile"}
      </Preview>
      <Body style={{ margin: 0 }}>
        <ContainerSection {...props} mobile={mobile} />
      </Body>
    </Html>
  );
};

Container.PreviewProps = {
  align: "center",
  maxWidth: "600px",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies ContainerProps;
