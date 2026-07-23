import {
  Mjml,
  MjmlBody,
  MjmlFont,
  MjmlHead,
  MjmlPreview,
  MjmlRaw,
  MjmlStyle,
  MjmlWrapper,
} from "@faire/mjml-react";
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

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
    <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
      <tbody>
        <tr>
          {icons.map((icon, index) => (
            <Fragment key={icon}>
              {index > 0 ? <td style={{ width: "16px" }}>&zwj;</td> : null}
              <td style={{ width: "16px" }}>
                <a href={`https://${icon === "x" ? "x" : icon}.com`}>
                  <img
                    alt=""
                    src={`https://assets.mailviews.com/images/components/icon-${icon}-${suffix}.png`}
                    width="16"
                  />
                </a>
              </td>
            </Fragment>
          ))}
        </tr>
      </tbody>
    </table>
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
      <h3
        style={{
          color: accent ? "#fffffe" : "#030712",
          fontFamily,
          fontSize: "16px",
          fontWeight: 600,
          lineHeight: "24px",
          margin: 0,
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
        }}
      >
        {role}
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <p
        style={{
          color: accent ? "#9ca3af" : "#4b5563",
          fontFamily,
          fontSize: "16px",
          lineHeight: "24px",
          margin: 0,
        }}
      >
        {bio}
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <p
        style={{
          fontFamily,
          fontSize: "14px",
          fontWeight: 500,
          lineHeight: "20px",
          margin: 0,
        }}
      >
        <a
          href={`mailto:${email}`}
          style={{ color: "#4f46e5", textDecoration: "none" }}
        >
          {email}
        </a>
      </p>
      <div style={{ lineHeight: "16px" }}>&zwj;</div>
      <SocialLinks accent={accent} lastIcon={lastIcon} />
    </>
  );

  if (!boxed) {
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
  }

  return (
    <>
      <div
        style={{
          backgroundColor,
          borderRadius: "8px 8px 0 0",
        }}
      >
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
                backgroundColor,
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
};

export const TwoColumnTeamCardsWithDetailsSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://assets.mailviews.com/images/components/teams/member-1-lg.jpg",
  avatarSrc2 = "https://assets.mailviews.com/images/components/teams/member-2-lg.jpg",
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
                    </td>
                    <td
                      className="team-details-stack team-details-gap"
                      style={{ lineHeight: 0, width: "24px" }}
                    >
                      &zwj;
                    </td>
                    <td
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

export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  ...props
}: TwoColumnTeamCardsWithDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Meet the team</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <TwoColumnTeamCardsWithDetailsSection {...props} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

TwoColumnTeamCardsWithDetails.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsWithDetailsProps;
