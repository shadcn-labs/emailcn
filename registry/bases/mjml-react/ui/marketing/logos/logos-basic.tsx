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

export type LogosBasicVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosBasicProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosBasicVariant;
}

const LogosBasicSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosBasicProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosBasicVariant;
}) => {
  const items = logos ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      {items.slice(0, 4).map((logo, i) => (
        <MjmlColumn
          key={logo.alt + i}
          width={`${100 / Math.min(items.length, 4)}%`}
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
      ))}
    </MjmlSection>
  );
};

export const LogosBasic = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://placehold.co/120x40?text=Company+1" },
    { alt: "Company 2", src: "https://placehold.co/120x40?text=Company+2" },
    { alt: "Company 3", src: "https://placehold.co/120x40?text=Company+3" },
  ],
  variant = "default",
}: LogosBasicProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>logos basic</MjmlPreview>
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
        <LogosBasicSection logos={logos} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosBasic.PreviewProps = {
  logos: [
    {
      alt: "Acme Corp",
      src: "https://placehold.co/120x40?text=Acme",
      width: 120,
    },
    {
      alt: "TechCo",
      src: "https://placehold.co/120x40?text=TechCo",
      width: 120,
    },
    {
      alt: "Global Inc",
      src: "https://placehold.co/120x40?text=Global",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosBasicProps;
