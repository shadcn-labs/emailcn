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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { dropboxTheme } from "@/registry/bases/jsx-email/themes/dropbox";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetDropbox = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Dropbox",
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Reset your password</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: dropboxTheme.colorBackground,
          fontFamily: dropboxTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: dropboxTheme.containerWidth, padding: "32px 0" }}
        >
          <Section style={{ paddingTop: dropboxTheme.spacingXl }}>
            <Text
              style={{
                color: dropboxTheme.colorText,
                fontSize: dropboxTheme.fontSizeXl,
                fontWeight: dropboxTheme.fontWeightMedium,
                marginBottom: dropboxTheme.spacingBase,
              }}
            >
              Reset your password
            </Text>
            <Text
              style={{
                color: dropboxTheme.colorTextMuted,
                fontSize: dropboxTheme.fontSizeBase,
                lineHeight: dropboxTheme.lineHeightBase,
                marginBottom: dropboxTheme.spacingBase,
              }}
            >
              Click the button below to reset your {_productName} password. This
              link expires in {expiresInMinutes} minutes.
            </Text>
            <Text
              style={{
                color: dropboxTheme.colorTextMuted,
                fontSize: dropboxTheme.fontSizeBase,
                lineHeight: dropboxTheme.lineHeightBase,
                marginBottom: dropboxTheme.spacingBase,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={{ paddingTop: dropboxTheme.spacingXl }}>
            <Button
              href={resetHref}
              width={160}
              height={40}
              style={{
                backgroundColor: dropboxTheme.button.primary.backgroundColor,
                borderRadius: dropboxTheme.button.primary.borderRadius,
                color: dropboxTheme.button.primary.color,
                display: "inline-block",
                fontSize: dropboxTheme.button.primary.fontSize,
                fontWeight: dropboxTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: dropboxTheme.button.primary.paddingY,
                paddingLeft: dropboxTheme.button.primary.paddingX,
                paddingRight: dropboxTheme.button.primary.paddingX,
                paddingTop: dropboxTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Reset Password
            </Button>
          </Section>

          <Text
            style={{
              color: dropboxTheme.colorTextMuted,
              fontSize: dropboxTheme.fontSizeSm,
              marginTop: dropboxTheme.spacingLg,
            }}
          >
            Didn&apos;t request this? If you didn&apos;t ask for a password
            reset, you can ignore this email.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

AuthPasswordResetDropbox.PreviewProps = {
  _logoAlt: "Dropbox",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Dropbox",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
