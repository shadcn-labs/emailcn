// Subject: Your login link for {_productName}

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

import { theme as defaultTheme } from "@/registry/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  magicLinkHref?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthMagicLinkDefault = ({
  magicLinkHref = "#",
  expiresInMinutes = 30,
  _productName = "Acme",
}: Props) => {
  const t = defaultTheme;

  return (
    <Html>
      <Head />
      <Preview>Your login link</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-6 text-xl font-medium text-foreground">
                Sign in to {_productName}
              </Text>
              <Text className="mb-6 text-base leading-snug text-foreground-muted">
                Click the button below to sign in to your {_productName}{" "}
                account. This link expires in {expiresInMinutes} minutes.
              </Text>
              <Text className="mb-6 text-base leading-snug text-foreground-muted">
                If you didn&apos;t request this, you can safely ignore this
                email.
              </Text>
            </Section>

            <Section className="py-12">
              <Button
                href={magicLinkHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                Sign in to {_productName}
              </Button>
            </Section>

            <Text className="mt-8 text-sm text-foreground-muted">
              This link will expire in {expiresInMinutes} minutes. If you need
              help, reply to this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AuthMagicLinkDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;

export default AuthMagicLinkDefault;
