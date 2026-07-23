import {
  MjmlColumn,
  MjmlDivider,
  MjmlImage,
  MjmlSection,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";
import { TeamEmailShell } from "@/registry/bases/mjml-react/ui/marketing/team/team-shared";

export type TwoColumnsCompactVariant =
  | "default"
  | "border-top"
  | "bordered"
  | "accent";

export interface TwoColumnsCompactProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  variant?: TwoColumnsCompactVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

export const TwoColumnsCompactSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://emailcn.vercel.app/api/email-assets/teams/member-1-md.jpg",
  avatarSrc2 = "https://emailcn.vercel.app/api/email-assets/teams/member-2-md.jpg",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TwoColumnsCompactProps, "theme">) => {
  const accent = variant === "accent";
  const members = [
    { alt: avatarAlt1, name: name1, role: role1, src: avatarSrc1 },
    { alt: avatarAlt2, name: name2, role: role2, src: avatarSrc2 },
  ];

  return (
    <MjmlSection backgroundColor="#fffffe" padding="44px 24px">
      {members.map((member, index) => (
        <MjmlColumn
          backgroundColor={accent ? "#030712" : undefined}
          border={variant === "bordered" ? "1px solid #d1d5db" : undefined}
          borderRadius={variant === "bordered" || accent ? "8px" : "0"}
          key={`${member.name}-${index}`}
          padding={index === 0 ? "16px 12px 16px 0" : "16px 0 16px 12px"}
          verticalAlign="top"
          width="50%"
        >
          {variant === "border-top" ? (
            <MjmlDivider
              borderColor="#030712"
              borderWidth="2px"
              padding="0 0 16px"
            />
          ) : null}
          <MjmlImage
            align="left"
            alt={member.alt}
            borderRadius="9999px"
            padding="0"
            src={member.src}
            width="64px"
          />
          <MjmlText
            color={accent ? "#fffffe" : "#030712"}
            fontFamily={fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="12px 0 0"
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
          <MjmlSocial align="left" iconSize="16px" padding="12px 0 0">
            {["facebook", "x", "linkedin"].map((network) => (
              <MjmlSocialElement
                href={`https://${network}.com`}
                key={network}
                name={network}
              />
            ))}
          </MjmlSocial>
        </MjmlColumn>
      ))}
    </MjmlSection>
  );
};

export const TwoColumnsCompact = ({
  theme = defaultTheme,
  ...props
}: TwoColumnsCompactProps) => (
  <TeamEmailShell theme={theme}>
    <TwoColumnsCompactSection {...props} />
  </TeamEmailShell>
);

TwoColumnsCompact.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsCompactProps;
