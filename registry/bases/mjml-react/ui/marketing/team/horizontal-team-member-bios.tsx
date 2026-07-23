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

export type HorizontalTeamMemberBiosVariant =
  | "image-left"
  | "image-right"
  | "image-left-accent"
  | "image-right-accent";

export interface HorizontalTeamMemberBiosProps {
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
  variant?: HorizontalTeamMemberBiosVariant;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .horizontal-team-stack { display: block !important; width: 100% !important; }
    .horizontal-team-gap { line-height: 24px !important; }
    .horizontal-team-image { max-width: 144px !important; }
    .horizontal-team-center { text-align: center !important; }
    .horizontal-team-social { margin-left: auto !important; margin-right: auto !important; }
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
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      className="horizontal-team-social"
      role="presentation"
    >
      <tbody>
        <tr>
          {icons.map((icon, index) => (
            <Fragment key={icon}>
              {index > 0 ? <td style={{ width: "16px" }}>&zwj;</td> : null}
              <td style={{ width: "16px" }}>
                <a href={`https://${icon === "x" ? "x" : icon}.com`}>
                  <img
                    alt=""
                    src={`https://emailcn.vercel.app/api/email-assets/icon-${icon}-${suffix}.png`}
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

const GapCell = () => (
  <td
    className="horizontal-team-stack horizontal-team-gap"
    style={{ lineHeight: 0, width: "24px" }}
  >
    &zwj;
  </td>
);

interface HorizontalCardProps {
  accent: boolean;
  avatarAlt: string;
  avatarSrc: string;
  bio: string;
  imageLeft: boolean;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
}

const HorizontalCard = ({
  accent,
  avatarAlt,
  avatarSrc,
  bio,
  imageLeft,
  lastIcon,
  name,
  role,
}: HorizontalCardProps) => {
  const ImageCell = () => (
    <td
      className="horizontal-team-stack"
      style={{ textAlign: "center", verticalAlign: "top", width: "164px" }}
    >
      <img
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
    </td>
  );
  const ContentCell = () => (
    <td
      className="horizontal-team-stack"
      style={{
        padding: imageLeft ? "12px 0" : 0,
        verticalAlign: "top",
      }}
    >
      <h3
        className="horizontal-team-center"
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
        className="horizontal-team-center"
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
        className="horizontal-team-center"
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
      <SocialLinks accent={accent} lastIcon={lastIcon} />
    </td>
  );

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
              backgroundColor: accent ? "#030712" : "#f9fafb",
              borderRadius: "8px",
              padding: "24px",
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
                  {imageLeft ? (
                    <>
                      <ImageCell />
                      <GapCell />
                      <ContentCell />
                    </>
                  ) : (
                    <>
                      <ContentCell />
                      <GapCell />
                      <ImageCell />
                    </>
                  )}
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export const HorizontalTeamMemberBiosSection = ({
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
}: Omit<HorizontalTeamMemberBiosProps, "theme">) => {
  const imageLeft = variant === "image-left" || variant === "image-left-accent";
  const accent = variant.endsWith("-accent");
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
              <HorizontalCard
                accent={accent}
                avatarAlt={avatarAlt1}
                avatarSrc={avatarSrc1}
                bio={bio1}
                imageLeft={imageLeft}
                lastIcon="linkedin"
                name={name1}
                role={role1}
              />
              <div style={{ lineHeight: "24px" }}>&zwj;</div>
              <HorizontalCard
                accent={accent}
                avatarAlt={avatarAlt2}
                avatarSrc={avatarSrc2}
                bio={bio2}
                imageLeft={imageLeft}
                lastIcon="instagram"
                name={name2}
                role={role2}
              />
            </td>
            <td>&zwj;</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export const HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  ...props
}: HorizontalTeamMemberBiosProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>Meet the team</MjmlPreview>
      <MjmlFont href="https://rsms.me/inter/inter.css" name="Inter" />
      <MjmlStyle>{responsiveStyles}</MjmlStyle>
    </MjmlHead>
    <MjmlBody backgroundColor="#f1f5f9" width={theme.containerWidth}>
      <MjmlWrapper padding="0">
        <MjmlRaw>
          <HorizontalTeamMemberBiosSection {...props} />
        </MjmlRaw>
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

HorizontalTeamMemberBios.PreviewProps = {
  theme: defaultTheme,
  variant: "image-left",
} satisfies HorizontalTeamMemberBiosProps;
