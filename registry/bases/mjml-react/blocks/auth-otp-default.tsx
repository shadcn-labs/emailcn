// MJML parity block — mirrored from react-email (auth-otp-default.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as defaultTheme } from "@/registry/themes/default";

interface Props {}

export const AuthOtpDefault = (_props: Props) => {
  const theme = defaultTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for auth-otp-default.tsx — replace with full
            markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

AuthOtpDefault.PreviewProps = {} satisfies Props;
export default AuthOtpDefault;
