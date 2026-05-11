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
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

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
                Your verification code
              </Text>
              <Text
                style={{
                  color: defaultTheme.colorTextMuted,
                  fontSize: defaultTheme.fontSizeBase,
                  lineHeight: defaultTheme.lineHeightBase,
                  marginBottom: defaultTheme.spacingBase,
                }}
              >
                Enter this code to sign in to your {_productName} account. This
                code expires in {expiresInMinutes} minutes.
              </Text>
            </Section>

            <Section
              style={{
                backgroundColor: defaultTheme.colorBackgroundMuted,
                borderRadius: defaultTheme.borderRadius,
                marginTop: defaultTheme.spacingBase,
                paddingBottom: "24px",
                paddingLeft: "32px",
                paddingRight: "32px",
                paddingTop: "24px",
              }}
            >
              <Text
                style={{
                  color: defaultTheme.colorText,
                  fontFamily: defaultTheme.fontFamilyMono,
                  fontSize: "32px",
                  fontWeight: defaultTheme.fontWeightBold,
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
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeSm,
                marginTop: defaultTheme.spacingLg,
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

AuthOtpDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  otpCode: "123456",
} satisfies Props;
