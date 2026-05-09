// Subject: Share your experience at {_targetName}

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

import { airbnbTheme } from "@/registry/bases/react-email/themes/airbnb";

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

export const NotificationAirbnb = ({
  _logoUrl,
  actorName = "Host",
  _actorAvatarUrl,
  _action = "completed their stay",
  _targetName = "your place",
  ctaLabel = "Leave a Review",
  ctaHref = "#",
  _productName = "Airbnb",
}: Props) => {
  void _logoUrl;
  void _actorAvatarUrl;
  void _action;
  void _productName;

  const t = airbnbTheme;

  return (
    <Html>
      <Head />
      <Preview>Share your experience</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-4 text-xl font-medium text-foreground">
                How was your trip?
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                {actorName} recently stayed at {_targetName} and we&apos;d love
                to hear about their experience.
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                Your review helps other travelers and supports your host.
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

NotificationAirbnb.PreviewProps = {
  _action: "completed their stay",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Airbnb",
  _targetName: "your place",
  actorName: "John",
  ctaHref: "https://airbnb.com/reviews",
  ctaLabel: "Leave a Review",
} satisfies Props;
