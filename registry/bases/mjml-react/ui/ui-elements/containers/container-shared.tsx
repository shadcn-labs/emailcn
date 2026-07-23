import {
  MjmlColumn,
  MjmlGroup,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

export type ContainerMobile = "flush" | "gutters";

export const containerResponsiveStyles = `
  @media only screen and (max-width: 599px) {
    .container-mobile-gutters {
      margin-left: 24px !important;
      margin-right: 24px !important;
    }
  }
`;

export const ContainerSection = ({
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
