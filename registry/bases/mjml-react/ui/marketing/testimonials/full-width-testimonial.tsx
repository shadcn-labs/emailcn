/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TestimonialDarkVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";
export interface TestimonialDarkProps {
  theme?: EmailThemeTokens;
  name?: string;
  role?: string;
  quote?: string;
  variant?: TestimonialDarkVariant;
}
const TestimonialDarkSection = ({
  name,
  quote,
  role,
  theme,
  variant,
}: {
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialDarkVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorText}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        align="center"
        color={theme.colorBackground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg}
        fontStyle="italic"
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        &ldquo;{quote}&rdquo;
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorBackground}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "4px"}
      >
        {name}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm}
      >
        {role}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);
export const FullWidthTestimonial = ({
  theme = defaultTheme,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  variant = "default",
}: TestimonialDarkProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>testimonial dark</MjmlPreview>
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
        <TestimonialDarkSection
          name={name}
          quote={quote}
          role={role}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
FullWidthTestimonial.PreviewProps = {
  name: "Sarah Smith",
  quote: "This tool has been a game-changer for our team productivity.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialDarkProps;
