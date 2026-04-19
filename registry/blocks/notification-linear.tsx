// Subject: [{issueNumber}] {_action} — {_targetName}

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
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  issueNumber?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
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
    _action: {
      color: t.colorTextMuted,
      fontSize: t.fontSizeBase,
      marginBottom: "4px",
    },
    _targetName: {
      color: t.colorText,
      fontSize: t.fontSizeXl,
      fontWeight: t.fontWeightMedium,
      marginBottom: t.spacingBase,
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
  };

  return (
    <Html>
      <Head />
      <Preview>New notification</Preview>
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
            <Row style={style.actorRow}>
              <Column>
                {_actorAvatarUrl && (
                  <Img
                    src={_actorAvatarUrl}
                    alt={actorName}
                    style={style.avatar}
                  />
                )}
              </Column>
              <Column style={style.actorInfo}>
                <Text style={style.actorName}>{actorName}</Text>
                <Text style={style._action}>{_action}</Text>
              </Column>
            </Row>

            <Text style={style._targetName}>
              <span style={style.issueTag}>#{issueNumber}</span>
              {_targetName}
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
  _action: "commented on",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Linear",
  _targetName: "Bug in login flow",
  actorName: "Sarah",
  ctaHref: "https://linear.app/issue/42",
  ctaLabel: "View Issue",
  issueNumber: "42",
} satisfies Props;

export default NotificationLinear;
