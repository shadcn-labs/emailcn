import { Section, Row, Column, Text, Img } from "jsx-email";
import type { CSSProperties, ReactNode } from "react";
import { Fragment } from "react";

export type AvatarAlignment = "center" | "left" | "right";
export type AvatarSize = "2xl" | "lg" | "md" | "sm" | "xl" | "xs";

export interface AvatarItem {
  name: string;
  url?: string;
}

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";
const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

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

export const AvatarWithDetailsSection = ({
  align = "center",
  avatarUrl = `${ASSET_ROOT}/avatar-2.jpg`,
  email = "johnadams@example.com",
  mjmlCompensation = false,
  name = "John Adams",
}: {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  mjmlCompensation?: boolean;
  name?: string;
}) => {
  let alignmentStyle: CSSProperties = {
    marginLeft: "auto",
    marginRight: "auto",
  };

  if (align === "left") {
    alignmentStyle = { marginRight: "auto" };
  } else if (align === "right") {
    alignmentStyle = { marginLeft: "auto" };
  }

  return (
    <AvatarShell>
      <Section
        style={{
          borderSpacing: 0,
          ...(mjmlCompensation && align === "center"
            ? { left: "1px", position: "relative" as const }
            : {}),
          ...alignmentStyle,
        }}
      >
        <Fragment>
          <Row>
            <Column style={{ verticalAlign: "top" }}>
              <Img
                alt={name}
                height={48}
                src={avatarUrl}
                style={{
                  borderRadius: "9999px",
                  maxWidth: "100%",
                  verticalAlign: "middle",
                }}
                width={48}
              />
            </Column>
            <Column style={{ width: "12px" }} />
            <Column style={{ textAlign: "left", verticalAlign: "top" }}>
              <Text
                style={{
                  color: "#030712",
                  fontFamily,
                  fontSize: "14px",
                  fontWeight: 500,
                  lineHeight: "20px",
                  margin: 0,
                }}
              >
                {name}
              </Text>
              <Text
                style={{
                  color: "#6b7280",
                  fontFamily,
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "20px",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                {email}
              </Text>
            </Column>
          </Row>
        </Fragment>
      </Section>
    </AvatarShell>
  );
};

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

  return (
    <AvatarShell>
      <Section style={{ textAlign: "center" }}>
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
