// MJML parity block — mirrored from react-email (receipt-apple.tsx)
import { MjmlColumn, MjmlSection, MjmlText } from "@faire/mjml-react";

import { MjmlEmailDocument } from "@/registry/bases/mjml-react/lib/document";
import { resolveEmailTheme } from "@/registry/lib/resolve-theme";
import { theme as defaultTheme } from "@/registry/themes/default";
import { mergeEmailThemes } from "@/registry/themes/merge";

interface Props {}

export const ReceiptApple = (_props: Props) => {
  const theme = mergeEmailThemes(defaultTheme, {
    theme: {
      extend: {
        colors: {
          background: {
            muted: "#f5f5f7",
          },
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
            MJML parity placeholder for receipt-apple.tsx — replace with full
            markup.
          </MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </MjmlEmailDocument>
  );
};

ReceiptApple.PreviewProps = {} satisfies Props;
export default ReceiptApple;
