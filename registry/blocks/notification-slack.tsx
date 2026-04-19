// Subject: You're now part of the {teamName} workspace

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

import { theme as slackTheme } from "../themes/slack";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  teamName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationSlack = ({
  _logoUrl,
  actorName = "Someone",
  _actorAvatarUrl,
  _action = "invited you",
  _targetName = "workspace",
  teamName = "Acme",
  ctaLabel = "Join Workspace",
  ctaHref = "#",
  _productName = "Slack",
}: Props) => {
  const t = slackTheme;

  const style = {
    cta: {
      backgroundColor: t.button.primary.backgroundColor,
      borderRadius: t.button.primary.borderRadius,
      color: t.button.primary.color,
      display: "inline-block",
      fontSize: t.button.primary.fontSize,
      fontWeight: t.button.primary.fontWeight,
      paddingX: t.button.primary.paddingX,
      paddingY: t.button.primary.paddingY,
      textDecoration: "none",
    } as const,
    heading: {
      color: t.colorText,
      fontSize: t.fontSizeXl,
      fontWeight: t.fontWeightMedium,
      marginBottom: t.spacingBase,
    },
    section: { padding: `${t.spacingXl} 0` },
    text: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      lineHeight: t.lineHeightBase,
      marginBottom: t.spacingBase,
    },
  };

  return (
    <Html>
      <Head />
      <Preview>Join {teamName}</Preview>
      <Body
        style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Text style={style.heading}>You're in!</Text>
            <Text style={style.text}>
              {actorName} invited you to join the {teamName} workspace on{" "}
              {_productName}.
            </Text>
            <Text style={style.text}>
              Connect with your team and start collaborating.
            </Text>
          </Section>

          {ctaLabel && ctaHref && (
            <Button href={ctaHref} style={style.cta}>
              {ctaLabel}
            </Button>
          )}
        </Container>
      </Body>
    </Html>
  );
};

NotificationSlack.PreviewProps = {
  _action: "invited you",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Slack",
  _targetName: "workspace",
  actorName: "Sarah",
  ctaHref: "https://slack.com",
  ctaLabel: "Join Workspace",
  teamName: "Acme",
} satisfies Props;

export default NotificationSlack;
