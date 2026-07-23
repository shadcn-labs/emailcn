import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";

import {
  GroupedOverlappedAvatars,
  GroupedOverlappedAvatarsSection,
} from "./grouped-overlapped-avatars";
import type { GroupedOverlappedAvatarsProps } from "./grouped-overlapped-avatars";

export type GroupedOverlappedAvatarsPlusCountProps =
  GroupedOverlappedAvatarsProps;

export const GroupedOverlappedAvatarsPlusCountSection =
  GroupedOverlappedAvatarsSection;

export const GroupedOverlappedAvatarsPlusCount = ({
  plusCount = 5,
  ...props
}: GroupedOverlappedAvatarsPlusCountProps) => (
  <GroupedOverlappedAvatars plusCount={plusCount} {...props} />
);

GroupedOverlappedAvatarsPlusCount.PreviewProps = {
  plusCount: 5,
  size: "md",
  theme: defaultTheme,
} satisfies GroupedOverlappedAvatarsPlusCountProps;
