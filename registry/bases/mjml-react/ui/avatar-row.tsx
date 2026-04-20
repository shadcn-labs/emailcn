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

import type { ResolvedEmailTheme } from "@/registry/lib/resolve-theme";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import type { EmailTheme } from "@/registry/themes/define";

import { getLayoutTokens } from "../lib/get-layout-tokens";

export interface AvatarRowProps {
  theme?: EmailTheme;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
}

const AvatarRowSection = ({
  avatarUrl,
  companyName,
  name,
  t,
  title,
}: {
  avatarUrl?: string;
  companyName?: string;
  name: string;
  t: ResolvedEmailTheme;
  title: string;
}) => (
  <MjmlSection padding={`${t.spacing.md ?? "16px"} 0`}>
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
        <MjmlText align="center" fontFamily={t.fontFamily.sans} fontSize="24px">
          <span
            style={{
              backgroundColor: t.colors.primary,
              borderRadius: "999px",
              color: t.colors["primary-fg"] ?? "#ffffff",
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
        color={t.colors.foreground}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.lg ?? "16px"}
        fontWeight={t.fontWeight.medium ?? "500"}
        paddingBottom={t.spacing.sm}
      >
        {name}
      </MjmlText>
      <MjmlText
        color={t.colors["foreground-muted"]}
        fontFamily={t.fontFamily.sans}
        fontSize={t.fontSize.base ?? "14px"}
      >
        {title}
      </MjmlText>
      {companyName ? (
        <MjmlText
          color={t.colors["foreground-muted"]}
          fontFamily={t.fontFamily.sans}
          fontSize={t.fontSize.sm ?? "12px"}
          paddingTop={t.spacing.sm}
        >
          {companyName}
        </MjmlText>
      ) : null}
    </MjmlColumn>
  </MjmlSection>
);

export const AvatarRow = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
}: AvatarRowProps) => {
  const t = resolveEmailTheme(theme);
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>avatar-row</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <AvatarRowSection
            avatarUrl={avatarUrl}
            companyName={companyName}
            name={name}
            t={t}
            title={title}
          />
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

AvatarRow.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
} satisfies AvatarRowProps;
