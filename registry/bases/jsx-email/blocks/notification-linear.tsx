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
  Tailwind,
  Text,
} from "jsx-email";

import { linearTheme } from "@/registry/bases/jsx-email/themes/linear";

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
  void _logoUrl;
  void _productName;

  return (
    <Html>
      <Head />
      <Preview>New notification</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: linearTheme.colorBackground,
            fontFamily: linearTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: linearTheme.containerWidth, padding: "32px 0" }}
          >
            <Section style={{ paddingTop: linearTheme.spacingXl }}>
              <Row>
                <Column style={{ verticalAlign: "top", width: "48px" }}>
                  {_actorAvatarUrl && (
                    <Img
                      src={_actorAvatarUrl}
                      alt={actorName}
                      style={{
                        borderRadius: "50%",
                        height: "48px",
                        width: "48px",
                      }}
                      height={48}
                      width={48}
                    />
                  )}
                </Column>
                <Column style={{ paddingLeft: "16px", verticalAlign: "top" }}>
                  <Text
                    style={{
                      color: linearTheme.colorText,
                      fontSize: linearTheme.fontSizeBase,
                      fontWeight: linearTheme.fontWeightMedium,
                      margin: 0,
                    }}
                  >
                    {actorName}
                  </Text>
                  <Text
                    style={{
                      color: linearTheme.colorTextMuted,
                      fontSize: linearTheme.fontSizeBase,
                      margin: 0,
                      marginTop: "4px",
                    }}
                  >
                    {_action}
                  </Text>
                </Column>
              </Row>

              <Text
                style={{
                  color: linearTheme.colorText,
                  fontSize: linearTheme.fontSizeXl,
                  fontWeight: linearTheme.fontWeightMedium,
                  marginBottom: linearTheme.spacingBase,
                }}
              >
                <span
                  style={{
                    backgroundColor: linearTheme.button.primary.backgroundColor,
                    borderRadius: linearTheme.borderRadius,
                    color: linearTheme.button.primary.color,
                    display: "inline-block",
                    fontSize: linearTheme.fontSizeSm,
                    marginRight: "8px",
                    padding: "4px 8px",
                  }}
                >
                  #{issueNumber}
                </span>
                {_targetName}
              </Text>

              {ctaLabel && ctaHref && (
                <Button
                  href={ctaHref}
                  width={160}
                  height={40}
                  style={{
                    backgroundColor: linearTheme.button.primary.backgroundColor,
                    borderRadius: linearTheme.button.primary.borderRadius,
                    color: linearTheme.button.primary.color,
                    display: "inline-block",
                    fontSize: linearTheme.button.primary.fontSize,
                    fontWeight: linearTheme.button.primary.fontWeight,
                    height: "auto",
                    paddingBottom: linearTheme.button.primary.paddingY,
                    paddingLeft: linearTheme.button.primary.paddingX,
                    paddingRight: linearTheme.button.primary.paddingX,
                    paddingTop: linearTheme.button.primary.paddingY,
                    textDecoration: "none",
                    width: "auto",
                  }}
                >
                  {ctaLabel}
                </Button>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
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
