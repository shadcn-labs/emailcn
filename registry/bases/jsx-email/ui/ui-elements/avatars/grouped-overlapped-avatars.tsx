import { Body, Head, Html, Preview } from "jsx-email";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

import {
  defaultAvatars,
  GroupedOverlappedAvatarsSection,
} from "./avatar-shared";
import type { AvatarItem, AvatarSize } from "./avatar-shared";

export interface GroupedOverlappedAvatarsProps {
  avatars?: AvatarItem[];
  plusCount?: number;
  size?: AvatarSize;
  theme?: EmailThemeTokens;
}

export { GroupedOverlappedAvatarsSection };
export type { AvatarItem, AvatarSize };

export const GroupedOverlappedAvatars = ({
  theme: _theme = defaultTheme,
  ...props
}: GroupedOverlappedAvatarsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Grouped overlapped avatars</Preview>
    <Body style={{ backgroundColor: "#f1f5f9", margin: 0 }}>
      <GroupedOverlappedAvatarsSection {...props} />
    </Body>
  </Html>
);

GroupedOverlappedAvatars.PreviewProps = {
  avatars: defaultAvatars,
  size: "md",
  theme: defaultTheme,
} satisfies GroupedOverlappedAvatarsProps;
