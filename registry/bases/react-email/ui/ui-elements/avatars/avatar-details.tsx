import { Fragment } from "react";
import type { CSSProperties, ReactNode } from "react";
import {
  Section,
  Row,
  Column,
  Text,
  Img,
  Body,
  Head as EmailHead,
  Html,
  Preview,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/react-email/themes/theme-default";

type AvatarAlignment = "center" | "left" | "right";

const ASSET_ROOT = "https://emailcn.vercel.app/api/email-assets/reviews";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

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

const AvatarWithDetailsSection = ({
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

interface Avatar_AvatarWithDetailsProps {
  align?: AvatarAlignment;
  avatarUrl?: string;
  email?: string;
  name?: string;
  theme?: TailwindConfig;
}

const Avatar_AvatarWithDetails = ({
  theme: _theme = defaultTheme,
  ...props
}: Avatar_AvatarWithDetailsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Avatar with details</Preview>
    <Body style={{ backgroundColor: "#f1f5f9", margin: 0 }}>
      <AvatarWithDetailsSection {...props} />
    </Body>
  </Html>
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
