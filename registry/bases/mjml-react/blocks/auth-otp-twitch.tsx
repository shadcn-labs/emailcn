// MJML parity block — mirrored from react-email (auth-otp-twitch.tsx)
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
import { twitchTheme } from "@/registry/themes/twitch";

import { getLayoutTokens } from "../lib/get-layout-tokens";
type Props = Record<string, never>;

export const AuthOtpTwitch = (_props: Props) => {
  const theme = twitchTheme;
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
                MJML parity placeholder for auth-otp-twitch.tsx — replace with
                full markup.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

AuthOtpTwitch.PreviewProps = {} satisfies Props;
