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
  Text,
} from "react-email";
import { theme as vercelTheme } from "../themes/vercel";

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
}: Props) => {
  const t = vercelTheme;

  const style = {
    avatar: {
      borderRadius: "50%",
      height: 56,
      width: 56,
    } as const,
    cta: {
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
    inviteText: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      marginBottom: "4px",
    },
    inviterInfo: {
      paddingLeft: t.spacingBase,
    },
    inviterName: {
      color: t.colorText,
      fontSize: t.fontSizeBase,
      fontWeight: t.fontWeightMedium,
    },
    inviterRow: {
      marginBottom: t.spacingLg,
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
      <Preview>You're invited to join {teamName}</Preview>
      <Body style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}>
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Row style={style.inviterRow}>
              <Column>
                {inviterAvatarUrl && (
                  <Img src={inviterAvatarUrl} alt={inviterName} style={style.avatar} />
                )}
              </Column>
              <Column style={style.inviterInfo}>
                <Text style={style.inviterName}>{inviterName}</Text>
                <Text style={style.inviteText}>invited you to join</Text>
              </Column>
            </Row>

            <Text style={style.heading}>{teamName}</Text>
            <Text style={style.text}>
              Click the button below to accept this invitation and join the team.
            </Text>
            <Text style={{ ...style.text, marginTop: t.spacingBase }}>
              This invitation expires in {expiresInHours} hours.
            </Text>
          </Section>

          <Section style={style.section}>
            <Button href={ctaHref} style={style.cta}>
              Join {teamName}
            </Button>
          </Section>

          <Text style={style.footer}>
            If you didn't expect this invitation, you can ignore this email.
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

InviteVercel.PreviewProps = {
  ctaHref: "https://vercel.com/invite/abc123",
  expiresInHours: 72,
  inviterAvatarUrl: "https://example.com/avatar.jpg",
  inviterName: "Sarah",
  teamName: "Vercel",
} satisfies Props;

export default InviteVercel;
