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

export type LogosCenteredVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosCenteredProps {
  theme?: EmailThemeTokens;
  heading?: string;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosCenteredVariant;
}

const LogosCenteredSection = ({
  heading,
  logos,
  theme,
  variant,
}: {
  heading: string;
  logos: LogosCenteredProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosCenteredVariant;
}) => {
  const items = logos ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {heading ? (
          <MjmlText
            align="center"
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "12px"}
            fontWeight={theme.fontWeightMedium}
            paddingBottom={theme.spacingLg ?? "32px"}
          >
            {heading}
          </MjmlText>
        ) : null}
      </MjmlColumn>
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

export const FeaturedBrandsLogoGrid = ({
  theme = defaultTheme,
  heading = "Trusted by leading companies",
  logos = [
    { alt: "Company 1", src: "https://static.photos/business/120x40/2" },
    { alt: "Company 2", src: "https://static.photos/business/120x40/3" },
    { alt: "Company 3", src: "https://static.photos/business/120x40/4" },
  ],
  variant = "default",
}: LogosCenteredProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>logos centered</MjmlPreview>
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
        <LogosCenteredSection
          heading={heading}
          logos={logos}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FeaturedBrandsLogoGrid.PreviewProps = {
  heading: "Trusted by leading companies",
  logos: [
    { alt: "Acme", src: "https://static.photos/business/120x40/5", width: 120 },
    {
      alt: "TechCo",
      src: "https://static.photos/business/120x40/6",
      width: 120,
    },
    {
      alt: "Global",
      src: "https://static.photos/business/120x40/7",
      width: 120,
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosCenteredProps;
