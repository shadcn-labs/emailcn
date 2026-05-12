/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type LogosGridVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosGridProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosGridVariant;
}

const LogosGridSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosGridProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosGridVariant;
}) => {
  const items = logos ?? [];
  const rows: { src: string; alt: string; width?: number }[][] = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {rows.map((row, ri) =>
        row.map((logo, ci) => (
          <MjmlColumn
            key={`${logo.alt}-${ri}-${ci}`}
            width="33.33%"
            padding={theme.spacingBase ?? "24px"}
            verticalAlign="middle"
          >
            <MjmlImage
              align="center"
              alt={logo.alt}
              src={logo.src}
              width={logo.width ?? 120}
            />
          </MjmlColumn>
        ))
      )}
    </MjmlSection>
  );
};

export const LogosGrid = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://placehold.co/120x40?text=Company+1" },
    { alt: "Company 2", src: "https://placehold.co/120x40?text=Company+2" },
    { alt: "Company 3", src: "https://placehold.co/120x40?text=Company+3" },
    { alt: "Company 4", src: "https://placehold.co/120x40?text=Company+4" },
    { alt: "Company 5", src: "https://placehold.co/120x40?text=Company+5" },
    { alt: "Company 6", src: "https://placehold.co/120x40?text=Company+6" },
  ],
  variant = "default",
}: LogosGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>logos grid</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <LogosGridSection logos={logos} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosGrid.PreviewProps = {
  logos: [
    { alt: "Acme", src: "https://placehold.co/120x40?text=Acme", width: 120 },
    {
      alt: "TechCo",
      src: "https://placehold.co/120x40?text=TechCo",
      width: 120,
    },
    {
      alt: "Global",
      src: "https://placehold.co/120x40?text=Global",
      width: 120,
    },
    { alt: "Nova", src: "https://placehold.co/120x40?text=Nova", width: 120 },
    { alt: "Pulse", src: "https://placehold.co/120x40?text=Pulse", width: 120 },
    { alt: "Orbit", src: "https://placehold.co/120x40?text=Orbit", width: 120 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosGridProps;
