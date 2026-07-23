/* eslint-disable next/no-img-element */
import { Body, Head, Html, Preview } from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type HeaderWithUserDetailsAlignment = "left" | "right";
export type HeaderWithUserDetailsAvatar = "initials" | "image";

export interface HeaderWithUserDetailsProps {
  theme?: TailwindConfig;
  logoSrc?: string;
  logoAlt?: string;
  logoHref?: string;
  userName?: string;
  userEmail?: string;
  initials?: string;
  avatarSrc?: string;
  avatarAlt?: string;
  avatar?: HeaderWithUserDetailsAvatar;
  alignment?: HeaderWithUserDetailsAlignment;
  pageBackgroundColor?: string;
  backgroundColor?: string;
  avatarBackgroundColor?: string;
  headingColor?: string;
  textColor?: string;
  mutedTextColor?: string;
}

const fontFamily =
  'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';

const sharedDefaults = {
  avatarAlt: "",
  avatarBackgroundColor: "#f3f4f6",
  backgroundColor: "#fffffe",
  headingColor: "#030712",
  initials: "JD",
  logoAlt: "Maizzle",
  logoHref: "https://example.com",
  logoSrc: "https://emailcn.vercel.app/api/email-assets/maizzle-insignia.png",
  mutedTextColor: "#6b7280",
  pageBackgroundColor: "#f1f5f9",
  textColor: "#4b5563",
};

type SectionProps = Omit<HeaderWithUserDetailsProps, "theme">;
type ResolvedProps = typeof sharedDefaults &
  SectionProps & {
    avatarSrc: string;
    userEmail: string;
    userName: string;
  };

const Logo = ({ props }: { props: ResolvedProps }) => (
  <a href={props.logoHref}>
    <img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={55}
    />
  </a>
);

const Avatar = ({
  avatar,
  props,
}: {
  avatar: HeaderWithUserDetailsAvatar;
  props: ResolvedProps;
}) =>
  avatar === "image" ? (
    <img
      alt={props.avatarAlt}
      src={props.avatarSrc}
      style={{ borderRadius: "9999px", verticalAlign: "middle" }}
      width={32}
    />
  ) : (
    <table border={0} cellPadding={0} cellSpacing={0} role="presentation">
      <tbody>
        <tr>
          <td
            style={{
              backgroundColor: props.avatarBackgroundColor,
              borderRadius: "9999px",
              height: "32px",
              textAlign: "center",
              width: "32px",
            }}
          >
            <span
              style={{
                color: props.headingColor,
                fontFamily,
                fontSize: "10px",
                fontWeight: 600,
                lineHeight: "32px",
              }}
            >
              {props.initials}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  );

const Details = ({
  alignRight = false,
  avatar,
  props,
}: {
  alignRight?: boolean;
  avatar: HeaderWithUserDetailsAvatar;
  props: ResolvedProps;
}) => (
  <table
    align={alignRight ? "right" : undefined}
    border={0}
    cellPadding={0}
    cellSpacing={0}
    role="presentation"
    style={alignRight ? { marginLeft: "auto" } : undefined}
  >
    <tbody>
      <tr>
        <td>
          <Avatar avatar={avatar} props={props} />
        </td>
        <td style={{ width: "12px" }}>&zwj;</td>
        <td>
          <p
            style={{
              color: props.textColor,
              fontFamily,
              fontSize: "12px",
              fontWeight: 500,
              lineHeight: "16px",
              margin: 0,
            }}
          >
            {props.userName}
          </p>
          <p
            style={{
              color: props.mutedTextColor,
              fontFamily,
              fontSize: "12px",
              lineHeight: "16px",
              margin: 0,
            }}
          >
            {props.userEmail}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
);

export const HeaderWithUserDetailsSection = (props: SectionProps) => {
  const alignment = props.alignment ?? "left";
  const avatar = props.avatar ?? "initials";
  const imageOnRight = avatar === "image" && alignment === "right";
  let userEmail = "johnadams@gmail.com";
  if (avatar === "image") {
    userEmail = imageOnRight ? "joanne@example.com" : "ajohn@example.com";
  }
  const resolved = {
    ...sharedDefaults,
    avatarSrc: imageOnRight
      ? "https://emailcn.vercel.app/api/email-assets/reviews/avatar.jpg"
      : "https://emailcn.vercel.app/api/email-assets/reviews/avatar-2.jpg",
    userEmail,
    userName: imageOnRight ? "Joanne Smith" : "John Adams",
    ...props,
  } as ResolvedProps;

  return (
    <table
      border={0}
      cellPadding={0}
      cellSpacing={0}
      role="presentation"
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <tbody>
        <tr>
          <td>&zwj;</td>
          <td style={{ maxWidth: "100%", width: "600px" }}>
            <table
              border={0}
              cellPadding={0}
              cellSpacing={0}
              role="presentation"
              width="100%"
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: resolved.backgroundColor,
                      padding: "24px",
                    }}
                  >
                    <table
                      border={0}
                      cellPadding={0}
                      cellSpacing={0}
                      role="presentation"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          {alignment === "left" ? (
                            <>
                              <td style={{ width: "55px" }}>
                                <Logo props={resolved} />
                              </td>
                              <td>
                                <Details
                                  alignRight
                                  avatar={avatar}
                                  props={resolved}
                                />
                              </td>
                            </>
                          ) : (
                            <>
                              <td>
                                <Details avatar={avatar} props={resolved} />
                              </td>
                              <td
                                style={{
                                  textAlign: "right",
                                  width: "55px",
                                }}
                              >
                                <Logo props={resolved} />
                              </td>
                            </>
                          )}
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td>&zwj;</td>
        </tr>
      </tbody>
    </table>
  );
};

export const HeaderWithUserDetails = ({
  alignment = "left",
  avatar = "initials",
  pageBackgroundColor = "#f1f5f9",
  theme: _theme = defaultTheme,
  ...props
}: HeaderWithUserDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>John Adams</Preview>
    <Body
      style={{ backgroundColor: pageBackgroundColor, fontFamily, margin: 0 }}
    >
      <HeaderWithUserDetailsSection
        {...props}
        alignment={alignment}
        avatar={avatar}
        pageBackgroundColor={pageBackgroundColor}
      />
    </Body>
  </Html>
);

HeaderWithUserDetails.PreviewProps = {
  alignment: "left",
  avatar: "initials",
  theme: defaultTheme,
} satisfies HeaderWithUserDetailsProps;
