// MJML parity block — mirrored from react-email (auth-password-reset-dropbox.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

interface Props {}

export const AuthPasswordResetDropbox = (_props: Props) => {
  const theme = mergeEmailThemes(defaultTheme, {
    theme: {
      extend: {
        colors: {
          primary: { DEFAULT: "#0061ff", fg: "#ffffff", hover: "#0052dd" },
        },
      },
    },
  });
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for auth-password-reset-dropbox.tsx —
            replace with full markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

AuthPasswordResetDropbox.PreviewProps = {} satisfies Props;
export default AuthPasswordResetDropbox;
