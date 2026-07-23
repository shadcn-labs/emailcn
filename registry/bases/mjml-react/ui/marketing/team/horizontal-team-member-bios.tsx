import {
  MjmlColumn,
  MjmlImage,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { TeamEmailShell } from "@/registry/bases/mjml-react/ui/marketing/team/team-shared";

export type HorizontalTeamMemberBiosVariant =
  | "image-left"
  | "image-right"
  | "image-left-accent"
  | "image-right-accent";

export interface HorizontalTeamMemberBiosProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  bio1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  bio2?: string;
  variant?: HorizontalTeamMemberBiosVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const HorizontalTeamMemberBiosSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://emailcn.vercel.app/api/email-assets/teams/member-1-md.jpg",
  avatarSrc2 = "https://emailcn.vercel.app/api/email-assets/teams/member-2-md.jpg",
  bio1 = "Imagination is more important than knowledge. For knowledge is limited.",
  bio2 = "Imagination is more important than knowledge. For knowledge is limited.",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "image-left",
}: Omit<HorizontalTeamMemberBiosProps, "theme">) => {
  const imageLeft = variant === "image-left" || variant === "image-left-accent";
  const accent = variant.endsWith("-accent");
  const members = [
    { alt: avatarAlt1, bio: bio1, name: name1, role: role1, src: avatarSrc1 },
    { alt: avatarAlt2, bio: bio2, name: name2, role: role2, src: avatarSrc2 },
  ];

  return (
    <>
      {members.map((member, index) => {
        const image = (
          <MjmlColumn padding="0 12px" verticalAlign="middle" width="34%">
            <MjmlImage
              alt={member.alt}
              borderRadius="9999px"
              padding="0"
              src={member.src}
              width="164px"
            />
          </MjmlColumn>
        );
        const copy = (
          <MjmlColumn padding="12px" verticalAlign="middle" width="66%">
            <MjmlText
              color={accent ? "#fffffe" : "#030712"}
              fontFamily={fontFamily}
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              padding="0"
            >
              {member.name}
            </MjmlText>
            <MjmlText
              color={accent ? "#d1d5db" : "#4b5563"}
              fontFamily={fontFamily}
              fontSize="14px"
              lineHeight="20px"
              padding="0"
            >
              {member.role}
            </MjmlText>
            <MjmlText
              color={accent ? "#9ca3af" : "#4b5563"}
              fontFamily={fontFamily}
              fontSize="16px"
              lineHeight="24px"
              padding="16px 0 0"
            >
              {member.bio}
            </MjmlText>
            <MjmlSocial align="left" iconSize="16px" padding="16px 0 0">
              {["facebook", "x", "linkedin"].map((network) => (
                <MjmlSocialElement
                  href={`https://${network}.com`}
                  key={network}
                  name={network}
                />
              ))}
            </MjmlSocial>
          </MjmlColumn>
        );
        return (
          <MjmlSection
            backgroundColor={accent ? "#030712" : "#fffffe"}
            key={`${member.name}-${index}`}
            padding={index === 0 ? "44px 12px 12px" : "12px 12px 44px"}
          >
            {imageLeft ? image : copy}
            {imageLeft ? copy : image}
          </MjmlSection>
        );
      })}
    </>
  );
};

export const HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  ...props
}: HorizontalTeamMemberBiosProps) => (
  <TeamEmailShell theme={theme}>
    <HorizontalTeamMemberBiosSection {...props} />
  </TeamEmailShell>
);

HorizontalTeamMemberBios.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies HorizontalTeamMemberBiosProps;
