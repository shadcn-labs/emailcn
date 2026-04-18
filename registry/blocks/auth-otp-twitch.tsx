// Subject: Your verification code for {_productName}

import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

import { theme as twitchTheme } from "../themes/twitch";

interface Props {
  logoUrl?: string;
  _logoAlt?: string;
  otpCode?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthOtpTwitch = ({
  _logoUrl,
  _logoAlt = "Logo",
  otpCode = "123456",
  expiresInMinutes = 10,
  _recipientEmail = "you@example.com",
  _productName = "Twitch",
}: Props) => {
  const t = twitchTheme;

  const style = {
    code: {
      color: t.colorText,
      fontFamily: t.fontFamilyMono,
      fontSize: "32px",
      fontWeight: t.fontWeightBold,
      letterSpacing: "8px",
      textAlign: "center" as const,
    },
    codeContainer: {
      backgroundColor: t.colorBackgroundMuted,
      borderRadius: t.borderRadius,
      marginTop: t.spacingBase,
      padding: t.spacingLg,
    },
    footer: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeSm,
      marginTop: t.spacingLg,
    },
    heading: {
      color: t.colorText,
      fontSize: t.fontSizeXl,
      fontWeight: t.fontWeightMedium,
      marginBottom: t.spacingBase,
    },
    section: { padding: `${t.spacingXl} 0` },
    text: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      lineHeight: t.lineHeightBase,
      marginBottom: t.spacingBase,
    },
  };

  const codeDigits = [...otpCode];

  return (
    <Html>
      <Head />
      <Preview>Your verification code</Preview>
      <Body
        style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}
      >
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Text style={style.heading}>Your verification code</Text>
            <Text style={style.text}>
              Enter this code to sign in to your {_productName} account. This
              code expires in {expiresInMinutes} minutes.
            </Text>
          </Section>

          <Section style={style.codeContainer}>
            <Text style={style.code}>
              {codeDigits.map((digit, index) => (
                <span key={index}>{digit}</span>
              ))}
            </Text>
          </Section>

          <Text style={style.footer}>
            If you didn't request this, you can safely ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

AuthOtpTwitch.PreviewProps = {
  _logoAlt: "Twitch",
  _productName: "Twitch",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  logoUrl: "https://example.com/logo.png",
  otpCode: "123456",
} satisfies Props;

export default AuthOtpTwitch;
