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
import { notionTheme } from "@/registry/bases/jsx-email/themes/notion";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetNotion = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Notion",
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Reset your password</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: notionTheme.colorBackground,
          fontFamily: notionTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: notionTheme.containerWidth, padding: "32px 0" }}
        >
          <Section style={{ paddingTop: notionTheme.spacingXl }}>
            <Text
              style={{
                color: notionTheme.colorText,
                fontSize: notionTheme.fontSizeXl,
                fontWeight: notionTheme.fontWeightMedium,
                marginBottom: notionTheme.spacingBase,
              }}
            >
              Reset your password
            </Text>
            <Text
              style={{
                color: notionTheme.colorTextMuted,
                fontSize: notionTheme.fontSizeBase,
                lineHeight: notionTheme.lineHeightBase,
                marginBottom: notionTheme.spacingBase,
              }}
            >
              Click the button below to reset your {_productName} password. This
              link expires in {expiresInMinutes} minutes.
            </Text>
            <Text
              style={{
                color: notionTheme.colorTextMuted,
                fontSize: notionTheme.fontSizeBase,
                lineHeight: notionTheme.lineHeightBase,
                marginBottom: notionTheme.spacingBase,
              }}
            >
              If you didn&apos;t request this, you can safely ignore this email.
            </Text>
          </Section>

          <Section style={{ paddingTop: notionTheme.spacingXl }}>
            <Button
              href={resetHref}
              width={160}
              height={40}
              style={{
                backgroundColor: notionTheme.button.primary.backgroundColor,
                borderRadius: notionTheme.button.primary.borderRadius,
                color: notionTheme.button.primary.color,
                display: "inline-block",
                fontSize: notionTheme.button.primary.fontSize,
                fontWeight: notionTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: notionTheme.button.primary.paddingY,
                paddingLeft: notionTheme.button.primary.paddingX,
                paddingRight: notionTheme.button.primary.paddingX,
                paddingTop: notionTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Reset Password
            </Button>
          </Section>

          <Text
            style={{
              color: notionTheme.colorTextMuted,
              fontSize: notionTheme.fontSizeSm,
              marginTop: notionTheme.spacingLg,
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

AuthPasswordResetNotion.PreviewProps = {
  _logoAlt: "Notion",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Notion",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
