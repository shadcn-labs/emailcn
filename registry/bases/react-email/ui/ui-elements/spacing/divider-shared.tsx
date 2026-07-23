import type { CSSProperties, ReactNode } from "react";
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";

export type DividerVariant = "center" | "left" | "right";

export const dividerColors = {
  border: "#e5e7eb",
  muted: "#6b7280",
  mutedBackground: "#f3f4f6",
  surface: "#ffffff",
  text: "#111827",
  white: "#ffffff",
} as const;

export const dividerTextStyle: CSSProperties = {
  color: dividerColors.text,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontSize: "14px",
  lineHeight: "20px",
  margin: 0,
};

export const dividerButtonStyle: CSSProperties = {
  ...dividerTextStyle,
  backgroundColor: dividerColors.text,
  borderRadius: "6px",
  color: dividerColors.white,
  display: "inline-block",
  fontSize: "12px",
  fontWeight: 500,
  lineHeight: "18px",
  padding: "8px 16px",
  textDecoration: "none",
  whiteSpace: "nowrap",
};

const dividerContentPadding: Record<DividerVariant, string> = {
  center: "0 16px",
  left: "0 16px 0 0",
  right: "0 0 0 16px",
};

const HorizontalRule = () => (
  <div
    style={{
      backgroundColor: dividerColors.border,
      fontSize: 0,
      height: "1px",
      lineHeight: "1px",
      width: "100%",
    }}
  >
    &zwj;
  </div>
);

export const DividerFrame = ({
  children,
  variant = "center",
}: {
  children: ReactNode;
  variant?: DividerVariant;
}) => {
  const showLeftRule = variant !== "left";
  const showRightRule = variant !== "right";
  const contentPadding = dividerContentPadding[variant];

  return (
    <div style={{ padding: "24px 0" }}>
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ borderCollapse: "collapse", width: "100%" }}
        width="100%"
      >
        <tbody>
          <tr>
            {showLeftRule ? (
              <td style={{ verticalAlign: "middle", width: "50%" }}>
                <HorizontalRule />
              </td>
            ) : null}
            <td
              style={{
                padding: contentPadding,
                verticalAlign: "middle",
                whiteSpace: "nowrap",
                width: "1%",
              }}
            >
              {children}
            </td>
            {showRightRule ? (
              <td style={{ verticalAlign: "middle", width: "50%" }}>
                <HorizontalRule />
              </td>
            ) : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export const LineDividerSection = () => (
  <div style={{ padding: "24px 0" }}>
    <HorizontalRule />
  </div>
);

export const VerticalSpacerSection = ({ height = 24 }: { height?: number }) => (
  <div
    style={{ fontSize: 0, height: `${height}px`, lineHeight: `${height}px` }}
  >
    &zwj;
  </div>
);

export const SpacingEmailShell = ({
  children,
  preview,
  theme,
}: {
  children: ReactNode;
  preview: string;
  theme: TailwindConfig;
}) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{preview}</Preview>
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: dividerColors.surface, margin: 0 }}>
        <Container style={{ margin: "0 auto", maxWidth: "600px" }}>
          {children}
        </Container>
      </Body>
    </Tailwind>
  </Html>
);
