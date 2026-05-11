// Subject: You're invited to join {teamName}

import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

interface Props {
  inviterName?: string;
  inviterAvatarUrl?: string;
  teamName?: string;
  ctaHref?: string;
  expiresInHours?: number;
}

export const InviteDefault = ({
  inviterName = "Someone",
  inviterAvatarUrl,
  teamName = "Acme",
  ctaHref = "#",
  expiresInHours = 72,
}: Props) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>You&apos;re invited to join {teamName}</Preview>
    <Tailwind>
      <Body
        style={{
          backgroundColor: defaultTheme.colorBackground,
          fontFamily: defaultTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: defaultTheme.containerWidth, padding: "32px" }}
        >
          <Section
            style={{
              paddingBottom: defaultTheme.spacingXl,
              paddingTop: defaultTheme.spacingXl,
            }}
          >
            <Row>
              <Column style={{ verticalAlign: "top", width: "56px" }}>
                {inviterAvatarUrl && (
                  <Img
                    src={inviterAvatarUrl}
                    alt={inviterName}
                    height={56}
                    width={56}
                    style={{
                      borderRadius: "50%",
                      height: "56px",
                      width: "56px",
                    }}
                  />
                )}
              </Column>
              <Column style={{ paddingLeft: "16px", verticalAlign: "top" }}>
                <Text
                  style={{
                    color: defaultTheme.colorText,
                    fontSize: defaultTheme.fontSizeBase,
                    fontWeight: defaultTheme.fontWeightMedium,
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  {inviterName}
                </Text>
                <Text
                  style={{
                    color: defaultTheme.colorTextMuted,
                    fontSize: defaultTheme.fontSizeBase,
                    margin: 0,
                    marginTop: "4px",
                  }}
                >
                  invited you to join
                </Text>
              </Column>
            </Row>

            <Text
              style={{
                color: defaultTheme.colorText,
                fontSize: defaultTheme.fontSizeXl,
                fontWeight: defaultTheme.fontWeightMedium,
                marginBottom: "16px",
                marginTop: defaultTheme.spacingLg,
              }}
            >
              {teamName}
            </Text>
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeBase,
                lineHeight: defaultTheme.lineHeightBase,
                marginBottom: "16px",
              }}
            >
              Click the button below to accept this invitation and join the
              team.
            </Text>
            <Text
              style={{
                color: defaultTheme.colorTextMuted,
                fontSize: defaultTheme.fontSizeBase,
                lineHeight: defaultTheme.lineHeightBase,
                marginBottom: "16px",
              }}
            >
              This invitation expires in {expiresInHours} hours.
            </Text>
          </Section>

          <Section style={{ paddingBottom: defaultTheme.spacingXl }}>
            <Button
              href={ctaHref}
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
              Join {teamName}
            </Button>
          </Section>

          <Text
            style={{
              color: defaultTheme.colorTextMuted,
              fontSize: defaultTheme.fontSizeSm,
              marginTop: defaultTheme.spacingLg,
            }}
          >
            If you didn&apos;t expect this invitation, you can ignore this
            email.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

InviteDefault.PreviewProps = {
  ctaHref: "https://example.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl: "https://example.com/avatar.jpg",
  inviterName: "Sarah",
  teamName: "Acme Team",
} satisfies Props;
