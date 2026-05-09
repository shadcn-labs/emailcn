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

export interface AvatarRowProps {
  theme?: EmailThemeTokens;
  avatarUrl?: string;
  name?: string;
  title?: string;
  companyName?: string;
}

const AvatarRowSection = ({
  avatarUrl,
  companyName,
  name,
  theme,
  title,
}: {
  avatarUrl?: string;
  companyName?: string;
  name: string;
  theme: EmailThemeTokens;
  title: string;
}) => (
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
        <MjmlText align="center" fontFamily={theme.fontFamily} fontSize="24px">
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
        color={theme.colorText}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeLg ?? "16px"}
        fontWeight={theme.fontWeightMedium ?? "500"}
        paddingBottom={theme.spacingBase ?? "16px"}
      >
        {name}
      </MjmlText>
      <MjmlText
        color={theme.colorTextMuted}
        fontFamily={theme.fontFamily}
        fontSize={theme.fontSizeBase ?? "14px"}
      >
        {title}
      </MjmlText>
      {companyName ? (
        <MjmlText
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

export const AvatarRow = ({
  theme = defaultTheme,
  avatarUrl,
  name = "John Doe",
  title = "Product Designer",
  companyName = "Acme Inc.",
}: AvatarRowProps) => (
  <Mjml>
    <MjmlHead>
      <MjmlPreview>avatar-row</MjmlPreview>
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
        <AvatarRowSection
          avatarUrl={avatarUrl}
          companyName={companyName}
          name={name}
          theme={theme}
          title={title}
        />
      </MjmlWrapper>
    </MjmlBody>
  </Mjml>
);

AvatarRow.PreviewProps = {
  avatarUrl: "https://example.com/avatar.jpg",
  companyName: "TechCorp",
  name: "Alex Johnson",
  theme: defaultTheme,
  title: "Senior Engineer",
} satisfies AvatarRowProps;
