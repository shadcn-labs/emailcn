import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import {
  TeamEmailShell,
  TeamMemberContent,
} from "@/registry/bases/mjml-react/ui/marketing/team/team-shared";

export type ThreeColumnsTeamGridVariant =
  | "default"
  | "with-accent"
  | "bordered"
  | "with-hero";

export interface ThreeColumnsTeamGridProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  avatarSrc3?: string;
  avatarAlt3?: string;
  name3?: string;
  role3?: string;
  avatarSrc4?: string;
  avatarAlt4?: string;
  name4?: string;
  role4?: string;
  avatarSrc5?: string;
  avatarAlt5?: string;
  name5?: string;
  role5?: string;
  avatarSrc6?: string;
  avatarAlt6?: string;
  name6?: string;
  role6?: string;
  heroImageSrc?: string;
  variant?: ThreeColumnsTeamGridVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const ThreeColumnsTeamGridSection = (
  props: Omit<ThreeColumnsTeamGridProps, "theme">
) => {
  const {
    avatarAlt1,
    avatarAlt2,
    avatarAlt3,
    avatarAlt4,
    avatarAlt5,
    avatarAlt6,
    avatarSrc1,
    avatarSrc2,
    avatarSrc3,
    avatarSrc4,
    avatarSrc5,
    avatarSrc6,
    heroImageSrc,
    name1,
    name2,
    name3,
    name4,
    name5,
    name6,
    role1,
    role2,
    role3,
    role4,
    role5,
    role6,
    variant,
  } = {
    avatarAlt1: "",
    avatarAlt2: "",
    avatarAlt3: "",
    avatarAlt4: "",
    avatarAlt5: "",
    avatarAlt6: "",
    avatarSrc1:
      "https://emailcn.vercel.app/api/email-assets/teams/member-1.jpg",
    avatarSrc2:
      "https://emailcn.vercel.app/api/email-assets/teams/member-2.jpg",
    avatarSrc3:
      "https://emailcn.vercel.app/api/email-assets/teams/member-3.jpg",
    avatarSrc4:
      "https://emailcn.vercel.app/api/email-assets/teams/member-4.jpg",
    avatarSrc5:
      "https://emailcn.vercel.app/api/email-assets/teams/member-5.jpg",
    avatarSrc6:
      "https://emailcn.vercel.app/api/email-assets/teams/member-6.jpg",
    heroImageSrc: "https://emailcn.vercel.app/api/email-assets/teams/hero.jpg",
    name1: "Jason Adam",
    name2: "Henrik Petersson",
    name3: "Ella Roustek",
    name4: "Hannah Andersson",
    name5: "Terrence Hold",
    name6: "Sandra Ver",
    role1: "Senior Developer",
    role2: "Senior UX/UI designer",
    role3: "Frontend Developer",
    role4: "Product Manager",
    role5: "Head of Engineering",
    role6: "UX Research Lead",
    variant: "default",
    ...props,
  };

  const members = [
    { alt: avatarAlt1, name: name1, role: role1, src: avatarSrc1 },
    { alt: avatarAlt2, name: name2, role: role2, src: avatarSrc2 },
    { alt: avatarAlt3, name: name3, role: role3, src: avatarSrc3 },
    { alt: avatarAlt4, name: name4, role: role4, src: avatarSrc4 },
    { alt: avatarAlt5, name: name5, role: role5, src: avatarSrc5 },
    { alt: avatarAlt6, name: name6, role: role6, src: avatarSrc6 },
  ];

  return (
    <>
      {variant === "with-hero" ? (
        <>
          <MjmlSection
            backgroundColor="#030712"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundUrl={heroImageSrc}
            padding="244px 24px 44px"
          >
            <MjmlColumn padding="0">
              <MjmlText
                align="center"
                color="#fffffe"
                fontFamily={fontFamily}
                fontSize="16px"
                fontWeight="600"
                lineHeight="24px"
                padding="0"
              >
                Meet the Founder/Organiser
              </MjmlText>
              <MjmlText
                align="center"
                color="#fffffe"
                fontFamily={fontFamily}
                fontSize="16px"
                fontWeight="600"
                lineHeight="24px"
                padding="0"
              >
                {name1}
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
          <MjmlSection backgroundColor="#fffffe" padding="32px 24px 12px">
            <MjmlColumn padding="0">
              <MjmlText
                align="center"
                color="#030712"
                fontFamily={fontFamily}
                fontSize="20px"
                fontWeight="600"
                lineHeight="28px"
                padding="0"
              >
                Additional speakers
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </>
      ) : null}
      {[members.slice(0, 3), members.slice(3, 6)].map((row, rowIndex) => (
        <MjmlSection
          backgroundColor="#fffffe"
          key={`team-row-${rowIndex}`}
          padding={rowIndex === 0 ? "32px 12px 12px" : "12px 12px 44px"}
        >
          {row.map((member, index) => {
            const featured = rowIndex === 0 && index === 0;
            const accent = featured && variant === "with-accent";
            return (
              <MjmlColumn
                backgroundColor={accent ? "#030712" : undefined}
                border={
                  featured && variant === "bordered"
                    ? "1px solid #4f46e5"
                    : undefined
                }
                borderRadius={featured && variant !== "default" ? "8px" : "0"}
                key={`${member.name}-${index}`}
                padding="16px 12px"
                verticalAlign="top"
                width="33.333%"
              >
                <TeamMemberContent
                  accent={accent}
                  avatarAlt={member.alt}
                  avatarSrc={member.src}
                  imageWidth={144}
                  name={member.name}
                  role={member.role}
                  rounded
                />
              </MjmlColumn>
            );
          })}
        </MjmlSection>
      ))}
    </>
  );
};

export const ThreeColumnsTeamGrid = ({
  theme = defaultTheme,
  ...props
}: ThreeColumnsTeamGridProps) => (
  <TeamEmailShell theme={theme}>
    <ThreeColumnsTeamGridSection {...props} />
  </TeamEmailShell>
);

ThreeColumnsTeamGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsTeamGridProps;
