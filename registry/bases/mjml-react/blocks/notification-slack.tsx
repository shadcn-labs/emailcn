// MJML parity block — mirrored from react-email (notification-slack.tsx)
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
import { slackTheme } from "@/registry/themes/slack";

import { getLayoutTokens } from "../lib/get-layout-tokens";
type Props = Record<string, never>;

export const NotificationSlack = (_props: Props) => {
  const theme = slackTheme;
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
                MJML parity placeholder for notification-slack.tsx — replace
                with full markup.
              </MjmlText>
            </MjmlColumn>
          </MjmlSection>
        </MjmlWrapper>
      </MjmlBody>
    </Mjml>
  );
};

NotificationSlack.PreviewProps = {} satisfies Props;
