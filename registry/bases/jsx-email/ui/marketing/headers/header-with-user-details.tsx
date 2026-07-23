import {
  Body,
  Head,
  Html,
  Preview,
  Link,
  Section,
  Row,
  Column,
  Text,
  Img,
} from "jsx-email";
import { Fragment } from "react";

import { DefaultFonts } from "@/registry/bases/jsx-email/fonts/default";
import { defaultTheme } from "@/registry/bases/jsx-email/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/jsx-email/themes/default";

export type HeaderWithUserDetailsAlignment = "left" | "right";
export type HeaderWithUserDetailsAvatar = "initials" | "image";

export interface HeaderWithUserDetailsProps {
  theme?: EmailThemeTokens;
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
  <Link href={props.logoHref}>
    <Img
      alt={props.logoAlt}
      src={props.logoSrc}
      style={{ maxWidth: "100%", verticalAlign: "middle" }}
      width={55}
    />
  </Link>
);

const Avatar = ({
  avatar,
  props,
}: {
  avatar: HeaderWithUserDetailsAvatar;
  props: ResolvedProps;
}) =>
  avatar === "image" ? (
    <Img
      alt={props.avatarAlt}
      src={props.avatarSrc}
      style={{ borderRadius: "9999px", verticalAlign: "middle" }}
      width={32}
    />
  ) : (
    <Section>
      <Fragment>
        <Row>
          <Column
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
          </Column>
        </Row>
      </Fragment>
    </Section>
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
  <Section
    align={alignRight ? "right" : undefined}
    style={alignRight ? { marginLeft: "auto" } : undefined}
  >
    <Fragment>
      <Row>
        <Column>
          <Avatar avatar={avatar} props={props} />
        </Column>
        <Column style={{ width: "12px" }}>&zwj;</Column>
        <Column>
          <Text
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
          </Text>
          <Text
            style={{
              color: props.mutedTextColor,
              fontFamily,
              fontSize: "12px",
              lineHeight: "16px",
              margin: 0,
            }}
          >
            {props.userEmail}
          </Text>
        </Column>
      </Row>
    </Fragment>
  </Section>
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
    <Section
      style={{ backgroundColor: resolved.pageBackgroundColor }}
      width="100%"
    >
      <Fragment>
        <Row>
          <Column>&zwj;</Column>
          <Column style={{ maxWidth: "100%", width: "600px" }}>
            <Section width="100%">
              <Fragment>
                <Row>
                  <Column
                    style={{
                      backgroundColor: resolved.backgroundColor,
                      padding: "24px",
                    }}
                  >
                    <Section width="100%">
                      <Fragment>
                        <Row>
                          {alignment === "left" ? (
                            <>
                              <Column style={{ width: "55px" }}>
                                <Logo props={resolved} />
                              </Column>
                              <Column>
                                <Details
                                  alignRight
                                  avatar={avatar}
                                  props={resolved}
                                />
                              </Column>
                            </>
                          ) : (
                            <>
                              <Column>
                                <Details avatar={avatar} props={resolved} />
                              </Column>
                              <Column
                                style={{
                                  textAlign: "right",
                                  width: "55px",
                                }}
                              >
                                <Logo props={resolved} />
                              </Column>
                            </>
                          )}
                        </Row>
                      </Fragment>
                    </Section>
                  </Column>
                </Row>
              </Fragment>
            </Section>
          </Column>
          <Column>&zwj;</Column>
        </Row>
      </Fragment>
    </Section>
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
