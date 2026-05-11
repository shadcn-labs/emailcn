// Subject: {_action} — {_targetName}

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

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

interface Props {
  _logoUrl?: string;
  actorName?: string;
  _actorAvatarUrl?: string;
  _action?: string;
  _targetName?: string;
  ctaLabel?: string;
  ctaHref?: string;
  _productName?: string;
}

export const NotificationDefault = ({
  _actorAvatarUrl,
  actorName = "Someone",
  _action = "notified you",
  _targetName = "your update",
  ctaLabel = "View",
  ctaHref = "#",
}: Props) => (
  <Html>
    <Head />
    <Preview>New notification</Preview>
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
            <Row>
              <Column style={{ verticalAlign: "top" }}>
                {_actorAvatarUrl ? (
                  <Img
                    src={_actorAvatarUrl}
                    alt={actorName}
                    height={48}
                    width={48}
                    style={{ borderRadius: "50%" }}
                  />
                ) : null}
              </Column>
              <Column style={{ paddingLeft: "24px", verticalAlign: "top" }}>
                <Text
                  style={{
                    color: defaultTheme.colorText,
                    fontSize: defaultTheme.fontSizeBase,
                    fontWeight: defaultTheme.fontWeightMedium,
                    marginBottom: "4px",
                  }}
                >
                  {actorName}
                </Text>
                <Text
                  style={{
                    color: defaultTheme.colorTextMuted,
                    fontSize: defaultTheme.fontSizeBase,
                    marginBottom: defaultTheme.spacingBase,
                  }}
                >
                  {_action}
                </Text>
              </Column>
            </Row>

            <Text
              style={{
                color: defaultTheme.colorText,
                fontSize: defaultTheme.fontSizeXl,
                fontWeight: defaultTheme.fontWeightMedium,
                marginBottom: defaultTheme.spacingBase,
              }}
            >
              {_targetName}
            </Text>

            {ctaLabel && ctaHref ? (
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
                {ctaLabel}
              </Button>
            ) : null}
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

NotificationDefault.PreviewProps = {
  _action: "commented on your post",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _targetName: "New comment on your project",
  actorName: "Sarah",
  ctaHref: "https://example.com/notification",
  ctaLabel: "View Comment",
} satisfies Props;
