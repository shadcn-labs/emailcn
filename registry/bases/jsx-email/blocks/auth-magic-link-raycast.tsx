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
import { raycastTheme } from "@/registry/bases/jsx-email/themes/raycast";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  magicLinkHref?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthMagicLinkRaycast = ({
  magicLinkHref = "#",
  expiresInMinutes = 30,
  _productName = "Raycast",
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Your login link</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: raycastTheme.colorBackground,
          fontFamily: raycastTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: raycastTheme.containerWidth, padding: "32px 0" }}
        >
          <Section style={{ paddingTop: raycastTheme.spacingXl }}>
            <Text
              style={{
                color: raycastTheme.colorText,
                fontSize: raycastTheme.fontSizeXl,
                fontWeight: raycastTheme.fontWeightMedium,
                marginBottom: raycastTheme.spacingBase,
              }}
            >
              Sign in to {_productName}
            </Text>
            <Text
              style={{
                color: raycastTheme.colorTextMuted,
                fontSize: raycastTheme.fontSizeBase,
                lineHeight: raycastTheme.lineHeightBase,
                marginBottom: raycastTheme.spacingBase,
              }}
            >
              Click the button below to sign in to your {_productName} account.
              This link expires in {expiresInMinutes} minutes.
            </Text>
            <Text
              style={{
                color: raycastTheme.colorTextMuted,
                fontSize: raycastTheme.fontSizeBase,
                lineHeight: raycastTheme.lineHeightBase,
                marginBottom: raycastTheme.spacingBase,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={{ paddingTop: raycastTheme.spacingXl }}>
            <Button
              href={magicLinkHref}
              width={160}
              height={40}
              style={{
                backgroundColor: raycastTheme.button.primary.backgroundColor,
                borderRadius: raycastTheme.button.primary.borderRadius,
                color: raycastTheme.button.primary.color,
                display: "inline-block",
                fontSize: raycastTheme.button.primary.fontSize,
                fontWeight: raycastTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: raycastTheme.button.primary.paddingY,
                paddingLeft: raycastTheme.button.primary.paddingX,
                paddingRight: raycastTheme.button.primary.paddingX,
                paddingTop: raycastTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Sign in to {_productName}
            </Button>
          </Section>

          <Text
            style={{
              color: raycastTheme.colorTextMuted,
              fontSize: raycastTheme.fontSizeSm,
              marginTop: raycastTheme.spacingLg,
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

AuthMagicLinkRaycast.PreviewProps = {
  _logoAlt: "Raycast",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Raycast",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;
