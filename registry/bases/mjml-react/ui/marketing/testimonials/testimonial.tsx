import {
  Mjml,
  MjmlBody,
  MjmlColumn,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  MjmlWrapper,
  MjmlButton,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

type FullWidthTestimonial_FullWidthTestimonialVariant =
  | "default"
  | "overlapping-avatar";

interface FullWidthTestimonial_FullWidthTestimonialProps {
  theme?: EmailThemeTokens;
  variant?: FullWidthTestimonial_FullWidthTestimonialVariant;
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}

const FullWidthTestimonial_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const FullWidthTestimonial_FullWidthTestimonialSection = ({
  variant = "default",
  quote = "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”",
  author = "Ella Roustek",
  role = "Operations Manager",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-2.jpg",
  logoSrc,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f8fafc",
}: Omit<FullWidthTestimonial_FullWidthTestimonialProps, "theme">) => {
  const overlapping = variant === "overlapping-avatar";
  const resolvedLogoSrc =
    logoSrc ??
    (overlapping
      ? "https://emailcn.vercel.app/api/email-assets/testimonials/logo-accentic.png"
      : "https://emailcn.vercel.app/api/email-assets/testimonials/logo-monarch.png");
  if (overlapping) {
    return (
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px">
        <MjmlColumn
          backgroundColor={cardBackgroundColor}
          borderRadius="8px"
          padding="48px 44px 24px"
        >
          <MjmlText
            color="#030712"
            fontFamily={FullWidthTestimonial_fontFamily}
            fontSize="18px"
            fontWeight="600"
            lineHeight="28px"
            padding="0"
          >
            {quote}
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlImage
            align="left"
            alt=""
            padding="0"
            src={resolvedLogoSrc}
            width="106px"
          />
          <MjmlSpacer height="24px" />
          <MjmlText
            color="#030712"
            fontFamily={FullWidthTestimonial_fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="0"
          >
            {author} · {role}
          </MjmlText>
          <MjmlSpacer height="24px" />
          <MjmlImage
            align="left"
            alt={author}
            borderRadius="9999px"
            padding="0"
            src={avatarSrc}
            width="64px"
          />
        </MjmlColumn>
      </MjmlSection>
    );
  }
  return (
    <>
      <MjmlSection backgroundColor={backgroundColor} padding="44px 24px 24px">
        <MjmlColumn padding="0">
          <MjmlImage
            align="left"
            alt=""
            padding="0"
            src={resolvedLogoSrc}
            width="145px"
          />
          <MjmlSpacer height="24px" />
          <MjmlText
            color="#030712"
            fontFamily={FullWidthTestimonial_fontFamily}
            fontSize="18px"
            fontWeight="600"
            lineHeight="28px"
            padding="0"
          >
            {quote}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection backgroundColor={backgroundColor} padding="0 24px 44px">
        <MjmlColumn padding="0 12px 0 0" width="76px">
          <MjmlImage
            alt={author}
            borderRadius="9999px"
            padding="0"
            src={avatarSrc}
            width="64px"
          />
        </MjmlColumn>
        <MjmlColumn padding="0" verticalAlign="middle">
          <MjmlText
            color="#030712"
            fontFamily={FullWidthTestimonial_fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="0"
          >
            {author} · {role}
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  );
};

const FullWidthTestimonial_FullWidthTestimonial = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthTestimonial_FullWidthTestimonialProps) => (
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
        <FullWidthTestimonial_FullWidthTestimonialSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthTestimonial_FullWidthTestimonial.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonial_FullWidthTestimonialProps;

const __FullWidthTestimonial = FullWidthTestimonial_FullWidthTestimonial;

type TestimonialCta_TestimonialWithCtaVariant = "centered" | "split";

interface TestimonialCta_TestimonialWithCtaProps {
  theme?: EmailThemeTokens;
  variant?: TestimonialCta_TestimonialWithCtaVariant;
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

const TestimonialCta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TestimonialCta_TestimonialWithCtaSection = ({
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
}: Omit<TestimonialCta_TestimonialWithCtaProps, "theme">) => {
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
            fontFamily={TestimonialCta_fontFamily}
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
            fontFamily={TestimonialCta_fontFamily}
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
            fontFamily={TestimonialCta_fontFamily}
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
          fontFamily={TestimonialCta_fontFamily}
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
          fontFamily={TestimonialCta_fontFamily}
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
          fontFamily={TestimonialCta_fontFamily}
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

const TestimonialCta_TestimonialWithCta = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "centered",
  ...props
}: TestimonialCta_TestimonialWithCtaProps) => (
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
        <TestimonialCta_TestimonialWithCtaSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TestimonialCta_TestimonialWithCta.PreviewProps = {
  theme: defaultTheme,
  variant: "centered",
} satisfies TestimonialCta_TestimonialWithCtaProps;

const __TestimonialCta = TestimonialCta_TestimonialWithCta;

export interface TestimonialProps {
  theme?: Parameters<typeof __FullWidthTestimonial>[0]["theme"];
  quote?: string;
  author?: string;
  role?: string;
  company?: string;
  avatar?: {
    src: string;
    alt?: string;
  };
  logo?: {
    src: string;
    alt?: string;
  };
  layout?: "full-width" | "centered" | "split";
  avatarTreatment?: "inline" | "overlapping";
  action?: {
    href: string;
    label: string;
  };
}

export const Testimonial = ({
  theme,
  quote,
  author,
  role,
  company,
  avatar,
  logo,
  layout = "full-width",
  avatarTreatment = "inline",
  action,
}: TestimonialProps) =>
  (() => {
    if (layout === "full-width") {
      return (
        <__FullWidthTestimonial
          author={author}
          avatarSrc={avatar?.src}
          logoSrc={logo?.src}
          quote={quote}
          role={role}
          theme={theme}
          variant={
            avatarTreatment === "overlapping" ? "overlapping-avatar" : "default"
          }
        />
      );
    }
    return (
      <__TestimonialCta
        author={author}
        avatarSrc={avatar?.src}
        company={company}
        ctaHref={action?.href}
        ctaLabel={action?.label}
        quote={quote}
        role={role}
        theme={theme}
        variant={layout}
      />
    );
  })();

Testimonial.PreviewProps = {
  avatarTreatment: "inline",
  layout: "full-width",
} satisfies TestimonialProps;
