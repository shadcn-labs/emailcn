// Subject: Reset your password for {productName}

import { Body, Button, Container, Head, Html, Preview, Section, Text } from "react-email";
import type { EmailTheme } from "../themes/default";
import { theme as defaultTheme } from "../themes/default";

interface Props {
  logoUrl?: string;
  logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  productName?: string;
}

const getDropboxTheme = (t: EmailTheme): EmailTheme => ({
  ...t,
  button: {
    ...t.button,
    primary: {
      ...t.button.primary,
      backgroundColor: "#0061ff",
      color: "#ffffff",
    },
  },
  colorPrimary: "#0061ff",
  colorPrimaryForeground: "#ffffff",
});

export const AuthPasswordResetDropbox = ({
  _logoUrl,
  _logoAlt = "Logo",
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Dropbox",
}: Props) => {
  const baseTheme = defaultTheme;
  const t = getDropboxTheme(baseTheme);

  const style = {
    button: {
      backgroundColor: t.button.primary.backgroundColor,
      borderRadius: t.button.primary.borderRadius,
      color: t.button.primary.color,
      display: "inline-block",
      fontSize: t.button.primary.fontSize,
      fontWeight: t.button.primary.fontWeight,
      paddingX: t.button.primary.paddingX,
      paddingY: t.button.primary.paddingY,
      textDecoration: "none",
    } as const,
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

  return (
    <Html>
      <Head />
      <Preview>Reset your password</Preview>
      <Body style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}>
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Text style={style.heading}>Reset your password</Text>
            <Text style={style.text}>
              Click the button below to reset your {productName} password. This link expires in{" "}
              {expiresInMinutes} minutes.
            </Text>
            <Text style={{ ...style.text, marginTop: t.spacingBase }}>
              If you didn't request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={style.section}>
            <Button href={resetHref} style={style.button}>
              Reset Password
            </Button>
          </Section>

          <Text style={style.footer}>
            Didn't request this? If you didn't ask for a password reset, you can ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

AuthPasswordResetDropbox.PreviewProps = {
  expiresInMinutes: 60,
  logoAlt: "Dropbox",
  logoUrl: "https://example.com/logo.png",
  productName: "Dropbox",
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;

export default AuthPasswordResetDropbox;
