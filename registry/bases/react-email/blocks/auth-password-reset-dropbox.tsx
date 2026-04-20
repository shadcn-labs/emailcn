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

import { defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

const dropboxTheme = mergeEmailThemes(defaultTheme, {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0061ff",
          fg: "#ffffff",
          hover: "#0052dd",
        },
      },
    },
  },
});

export const AuthPasswordResetDropbox = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Dropbox",
}: Props) => {
  const t = dropboxTheme;

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
                Click the button below to reset your {_productName} password.
                This link expires in {expiresInMinutes} minutes.
              </Text>
              <Text className="mb-6 text-base leading-snug text-foreground-muted">
                If you didn&apos;t request this, you can safely ignore this
                email.
              </Text>
            </Section>

            <Section className="py-12">
              <Button
                href={resetHref}
                className="inline-block rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-fg no-underline"
              >
                Reset Password
              </Button>
            </Section>

            <Text className="mt-8 text-sm text-foreground-muted">
              Didn&apos;t request this? If you didn&apos;t ask for a password
              reset, you can ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AuthPasswordResetDropbox.PreviewProps = {
  _logoAlt: "Dropbox",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Dropbox",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
