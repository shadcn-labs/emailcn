// Subject: Reset your password for {_productName}

import { PasswordResetBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  resetHref?: string;
  expiresInMinutes?: number;
  _productName?: string;
}

export const AuthPasswordResetDefault = ({
  resetHref = "#",
  expiresInMinutes = 60,
  _productName = "Acme",
}: Props) => (
  <PasswordResetBlock
    expiresInMinutes={expiresInMinutes}
    productName={_productName}
    resetHref={resetHref}
    theme={defaultTheme}
  />
);

AuthPasswordResetDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Acme",
  expiresInMinutes: 60,
  resetHref: "https://example.com/reset?token=abc123",
} satisfies Props;
