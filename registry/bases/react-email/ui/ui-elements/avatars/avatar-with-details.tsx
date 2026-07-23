import { Body, Head, Html, Preview } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

import { AvatarWithDetailsSection } from "./avatar-shared";
import type { AvatarAlignment } from "./avatar-shared";

export interface AvatarWithDetailsProps {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  name?: string;
  theme?: TailwindConfig;
}

export { AvatarWithDetailsSection };
export type { AvatarAlignment };

export const AvatarWithDetails = ({
  theme: _theme = defaultTheme,
  ...props
}: AvatarWithDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Avatar with details</Preview>
    <Body style={{ backgroundColor: "#f1f5f9", margin: 0 }}>
      <AvatarWithDetailsSection {...props} />
    </Body>
  </Html>
);

AvatarWithDetails.PreviewProps = {
  align: "center",
  avatarUrl:
    "https://assets.mailviews.com/images/components/reviews/avatar-2.jpg",
  email: "johnadams@example.com",
  name: "John Adams",
  theme: defaultTheme,
} satisfies AvatarWithDetailsProps;
