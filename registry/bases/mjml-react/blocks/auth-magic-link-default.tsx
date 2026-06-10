// Subject: Your login link for {_productName}

import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlButton,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";
import type { EmailThemeTokens } from "@/registry/bases/mjml-react/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  magicLinkHref?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthMagicLinkDefault = ({
  magicLinkHref = "#",
  expiresInMinutes = 30,
  _productName = "Acme",
}: Props) => {
  const theme: EmailThemeTokens = defaultTheme;

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Your login link</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={theme.colorText} fontFamily={theme.fontFamily} />
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
          <MjmlSection padding={`${theme.spacingXl ?? "24px"} 0`}>
            <MjmlColumn>
              <MjmlText
                color={theme.colorText}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeXl ?? "20px"}
                fontWeight={theme.fontWeightMedium ?? "500"}
                paddingBottom={theme.spacingBase}
              >
                Sign in to {_productName}
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                lineHeight={theme.lineHeightBase}
                paddingBottom={theme.spacingBase}
              >
                Click the button below to sign in to your {_productName}{" "}
                account. This link expires in {expiresInMinutes} minutes.
              </MjmlText>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeBase ?? "14px"}
                paddingBottom={theme.spacingLg}
              >
                If you didn&apos;t request this, you can safely ignore this
                email.
              </MjmlText>
              <MjmlButton
                backgroundColor={theme.colorPrimary}
                borderRadius={theme.borderRadius}
                color={theme.colorPrimaryForeground ?? "#ffffff"}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "14px"}
                fontWeight={theme.fontWeightMedium ?? "500"}
                href={magicLinkHref}
                innerPadding={`${theme.spacingBase ?? "12px"} ${theme.spacingLg ?? "24px"}`}
              >
                Sign in to {_productName}
              </MjmlButton>
              <MjmlText
                color={theme.colorTextMuted}
                fontFamily={theme.fontFamily}
                fontSize={theme.fontSizeSm ?? "12px"}
                paddingTop={theme.spacingLg}
              >
                This link will expire in {expiresInMinutes} minutes. If you need
                help, reply to this email.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

AuthMagicLinkDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;
