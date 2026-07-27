import { Fragment } from "react";
import {
  Body,
  Container,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
  Section,
  Heading,
  Text,
  Link,
  Row,
  Column,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";
type Cta_CTAWithTeamAvatarsVariant =
  | "default"
  | "avatars-top"
  | "single-avatar";
interface Cta_CTAWithTeamAvatarsProps {
  theme?: TailwindConfig;
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
const Cta_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const Cta_responsiveStyles = `
    .cta-team-primary:hover {
      background-color: #4338ca !important;
    }

    .cta-team-secondary:hover {
      background-color: #f9fafb !important;
    }

    @media only screen and (max-width: 599px) {
      .cta-team-single-copy {
        padding-left: 24px !important;
        padding-right: 24px !important;
      }
    }

    @media only screen and (max-width: 430px) {
      .cta-team-action-cell {
        display: block !important;
      }

      .cta-team-action-gap {
        line-height: 24px !important;
      }
    }
  `;
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
} satisfies Record<
  Cta_CTAWithTeamAvatarsVariant,
  {
    ctaLabel: string;
    heading: string;
    secondaryCtaLabel: string;
    subtext: string;
  }
>;
const Cta_defaultSectionStyles = {
  avatarAlt1: "",
  avatarAlt2: "",
  avatarAlt3: "",
  avatarAlt4: "",
  avatarBorderColor: "#fffffe",
  avatarSrc1: Cta_avatarSources[0],
  avatarSrc2: Cta_avatarSources[1],
  avatarSrc3: Cta_avatarSources[2],
  avatarSrc4: Cta_avatarSources[3],
  backgroundColor: "#fffffe",
  ctaHref: "https://example.com/",
  headingColor: "#030712",
  pageBackgroundColor: "#f1f5f9",
  primaryButtonBackgroundColor: "#4f46e5",
  primaryButtonTextColor: "#f8fafc",
  secondaryButtonBackgroundColor: "#fffffe",
  secondaryButtonBorderColor: "#d1d5db",
  secondaryButtonTextColor: "#4b5563",
  secondaryCtaHref: "https://example.com/",
  textColor: "#4b5563",
};
type Cta_SectionProps = Omit<Cta_CTAWithTeamAvatarsProps, "theme">;
type Cta_ResolvedProps = typeof Cta_defaultSectionStyles &
  (typeof Cta_variantContent)[Cta_CTAWithTeamAvatarsVariant];
const Cta_Avatar = ({
  alt,
  borderColor,
  src,
  width,
}: {
  alt: string;
  borderColor: string;
  src: string;
  width: number;
}) => (
  <Img
    alt={alt}
    src={src}
    style={{
      border: `2px solid ${borderColor}`,
      borderRadius: "9999px",
      display: "inline-block",
      maxWidth: `${width}px`,
      verticalAlign: "middle",
    }}
    width={width}
  />
);
const Cta_AvatarGroup = (props: Cta_ResolvedProps) => (
  <Section style={{ fontSize: 0, textAlign: "center" }}>
    {[
      [props.avatarSrc1, props.avatarAlt1],
      [props.avatarSrc2, props.avatarAlt2],
      [props.avatarSrc3, props.avatarAlt3],
      [props.avatarSrc4, props.avatarAlt4],
    ].map(([src, alt]) => (
      <Section key={src} style={{ display: "inline-block", maxWidth: "30px" }}>
        <Cta_Avatar
          alt={alt}
          borderColor={props.avatarBorderColor}
          src={src}
          width={40}
        />
      </Section>
    ))}
  </Section>
);
const Cta_SingleAvatar = (props: Cta_ResolvedProps) => (
  <Section style={{ fontSize: 0, textAlign: "center" }}>
    <Section style={{ display: "inline-block", maxWidth: "72px" }}>
      <Cta_Avatar
        alt={props.avatarAlt2}
        borderColor={props.avatarBorderColor}
        src={props.avatarSrc2}
        width={96}
      />
    </Section>
  </Section>
);
const Cta_Heading = ({
  color,
  children,
}: {
  color: string;
  children: string;
}) => (
  <Heading
    style={{
      color,
      fontFamily: Cta_fontFamily,
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "36px",
      margin: 0,
      textAlign: "center",
    }}
    as="h2"
  >
    {children}
  </Heading>
);
const Cta_Copy = ({
  className,
  color,
  text,
}: {
  className?: string;
  color: string;
  text: string;
}) => (
  <Text
    className={className}
    style={{
      color,
      fontFamily: Cta_fontFamily,
      fontSize: "16px",
      fontWeight: 300,
      lineHeight: "24px",
      margin: 0,
      textAlign: "center",
    }}
  >
    {text}
  </Text>
);
const Cta_PrimaryButton = (props: Cta_ResolvedProps) => (
  <Link
    className="cta-team-primary"
    href={props.ctaHref}
    style={{
      backgroundColor: props.primaryButtonBackgroundColor,
      borderRadius: "8px",
      color: props.primaryButtonTextColor,
      display: "inline-block",
      fontFamily: Cta_fontFamily,
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "24px",
      padding: "10px 22px",
      textAlign: "center",
      textDecoration: "none",
    }}
  >
    {props.ctaLabel}
  </Link>
);
const Cta_SingleAvatarActions = (props: Cta_ResolvedProps) => (
  <Section align="center" style={{ margin: "auto" }}>
    <Fragment>
      <Row>
        <Column className="cta-team-action-cell">
          <Cta_PrimaryButton {...props} />
        </Column>
        <Column
          className="cta-team-action-cell cta-team-action-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </Column>
        <Column className="cta-team-action-cell">
          <Link
            className="cta-team-secondary"
            href={props.secondaryCtaHref}
            style={{
              backgroundColor: props.secondaryButtonBackgroundColor,
              border: `1px solid ${props.secondaryButtonBorderColor}`,
              borderRadius: "8px",
              color: props.secondaryButtonTextColor,
              display: "inline-block",
              fontFamily: Cta_fontFamily,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              padding: "10px 22px",
              textAlign: "center",
              textDecoration: "none",
            }}
          >
            {props.secondaryCtaLabel}
          </Link>
        </Column>
      </Row>
    </Fragment>
  </Section>
);
const Cta_VariantContent = ({
  props,
  variant,
}: {
  props: Cta_ResolvedProps;
  variant: Cta_CTAWithTeamAvatarsVariant;
}) => {
  if (variant === "single-avatar") {
    return (
      <>
        <Cta_SingleAvatar {...props} />
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
        <Cta_Heading color={props.headingColor}>{props.heading}</Cta_Heading>
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
        <Section className="cta-team-single-copy" style={{ padding: "0 44px" }}>
          <Cta_Copy color={props.textColor} text={props.subtext} />
        </Section>
        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
        <Cta_SingleAvatarActions {...props} />
      </>
    );
  }
  const avatars = <Cta_AvatarGroup {...props} />;
  return (
    <>
      {variant === "avatars-top" ? avatars : null}
      {variant === "avatars-top" ? (
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      ) : null}
      <Cta_Heading color={props.headingColor}>{props.heading}</Cta_Heading>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      {variant === "default" ? avatars : null}
      {variant === "default" ? (
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      ) : null}
      <Cta_Copy color={props.textColor} text={props.subtext} />
      <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
      <Cta_PrimaryButton {...props} />
    </>
  );
};
const Cta_CTAWithTeamAvatarsSection = (props: Cta_SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = {
    ...Cta_defaultSectionStyles,
    ...Cta_variantContent[variant],
    ...props,
  } as Cta_ResolvedProps;
  return (
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column style={{ padding: "0 24px", textAlign: "center" }}>
                    <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
                    <Cta_VariantContent props={resolved} variant={variant} />
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  );
};
const Cta_CTAWithTeamAvatars = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: Cta_CTAWithTeamAvatarsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: Cta_responsiveStyles }} />
    </EmailHead>
    <Preview>{props.heading ?? Cta_variantContent[variant].heading}</Preview>
    <Tailwind config={theme}>
      <Body
        style={{
          backgroundColor: pageBackgroundColor,
          fontFamily: Cta_fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
        >
          <Cta_CTAWithTeamAvatarsSection
            {...props}
            pageBackgroundColor={pageBackgroundColor}
            variant={variant}
          />
        </Container>
      </Body>
    </Tailwind>
  </Html>
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
