// Subject: [{issueNumber}] {_action} — {_targetName}

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

import { theme as linearTheme } from "@/registry/themes/linear";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  issueNumber?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationLinear = ({
  _logoUrl,
  actorName = "Someone",
  _actorAvatarUrl,
  _action = "commented",
  _targetName = "your issue",
  issueNumber = "123",
  ctaLabel = "View Issue",
  ctaHref = "#",
  _productName = "Linear",
}: Props) => {
  void _logoUrl;
  void _productName;

  const t = linearTheme;

  return (
    <Html>
      <Head />
      <Preview>New notification</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Row className="mb-4">
                <Column className="w-[48px] align-top">
                  {_actorAvatarUrl && (
                    <Img
                      src={_actorAvatarUrl}
                      alt={actorName}
                      className="size-12 rounded-full"
                      height={48}
                      width={48}
                    />
                  )}
                </Column>
                <Column className="align-top pl-4">
                  <Text className="m-0 text-base font-medium text-foreground">
                    {actorName}
                  </Text>
                  <Text className="m-0 mt-1 text-base text-foreground-muted">
                    {_action}
                  </Text>
                </Column>
              </Row>

              <Text className="mb-6 text-xl font-medium text-foreground">
                <span className="mr-2 inline-block rounded bg-primary px-2 py-1 text-sm text-primary-fg">
                  #{issueNumber}
                </span>
                {_targetName}
              </Text>

              {ctaLabel && ctaHref && (
                <Button
                  href={ctaHref}
                  className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
                >
                  {ctaLabel}
                </Button>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

NotificationLinear.PreviewProps = {
  _action: "commented on",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Linear",
  _targetName: "Bug in login flow",
  actorName: "Sarah",
  ctaHref: "https://linear.app/issue/42",
  ctaLabel: "View Issue",
  issueNumber: "42",
} satisfies Props;

export default NotificationLinear;
