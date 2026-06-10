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

export interface GroupedOverlappedAvatarsProps {
  theme?: EmailThemeTokens;
  avatars?: { url?: string; name: string }[];
  variant?: "default" | "slanted-left" | "slanted-right";
}

const GroupedOverlappedAvatarsSection = ({
  avatars,
  theme,
  variant,
}: {
  avatars: NonNullable<GroupedOverlappedAvatarsProps["avatars"]>;
  theme: EmailThemeTokens;
  variant: NonNullable<GroupedOverlappedAvatarsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "center";
  return (
    <Section style={{ padding: `${theme.spacingBase ?? "24px"} 0` }}>
      <Row>
        {avatars.slice(0, 4).map((avatar, i) => (
          <Column
            key={avatar.name}
            style={{ padding: i > 0 ? "0 0 0 -12px" : "0", width: "40px" }}
          >
            {avatar.url ? (
              <Img
                alt={avatar.name}
                height={36}
                src={avatar.url}
                width={36}
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
                  fontSize: "14px",
                  margin: 0,
                  textAlign: alignText,
                }}
              >
                <span
                  style={{
                    backgroundColor: theme.colorPrimary,
                    border: `Twopx solid ${theme.colorBackground}`,
                    borderRadius: "999px",
                    color: theme.colorPrimaryForeground ?? "#ffffff",
                    display: "inline-block",
                    height: 36,
                    lineHeight: "36px",
                    textAlign: "center",
                    width: 36,
                  }}
                >
                  {avatar.name.charAt(0)}
                </span>
              </Text>
            )}
          </Column>
        ))}
      </Row>
    </Section>
  );
};

export const GroupedOverlappedAvatars = ({
  theme = defaultTheme,
  avatars = [{ name: "A" }, { name: "B" }, { name: "C" }],
  variant = "default",
}: GroupedOverlappedAvatarsProps) => (
  <Html>
    <Head />
    <Preview>grouped-avatars</Preview>
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
          <GroupedOverlappedAvatarsSection
            avatars={avatars}
            theme={theme}
            variant={variant}
          />
        </Section>
      </Container>
    </Body>
  </Html>
);

GroupedOverlappedAvatars.PreviewProps = {
  avatars: [
    {
      name: "A",
      url: "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-1&size=128",
    },
    {
      name: "B",
      url: "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-2&size=128",
    },
    {
      name: "C",
      url: "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-3&size=128",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies GroupedOverlappedAvatarsProps;
