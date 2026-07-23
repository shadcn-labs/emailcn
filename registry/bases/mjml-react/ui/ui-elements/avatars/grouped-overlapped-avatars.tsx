import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
  theme = defaultTheme,
  ...props
}: GroupedOverlappedAvatarsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Grouped overlapped avatars</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <GroupedOverlappedAvatarsSection {...props} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

GroupedOverlappedAvatars.PreviewProps = {
  avatars: defaultAvatars,
  size: "md",
  theme: defaultTheme,
} satisfies GroupedOverlappedAvatarsProps;
