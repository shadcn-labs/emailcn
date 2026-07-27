// Subject: Reset your password for {_productName}

import { PasswordResetBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { emailAsset } from "@/registry/email-assets";
import { notionTheme } from "@/registry/themes/notion";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetNotion = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Notion",
}: Props) => (
  <PasswordResetBlock
    expiresInMinutes={expiresInMinutes}
    productName={_productName}
    resetHref={resetHref}
    theme={notionTheme}
  />
);

AuthPasswordResetNotion.PreviewProps = {
  _logoAlt: "Notion",
  _logoUrl: emailAsset("logos/logo-emailcn.png"),
  _productName: "Notion",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
