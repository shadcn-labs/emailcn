import { Body, Head, Html, Preview } from "jsx-email";
/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

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

const responsiveStyles = `
  @media only screen and (max-width: 599px) {
    .compact-team-stack { display: block !important; width: 100% !important; }
    .compact-team-gap { line-height: 24px !important; }
  }
`;

const SocialLinks = ({ lastIcon }: { lastIcon: "instagram" | "linkedin" }) => {
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
                    src={`https://assets.mailviews.com/images/components/icon-${icon}-dark.png`}
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

interface CompactCardProps {
  avatarAlt: string;
  avatarSrc: string;
  lastIcon: "instagram" | "linkedin";
  name: string;
  role: string;
  variant: TwoColumnsCompactVariant;
}

const CompactCard = ({
  avatarAlt,
  avatarSrc,
  lastIcon,
  name,
  role,
  variant,
}: CompactCardProps) => {
  const boxed = variant === "bordered" || variant === "accent";
  const accent = variant === "accent";
  const member = (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ width: "100%" }}
    >
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top", width: "64px" }}>
            <img
              alt={avatarAlt}
              src={avatarSrc}
              style={{
                borderRadius: "9999px",
                maxWidth: "100%",
                verticalAlign: "middle",
              }}
              width="64"
            />
          </td>
          <td style={{ width: boxed ? "16px" : "24px" }}>&zwj;</td>
          <td>
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
            {boxed ? null : (
              <>
                <div style={{ lineHeight: "16px" }}>&zwj;</div>
                <SocialLinks lastIcon={lastIcon} />
              </>
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );

  if (boxed) {
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
                backgroundColor: accent ? "#030712" : undefined,
                border: accent ? undefined : "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "16px",
              }}
            >
              {member}
            </td>
          </tr>
        </tbody>
      </table>
    );
  }

  return (
    <>
      {variant === "border-top" ? (
        <>
          <div
            style={{
              backgroundColor: "#030712",
              height: "2px",
              lineHeight: "1px",
            }}
          >
            &zwj;
          </div>
          <div style={{ lineHeight: "14px" }}>&zwj;</div>
        </>
      ) : null}
      {member}
    </>
  );
};

export const TwoColumnsCompactSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://assets.mailviews.com/images/components/teams/member-1-md.jpg",
  avatarSrc2 = "https://assets.mailviews.com/images/components/teams/member-2-md.jpg",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TwoColumnsCompactProps, "theme">) => (
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
                    className="compact-team-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    <CompactCard
                      avatarAlt={avatarAlt1}
                      avatarSrc={avatarSrc1}
                      lastIcon="linkedin"
                      name={name1}
                      role={role1}
                      variant={variant}
                    />
                  </td>
                  <td
                    className="compact-team-stack compact-team-gap"
                    style={{ lineHeight: 0, width: "24px" }}
                  >
                    &zwj;
                  </td>
                  <td
                    className="compact-team-stack"
                    style={{ verticalAlign: "top", width: "264px" }}
                  >
                    <CompactCard
                      avatarAlt={avatarAlt2}
                      avatarSrc={avatarSrc2}
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

export const TwoColumnsCompact = ({
  theme: _theme = defaultTheme,
  ...props
}: TwoColumnsCompactProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Meet the team</Preview>
    <Body style={{ margin: 0 }}>
      <TwoColumnsCompactSection {...props} />
    </Body>
  </Html>
);

TwoColumnsCompact.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsCompactProps;
