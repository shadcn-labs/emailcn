import { MjmlColumn, MjmlImage, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  CTACopy,
  CTAEmailShell,
} from "@/registry/bases/mjml-react/ui/marketing/cta/cta-shared";

export type CTAWithTeamAvatarsVariant =
  | "default"
  | "avatars-top"
  | "single-avatar";

export interface CTAWithTeamAvatarsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  avatarSrc1?: string;
  avatarAlt1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  avatarSrc3?: string;
  avatarAlt3?: string;
  avatarSrc4?: string;
  avatarAlt4?: string;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  primaryButtonBackgroundColor?: string;
  primaryButtonTextColor?: string;
  secondaryButtonBackgroundColor?: string;
  secondaryButtonTextColor?: string;
  secondaryButtonBorderColor?: string;
  avatarBorderColor?: string;
  variant?: CTAWithTeamAvatarsVariant;
}

const avatarSources = [
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-4.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-5.jpg",
] as const;

const variantContent = {
  "avatars-top": {
    ctaLabel: "Confirm your email",
    heading: "The team welcomes you!",
    secondaryCtaLabel: "",
    subtext:
      "Your workspace is ready — confirm your email to join your team, collaborate seamlessly, and get started today.",
  },
  default: {
    ctaLabel: "Confirm your email",
    heading: "The team welcomes you!",
    secondaryCtaLabel: "",
    subtext:
      "Your workspace is ready — confirm your email to join your team, collaborate seamlessly, and get started today.",
  },
  "single-avatar": {
    ctaLabel: "Register now",
    heading: "Join the event",
    secondaryCtaLabel: "Learn more",
    subtext:
      "Join Jenna Hendricks, our founder and visionary, for an open discussion about what’s next for our community and how you can be part of it.",
  },
} as const;

export const CTAWithTeamAvatarsSection = (
  props: Omit<CTAWithTeamAvatarsProps, "theme">
) => {
  const {
    avatarAlt1,
    avatarAlt2,
    avatarAlt3,
    avatarAlt4,
    avatarSrc1,
    avatarSrc2,
    avatarSrc3,
    avatarSrc4,
    backgroundColor,
    ctaHref,
    ctaLabel,
    heading,
    headingColor,
    primaryButtonBackgroundColor,
    primaryButtonTextColor,
    secondaryButtonBorderColor,
    secondaryButtonTextColor,
    secondaryCtaHref,
    secondaryCtaLabel,
    subtext,
    textColor,
    variant,
  } = {
    avatarAlt1: "",
    avatarAlt2: "",
    avatarAlt3: "",
    avatarAlt4: "",
    avatarSrc1: avatarSources[0],
    avatarSrc2: avatarSources[1],
    avatarSrc3: avatarSources[2],
    avatarSrc4: avatarSources[3],
    backgroundColor: "#fffffe",
    ctaHref: "https://example.com/",
    headingColor: "#030712",
    primaryButtonBackgroundColor: "#4f46e5",
    primaryButtonTextColor: "#f8fafc",
    secondaryButtonBorderColor: "#d1d5db",
    secondaryButtonTextColor: "#4b5563",
    secondaryCtaHref: "https://example.com/",
    textColor: "#4b5563",
    variant: "default" as CTAWithTeamAvatarsVariant,
    ...props,
  };

  const preset = variantContent[variant];
  const avatars = [
    { alt: avatarAlt1, src: avatarSrc1 },
    { alt: avatarAlt2, src: avatarSrc2 },
    { alt: avatarAlt3, src: avatarSrc3 },
    { alt: avatarAlt4, src: avatarSrc4 },
  ];
  const avatarRow = (
    <MjmlSection backgroundColor={backgroundColor} padding="44px 144px 12px">
      {avatars.map((avatar, index) => (
        <MjmlColumn key={`${avatar.src}-${index}`} padding="0 4px" width="25%">
          <MjmlImage
            alt={avatar.alt}
            border="2px solid #fffffe"
            borderRadius="9999px"
            padding="0"
            src={avatar.src}
            width="56px"
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
  let copyPadding = "44px 24px";
  if (variant === "avatars-top") {
    copyPadding = "12px 64px 44px";
  } else if (variant === "default") {
    copyPadding = "44px 64px 12px";
  }
  const copy = (
    <MjmlSection backgroundColor={backgroundColor} padding={copyPadding}>
      {variant === "single-avatar" ? (
        <MjmlColumn padding="0 24px 0 0" verticalAlign="middle" width="28%">
          <MjmlImage
            alt={avatarAlt1}
            borderRadius="9999px"
            padding="0"
            src={avatarSrc1}
            width="120px"
          />
        </MjmlColumn>
      ) : null}
      <MjmlColumn
        padding="0"
        verticalAlign="middle"
        width={variant === "single-avatar" ? "72%" : "100%"}
      >
        <CTACopy
          align={variant === "single-avatar" ? "left" : "center"}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel ?? preset.ctaLabel}
          heading={heading ?? preset.heading}
          headingColor={headingColor}
          primaryButtonBackgroundColor={primaryButtonBackgroundColor}
          primaryButtonTextColor={primaryButtonTextColor}
          secondaryButtonBorderColor={secondaryButtonBorderColor}
          secondaryButtonTextColor={secondaryButtonTextColor}
          secondaryCtaHref={secondaryCtaHref}
          secondaryCtaLabel={secondaryCtaLabel ?? preset.secondaryCtaLabel}
          subtext={subtext ?? preset.subtext}
          textColor={textColor}
        />
      </MjmlColumn>
    </MjmlSection>
  );

  if (variant === "single-avatar") {
    return copy;
  }
  return (
    <>
      {variant === "avatars-top" ? avatarRow : copy}
      {variant === "avatars-top" ? copy : avatarRow}
    </>
  );
};

export const CTAWithTeamAvatars = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: CTAWithTeamAvatarsProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="The team welcomes you"
    theme={theme}
  >
    <CTAWithTeamAvatarsSection {...props} />
  </CTAEmailShell>
);

CTAWithTeamAvatars.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTeamAvatarsProps;
