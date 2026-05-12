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

export interface GroupedOverlappedAvatarsPlusCountProps {
  theme?: TailwindConfig;
  avatars?: { url?: string; name: string }[];
  plusCount?: number;
  variant?: "default" | "slanted-left" | "slanted-right";
}

export const GroupedOverlappedAvatarsPlusCountSection = ({
  avatars = [{ name: "A" }, { name: "B" }, { name: "C" }],
  plusCount = 5,
  variant = "default",
}: Omit<GroupedOverlappedAvatarsPlusCountProps, "theme">) => {
  const textAlign =
    variant === "slanted-left"
      ? "text-left"
      : variant === "slanted-right"
        ? "text-right"
        : "text-center";

  return (
    <Section className={`py-4 ${textAlign}`}>
      <Row>
        {avatars.slice(0, 3).map((avatar, index) => (
          <Column
            key={`${avatar.name}-${index}`}
            style={{ marginLeft: index > 0 ? -12 : 0, width: 40 }}
            className="align-middle"
          >
            {avatar.url ? (
              <Img
                src={avatar.url}
                alt={avatar.name}
                height={40}
                width={40}
                className="rounded-full border-2 border-background object-cover"
              />
            ) : (
              <Text className="m-0 h-10 w-10 rounded-full border-2 border-background bg-primary text-center text-sm leading-[36px] text-primary-fg">
                {avatar.name.charAt(0)}
              </Text>
            )}
          </Column>
        ))}
        {plusCount > 0 ? (
          <Column
            style={{ marginLeft: -12, width: 40 }}
            className="align-middle"
          >
            <Text className="m-0 h-10 w-10 rounded-full border-2 border-background bg-foreground-muted/10 text-center text-xs leading-[36px] text-foreground-muted">
              +{plusCount}
            </Text>
          </Column>
        ) : null}
      </Row>
    </Section>
  );
};

export const GroupedOverlappedAvatarsPlusCount = ({
  theme = defaultTheme,
  avatars = [{ name: "A" }, { name: "B" }, { name: "C" }],
  plusCount = 5,
  variant = "default",
}: GroupedOverlappedAvatarsPlusCountProps) => (
  <Html>
    <Head>
      <DefaultFonts />
    </Head>
    <Preview>Team</Preview>
    <Tailwind config={theme}>
      <Body className="m-0 bg-background font-sans">
        <GroupedOverlappedAvatarsPlusCountSection
          avatars={avatars}
          plusCount={plusCount}
          variant={variant}
        />
      </Body>
    </Tailwind>
  </Html>
);

GroupedOverlappedAvatarsPlusCount.PreviewProps = {
  avatars: [
    { name: "Alice", url: "https://example.com/avatar1.jpg" },
    { name: "Bob", url: "https://example.com/avatar2.jpg" },
    { name: "Charlie", url: "https://example.com/avatar3.jpg" },
  ],
  plusCount: 12,
  theme: defaultTheme,
  variant: "default",
} satisfies GroupedOverlappedAvatarsPlusCountProps;
