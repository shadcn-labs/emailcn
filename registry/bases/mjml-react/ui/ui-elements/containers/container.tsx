import {
  MjmlColumn,
  MjmlGroup,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

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
      <MjmlSection padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="100px" padding="0" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection padding="0">
        <MjmlGroup
          cssClass={
            mobile === "gutters" ? "container-mobile-gutters" : undefined
          }
          width={maxWidth}
        >
          <MjmlColumn
            backgroundColor="#fffffe"
            padding="48px 0"
            verticalAlign="middle"
          >
            <MjmlText
              align={align}
              color="#030712"
              fontFamily='Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif'
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              padding="16px 24px"
            >
              {label}
            </MjmlText>
          </MjmlColumn>
        </MjmlGroup>
      </MjmlSection>
      <MjmlSection padding="0">
        <MjmlColumn padding="0">
          <MjmlSpacer height="100px" padding="0" />
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

interface Container_ContainerProps {
  align?: "center" | "left" | "right";
  children?: ReactNode;
  content?: ReactNode;
  maxWidth?: string;
  mobile?: ContainerMobile;
  theme?: EmailThemeTokens;
}

const Container_Container = ({
  theme = defaultTheme,
  ...props
}: Container_ContainerProps) => {
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
          <ContainerSection {...props} mobile={mobile} />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
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
