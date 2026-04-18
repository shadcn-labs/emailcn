// Subject: [{issueNumber}] {action} — {targetName}

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
import { theme as linearTheme } from "../themes/linear";

interface Props {
  logoUrl?: string;
  actorName?: string;
  actorAvatarUrl?: string;
  action?: string;
  targetName?: string;
  issueNumber?: string;
  ctaLabel?: string;
  ctaHref?: string;
  productName?: string;
}

export const NotificationLinear = ({
  _logoUrl,
  actorName = "Someone",
  _actorAvatarUrl,
  _action = "commented",
  _targetName = "your issue",
  issueNumber = "123",
  ctaLabel = "View Issue",
  ctaHref = "#",
  _productName = "Linear",
}: Props) => {
  const t = linearTheme;

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
    issueTag: {
      backgroundColor: t.colorPrimary,
      borderRadius: t.borderRadius,
      color: t.colorPrimaryForeground,
      display: "inline-block",
      fontSize: t.fontSizeSm,
      marginRight: "8px",
      padding: "4px 8px",
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

            <Text style={style.targetName}>
              <span style={style.issueTag}>#{issueNumber}</span>
              {targetName}
            </Text>

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

NotificationLinear.PreviewProps = {
  action: "commented on",
  actorAvatarUrl: "https://example.com/avatar.jpg",
  actorName: "Sarah",
  ctaHref: "https://linear.app/issue/42",
  ctaLabel: "View Issue",
  issueNumber: "42",
  logoUrl: "https://example.com/logo.png",
  productName: "Linear",
  targetName: "Bug in login flow",
} satisfies Props;

export default NotificationLinear;
