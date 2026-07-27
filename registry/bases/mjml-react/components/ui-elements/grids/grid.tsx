import {
  Mjml,
  MjmlBody,
  MjmlBreakpoint,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlStyle,
  MjmlText,
} from "@faire/mjml-react";
import { Fragment } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
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
    .emailcn-grid-reverse-gap { display: none !important; }
    .emailcn-grid-reverse-footer { display: table-footer-group !important; width: 100% !important; }
    .emailcn-grid-reverse-header { display: table-header-group !important; width: 100% !important; }
    .emailcn-grid-reverse-caption { display: table-caption !important; width: 100% !important; }
    .emailcn-grid-reverse-spacing > table { margin-bottom: 24px !important; }
    .emailcn-grid-joined > table > tbody > tr > td {
      border-left-width: 1px !important;
      border-top-width: 0 !important;
    }
    .emailcn-grid-joined-reverse > table > tbody > tr > td {
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

  return (
    <MjmlSection
      backgroundColor="#fffffe"
      padding={`48px ${flush ? "0" : "24px"}`}
    >
      {widths.map((width, index) => {
        const joined = !gap && index > 0;
        const columnClasses = [
          reverse ? reverseClass(index, widths.length) : "",
          reverse && index > 0 ? "emailcn-grid-reverse-spacing" : "",
          joinedClass(joined, reverse),
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <Fragment key={`${variant}-${index}`}>
            {gap && index > 0 ? (
              <MjmlColumn
                cssClass={reverse ? "emailcn-grid-reverse-gap" : undefined}
                padding="0"
                width="24px"
              >
                <MjmlSpacer height="24px" />
              </MjmlColumn>
            ) : null}
            <MjmlColumn
              border="1px dashed #a5b4fc"
              borderLeft={joined ? "0 solid #a5b4fc" : "1px dashed #a5b4fc"}
              cssClass={columnClasses || undefined}
              padding="0"
              verticalAlign="top"
              width={`${width}px`}
            >
              <MjmlText
                align={align}
                color="#030712"
                fontFamily={fontFamily}
                fontSize="16px"
                fontWeight="500"
                lineHeight="24px"
                padding="16px 0"
              >
                {resolvedCells[index] ?? ""}
              </MjmlText>
            </MjmlColumn>
          </Fragment>
        );
      })}
    </MjmlSection>
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
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Responsive email grid</MjmlPreview>
      <MjmlBreakpoint width="600px" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#fffffe" width={theme.containerWidth}>
      <GridSection
        align={align}
        cells={cells}
        flush={flush}
        gap={gap}
        reverse={reverse}
        variant={variant}
      />
    </MjmlBody>
  </Mjml>
);

Grid.PreviewProps = {
  align: "center",
  flush: false,
  gap: true,
  reverse: false,
  theme: defaultTheme,
  variant: "two-columns",
} satisfies GridProps;
