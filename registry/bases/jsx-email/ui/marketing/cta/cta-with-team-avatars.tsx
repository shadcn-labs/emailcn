import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Heading as EmailHeading,
  Text,
  Link,
  Row,
  Column,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
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
} satisfies Record<
  CTAWithTeamAvatarsVariant,
  {
    ctaLabel: string;
    heading: string;
    secondaryCtaLabel: string;
    subtext: string;
  }
>;

const defaultSectionStyles = {
  avatarAlt1: "",
  avatarAlt2: "",
  avatarAlt3: "",
  avatarAlt4: "",
  avatarBorderColor: "#fffffe",
  avatarSrc1: avatarSources[0],
  avatarSrc2: avatarSources[1],
  avatarSrc3: avatarSources[2],
  avatarSrc4: avatarSources[3],
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

type SectionProps = Omit<CTAWithTeamAvatarsProps, "theme">;
type ResolvedProps = typeof defaultSectionStyles &
  (typeof variantContent)[CTAWithTeamAvatarsVariant];

const Avatar = ({
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

const AvatarGroup = (props: ResolvedProps) => (
  <Section style={{ fontSize: 0, textAlign: "center" }}>
    {[
      [props.avatarSrc1, props.avatarAlt1],
      [props.avatarSrc2, props.avatarAlt2],
      [props.avatarSrc3, props.avatarAlt3],
      [props.avatarSrc4, props.avatarAlt4],
    ].map(([src, alt]) => (
      <Section key={src} style={{ display: "inline-block", maxWidth: "30px" }}>
        <Avatar
          alt={alt}
          borderColor={props.avatarBorderColor}
          src={src}
          width={40}
        />
      </Section>
    ))}
  </Section>
);

const SingleAvatar = (props: ResolvedProps) => (
  <Section style={{ fontSize: 0, textAlign: "center" }}>
    <Section style={{ display: "inline-block", maxWidth: "72px" }}>
      <Avatar
        alt={props.avatarAlt2}
        borderColor={props.avatarBorderColor}
        src={props.avatarSrc2}
        width={96}
      />
    </Section>
  </Section>
);

const Heading = ({ color, children }: { color: string; children: string }) => (
  <EmailHeading
    style={{
      color,
      fontFamily,
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "36px",
      margin: 0,
      textAlign: "center",
    }}
    as="h2"
  >
    {children}
  </EmailHeading>
);

const Copy = ({
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
      fontFamily,
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

const PrimaryButton = (props: ResolvedProps) => (
  <Link
    className="cta-team-primary"
    href={props.ctaHref}
    style={{
      backgroundColor: props.primaryButtonBackgroundColor,
      borderRadius: "8px",
      color: props.primaryButtonTextColor,
      display: "inline-block",
      fontFamily,
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

const SingleAvatarActions = (props: ResolvedProps) => (
  <Section align="center" style={{ margin: "auto" }}>
    <Fragment>
      <Row>
        <Column className="cta-team-action-cell">
          <PrimaryButton {...props} />
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
              fontFamily,
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

const VariantContent = ({
  props,
  variant,
}: {
  props: ResolvedProps;
  variant: CTAWithTeamAvatarsVariant;
}) => {
  if (variant === "single-avatar") {
    return (
      <>
        <SingleAvatar {...props} />
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
        <Heading color={props.headingColor}>{props.heading}</Heading>
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
        <Section className="cta-team-single-copy" style={{ padding: "0 44px" }}>
          <Copy color={props.textColor} text={props.subtext} />
        </Section>
        <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
        <SingleAvatarActions {...props} />
      </>
    );
  }

  const avatars = <AvatarGroup {...props} />;

  return (
    <>
      {variant === "avatars-top" ? avatars : null}
      {variant === "avatars-top" ? (
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      ) : null}
      <Heading color={props.headingColor}>{props.heading}</Heading>
      <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      {variant === "default" ? avatars : null}
      {variant === "default" ? (
        <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
      ) : null}
      <Copy color={props.textColor} text={props.subtext} />
      <Section style={{ lineHeight: "36px" }}>&zwj;</Section>
      <PrimaryButton {...props} />
    </>
  );
};

export const CTAWithTeamAvatarsSection = (props: SectionProps) => {
  const variant = props.variant ?? "default";
  const resolved = {
    ...defaultSectionStyles,
    ...variantContent[variant],
    ...props,
  } as ResolvedProps;

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
                    <VariantContent props={resolved} variant={variant} />
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

export const CTAWithTeamAvatars = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  variant = "default",
  ...props
}: CTAWithTeamAvatarsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />
    </Head>
    <Preview>{props.heading ?? variantContent[variant].heading}</Preview>
    <Body
      style={{
        backgroundColor: pageBackgroundColor,
        fontFamily: theme.fontFamily,
        margin: 0,
      }}
    >
      <Container
        style={{ margin: "0 auto", maxWidth: "600px", width: "600px" }}
      >
        <CTAWithTeamAvatarsSection
          {...props}
          pageBackgroundColor={pageBackgroundColor}
          variant={variant}
        />
      </Container>
    </Body>
  </Html>
);

CTAWithTeamAvatars.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTeamAvatarsProps;
