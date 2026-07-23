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
      <div style={{ height: "100px" }} />
      <div
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
        <div style={{ paddingBottom: "48px", paddingTop: "48px" }}>
          <div style={{ paddingBottom: "16px", paddingTop: "16px" }}>
            <p
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
            </p>
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }} />
    </>
  );
};
