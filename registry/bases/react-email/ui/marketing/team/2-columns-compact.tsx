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

export type TwoColumnsCompactVariant =
  | "default"
  | "border-top"
  | "bordered"
  | "accent";

export interface TwoColumnsCompactProps {
  theme?: TailwindConfig;
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
            {boxed ? null : (
              <>
                <Section style={{ lineHeight: "16px" }}>&zwj;</Section>
                <SocialLinks lastIcon={lastIcon} />
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

export const TwoColumnsCompactSection = ({
  avatarAlt1 = "",
  avatarAlt2 = "",
  avatarSrc1 = "https://emailcn.vercel.app/api/email-assets/teams/member-1-md.jpg",
  avatarSrc2 = "https://emailcn.vercel.app/api/email-assets/teams/member-2-md.jpg",
  name1 = "Jason Adam",
  name2 = "Henrik Petersson",
  role1 = "Senior Developer",
  role2 = "Senior UX/UI designer",
  variant = "default",
}: Omit<TwoColumnsCompactProps, "theme">) => (
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
                    <CompactCard
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

export const TwoColumnsCompact = ({
  theme = defaultTheme,
  ...props
}: TwoColumnsCompactProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Meet the team</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsCompactSection {...props} />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsCompact.PreviewProps = {
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsCompactProps;
