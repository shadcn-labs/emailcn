import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  HeaderEmailShell,
  HeaderLogo,
} from "@/registry/bases/mjml-react/ui/marketing/headers/header-shared";

export type HeaderWithUserDetailsAlignment = "left" | "right";
export type HeaderWithUserDetailsAvatar = "initials" | "image";

export interface HeaderWithUserDetailsProps {
  theme?: EmailThemeTokens;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  userName?: string;
  userEmail?: string;
  initials?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatar?: HeaderWithUserDetailsAvatar;
  alignment?: HeaderWithUserDetailsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  avatarBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const HeaderWithUserDetailsSection = (
  props: Omit<HeaderWithUserDetailsProps, "theme">
) => {
  const {
    alignment,
    avatar,
    avatarAlt,
    avatarBackgroundColor,
    avatarSrc,
    backgroundColor,
    headingColor,
    initials,
    logoAlt,
    logoHref,
    logoSrc,
    mutedTextColor,
    userEmail,
    userName,
  } = {
    alignment: "left" as HeaderWithUserDetailsAlignment,
    avatar: "initials" as HeaderWithUserDetailsAvatar,
    avatarAlt: "",
    avatarBackgroundColor: "#f3f4f6",
    backgroundColor: "#fffffe",
    headingColor: "#030712",
    initials: "JD",
    logoAlt: "Maizzle",
    logoHref: "https://example.com",
    logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
    mutedTextColor: "#6b7280",
    ...props,
  };

  const imageOnRight = avatar === "image" && alignment === "right";
  const resolvedName =
    userName ?? (imageOnRight ? "Joanne Smith" : "John Adams");
  let defaultEmail = "johnadams@gmail.com";
  if (avatar === "image") {
    defaultEmail = imageOnRight ? "joanne@example.com" : "ajohn@example.com";
  }
  const resolvedEmail = userEmail ?? defaultEmail;
  const resolvedAvatar =
    avatarSrc ??
    (imageOnRight
      ? "https://emailcn.vercel.app/api/email-assets/reviews/avatar.jpg"
      : "https://emailcn.vercel.app/api/email-assets/reviews/avatar-2.jpg");
  const logo = (
    <MjmlColumn padding="0" verticalAlign="middle" width="15%">
      <HeaderLogo
        align={alignment}
        alt={logoAlt}
        href={logoHref}
        src={logoSrc}
      />
    </MjmlColumn>
  );
  const avatarColumn = (
    <MjmlColumn padding="0 8px" verticalAlign="middle" width="12%">
      {avatar === "image" ? (
        <MjmlImage
          align="center"
          alt={avatarAlt}
          borderRadius="9999px"
          padding="0"
          src={resolvedAvatar}
          width="32px"
        />
      ) : (
        <MjmlText
          align="center"
          backgroundColor={avatarBackgroundColor}
          color={headingColor}
          fontFamily={fontFamily}
          fontSize="10px"
          fontWeight="600"
          lineHeight="32px"
          padding="0"
        >
          {initials}
        </MjmlText>
      )}
    </MjmlColumn>
  );
  const details = (
    <MjmlColumn padding="0" verticalAlign="middle" width="73%">
      <MjmlText
        align={alignment === "left" ? "right" : "left"}
        color={headingColor}
        fontFamily={fontFamily}
        fontSize="14px"
        fontWeight="600"
        lineHeight="20px"
        padding="0"
      >
        {resolvedName}
      </MjmlText>
      <MjmlText
        align={alignment === "left" ? "right" : "left"}
        color={mutedTextColor}
        fontFamily={fontFamily}
        fontSize="12px"
        lineHeight="16px"
        padding="0"
      >
        {resolvedEmail}
      </MjmlText>
    </MjmlColumn>
  );

  return (
    <MjmlSection backgroundColor={backgroundColor} padding="24px">
      {alignment === "left" ? logo : avatarColumn}
      {details}
      {alignment === "left" ? avatarColumn : logo}
    </MjmlSection>
  );
};

export const HeaderWithUserDetails = ({
  pageBackgroundColor = "#f1f5f9",
  theme = defaultTheme,
  ...props
}: HeaderWithUserDetailsProps) => (
  <HeaderEmailShell
    pageBackgroundColor={pageBackgroundColor}
    preview="User account"
    theme={theme}
  >
    <HeaderWithUserDetailsSection {...props} />
  </HeaderEmailShell>
);

HeaderWithUserDetails.PreviewProps = {
  alignment: "left",
  avatar: "initials",
  theme: defaultTheme,
} satisfies HeaderWithUserDetailsProps;
