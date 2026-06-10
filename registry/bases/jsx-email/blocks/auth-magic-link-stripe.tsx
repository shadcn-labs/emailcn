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
import { stripeTheme } from "@/registry/bases/jsx-email/themes/stripe";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  magicLinkHref?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthMagicLinkStripe = ({
  magicLinkHref = "#",
  expiresInMinutes = 30,
  _productName = "Stripe",
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Your login link</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: stripeTheme.colorBackground,
          fontFamily: stripeTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: stripeTheme.containerWidth, padding: "32px 0" }}
        >
          <Section style={{ paddingTop: stripeTheme.spacingXl }}>
            <Text
              style={{
                color: stripeTheme.colorText,
                fontSize: stripeTheme.fontSizeXl,
                fontWeight: stripeTheme.fontWeightMedium,
                marginBottom: stripeTheme.spacingBase,
              }}
            >
              Sign in to {_productName}
            </Text>
            <Text
              style={{
                color: stripeTheme.colorTextMuted,
                fontSize: stripeTheme.fontSizeBase,
                lineHeight: stripeTheme.lineHeightBase,
                marginBottom: stripeTheme.spacingBase,
              }}
            >
              Click the button below to sign in to your {_productName} account.
              This link expires in {expiresInMinutes} minutes.
            </Text>
            <Text
              style={{
                color: stripeTheme.colorTextMuted,
                fontSize: stripeTheme.fontSizeBase,
                lineHeight: stripeTheme.lineHeightBase,
                marginBottom: stripeTheme.spacingBase,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={{ paddingTop: stripeTheme.spacingXl }}>
            <Button
              href={magicLinkHref}
              width={160}
              height={40}
              style={{
                backgroundColor: stripeTheme.button.primary.backgroundColor,
                borderRadius: stripeTheme.button.primary.borderRadius,
                color: stripeTheme.button.primary.color,
                display: "inline-block",
                fontSize: stripeTheme.button.primary.fontSize,
                fontWeight: stripeTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: stripeTheme.button.primary.paddingY,
                paddingLeft: stripeTheme.button.primary.paddingX,
                paddingRight: stripeTheme.button.primary.paddingX,
                paddingTop: stripeTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Sign in to {_productName}
            </Button>
          </Section>

          <Text
            style={{
              color: stripeTheme.colorTextMuted,
              fontSize: stripeTheme.fontSizeSm,
              marginTop: stripeTheme.spacingLg,
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

AuthMagicLinkStripe.PreviewProps = {
  _logoAlt: "Stripe",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Stripe",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;
