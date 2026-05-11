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
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { twitchTheme } from "@/registry/bases/jsx-email/themes/twitch";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  otpCode?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthOtpTwitch = ({
  otpCode = "123456",
  expiresInMinutes = 10,
  _productName = "Twitch",
}: Props) => {
  const codeDigits = [...otpCode];

  return (
    <Html>
      <Head>
        <DefaultFonts />
      </Head>
      <Preview>Your verification code</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: twitchTheme.colorBackground,
            fontFamily: twitchTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: twitchTheme.containerWidth, padding: "32px 0" }}
          >
            <Section style={{ paddingTop: twitchTheme.spacingXl }}>
              <Text
                style={{
                  color: twitchTheme.colorText,
                  fontSize: twitchTheme.fontSizeXl,
                  fontWeight: twitchTheme.fontWeightMedium,
                  marginBottom: twitchTheme.spacingBase,
                }}
              >
                Your verification code
              </Text>
              <Text
                style={{
                  color: twitchTheme.colorTextMuted,
                  fontSize: twitchTheme.fontSizeBase,
                  lineHeight: twitchTheme.lineHeightBase,
                  marginBottom: twitchTheme.spacingBase,
                }}
              >
                Enter this code to sign in to your {_productName} account. This
                code expires in {expiresInMinutes} minutes.
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: twitchTheme.colorBackgroundMuted,
                borderRadius: twitchTheme.borderRadius,
                marginTop: twitchTheme.spacingBase,
                paddingBottom: "24px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "24px",
              }}
            >
              <Text
                style={{
                  color: twitchTheme.colorText,
                  fontFamily: twitchTheme.fontFamilyMono,
                  fontSize: "32px",
                  fontWeight: twitchTheme.fontWeightBold,
                  letterSpacing: "8px",
                  textAlign: "center" as const,
                }}
              >
                {codeDigits.map((digit, index) => (
                  <span key={index}>{digit}</span>
                ))}
              </Text>
            </Section>

            <Text
              style={{
                color: twitchTheme.colorTextMuted,
                fontSize: twitchTheme.fontSizeSm,
                marginTop: twitchTheme.spacingLg,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AuthOtpTwitch.PreviewProps = {
  _logoAlt: "Twitch",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Twitch",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  otpCode: "123456",
} satisfies Props;
