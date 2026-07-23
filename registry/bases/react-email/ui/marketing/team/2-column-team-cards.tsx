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

export type TwoColumnTeamCardsVariant =
  | "default"
  | "boxed"
  | "accent"
  | "boxed-alt"
  | "accent-alt"
  | "rounded"
  | "rounded-accent";

export interface TwoColumnTeamCardsProps {
  theme?: TailwindConfig;
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

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .team-stack { display: block !important; width: 100% !important; }
    .team-gap { line-height: 24px !important; }
    .team-round-image { max-width: 144px !important; }
  }
`;

const socialIcons = {
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

const SocialLinks = ({
  accent,
  lastIcon,
}: {
  accent: boolean;
  lastIcon: "instagram" | "linkedin";
}) => {
  const icons = accent ? socialIcons.light : socialIcons.dark;
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

interface TeamCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TwoColumnTeamCardsVariant;
}

const TeamCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  lastIcon,
  name,
  role,
  variant,
}: TeamCardProps) => {
  const rounded = variant === "rounded" || variant === "rounded-accent";
  const boxed = variant !== "default";
  const alt = variant === "boxed-alt" || variant === "accent-alt";
  const cardBackground = accent ? "#030712" : "#f9fafb";
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
          textAlign: rounded ? "center" : "left",
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
              <SocialLinks accent={accent} lastIcon={lastIcon} />
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
                      className="team-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCard
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
                      <TeamCard
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

export const TwoColumnTeamCards = ({
  theme = defaultTheme,
  ...props
}: TwoColumnTeamCardsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Meet the team</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnTeamCardsSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnTeamCards.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsProps;
