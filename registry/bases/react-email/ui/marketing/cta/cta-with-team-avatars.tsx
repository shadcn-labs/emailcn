/* eslint-disable @next/next/no-img-element */
import { Body, Container, Head, Html, Preview, Tailwind } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CTAWithTeamAvatarsVariant =
  | "default"
  | "avatars-top"
  | "single-avatar";

export interface CTAWithTeamAvatarsProps {
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
  "https://assets.mailviews.com/images/components/reviews/avatar-2.jpg",
  "https://assets.mailviews.com/images/components/reviews/avatar.jpg",
  "https://assets.mailviews.com/images/components/reviews/avatar-4.jpg",
  "https://assets.mailviews.com/images/components/reviews/avatar-5.jpg",
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
  <img
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
  <div style={{ fontSize: 0, textAlign: "center" }}>
    {[
      [props.avatarSrc1, props.avatarAlt1],
      [props.avatarSrc2, props.avatarAlt2],
      [props.avatarSrc3, props.avatarAlt3],
      [props.avatarSrc4, props.avatarAlt4],
    ].map(([src, alt]) => (
      <div key={src} style={{ display: "inline-block", maxWidth: "30px" }}>
        <Avatar
          alt={alt}
          borderColor={props.avatarBorderColor}
          src={src}
          width={40}
        />
      </div>
    ))}
  </div>
);

const SingleAvatar = (props: ResolvedProps) => (
  <div style={{ fontSize: 0, textAlign: "center" }}>
    <div style={{ display: "inline-block", maxWidth: "72px" }}>
      <Avatar
        alt={props.avatarAlt2}
        borderColor={props.avatarBorderColor}
        src={props.avatarSrc2}
        width={96}
      />
    </div>
  </div>
);

const Heading = ({ color, children }: { color: string; children: string }) => (
  <h2
    style={{
      color,
      fontFamily,
      fontSize: "30px",
      fontWeight: 500,
      lineHeight: "36px",
      margin: 0,
      textAlign: "center",
    }}
  >
    {children}
  </h2>
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
  <p
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
  </p>
);

const PrimaryButton = (props: ResolvedProps) => (
  <a
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
  </a>
);

const SingleAvatarActions = (props: ResolvedProps) => (
  <table
    align="center"
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={{ margin: "auto" }}
  >
    <tbody>
      <tr>
        <td className="cta-team-action-cell">
          <PrimaryButton {...props} />
        </td>
        <td
          className="cta-team-action-cell cta-team-action-gap"
          style={{ width: "24px" }}
        >
          &zwj;
        </td>
        <td className="cta-team-action-cell">
          <a
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
          </a>
        </td>
      </tr>
    </tbody>
  </table>
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
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
        <Heading color={props.headingColor}>{props.heading}</Heading>
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
        <div className="cta-team-single-copy" style={{ padding: "0 44px" }}>
          <Copy color={props.textColor} text={props.subtext} />
        </div>
        <div style={{ lineHeight: "36px" }}>&zwj;</div>
        <SingleAvatarActions {...props} />
      </>
    );
  }

  const avatars = <AvatarGroup {...props} />;

  return (
    <>
      {variant === "avatars-top" ? avatars : null}
      {variant === "avatars-top" ? (
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
      ) : null}
      <Heading color={props.headingColor}>{props.heading}</Heading>
      <div style={{ lineHeight: "24px" }}>&zwj;</div>
      {variant === "default" ? avatars : null}
      {variant === "default" ? (
        <div style={{ lineHeight: "24px" }}>&zwj;</div>
      ) : null}
      <Copy color={props.textColor} text={props.subtext} />
      <div style={{ lineHeight: "36px" }}>&zwj;</div>
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td
            style={{
              backgroundColor: resolved.backgroundColor,
              maxWidth: "100%",
              paddingBottom: "44px",
              width: "600px",
            }}
          >
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td style={{ padding: "0 24px", textAlign: "center" }}>
                    <div style={{ lineHeight: "44px" }}>&zwj;</div>
                    <VariantContent props={resolved} variant={variant} />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
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
    <Tailwind config={theme}>
      <Body
        style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
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
    </Tailwind>
  </Html>
);

CTAWithTeamAvatars.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTeamAvatarsProps;
