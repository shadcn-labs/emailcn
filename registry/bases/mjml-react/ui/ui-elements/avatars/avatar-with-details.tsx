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

export interface AvatarWithDetailsProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
  variant?: "default" | "slanted-left" | "slanted-right";
}

const AvatarWithDetailsSection = ({
  avatarUrl,
  name,
  title,
  companyName,
  theme,
  variant,
}: {
  avatarUrl?: string;
  name: string;
  title: string;
  companyName?: string;
  theme: EmailThemeTokens;
  variant: NonNullable<AvatarWithDetailsProps["variant"]>;
}) => {
  const alignText =
    variant === "slanted-left"
      ? "left"
      : variant === "slanted-right"
        ? "right"
        : "left";
  return (
    <MjmlSection padding={`${theme.spacingBase ?? "16px"} 0`}>
      <MjmlColumn width="80px">
        {avatarUrl ? (
          <MjmlImage
            alt={name}
            borderRadius="999px"
            height={64}
            src={avatarUrl}
            width={64}
          />
        ) : (
          <MjmlText
            align="center"
            fontFamily={theme.fontFamily}
            fontSize="24px"
          >
            <span
              style={{
                backgroundColor: theme.colorPrimary,
                borderRadius: "999px",
                color: theme.colorPrimaryForeground ?? "#ffffff",
                display: "inline-block",
                height: 64,
                lineHeight: "64px",
                width: 64,
              }}
            >
              {name.charAt(0)}
            </span>
          </MjmlText>
        )}
      </MjmlColumn>
      <MjmlColumn>
        <MjmlText
          align={alignText}
          color={theme.colorText}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeLg ?? "16px"}
          fontWeight={theme.fontWeightMedium ?? "500"}
          paddingBottom={theme.spacingBase ?? "16px"}
        >
          {name}
        </MjmlText>
        <MjmlText
          align={alignText}
          color={theme.colorTextMuted}
          fontFamily={theme.fontFamily}
          fontSize={theme.fontSizeBase ?? "14px"}
        >
          {title}
        </MjmlText>
        {companyName ? (
          <MjmlText
            align={alignText}
            color={theme.colorTextMuted}
            fontFamily={theme.fontFamily}
            fontSize={theme.fontSizeSm ?? "12px"}
            paddingTop={theme.spacingBase ?? "16px"}
          >
            {companyName}
          </MjmlText>
        ) : null}
      </MjmlColumn>
    </MjmlSection>
  );
};

export const AvatarWithDetails = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Designer",
  companyName = "Acme",
  variant = "default",
}: AvatarWithDetailsProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>avatar-details</MjmlPreview>
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
        <AvatarWithDetailsSection
          avatarUrl={avatarUrl}
          name={name}
          title={title}
          companyName={companyName}
          theme={theme}
          variant={variant}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

AvatarWithDetails.PreviewProps = {
  avatarUrl:
    "https://api.dicebear.com/9.x/lorelei/png?seed=ex-avatar-1&size=128",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
  variant: "default",
} satisfies AvatarWithDetailsProps;
