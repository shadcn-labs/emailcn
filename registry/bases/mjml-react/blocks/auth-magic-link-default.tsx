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

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";

import { getLayoutTokens } from "../lib/get-layout-tokens";

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
  const theme = defaultTheme;
  const t = resolveEmailTheme(theme);

  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Your login link</MjmlPreview>
        <MjmlAttributes>
          <MjmlAll color={fg} fontFamily={sans} />
          <MjmlText fontSize={baseFs} lineHeight={lh} />
        </MjmlAttributes>
      </MjmlHead>
      <MjmlBody backgroundColor={bg} width={width}>
        <MjmlWrapper padding="0">
          <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
            <MjmlColumn>
              <MjmlText
                color={t.colors.foreground}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.xl ?? "20px"}
                fontWeight={t.fontWeight.medium ?? "500"}
                paddingBottom={t.spacing.md}
              >
                Sign in to {_productName}
              </MjmlText>
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.base ?? "14px"}
                lineHeight={t.lineHeight.snug}
                paddingBottom={t.spacing.md}
              >
                Click the button below to sign in to your {_productName}{" "}
                account. This link expires in {expiresInMinutes} minutes.
              </MjmlText>
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.base ?? "14px"}
                paddingBottom={t.spacing.lg}
              >
                If you didn&apos;t request this, you can safely ignore this
                email.
              </MjmlText>
              <MjmlButton
                backgroundColor={t.colors.primary}
                borderRadius={t.borderRadius.md}
                color={t.colors["primary-fg"] ?? "#ffffff"}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.sm ?? "14px"}
                fontWeight={t.fontWeight.medium ?? "500"}
                href={magicLinkHref}
                innerPadding={`${t.spacing.sm ?? "12px"} ${t.spacing.lg ?? "24px"}`}
              >
                Sign in to {_productName}
              </MjmlButton>
              <MjmlText
                color={t.colors["foreground-muted"]}
                fontFamily={t.fontFamily.sans}
                fontSize={t.fontSize.sm ?? "12px"}
                paddingTop={t.spacing.lg}
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
  _logoUrl: "https://example.com/logo.png",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 30,
  magicLinkHref: "https://example.com/login?token=abc123",
} satisfies Props;
