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

export const BasicLogoCloud = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/120x40/2" },
    { alt: "Company 2", src: "https://static.photos/business/120x40/3" },
    { alt: "Company 3", src: "https://static.photos/business/120x40/4" },
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

BasicLogoCloud.PreviewProps = {
  logos: [
    {
      alt: "Acme Corp",
      src: "https://static.photos/business/120x40/5",
      width: 120,
    },
    {
      alt: "TechCo",
      src: "https://static.photos/business/120x40/6",
      width: 120,
    },
    {
      alt: "Global Inc",
      src: "https://static.photos/business/120x40/7",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosBasicProps;
