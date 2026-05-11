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
import { vercelTheme } from "@/registry/bases/jsx-email/themes/vercel";

interface Props {
  inviterName?: string;
  inviterAvatarUrl?: string;
  teamName?: string;
  ctaHref?: string;
  expiresInHours?: number;
}

export const InviteVercel = ({
  inviterName = "Someone",
  inviterAvatarUrl,
  teamName = "Vercel",
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
          backgroundColor: vercelTheme.colorBackground,
          fontFamily: vercelTheme.fontFamily,
          margin: 0,
        }}
      >
        <Container
          style={{ maxWidth: vercelTheme.containerWidth, padding: "32px" }}
        >
          <Section
            style={{
              paddingBottom: vercelTheme.spacingXl,
              paddingTop: vercelTheme.spacingXl,
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
                    color: vercelTheme.colorText,
                    fontSize: vercelTheme.fontSizeBase,
                    fontWeight: vercelTheme.fontWeightMedium,
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  {inviterName}
                </Text>
                <Text
                  style={{
                    color: vercelTheme.colorTextMuted,
                    fontSize: vercelTheme.fontSizeBase,
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
                color: vercelTheme.colorText,
                fontSize: vercelTheme.fontSizeXl,
                fontWeight: vercelTheme.fontWeightMedium,
                marginBottom: "16px",
                marginTop: vercelTheme.spacingLg,
              }}
            >
              {teamName}
            </Text>
            <Text
              style={{
                color: vercelTheme.colorTextMuted,
                fontSize: vercelTheme.fontSizeBase,
                lineHeight: vercelTheme.lineHeightBase,
                marginBottom: "16px",
              }}
            >
              Click the button below to accept this invitation and join the
              team.
            </Text>
            <Text
              style={{
                color: vercelTheme.colorTextMuted,
                fontSize: vercelTheme.fontSizeBase,
                lineHeight: vercelTheme.lineHeightBase,
                marginBottom: "16px",
              }}
            >
              This invitation expires in {expiresInHours} hours.
            </Text>
          </Section>

          <Section style={{ paddingBottom: vercelTheme.spacingXl }}>
            <Button
              href={ctaHref}
              width={160}
              height={40}
              style={{
                backgroundColor: vercelTheme.button.primary.backgroundColor,
                borderRadius: vercelTheme.button.primary.borderRadius,
                color: vercelTheme.button.primary.color,
                display: "inline-block",
                fontSize: vercelTheme.button.primary.fontSize,
                fontWeight: vercelTheme.button.primary.fontWeight,
                height: "auto",
                paddingBottom: vercelTheme.button.primary.paddingY,
                paddingLeft: vercelTheme.button.primary.paddingX,
                paddingRight: vercelTheme.button.primary.paddingX,
                paddingTop: vercelTheme.button.primary.paddingY,
                textDecoration: "none",
                width: "auto",
              }}
            >
              Join {teamName}
            </Button>
          </Section>

          <Text
            style={{
              color: vercelTheme.colorTextMuted,
              fontSize: vercelTheme.fontSizeSm,
              marginTop: vercelTheme.spacingLg,
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

InviteVercel.PreviewProps = {
  ctaHref: "https://vercel.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl: "https://example.com/avatar.jpg",
  inviterName: "Sarah",
  teamName: "Vercel",
} satisfies Props;
