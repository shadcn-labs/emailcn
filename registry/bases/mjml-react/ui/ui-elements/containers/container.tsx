import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  containerResponsiveStyles,
  ContainerSection,
} from "@/registry/bases/mjml-react/ui/ui-elements/containers/container-shared";
import type { ContainerMobile } from "@/registry/bases/mjml-react/ui/ui-elements/containers/container-shared";

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
  theme = defaultTheme,
  ...props
}: ContainerProps) => {
  const mobile = props.mobile ?? "gutters";

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>
          {mobile === "flush" ? "Flush on mobile" : "With gutters on mobile"}
        </MjmlPreview>
        <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
        <MjmlStyle>{containerResponsiveStyles}</MjmlStyle>
      </MjmlHead>
      <MjmlBody width={theme.containerWidth}>
        <MjmlWrapper padding="0">
          <MjmlRaw>
            <ContainerSection {...props} mobile={mobile} />
          </MjmlRaw>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

Container.PreviewProps = {
  align: "center",
  maxWidth: "600px",
  mobile: "gutters",
  theme: defaultTheme,
} satisfies ContainerProps;
