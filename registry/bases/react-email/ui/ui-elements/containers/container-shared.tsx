import type { ReactNode } from "react";
import { Section, Text } from "react-email";

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
