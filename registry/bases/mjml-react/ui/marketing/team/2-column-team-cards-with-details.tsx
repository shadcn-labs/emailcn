/* eslint-disable no-nested-ternary, no-unused-vars, complexity, no-negated-condition, no-empty-pattern */
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlImage,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

export type TeamWithBioVariant = "default" | "slanted-left" | "slanted-right";
export interface TeamWithBioProps {
  theme?: EmailThemeTokens;
  members?: { avatarUrl?: string; name: string; role: string; bio: string }[];
  variant?: TeamWithBioVariant;
}
const TeamWithBioSection = ({
  members,
  theme,
  variant,
}: {
  members: TeamWithBioProps["members"];
  theme: EmailThemeTokens;
  variant: TeamWithBioVariant;
}) => (
  <MjmlSection
    backgroundColor={theme.colorBackground}
    padding={`${theme.spacingXl ?? "48px"} 0`}
  >
    {(members ?? []).slice(0, 3).map((m, i) => (
      <MjmlColumn
        key={m.name + i}
        width="33.33%"
        padding={theme.spacingBase ?? "16px"}
        verticalAlign="top"
      >
        {m.avatarUrl ? (
          <MjmlImage
            align="center"
            alt={m.name}
            borderRadius="50%"
            src={m.avatarUrl}
            width={80}
            height={80}
            paddingBottom={theme.spacingBase ?? "16px"}
          />
        ) : null}
        <MjmlText
          align="center"
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase}
          fontWeight={theme.fontWeightMedium}
          paddingBottom={theme.spacingBase ?? "Fourpx"}
        >
          {m.name}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          paddingBottom={theme.spacingBase ?? "8px"}
        >
          {m.role}
        </MjmlText>
        <MjmlText
          align="center"
          color={theme.colorTextSubtle}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeSm}
          lineHeight={theme.lineHeightBase}
        >
          {m.bio}
        </MjmlText>
      </MjmlColumn>
    ))}
  </MjmlSection>
);
export const TwoColumnTeamCardsWithDetails = ({
  theme = defaultTheme,
  members = [{ bio: "Building the future.", name: "John Doe", role: "CEO" }],
  variant = "default",
}: TeamWithBioProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>team with bio</MjmlPreview>
      <MjmlAttributes>
        <MjmlAll color={theme.colorTextMuted} fontFamily={theme.fontFamily} />
        <MjmlText
          fontSize={theme.fontSizeBase}
          lineHeight={theme.lineHeightBase}
        />
      </MjmlAttributes>
    </MjmlHead>
    <MjmlBody
      backgroundColor={theme.colorBackground}
      width={theme.containerWidth}
    >
      <MjmlWrapper padding="0">
        <TeamWithBioSection members={members} theme={theme} variant={variant} />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);
TwoColumnTeamCardsWithDetails.PreviewProps = {
  members: [
    {
      avatarUrl: "https://placehold.co/80x80?text=AJ",
      bio: "Building the future of email.",
      name: "Alex Johnson",
      role: "CEO",
    },
    {
      avatarUrl: "https://placehold.co/80x80?text=MG",
      bio: "Leading engineering.",
      name: "Maria Garcia",
      role: "CTO",
    },
    {
      avatarUrl: "https://placehold.co/80x80?text=DK",
      bio: "Designing experiences.",
      name: "David Kim",
      role: "Design Lead",
    },
  ],
  theme: defaultTheme,
  variant: "default",
} satisfies TeamWithBioProps;
