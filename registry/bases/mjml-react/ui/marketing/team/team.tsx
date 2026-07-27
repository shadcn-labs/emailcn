import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSocial,
  MjmlSocialElement,
  MjmlText,
  MjmlWrapper,
  MjmlColumn,
  MjmlSection,
  MjmlDivider,
} from "@faire/mjml-react";
import type { ReactNode } from "react";

import { defaultTheme } from "@/registry/themes/definitions/default";
import type { EmailThemeTokens } from "@/registry/themes/definitions/default";

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamEmailShell = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: EmailThemeTokens;
}) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Meet the team</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">{children}</MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

const TeamMemberContent = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  email,
  imageWidth = 264,
  imageAfter = false,
  name,
  role,
  rounded = false,
}: {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio?: string;
  email?: string;
  imageWidth?: number;
  imageAfter?: boolean;
  name: string;
  role: string;
  rounded?: boolean;
}) => {
  const image = (
    <MjmlImage
      align="center"
      alt={avatarAlt}
      borderRadius={rounded ? "9999px" : "8px"}
      padding="0"
      src={avatarSrc}
      width={`${imageWidth}px`}
    />
  );
  return (
    <>
      {imageAfter ? null : image}
      <MjmlText
        align={rounded ? "center" : "left"}
        color={accent ? "#fffffe" : "#030712"}
        fontFamily={fontFamily}
        fontSize="16px"
        fontWeight="600"
        lineHeight="24px"
        padding="16px 0 0"
      >
        {name}
      </MjmlText>
      <MjmlText
        align={rounded ? "center" : "left"}
        color={accent ? "#d1d5db" : "#4b5563"}
        fontFamily={fontFamily}
        fontSize="14px"
        lineHeight="20px"
        padding="0"
      >
        {role}
      </MjmlText>
      {(() => {
        if (bio) {
          return (
            <MjmlText
              align={rounded ? "center" : "left"}
              color={accent ? "#9ca3af" : "#4b5563"}
              fontFamily={fontFamily}
              fontSize="16px"
              lineHeight="24px"
              padding="16px 0 0"
            >
              {bio}
            </MjmlText>
          );
        }
        return null;
      })()}
      {(() => {
        if (email) {
          return (
            <MjmlText
              align={rounded ? "center" : "left"}
              color={accent ? "#a5b4fc" : "#4f46e5"}
              fontFamily={fontFamily}
              fontSize="14px"
              fontWeight="500"
              lineHeight="20px"
              padding="16px 0 0"
            >
              {email}
            </MjmlText>
          );
        }
        return null;
      })()}
      <MjmlSocial
        align={rounded ? "center" : "left"}
        iconSize="16px"
        padding="16px 0 0"
      >
        {["facebook", "x", "linkedin"].map((network) => (
          <MjmlSocialElement
            href={`https://${network}.com`}
            key={network}
            name={network}
          />
        ))}
      </MjmlSocial>
      {imageAfter ? image : null}
    </>
  );
};

type TeamCardsDetails_TwoColumnTeamCardsWithDetailsVariant =
  | "default"
  | "boxed"
  | "accent";

interface TeamCardsDetails_TwoColumnTeamCardsWithDetailsProps {
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
  variant?: TeamCardsDetails_TwoColumnTeamCardsWithDetailsVariant;
}

const TeamCardsDetails_TwoColumnTeamCardsWithDetailsSection = ({
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
}: Omit<TeamCardsDetails_TwoColumnTeamCardsWithDetailsProps, "theme">) => {
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

const TeamCardsDetails_TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  ...props
}: TeamCardsDetails_TwoColumnTeamCardsWithDetailsProps) => (
  <TeamEmailShell theme={theme}>
    <TeamCardsDetails_TwoColumnTeamCardsWithDetailsSection {...props} />
  </TeamEmailShell>
);

TeamCardsDetails_TwoColumnTeamCardsWithDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCardsDetails_TwoColumnTeamCardsWithDetailsProps;

const __TeamCardsDetails = TeamCardsDetails_TwoColumnTeamCardsWithDetails;

type TeamCards_TwoColumnTeamCardsVariant =
  | "default"
  | "boxed"
  | "accent"
  | "boxed-alt"
  | "accent-alt"
  | "rounded"
  | "rounded-accent";

interface TeamCards_TwoColumnTeamCardsProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  variant?: TeamCards_TwoColumnTeamCardsVariant;
}

const TeamCards_TwoColumnTeamCardsSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1,
  avatarSrc2,
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TeamCards_TwoColumnTeamCardsProps, "theme">) => {
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

const TeamCards_TwoColumnTeamCards = ({
  theme = defaultTheme,
  ...props
}: TeamCards_TwoColumnTeamCardsProps) => (
  <TeamEmailShell theme={theme}>
    <TeamCards_TwoColumnTeamCardsSection {...props} />
  </TeamEmailShell>
);

TeamCards_TwoColumnTeamCards.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCards_TwoColumnTeamCardsProps;

const __TeamCards = TeamCards_TwoColumnTeamCards;

type TeamCompact_TwoColumnsCompactVariant =
  | "default"
  | "border-top"
  | "bordered"
  | "accent";

interface TeamCompact_TwoColumnsCompactProps {
  theme?: EmailThemeTokens;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  variant?: TeamCompact_TwoColumnsCompactVariant;
}

const TeamCompact_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamCompact_TwoColumnsCompactSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://emailcn.vercel.app/api/email-assets/teams/member-1-md.jpg",
  avatarSrc2 = "https://emailcn.vercel.app/api/email-assets/teams/member-2-md.jpg",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TeamCompact_TwoColumnsCompactProps, "theme">) => {
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
            fontFamily={TeamCompact_fontFamily}
            fontSize="16px"
            fontWeight="600"
            lineHeight="24px"
            padding="12px 0 0"
          >
            {member.name}
          </MjmlText>
          <MjmlText
            color={accent ? "#d1d5db" : "#4b5563"}
            fontFamily={TeamCompact_fontFamily}
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

const TeamCompact_TwoColumnsCompact = ({
  theme = defaultTheme,
  ...props
}: TeamCompact_TwoColumnsCompactProps) => (
  <TeamEmailShell theme={theme}>
    <TeamCompact_TwoColumnsCompactSection {...props} />
  </TeamEmailShell>
);

TeamCompact_TwoColumnsCompact.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TeamCompact_TwoColumnsCompactProps;

const __TeamCompact = TeamCompact_TwoColumnsCompact;

type TeamGrid_ThreeColumnsTeamGridVariant =
  | "default"
  | "with-accent"
  | "bordered"
  | "with-hero";

interface TeamGrid_ThreeColumnsTeamGridProps {
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
  variant?: TeamGrid_ThreeColumnsTeamGridVariant;
}

const TeamGrid_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamGrid_ThreeColumnsTeamGridSection = (
  props: Omit<TeamGrid_ThreeColumnsTeamGridProps, "theme">
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
                fontFamily={TeamGrid_fontFamily}
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
                fontFamily={TeamGrid_fontFamily}
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
                fontFamily={TeamGrid_fontFamily}
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

const TeamGrid_ThreeColumnsTeamGrid = ({
  theme = defaultTheme,
  ...props
}: TeamGrid_ThreeColumnsTeamGridProps) => (
  <TeamEmailShell theme={theme}>
    <TeamGrid_ThreeColumnsTeamGridSection {...props} />
  </TeamEmailShell>
);

TeamGrid_ThreeColumnsTeamGrid.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TeamGrid_ThreeColumnsTeamGridProps;

const __TeamGrid = TeamGrid_ThreeColumnsTeamGrid;

type TeamBios_HorizontalTeamMemberBiosVariant =
  | "image-left"
  | "image-right"
  | "image-left-accent"
  | "image-right-accent";

interface TeamBios_HorizontalTeamMemberBiosProps {
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
  variant?: TeamBios_HorizontalTeamMemberBiosVariant;
}

const TeamBios_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamBios_HorizontalTeamMemberBiosSection = ({
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
}: Omit<TeamBios_HorizontalTeamMemberBiosProps, "theme">) => {
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
              fontFamily={TeamBios_fontFamily}
              fontSize="18px"
              fontWeight="600"
              lineHeight="28px"
              padding="0"
            >
              {member.name}
            </MjmlText>
            <MjmlText
              color={accent ? "#d1d5db" : "#4b5563"}
              fontFamily={TeamBios_fontFamily}
              fontSize="14px"
              lineHeight="20px"
              padding="0"
            >
              {member.role}
            </MjmlText>
            <MjmlText
              color={accent ? "#9ca3af" : "#4b5563"}
              fontFamily={TeamBios_fontFamily}
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

const TeamBios_HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  ...props
}: TeamBios_HorizontalTeamMemberBiosProps) => (
  <TeamEmailShell theme={theme}>
    <TeamBios_HorizontalTeamMemberBiosSection {...props} />
  </TeamEmailShell>
);

TeamBios_HorizontalTeamMemberBios.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies TeamBios_HorizontalTeamMemberBiosProps;

const __TeamBios = TeamBios_HorizontalTeamMemberBios;

export interface TeamMember {
  name: string;
  role: string;
  avatar: {
    alt?: string;
    src: string;
  };
  bio?: string;
  email?: string;
}

export interface TeamProps {
  theme?: Parameters<typeof __TeamCards>[0]["theme"];
  members?: TeamMember[];
  layout?: "cards" | "compact" | "grid" | "bios";
  columns?: 2 | 3;
  appearance?: "plain" | "boxed" | "bordered" | "accent" | "rounded";
  imagePosition?: "left" | "right";
  heroImage?: {
    src: string;
    alt?: string;
  };
}

const toTeamProps = (members: TeamMember[] | undefined) =>
  Object.fromEntries(
    (members ?? []).flatMap((member, index) => {
      const suffix = index + 1;
      return [
        [`avatarSrc${suffix}`, member.avatar.src],
        [`avatarAlt${suffix}`, member.avatar.alt],
        [`name${suffix}`, member.name],
        [`role${suffix}`, member.role],
        [`bio${suffix}`, member.bio],
        [`email${suffix}`, member.email],
      ];
    })
  );

export const Team = ({
  theme,
  members,
  layout = "cards",
  columns = 2,
  appearance = "plain",
  imagePosition = "left",
  heroImage,
}: TeamProps) => {
  const props = { ...toTeamProps(members), theme };
  if (layout === "compact") {
    const variant = {
      accent: "accent",
      bordered: "bordered",
      boxed: "border-top",
      plain: "default",
      rounded: "default",
    }[appearance];
    return (
      <__TeamCompact
        {...props}
        variant={variant as Parameters<typeof __TeamCompact>[0]["variant"]}
      />
    );
  }
  if (layout === "grid" || columns === 3) {
    const variant = (() => {
      if (heroImage) {
        return "with-hero";
      }
      if (appearance === "accent") {
        return "with-accent";
      }
      if (appearance === "bordered") {
        return "bordered";
      }
      return "default";
    })();
    return (
      <__TeamGrid {...props} heroImageSrc={heroImage?.src} variant={variant} />
    );
  }
  if (layout === "bios") {
    const variant = `image-${imagePosition}${appearance === "accent" ? "-accent" : ""}`;
    return (
      <__TeamBios
        {...props}
        variant={variant as Parameters<typeof __TeamBios>[0]["variant"]}
      />
    );
  }
  const withDetails = members?.some(({ bio, email }) => bio || email);
  const variant = (() => {
    if (appearance === "plain") {
      return "default";
    }
    if (appearance === "bordered") {
      return "boxed";
    }
    return appearance;
  })();
  return (() => {
    if (withDetails) {
      return (
        <__TeamCardsDetails
          {...props}
          variant={
            variant === "rounded"
              ? "default"
              : (variant as Parameters<typeof __TeamCardsDetails>[0]["variant"])
          }
        />
      );
    }
    return (
      <__TeamCards
        {...props}
        variant={variant as Parameters<typeof __TeamCards>[0]["variant"]}
      />
    );
  })();
};

Team.PreviewProps = {
  appearance: "plain",
  columns: 2,
  imagePosition: "left",
  layout: "cards",
} satisfies TeamProps;
