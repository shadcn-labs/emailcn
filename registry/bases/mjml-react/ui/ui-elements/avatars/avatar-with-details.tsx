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

import { AvatarWithDetailsSection } from "./avatar-shared";
import type { AvatarAlignment } from "./avatar-shared";

export interface AvatarWithDetailsProps {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  name?: string;
  theme?: EmailThemeTokens;
}

export { AvatarWithDetailsSection };
export type { AvatarAlignment };

export const AvatarWithDetails = ({
  theme = defaultTheme,
  ...props
}: AvatarWithDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Avatar with details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <AvatarWithDetailsSection mjmlCompensation {...props} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

AvatarWithDetails.PreviewProps = {
  align: "center",
  avatarUrl:
    "https://assets.mailviews.com/images/components/reviews/avatar-2.jpg",
  email: "johnadams@example.com",
  name: "John Adams",
  theme: defaultTheme,
} satisfies AvatarWithDetailsProps;
