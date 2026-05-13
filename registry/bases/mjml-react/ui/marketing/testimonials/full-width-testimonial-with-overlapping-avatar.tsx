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

export type TestimonialCardVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TestimonialCardProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  companyLogoUrl?: string;
  variant?: TestimonialCardVariant;
}

const TestimonialCardSection = ({
  avatarUrl,
  companyLogoUrl,
  name,
  quote,
  role,
  theme,
  variant,
}: {
  avatarUrl?: string;
  companyLogoUrl?: string;
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
  variant: TestimonialCardVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackgroundMuted}
    border={`1px solid ${theme.colorBorder ?? "#e5e7eb"}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingXl ?? "24px"}
  >
    <MjmlColumn>
      <MjmlText
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontStyle="italic"
        lineHeight={theme.lineHeightBase}
        paddingBottom={theme.spacingLg ?? "32px"}
      >
        &ldquo;{quote}&rdquo;
      </MjmlText>
      <MjmlColumn width="auto" padding="0" verticalAlign="middle">
        {avatarUrl ? (
          <MjmlImage
            alt={name}
            borderRadius="50%"
            src={avatarUrl}
            width={56}
            height={56}
          />
        ) : null}
      </MjmlColumn>
      <MjmlColumn padding="0 0 0 16px" verticalAlign="middle">
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "4px"}
        >
          {name}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
        >
          {role}
        </MjmlText>
      </MjmlColumn>
      {companyLogoUrl ? (
        <MjmlColumn paddingTop={theme.spacingBase ?? "24px"}>
          <MjmlImage alt="Company" src={companyLogoUrl} width={80} />
        </MjmlColumn>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const FullWidthTestimonialWithOverlappingAvatar = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
  variant = "default",
}: TestimonialCardProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>testimonial card</MjmlPreview>
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
        <TestimonialCardSection
          avatarUrl={avatarUrl}
          companyLogoUrl={companyLogoUrl}
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

FullWidthTestimonialWithOverlappingAvatar.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-registry%2Fbases%2Fmjml-react%2Fui%2Fmarketing%2Ftestimonials%2Ffull-width-testimonial-with-overlapping-avatar.tsx-56-1&size=56",
  companyLogoUrl: "https://static.photos/business/80x20/3",
  name: "Sarah Smith",
  quote:
    "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
  variant: "default",
} satisfies TestimonialCardProps;
