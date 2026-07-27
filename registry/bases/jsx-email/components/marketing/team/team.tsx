import {
  Body,
  Head as EmailHead,
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

import { EmailTailwind } from "@/components/email/email-tailwind";
import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/font-default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/theme-default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/theme-default";

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

const TeamCardsDetails_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamCardsDetails_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .team-details-stack { display: block !important; width: 100% !important; }
      .team-details-gap { line-height: 24px !important; }
    }
  `;

const TeamCardsDetails_SocialLinks = ({
  accent,
  lastIcon,
}: {
  accent: boolean;
  lastIcon: "instagram" | "linkedin";
}) => {
  const suffix = accent ? "light" : "dark";
  const icons = ["facebook", "x", lastIcon] as const;
  return (
    <Section>
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

interface TeamCardsDetails_DetailsCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio: string;
  email: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TeamCardsDetails_TwoColumnTeamCardsWithDetailsVariant;
}

const TeamCardsDetails_DetailsCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  email,
  lastIcon,
  name,
  role,
  variant,
}: TeamCardsDetails_DetailsCardProps) => {
  const boxed = variant !== "default";
  const backgroundColor = accent ? "#030712" : "#f9fafb";
  const content = (
    <>
      <Heading
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily: TeamCardsDetails_fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
        }}
        as="h3"
      >
        {name}
      </Heading>
      <Text
        style={{
          color: accent ? "#d1d5db" : "#4b5563",
          fontFamily: TeamCardsDetails_fontFamily,
          fontSize: "14px",
          lineHeight: "20px",
          margin: 0,
        }}
      >
        {role}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          color: accent ? "#9ca3af" : "#4b5563",
          fontFamily: TeamCardsDetails_fontFamily,
          fontSize: "16px",
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {bio}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        style={{
          fontFamily: TeamCardsDetails_fontFamily,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          margin: 0,
        }}
      >
        <Link
          href={`mailto:${email}`}
          style={{ color: "#4f46e5", textDecoration: "none" }}
        >
          {email}
        </Link>
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <TeamCardsDetails_SocialLinks accent={accent} lastIcon={lastIcon} />
    </>
  );
  if (!boxed) {
    return (
      <>
        <Img
          alt={avatarAlt}
          src={avatarSrc}
          style={{
            borderRadius: "8px",
            maxWidth: "100%",
            verticalAlign: "middle",
          }}
          width="264"
        />
        <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
        {content}
      </>
    );
  }
  return (
    <>
      <Section
        style={{
          backgroundColor,
          borderRadius: "8px 8px 0 0",
        }}
      >
        <Img
          alt={avatarAlt}
          src={avatarSrc}
          style={{
            borderRadius: "8px",
            maxWidth: "100%",
            verticalAlign: "middle",
          }}
          width="264"
        />
      </Section>
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column
              style={{
                backgroundColor,
                borderRadius: "0 0 8px 8px",
                padding: "16px 24px 24px",
              }}
            >
              {content}
            </Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

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
  return (
    <>
      <style>{TeamCardsDetails_responsiveStyles}</style>
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
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    <Column
                      className="team-details-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCardsDetails_DetailsCard
                        accent={accent}
                        avatarAlt={avatarAlt1}
                        avatarSrc={avatarSrc1}
                        bio={bio1}
                        email={email1}
                        lastIcon="linkedin"
                        name={name1}
                        role={role1}
                        variant={variant}
                      />
                    </Column>
                    <Column
                      className="team-details-stack team-details-gap"
                      style={{ lineHeight: 0, width: "24px" }}
                    >
                      &zwj;
                    </Column>
                    <Column
                      className="team-details-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCardsDetails_DetailsCard
                        accent={accent}
                        avatarAlt={avatarAlt2}
                        avatarSrc={avatarSrc2}
                        bio={bio2}
                        email={email2}
                        lastIcon="instagram"
                        name={name2}
                        role={role2}
                        variant={variant}
                      />
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

const TeamCardsDetails_TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  ...props
}: TeamCardsDetails_TwoColumnTeamCardsWithDetailsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Meet the team</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TeamCardsDetails_TwoColumnTeamCardsWithDetailsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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

const TeamCards_fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const TeamCards_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .team-stack { display: block !important; width: 100% !important; }
      .team-gap { line-height: 24px !important; }
      .team-round-image { max-width: 144px !important; }
    }
  `;

const TeamCards_socialIcons = {
  dark: {
    facebook:
      "https://emailcn.vercel.app/api/email-assets/icon-facebook-dark.png",
    instagram:
      "https://emailcn.vercel.app/api/email-assets/icon-instagram-dark.png",
    linkedin:
      "https://emailcn.vercel.app/api/email-assets/icon-linkedin-dark.png",
    x: "https://emailcn.vercel.app/api/email-assets/icon-x-dark.png",
  },
  light: {
    facebook:
      "https://emailcn.vercel.app/api/email-assets/icon-facebook-light.png",
    instagram:
      "https://emailcn.vercel.app/api/email-assets/icon-instagram-light.png",
    linkedin:
      "https://emailcn.vercel.app/api/email-assets/icon-linkedin-light.png",
    x: "https://emailcn.vercel.app/api/email-assets/icon-x-light.png",
  },
};

const TeamCards_SocialLinks = ({
  accent,
  lastIcon,
}: {
  accent: boolean;
  lastIcon: "instagram" | "linkedin";
}) => {
  const icons = accent
    ? TeamCards_socialIcons.light
    : TeamCards_socialIcons.dark;
  const links = ["facebook", "x", lastIcon] as const;
  return (
    <Section align={lastIcon === "linkedin" ? undefined : undefined}>
      <Fragment>
        <Row>
          {links.map((icon, index) => (
            <Fragment key={icon}>
              {index > 0 ? (
                <Column style={{ width: "16px" }}>&zwj;</Column>
              ) : null}
              <Column style={{ width: "16px" }}>
                <Link href={`https://${icon === "x" ? "x" : icon}.com`}>
                  <Img alt="" src={icons[icon]} width="16" />
                </Link>
              </Column>
            </Fragment>
          ))}
        </Row>
      </Fragment>
    </Section>
  );
};

interface TeamCards_TeamCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TeamCards_TwoColumnTeamCardsVariant;
}

const TeamCards_TeamCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  lastIcon,
  name,
  role,
  variant,
}: TeamCards_TeamCardProps) => {
  const rounded = variant === "rounded" || variant === "rounded-accent";
  const boxed = variant !== "default";
  const alt = variant === "boxed-alt" || variant === "accent-alt";
  const cardBackground = accent ? "#030712" : "#f9fafb";
  const content = (
    <>
      <Heading
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily: TeamCards_fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
          textAlign: rounded ? "center" : "left",
        }}
        as="h3"
      >
        {name}
      </Heading>
      <Text
        style={{
          color: accent ? "#d1d5db" : "#4b5563",
          fontFamily: TeamCards_fontFamily,
          fontSize: "14px",
          lineHeight: "20px",
          margin: 0,
          textAlign: rounded ? "center" : "left",
        }}
      >
        {role}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Section align={rounded ? "center" : undefined}>
        <Fragment>
          <Row>
            <Column>
              <TeamCards_SocialLinks accent={accent} lastIcon={lastIcon} />
            </Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
  if (rounded) {
    return (
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column
              style={{
                backgroundColor: cardBackground,
                borderRadius: "8px",
                padding: "16px 24px 24px",
              }}
            >
              <Section style={{ textAlign: "center" }}>
                <Img
                  alt={avatarAlt}
                  className="team-round-image"
                  src={avatarSrc}
                  style={{
                    borderRadius: "9999px",
                    maxWidth: "100%",
                    verticalAlign: "middle",
                  }}
                  width="188"
                />
              </Section>
              <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
              {content}
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  if (boxed) {
    return (
      <>
        <Section
          style={{
            backgroundColor: cardBackground,
            borderRadius: "8px 8px 0 0",
          }}
        >
          <Img
            alt={avatarAlt}
            src={avatarSrc}
            style={{
              borderRadius: alt ? "8px 8px 0 0" : "8px",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
            width="264"
          />
        </Section>
        <Section style={{ width: "100%" }}>
          <Fragment>
            <Row>
              <Column
                style={{
                  backgroundColor: cardBackground,
                  borderRadius: "0 0 8px 8px",
                  padding: "16px 24px 24px",
                }}
              >
                {content}
              </Column>
            </Row>
          </Fragment>
        </Section>
      </>
    );
  }
  return (
    <>
      <Img
        alt={avatarAlt}
        src={avatarSrc}
        style={{
          borderRadius: "8px",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
        width="264"
      />
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      {content}
    </>
  );
};

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
  return (
    <>
      <style>{TeamCards_responsiveStyles}</style>
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
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    <Column
                      className="team-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCards_TeamCard
                        accent={accent}
                        avatarAlt={avatarAlt1}
                        avatarSrc={
                          avatarSrc1 ??
                          `https://emailcn.vercel.app/api/email-assets/teams/member-1-${rounded ? "md" : "lg"}.jpg`
                        }
                        lastIcon="linkedin"
                        name={name1}
                        role={role1}
                        variant={variant}
                      />
                    </Column>
                    <Column
                      className="team-stack team-gap"
                      style={{ lineHeight: 0, width: "24px" }}
                    >
                      &zwj;
                    </Column>
                    <Column
                      className="team-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCards_TeamCard
                        accent={accent}
                        avatarAlt={avatarAlt2}
                        avatarSrc={
                          avatarSrc2 ??
                          `https://emailcn.vercel.app/api/email-assets/teams/member-2-${rounded ? "md" : "lg"}.jpg`
                        }
                        lastIcon="instagram"
                        name={name2}
                        role={role2}
                        variant={variant}
                      />
                    </Column>
                  </Row>
                </Fragment>
              </Section>
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

const TeamCards_TwoColumnTeamCards = ({
  theme = defaultTheme,
  ...props
}: TeamCards_TwoColumnTeamCardsProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Meet the team</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TeamCards_TwoColumnTeamCardsSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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

const TeamCompact_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .compact-team-stack { display: block !important; width: 100% !important; }
      .compact-team-gap { line-height: 24px !important; }
    }
  `;

const TeamCompact_SocialLinks = ({
  lastIcon,
}: {
  lastIcon: "instagram" | "linkedin";
}) => {
  const icons = ["facebook", "x", lastIcon] as const;
  return (
    <Section>
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
                    src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}-dark.png`}
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

interface TeamCompact_CompactCardProps {
  avatarAlt: string;
  avatarSrc: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TeamCompact_TwoColumnsCompactVariant;
}

const TeamCompact_CompactCard = ({
  avatarAlt,
  avatarSrc,
  lastIcon,
  name,
  role,
  variant,
}: TeamCompact_CompactCardProps) => {
  const boxed = variant === "bordered" || variant === "accent";
  const accent = variant === "accent";
  const member = (
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column style={{ verticalAlign: "top", width: "64px" }}>
            <Img
              alt={avatarAlt}
              src={avatarSrc}
              style={{
                borderRadius: "9999px",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width="64"
            />
          </Column>
          <Column style={{ width: boxed ? "16px" : "24px" }}>&zwj;</Column>
          <Column>
            <Heading
              style={{
                color: accent ? "#fffffe" : "#030712",
                fontFamily: TeamCompact_fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                margin: 0,
              }}
              as="h3"
            >
              {name}
            </Heading>
            <Text
              style={{
                color: accent ? "#d1d5db" : "#4b5563",
                fontFamily: TeamCompact_fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
                margin: 0,
              }}
            >
              {role}
            </Text>
            {boxed ? null : (
              <>
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                <TeamCompact_SocialLinks lastIcon={lastIcon} />
              </>
            )}
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
  if (boxed) {
    return (
      <Section style={{ width: "100%" }}>
        <Fragment>
          <Row>
            <Column
              style={{
                backgroundColor: accent ? "#030712" : undefined,
                border: accent ? undefined : "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              {member}
            </Column>
          </Row>
        </Fragment>
      </Section>
    );
  }
  return (
    <>
      {variant === "border-top" ? (
        <>
          <Section
            style={{
              backgroundColor: "#030712",
              height: "2px",
              lineHeight: "1px",
            }}
          >
            &zwj;
          </Section>
          <Section style={{ lineHeight: "14px" }}>&zwj;</Section>
        </>
      ) : null}
      {member}
    </>
  );
};

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
}: Omit<TeamCompact_TwoColumnsCompactProps, "theme">) => (
  <>
    <style>{TeamCompact_responsiveStyles}</style>
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
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  <Column
                    className="compact-team-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    <TeamCompact_CompactCard
                      avatarAlt={avatarAlt1}
                      avatarSrc={avatarSrc1}
                      lastIcon="linkedin"
                      name={name1}
                      role={role1}
                      variant={variant}
                    />
                  </Column>
                  <Column
                    className="compact-team-stack compact-team-gap"
                    style={{ lineHeight: 0, width: "24px" }}
                  >
                    &zwj;
                  </Column>
                  <Column
                    className="compact-team-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    <TeamCompact_CompactCard
                      avatarAlt={avatarAlt2}
                      avatarSrc={avatarSrc2}
                      lastIcon="instagram"
                      name={name2}
                      role={role2}
                      variant={variant}
                    />
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
  </>
);

const TeamCompact_TwoColumnsCompact = ({
  theme = defaultTheme,
  ...props
}: TeamCompact_TwoColumnsCompactProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Meet the team</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TeamCompact_TwoColumnsCompactSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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

const TeamGrid_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .team-grid-cell { display: inline-block !important; width: 50% !important; margin-bottom: 24px !important; }
      .team-grid-gap { display: none !important; }
      .team-grid-card-pad { padding-left: 12px !important; padding-right: 12px !important; }
    }
  `;

type TeamGrid_SocialIcon =
  | "facebook"
  | "github"
  | "instagram"
  | "linkedin"
  | "x";

interface TeamGrid_Member {
  alt: string;
  image: string;
  name: string;
  role: string;
  social: TeamGrid_SocialIcon[];
}

const TeamGrid_SocialLinks = ({
  accent,
  icons,
}: {
  accent: boolean;
  icons: TeamGrid_SocialIcon[];
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

const TeamGrid_MemberCard = ({
  featured,
  member,
  variant,
}: {
  featured: boolean;
  member: TeamGrid_Member;
  variant: TeamGrid_ThreeColumnsTeamGridVariant;
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
                fontFamily: TeamGrid_fontFamily,
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
                fontFamily: TeamGrid_fontFamily,
                fontSize: "14px",
                lineHeight: "20px",
                margin: 0,
              }}
            >
              {member.role}
            </Text>
            <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
            <TeamGrid_SocialLinks
              accent={accent}
              icons={accent ? ["instagram", "x", "linkedin"] : member.social}
            />
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

const TeamGrid_GridRows = ({
  members,
  variant,
}: {
  members: TeamGrid_Member[];
  variant: TeamGrid_ThreeColumnsTeamGridVariant;
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
                      <TeamGrid_MemberCard
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
    variant: "default" as TeamGrid_ThreeColumnsTeamGridVariant,
    ...props,
  };
  const members: TeamGrid_Member[] = [
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
      <style>{TeamGrid_responsiveStyles}</style>
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
                        fontFamily: TeamGrid_fontFamily,
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
                        fontFamily: TeamGrid_fontFamily,
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
                        fontFamily: TeamGrid_fontFamily,
                        fontSize: "14px",
                        lineHeight: "20px",
                        margin: 0,
                        textAlign: "center",
                      }}
                    >
                      {role1}
                    </Text>
                    <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                    <TeamGrid_SocialLinks accent icons={["x", "linkedin"]} />
                  </Section>
                  <Heading
                    style={{
                      color: "#030712",
                      fontFamily: TeamGrid_fontFamily,
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
              <TeamGrid_GridRows
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

const TeamGrid_ThreeColumnsTeamGrid = ({
  theme = defaultTheme,
  ...props
}: TeamGrid_ThreeColumnsTeamGridProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Meet the team</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TeamGrid_ThreeColumnsTeamGridSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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

const TeamBios_responsiveStyles = `
    @media only screen and (max-width: 599px) {
      .horizontal-team-stack { display: block !important; width: 100% !important; }
      .horizontal-team-gap { line-height: 24px !important; }
      .horizontal-team-image { max-width: 144px !important; }
      .horizontal-team-center { text-align: center !important; }
      .horizontal-team-social { margin-left: auto !important; margin-right: auto !important; }
    }
  `;

const TeamBios_SocialLinks = ({
  accent,
  lastIcon,
}: {
  accent: boolean;
  lastIcon: "instagram" | "linkedin";
}) => {
  const suffix = accent ? "light" : "dark";
  const icons = ["facebook", "x", lastIcon] as const;
  return (
    <Section className="horizontal-team-social">
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

const TeamBios_GapCell = () => (
  <Column
    className="horizontal-team-stack horizontal-team-gap"
    style={{ lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </Column>
);

interface TeamBios_HorizontalCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio: string;
  imageLeft: boolean;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
}

const TeamBios_HorizontalCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  imageLeft,
  lastIcon,
  name,
  role,
}: TeamBios_HorizontalCardProps) => {
  const ImageCell = () => (
    <Column
      className="horizontal-team-stack"
      style={{ textAlign: "center", verticalAlign: "top", width: "164px" }}
    >
      <Img
        alt={avatarAlt}
        className="horizontal-team-image"
        src={avatarSrc}
        style={{
          borderRadius: "9999px",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
        width="164"
      />
    </Column>
  );
  const ContentCell = () => (
    <Column
      className="horizontal-team-stack"
      style={{
        padding: imageLeft ? "12px 0" : 0,
        verticalAlign: "top",
      }}
    >
      <Heading
        className="horizontal-team-center"
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily: TeamBios_fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
        }}
        as="h3"
      >
        {name}
      </Heading>
      <Text
        className="horizontal-team-center"
        style={{
          color: accent ? "#d1d5db" : "#4b5563",
          fontFamily: TeamBios_fontFamily,
          fontSize: "14px",
          lineHeight: "20px",
          margin: 0,
        }}
      >
        {role}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <Text
        className="horizontal-team-center"
        style={{
          color: accent ? "#9ca3af" : "#4b5563",
          fontFamily: TeamBios_fontFamily,
          fontSize: "16px",
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {bio}
      </Text>
      <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
      <TeamBios_SocialLinks accent={accent} lastIcon={lastIcon} />
    </Column>
  );
  return (
    <Section style={{ width: "100%" }}>
      <Fragment>
        <Row>
          <Column
            style={{
              backgroundColor: accent ? "#030712" : "#f9fafb",
              borderRadius: "8px",
              padding: "24px",
            }}
          >
            <Section style={{ width: "100%" }}>
              <Fragment>
                <Row>
                  {imageLeft ? (
                    <>
                      <ImageCell />
                      <TeamBios_GapCell />
                      <ContentCell />
                    </>
                  ) : (
                    <>
                      <ContentCell />
                      <TeamBios_GapCell />
                      <ImageCell />
                    </>
                  )}
                </Row>
              </Fragment>
            </Section>
          </Column>
        </Row>
      </Fragment>
    </Section>
  );
};

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
  return (
    <>
      <style>{TeamBios_responsiveStyles}</style>
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
              <TeamBios_HorizontalCard
                accent={accent}
                avatarAlt={avatarAlt1}
                avatarSrc={avatarSrc1}
                bio={bio1}
                imageLeft={imageLeft}
                lastIcon="linkedin"
                name={name1}
                role={role1}
              />
              <Section style={{ lineHeight: "24px" }}>&zwj;</Section>
              <TeamBios_HorizontalCard
                accent={accent}
                avatarAlt={avatarAlt2}
                avatarSrc={avatarSrc2}
                bio={bio2}
                imageLeft={imageLeft}
                lastIcon="instagram"
                name={name2}
                role={role2}
              />
            </Column>
            <Column>&zwj;</Column>
          </Row>
        </Fragment>
      </Section>
    </>
  );
};

const TeamBios_HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  ...props
}: TeamBios_HorizontalTeamMemberBiosProps) => (
  <Html>
    <EmailHead>
      <DefaultFonts />
    </EmailHead>
    <Preview>Meet the team</Preview>
    <EmailTailwind theme={theme}>
      <Body className="m-0">
        <TeamBios_HorizontalTeamMemberBiosSection {...props} />
      </Body>
    </EmailTailwind>
  </Html>
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
