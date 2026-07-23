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
} from "@faire/mjml-react";

import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

export type FullWidthTestimonialVariant = "default" | "overlapping-avatar";

export interface FullWidthTestimonialProps {
  theme?: EmailThemeTokens;
  variant?: FullWidthTestimonialVariant;
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  logoSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const FullWidthTestimonialSection = ({
  variant = "default",
  quote = "“After migrating to emailcn, we increased efficiency by 40% across our transactional and marketing email development pipeline.”",
  author = "Ella Roustek",
  role = "Operations Manager",
  avatarSrc = "https://emailcn.vercel.app/api/email-assets/testimonials/user-2.jpg",
  logoSrc,
  backgroundColor = "#fffffe",
  cardBackgroundColor = "#f8fafc",
}: Omit<FullWidthTestimonialProps, "theme">) => {
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
            fontFamily={fontFamily}
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
            fontFamily={fontFamily}
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
            fontFamily={fontFamily}
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
            fontFamily={fontFamily}
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

export const FullWidthTestimonial = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: FullWidthTestimonialProps) => (
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
        <FullWidthTestimonialSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

FullWidthTestimonial.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies FullWidthTestimonialProps;
