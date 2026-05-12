/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Body,
  Column,
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

export type HorizontalTeamMemberBiosVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface HorizontalTeamMemberBiosProps {
  theme?: TailwindConfig;
  heading?: string;
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
  avatarSrc3?: string;
  avatarAlt3?: string;
  name3?: string;
  role3?: string;
  bio3?: string;
  variant?: HorizontalTeamMemberBiosVariant;
}

export const HorizontalTeamMemberBiosSection = ({
  heading = "Our Team",
  avatarSrc1 = "https://via.placeholder.com/80x80",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  bio1 = "Visionary leader.",
  avatarSrc2 = "https://via.placeholder.com/80x80",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  bio2 = "Tech genius.",
  avatarSrc3 = "https://via.placeholder.com/80x80",
  avatarAlt3 = "",
  name3 = "Alice Brown",
  role3 = "Designer",
  bio3 = "Creative mind.",
  variant = "default",
}: Omit<HorizontalTeamMemberBiosProps, "theme">) => {
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
      <Section className={`max-w-container mx-auto ${getUnskewClass()}`}>
        {heading ? (
          <Text className="m-0 mb-8 text-center text-2xl font-bold text-foreground">
            {heading}
          </Text>
        ) : null}
        <Row>
          <Column className="w-1/3 pr-4 align-top">
            <Section className="text-center">
              <Img
                src={avatarSrc1}
                alt={avatarAlt1}
                width="80"
                height="80"
                className="mx-auto mb-3 h-auto rounded-full object-cover"
              />
              <Text className="m-0 mb-1 text-base font-medium text-foreground">
                {name1}
              </Text>
              <Text className="m-0 mb-2 text-xs text-primary">{role1}</Text>
              <Text className="m-0 text-xs leading-snug text-foreground-muted">
                {bio1}
              </Text>
            </Section>
          </Column>
          <Column className="w-1/3 px-4 align-top">
            <Section className="text-center">
              <Img
                src={avatarSrc2}
                alt={avatarAlt2}
                width="80"
                height="80"
                className="mx-auto mb-3 h-auto rounded-full object-cover"
              />
              <Text className="m-0 mb-1 text-base font-medium text-foreground">
                {name2}
              </Text>
              <Text className="m-0 mb-2 text-xs text-primary">{role2}</Text>
              <Text className="m-0 text-xs leading-snug text-foreground-muted">
                {bio2}
              </Text>
            </Section>
          </Column>
          <Column className="w-1/3 pl-4 align-top">
            <Section className="text-center">
              <Img
                src={avatarSrc3}
                alt={avatarAlt3}
                width="80"
                height="80"
                className="mx-auto mb-3 h-auto rounded-full object-cover"
              />
              <Text className="m-0 mb-1 text-base font-medium text-foreground">
                {name3}
              </Text>
              <Text className="m-0 mb-2 text-xs text-primary">{role3}</Text>
              <Text className="m-0 text-xs leading-snug text-foreground-muted">
                {bio3}
              </Text>
            </Section>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const HorizontalTeamMemberBios = ({
  theme = defaultTheme,
  heading = "Our Team",
  avatarSrc1 = "https://via.placeholder.com/80x80",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  bio1 = "Visionary leader.",
  avatarSrc2 = "https://via.placeholder.com/80x80",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  bio2 = "Tech genius.",
  avatarSrc3 = "https://via.placeholder.com/80x80",
  avatarAlt3 = "",
  name3 = "Alice Brown",
  role3 = "Designer",
  bio3 = "Creative mind.",
  variant = "default",
}: HorizontalTeamMemberBiosProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <HorizontalTeamMemberBiosSection
          avatarAlt1={avatarAlt1}
          avatarAlt2={avatarAlt2}
          avatarAlt3={avatarAlt3}
          avatarSrc1={avatarSrc1}
          avatarSrc2={avatarSrc2}
          avatarSrc3={avatarSrc3}
          bio1={bio1}
          bio2={bio2}
          bio3={bio3}
          heading={heading}
          name1={name1}
          name2={name2}
          name3={name3}
          role1={role1}
          role2={role2}
          role3={role3}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

HorizontalTeamMemberBios.PreviewProps = {
  avatarAlt1: "Jane Doe",
  avatarAlt2: "John Smith",
  avatarAlt3: "Alice Brown",
  avatarSrc1: "https://via.placeholder.com/80x80",
  avatarSrc2: "https://via.placeholder.com/80x80",
  avatarSrc3: "https://via.placeholder.com/80x80",
  bio1: "Visionary leader with 15+ years of experience.",
  bio2: "Tech genius building scalable solutions.",
  bio3: "Creative mind behind our award-winning designs.",
  heading: "Our Team",
  name1: "Jane Doe",
  name2: "John Smith",
  name3: "Alice Brown",
  role1: "CEO",
  role2: "CTO",
  role3: "Designer",
  theme: defaultTheme,
  variant: "default",
} satisfies HorizontalTeamMemberBiosProps;
