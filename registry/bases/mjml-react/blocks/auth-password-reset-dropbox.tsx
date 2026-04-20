// MJML parity block — mirrored from react-email (auth-password-reset-dropbox.tsx)
import {
  Mjml,
  MjmlAll,
  MjmlAttributes,
  MjmlBody,
  MjmlColumn,
  MjmlHead,
  MjmlPreview,
  MjmlSection,
  MjmlText,
  MjmlWrapper,
} from "@faire/mjml-react";

import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

import { getLayoutTokens } from "../lib/get-layout-tokens";
type Props = Record<string, never>;

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
  const { baseFs, bg, fg, lh, sans, width } = getLayoutTokens(t);

  return (
    <Mjml>
      <MjmlHead>
        <MjmlPreview>Email preview</MjmlPreview>
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
              >
                MJML parity placeholder for auth-password-reset-dropbox.tsx —
                replace with full markup.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

AuthPasswordResetDropbox.PreviewProps = {} satisfies Props;
