// Subject: Your verification code for {_productName}

import { AuthOtpBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { defaultTheme } from "@/registry/bases/mjml-react/themes/default";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  otpCode?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthOtpDefault = ({
  otpCode = "123456",
  expiresInMinutes = 10,
  _productName = "Acme",
}: Props) => (
  <AuthOtpBlock
    expiresInMinutes={expiresInMinutes}
    otpCode={otpCode}
    productName={_productName}
    theme={defaultTheme}
  />
);

AuthOtpDefault.PreviewProps = {
  _logoAlt: "Acme",
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Acme",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  otpCode: "123456",
} satisfies Props;
