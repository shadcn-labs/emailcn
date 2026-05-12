/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
    <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
      {avatars.slice(0, 4).map((avatar, i) => (
        <MjmlColumn
          key={avatar.name}
          width="40px"
          padding={i > 0 ? "0 0 0 -12px" : "0"}
        >
          {avatar.url ? (
            <MjmlImage
              alt={avatar.name}
              borderRadius="999px"
              height={36}
              src={avatar.url}
              width={36}
            />
          ) : (
            <MjmlText
              align={alignText}
              fontFamily={theme.fontFamily}
              fontSize="14px"
            >
              <span
                style={{
                  backgroundColor: theme.colorPrimary,
                  border: `2px solid ${theme.colorBackground}`,
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
            </MjmlText>
          )}
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const GroupedOverlappedAvatars = ({
  theme = defaultTheme,
  avatars = [{ name: "A" }, { name: "B" }, { name: "C" }],
  variant = "default",
}: GroupedOverlappedAvatarsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>grouped-avatars</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <GroupedOverlappedAvatarsSection
          avatars={avatars}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

GroupedOverlappedAvatars.PreviewProps = {
  avatars: [
    { name: "A", url: "https://example.com/av1.jpg" },
    { name: "B", url: "https://example.com/av2.jpg" },
    { name: "C", url: "https://example.com/av3.jpg" },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies GroupedOverlappedAvatarsProps;
