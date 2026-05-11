// Subject: Share your experience at {_targetName}

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

import { airbnbTheme } from "@/registry/bases/jsx-email/themes/airbnb";

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

export const NotificationAirbnb = ({
  _logoUrl,
  actorName = "Host",
  _actorAvatarUrl,
  _action = "completed their stay",
  _targetName = "your place",
  ctaLabel = "Leave a Review",
  ctaHref = "#",
  _productName = "Airbnb",
}: Props) => {
  void _logoUrl;
  void _actorAvatarUrl;
  void _action;
  void _productName;

  return (
    <Html>
      <Head />
      <Preview>Share your experience</Preview>
      <Tailwind>
        <Body
          style={{
            backgroundColor: airbnbTheme.colorBackground,
            fontFamily: airbnbTheme.fontFamily,
            margin: 0,
          }}
        >
          <Container
            style={{ maxWidth: airbnbTheme.containerWidth, padding: "32px 0" }}
          >
            <Section style={{ paddingTop: airbnbTheme.spacingXl }}>
              <Text
                style={{
                  color: airbnbTheme.colorText,
                  fontSize: airbnbTheme.fontSizeXl,
                  fontWeight: airbnbTheme.fontWeightMedium,
                  marginBottom: airbnbTheme.spacingBase,
                }}
              >
                How was your trip?
              </Text>
              <Text
                style={{
                  color: airbnbTheme.colorTextMuted,
                  fontSize: airbnbTheme.fontSizeBase,
                  lineHeight: airbnbTheme.lineHeightBase,
                  marginBottom: airbnbTheme.spacingBase,
                }}
              >
                {actorName} recently stayed at {_targetName} and we&apos;d love
                to hear about their experience.
              </Text>
              <Text
                style={{
                  color: airbnbTheme.colorTextMuted,
                  fontSize: airbnbTheme.fontSizeBase,
                  lineHeight: airbnbTheme.lineHeightBase,
                  marginBottom: airbnbTheme.spacingBase,
                }}
              >
                Your review helps other travelers and supports your host.
              </Text>
            </Section>

            {ctaLabel && ctaHref && (
              <Section style={{ paddingTop: airbnbTheme.spacingLg }}>
                <Button
                  href={ctaHref}
                  width={160}
                  height={40}
                  style={{
                    backgroundColor: airbnbTheme.button.primary.backgroundColor,
                    borderRadius: airbnbTheme.button.primary.borderRadius,
                    color: airbnbTheme.button.primary.color,
                    display: "inline-block",
                    fontSize: airbnbTheme.button.primary.fontSize,
                    fontWeight: airbnbTheme.button.primary.fontWeight,
                    height: "auto",
                    paddingBottom: airbnbTheme.button.primary.paddingY,
                    paddingLeft: airbnbTheme.button.primary.paddingX,
                    paddingRight: airbnbTheme.button.primary.paddingX,
                    paddingTop: airbnbTheme.button.primary.paddingY,
                    textDecoration: "none",
                    width: "auto",
                  }}
                >
                  {ctaLabel}
                </Button>
              </Section>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

NotificationAirbnb.PreviewProps = {
  _action: "completed their stay",
  _actorAvatarUrl: "https://example.com/avatar.jpg",
  _logoUrl: "https://example.com/logo.png",
  _productName: "Airbnb",
  _targetName: "your place",
  actorName: "John",
  ctaHref: "https://airbnb.com/reviews",
  ctaLabel: "Leave a Review",
} satisfies Props;
