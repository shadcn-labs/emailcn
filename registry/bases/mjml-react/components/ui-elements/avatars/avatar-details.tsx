import {
  MjmlColumn,
  MjmlGroup,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import type { EmailTheme } from "@/registry/bases/mjml-react/themes/email-theme";
import { defaultTheme } from "@/registry/themes/default";

type AvatarAlignment = "center" | "left" | "right";

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const avatarResponsiveStyles = `
  .emailcn-avatar-group-left { margin-left: 0 !important; margin-right: auto !important; }
  .emailcn-avatar-group-center { margin-left: auto !important; margin-right: auto !important; }
  .emailcn-avatar-group-right { margin-left: auto !important; margin-right: 0 !important; }
`;

const AvatarShell = ({ children }: { children: ReactNode }) => (
  <>
    <MjmlSection padding="0">
      <MjmlColumn padding="0">
        <MjmlSpacer height="100px" />
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {children}
    </MjmlSection>
    <MjmlSection padding="0">
      <MjmlColumn padding="0">
        <MjmlSpacer height="100px" />
      </MjmlColumn>
    </MjmlSection>
  </>
);

const AvatarWithDetailsSection = ({
  align = "center",
  avatarUrl = `${ASSET_ROOT}/avatar-2.jpg`,
  email = "johnadams@example.com",
  name = "John Adams",
}: {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  mjmlCompensation?: boolean;
  name?: string;
}) => (
  <AvatarShell>
    <MjmlGroup
      cssClass={`emailcn-avatar-group-${align}`}
      verticalAlign="middle"
      width="260px"
    >
      <MjmlColumn padding="0 12px 0 0" verticalAlign="middle" width="60px">
        <MjmlImage
          alt={name}
          borderRadius="9999px"
          height="48px"
          padding="0"
          src={avatarUrl}
          width="48px"
        />
      </MjmlColumn>
      <MjmlColumn padding="0" verticalAlign="middle" width="200px">
        <MjmlText
          align="left"
          color="#030712"
          fontFamily={fontFamily}
          fontSize="14px"
          fontWeight="500"
          lineHeight="20px"
          padding="0"
        >
          {name}
        </MjmlText>
        <MjmlText
          align="left"
          color="#6b7280"
          fontFamily={fontFamily}
          fontSize="14px"
          lineHeight="20px"
          padding="0"
        >
          {email}
        </MjmlText>
      </MjmlColumn>
    </MjmlGroup>
  </AvatarShell>
);

interface Avatar_AvatarWithDetailsProps {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  name?: string;
  theme?: EmailTheme;
}

const Avatar_AvatarWithDetails = ({
  theme = defaultTheme,
  ...props
}: Avatar_AvatarWithDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Avatar with details</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{avatarResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <AvatarWithDetailsSection mjmlCompensation {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Avatar_AvatarWithDetails.PreviewProps = {
  align: "center",
  avatarUrl: "https://emailcn.vercel.app/api/email-assets/reviews/avatar-2.jpg",
  email: "johnadams@example.com",
  name: "John Adams",
  theme: defaultTheme,
} satisfies Avatar_AvatarWithDetailsProps;

const __Avatar = Avatar_AvatarWithDetails;

export interface AvatarDetailsProps {
  theme?: Parameters<typeof __Avatar>[0]["theme"];
  avatar?: {
    name: string;
    url?: string;
  };
  name?: string;
  email?: string;
  align?: "left" | "center" | "right";
}

export const AvatarDetails = ({
  theme,
  avatar,
  name,
  email,
  align,
}: AvatarDetailsProps) => (
  <__Avatar
    align={align}
    avatarUrl={avatar?.url}
    email={email}
    name={name ?? avatar?.name}
    theme={theme}
  />
);

AvatarDetails.PreviewProps = {} satisfies AvatarDetailsProps;
