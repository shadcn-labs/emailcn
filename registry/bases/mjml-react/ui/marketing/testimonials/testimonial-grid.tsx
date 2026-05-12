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

export type TestimonialGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TestimonialGridProps {
  theme?: EmailThemeTokens;
  testimonials?: {
    avatarUrl?: string;
    name: string;
    role: string;
    quote: string;
  }[];
  variant?: TestimonialGridVariant;
}
const TestimonialGridSection = ({
  testimonials,
  theme,
  variant,
}: {
  testimonials: TestimonialGridProps["testimonials"];
  theme: EmailThemeTokens;
  variant: TestimonialGridVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(testimonials ?? []).slice(0, 3).map((t, i) => (
      <MjmlColumn
        key={t.name + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        <MjmlSection
          backgroundColor={theme.colorBackgroundMuted}
          border={`1px solid ${theme.colorBorder}`}
          borderRadius={theme.borderRadius}
          padding={theme.spacingBase ?? "16px"}
        >
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            fontStyle="italic"
            lineHeight={theme.lineHeightBase}
            paddingBottom={theme.spacingBase ?? "12px"}
          >
            &ldquo;{t.quote}&rdquo;
          </MjmlText>
          <MjmlText
            color={theme.colorText}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm}
            fontWeight={theme.fontWeightMedium}
          >
            {t.name}
          </MjmlText>
          <MjmlText
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize="11px"
          >
            {t.role}
          </MjmlText>
        </MjmlSection>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const TestimonialGrid = ({
  theme = defaultTheme,
  testimonials = [{ name: "John", quote: "Great product!", role: "CEO" }],
  variant = "default",
}: TestimonialGridProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>testimonial grid</MjmlPreview>
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
        <TestimonialGridSection
          testimonials={testimonials}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TestimonialGrid.PreviewProps = {
  testimonials: [
    {
      name: "Sarah Smith",
      quote: "Incredible tool for our workflow.",
      role: "PM, TechCorp",
    },
    {
      name: "Alex Johnson",
      quote: "Saved us countless hours.",
      role: "CEO, StartupCo",
    },
    {
      name: "Maria Garcia",
      quote: "The best email solution we've found.",
      role: "CTO, DevInc",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialGridProps;
