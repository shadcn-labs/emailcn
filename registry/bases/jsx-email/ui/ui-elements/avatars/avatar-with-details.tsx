/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "jsx-email";

import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export interface AvatarWithDetailsProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const AvatarWithDetailsSection = ({
  avatarUrl,
  name,
  title,
  companyName,
  theme,
  variant,
}: {
  avatarUrl?: string;
  name: string;
  title: string;
  companyName?: string;
  theme: EmailThemeTokens;
  variant: NonNullable<AvatarWithDetailsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";
  return (
    <Section style={{ padding: `${theme.spacingBase ?? "16px"} 0` }}>
      <Row>
        <Column style={{ width: "80px" }}>
          {avatarUrl ? (
            <Img
              alt={name}
              height={64}
              src={avatarUrl}
              width={64}
              style={{
                borderRadius: "999px",
                display: "block",
                margin: "0 auto",
                maxWidth: "100%",
              }}
            />
          ) : (
            <Text
              style={{
                fontFamily: theme.fontFamily,
                fontSize: "24px",
                margin: 0,
                textAlign: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: theme.colorPrimary,
                  borderRadius: "999px",
                  color: theme.colorPrimaryForeground ?? "#ffffff",
                  display: "inline-block",
                  height: 64,
                  lineHeight: "64px",
                  width: 64,
                }}
              >
                {name.charAt(0)}
              </span>
            </Text>
          )}
        </Column>
        <Column>
          <Text
            style={{
              color: theme.colorText,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeLg ?? "16px",
              fontWeight: theme.fontWeightMedium ?? "500",
              margin: 0,
              paddingBottom: theme.spacingBase ?? "16px",
              textAlign: alignText,
            }}
          >
            {name}
          </Text>
          <Text
            style={{
              color: theme.colorTextMuted,
              fontFamily: theme.fontFamily,
              fontSize: theme.fontSizeBase ?? "14px",
              margin: 0,
              textAlign: alignText,
            }}
          >
            {title}
          </Text>
          {companyName ? (
            <Text
              style={{
                color: theme.colorTextMuted,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSizeSm ?? "12px",
                margin: 0,
                paddingTop: theme.spacingBase ?? "16px",
                textAlign: alignText,
              }}
            >
              {companyName}
            </Text>
          ) : null}
        </Column>
      </Row>
    </Section>
  );
};

export const AvatarWithDetails = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Designer",
  companyName = "Acme",
  variant = "default",
}: AvatarWithDetailsProps) => (
  <Html>
    <Head />
    <Preview>avatar-details</Preview>
    <Body
      style={{
        backgroundColor: theme.colorBackground,
        color: theme.colorTextMuted,
        fontFamily: theme.fontFamily,
        fontSize: theme.fontSizeBase,
        lineHeight: theme.lineHeightBase,
        margin: 0,
      }}
    >
      <Container style={{ maxWidth: theme.containerWidth }}>
        <Section style={{ padding: "0" }}>
          <AvatarWithDetailsSection
            avatarUrl={avatarUrl}
            name={name}
            title={title}
            companyName={companyName}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

AvatarWithDetails.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-1&size=128",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
  variant: "default",
} satisfies AvatarWithDetailsProps;
