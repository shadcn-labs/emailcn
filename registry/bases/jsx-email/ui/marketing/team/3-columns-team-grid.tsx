import {
  Body,
  Head,
  Html,
  Preview,
  Section,
  Row,
  Column,
  Link,
  Heading,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .team-grid-cell { display: inline-block !important; width: 50% !important; margin-bottom: 24px !important; }
    .team-grid-gap { display: none !important; }
    .team-grid-card-pad { padding-left: 12px !important; padding-right: 12px !important; }
  }
`;

type SocialIcon = "facebook" | "github" | "instagram" | "linkedin" | "x";

interface Member {
  alt: string;
  image: string;
  name: string;
  role: string;
  social: SocialIcon[];
}

const SocialLinks = ({
  accent,
  icons,
}: {
  accent: boolean;
  icons: SocialIcon[];
}) => {
  const suffix = accent ? "light" : "dark";
  return (
    <Section align="center">
      <Fragment>
        <Row>
          {icons.map((icon, index) => (
            <Fragment key={icon}>
              {index > 0 ? (
                <Column style={{ width: "16px" }}>&zwj;</Column>
              ) : null}
              <Column style={{ width: "16px" }}>
                <Link href={`https://${icon === "x" ? "x" : icon}.com`}>
                  <Img
                    alt=""
                    src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}-${suffix}.png`}
                    width="16"
                  />
                </Link>
              </Column>
            </Fragment>
          ))}
        </Row>
      </Fragment>
    </Section>
  );
};

const MemberCard = ({
  featured,
  member,
  variant,
}: {
  featured: boolean;
  member: Member;
  variant: ThreeColumnsTeamGridVariant;
}) => {
  const treated = variant === "with-accent" || variant === "bordered";
  const accent = featured && variant === "with-accent";
  return (
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column
            className="team-grid-card-pad"
            style={{
              backgroundColor: accent ? "#030712" : undefined,
              border:
                featured && variant === "bordered"
                  ? "1px solid #4f46e5"
                  : undefined,
              borderRadius: treated && featured ? "8px" : undefined,
              boxShadow:
                featured && variant === "bordered"
                  ? "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)"
                  : undefined,
              padding: treated ? "24px 16px" : 0,
              textAlign: "center",
            }}
          >
            <Img
              alt={member.alt}
              src={member.image}
              style={{
                borderRadius: "9999px",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width="64"
            />
            <Heading
              style={{
                color: accent ? "#fffffe" : "#030712",
                fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                margin: "12px 0 0",
              }}
              as="h3"
            >
              {member.name}
            </Heading>
            <Text
              style={{
                color: accent ? "#d1d5db" : "#4b5563",
                fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
                margin: 0,
              }}
            >
              {member.role}
            </Text>
            <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
            <SocialLinks
              accent={accent}
              icons={accent ? ["instagram", "x", "linkedin"] : member.social}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const GridRows = ({
  members,
  variant,
}: {
  members: Member[];
  variant: ThreeColumnsTeamGridVariant;
}) => {
  const rows = [members.slice(0, 3), members.slice(3, 6)];
  const gap = variant === "with-accent" || variant === "bordered" ? 20 : 44;
  return (
    <Section align="center">
      <Fragment>
        {rows.map((row, rowIndex) => (
          <Fragment key={rowIndex}>
            {rowIndex > 0 ? (
              <Row>
                <Column colSpan={5} style={{ lineHeight: `${gap}px` }}>
                  &zwj;
                </Column>
              </Row>
            ) : null}
            <Row>
              {row.map((member, memberIndex) => {
                const absoluteIndex = rowIndex * 3 + memberIndex;
                return (
                  <Fragment key={member.name}>
                    {memberIndex > 0 ? (
                      <Column
                        className="team-grid-gap"
                        style={{ width: "24px" }}
                      >
                        &zwj;
                      </Column>
                    ) : null}
                    <Column
                      className="team-grid-cell"
                      style={{ verticalAlign: "top", width: "154px" }}
                    >
                      <MemberCard
                        featured={absoluteIndex === 0}
                        member={member}
                        variant={variant}
                      />
                    </Column>
                  </Fragment>
                );
              })}
            </Row>
          </Fragment>
        ))}
      </Fragment>
    </Section>
  );
};

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
    variant: "default" as ThreeColumnsTeamGridVariant,
    ...props,
  };

  const members: Member[] = [
    {
      alt: avatarAlt1,
      image: avatarSrc1,
      name: name1,
      role: role1,
      social: ["github", "x", "linkedin"],
    },
    {
      alt: avatarAlt2,
      image: avatarSrc2,
      name: name2,
      role: role2,
      social: ["facebook", "x", "instagram"],
    },
    {
      alt: avatarAlt3,
      image: avatarSrc3,
      name: name3,
      role: role3,
      social: ["x", "github"],
    },
    {
      alt: avatarAlt4,
      image: avatarSrc4,
      name: name4,
      role: role4,
      social: ["facebook", "x", "linkedin"],
    },
    {
      alt: avatarAlt5,
      image: avatarSrc5,
      name: name5,
      role: role5,
      social: ["x", "github"],
    },
    {
      alt: avatarAlt6,
      image: avatarSrc6,
      name: name6,
      role: role6,
      social: ["x", "instagram"],
    },
  ];

  return (
    <>
      <style>{responsiveStyles}</style>
      <Section style={{ backgroundColor: "#f1f5f9", width: "100%" }}>
        <Fragment>
          <Row>
            <Column>&zwj;</Column>
            <Column
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                padding: "44px 24px",
                width: "600px",
              }}
            >
              {variant === "with-hero" ? (
                <>
                  <Section
                    style={{
                      backgroundImage: `url('${heroImageSrc}')`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      borderRadius: "8px",
                      padding: "244px 0 44px",
                    }}
                  >
                    <Text
                      style={{
                        color: "#fffffe",
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      Meet the Founder/Organiser
                    </Text>
                    <Text
                      style={{
                        color: "#fffffe",
                        fontFamily,
                        fontSize: "16px",
                        fontWeight: 600,
                        lineHeight: "24px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {name1}
                    </Text>
                    <Text
                      style={{
                        color: "#9ca3af",
                        fontFamily,
                        fontSize: "14px",
                        lineHeight: "20px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {role1}
                    </Text>
                    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                    <SocialLinks accent icons={["x", "linkedin"]} />
                  </Section>
                  <Heading
                    style={{
                      color: "#030712",
                      fontFamily,
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "28px",
                      margin: "44px 0 24px",
                      textAlign: "center",
                    }}
                    as="h2"
                  >
                    Additional speakers
                  </Heading>
                </>
              ) : null}
              <GridRows
                members={members}
                variant={variant === "with-hero" ? "default" : variant}
              />
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

export const ThreeColumnsTeamGrid = ({
  theme: _theme = defaultTheme,
  ...props
}: ThreeColumnsTeamGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Meet the team</Preview>
    <Body style={{ margin: 0 }}>
      <ThreeColumnsTeamGridSection {...props} />
    </Body>
  </Html>
);

ThreeColumnsTeamGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsTeamGridProps;
