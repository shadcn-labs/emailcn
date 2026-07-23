import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  TeamEmailShell,
  TeamMemberContent,
} from "@/registry/bases/mjml-react/ui/marketing/team/team-shared";

export type TwoColumnTeamCardsWithDetailsVariant =
  | "default"
  | "boxed"
  | "accent";

export interface TwoColumnTeamCardsWithDetailsProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  bio1?: string;
  email1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  bio2?: string;
  email2?: string;
  variant?: TwoColumnTeamCardsWithDetailsVariant;
}

export const TwoColumnTeamCardsWithDetailsSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://emailcn.vercel.app/api/email-assets/teams/member-1-lg.jpg",
  avatarSrc2 = "https://emailcn.vercel.app/api/email-assets/teams/member-2-lg.jpg",
  bio1 = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces.",
  bio2 = "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces.",
  email1 = "jadam@example.com",
  email2 = "hpetersson@example.com",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TwoColumnTeamCardsWithDetailsProps, "theme">) => {
  const accent = variant === "accent";
  let cardBackgroundColor: string | undefined;
  if (accent) {
    cardBackgroundColor = "#030712";
  } else if (variant === "boxed") {
    cardBackgroundColor = "#f9fafb";
  }
  const members = [
    {
      alt: avatarAlt1,
      bio: bio1,
      email: email1,
      name: name1,
      role: role1,
      src: avatarSrc1,
    },
    {
      alt: avatarAlt2,
      bio: bio2,
      email: email2,
      name: name2,
      role: role2,
      src: avatarSrc2,
    },
  ];

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {members.map((member, index) => (
        <MjmlColumn
          backgroundColor={cardBackgroundColor}
          borderRadius={variant === "default" ? "0" : "8px"}
          key={`${member.name}-${index}`}
          padding={index === 0 ? "24px 12px 24px 0" : "24px 0 24px 12px"}
          verticalAlign="top"
          width="50%"
        >
          <TeamMemberContent
            accent={accent}
            avatarAlt={member.alt}
            avatarSrc={member.src}
            bio={member.bio}
            email={member.email}
            name={member.name}
            role={member.role}
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  ...props
}: TwoColumnTeamCardsWithDetailsProps) => (
  <TeamEmailShell theme={theme}>
    <TwoColumnTeamCardsWithDetailsSection {...props} />
  </TeamEmailShell>
);

TwoColumnTeamCardsWithDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsWithDetailsProps;
