import { Fragment } from "react";
import {
  Body,
  Head,
  Html,
  Preview,
  Tailwind,
  Section,
  Row,
  Column,
  Link,
  Heading,
  Text,
  Img,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type TwoColumnTeamCardsWithDetailsVariant =
  | "default"
  | "boxed"
  | "accent";

export interface TwoColumnTeamCardsWithDetailsProps {
  theme?: TailwindConfig;
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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .team-details-stack { display: block !important; width: 100% !important; }
    .team-details-gap { line-height: 24px !important; }
  }
`;

const SocialLinks = ({
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

interface DetailsCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio: string;
  email: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TwoColumnTeamCardsWithDetailsVariant;
}

const DetailsCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  email,
  lastIcon,
  name,
  role,
  variant,
}: DetailsCardProps) => {
  const boxed = variant !== "default";
  const backgroundColor = accent ? "#030712" : "#f9fafb";
  const content = (
    <>
      <Heading
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily,
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
          fontFamily,
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
          fontFamily,
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
          fontFamily,
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
      <SocialLinks accent={accent} lastIcon={lastIcon} />
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
              <Section style={{ width: "100%" }}>
                <Fragment>
                  <Row>
                    <Column
                      className="team-details-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <DetailsCard
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
                      <DetailsCard
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

export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  ...props
}: TwoColumnTeamCardsWithDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Meet the team</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnTeamCardsWithDetailsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnTeamCardsWithDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsWithDetailsProps;
