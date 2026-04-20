// Subject: {_action} — {_targetName}

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";

import { theme as defaultTheme } from "@/registry/themes/default";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationDefault = ({
  _actorAvatarUrl,
  actorName = "Someone",
  _action = "notified you",
  _targetName = "your update",
  ctaLabel = "View",
  ctaHref = "#",
}: Props) => {
  const t = defaultTheme;

  return (
    <Html>
      <Head />
      <Preview>New notification</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Row className="mb-6">
                <Column>
                  {_actorAvatarUrl ? (
                    <Img
                      src={_actorAvatarUrl}
                      alt={actorName}
                      height={48}
                      width={48}
                      className="rounded-full"
                    />
                  ) : null}
                </Column>
                <Column className="pl-6">
                  <Text className="text-base font-medium text-foreground">
                    {actorName}
                  </Text>
                  <Text className="mb-1 text-base text-foreground-muted">
                    {_action}
                  </Text>
                </Column>
              </Row>

              <Text className="mb-6 text-xl font-medium text-foreground">
                {_targetName}
              </Text>

              {ctaLabel && ctaHref ? (
                <Button
                  href={ctaHref}
                  className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
                >
                  {ctaLabel}
                </Button>
              ) : null}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

NotificationDefault.PreviewProps = {
  _action: "commented on your post",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _targetName: "New comment on your project",
  actorName: "Sarah",
  ctaHref: "https://example.com/notification",
  ctaLabel: "View Comment",
} satisfies Props;

export default NotificationDefault;
