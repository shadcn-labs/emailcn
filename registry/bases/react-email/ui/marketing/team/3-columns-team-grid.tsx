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

export type ThreeColumnsTeamGridVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface ThreeColumnsTeamGridProps {
  theme?: TailwindConfig;
  heading?: string;
  avatarSrc1?: string;
  avatarAlt1?: string;
  name1?: string;
  role1?: string;
  avatarSrc2?: string;
  avatarAlt2?: string;
  name2?: string;
  role2?: string;
  avatarSrc3?: string;
  avatarAlt3?: string;
  name3?: string;
  role3?: string;
  variant?: ThreeColumnsTeamGridVariant;
}

export const ThreeColumnsTeamGridSection = ({
  heading = "Our Team",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-1&size=150",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-2&size=150",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-3&size=150",
  avatarAlt3 = "",
  name3 = "Alice Brown",
  role3 = "Designer",
  variant = "default",
}: Omit<ThreeColumnsTeamGridProps, "theme">) => {
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
          <Column className="w-1/3 px-4 text-center align-top">
            <Img
              src={avatarSrc1}
              alt={avatarAlt1}
              width="150"
              height="150"
              className="mx-auto mb-4 h-auto rounded-full object-cover"
            />
            <Text className="m-0 mb-1 text-base font-medium text-foreground">
              {name1}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">{role1}</Text>
          </Column>
          <Column className="w-1/3 px-4 text-center align-top">
            <Img
              src={avatarSrc2}
              alt={avatarAlt2}
              width="150"
              height="150"
              className="mx-auto mb-4 h-auto rounded-full object-cover"
            />
            <Text className="m-0 mb-1 text-base font-medium text-foreground">
              {name2}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">{role2}</Text>
          </Column>
          <Column className="w-1/3 px-4 text-center align-top">
            <Img
              src={avatarSrc3}
              alt={avatarAlt3}
              width="150"
              height="150"
              className="mx-auto mb-4 h-auto rounded-full object-cover"
            />
            <Text className="m-0 mb-1 text-base font-medium text-foreground">
              {name3}
            </Text>
            <Text className="m-0 text-sm text-foreground-muted">{role3}</Text>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const ThreeColumnsTeamGrid = ({
  theme = defaultTheme,
  heading = "Our Team",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-4&size=150",
  avatarAlt1 = "",
  name1 = "Jane Doe",
  role1 = "CEO",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-5&size=150",
  avatarAlt2 = "",
  name2 = "John Smith",
  role2 = "CTO",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-6&size=150",
  avatarAlt3 = "",
  name3 = "Alice Brown",
  role3 = "Designer",
  variant = "default",
}: ThreeColumnsTeamGridProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <ThreeColumnsTeamGridSection
          avatarAlt1={avatarAlt1}
          avatarAlt2={avatarAlt2}
          avatarAlt3={avatarAlt3}
          avatarSrc1={avatarSrc1}
          avatarSrc2={avatarSrc2}
          avatarSrc3={avatarSrc3}
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

ThreeColumnsTeamGrid.PreviewProps = {
  avatarAlt1: "Jane Doe",
  avatarAlt2: "John Smith",
  avatarAlt3: "Alice Brown",
  avatarSrc1:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-7&size=150",
  avatarSrc2:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-8&size=150",
  avatarSrc3:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-3-columns-team-grid-tsx-9&size=150",
  heading: "Our Team",
  name1: "Jane Doe",
  name2: "John Smith",
  name3: "Alice Brown",
  role1: "CEO",
  role2: "CTO",
  role3: "Designer",
  theme: defaultTheme,
  variant: "default",
} satisfies ThreeColumnsTeamGridProps;
