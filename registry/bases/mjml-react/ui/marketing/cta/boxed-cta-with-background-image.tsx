import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export type BoxedCTAWithBackgroundImageVariant =
  | "flush-light"
  | "padded-light"
  | "flush-dark"
  | "padded-dark";

export interface BoxedCTAWithBackgroundImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  cardBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
  variant?: BoxedCTAWithBackgroundImageVariant;
}

export const BoxedCTAWithBackgroundImageSection = ({
  backgroundImageSrc = "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-glow.png",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#f8fafc",
  ctaHref = "https://example.com/",
  ctaLabel = "Activate account",
  heading = "Welcome to Your Workspace",
  subtext = "Your account is ready. Confirm your email to activate access, connect your tools, and start building smarter with our platform.",
  variant = "flush-light",
}: Omit<BoxedCTAWithBackgroundImageProps, "theme">) => {
  const dark = variant.endsWith("dark");
  const padded = variant.startsWith("padded");

  return (
    <MjmlSection
      backgroundColor={dark ? "#030712" : "#fffffe"}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundUrl={backgroundImageSrc}
      padding={padded ? "80px 44px" : "44px"}
    >
      <MjmlColumn
        backgroundColor={dark ? "#030712" : "#fffffe"}
        borderRadius="4px"
        padding="44px"
      >
        <CTACopy
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          headingColor={dark ? "#fffffe" : "#030712"}
          primaryButtonBackgroundColor={buttonBackgroundColor}
          primaryButtonTextColor={buttonTextColor}
          subtext={subtext}
          textColor={dark ? "#d1d5db" : "#4b5563"}
        />
      </MjmlColumn>
    </MjmlSection>
  );
};

export const BoxedCTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BoxedCTAWithBackgroundImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Welcome to your workspace"
    theme={theme}
  >
    <BoxedCTAWithBackgroundImageSection {...props} />
  </CTAEmailShell>
);

BoxedCTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-light",
} satisfies BoxedCTAWithBackgroundImageProps;
