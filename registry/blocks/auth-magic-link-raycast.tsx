// Subject: Your login link for {_productName}

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

import { theme as raycastTheme } from "../themes/raycast";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  magicLinkHref?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthMagicLinkRaycast = ({
  _logoUrl,
  _logoAlt = "Logo",
  magicLinkHref = "#",
  expiresInMinutes = 30,
  _recipientEmail = "you@example.com",
  _productName = "Raycast",
}: Props) => {
  const t = raycastTheme;

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
      <Preview>Your login link</Preview>
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
            <Text style={style.heading}>Sign in to {_productName}</Text>
            <Text style={style.text}>
              Click the button below to sign in to your {_productName} account.
              This link expires in {expiresInMinutes} minutes.
            </Text>
            <Text style={{ ...style.text, marginTop: t.spacingBase }}>
              If you didn't request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={style.section}>
            <Button href={magicLinkHref} style={style.button}>
              Sign in to {_productName}
            </Button>
          </Section>

          <Text style={style.footer}>
            This link will expire in {expiresInMinutes} minutes. If you need
            help, reply to this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

AuthMagicLinkRaycast.PreviewProps = {
  _logoAlt: "Raycast",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Raycast",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;

export default AuthMagicLinkRaycast;
