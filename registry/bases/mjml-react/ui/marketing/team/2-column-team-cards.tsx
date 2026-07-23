import { MjmlColumn, MjmlSection } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  TeamEmailShell,
  TeamMemberContent,
} from "@/registry/bases/mjml-react/ui/marketing/team/team-shared";

export type TwoColumnTeamCardsVariant =
  | "default"
  | "boxed"
  | "accent"
  | "boxed-alt"
  | "accent-alt"
  | "rounded"
  | "rounded-accent";

export interface TwoColumnTeamCardsProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  variant?: TwoColumnTeamCardsVariant;
}

export const TwoColumnTeamCardsSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1,
  avatarSrc2,
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TwoColumnTeamCardsProps, "theme">) => {
  const rounded = variant === "rounded" || variant === "rounded-accent";
  const accent =
    variant === "accent" ||
    variant === "accent-alt" ||
    variant === "rounded-accent";
  const boxed = variant !== "default";
  const imageAfter = variant === "boxed-alt" || variant === "accent-alt";
  let cardBackgroundColor: string | undefined;
  if (accent) {
    cardBackgroundColor = "#030712";
  } else if (boxed) {
    cardBackgroundColor = "#f9fafb";
  }
  const members = [
    {
      alt: avatarAlt1,
      name: name1,
      role: role1,
      src:
        avatarSrc1 ??
        `https://emailcn.vercel.app/api/email-assets/teams/member-1-${rounded ? "md" : "lg"}.jpg`,
    },
    {
      alt: avatarAlt2,
      name: name2,
      role: role2,
      src:
        avatarSrc2 ??
        `https://emailcn.vercel.app/api/email-assets/teams/member-2-${rounded ? "md" : "lg"}.jpg`,
    },
  ];

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {members.map((member, index) => (
        <MjmlColumn
          backgroundColor={cardBackgroundColor}
          borderRadius={boxed ? "8px" : "0"}
          key={`${member.name}-${index}`}
          padding={index === 0 ? "24px 12px 24px 0" : "24px 0 24px 12px"}
          verticalAlign="top"
          width="50%"
        >
          <TeamMemberContent
            accent={accent}
            avatarAlt={member.alt}
            avatarSrc={member.src}
            imageAfter={imageAfter}
            imageWidth={rounded ? 144 : 264}
            name={member.name}
            role={member.role}
            rounded={rounded}
          />
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const TwoColumnTeamCards = ({
  theme = defaultTheme,
  ...props
}: TwoColumnTeamCardsProps) => (
  <TeamEmailShell theme={theme}>
    <TwoColumnTeamCardsSection {...props} />
  </TeamEmailShell>
);

TwoColumnTeamCards.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsProps;
