/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";
import type { CSSProperties } from "react";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type CTAWithTeamAvatarsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithTeamAvatarsProps {
  theme?: EmailThemeTokens;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  avatarSrc1?: string;
  avatarAlt1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  avatarSrc3?: string;
  avatarAlt3?: string;
  avatarSrc4?: string;
  avatarAlt4?: string;
  variant?: CTAWithTeamAvatarsVariant;
}

const skewStyle = (variant: CTAWithTeamAvatarsVariant): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(-10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(10deg)" };
    }
    default: {
      return {};
    }
  }
};

const unskewStyle = (variant: CTAWithTeamAvatarsVariant): CSSProperties => {
  switch (variant) {
    case "slanted-left": {
      return { transform: "skewX(10deg)" };
    }
    case "slanted-right": {
      return { transform: "skewX(-10deg)" };
    }
    default: {
      return {};
    }
  }
};

export const CTAWithTeamAvatars = ({
  theme = defaultTheme,
  heading = "Join Our Team",
  subtext = "Work with amazing people.",
  ctaLabel = "View Openings",
  ctaHref = "#",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-5&size=60",
  avatarAlt1 = "",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-6&size=60",
  avatarAlt2 = "",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-7&size=60",
  avatarAlt3 = "",
  avatarSrc4 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-8&size=60",
  avatarAlt4 = "",
  variant = "default",
}: CTAWithTeamAvatarsProps) => {
  const avatars = [
    {
      alt: avatarAlt1,
      marginRight: "-16px",
      padding: "0 4px 0 0",
      src: avatarSrc1,
    },
    {
      alt: avatarAlt2,
      marginRight: "-16px",
      padding: "0 4px",
      src: avatarSrc2,
    },
    {
      alt: avatarAlt3,
      marginRight: "-16px",
      padding: "0 4px",
      src: avatarSrc3,
    },
    {
      alt: avatarAlt4,
      marginRight: "0",
      padding: "0 0 0 4px",
      src: avatarSrc4,
    },
  ];
  return (
    <Html>
      <Head />
      <Preview>{heading}</Preview>
      <Body
        style={{
          backgroundColor: theme.colorBackground,
          fontFamily: theme.fontFamily,
          margin: 0,
        }}
      >
        <Container style={{ margin: "0 auto", maxWidth: theme.containerWidth }}>
          <Section style={{ padding: "64px 0", ...skewStyle(variant) }}>
            <Section style={{ textAlign: "center", ...unskewStyle(variant) }}>
              <Row style={{ display: "inline-block", marginBottom: "24px" }}>
                {avatars.map((avatar) => (
                  <Column
                    key={avatar.alt}
                    style={{ padding: avatar.padding, verticalAlign: "middle" }}
                  >
                    <Img
                      src={avatar.src}
                      alt={avatar.alt}
                      width="60"
                      height="60"
                      style={{
                        border: `2px solid ${theme.colorBackground}`,
                        borderRadius: "9999px",
                        display: "inline-block",
                        marginRight: avatar.marginRight,
                        objectFit: "cover",
                      }}
                    />
                  </Column>
                ))}
              </Row>
              <Text
                style={{
                  color: theme.colorText,
                  fontSize: theme.fontSizeHeading,
                  fontWeight: theme.fontWeightBold,
                  lineHeight: 1.375,
                  margin: 0,
                }}
              >
                {heading}
              </Text>
              <Text
                style={{
                  color: theme.colorTextMuted,
                  fontSize: theme.fontSizeBase,
                  margin: "8px 0 24px",
                }}
              >
                {subtext}
              </Text>
              {ctaLabel && ctaHref ? (
                <a
                  href={ctaHref}
                  style={{
                    backgroundColor: theme.colorPrimary,
                    borderRadius: theme.borderRadius,
                    color: theme.colorPrimaryForeground,
                    display: "inline-block",
                    fontSize: theme.fontSizeBase,
                    fontWeight: theme.fontWeightMedium,
                    padding: "12px 32px",
                    textDecoration: "none",
                  }}
                >
                  {ctaLabel}
                </a>
              ) : null}
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

CTAWithTeamAvatars.PreviewProps = {
  avatarAlt1: "Team 1",
  avatarAlt2: "Team 2",
  avatarAlt3: "Team 3",
  avatarAlt4: "Team 4",
  avatarSrc1:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-9&size=60",
  avatarSrc2:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-10&size=60",
  avatarSrc3:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-11&size=60",
  avatarSrc4:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-12&size=60",
  ctaHref: "https://example.com",
  ctaLabel: "View Openings",
  heading: "Join Our Team",
  subtext: "Work with amazing people.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTeamAvatarsProps;
