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
} from "react-email";

import { theme as slackTheme } from "@/registry/themes/slack";

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

  const t = slackTheme;

  return (
    <Html>
      <Head />
      <Preview>Join {teamName}</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-4 text-xl font-medium text-foreground">
                You&apos;re in!
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                {actorName} invited you to join the {teamName} workspace on{" "}
                {_productName}.
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                Connect with your team and start collaborating.
              </Text>
            </Section>

            {ctaLabel && ctaHref && (
              <Section className="py-4">
                <Button
                  href={ctaHref}
                  className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
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

export default NotificationSlack;
