import type { ReactNode } from "react";
import {
  Section,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
  Tailwind,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

type AvatarSize = "2xl" | "lg" | "md" | "sm" | "xl" | "xs";

interface InternalAvatarItem {
  name: string;
  url?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

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
  <Section style={{ backgroundColor: "#f1f5f9" }}>
    <Section style={{ height: "100px" }} />
    <Section
      style={{
        backgroundColor: "#fffffe",
        fontFamily,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "600px",
        paddingBottom: "44px",
      }}
    >
      <Section style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        <Section style={{ lineHeight: "44px" }}>&zwj;</Section>
        {children}
      </Section>
    </Section>
    <Section style={{ height: "100px" }} />
  </Section>
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
  return (
    <AvatarShell>
      <Section style={{ textAlign: align }}>
        <Section style={{ fontSize: 0 }}>
          {avatars.slice(0, 4).map((avatar, index) => (
            <span
              key={`${avatar.name}-${index}`}
              style={{
                display: "inline-block",
                maxWidth: `${config.overlapWidth}px`,
                verticalAlign: "top",
                width: `${config.overlapWidth}px`,
              }}
            >
              <Img
                alt={avatar.name}
                height={config.diameter}
                src={avatar.url ?? defaultAvatars[index % 4]?.url}
                style={{
                  border: "2px solid #fffffe",
                  borderRadius: "9999px",
                  display: "inline-block",
                  maxWidth: `${config.diameter}px`,
                  verticalAlign: "middle",
                }}
                width={config.diameter}
              />
            </span>
          ))}
          {plusCount && plusCount > 0 ? (
            <span
              style={{
                backgroundColor: "#d1fae5",
                border: "2px solid #fffffe",
                borderRadius: "9999px",
                color: "#030712",
                display: "inline-block",
                fontFamily,
                fontSize: `${config.countFontSize}px`,
                fontWeight: 500,
                height: `${config.diameter}px`,
                lineHeight: `${config.diameter}px`,
                textAlign: "center",
                verticalAlign: "top",
                width: `${config.diameter}px`,
              }}
            >
              +{plusCount}
            </span>
          ) : null}
        </Section>
      </Section>
    </AvatarShell>
  );
};

interface Avatar_GroupedOverlappedAvatarsProps {
  align?: "center" | "left" | "right";
  avatars?: InternalAvatarItem[];
  plusCount?: number;
  size?: AvatarSize;
  theme?: TailwindConfig;
}

const Avatar_GroupedOverlappedAvatars = ({
  theme = defaultTheme,
  ...props
}: Avatar_GroupedOverlappedAvatarsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Grouped overlapped avatars</Preview>
    <Tailwind config={theme}>
      <Body style={{ backgroundColor: "#f1f5f9" }} className="m-0">
        <GroupedOverlappedAvatarsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
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
