// Subject: You're invited to join {teamName}

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

import { defaultTheme } from "@/registry/themes/default";

interface Props {
  inviterName?: string;
  inviterAvatarUrl?: string;
  teamName?: string;
  ctaHref?: string;
  expiresInHours?: number;
}

export const InviteDefault = ({
  inviterName = "Someone",
  inviterAvatarUrl,
  teamName = "Acme",
  ctaHref = "#",
  expiresInHours = 72,
}: Props) => {
  const t = defaultTheme;

  return (
    <Html>
      <Head />
      <Preview>You&apos;re invited to join {teamName}</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Row className="mb-8">
                <Column className="w-[56px] align-top">
                  {inviterAvatarUrl && (
                    <Img
                      src={inviterAvatarUrl}
                      alt={inviterName}
                      className="size-14 rounded-full"
                      height={56}
                      width={56}
                    />
                  )}
                </Column>
                <Column className="align-top pl-4">
                  <Text className="m-0 text-base font-medium text-foreground">
                    {inviterName}
                  </Text>
                  <Text className="m-0 mt-1 text-base text-foreground-muted">
                    invited you to join
                  </Text>
                </Column>
              </Row>

              <Text className="mb-4 text-xl font-medium text-foreground">
                {teamName}
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                Click the button below to accept this invitation and join the
                team.
              </Text>
              <Text className="mb-4 text-base leading-snug text-foreground-muted">
                This invitation expires in {expiresInHours} hours.
              </Text>
            </Section>

            <Section className="py-12">
              <Button
                href={ctaHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                Join {teamName}
              </Button>
            </Section>

            <Text className="mt-8 text-sm text-foreground-muted">
              If you didn&apos;t expect this invitation, you can ignore this
              email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

InviteDefault.PreviewProps = {
  ctaHref: "https://example.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl: "https://example.com/avatar.jpg",
  inviterName: "Sarah",
  teamName: "Acme Team",
} satisfies Props;
