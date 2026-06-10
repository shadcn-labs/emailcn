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

export interface GroupedOverlappedAvatarsPlusCountProps {
  theme?: EmailThemeTokens;
  avatars?: { url?: string; name: string }[];
  plusCount?: number;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const GroupedOverlappedAvatarsPlusCountSection = ({
  avatars,
  plusCount,
  theme,
}: {
  avatars: NonNullable<GroupedOverlappedAvatarsPlusCountProps["avatars"]>;
  plusCount: number;
  theme: EmailThemeTokens;
}) => (
  <MjmlSection padding={`${theme.spacingBase ?? "24px"} 0`}>
    {avatars.slice(0, 3).map((avatar, i) => (
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
          <MjmlText fontFamily={theme.fontFamily} fontSize="14px">
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
          </MjmlText>
        )}
      </MjmlColumn>
    ))}
    {plusCount > 0 ? (
      <MjmlColumn width="40px" padding="0 0 0 -12px">
        <MjmlText fontFamily={theme.fontFamily} fontSize="12px">
          <span
            style={{
              backgroundColor: theme.colorBackgroundMuted,
              border: `Twopx solid ${theme.colorBackground}`,
              borderRadius: "999px",
              color: theme.colorTextMuted,
              display: "inline-block",
              height: 36,
              lineHeight: "36px",
              textAlign: "center",
              width: 36,
            }}
          >
            +{plusCount}
          </span>
        </MjmlText>
      </MjmlColumn>
    ) : null}
  </MjmlSection>
);

export const GroupedOverlappedAvatarsPlusCount = ({
  theme = defaultTheme,
  avatars = [{ name: "A" }, { name: "B" }, { name: "C" }],
  plusCount = 5,
  variant = "default",
}: GroupedOverlappedAvatarsPlusCountProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>grouped-plus</MjmlPreview>
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
        <GroupedOverlappedAvatarsPlusCountSection
          avatars={avatars}
          plusCount={plusCount}
          theme={theme}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

GroupedOverlappedAvatarsPlusCount.PreviewProps = {
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
  plusCount: 12,
  theme: defaultTheme,
  variant: "default",
} satisfies GroupedOverlappedAvatarsPlusCountProps;
