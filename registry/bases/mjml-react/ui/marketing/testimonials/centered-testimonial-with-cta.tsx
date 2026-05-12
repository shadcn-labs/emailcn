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

export type TestimonialCenteredVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TestimonialCenteredProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  variant?: TestimonialCenteredVariant;
}

const TestimonialCenteredSection = ({
  avatarUrl,
  name,
  quote,
  role,
  theme,
  variant,
}: {
  avatarUrl?: string;
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialCenteredVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    <MjmlColumn>
      {avatarUrl ? (
        <MjmlImage
          align="center"
          alt={name}
          borderRadius="50%"
          src={avatarUrl}
          width={72}
          height={72}
          paddingBottom={theme.spacingBase ?? "2Fourpx"}
        />
      ) : null}
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontStyle="italic"
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingBase ?? "2Fourpx"}
      >
        &ldquo;{quote}&rdquo;
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "1Fourpx"}
        fontWeight={theme.fontWeightMedium}
        paddingBottom={theme.spacingBase ?? "Fourpx"}
      >
        {name}
      </MjmlText>
      <MjmlText
        align="center"
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeSm ?? "12px"}
      >
        {role}
      </MjmlText>
    </MjmlColumn>
  </MjmlSection>
);

export const CenteredTestimonialWithCta = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  variant = "default",
}: TestimonialCenteredProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>testimonial centered</MjmlPreview>
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
        <TestimonialCenteredSection
          avatarUrl={avatarUrl}
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

CenteredTestimonialWithCta.PreviewProps = {
  avatarUrl: "https://placehold.co/72x72?text=SS",
  name: "Sarah Smith",
  quote:
    "Working with this product has been an absolute game-changer for our team.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialCenteredProps;
