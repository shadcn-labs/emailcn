// MJML parity block — mirrored from react-email (notification-airbnb.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as airbnbTheme } from "@/registry/themes/airbnb";

interface Props {}

export const NotificationAirbnb = (_props: Props) => {
  const theme = airbnbTheme;
  const t = resolveEmailTheme(theme);
  return (
    <MjmlEmailDocument preview="Email preview" theme={theme}>
      <MjmlSection padding={`${t.spacing.xl ?? "24px"} 0`}>
        <MjmlColumn>
          <MjmlText color={t.colors.foreground} fontFamily={t.fontFamily.sans}>
            MJML parity placeholder for notification-airbnb.tsx — replace with
            full markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

NotificationAirbnb.PreviewProps = {} satisfies Props;
export default NotificationAirbnb;
