// Subject: Reset your password for {_productName}

import { PasswordResetBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { notionTheme } from "@/registry/bases/mjml-react/themes/notion";

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
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Notion",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
