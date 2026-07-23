import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export interface CTAWithTopLargeImageProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  buttonBackgroundColor?: string;
  buttonTextColor?: string;
}

export const CTAWithTopLargeImageSection = ({
  backgroundColor = "#fffffe",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#f8fafc",
  ctaHref = "https://example.com/",
  ctaLabel = "Activate & Save",
  heading = "Built for the journey ahead.",
  headingColor = "#030712",
  imageAlt = "",
  imageSrc = "https://emailcn.vercel.app/api/email-assets/cta/cta-with-image-1.jpg",
  subtext = "You’re one step away from exploring our latest outdoor essentials. Confirm your email to complete your setup and get 10% off your first order.",
  textColor = "#4b5563",
}: Omit<CTAWithTopLargeImageProps, "theme">) => (
  <MjmlSection backgroundColor={backgroundColor} padding="44px 64px">
    <MjmlColumn padding="0">
      <MjmlImage
        alt={imageAlt}
        borderRadius="4px"
        padding="0"
        src={imageSrc}
        width="472px"
      />
      <MjmlSpacer height="24px" />
      <CTACopy
        ctaHref={ctaHref}
        ctaLabel={ctaLabel}
        heading={heading}
        headingColor={headingColor}
        primaryButtonBackgroundColor={buttonBackgroundColor}
        primaryButtonTextColor={buttonTextColor}
        subtext={subtext}
        textColor={textColor}
      />
    </MjmlColumn>
  </MjmlSection>
);

export const CTAWithTopLargeImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithTopLargeImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Built for the journey ahead"
    theme={theme}
  >
    <CTAWithTopLargeImageSection {...props} />
  </CTAEmailShell>
);

CTAWithTopLargeImage.PreviewProps = {
  theme: defaultTheme,
} satisfies CTAWithTopLargeImageProps;
