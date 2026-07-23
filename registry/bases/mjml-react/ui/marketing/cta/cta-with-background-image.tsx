import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export type CTAWithBackgroundImageVariant = "flush" | "boxed" | "padded";

export interface CTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  emphasis?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  backgroundSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  overlayColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  variant?: CTAWithBackgroundImageVariant;
}

const variantContent = {
  boxed: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-2.jpg",
    ctaLabel: "Sign up now",
    emphasis: "",
    heading: "Your upgrade starts here!",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Step into the next generation of innovation. Sleek design, pro-level performance, and features that keep you ahead of the curve.",
  },
  flush: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-1.jpg",
    ctaLabel: "Shop gear now",
    emphasis: "",
    heading: "Ready for your next summit?",
    secondaryCtaLabel: "Discover more",
    subtext:
      "Gear up with performance equipment built for the climb. From durable packs to weatherproof layers, everything you need to take on the wild with confidence.",
  },
  padded: {
    backgroundSrc:
      "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-3.jpg",
    ctaLabel: "Plan your trip",
    emphasis: "Book your next getaway and enjoy 20% off with code.",
    heading: "Your island escape awaits!",
    secondaryCtaLabel: "View packages",
    subtext:
      "Experience paradise your way, crystal waters, white sands, and unforgettable moments.",
  },
} as const;

export const CTAWithBackgroundImageSection = ({
  backgroundSrc,
  ctaHref = "https://example.com/",
  ctaLabel,
  heading,
  headingColor = "#fffffe",
  primaryButtonBackgroundColor = "#4f46e5",
  primaryButtonTextColor = "#f8fafc",
  secondaryButtonBorderColor = "#d1d5db",
  secondaryButtonTextColor = "#fffffe",
  secondaryCtaHref = "https://example.com/",
  secondaryCtaLabel,
  subtext,
  textColor = "#fffffe",
  variant = "flush",
}: Omit<CTAWithBackgroundImageProps, "theme">) => {
  const content = variantContent[variant];
  let sectionPadding = "72px 64px";
  if (variant === "flush") {
    sectionPadding = "91px 44px";
  } else if (variant === "boxed") {
    sectionPadding = "64px 44px";
  }

  return (
    <MjmlSection
      backgroundColor="#030712"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundUrl={backgroundSrc ?? content.backgroundSrc}
      padding={sectionPadding}
    >
      <MjmlColumn
        backgroundColor={variant === "boxed" ? "rgba(3,7,18,0.72)" : undefined}
        borderRadius={variant === "boxed" ? "8px" : "0"}
        padding={variant === "boxed" ? "36px" : "0"}
      >
        <CTACopy
          ctaHref={ctaHref}
          ctaLabel={ctaLabel ?? content.ctaLabel}
          heading={heading ?? content.heading}
          headingColor={headingColor}
          primaryButtonBackgroundColor={primaryButtonBackgroundColor}
          primaryButtonTextColor={primaryButtonTextColor}
          secondaryButtonBorderColor={secondaryButtonBorderColor}
          secondaryButtonTextColor={secondaryButtonTextColor}
          secondaryCtaHref={secondaryCtaHref}
          secondaryCtaLabel={secondaryCtaLabel ?? content.secondaryCtaLabel}
          subtext={subtext ?? content.subtext}
          textColor={textColor}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const CTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithBackgroundImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Call to action"
    theme={theme}
  >
    <CTAWithBackgroundImageSection {...props} />
  </CTAEmailShell>
);

CTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush",
} satisfies CTAWithBackgroundImageProps;
