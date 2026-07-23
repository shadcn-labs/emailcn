import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export type TestimonialWithCtaVariant = "centered" | "split";

export interface TestimonialWithCtaProps {
  theme?: EmailThemeTokens;
  variant?: TestimonialWithCtaVariant;
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatarSrc?: string;
  quoteIconSrc?: string;
  ctaLabel?: string;
  ctaHref?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const TestimonialWithCtaSection = ({
  variant = "centered",
  quote,
  author = "Jason Adam",
  role = "Director of Operations at Monarch",
  company = "Monarch",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-1.jpg",
  quoteIconSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/quote.png",
  ctaLabel = "Read Monarch's case study",
  ctaHref = "https://example.com",
  backgroundColor = "#fffffe",
}: Omit<TestimonialWithCtaProps, "theme">) => {
  const centered = variant === "centered";
  const resolvedQuote =
    quote ??
    (centered
      ? "After redesigning our emails with emailcn, we saw an increase in engagement by 40%."
      : "After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.");

  if (centered) {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="44px">
        <MjmlColumn padding="0">
          <MjmlImage alt="" padding="0" src={quoteIconSrc} width="36px" />
          <MjmlSpacer height="24px" />
          <MjmlText
            align="center"
            color="#030712"
            fontFamily={fontFamily}
            fontSize="30px"
            fontWeight="600"
            lineHeight="36px"
            padding="0"
          >
            {resolvedQuote}
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlImage
            alt={author}
            borderRadius="9999px"
            padding="0"
            src={avatarSrc}
            width="64px"
          />
          <MjmlSpacer height="8px" />
          <MjmlText
            align="center"
            color="#4b5563"
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="0"
          >
            {author} · {role}
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlButton
            backgroundColor="transparent"
            color="#4f46e5"
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="500"
            href={ctaHref}
            innerPadding="0"
            lineHeight="24px"
            padding="0"
          >
            {ctaLabel}
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
    );
  }

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
      <MjmlColumn padding="0 44px 0 0" verticalAlign="top" width="148px">
        <MjmlImage
          align="left"
          alt={author}
          borderRadius="9999px"
          padding="0"
          src={avatarSrc}
          width="64px"
        />
        <MjmlSpacer height="8px" />
        <MjmlText
          color="#030712"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="600"
          lineHeight="24px"
          padding="0"
        >
          {author} · {company}
        </MjmlText>
      </MjmlColumn>
      <MjmlColumn padding="0" verticalAlign="top">
        <MjmlImage
          align="left"
          alt=""
          padding="0"
          src={quoteIconSrc}
          width="36px"
        />
        <MjmlSpacer height="24px" />
        <MjmlText
          color="#030712"
          fontFamily={fontFamily}
          fontSize="20px"
          fontWeight="600"
          lineHeight="28px"
          padding="0"
        >
          {resolvedQuote}
        </MjmlText>
        <MjmlSpacer height="24px" />
        <MjmlButton
          align="left"
          backgroundColor="transparent"
          color="#4f46e5"
          fontFamily={fontFamily}
          fontSize="16px"
          fontWeight="500"
          href={ctaHref}
          innerPadding="0"
          lineHeight="24px"
          padding="0"
        >
          {ctaLabel}
        </MjmlButton>
      </MjmlColumn>
    </MjmlSection>
  );
};

export const TestimonialWithCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "centered",
  ...props
}: TestimonialWithCtaProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlPreview>Customer testimonial</MjmlPreview>
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TestimonialWithCtaSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TestimonialWithCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies TestimonialWithCtaProps;
