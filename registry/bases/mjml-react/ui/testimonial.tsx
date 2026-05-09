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

export interface TestimonialProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  role?: string;
  quote?: string;
  companyLogoUrl?: string;
}

const TestimonialSection = ({
  avatarUrl,
  companyLogoUrl,
  name,
  quote,
  role,
  theme,
}: {
  avatarUrl?: string;
  companyLogoUrl?: string;
  name: string;
  quote: string;
  role: string;
  theme: EmailThemeTokens;
}) => (
  <MjmlWrapper
    backgroundColor={theme.colorBackgroundMuted}
    border={`1px solid ${theme.colorBorder}`}
    borderRadius={theme.borderRadius}
    padding={theme.spacingLg ?? "24px"}
  >
    <MjmlSection padding="0">
      <MjmlColumn>
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          fontStyle="italic"
          lineHeight={theme.lineHeightBase}
          padding={`0 0 ${theme.spacingLg ?? "24px"}`}
        >
          &ldquo;{quote}&rdquo;
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection padding="0">
      <MjmlColumn width="56px">
        {avatarUrl ? (
          <MjmlImage
            alt={name}
            borderRadius="999px"
            height={56}
            padding="0"
            src={avatarUrl}
            width={56}
          />
        ) : null}
      </MjmlColumn>
      <MjmlColumn>
        <MjmlText
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          padding={`0 0 ${theme.spacingBase ?? "16px"} ${theme.spacingBase ?? "16px"}`}
        >
          {name}
        </MjmlText>
        <MjmlText
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm ?? "12px"}
          padding={`0 0 0 ${theme.spacingBase ?? "16px"}`}
        >
          {role}
        </MjmlText>
      </MjmlColumn>
    </MjmlSection>
    {companyLogoUrl ? (
      <MjmlSection padding={`${theme.spacingLg ?? "24px"} 0 0`}>
        <MjmlColumn>
          <MjmlImage
            alt="Company"
            padding="0"
            src={companyLogoUrl}
            width={80}
          />
        </MjmlColumn>
      </MjmlSection>
    ) : null}
  </MjmlWrapper>
);

export const Testimonial = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  role = "CEO, Acme",
  quote = "This product has transformed how we work.",
  companyLogoUrl,
}: TestimonialProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>testimonial</MjmlPreview>
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
      <TestimonialSection
        avatarUrl={avatarUrl}
        companyLogoUrl={companyLogoUrl}
        name={name}
        quote={quote}
        role={role}
        theme={theme}
      />
    </MjmlBody>
  </Mjml>
);

Testimonial.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyLogoUrl: "https://example.com/company.png",
  name: "Sarah Smith",
  quote:
    "This tool has saved us countless hours and made our team more productive.",
  role: "Product Manager, TechCorp",
  theme: defaultTheme,
} satisfies TestimonialProps;
