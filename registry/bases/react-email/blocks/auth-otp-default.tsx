// Subject: Your verification code for {_productName}

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "react-email";

import { defaultTheme } from "@/registry/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  otpCode?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthOtpDefault = ({
  otpCode = "123456",
  expiresInMinutes = 10,
  _productName = "Acme",
}: Props) => {
  const t = defaultTheme;
  const codeDigits = [...otpCode];

  return (
    <Html>
      <Head />
      <Preview>Your verification code</Preview>
      <Tailwind config={t}>
        <Body className="bg-background font-sans">
          <Container className="mx-auto max-w-container p-8">
            <Section className="py-12">
              <Text className="mb-6 text-xl font-medium text-foreground">
                Your verification code
              </Text>
              <Text className="mb-6 text-base leading-snug text-foreground-muted">
                Enter this code to sign in to your {_productName} account. This
                code expires in {expiresInMinutes} minutes.
              </Text>
            </Section>

            <Section className="mt-6 rounded-md bg-background-muted px-8 py-6">
              <Text className="text-center font-mono text-[32px] font-bold tracking-[8px] text-foreground">
                {codeDigits.map((digit, index) => (
                  <span key={index}>{digit}</span>
                ))}
              </Text>
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

AuthOtpDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  otpCode: "123456",
} satisfies Props;
