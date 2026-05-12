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

export type TwoColumnTeamCardsWithDetailsVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnTeamCardsWithDetailsProps {
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
  variant?: TwoColumnTeamCardsWithDetailsVariant;
}

export const TwoColumnTeamCardsWithDetailsSection = ({
  heading = "Our Team",
  avatarSrc1 = "https://via.placeholder.com/200x200",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  bio1 = "Jane has over 15 years of experience.",
  avatarSrc2 = "https://via.placeholder.com/200x200",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  bio2 = "John leads our engineering team.",
  variant = "default",
}: Omit<TwoColumnTeamCardsWithDetailsProps, "theme">) => {
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
          <Column className="w-1/2 pr-4 align-top">
            <Img
              src={avatarSrc1}
              alt={avatarAlt1}
              width="200"
              height="200"
              className="mb-4 w-full h-auto rounded-lg object-cover"
            />
            <Text className="m-0 mb-1 text-lg font-medium text-foreground">
              {name1}
            </Text>
            <Text className="m-0 mb-2 text-sm text-primary">{role1}</Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {bio1}
            </Text>
          </Column>
          <Column className="w-1/2 pl-4 align-top">
            <Img
              src={avatarSrc2}
              alt={avatarAlt2}
              width="200"
              height="200"
              className="mb-4 w-full h-auto rounded-lg object-cover"
            />
            <Text className="m-0 mb-1 text-lg font-medium text-foreground">
              {name2}
            </Text>
            <Text className="m-0 mb-2 text-sm text-primary">{role2}</Text>
            <Text className="m-0 text-sm leading-snug text-foreground-muted">
              {bio2}
            </Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  heading = "Our Team",
  avatarSrc1 = "https://via.placeholder.com/200x200",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  bio1 = "Jane has over 15 years of experience.",
  avatarSrc2 = "https://via.placeholder.com/200x200",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  bio2 = "John leads our engineering team.",
  variant = "default",
}: TwoColumnTeamCardsWithDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnTeamCardsWithDetailsSection
          avatarAlt1={avatarAlt1}
          avatarAlt2={avatarAlt2}
          avatarSrc1={avatarSrc1}
          avatarSrc2={avatarSrc2}
          bio1={bio1}
          bio2={bio2}
          heading={heading}
          name1={name1}
          name2={name2}
          role1={role1}
          role2={role2}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnTeamCardsWithDetails.PreviewProps = {
  avatarAlt1: "Jane Doe",
  avatarAlt2: "John Smith",
  avatarSrc1: "https://via.placeholder.com/200x200",
  avatarSrc2: "https://via.placeholder.com/200x200",
  bio1: "Jane has over 15 years of experience in product design and leadership.",
  bio2: "John leads our engineering team with a focus on scalable architecture.",
  heading: "Our Team",
  name1: "Jane Doe",
  name2: "John Smith",
  role1: "CEO",
  role2: "CTO",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnTeamCardsWithDetailsProps;
