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

export interface AvatarWithDetailsProps {
  theme?: TailwindConfig;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const AvatarWithDetailsSection = ({
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
  variant = "default",
}: Omit<AvatarWithDetailsProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-left";

  return (
    <Section className="py-4">
      <Row>
        <Column className="w-[80px] align-middle">
          {avatarUrl ? (
            <Img
              src={avatarUrl}
              alt={name}
              height={64}
              width={64}
              className="rounded-full object-cover"
            />
          ) : (
            <Text className="h-16 w-16 rounded-full bg-primary text-center text-2xl leading-[64px] text-primary-fg">
              {name.charAt(0)}
            </Text>
          )}
        </Column>
        <Column className="pl-6 align-middle">
          <Text
            className={`mb-1 text-lg font-medium text-foreground ${textAlign}`}
          >
            {name}
          </Text>
          <Text className={`text-base text-foreground-muted ${textAlign}`}>
            {title}
          </Text>
          {companyName ? (
            <Text className={`mt-1 text-sm text-foreground-muted ${textAlign}`}>
              {companyName}
            </Text>
          ) : null}
        </Column>
      </Row>
    </Section>
  );
};

export const AvatarWithDetails = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
  variant = "default",
}: AvatarWithDetailsProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>{name}</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <AvatarWithDetailsSection
          avatarUrl={avatarUrl}
          name={name}
          title={title}
          companyName={companyName}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

AvatarWithDetails.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=preview-avatar-1&size=128",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
  variant: "default",
} satisfies AvatarWithDetailsProps;
