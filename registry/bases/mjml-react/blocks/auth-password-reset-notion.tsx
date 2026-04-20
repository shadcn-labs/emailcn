// MJML parity block — mirrored from react-email (auth-password-reset-notion.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as notionTheme } from "@/registry/themes/notion";

interface Props {}

export const AuthPasswordResetNotion = (_props: Props) => {
  const theme = notionTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for auth-password-reset-notion.tsx — replace
            with full markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

AuthPasswordResetNotion.PreviewProps = {} satisfies Props;
export default AuthPasswordResetNotion;
