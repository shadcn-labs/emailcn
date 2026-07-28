import {
  Body,
  Column,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { EmailTailwind } from "@/registry/bases/jsx-email/themes/email-theme";
import type { EmailTheme } from "@/registry/bases/jsx-email/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

export type GridVariant =
  | "one-column"
  | "two-columns"
  | "one-three-split"
  | "three-one-split"
  | "three-columns"
  | "four-columns";

export type GridAlign = "center" | "left" | "right";

export interface GridProps {
  align?: GridAlign;
  cells?: string[];
  flush?: boolean;
  gap?: boolean;
  reverse?: boolean;
  theme?: EmailTheme;
  variant?: GridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const columnWidths: Record<
  GridVariant,
  { gap: readonly number[]; joined: readonly number[] }
> = {
  "four-columns": {
    gap: [120, 120, 120, 120],
    joined: [138, 138, 138, 138],
  },
  "one-column": { gap: [552], joined: [552] },
  "one-three-split": { gap: [126, 402], joined: [138, 414] },
  "three-columns": { gap: [168, 168, 168], joined: [184, 184, 184] },
  "three-one-split": { gap: [402, 126], joined: [414, 138] },
  "two-columns": { gap: [264, 264], joined: [276, 276] },
};

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .emailcn-grid-row { display: table !important; width: 100% !important; }
    .emailcn-grid-cell { display: block !important; width: 100% !important; }
    .emailcn-grid-gap {
      display: block !important;
      line-height: 24px !important;
      width: 100% !important;
    }
    .emailcn-grid-reverse-gap { display: none !important; }
    .emailcn-grid-reverse-footer { display: table-footer-group !important; }
    .emailcn-grid-reverse-header { display: table-header-group !important; }
    .emailcn-grid-reverse-caption { display: table-caption !important; }
    .emailcn-grid-reverse-spacing { margin-bottom: 24px !important; }
    .emailcn-grid-joined {
      border-left-width: 1px !important;
      border-top-width: 0 !important;
    }
    .emailcn-grid-joined-reverse {
      border-bottom-width: 0 !important;
      border-left-width: 1px !important;
      border-top-width: 1px !important;
    }
  }
`;

const reverseClass = (index: number, count: number) => {
  if (index === 0) {
    return "emailcn-grid-reverse-footer";
  }
  if (index === count - 1 && count > 2) {
    return "emailcn-grid-reverse-caption";
  }
  if (index === count - 1 || index === count - 2) {
    return "emailcn-grid-reverse-header";
  }
  return "emailcn-grid-reverse-footer";
};

const joinedClass = (joined: boolean, reverse: boolean) => {
  if (!joined) {
    return "";
  }
  return reverse ? "emailcn-grid-joined-reverse" : "emailcn-grid-joined";
};

export const GridSection = ({
  align = "center",
  cells,
  flush = false,
  gap = true,
  reverse = false,
  variant = "two-columns",
}: Omit<GridProps, "theme">) => {
  const widths = gap ? columnWidths[variant].gap : columnWidths[variant].joined;
  const resolvedCells =
    cells ?? widths.map((_, index) => `Column ${index + 1}`);

  if (variant === "one-column") {
    return (
      <Section style={{ padding: `48px ${flush ? "0" : "24px"}` }}>
        <Section
          style={{
            border: "1px dashed #a5b4fc",
            padding: "16px 0",
          }}
        >
          <Text
            style={{
              color: "#030712",
              fontFamily,
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: "24px",
              margin: 0,
              textAlign: align,
            }}
          >
            {resolvedCells[0] ?? ""}
          </Text>
        </Section>
      </Section>
    );
  }

  return (
    <Section style={{ padding: `48px ${flush ? "0" : "24px"}` }}>
      <Row className="emailcn-grid-row">
        {widths.map((width, index) => {
          const joined = !gap && index > 0;
          const cellClasses = [
            "emailcn-grid-cell",
            reverse ? reverseClass(index, widths.length) : "",
          ]
            .filter(Boolean)
            .join(" ");
          const contentClasses = [
            reverse && index > 0 ? "emailcn-grid-reverse-spacing" : "",
            joinedClass(joined, reverse),
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Fragment key={`${variant}-${index}`}>
              {gap && index > 0 ? (
                <Column
                  className={
                    reverse ? "emailcn-grid-reverse-gap" : "emailcn-grid-gap"
                  }
                  style={{ lineHeight: "24px", width: "24px" }}
                  width={24}
                >
                  &zwj;
                </Column>
              ) : null}
              <Column className={cellClasses} style={{ width }} width={width}>
                <Section
                  className={contentClasses || undefined}
                  style={{
                    border: "1px dashed #a5b4fc",
                    borderLeftWidth: joined ? 0 : "1px",
                    padding: "16px 0",
                  }}
                >
                  <Text
                    style={{
                      color: "#030712",
                      fontFamily,
                      fontSize: "16px",
                      fontWeight: 500,
                      lineHeight: "24px",
                      margin: 0,
                      textAlign: align,
                    }}
                  >
                    {resolvedCells[index] ?? ""}
                  </Text>
                </Section>
              </Column>
            </Fragment>
          );
        })}
      </Row>
    </Section>
  );
};

export const Grid = ({
  align = "center",
  cells,
  flush = false,
  gap = true,
  reverse = false,
  theme = defaultTheme,
  variant = "two-columns",
}: GridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </EmailHead>
    <Preview>Responsive email grid</Preview>
    <EmailTailwind theme={theme}>
      <Body style={{ backgroundColor: "#fffffe", fontFamily }} className="m-0">
        <Container
          style={{ backgroundColor: "#fffffe", maxWidth: "600px" }}
          className="mx-auto"
        >
          <GridSection
            align={align}
            cells={cells}
            flush={flush}
            gap={gap}
            reverse={reverse}
            variant={variant}
          />
        </Container>
      </Body>
    </EmailTailwind>
  </Html>
);

Grid.PreviewProps = {
  align: "center",
  flush: false,
  gap: true,
  reverse: false,
  theme: defaultTheme,
  variant: "two-columns",
} satisfies GridProps;
