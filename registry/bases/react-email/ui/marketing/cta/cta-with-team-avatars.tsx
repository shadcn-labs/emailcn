/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "react-email";
import type { TailwindConfig } from "react-email";

import { DefaultFonts } from "@/registry/bases/react-email/fonts/default";
import { defaultTheme } from "@/registry/bases/react-email/themes/default";

export type CTAWithTeamAvatarsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface CTAWithTeamAvatarsProps {
  theme?: TailwindConfig;
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  avatarSrc1?: string;
  avatarAlt1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  avatarSrc3?: string;
  avatarAlt3?: string;
  avatarSrc4?: string;
  avatarAlt4?: string;
  variant?: CTAWithTeamAvatarsVariant;
}

export const CTAWithTeamAvatarsSection = ({
  heading = "Join Our Team",
  subtext = "Work with amazing people.",
  ctaLabel = "View Openings",
  ctaHref = "#",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-1&size=60",
  avatarAlt1 = "",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-2&size=60",
  avatarAlt2 = "",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-3&size=60",
  avatarAlt3 = "",
  avatarSrc4 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-4&size=60",
  avatarAlt4 = "",
  variant = "default",
}: Omit<CTAWithTeamAvatarsProps, "theme">) => {
  const getVariantClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[-10deg]";
      }
      case "slanted-right": {
        return "skew-x-[10deg]";
      }
      default: {
        return "";
      }
    }
  };

  const getUnskewClass = () => {
    switch (variant) {
      case "slanted-left": {
        return "skew-x-[10deg]";
      }
      case "slanted-right": {
        return "skew-x-[-10deg]";
      }
      default: {
        return "";
      }
    }
  };

  return (
    <Section className={`bg-background py-16 ${getVariantClass()}`}>
      <Container
        className={`mx-auto max-w-container text-center ${getUnskewClass()}`}
      >
        <Row className="mb-6 inline-block">
          <Column className="pr-1 align-middle">
            <Img
              src={avatarSrc1}
              alt={avatarAlt1}
              width="60"
              height="60"
              className="inline-block rounded-full border-2 border-background object-cover -mr-4"
            />
          </Column>
          <Column className="px-1 align-middle">
            <Img
              src={avatarSrc2}
              alt={avatarAlt2}
              width="60"
              height="60"
              className="inline-block rounded-full border-2 border-background object-cover -mr-4"
            />
          </Column>
          <Column className="px-1 align-middle">
            <Img
              src={avatarSrc3}
              alt={avatarAlt3}
              width="60"
              height="60"
              className="inline-block rounded-full border-2 border-background object-cover -mr-4"
            />
          </Column>
          <Column className="pl-1 align-middle">
            <Img
              src={avatarSrc4}
              alt={avatarAlt4}
              width="60"
              height="60"
              className="inline-block rounded-full border-2 border-background object-cover"
            />
          </Column>
        </Row>
        <Text className="m-0 text-2xl font-bold text-heading leading-snug text-foreground">
          {heading}
        </Text>
        <Text className="mt-2 mb-6 text-base text-foreground-muted">
          {subtext}
        </Text>
        {ctaLabel && ctaHref ? (
          <Button
            href={ctaHref}
            className="inline-block rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-fg no-underline"
          >
            {ctaLabel}
          </Button>
        ) : null}
      </Container>
    </Section>
  );
};

export const CTAWithTeamAvatars = ({
  theme = defaultTheme,
  heading = "Join Our Team",
  subtext = "Work with amazing people.",
  ctaLabel = "View Openings",
  ctaHref = "#",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-5&size=60",
  avatarAlt1 = "",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-6&size=60",
  avatarAlt2 = "",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-7&size=60",
  avatarAlt3 = "",
  avatarSrc4 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-8&size=60",
  avatarAlt4 = "",
  variant = "default",
}: CTAWithTeamAvatarsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <CTAWithTeamAvatarsSection
          avatarAlt1={avatarAlt1}
          avatarAlt2={avatarAlt2}
          avatarAlt3={avatarAlt3}
          avatarAlt4={avatarAlt4}
          avatarSrc1={avatarSrc1}
          avatarSrc2={avatarSrc2}
          avatarSrc3={avatarSrc3}
          avatarSrc4={avatarSrc4}
          ctaHref={ctaHref}
          ctaLabel={ctaLabel}
          heading={heading}
          subtext={subtext}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

CTAWithTeamAvatars.PreviewProps = {
  avatarAlt1: "Team 1",
  avatarAlt2: "Team 2",
  avatarAlt3: "Team 3",
  avatarAlt4: "Team 4",
  avatarSrc1:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-9&size=60",
  avatarSrc2:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-10&size=60",
  avatarSrc3:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-11&size=60",
  avatarSrc4:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-cta-cta-with-team-avatars-tsx-12&size=60",
  ctaHref: "https://example.com",
  ctaLabel: "View Openings",
  heading: "Join Our Team",
  subtext: "Work with amazing people.",
  theme: defaultTheme,
  variant: "default",
} satisfies CTAWithTeamAvatarsProps;
