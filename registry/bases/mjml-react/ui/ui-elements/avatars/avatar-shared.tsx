import {
  MjmlColumn,
  MjmlGroup,
  MjmlImage,
  MjmlSection,
  MjmlSpacer,
  MjmlText,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

export type AvatarAlignment = "center" | "left" | "right";
export type AvatarSize = "2xl" | "lg" | "md" | "sm" | "xl" | "xs";

export interface AvatarItem {
  name: string;
  url?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const avatarResponsiveStyles = `
  .emailcn-avatar-group-left { margin-left: 0 !important; margin-right: auto !important; }
  .emailcn-avatar-group-center { margin-left: auto !important; margin-right: auto !important; }
  .emailcn-avatar-group-right { margin-left: auto !important; margin-right: 0 !important; }
`;

export const defaultAvatars: AvatarItem[] = [
  { name: "John Adams", url: `${ASSET_ROOT}/avatar-2.jpg` },
  { name: "Sarah Wilson", url: `${ASSET_ROOT}/avatar.jpg` },
  { name: "Michael Chen", url: `${ASSET_ROOT}/avatar-4.jpg` },
  { name: "Emily Davis", url: `${ASSET_ROOT}/avatar-5.jpg` },
];

const avatarSizes: Record<
  AvatarSize,
  { countFontSize: number; diameter: number; overlapWidth: number }
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

export const AvatarWithDetailsSection = ({
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

export const GroupedOverlappedAvatarsSection = ({
  avatars = defaultAvatars,
  plusCount,
  size = "md",
}: {
  avatars?: AvatarItem[];
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
        cssClass="emailcn-avatar-group-center"
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
