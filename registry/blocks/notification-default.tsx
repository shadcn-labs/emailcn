// Subject: {action} — {targetName}

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
import { theme as defaultTheme } from "../themes/default";

interface Props {
  logoUrl?: string;
  actorName?: string;
  actorAvatarUrl?: string;
  action?: string;
  targetName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  productName?: string;
}

export const NotificationDefault = ({
  _logoUrl,
  actorName = "Someone",
  _actorAvatarUrl,
  _action = "notified you",
  _targetName = "your update",
  ctaLabel = "View",
  ctaHref = "#",
  _productName = "Acme",
}: Props) => {
  const t = defaultTheme;

  const style = {
    action: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      marginBottom: "4px",
    },
    actorInfo: {
      paddingLeft: t.spacingBase,
    },
    actorName: {
      color: t.colorText,
      fontSize: t.fontSizeBase,
      fontWeight: t.fontWeightMedium,
    },
    actorRow: {
      marginBottom: t.spacingBase,
    },
    avatar: {
      borderRadius: "50%",
      height: 48,
      width: 48,
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
    section: { padding: `${t.spacingXl} 0` },
    targetName: {
      color: t.colorText,
      fontSize: t.fontSizeXl,
      fontWeight: t.fontWeightMedium,
      marginBottom: t.spacingBase,
    },
  };

  return (
    <Html>
      <Head />
      <Preview>New notification</Preview>
      <Body style={{ backgroundColor: t.colorBackground, fontFamily: t.fontFamily }}>
        <Container
          style={{
            margin: "0 auto",
            maxWidth: t.containerWidth,
            padding: t.spacingLg,
          }}
        >
          <Section style={style.section}>
            <Row style={style.actorRow}>
              <Column>
                {actorAvatarUrl && (
                  <Img src={actorAvatarUrl} alt={actorName} style={style.avatar} />
                )}
              </Column>
              <Column style={style.actorInfo}>
                <Text style={style.actorName}>{actorName}</Text>
                <Text style={style.action}>{action}</Text>
              </Column>
            </Row>

            <Text style={style.targetName}>{targetName}</Text>

            {ctaLabel && ctaHref && (
              <Button href={ctaHref} style={style.cta}>
                {ctaLabel}
              </Button>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

NotificationDefault.PreviewProps = {
  action: "commented on your post",
  actorAvatarUrl: "https://example.com/avatar.jpg",
  actorName: "Sarah",
  ctaHref: "https://example.com/notification",
  ctaLabel: "View Comment",
  logoUrl: "https://example.com/logo.png",
  productName: "Acme",
  targetName: "New comment on your project",
} satisfies Props;

export default NotificationDefault;
