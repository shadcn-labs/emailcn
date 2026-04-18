// Subject: Share your experience at {_targetName}

import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "react-email";

import { theme as airbnbTheme } from "../themes/airbnb";

interface Props {
  logoUrl?: string;
  actorName?: string;
  actorAvatarUrl?: string;
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
  const t = airbnbTheme;

  const style = {
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
    heading: {
      color: t.colorText,
      fontSize: t.fontSizeXl,
      fontWeight: t.fontWeightMedium,
      marginBottom: t.spacingBase,
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
      <Preview>Share your experience</Preview>
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
            <Text style={style.heading}>How was your trip?</Text>
            <Text style={style.text}>
              {actorName} recently stayed at {_targetName} and we'd love to hear
              about their experience.
            </Text>
            <Text style={style.text}>
              Your review helps other travelers and supports your host.
            </Text>
          </Section>

          {ctaLabel && ctaHref && (
            <Button href={ctaHref} style={style.cta}>
              {ctaLabel}
            </Button>
          )}
        </Container>
      </Body>
    </Html>
  );
};

NotificationAirbnb.PreviewProps = {
  _action: "completed their stay",
  _productName: "Airbnb",
  _targetName: "your place",
  actorAvatarUrl: "https://example.com/avatar.jpg",
  actorName: "John",
  ctaHref: "https://airbnb.com/reviews",
  ctaLabel: "Leave a Review",
  logoUrl: "https://example.com/logo.png",
} satisfies Props;

export default NotificationAirbnb;
