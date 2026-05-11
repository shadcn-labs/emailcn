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
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetDefault = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Acme",
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Reset your password</Preview>
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
              Reset your password
            </Text>
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeBase,
                lineHeight: defaultTheme.lineHeightBase,
                marginBottom: defaultTheme.spacingBase,
              }}
            >
              We received a request to reset your password for your{" "}
              {_productName} account. Click the button below to choose a new
              password. This link expires in {expiresInMinutes} minutes.
            </Text>
          </Section>

          <Section style={{ paddingTop: defaultTheme.spacingXl }}>
            <Button
              href={resetHref}
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
              Reset password
            </Button>
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

AuthPasswordResetDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
