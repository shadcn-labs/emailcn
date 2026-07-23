// Subject: Your verification code for {_productName}

import { AuthOtpBlock } from "@/registry/bases/mjml-react/blocks/block-shared";
import { twitchTheme } from "@/registry/bases/mjml-react/themes/twitch";

interface Props {
  _logoUrl?: string;
  _logoAlt?: string;
  otpCode?: string;
  expiresInMinutes?: number;
  _recipientEmail?: string;
  _productName?: string;
}

export const AuthOtpTwitch = ({
  otpCode = "123456",
  expiresInMinutes = 10,
  _productName = "Twitch",
}: Props) => (
  <AuthOtpBlock
    expiresInMinutes={expiresInMinutes}
    otpCode={otpCode}
    productName={_productName}
    theme={twitchTheme}
  />
);

AuthOtpTwitch.PreviewProps = {
  _logoAlt: "Twitch",
  _logoUrl: "https://static.photos/business/320x80/2",
  _productName: "Twitch",
  _recipientEmail: "you@example.com",
  expiresInMinutes: 10,
  otpCode: "123456",
} satisfies Props;
