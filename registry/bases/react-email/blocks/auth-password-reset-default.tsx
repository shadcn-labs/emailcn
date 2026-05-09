// Subject: Reset your password for {_productName}

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

import { defaultTheme } from "@/registry/bases/react-email/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetDefault = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Acme",
}: Props) => {
  const t = defaultTheme;

  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-6 text-xl font-medium text-foreground">
                Reset your password
              </Text>
              <Text className="mb-6 text-base leading-snug text-foreground-muted">
                We received a request to reset your password for your{" "}
                {_productName} account. Click the button below to choose a new
                password. This link expires in {expiresInMinutes} minutes.
              </Text>
            </Section>

            <Section className="py-12">
              <Button
                href={resetHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                Reset password
              </Button>
            </Section>

            <Text className="mt-8 text-sm text-foreground-muted">
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AuthPasswordResetDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
