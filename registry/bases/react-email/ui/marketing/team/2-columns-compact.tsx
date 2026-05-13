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

export type TwoColumnsCompactVariant =
  | "default"
  | "slanted-left"
  | "slanted-right";

export interface TwoColumnsCompactProps {
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
  avatarSrc4?: string;
  avatarAlt4?: string;
  name4?: string;
  role4?: string;
  variant?: TwoColumnsCompactVariant;
}

export const TwoColumnsCompactSection = ({
  heading = "Team",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-1&size=60",
  avatarAlt1 = "",
  name1 = "Jane",
  role1 = "CEO",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-2&size=60",
  avatarAlt2 = "",
  name2 = "John",
  role2 = "CTO",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-3&size=60",
  avatarAlt3 = "",
  name3 = "Alice",
  role3 = "Design",
  avatarSrc4 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-4&size=60",
  avatarAlt4 = "",
  name4 = "Bob",
  role4 = "Dev",
  variant = "default",
}: Omit<TwoColumnsCompactProps, "theme">) => {
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
        <Row className="mb-4">
          <Column className="w-1/2 pr-4 align-middle">
            <Row>
              <Column className="w-1/3 pr-3 align-middle">
                <Img
                  src={avatarSrc1}
                  alt={avatarAlt1}
                  width="60"
                  height="60"
                  className="w-full h-auto rounded-full object-cover"
                />
              </Column>
              <Column className="w-2/3 align-middle">
                <Text className="m-0 text-sm font-medium text-foreground">
                  {name1}
                </Text>
                <Text className="m-0 text-xs text-foreground-muted">
                  {role1}
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="w-1/2 pl-4 align-middle">
            <Row>
              <Column className="w-1/3 pr-3 align-middle">
                <Img
                  src={avatarSrc2}
                  alt={avatarAlt2}
                  width="60"
                  height="60"
                  className="w-full h-auto rounded-full object-cover"
                />
              </Column>
              <Column className="w-2/3 align-middle">
                <Text className="m-0 text-sm font-medium text-foreground">
                  {name2}
                </Text>
                <Text className="m-0 text-xs text-foreground-muted">
                  {role2}
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row>
          <Column className="w-1/2 pr-4 align-middle">
            <Row>
              <Column className="w-1/3 pr-3 align-middle">
                <Img
                  src={avatarSrc3}
                  alt={avatarAlt3}
                  width="60"
                  height="60"
                  className="w-full h-auto rounded-full object-cover"
                />
              </Column>
              <Column className="w-2/3 align-middle">
                <Text className="m-0 text-sm font-medium text-foreground">
                  {name3}
                </Text>
                <Text className="m-0 text-xs text-foreground-muted">
                  {role3}
                </Text>
              </Column>
            </Row>
          </Column>
          <Column className="w-1/2 pl-4 align-middle">
            <Row>
              <Column className="w-1/3 pr-3 align-middle">
                <Img
                  src={avatarSrc4}
                  alt={avatarAlt4}
                  width="60"
                  height="60"
                  className="w-full h-auto rounded-full object-cover"
                />
              </Column>
              <Column className="w-2/3 align-middle">
                <Text className="m-0 text-sm font-medium text-foreground">
                  {name4}
                </Text>
                <Text className="m-0 text-xs text-foreground-muted">
                  {role4}
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </Section>
    </Section>
  );
};

export const TwoColumnsCompact = ({
  theme = defaultTheme,
  heading = "Team",
  avatarSrc1 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-5&size=60",
  avatarAlt1 = "",
  name1 = "Jane",
  role1 = "CEO",
  avatarSrc2 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-6&size=60",
  avatarAlt2 = "",
  name2 = "John",
  role2 = "CTO",
  avatarSrc3 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-7&size=60",
  avatarAlt3 = "",
  name3 = "Alice",
  role3 = "Design",
  avatarSrc4 = "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-8&size=60",
  avatarAlt4 = "",
  name4 = "Bob",
  role4 = "Dev",
  variant = "default",
}: TwoColumnsCompactProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{heading}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <TwoColumnsCompactSection
          avatarAlt1={avatarAlt1}
          avatarAlt2={avatarAlt2}
          avatarAlt3={avatarAlt3}
          avatarAlt4={avatarAlt4}
          avatarSrc1={avatarSrc1}
          avatarSrc2={avatarSrc2}
          avatarSrc3={avatarSrc3}
          avatarSrc4={avatarSrc4}
          heading={heading}
          name1={name1}
          name2={name2}
          name3={name3}
          name4={name4}
          role1={role1}
          role2={role2}
          role3={role3}
          role4={role4}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

TwoColumnsCompact.PreviewProps = {
  avatarAlt1: "Jane",
  avatarAlt2: "John",
  avatarAlt3: "Alice",
  avatarAlt4: "Bob",
  avatarSrc1:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-9&size=60",
  avatarSrc2:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-10&size=60",
  avatarSrc3:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-11&size=60",
  avatarSrc4:
    "https://api.dicebear.com/9.x/lorelei/png?seed=email-preview-registry-bases-react-email-ui-marketing-team-2-columns-compact-tsx-12&size=60",
  heading: "Team",
  name1: "Jane Doe",
  name2: "John Smith",
  name3: "Alice Brown",
  name4: "Bob Wilson",
  role1: "CEO",
  role2: "CTO",
  role3: "Designer",
  role4: "Developer",
  theme: defaultTheme,
  variant: "default",
} satisfies TwoColumnsCompactProps;
