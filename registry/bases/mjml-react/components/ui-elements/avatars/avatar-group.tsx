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
import { defaultTheme } from "@/registry/themes/definitions/default";

type AvatarSize = "2xl" | "lg" | "md" | "sm" | "xl" | "xs";

interface InternalAvatarItem {
  name: string;
  url?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const avatarResponsiveStyles = `
  .emailcn-avatar-group-left { margin-left: 0 !important; margin-right: auto !important; }
  .emailcn-avatar-group-center { margin-left: auto !important; margin-right: auto !important; }
  .emailcn-avatar-group-right { margin-left: auto !important; margin-right: 0 !important; }
`;

const defaultAvatars: InternalAvatarItem[] = [
  { name: "John Adams", url: `${ASSET_ROOT}/avatar-2.jpg` },
  { name: "Sarah Wilson", url: `${ASSET_ROOT}/avatar.jpg` },
  { name: "Michael Chen", url: `${ASSET_ROOT}/avatar-4.jpg` },
  { name: "Emily Davis", url: `${ASSET_ROOT}/avatar-5.jpg` },
];

const avatarSizes: Record<
  AvatarSize,
  {
    countFontSize: number;
    diameter: number;
    overlapWidth: number;
  }
> = {
  "2xl": { countFontSize: 20, diameter: 64, overlapWidth: 48 },
  lg: { countFontSize: 16, diameter: 48, overlapWidth: 36 },
  md: { countFontSize: 14, diameter: 40, overlapWidth: 30 },
  sm: { countFontSize: 14, diameter: 32, overlapWidth: 24 },
  xl: { countFontSize: 18, diameter: 56, overlapWidth: 42 },
  xs: { countFontSize: 11, diameter: 24, overlapWidth: 18 },
};

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

const GroupedOverlappedAvatarsSection = ({
  align = "center",
  avatars = defaultAvatars,
  plusCount,
  size = "md",
}: {
  align?: "center" | "left" | "right";
  avatars?: InternalAvatarItem[];
  plusCount?: number;
  size?: AvatarSize;
}) => {
  const config = avatarSizes[size];
  const visibleAvatars = avatars.slice(0, 4);
  const itemCount =
    visibleAvatars.length + (plusCount && plusCount > 0 ? 1 : 0);
  const groupWidth =
    Math.max(0, itemCount - 1) * config.overlapWidth + config.diameter;
  return (
    <AvatarShell>
      <MjmlGroup
        cssClass={`emailcn-avatar-group-${align}`}
        verticalAlign="middle"
        width={`${groupWidth}px`}
      >
        {visibleAvatars.map((avatar, index) => (
          <MjmlColumn
            key={`${avatar.name}-${index}`}
            padding="0"
            verticalAlign="middle"
            width={`${config.overlapWidth}px`}
          >
            <MjmlImage
              alt={avatar.name}
              border="2px solid #fffffe"
              borderRadius="9999px"
              height={`${config.diameter}px`}
              padding="0"
              src={avatar.url ?? defaultAvatars[index % 4]?.url}
              width={`${config.diameter}px`}
            />
          </MjmlColumn>
        ))}
        {plusCount && plusCount > 0 ? (
          <MjmlColumn
            backgroundColor="#d1fae5"
            border="2px solid #fffffe"
            borderRadius="9999px"
            padding="0"
            verticalAlign="middle"
            width={`${config.diameter}px`}
          >
            <MjmlText
              align="center"
              color="#030712"
              fontFamily={fontFamily}
              fontSize={`${config.countFontSize}px`}
              fontWeight="500"
              lineHeight={`${config.diameter}px`}
              padding="0"
            >
              +{plusCount}
            </MjmlText>
          </MjmlColumn>
        ) : null}
      </MjmlGroup>
    </AvatarShell>
  );
};

interface Avatar_GroupedOverlappedAvatarsProps {
  align?: "center" | "left" | "right";
  avatars?: InternalAvatarItem[];
  plusCount?: number;
  size?: AvatarSize;
  theme?: EmailTheme;
}

const Avatar_GroupedOverlappedAvatars = ({
  theme = defaultTheme,
  ...props
}: Avatar_GroupedOverlappedAvatarsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Grouped overlapped avatars</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{avatarResponsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <GroupedOverlappedAvatarsSection {...props} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

Avatar_GroupedOverlappedAvatars.PreviewProps = {
  avatars: defaultAvatars,
  size: "md",
  theme: defaultTheme,
} satisfies Avatar_GroupedOverlappedAvatarsProps;

const __Avatar = Avatar_GroupedOverlappedAvatars;

export interface AvatarItem {
  name: string;
  url?: string;
}

export interface AvatarGroupProps {
  theme?: Parameters<typeof __Avatar>[0]["theme"];
  avatars?: AvatarItem[];
  plusCount?: number;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  align?: "left" | "center" | "right";
}

export const AvatarGroup = ({
  theme,
  avatars,
  plusCount,
  size,
  align,
}: AvatarGroupProps) => (
  <__Avatar
    align={align}
    avatars={avatars}
    plusCount={plusCount}
    size={size}
    theme={theme}
  />
);

AvatarGroup.PreviewProps = {} satisfies AvatarGroupProps;
