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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

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
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Your login link</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: defaultTheme.containerWidth, padding: "32px 0" }}
        >
          <Section style={{ paddingTop: defaultTheme.spacingXl }}>
            <Text
              style={{
                color: defaultTheme.colorText,
                fontSize: defaultTheme.fontSizeXl,
                fontWeight: defaultTheme.fontWeightMedium,
                marginBottom: defaultTheme.spacingBase,
              }}
            >
              Sign in to {_productName}
            </Text>
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeBase,
                lineHeight: defaultTheme.lineHeightBase,
                marginBottom: defaultTheme.spacingBase,
              }}
            >
              Click the button below to sign in to your {_productName} account.
              This link expires in {expiresInMinutes} minutes.
            </Text>
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeBase,
                lineHeight: defaultTheme.lineHeightBase,
                marginBottom: defaultTheme.spacingBase,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={{ paddingTop: defaultTheme.spacingXl }}>
            <Button
              href={magicLinkHref}
              width={160}
              height={40}
              style={{
                backgroundColor: defaultTheme.button.primary.backgroundColor,
                borderRadius: defaultTheme.button.primary.borderRadius,
                color: defaultTheme.button.primary.color,
                display: "inline-block",
                fontSize: defaultTheme.button.primary.fontSize,
                fontWeight: defaultTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: defaultTheme.button.primary.paddingY,
                paddingLeft: defaultTheme.button.primary.paddingX,
                paddingRight: defaultTheme.button.primary.paddingX,
                paddingTop: defaultTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Sign in to {_productName}
            </Button>
          </Section>

          <Text
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeSm,
              marginTop: defaultTheme.spacingLg,
            }}
          >
            This link will expire in {expiresInMinutes} minutes. If you need
            help, reply to this email.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

AuthMagicLinkDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;
