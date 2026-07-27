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
  MjmlImage,
  MjmlSection,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
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
type Cta_CTAWithTeamAvatarsVariant =
  | "default"
  | "avatars-top"
  | "single-avatar";
interface Cta_CTAWithTeamAvatarsProps {
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
  variant?: Cta_CTAWithTeamAvatarsVariant;
}
const Cta_avatarSources = [
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-2.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-4.jpg",
  "https://emailcn.vercel.app/api/email-assets/reviews/avatar-5.jpg",
] as const;
const Cta_variantContent = {
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
const Cta_CTAWithTeamAvatarsSection = (
  props: Omit<Cta_CTAWithTeamAvatarsProps, "theme">
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
    avatarSrc1: Cta_avatarSources[0],
    avatarSrc2: Cta_avatarSources[1],
    avatarSrc3: Cta_avatarSources[2],
    avatarSrc4: Cta_avatarSources[3],
    backgroundColor: "#fffffe",
    ctaHref: "https://example.com/",
    headingColor: "#030712",
    primaryButtonBackgroundColor: "#4f46e5",
    primaryButtonTextColor: "#f8fafc",
    secondaryButtonBorderColor: "#d1d5db",
    secondaryButtonTextColor: "#4b5563",
    secondaryCtaHref: "https://example.com/",
    textColor: "#4b5563",
    variant: "default" as Cta_CTAWithTeamAvatarsVariant,
    ...props,
  };
  const preset = Cta_variantContent[variant];
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
const Cta_CTAWithTeamAvatars = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: Cta_CTAWithTeamAvatarsProps) => (
  <CTAEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="The team welcomes you"
    theme={theme}
  >
    <Cta_CTAWithTeamAvatarsSection {...props} />
  </CTAEmailShell>
);
Cta_CTAWithTeamAvatars.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies Cta_CTAWithTeamAvatarsProps;
const __Cta = Cta_CTAWithTeamAvatars;
export interface AvatarCallToActionProps {
  theme?: Parameters<typeof __Cta>[0]["theme"];
  heading?: string;
  description?: string;
  actions?: {
    href: string;
    label: string;
  }[];
  avatars?: {
    src: string;
    alt?: string;
  }[];
  placement?: "top" | "inline";
}
const avatarCallToActionImage = (
  avatar:
    | {
        src: string;
        alt?: string;
      }
    | undefined
) => ({
  alt: avatar?.alt,
  src: avatar?.src,
});
const avatarCallToActionLink = (
  action:
    | {
        href: string;
        label: string;
      }
    | undefined
) => ({
  href: action?.href,
  label: action?.label,
});
export const AvatarCallToAction = ({
  theme,
  heading,
  description,
  actions,
  avatars,
  placement = "inline",
}: AvatarCallToActionProps) => {
  const [first, second, third, fourth] = avatars ?? [];
  const [primaryAction, secondaryAction] = actions ?? [];
  const avatar1 = avatarCallToActionImage(first);
  const avatar2 = avatarCallToActionImage(second);
  const avatar3 = avatarCallToActionImage(third);
  const avatar4 = avatarCallToActionImage(fourth);
  const primary = avatarCallToActionLink(primaryAction);
  const secondary = avatarCallToActionLink(secondaryAction);
  let variant: Parameters<typeof __Cta>[0]["variant"] = "default";
  if (avatars?.length === 1) {
    variant = "single-avatar";
  } else if (placement === "top") {
    variant = "avatars-top";
  }
  return (
    <__Cta
      avatarAlt1={avatar1.alt}
      avatarAlt2={avatar2.alt}
      avatarAlt3={avatar3.alt}
      avatarAlt4={avatar4.alt}
      avatarSrc1={avatar1.src}
      avatarSrc2={avatar2.src}
      avatarSrc3={avatar3.src}
      avatarSrc4={avatar4.src}
      ctaHref={primary.href}
      ctaLabel={primary.label}
      heading={heading}
      secondaryCtaHref={secondary.href}
      secondaryCtaLabel={secondary.label}
      subtext={description}
      theme={theme}
      variant={variant}
    />
  );
};
AvatarCallToAction.PreviewProps = {
  placement: "inline",
} satisfies AvatarCallToActionProps;
