/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Body, Head, Html, Preview, Tailwind } from "react-email";
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
      "https://assets.mailviews.com/images/components/icon-facebook-dark.png",
    instagram:
      "https://assets.mailviews.com/images/components/icon-instagram-dark.png",
    linkedin:
      "https://assets.mailviews.com/images/components/icon-linkedin-dark.png",
    x: "https://assets.mailviews.com/images/components/icon-x-dark.png",
  },
  light: {
    facebook:
      "https://assets.mailviews.com/images/components/icon-facebook-light.png",
    instagram:
      "https://assets.mailviews.com/images/components/icon-instagram-light.png",
    linkedin:
      "https://assets.mailviews.com/images/components/icon-linkedin-light.png",
    x: "https://assets.mailviews.com/images/components/icon-x-light.png",
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
    <table
      align={lastIcon === "linkedin" ? undefined : undefined}
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
    >
      <tbody>
        <tr>
          {links.map((icon, index) => (
            <Fragment key={icon}>
              {index > 0 ? <td style={{ width: "16px" }}>&zwj;</td> : null}
              <td style={{ width: "16px" }}>
                <a href={`https://${icon === "x" ? "x" : icon}.com`}>
                  <img alt="" src={icons[icon]} width="16" />
                </a>
              </td>
            </Fragment>
          ))}
        </tr>
      </tbody>
    </table>
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
      <h3
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
          textAlign: rounded ? "center" : "left",
        }}
      >
        {name}
      </h3>
      <p
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
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <table
        align={rounded ? "center" : undefined}
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
      >
        <tbody>
          <tr>
            <td>
              <SocialLinks accent={accent} lastIcon={lastIcon} />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );

  if (rounded) {
    return (
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ width: "100%" }}
      >
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: cardBackground,
                borderRadius: "8px",
                padding: "16px 24px 24px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <img
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
              </div>
              <div style={{ lineHeight: "16px" }}>&zwj;</div>
              {content}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  if (boxed) {
    return (
      <>
        <div
          style={{
            backgroundColor: cardBackground,
            borderRadius: "8px 8px 0 0",
          }}
        >
          <img
            alt={avatarAlt}
            src={avatarSrc}
            style={{
              borderRadius: alt ? "8px 8px 0 0" : "8px",
              maxWidth: "100%",
              verticalAlign: "middle",
            }}
            width="264"
          />
        </div>
        <table
          border={0}
          cellPadding={0}
          cellSpacing={0}
          role="presentation"
          style={{ width: "100%" }}
        >
          <tbody>
            <tr>
              <td
                style={{
                  backgroundColor: cardBackground,
                  borderRadius: "0 0 8px 8px",
                  padding: "16px 24px 24px",
                }}
              >
                {content}
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  }

  return (
    <>
      <img
        alt={avatarAlt}
        src={avatarSrc}
        style={{
          borderRadius: "8px",
          maxWidth: "100%",
          verticalAlign: "middle",
        }}
        width="264"
      />
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
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
      <table
        border={0}
        cellPadding={0}
        cellSpacing={0}
        role="presentation"
        style={{ backgroundColor: "#f1f5f9", width: "100%" }}
      >
        <tbody>
          <tr>
            <td>&zwj;</td>
            <td
              style={{
                backgroundColor: "#fffffe",
                maxWidth: "100%",
                padding: "44px 24px",
                width: "600px",
              }}
            >
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                role="presentation"
                style={{ width: "100%" }}
              >
                <tbody>
                  <tr>
                    <td
                      className="team-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCard
                        accent={accent}
                        avatarAlt={avatarAlt1}
                        avatarSrc={
                          avatarSrc1 ??
                          `https://assets.mailviews.com/images/components/teams/member-1-${rounded ? "md" : "lg"}.jpg`
                        }
                        lastIcon="linkedin"
                        name={name1}
                        role={role1}
                        variant={variant}
                      />
                    </td>
                    <td
                      className="team-stack team-gap"
                      style={{ lineHeight: 0, width: "24px" }}
                    >
                      &zwj;
                    </td>
                    <td
                      className="team-stack"
                      style={{ verticalAlign: "top", width: "264px" }}
                    >
                      <TeamCard
                        accent={accent}
                        avatarAlt={avatarAlt2}
                        avatarSrc={
                          avatarSrc2 ??
                          `https://assets.mailviews.com/images/components/teams/member-2-${rounded ? "md" : "lg"}.jpg`
                        }
                        lastIcon="instagram"
                        name={name2}
                        role={role2}
                        variant={variant}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>&zwj;</td>
          </tr>
        </tbody>
      </table>
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
