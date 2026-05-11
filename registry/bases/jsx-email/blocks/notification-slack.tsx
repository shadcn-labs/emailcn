// Subject: You're now part of the {teamName} workspace

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { slackTheme } from "@/registry/bases/jsx-email/themes/slack";

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
  void _logoUrl;
  void _actorAvatarUrl;
  void _targetName;
  void _action;

  return (
    <Html>
      <Head />
      <Preview>Join {teamName}</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: slackTheme.colorBackground,
            fontFamily: slackTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: slackTheme.containerWidth, padding: "32px 0" }}
          >
            <Section style={{ paddingTop: slackTheme.spacingXl }}>
              <Text
                style={{
                  color: slackTheme.colorText,
                  fontSize: slackTheme.fontSizeXl,
                  fontWeight: slackTheme.fontWeightMedium,
                  marginBottom: slackTheme.spacingBase,
                }}
              >
                You&apos;re in!
              </Text>
              <Text
                style={{
                  color: slackTheme.colorTextMuted,
                  fontSize: slackTheme.fontSizeBase,
                  lineHeight: slackTheme.lineHeightBase,
                  marginBottom: slackTheme.spacingBase,
                }}
              >
                {actorName} invited you to join the {teamName} workspace on{" "}
                {_productName}.
              </Text>
              <Text
                style={{
                  color: slackTheme.colorTextMuted,
                  fontSize: slackTheme.fontSizeBase,
                  lineHeight: slackTheme.lineHeightBase,
                  marginBottom: slackTheme.spacingBase,
                }}
              >
                Connect with your team and start collaborating.
              </Text>
            </Section>

            {ctaLabel && ctaHref && (
              <Section style={{ paddingTop: slackTheme.spacingLg }}>
                <Button
                  href={ctaHref}
                  width={160}
                  height={40}
                  style={{
                    backgroundColor: slackTheme.button.primary.backgroundColor,
                    borderRadius: slackTheme.button.primary.borderRadius,
                    color: slackTheme.button.primary.color,
                    display: "inline-block",
                    fontSize: slackTheme.button.primary.fontSize,
                    fontWeight: slackTheme.button.primary.fontWeight,
                    height: "auto",
                    paddingBottom: slackTheme.button.primary.paddingY,
                    paddingLeft: slackTheme.button.primary.paddingX,
                    paddingRight: slackTheme.button.primary.paddingX,
                    paddingTop: slackTheme.button.primary.paddingY,
                    textDecoration: "none",
                    width: "auto",
                  }}
                >
                  {ctaLabel}
                </Button>
              </Section>
            )}
          </Container>
        </Body>
      </Tailwind>
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
