import {
  Mjml,
  MjmlBody,
  MjmlButton,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlText,
  MjmlWrapper,
  MjmlColumn,
  MjmlSection,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const CTAEmailShell = ({
  children,
  pageBackgroundColor,
  preview,
  theme,
}: {
  children: ReactNode;
  pageBackgroundColor: string;
  preview: string;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>{preview}</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody
      backgroundColor={pageBackgroundColor}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const CTACopy = ({
  align = "center",
  ctaHref,
  ctaLabel,
  heading,
  headingColor,
  primaryButtonBackgroundColor,
  primaryButtonTextColor,
  secondaryButtonBorderColor = "#d1d5db",
  secondaryButtonTextColor = "#4b5563",
  secondaryCtaHref,
  secondaryCtaLabel,
  subtext,
  textColor,
}: {
  align?: "center" | "left" | "right";
  ctaHref: string;
  ctaLabel: string;
  heading: string;
  headingColor: string;
  primaryButtonBackgroundColor: string;
  primaryButtonTextColor: string;
  secondaryButtonBorderColor?: string;
  secondaryButtonTextColor?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  subtext: string;
  textColor: string;
}) => (
  <>
    <MjmlText
      align={align}
      color={headingColor}
      fontFamily={fontFamily}
      fontSize="30px"
      fontWeight="600"
      lineHeight="36px"
      padding="0"
    >
      {heading}
    </MjmlText>
    <MjmlText
      align={align}
      color={textColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="300"
      lineHeight="24px"
      padding="20px 0 0"
    >
      {subtext}
    </MjmlText>
    <MjmlButton
      align={align}
      backgroundColor={primaryButtonBackgroundColor}
      borderRadius="8px"
      color={primaryButtonTextColor}
      fontFamily={fontFamily}
      fontSize="16px"
      fontWeight="500"
      href={ctaHref}
      innerPadding="10px 22px"
      lineHeight="24px"
      padding="28px 0 0"
    >
      {ctaLabel}
    </MjmlButton>
    {secondaryCtaLabel ? (
      <MjmlButton
        align={align}
        backgroundColor="transparent"
        border={`1px solid ${secondaryButtonBorderColor}`}
        borderRadius="8px"
        color={secondaryButtonTextColor}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="500"
        href={secondaryCtaHref}
        innerPadding="9px 21px"
        lineHeight="24px"
        padding="12px 0 0"
      >
        {secondaryCtaLabel}
      </MjmlButton>
    ) : null}
  </>
);

type BackgroundCta_CTAWithBackgroundImageVariant = "flush" | "boxed" | "padded";

interface BackgroundCta_CTAWithBackgroundImageProps {
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
  variant?: BackgroundCta_CTAWithBackgroundImageVariant;
}

const BackgroundCta_variantContent = {
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

const BackgroundCta_CTAWithBackgroundImageSection = ({
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
}: Omit<BackgroundCta_CTAWithBackgroundImageProps, "theme">) => {
  const content = BackgroundCta_variantContent[variant];
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

const BackgroundCta_CTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BackgroundCta_CTAWithBackgroundImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Call to action"
    theme={theme}
  >
    <BackgroundCta_CTAWithBackgroundImageSection {...props} />
  </CTAEmailShell>
);

BackgroundCta_CTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush",
} satisfies BackgroundCta_CTAWithBackgroundImageProps;

const __BackgroundCta = BackgroundCta_CTAWithBackgroundImage;

type BoxedBackgroundCta_BoxedCTAWithBackgroundImageVariant =
  | "flush-light"
  | "padded-light"
  | "flush-dark"
  | "padded-dark";

interface BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps {
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
  variant?: BoxedBackgroundCta_BoxedCTAWithBackgroundImageVariant;
}

const BoxedBackgroundCta_BoxedCTAWithBackgroundImageSection = ({
  backgroundImageSrc = "https://emailcn.vercel.app/api/email-assets/cta/cta-bg-glow.png",
  buttonBackgroundColor = "#4f46e5",
  buttonTextColor = "#f8fafc",
  ctaHref = "https://example.com/",
  ctaLabel = "Activate account",
  heading = "Welcome to Your Workspace",
  subtext = "Your account is ready. Confirm your email to activate access, connect your tools, and start building smarter with our platform.",
  variant = "flush-light",
}: Omit<BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps, "theme">) => {
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

const BoxedBackgroundCta_BoxedCTAWithBackgroundImage = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="Welcome to your workspace"
    theme={theme}
  >
    <BoxedBackgroundCta_BoxedCTAWithBackgroundImageSection {...props} />
  </CTAEmailShell>
);

BoxedBackgroundCta_BoxedCTAWithBackgroundImage.PreviewProps = {
  theme: defaultTheme,
  variant: "flush-light",
} satisfies BoxedBackgroundCta_BoxedCTAWithBackgroundImageProps;

const __BoxedBackgroundCta = BoxedBackgroundCta_BoxedCTAWithBackgroundImage;

export interface BackgroundCallToActionProps {
  theme?: Parameters<typeof __BackgroundCta>[0]["theme"];
  heading?: string;
  description?: string;
  emphasis?: string;
  actions?: {
    href: string;
    label: string;
  }[];
  backgroundImage?: {
    src: string;
    alt?: string;
  };
  width?: "flush" | "boxed" | "padded";
  contentCard?: boolean;
  appearance?: "light" | "dark";
}

export const BackgroundCallToAction = ({
  theme,
  heading,
  description,
  emphasis,
  actions,
  backgroundImage,
  width = "flush",
  contentCard = false,
  appearance = "light",
}: BackgroundCallToActionProps) =>
  (() => {
    if (contentCard) {
      return (
        <__BoxedBackgroundCta
          backgroundImageSrc={backgroundImage?.src}
          ctaHref={actions?.[0]?.href}
          ctaLabel={actions?.[0]?.label}
          heading={heading}
          subtext={description}
          theme={theme}
          variant={`${width === "padded" ? "padded" : "flush"}-${appearance}`}
        />
      );
    }
    return (
      <__BackgroundCta
        backgroundSrc={backgroundImage?.src}
        ctaHref={actions?.[0]?.href}
        ctaLabel={actions?.[0]?.label}
        emphasis={emphasis}
        heading={heading}
        secondaryCtaHref={actions?.[1]?.href}
        secondaryCtaLabel={actions?.[1]?.label}
        subtext={description}
        theme={theme}
        variant={width}
      />
    );
  })();

BackgroundCallToAction.PreviewProps = {
  appearance: "light",
  contentCard: false,
  width: "flush",
} satisfies BackgroundCallToActionProps;
