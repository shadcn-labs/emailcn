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

export type LogosInlineVariant = "default" | "slanted-left" | "slanted-right";

export interface LogosInlineProps {
  theme?: EmailThemeTokens;
  logos?: { src: string; alt: string; width?: number }[];
  variant?: LogosInlineVariant;
}

const LogosInlineSection = ({
  logos,
  theme,
  variant,
}: {
  logos: LogosInlineProps["logos"];
  theme: EmailThemeTokens;
  variant: LogosInlineVariant;
}) => {
  const items = logos ?? [];

  return (
    <MjmlSection
      backgroundColor={theme.colorBackground}
      padding={`${theme.spacingXl ?? "48px"} 0`}
    >
      <MjmlColumn>
        {items.slice(0, 6).map((logo, i) => (
          <span key={logo.alt + i}>
            <MjmlImage
              align="center"
              alt={logo.alt}
              src={logo.src}
              width={logo.width ?? 100}
            />
          </span>
        ))}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const LogosInline = ({
  theme = defaultTheme,
  logos = [
    { alt: "Company 1", src: "https://placehold.co/100x30?text=C1" },
    { alt: "Company 2", src: "https://placehold.co/100x30?text=C2" },
    { alt: "Company 3", src: "https://placehold.co/100x30?text=C3" },
    { alt: "Company 4", src: "https://placehold.co/100x30?text=C4" },
  ],
  variant = "default",
}: LogosInlineProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>logos inline</MjmlPreview>
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
        <LogosInlineSection logos={logos} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

LogosInline.PreviewProps = {
  logos: [
    { alt: "Acme", src: "https://placehold.co/100x30?text=Acme", width: 100 },
    {
      alt: "TechCo",
      src: "https://placehold.co/100x30?text=TechCo",
      width: 100,
    },
    {
      alt: "Global",
      src: "https://placehold.co/100x30?text=Global",
      width: 100,
    },
    { alt: "Nova", src: "https://placehold.co/100x30?text=Nova", width: 100 },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies LogosInlineProps;
