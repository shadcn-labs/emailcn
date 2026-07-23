// Subject: Reset your password for {_productName}

import { PasswordResetBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { dropboxTheme } from "@/registry/bases/mjml-react/themes/dropbox";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetDropbox = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Dropbox",
}: Props) => (
  <PasswordResetBlock
    expiresInMinutes={expiresInMinutes}
    productName={_productName}
    resetHref={resetHref}
    theme={dropboxTheme}
  />
);

AuthPasswordResetDropbox.PreviewProps = {
  _logoAlt: "Dropbox",
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Dropbox",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
